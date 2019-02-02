import React, { Component }from 'react';
import {Button, Icon, Container, Dimmer, Loader, TransitionablePortal, Header, Segment, Form} from 'semantic-ui-react'
import Layout from '../common/Layout';
import App from '../connection/app';
import {geolocated} from 'react-geolocated';
class Index extends Component{
    state={
        name: '',
        phone: '',
        open:false,
        loadingPage: true,
        loading: false
    };
    handleClose= () => {
        this.setState({open: false});
        this.setState({loading: false})
    };

    handleOpen = () => {
        this.setState({open: true});
        if(!this.props.isGeolocationAvailable){
            console.log("Your browser does not support Geolocation");
            return;
        }
        if(!this.props.isGeolocationEnabled){

        }
        console.log(this.props.coords.latitude);
        console.log(this.props.coords.longitude);
        this.setState({loading: false})
    };
    onReport = () => {


        this.setState({open: true});
    };

    componentDidMount() {
        const a = App.start();
        this.setState({loadingPage: false});
    }

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
                    <TransitionablePortal
                        open={this.state.open}
                        onOpen={this.handleOpen}
                        onClose={this.handleClose}
                        openOnTriggerClick
                        trigger={
                            <Button
                                negative
                                size='big'
                                loading={this.state.loading}
                                onClick={() => {this.setState({open: true})}}
                            > <Icon name='emergency'/>
                                Emergency
                            </Button>
                        }
                        >
                    <Segment style={{ left: '35%', width: 500,position: 'fixed', top: '30%', zIndex: 1000 }}>
                        <Header>Report an Emergency</Header>
                        <Form >
                            <Form.Field>
                                <input type='text' focus="true" placeholder='Full Name' onChange={(e) => {this.setState({name: e.target.value})}}/>
                            </Form.Field>
                            <Form.Field >
                                <input type='text' focus="true" placeholder='Phone Number' onChange={(e) => {this.setState({phone: e.target.value})}}/>
                            </Form.Field>
                            <Form.Field >
                                <input type='text' focus="true" placeholder='Speciality' onChange={(e) => {this.setState({speciality: e.target.value})}}/>
                            </Form.Field>
                            <Form.Field >
                            <Button
                                negative
                                loading={this.state.loading}
                                style={{ flex: 1, justifyContent: 'flex-end'}}
                                onClick={this.handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                loading={this.state.loading}
                                style={{ background: '#3fa53f', color:'#ffffff',flex: 1, justifyContent: 'flex-end'}}
                                onClick={this.onReport}
                            >
                                Report
                            </Button>
                            </Form.Field>
                        </Form>
                    </Segment>
                </TransitionablePortal>
                </div>
            </Layout>
        );
    }
};
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Index);
