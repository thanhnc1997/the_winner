import {
	create_element
} from './helpers.js';

const pathname = location.pathname;
const main = document.querySelector('main');

async function init_app() {
	let app = await create_element('div');
	app.setAttribute('id', 'app');
	
	let render = {
		async welcome() {
			let block = await import('./pages/welcome_page.js');
			app.appendChild(await block.render());
			main.appendChild(app);
		},
		async home() {
			let block = await import('./pages/home_page.js');
			app.appendChild(await block.render());
			main.appendChild(app);
		},
		async property_detail() {
			let block = await import('./pages/property_detail_page.js');
			app.appendChild(await block.render());
			main.appendChild(app);
		},
		async inventory() {
			let block = await import('./pages/inventory_page.js');
			app.appendChild(await block.render());
			main.appendChild(app);
		},
		async inventory_detail() {
			let block = await import('./pages/inventory_detail_page.js');
			app.appendChild(await block.render());
			main.appendChild(app);
		}
	}
	
	if (pathname == '/') {
		// render.welcome();
		render.home();
	}
	
	if (pathname.includes('/pd=')) {
		render.property_detail();
	}
	
	if (pathname == '/inventory') render.inventory();
	
	if (pathname.includes('/inventory/id=')) {
		render.inventory_detail();
	}
}

init_app();