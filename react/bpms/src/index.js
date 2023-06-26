import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import contractContext from './Context';
import Web3 from 'web3'
const root = ReactDOM.createRoot(document.getElementById('root'));
const connectContract = async () => {
  const ABI=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Patches",
		"outputs": [
			{
				"internalType": "string",
				"name": "patchname",
				"type": "string"
			},
			{
				"internalType": "enum bpms.Status",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "enum bpms.Team",
				"name": "team",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "patchUploadTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "reason",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patchname",
				"type": "string"
			}
		],
		"name": "acceptPatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_bugs",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_features",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_patchname",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_team",
				"type": "uint8"
			}
		],
		"name": "addpatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patchname",
				"type": "string"
			}
		],
		"name": "getPatchDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "bugs",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "features",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "patchname",
						"type": "string"
					},
					{
						"internalType": "enum bpms.Status",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum bpms.Team",
						"name": "team",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "patchUploadTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "reason",
						"type": "string"
					}
				],
				"internalType": "struct bpms.patch",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPatches",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string[]",
						"name": "bugs",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "features",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "patchname",
						"type": "string"
					},
					{
						"internalType": "enum bpms.Status",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "enum bpms.Team",
						"name": "team",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "patchUploadTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "reason",
						"type": "string"
					}
				],
				"internalType": "struct bpms.patch[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patchname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			}
		],
		"name": "rejectPatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_patchname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_patchUplaodTime",
				"type": "string"
			}
		],
		"name": "uplaodPatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
  const address="0xb8BaC30a553bF1564D41B68C6d81EF3c857eDCf7";
  window.web3 = await new Web3(window.ethereum);
  let contractobj = await new window.web3.eth.Contract(ABI, address);
  
  root.render(
	<React.StrictMode>
    <contractContext.Provider value={{contract:contractobj}}>
    <App />
    </contractContext.Provider>
	</React.StrictMode>
);
}
connectContract();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
