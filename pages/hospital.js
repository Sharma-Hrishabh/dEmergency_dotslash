import React, { Component }from 'react';
import {Button, Icon, Form, Container, Divider, Label, Dimmer, Loader} from 'semantic-ui-react'
import Layout from '../common/Layout';
import App from '../connection/app';

class Hospital extends Component{
    state = {
        address: '',
        lat: '',
        long: '',
        phone: '',
        capacity: 0,
        availability: 0,
        loading: false,
        loadingPage: true,
        speciality:0,
    };
    componentDidMount() {
      const a = App.start();
      console.log(a);
      console.log("sacsd");
        this.setState({loadingPage: false});
    }
    onSubmit = () => {
      this.setState({loading: true});
      // console.log(this.state.phone)
      var address = this.state.address;
      var loc=this.state.lat+'x'+this.state.long;
      var phone =this.state.phone;
      var availability =this.state.availability;
      var capacity = this.state.capacity;
      var speciality = this.state.speciality;
      console.log(typeof address);
      App.addHospital(address,loc,phone,availability,capacity,speciality)
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
                        <input type='number' focus="true" placeholder='Availability' onChange={(e) => {this.setState({availability: e.target.value})}}/>
                    </Form.Field>
                    <Form.Field >
                        <input type='number' focus="true" placeholder='Capacity' onChange={(e) => {this.setState({capacity: e.target.value})}}/>
                    </Form.Field>
                    <Form.Field >
                        <input type='number' focus="true" placeholder='Speciality' onChange={(e) => {this.setState({capacity: e.target.value})}}/>
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
