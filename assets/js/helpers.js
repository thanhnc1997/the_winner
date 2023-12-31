export function create_element(e) {
	let div = document.createElement(e);
	return div;
}

export async function loader() {
  let div = create_element('div');
  div.classList.add('lds-ring');
  div.innerHTML = `
  <div></div>
  <div></div>
  <div></div>
  `;
  document.body.appendChild(div);
}

export const render_icon = {
	wallet(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 7V11.8002C1 12.9203 1 13.4801 1.21799 13.9079C1.40973 14.2842 1.71547 14.5905 2.0918 14.7822C2.5192 15 3.07899 15 4.19691 15H15.8031C16.921 15 17.48 15 17.9074 14.7822C18.2837 14.5905 18.5905 14.2842 18.7822 13.9079C19 13.4805 19 12.9215 19 11.8036V7M1 7V5M1 7H19M1 5V4.2002C1 3.08009 1 2.51962 1.21799 2.0918C1.40973 1.71547 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.4796 1 17.9074 1.21799C18.2837 1.40973 18.5905 1.71547 18.7822 2.0918C19 2.5192 19 3.07899 19 4.19691V5M1 5H19M5 11H9M19 7V5" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	marketplace(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.89761 15.1618C8.28247 16.3099 10.0607 17 12.0001 17C16.4184 17 20.0001 13.4183 20.0001 9C20.0001 8.43095 19.9407 7.87578 19.8278 7.34036M6.89761 15.1618C5.12756 13.6944 4.00014 11.4789 4.00014 9C4.00014 4.58172 7.58186 1 12.0001 1C15.8494 1 19.0637 3.71853 19.8278 7.34036M6.89761 15.1618C8.85314 14.7147 11.1796 13.7828 13.526 12.4281C16.2564 10.8517 18.4773 9.01248 19.8278 7.34036M6.89761 15.1618C4.46844 15.7171 2.61159 15.5243 1.99965 14.4644C1.36934 13.3726 2.19631 11.5969 3.99999 9.70898M19.8278 7.34036C21.0796 5.79041 21.5836 4.38405 21.0522 3.46374C20.5134 2.53051 19.0095 2.26939 16.9997 2.59929" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	layer(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 11L10 17L1 11M19 7L10 13L1 7L10 1L19 7Z" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	building(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 17H3M3 17H11M3 17V4.2002C3 3.08009 3 2.51962 3.21799 2.0918C3.40973 1.71547 3.71547 1.40973 4.0918 1.21799C4.51962 1 5.08009 1 6.2002 1H7.8002C8.9203 1 9.48006 1 9.90788 1.21799C10.2842 1.40973 10.5905 1.71547 10.7822 2.0918C11 2.5192 11 3.07899 11 4.19691V7.24609M11 17H19M11 17V7.24609M19 17H21M19 17V11.3682C19 10.843 19 10.5799 18.937 10.335C18.8812 10.1178 18.7889 9.91184 18.6647 9.72518C18.5245 9.51456 18.3295 9.33881 17.9387 8.9877L15.6387 6.92139C14.8827 6.2422 14.5045 5.90275 14.0771 5.77393C13.7007 5.66045 13.299 5.66045 12.9226 5.77393C12.4953 5.90273 12.1173 6.24235 11.3614 6.92139L11 7.24609" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	command(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 13V16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13H7ZM7 13H13M7 13V7M13 13V16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13H13ZM13 13V7M13 7H7M13 7V4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7H13ZM7 7V4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7H7Z" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	target(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1Z" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linejoin="round"/>
		<path d="M9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6Z" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`;
	},
	bed(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.8 8.2H3.40002V3C3.40161 2.47005 3.61283 1.96226 3.98756 1.58753C4.36229 1.2128 4.87008 1.00158 5.40002 1H17.4C17.93 1.00158 18.4378 1.2128 18.8125 1.58753C19.1872 1.96226 19.3984 2.47005 19.4 3V8.2H17.8Z" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M1 17V11.4C1.00251 10.552 1.34045 9.73955 1.94003 9.13998C2.5396 8.5404 3.35208 8.20246 4.2 8.19995H18.6C19.4479 8.20246 20.2604 8.5404 20.86 9.13998C21.4595 9.73955 21.7975 10.552 21.8 11.4V17" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M1 17V16.6C1.00092 16.282 1.12765 15.9774 1.35249 15.7525C1.57734 15.5277 1.88202 15.4009 2.2 15.4H20.6C20.918 15.4009 21.2227 15.5277 21.4475 15.7525C21.6724 15.9774 21.7991 16.282 21.8 16.6V17" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4.19995 8.20005V7.40005C4.20114 6.97607 4.37009 6.56979 4.66989 6.26999C4.96969 5.97019 5.37597 5.80124 5.79995 5.80005H9.79995C10.2239 5.80124 10.6302 5.97019 10.93 6.26999C11.2298 6.56979 11.3988 6.97607 11.4 7.40005V8.20005" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11.4 8.20005V7.40005C11.4012 6.97607 11.5702 6.56979 11.87 6.26999C12.1698 5.97019 12.576 5.80124 13 5.80005H17C17.424 5.80124 17.8303 5.97019 18.1301 6.26999C18.4299 6.56979 18.5988 6.97607 18.6 7.40005V8.20005" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
		`;
	},
	car(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.27498 12.3001C5.06198 12.3001 5.69998 11.6621 5.69998 10.8751C5.69998 10.0881 5.06198 9.45007 4.27498 9.45007C3.48797 9.45007 2.84998 10.0881 2.84998 10.8751C2.84998 11.6621 3.48797 12.3001 4.27498 12.3001Z" fill="white"/>
		<path d="M14.725 12.3001C15.5121 12.3001 16.15 11.6621 16.15 10.8751C16.15 10.0881 15.5121 9.45007 14.725 9.45007C13.938 9.45007 13.3 10.0881 13.3 10.8751C13.3 11.6621 13.938 12.3001 14.725 12.3001Z" fill="${params.fill || '#000'}" />
		<path d="M17.8334 6.74823L16.5338 2.84848C16.3453 2.28083 15.9827 1.78704 15.4975 1.43726C15.0123 1.08747 14.4292 0.899494 13.831 0.900026H5.16895C4.57082 0.899494 3.98773 1.08747 3.50254 1.43726C3.01735 1.78704 2.65473 2.28083 2.4662 2.84848L1.1666 6.74823C0.821382 6.89308 0.526563 7.13655 0.319053 7.44815C0.111542 7.75976 0.000559635 8.12565 0 8.50003V13.25C0 13.9654 0.40185 14.5819 0.98705 14.9059C0.9747 14.9686 0.95 15.0256 0.95 15.0911V17.05C0.95 17.302 1.05009 17.5436 1.22825 17.7218C1.40641 17.8999 1.64804 18 1.9 18H2.85C3.10196 18 3.34359 17.8999 3.52175 17.7218C3.69991 17.5436 3.8 17.302 3.8 17.05V15.15H15.2V17.05C15.2 17.302 15.3001 17.5436 15.4782 17.7218C15.6564 17.8999 15.898 18 16.15 18H17.1C17.352 18 17.5936 17.8999 17.7718 17.7218C17.9499 17.5436 18.05 17.302 18.05 17.05V15.0911C18.05 15.0256 18.0253 14.9676 18.013 14.9059C18.3107 14.7436 18.5594 14.5043 18.733 14.213C18.9066 13.9217 18.9988 13.5891 19 13.25V8.50003C19 7.71248 18.5174 7.03608 17.8334 6.74823ZM1.9 13.25V8.50003H17.1L17.1019 13.25H1.9ZM5.16895 2.80003H13.8301C14.2396 2.80003 14.6024 3.06033 14.7316 3.44983L15.7824 6.60003H3.21765L4.2674 3.44983C4.33043 3.26058 4.45143 3.09598 4.61325 2.97935C4.77506 2.86272 4.96948 2.79998 5.16895 2.80003Z" fill="${params.fill || '#000'}" />
		</svg>
		`;
	},
	bathtub(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.6138 7.36666H15.3299V1.75667C15.3299 1.29078 15.1445 0.843964 14.8145 0.514526C14.4845 0.185088 14.037 1.19059e-05 13.5703 1.19059e-05H12.1512C11.9721 -0.00073782 11.7946 0.0339278 11.629 0.102008C11.4633 0.170089 11.3129 0.270237 11.1862 0.396674C11.0596 0.523111 10.9592 0.673334 10.891 0.838674C10.8228 1.00402 10.7881 1.1812 10.7889 1.36001V1.77934C10.3027 1.90465 9.87187 2.1873 9.56375 2.58308C9.25563 2.97885 9.08761 3.46542 9.08598 3.96667V4.53333C9.08598 4.68362 9.14578 4.82776 9.25223 4.93403C9.35869 5.0403 9.50307 5.1 9.65361 5.1H13.0594C13.21 5.1 13.3543 5.0403 13.4608 4.93403C13.5672 4.82776 13.627 4.68362 13.627 4.53333V3.96667C13.6254 3.46542 13.4574 2.97885 13.1493 2.58308C12.8411 2.1873 12.4103 1.90465 11.9241 1.77934V1.36001C11.9241 1.29989 11.9481 1.24224 11.9906 1.19973C12.0332 1.15722 12.091 1.13334 12.1512 1.13334H13.5703C13.7354 1.13482 13.8934 1.20097 14.0102 1.31755C14.1269 1.43412 14.1932 1.59181 14.1947 1.75667V7.36666H1.42294C1.12483 7.36465 0.83372 7.45679 0.59123 7.62991C0.34874 7.80303 0.167292 8.04826 0.0728301 8.33053C-0.0216316 8.61281 -0.0242693 8.91767 0.0652943 9.20153C0.154858 9.48539 0.332036 9.73371 0.571494 9.91098V11.611C0.573989 12.3793 0.814178 13.1281 1.25921 13.7549C1.70424 14.3818 2.33238 14.8561 3.05772 15.113L2.37089 16.1216C2.28873 16.2466 2.25934 16.3988 2.28911 16.5453C2.31888 16.6918 2.40539 16.8205 2.52983 16.9036C2.62124 16.9675 2.73043 17.0012 2.84202 17C2.93552 16.9995 3.02744 16.976 3.10963 16.9315C3.19183 16.887 3.26174 16.8229 3.31316 16.745L4.28381 15.3H12.7529L13.7235 16.745C13.775 16.8229 13.8449 16.887 13.9271 16.9315C14.0093 16.976 14.1012 16.9995 14.1947 17C14.3063 17.0012 14.4155 16.9675 14.5069 16.9036C14.6313 16.8205 14.7178 16.6918 14.7476 16.5453C14.7774 16.3988 14.748 16.2466 14.6658 16.1216L13.979 15.0846C14.7043 14.8278 15.3325 14.3535 15.7775 13.7266C16.2225 13.0998 16.4627 12.351 16.4652 11.5826V9.88265C16.6932 9.70205 16.8597 9.45559 16.9422 9.17694C17.0246 8.89829 17.0188 8.60104 16.9256 8.32578C16.8325 8.05053 16.6565 7.81069 16.4217 7.63902C16.1869 7.46736 15.9047 7.37224 15.6138 7.36666ZM12.4918 3.96667H10.2212C10.2212 3.66609 10.3409 3.37782 10.5538 3.16528C10.7667 2.95274 11.0554 2.83334 11.3565 2.83334C11.6576 2.83334 11.9464 2.95274 12.1593 3.16528C12.3722 3.37782 12.4918 3.66609 12.4918 3.96667ZM1.42294 8.49999H15.6138C15.689 8.49999 15.7612 8.52984 15.8144 8.58297C15.8677 8.63611 15.8976 8.70818 15.8976 8.78332C15.8976 8.85847 15.8677 8.93053 15.8144 8.98367C15.7612 9.0368 15.689 9.06665 15.6138 9.06665H1.42294C1.34767 9.06665 1.27548 9.0368 1.22225 8.98367C1.16903 8.93053 1.13913 8.85847 1.13913 8.78332C1.13913 8.70818 1.16903 8.63611 1.22225 8.58297C1.27548 8.52984 1.34767 8.49999 1.42294 8.49999ZM15.3299 11.5826C15.3284 12.2675 15.0552 12.9239 14.5702 13.4082C14.0851 13.8924 13.4276 14.1651 12.7415 14.1666H4.29516C3.60914 14.1651 2.95164 13.8924 2.46654 13.4082C1.98145 12.9239 1.70826 12.2675 1.70676 11.5826V10.2H15.3299V11.5826Z" fill="${params.fill || '#000'}"/>
		</svg>
		`;
	},
	chevron_left(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 6 11"  fill ="none"fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 9.5L1 5.5L5 1.5" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
	},
	chevron_right(params) {
		return `
		<svg width="${params.width || '0'}" height="${params.height || '0'}" viewBox="0 0 7 11" fill ="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.5 1.5L5.5 5.5L1.5 9.5" stroke="${params.fill || '#000'}" stroke-width="${params.stroke_width || '1.5'}" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
	}
}

export async function remove_loader() {
	if (document.querySelector('.lds-ring')) {
		document.querySelector('.lds-ring').remove();
	}
	
	if (document.querySelector('.lazy-load')) {
		document.querySelector('.lazy-load').remove();
	}
}

export async function set_local_storage(params) {
	let {name, value, callback} = params;
	localStorage.setItem(name, JSON.stringify(value));
	if (callback) await callback();
}

export async function get_local_storage(params) {
	let {name, callback} = params;
	if (localStorage.getItem(name)) {
		if (callback) await callback();
		return JSON.parse(localStorage.getItem(name));
	}
}



// METAMASK

export const METAMASK = {
	async connect({ start_connect }) {
		let accounts = await window.ethereum.request({ method: 'eth_accounts' });
		if (!accounts.length) {
			if (!start_connect) return;
			try {
				accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
			} catch (e) {
				return;
			}
		}
		if (localStorage.getItem('wallet') != accounts[0]) {
			localStorage.setItem('wallet', accounts[0]);
		}
		return true;
	},
	async get_number_token_minted() {
		try {
			
			const minted = await window.NFT.getCounter();
			console.log(window.ethers.toNumber(minted));
			return window.ethers.toNumber(minted);
		} catch (e) {
			console.log(e)
			return 0;
		}
	}
}