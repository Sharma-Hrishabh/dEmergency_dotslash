import React, { Component }from 'react';
import { Button,Icon, Form, Container,Divider,Label } from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';

class Hospital extends Component{
    state = {
        address: '',
        lat: '',
        long: '',
        phone: '',
        capacity: '',
        avalibility: '',
        loading: false
    };
    componentDidMount() {

    }
    onSubmit = () => {
      this.setState({loading: true});

      console.log(this.state.phone)
    };

    render() {
        return (
            <Layout>
                <Container style={{padding:10}} >
                <Form >
                    <Form.Field >
                        <input type='text' focus="true" placeholder='Phone no' onChange={(e) => {this.setState({phone: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'  focus="true" placeholder='Address' onChange={(e) => {this.setState({address: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field>
                        <input type='text'focus="true" placeholder='Latitude' onChange={(e) => {this.setState({lat: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus="true" placeholder='Longitude' onChange={(e) => {this.setState({long: e.target.value})}}/>
                    </Form.Field>

                    <Form.Field >
                        <input type='text' focus="true" placeholder='Availability' onChange={(e) => {this.setState({avalibility: e.target.value})}}/>
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