const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
  'hollow ramp mistake around fringe risk inject power chapter door barely ring',
  'https://rinkeby.infura.io/v3/816d3ae0c2c743a1ba5b96814bcb260d'
);

const web3 = new Web3(provider);

const instance = new web3.eth.Contract(
  JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'),
  '0x74ce9F68FfB783043f6Ca0CF6b8b9dB2fCa3b37C'
);

instance.setProvider(provider);

  getBalance = async function balance(address) {
        accounts = await web3.eth.getAccounts();
        const value = await instance.methods.balanceOf(address+'').call();
        console.log(value);

        const message = await instance.methods.totalSupply().call();
        console.log(message);

    };

  getToken = async function get(address, value) {
      accounts = await web3.eth.getAccounts();
      await instance.methods.transfer(address+'',value).send({
        from: accounts[0],
        gas: '1000000'
      });
      console.log('Valor Recebido!');
  };

  sendToken = async function send(address1, address2, value) {
      accounts = await web3.eth.getAccounts();
      await instance.methods.transferFrom(address1+'',address2+'',value).send({
        from: accounts[0],
        gas: '1000000'
      });
      console.log('Valor Enviado!');
  };

  //getBalance("0x8b2273135C22bCf12dC477bF610617C218da3b78");
  //getToken("0xcFA783BE594cbB82f66b001BFeA08bEb36fcca38",1000);
  //sendToken("0xcFA783BE594cbB82f66b001BFeA08bEb36fcca38","0x8b2273135C22bCf12dC477bF610617C218da3b78",10);