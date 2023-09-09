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
			location.href = '/';
		});
		
		return div;
	}
	
	async function detail() {
		let div = await create_element('div');
		div.classList.add('detail');
		div.innerHTML = `
		<h1 class="mb-12">Keangnam Landmark 72</h1>
		<p class="mb-28">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</p>
		<div class="grid grid-2 grid-md-4 gap-14 mb-28">
			<div class="item grid">
				${render_icon.bed({width: 20, height: 16, fill: '#fff'})}
				<b>Bedroom</b>
				<span>2</span>
			</div>
			<div class="item grid">
				${render_icon.bathtub({width: 16, height: 16, fill: '#fff'})}
				<b>Bathroom</b>
				<span>2</span>
			</div>
			<div class="item grid">
				${render_icon.car({width: 16, height: 16, fill: '#fff'})}
				<b>Parking</b>
			</div>
			<div class="item grid">
				${render_icon.command({width: 16, height: 16, fill: '#fff'})}
				<b>Token</b>
				<span>2</span>
			</div>
		</div>

		<footer class="d-flex">
			<span class="price">
				<img src="/assets/images/ethereum_eth_logo_colored.svg"> 0.68 ETH
			</span>
			<button class="btn btn-primary">Contiue</button>
		</footer>
		`;
		
		return div;
	}
	
	template.appendChild(await image());
	template.querySelector('.content').appendChild(await detail());
	
	return template;
}

export async function callback() {
	
}