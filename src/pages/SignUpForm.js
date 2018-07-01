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
            // username should be atleast 5 characters
            //  password should be min 8 letter password, with at least a symbol, upper and lower case letters and a number
            var passwordMatchingExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            if (this.state.email.length == 0 ||
                this.state.password.length == 0 ||
                this.state.name.length == 0) {
                window.confirm('Form is empty. Please fill the details');
            } else {
                if ((this.state.name.length > 5)) {
                        if (passwordMatchingExpression.test(this.state.password)) {
                            console.log('The form was submitted with the following data:');
                            console.log(this.state);
                            // TODO redirect to another page. 
                        } else {
                            window.confirm('Password should require atleast a symbol, upper case, lower case and a number of length 8.');
                        }
                    } else {
                        window.confirm('Username should be minimum 5 characters');
                    }
                }
            }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">User Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your user name" autoComplete="off" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
            
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" autoComplete="off" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button  mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">Already have account?</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;