import {
	create_element,
	render_icon
} from '../helpers.js';

let template = await create_element('section');
template.classList.add('home-page');
template.innerHTML = '<div class="container"></div>';

export async function render() {
	async function page_header() {
		let div = await create_element('div');
		div.classList.add('page-header');
		div.innerHTML = `
		<h3>What are you<br> looking for?</h3>
		<div class="profile">
			<p class="balance">
				<img src="/assets/images/ethereum_eth_logo.svg">
				<span>1.86 ETH</span>
			</p>
			<a class="avatar" href="/inventory" style="background-image: url(/assets/images/ava.png)"></a>
		</div>
		`;
		
		return div;
	}
	
	async function navigation() {
		let nav = await create_element('nav');
		nav.innerHTML = `
		<a href="#">
			<span class="icon">${render_icon.building({width: 16, height: 20})}</span>
			<b>Invest</b>
		</a>
		<a href="#">
			<span class="icon">${render_icon.layer({width: 18, height: 16})}</span>
			<b>Proposal</b>
		</a>
		<a href="#">
			<span class="icon">${render_icon.command({width: 18, height: 18})}</span>
			<b>Tokenize Property</b>
		</a>
		<a href="#">
			<span class="icon">${render_icon.marketplace({width: 20, height: 17})}</span>
			<b>Marketplace</b>
		</a>
		`;
		
		return nav;
	}
	
	async function properties_list() {
		let div = await create_element('div');
		div.classList.add('list');
		div.innerHTML = `
		<h2 class="mb-18">Properties for sale</h2>
		<div class="properties-list">
			<a class="item" href="/pd=">
				<div class="image" style="background-image: url(/assets/images/prd_1.jpg)"></div>
				<h3>
					<small>Keangnam Landmark 72</small>
					<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
				</h3>
			</a>
			<a class="item" href="/pd=">
				<div class="image" style="background-image: url(/assets/images/prd_2.jpg)"></div>
				<h3>
					<small>Bitexco Financial Tower</small>
					<span><img src="/assets/images/ethereum_eth_logo.svg"> 0.68 ETH</span>
				</h3>
			</a>
		</div>
		`;
		
		return div;
	}
	
	async function location() {
		let div = await create_element('div');
		div.classList.add('location');
		div.innerHTML = `
		<div class="container">
			<h3 class="d-flex align-items-center">
				${render_icon.target({width: 16, height: 16})} <span class="ml-6">Location</span>
			</h3>

			<select class="select">
				<option value="" selected>Ha Noi</option>
				<option value="">HCM City</option>
				<option value="">Da Nang</option>
				<option value="">Binh Duong</option>
				<option value="">Phu Quoc</option>
			</select>
		</div>
		`;
		
		return div;
	}
	
	template.querySelector('.container').appendChild(await page_header());
	template.querySelector('.container').appendChild(await navigation());
	template.querySelector('.container').appendChild(await properties_list());
	template.appendChild(await location());
	
	return template;
}

export async function callback() {}