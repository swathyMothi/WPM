import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email.length <= 0 ||
            this.state.password.length <= 0 ||
            this.state.name.length <= 0) {
            window.confirm('One or all the fields in the form is empty. Please fill the details');
        } else {
            console.log('The form was submitted with the following data:');
            console.log(this.state);
        }
    }


    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">User Name</label>
                <input type="text" 
                pattern=".{5,}" 
                title = "Username should be minimum of 5 characters" 
                id="name" 
                className="FormField__Input" 
                placeholder="Enter your user name" 
                autoComplete="off" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange}
                required="true"  />
              </div>
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email Address</label>
                <input type="email" 
                id="email" 
                className="FormField__Input" 
                placeholder="Enter your email" 
                name="email" 
                autoComplete="off" 
                value={this.state.email} 
                onChange={this.handleChange}
                required="true"  />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password" >Password</label>
                <input type="password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                id="password"
                className="FormField__Input" 
                placeholder="Enter your password" 
                name="password" 
                value={this.state.password} 
                onChange={this.handleChange}
                required="true"  />
              </div>

              <div className="FormField">
                  <button className="FormField__Button  mr-20">Sign Up</button>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;