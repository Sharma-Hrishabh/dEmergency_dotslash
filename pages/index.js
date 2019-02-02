import React, { Component }from 'react';
import { Button,Icon, Container,Dimmer, Loader } from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';

class Index extends Component{
    state={
        loadingPage: true,
        loading: false
    };
    componentDidMount() {

        this.setState({loadingPage: false});
    }
    onEmergency = () => {

        this.setState({loading: false})
    };

    render() {
        if(this.state.loadingPage){
            return(
                <Layout>
                <Dimmer active inverted>
                    <Loader size='massive'>Hang On...</Loader>
                </Dimmer>
                </Layout>
            );
        }
        return (
            <Layout>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 300 }}>
                    <Button
                        negative
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onEmergency}
                    > <Icon name='emergency'/>
                        Emergency
                    </Button>
                </div>
            </Layout>
        );
    }
};
export default Index