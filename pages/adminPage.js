import React, { Component }from 'react';
import { Button,Icon, Container } from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';

class Admin extends Component{
    componentDidMount() {

    }

    render() {
        return (
            <Layout>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        primary
                        size='big'
                        loading={false}
                    >
                        Add Hospitals
                    </Button>
                </div>
            </Layout>
        );
    }
};
export default Admin