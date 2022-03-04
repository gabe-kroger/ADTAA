import React, { useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'; //we're connecting this component to redux
import { setAlert } from '../../actions/alert'; //we bring in this alert action, then pass it into connect() below;
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  //destructuring setAlert and pulling it from props
  //This is our form data stored in state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData; //Destructuring to save space in the future.

  //onChange function that uses our setter function (setFormData), then uses the spread operator to copy the destructured variables inside formData, then we want to change our name state to the value of the input.
  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //onSubmit function
  const onSubmit = async (event) => {
    event.preventDefault(); //always prevent default for submit functions.
    if (password !== password2) {
      //set an alert that says "passwords don't match" and pass in the setAlert props.
      setAlert('passwords need to match', 'danger'); // these are the msg and alertType parameters.
    } else {
      console.log('SUCCESS'); // the 'success' parameter changes css color to green
    }
  };

  //in the input section, we use the term 'required' to add client-side validation

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <div className="form-group">
          <input
            onChange={(event) => onChange(event)}
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(event) => onChange(event)}
            value={email}
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(event) => onChange(event)}
            value={password}
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={(event) => onChange(event)}
            value={password2}
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register); //we're exporting this component being connected in redux
