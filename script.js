let parallax_sections = document.querySelectorAll('.js-parallax-section');
for (let parallax_section of parallax_sections) {
	let _from = parallax_section.getAttribute("data-from") || '0px';
	let _to = parallax_section.getAttribute("data-to") || '100px';
	let instance = basicScroll.create({
		elem: parallax_section,
		from: 'top-top',
		to: 'bottom-bottom',
		direct: true,
		props: {
			'--ty': {
				from: _from,
				to: _to,
			},
			
			'--o': {
				from: "0",
				to: ".9",
			},

		}
	})

	let instancet = basicScroll.create({
		elem: parallax_section,
		from: 'bottom-bottom',
		to: 'top-top',
		direct: true,
		props: {
			

			'--ot': {
				from: ".5",
				to: "2",
			},

			'--y': {
				from: _from,
				to: _to,
			},
		}
	})

	let fixedo = basicScroll.create({
		elem: parallax_section,
		from: '450vh',
		to: '600vh',
		direct: true,
		props: {
			

			'--oth': {
				from: "0",
				to: "1",
			},

			'--ssth': {
				from: "0.8",
				to: "1",
			},

			//'--cy': {
			//	from: _from,
			//	to: _to,
			//},
		}
	})

	let fixedup = basicScroll.create({
		elem: parallax_section,
		from: '0',
		to: '100vh',
		direct: true,
		props: {
			

			'--fiup': {
				from: _from,
				to: _from,
			},

			//'--cy': {
			//	from: _from,
			//	to: _to,
			//},
		}
	})

	let aboutopac = basicScroll.create({
		elem: parallax_section,
		from: '0',
		to: '500vh',
		direct: true,
		props: {
			

			'--abop': {
				from: "1.5",
				to: "0",
			},

			'--abup': {
				from: _from,
				to: _to,
			},

			//'--cy': {
			//	from: _from,
			//	to: _to,
			//},
		}
	})

	let coloropac = basicScroll.create({
		elem: parallax_section,
		from: 'top-top',
		to: 'bottom-bottom',
		direct: true,
		props: {
			

			'--thecolor': {
				from: "1",
				to: "0",
			},

			//'--cy': {
			//	from: _from,
			//	to: _to,
			//},
		}
	})

	instance.start();
	instancet.start();
	fixedo.start();
	fixedup.start();
	aboutopac.start();
	coloropac.start();
}