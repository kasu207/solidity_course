import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x24042857BdEdA091Fb044b81817469bF420052A6'
);
export default instance;