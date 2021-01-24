import React from "react";

import { TitleContainer, SignUpContainer } from "./sign-up.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <TitleContainer>I do not have an account.</TitleContainer>
        <span>Signup with your email and password.</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            value={displayName}
            label="Username"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            value={password}
            label="Password"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
