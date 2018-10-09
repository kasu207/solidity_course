//Definition der Variablen - Standard!
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');  //capital because its a constructor function

//Provider für Ganache
const provider = ganache.provider();

//Instance of Web3
const web3 = new Web3(provider);

//zum deployen des Contracts wird der byteCode des Contracts benötigt
const {interface, bytecode } = require('../compile');

//Variable, die in beforeEach gemnutzt wird
let accounts;
let inbox;

//beforeEach
beforeEach(async () => {            //async is used cause of await
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();    // da wir hier eine variable definieren, muss sie vor dem beforeEach mit let definiert werden.
    //Use on of those accounts to deploy the contract --> Deshalb brauchen wir den byteCode vom Contract 
    inbox = await new web3.eth.Contract(JSON.parse(interface))  //neuer Contract
        .deploy({data: bytecode, arguments:['Hi there!'] })
        .send({from: accounts[0], gas: '1000000'}) //sendet Gas, damit der Contract dployed wird.
    
    inbox.setProvider(provider);

});

//describe
describe('Inbox', () => {
    it('Yeah contract could be deployed', () => {
        assert.ok(inbox.options.address); //Guckt, ob es eine Adresse gibt und wenn gibt es "ok" zurück
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();  //erster Set der Klammer "message()" --> Argumente, die möglicherweise benötigt werden, zweites Paar Klammern .call"()" spezifiert ein Objekt, wie die Argumente angefragt werden 
        assert.equal(message,'Hi there!');
    });
    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });  //send sendet Message ans Netzwerk
        const message = await inbox.methods.message().call();
        assert.equal(message,'bye');
    });
});