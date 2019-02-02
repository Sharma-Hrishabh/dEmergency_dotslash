const contract = require('truffle-contract');

const demergency_artifact = require('../build/contracts/dEmergency.json');
var dEmergency = contract(demergency_artifact);

module.exports = {

  // start: function() {
  //   var self = this;
  //
  //   // Bootstrap the MetaCoin abstraction for Use.
  //   dEmergency.setProvider(self.web3.currentProvider);
  //
  //   // Get the initial account balance so it can be displayed.
  //   self.web3.eth.getAccounts(function(err, accs) {
  //     if (err != null) {
  //       alert("There was an error fetching your accounts.");
  //       return;
  //     }
  //
  //     if (accs.length == 0) {
  //       alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
  //       return;
  //     }
  //     self.accounts = accs;
  //     self.account = self.accounts[0];
  //
  //     return (self.accounts);
  //   });
  // },

  initWeb3: async function() {
      if(typeof web3 !== undefined) {
          App.web3Provider = web3.currentProvider;
          web3.eth.defaultAccount = web3.eth.accounts[0];
      }
      else {
          alert("MetaMask not found! Working on localhost:7545.");
          App.web3Provider = new web3.providers.HttpProvider("http://localhost:7545");
      }

      web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  addHospital: function(account,hospital,location,mobileNumber,capacity,availability,speciality,callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    dEmergency.setProvider(self.web3.currentProvider);

    var meta;
    dEmergency.deployed().then(function(instance) {
      meta = instance;
      return meta.addHospital.send(hospital,location,mobileNumber,capacity,availability,speciality, {from: account});
    }).then(function(value) {
        //callback(value.valueOf());
    }).catch(function(e) {
        console.log(e);
        callback("Error 404");
    });
  },
  addPatient: function(location,mobileNumber,speciality,name, callback) {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    dEmergency.setProvider(self.web3.currentProvider);

    var meta;
    dEmergency.deployed().then(function(instance) {
      meta = instance;
      //return meta.sendCoin(receiver, amount, {from: sender});
      return meta.addPatient(patient,location,mobileNumber,speciality,name, {from: web3.eth.defaultAccount});
    }).then(function(result) {
              console.log("done");
          }).catch(function(e) {
      console.log(e);
      callback("ERROR 404");
    });
  }
}
