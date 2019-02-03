const contract = require('truffle-contract');

const demergency_artifact = require('../build/contracts/dEmergency.json');
var dEmergency = contract(demergency_artifact);

module.exports = {

  start: function() {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Get the initial account balance so it can be displayed.

    // var self = this;
    // web3Provider = null;
    // // Bootstrap the MetaCoin abstraction for Use.
    // dEmergency.setProvider(self.web3.currentProvider);
    //
    // if(typeof web3 !== undefined) {
    //     web3Provider = web3.currentProvider;
    //     web3.eth.defaultAccount = web3.eth.accounts[0];
    // }
    // else {
    //     alert("MetaMask not found! Working on localhost:7545.");
    //     web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
    // }
    //
    // web3 = new Web3(web3Provider);
    // // Get the initial account balance so it can be displayed.
    // self.web3.eth.getAccounts(function(err, accs) {
    //   if (err != null) {
    //     alert("There was an error fetching your accounts.");
    //     return;
    //   }
    //
    //   if (accs.length == 0) {
    //     alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
    //     return;
    //   }
    //   self.accounts = accs;
    //   self.account = self.accounts[0];
    //
    //   return (self.accounts);
    // });
    return 1;
  },


  addHospital: function(hospital,location,mobileNumber,capacity,availability,speciality) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Bootstrap the MetaCoin abstraction for Use.
    dEmergency.setProvider(web3.currentProvider);
    var meta;
    dEmergency.deployed().then(function(instance) {
      meta = instance;
      return meta.addHospital(hospital,location,mobileNumber,capacity,availability,speciality, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        console.log(e);
    });
  },

  addPatient: function(location,mobileNumber,speciality,name) {
    // var self = this;
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);

    // Bootstrap the MetaCoin abstraction for Use.
    dEmergency.setProvider(web3.currentProvider);

    var meta;
    dEmergency.deployed().then(function(instance) {
      meta = instance;
      //return meta.sendCoin(receiver, amount, {from: sender});
      return meta.addPatient(location,mobileNumber,speciality,name, {from: web3.eth.defaultAccount});
    }).then(function(result) {
              console.log(result);
              return result;
          }).catch(function(e) {
      console.log(e);
      // callback("ERROR 404");
      return e;
    });
  },
  discharge: function(patient) {
    if(typeof web3 !== undefined) {
        web3Provider = web3.currentProvider;
        web3.eth.defaultAccount = web3.eth.accounts[0];
        console.log("hii");
    }
    else {
        alert("MetaMask not found! Working on localhost:7545.");
        web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
        console.log("Hii");
    }

    web3 = new Web3(web3Provider);
    console.log(web3.eth.defaultAccount);
    // Bootstrap the MetaCoin abstraction for Use.
    dEmergency.setProvider(web3.currentProvider);
    var meta;
    dEmergency.deployed().then(function(instance) {
      meta = instance;
      return meta.discharge(patient, {from: web3.eth.defaultAccount});
    }).then(function(value) {
        //callback(value.valueOf());
        console.log(value);
    }).catch(function(e) {
        console.log(e);
    });
  },

}
