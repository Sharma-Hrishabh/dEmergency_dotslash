<<<<<<< HEAD
import React, { Component }from 'react';
import {Button, Icon, Form, Container, Divider, Label, Dimmer, Loader} from 'semantic-ui-react'
=======
import React, { Component } from 'react';
import { Button,Icon, Form, Container,Divider,Label } from 'semantic-ui-react'
>>>>>>> front-end
import Layout from '../common/Layout';
import Header from '../common/Header';
import App from '../connection/app';
// import {start} from '../connection/app';
class Hospital extends Component{
    state = {
        address: '',
        lat: '',
        long: '',
        phone: '',
        capacity: '',
        avalibility: '',
        loading: false,
        loadingPage: true
    };
    componentDidMount() {
        
        this.setState({loadingPage: false});
    }
    onSubmit = () => {
      this.setState({loading: true});
      var acc = start();
      console.log(acc);
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
                <Container style={{padding:10}} >
                <Form >
                    <Form.Field >
                        <input type='text' focus placeholder='Phone no' onChange={(e) => {this.setState({phone: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'  focus placeholder='Address' onChange={(e) => {this.setState({address: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'focus placeholder='Latitude' onChange={(e) => {this.setState({lat: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus placeholder='Longitude' onChange={(e) => {this.setState({long: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus placeholder='Availability' onChange={(e) => {this.setState({avalibility: e.target.value})}}/>
                    </Form.Field>

                </Form>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                    <Button
                        primary
                        size='big'
                        loading={this.state.loading}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </Button>
                </div>
                </Container>
            </Layout>
        );
    }
};
export default Hospital
