import React, { Component } from 'react';
import UserDetailsForm from './UserDetailsForm';
import UserPersonnalDetails from './UserPersonnalDetails';
import Confirm from './Confirm';


export default class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
        };
    }

    // go to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step+1})
    }

    // go to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step-1})
    }

    // handle field change
    handleChange =(input) => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const{step} = this.state;
        const{firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};

        switch(step){
            case 1:
                return <UserDetailsForm
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            case 2:
                return <UserPersonnalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                /> 
            case 3:
                return <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            case 4: 
                return <h1>Success</h1>
        

        }
    }
}
