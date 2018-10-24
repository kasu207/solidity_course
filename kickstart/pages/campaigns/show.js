import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import  {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        console.log(summary);

        console.log(props.query.address);

    return {
        address: props.query.address,
        minimumContribution: summary[0],
        balance: summary [1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]

    };
    }

    renderCards() {
        const {
            balance, 
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'Manager created thos campaign and can create requests to withdraw money for the project',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (in wei)',
                description: 'You have to contribute this amount to become a valid contributor',

            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract from contract. Requests must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'number of people who have already approved'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (in ether)',
                description: 'The balance how much money a campaign has left to spend'
            }

        ];

        return <Card.Group items={items} />
    }
    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}

                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address}></ContributeForm>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary> View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>

                    </Grid.Row>

                </Grid>   
            </Layout>
        
        );
    }
}

export default CampaignShow;