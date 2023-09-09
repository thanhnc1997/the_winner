module.exports = {
  html() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <title>The winner</title>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
			<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon.svg">
			<link rel="stylesheet" href="/assets/css/main.css">
      <script>
        const NFT_CONTRACT = {
          address: '0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB',
          abi: [
            {
              "inputs": [],
              "name": "getCounter",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        };
      </script>
      <script type="module">
        import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.1/ethers.min.js"
        window.ethers = ethers;
        const provider = new window.ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        window.NFT = new window.ethers.Contract(NFT_CONTRACT.address, NFT_CONTRACT.abi, signer);
      </script>
      
      <script src="https://cdn.jsdelivr.net/npm/@metamask/sdk@0.6.1/dist/browser/umd/metamask-sdk.min.js"></script>
    </head>
    <body>
      <main id="app"></main>
      <script type="module" src="/assets/js/main.js" defer></script>
    </body>
    </html>
    `;
  }
}