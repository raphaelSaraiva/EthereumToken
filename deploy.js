const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'hollow ramp mistake around fringe risk inject power chapter door barely ring',
  'https://rinkeby.infura.io/v3/dec330e4d1ba403b9fb91184193c5bd1'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({ gas: '1000000', from: accounts[0] });

  
  console.log('Interface for Contract', interface);

  console.log('Contract deployed to', result.options.address);
};
deploy();