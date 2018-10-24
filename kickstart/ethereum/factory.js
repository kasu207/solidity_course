import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x64e755BbD2Ce72d300219a02c685453FD0C07ac4'
);
export default instance;