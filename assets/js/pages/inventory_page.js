import {
	create_element,
	render_icon
} from '../helpers.js';

let template = await create_element('section');
template.classList.add('property-list-page');
template.innerHTML = '<div class="container"></div>';

export async function render() {
	async function page_header() {
		let div = await create_element('div');
		div.classList.add('page-header', 'd-flex', 'align-items-center', 'mb-28');
		div.innerHTML = `
		<span class="back mr-12">${render_icon.chevron_left({width: 16, height: 16})}</span>
		<h3>Inventory</h3>
		`;
		
		div.querySelector('.back').addEventListener('click', (e) => {
			location.href = '/';
		});
		
		return div;
	}
	
	async function properties_list() {
		let div = await create_element('div');
		div.classList.add('list', 'mb-28');
		div.innerHTML = `
		<div class="list">
			<div class="properties-list-scroll">
				<a href="/inventory/id=" class="item">
					<div class="image" style="background-image: url(/assets/images/prd_1.jpg)"></div>
					<h3>
						<span>Keangnam Landmark 72</span>
						<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
					</h3>
				</a>
				<a href="/inventory/id=" class="item">
					<div class="image" style="background-image: url(/assets/images/prd_2.jpg)"></div>
					<h3>
						<span>Bitexco Financial Tower</span>
						<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
					</h3>
				</a>
				<a href="/inventory/id=" class="item">
					<div class="image" style="background-image: url(/assets/images/prd_2.jpg)"></div>
					<h3>
						<span>Bitexco Financial Tower</span>
						<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
					</h3>
				</a>
			</div>
		</div>
		`;
		
		return div;
	}
	
	async function tokens_list() {
		let div = await create_element('div');
		div.innerHTML = `
		<h2 class="mb-18">Tokens</h2>
		<div class="properties-list">
			<a class="item" href="/inventory/id=">
				<div class="image image-1" style="background-image: url(/assets/images/prd_1.jpg)"></div>
				<h3>
					<small>Keangnam Landmark 72</small>
					<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
				</h3>
				<div class="image image-2" style="background-image: url(/assets/images/prd_1.jpg)"></div>
			</a>
			<a class="item" href="/inventory/id=">
				<div class="image image-1" style="background-image: url(/assets/images/prd_2.jpg)"></div>
				<h3>
					<small>Bitexco Financial Tower</small>
					<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
				</h3>
				<div class="image image-2" style="background-image: url(/assets/images/prd_2.jpg)"></div>
			</a>
		</div>
		`;
		
		return div;
	}
	
	template.querySelector('.container').appendChild(await page_header());
	template.querySelector('.container').appendChild(await properties_list());
	template.querySelector('.container').appendChild(await tokens_list());
	
	return template;
}

export async function callback() {}