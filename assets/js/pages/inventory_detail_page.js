import {
	create_element,
	render_icon
} from '../helpers.js';

let template = await create_element('section');
template.classList.add('property-detail-page');

export async function render() {
	async function image() {
		let div = await create_element('div');
		div.classList.add('content');
		div.style.cssText = 'background-image: url(/assets/images/prd_1.jpg)';
		div.innerHTML = `<span class="back">${render_icon.chevron_left({width: 16, height: 16, fill: '#fff'})}</span>`;
		
		div.querySelector('.back').addEventListener('click', (e) => {
			location.href = '/inventory';
		});
		
		return div;
	}
	
	async function status() {
		let div = await create_element('div');
		div.classList.add('status');
		div.innerHTML = `
		<div class="grid grid-2 grid-md-4 gap-14">
			<div class="item text-center">
				<b>6.8k Views</b>
			</div>
			<div class="item text-center">
				<b>02h 12m 12s</b>
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function detail() {
		let div = await create_element('div');
		div.classList.add('detail');
		div.innerHTML = `
		<h1 class="mb-12">Keangnam Landmark 72</h1>
		<p class="mb-28">
			1.200 items
		</p>

		<footer class="d-flex">
			<span class="price mr-12">
				<img src="/assets/images/ethereum_eth_logo_colored.svg"> 0.68 ETH
			</span>
			<div class="grid grid-2 gap-8" style="flex-grow: 1;">
				<button class="btn btn-light">Cancel</button>
				<button class="btn btn-primary" style="max-width: none;">Place bid</button>
			</div>
		</footer>
		`;
		
		return div;
	}
	
	template.appendChild(await image());
	template.querySelector('.content').appendChild(await status());
	template.querySelector('.content').appendChild(await detail());
	
	return template;
}

export async function callback() {
	
}