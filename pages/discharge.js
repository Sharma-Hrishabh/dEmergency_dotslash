import React, { Component }from 'react';
import {Button, Icon, Container, Dimmer, Loader} from 'semantic-ui-react'
import Layout from '../common/Layout';
import Header from '../common/Header';
import { Link } from '../routes';
class Admin extends Component{

  state={
      patientAddress:'',
      open:false,
      loadingPage: true,
      loading: false
  };

    componentDidMount() {
        this.setState({loadingPage: false});
    }

    onSubmit = ()=>{
      var patientAddress = this.state.patient
      App.discharge(patientAddress);
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
                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 30}}>
                    <Link route="/addhospitals">
                        <Button
                            primary
                            size='big'
                            loading={false}
                        >
                            Discharge
                        </Button>
                    </Link>
                </div>
            </Layout>
        );
    }
};
export default Admin
