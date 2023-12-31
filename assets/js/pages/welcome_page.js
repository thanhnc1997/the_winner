import {
	create_element,
	render_icon,
	METAMASK
} from '../helpers.js';

let template = create_element('section');
template.classList.add('welcome-page');

export async function render(_render) {
	template.innerHTML = `
	<div class="content">
		
	</div>
	`;
	
	async function bottom_panel() {
		let div = await create_element('div');
		div.classList.add('bottom-panel');
		div.innerHTML = `
		<h1>Perfect choice <br>for your future</h1>
		<p>Our properties is the masterpieces <br> for every client with lasting value</p>
		<div>
			<button id="connect-wallet" class="btn btn-primary">
				${render_icon.wallet({width: 18, height: 14, fill: '#000'})}
				<span class="ml-8">Connect wallet</span>
			</button>
			<button class="btn">
				<img src="/assets/images/metamask_icon.svg">
			</button>
		</div>
		`;
		
		return div;
	}
	
	template.querySelector('.content').appendChild(await bottom_panel());
	
	let connect = await METAMASK.connect({
		start_connect: false
	});
	if (connect) return _render.home();

	template.querySelector('#connect-wallet').addEventListener('click', async e => {
		e.preventDefault();
		let connect = await METAMASK.connect({
			start_connect: true
		});
		if (connect) return _render.home();
	});

	return template;
}

export async function callback() {}