// const { Module } = require("module");

const table=document.getElementById("bugtab")
let t=""
t+="<thead><th>sno</th><th>name of bug</th><th>select</th></thead>"
for(let i=0;i<6;i++){
    
    t+="<tr>";
    t+="<td>"+(i+1)+"</td>";
    t+="<td> bug"+(i+1)+"</td>";
    t+='<td> <input type="checkbox" class="btn-check bug" id="bugcheck'+i+'"value="bug'+(i+1)+'" autocomplete="off"><label class="btn btn-outline-primary" for="bugcheck'+i+'"></label>'
    t+="</tr>";
}
table.innerHTML=t;
const table2=document.getElementById("featuretab")
let t2=""
t2+="<thead><th>sno</th><th>name of feature</th><th>select</th></thead>"
for(let i=0;i<6;i++){
    t2+="<tr>";
    t2+="<td>"+(i+1)+"</td>";
    t2+="<td> feature"+(i+1)+"</td>";
    t2+='<td> <input type="checkbox" class="btn-check feature" id="featurecheck'+i+'"value="feature'+(i+1)+'" autocomplete="off"><label class="btn btn-outline-primary" for="featurecheck'+i+'"></label>'
  
    t2+="</tr>";
}
table2.innerHTML=t2;

const bugsubmit=() => {
    let bugarr=[];
    let bugs=document.getElementsByClassName("bug");
    for(let i=0;bugs[i];i++){
        if(bugs[i].checked){
            bugarr.push(bugs[i].value);
        }
    }
    return bugarr;
}
const featuresubmit=() => {
    let featurearr=[];
    let features=document.getElementsByClassName("feature");
    for(let i=0;features[i];i++){
        if(features[i].checked){
            featurearr.push(features[i].value);
        }
    }
    //console.log(featurearr)
    return featurearr
}
// module.exports=featurearr;
// module.exports=bugarr;
let account;
const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        // document.getElementById("accountArea").innerHTML = `Account is: ${account}`;
        alert(`Account is: ${account}`)
    }
}
const connectContract = async () => {
    const ABI=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "accept_patch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_team",
                    "type": "string"
                },
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
            "name": "filefordownload",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get_ready_patches",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
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
                }
            ],
            "name": "getpatch",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofQC",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofteam1",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpatches_ofteam2",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
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
                    "name": "patchname",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "patchfile",
                    "type": "bytes"
                }
            ],
            "name": "getpatchfile",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getrejected_of_team1",
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
                            "internalType": "enum placeholder.Status",
                            "name": "status",
                            "type": "uint8"
                        }
                    ],
                    "internalType": "struct placeholder.patch[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "patchcount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "patchfiles",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "reject_patch",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "patch_name",
                    "type": "string"
                }
            ],
            "name": "verify",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    const address="0x740616D9FBf86D465065b807bfEa6d6b877C52D4";
    // port = utils.getWebsocketPort();
    // const _web3 = new Web3('http://localhost:7545');
    // const shadow = new _web3.eth.Contract(ABI,address);

    //     // Create a reconnect-enabled WS provider and set the default Web3 with it.
    //     const provider = new Web3.providers.WebsocketProvider(
    //         'ws://localhost:' + port,
    //         {
    //             reconnect: {
    //                 auto: true,
    //                 delay: 4000,
    //                 maxAttempts: 1
    //             }
    //         }
    //     );

    //     web3.setProvider(provider);

    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, address);
    alert('contractconnected')
}
const submit =async()=>{
    // console.log(document.getElementById("team").selected.value);
    console.log(document.getElementById("team").value);
    // console.log(document.getElementById("team").selected.value);
    await window.contract.methods.addpatch(document.getElementById("team").value,bugsubmit(),featuresubmit(),document.getElementById("Patchname").value).send({from:account});
   
}

const retrieve=async()=>{
    const x=await window.contract.methods.getpatchdetails(document.getElementById("retrieveId").value).call();
    console.log(x);
    document.getElementById("stuff").innerHTML = `bugs:${x[0]}<br>features:${x[1]}<br>status:${x[2]}`;
    //location.href="dev.html";
}























// const getPatches=async()=>{
//     const x=await window.contract.methods.getAllPatches().call();
//     console.log(x);
//     document.getElementById("allpatches").innerHTML = x;
// }
// let subscription = web3.eth.subscribe('logs',
// { address:'0xc36ea33f0Da765c4a0003f4D3e47ABa55034c916',
// topics:['0xfd2227fb6f28dcbea062bbced6842d846bb9dfeefa0dadee8a452c865aa84a2f']})
// .on()
// .on("data",function(log){
//     console.log(log);
// })