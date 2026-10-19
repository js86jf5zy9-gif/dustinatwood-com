import React, { Component } from 'react';

// Each layer is a sheet of stars at a different depth. Deeper layers are
// smaller, dimmer, drift slower and move less when the page scrolls, which
// gives the parallax effect.
const LAYERS = [
	{ density: 0.00018, size: [ 0.3, 0.9 ], alpha: [ 0.25, 0.6 ], drift: 0.006, parallax: 0.08 },
	{ density: 0.00008, size: [ 0.7, 1.4 ], alpha: [ 0.45, 0.85 ], drift: 0.012, parallax: 0.2 },
	{ density: 0.00003, size: [ 1.2, 2.1 ], alpha: [ 0.7, 1 ], drift: 0.022, parallax: 0.4 }
];
const STAR_TINTS = [ '255,255,255', '200,220,255', '255,236,210', '190,240,255' ];
const POINTER_SHIFT = 18;
const SHOOTING_STAR_CHANCE = 0.0025;

const random = (min, max) => min + Math.random() * (max - min);

class Starfield extends Component {
	componentDidMount() {
		this.ctx = this.canvas.getContext('2d');
		this.reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		this.pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
		this.shootingStars = [];

		this.resize();
		window.addEventListener('resize', this.resize);
		window.addEventListener('pointermove', this.onPointerMove);
		document.addEventListener('visibilitychange', this.onVisibilityChange);

		if (this.reducedMotion) {
			this.draw(0);
		} else {
			this.frame = requestAnimationFrame(this.tick);
		}
	}

	componentWillUnmount() {
		cancelAnimationFrame(this.frame);
		window.removeEventListener('resize', this.resize);
		window.removeEventListener('pointermove', this.onPointerMove);
		document.removeEventListener('visibilitychange', this.onVisibilityChange);
	}

	resize = () => {
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width * dpr;
		this.canvas.height = this.height * dpr;
		this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		// Stars are spread over a field taller than the viewport so that
		// scrolling a long page never runs out of sky.
		const fieldHeight = this.height * 2;
		this.layers = LAYERS.map((layer) => {
			const count = Math.round(this.width * fieldHeight * layer.density);
			const stars = Array.from({ length: count }, () => ({
				x: Math.random() * this.width,
				y: Math.random() * fieldHeight,
				r: random(layer.size[0], layer.size[1]),
				alpha: random(layer.alpha[0], layer.alpha[1]),
				twinkleSpeed: random(0.0006, 0.0025),
				twinkleOffset: Math.random() * Math.PI * 2,
				tint: STAR_TINTS[Math.floor(Math.random() * STAR_TINTS.length)]
			}));
			return { ...layer, stars, fieldHeight };
		});

		if (this.reducedMotion) this.draw(0);
	};

	onPointerMove = (event) => {
		this.pointer.targetX = event.clientX / this.width - 0.5;
		this.pointer.targetY = event.clientY / this.height - 0.5;
	};

	onVisibilityChange = () => {
		cancelAnimationFrame(this.frame);
		if (!document.hidden && !this.reducedMotion) {
			this.last = undefined;
			this.frame = requestAnimationFrame(this.tick);
		}
	};

	tick = (time) => {
		const delta = this.last === undefined ? 16 : Math.min(time - this.last, 64);
		this.last = time;

		this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.04;
		this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.04;

		this.layers.forEach((layer) => {
			layer.stars.forEach((star) => {
				star.x -= layer.drift * delta;
				if (star.x < -2) star.x += this.width + 4;
			});
		});

		if (Math.random() < SHOOTING_STAR_CHANCE) this.spawnShootingStar();

		this.draw(time);
		this.frame = requestAnimationFrame(this.tick);
	};

	spawnShootingStar() {
		const angle = random(Math.PI * 0.15, Math.PI * 0.3);
		const speed = random(0.6, 1.1);
		this.shootingStars.push({
			x: random(this.width * 0.2, this.width),
			y: random(0, this.height * 0.4),
			vx: -Math.cos(angle) * speed,
			vy: Math.sin(angle) * speed,
			life: 0,
			ttl: random(600, 1100)
		});
	}

	draw(time) {
		const { ctx, width, height } = this;
		const scrollY = window.pageYOffset || 0;
		ctx.clearRect(0, 0, width, height);

		this.layers.forEach((layer, depth) => {
			const offsetX = this.pointer.x * POINTER_SHIFT * (depth + 1);
			const offsetY = this.pointer.y * POINTER_SHIFT * (depth + 1) - scrollY * layer.parallax;

			layer.stars.forEach((star) => {
				let y = (star.y + offsetY) % layer.fieldHeight;
				if (y < 0) y += layer.fieldHeight;
				if (y > height + 2) return;

				const x = star.x + offsetX;
				const twinkle = 0.65 + 0.35 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
				ctx.fillStyle = `rgba(${star.tint},${star.alpha * twinkle})`;
				ctx.beginPath();
				ctx.arc(x, y, star.r, 0, Math.PI * 2);
				ctx.fill();
			});
		});

		this.shootingStars = this.shootingStars.filter((s) => s.life < s.ttl);
		this.shootingStars.forEach((s) => {
			s.life += 16;
			s.x += s.vx * 16;
			s.y += s.vy * 16;
			const fade = 1 - s.life / s.ttl;
			const tail = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 90, s.y - s.vy * 90);
			tail.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
			tail.addColorStop(1, 'rgba(255,255,255,0)');
			ctx.strokeStyle = tail;
			ctx.lineWidth = 1.4;
			ctx.beginPath();
			ctx.moveTo(s.x, s.y);
			ctx.lineTo(s.x - s.vx * 90, s.y - s.vy * 90);
			ctx.stroke();
		});
	}

	render() {
		return (
			<div className="sky" aria-hidden="true">
				<div className="sky__nebula" />
				<canvas ref={(el) => (this.canvas = el)} className="sky__stars" />
			</div>
		);
	}
}

export default Starfield;
