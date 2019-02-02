import React, { Component }from 'react';
import { Button,Icon, Container } from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';

class Index extends Component{

    componentDidMount() {

    }

    render() {
        
        return (
            <Layout>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 300 }}>
                    <Button
                        negative
                        size='big'
                        loading={false}
                    >
                        Emergency
                    </Button>
                </div>
            </Layout>
        );
    }
};
export default Index