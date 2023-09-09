import {
	create_element
} from './helpers.js';

const pathname = location.pathname;

const draw = async (blocks) => {
	let app = document.getElementById('app');
	app.innerHTML = '';
	for (const block of blocks) {
		const _block = await block;
		if(_block )app.appendChild(_block);
	}
}

const render = {
	async welcome() {
		await draw([
			(await import('./pages/welcome_page.js')).render(this),
		]);
	},
	async home() {
		await draw([
			(await import('./pages/home_page.js')).render(this),
		]);
	},
	async property_detail() {
		await draw([
			(await import('./pages/property_detail_page.js')).render(this),
		]);
	},
	async inventory() {
		await draw([
			(await import('./pages/inventory_page.js')).render(this),
		]);
	},
	async inventory_detail() {
		await draw([
			(await import('./pages/inventory_detail_page.js')).render(this),
		]);
	}
}

render.welcome();