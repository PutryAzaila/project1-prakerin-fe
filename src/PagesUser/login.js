import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isModalOpen: false,
      logged: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    let url = "http://localhost:8000/user/login";
    axios
      .post(url, data)
      .then((response) => {
        this.setState({ logged: response.data.data.logged });
        if (response.status === 200) {
          let id = response.data.data.id;
          let token = response.data.data.token;
          let email = response.data.data.email;
          let username = response.data.data.username;
          localStorage.setItem("id", id);
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          localStorage.setItem("username", username);
          alert("Success Login");
          window.location.href = "/dashboard";
        } else {
          alert(response.data.message);
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => {
        console.log("error", error.response.status);
        if (error.response.status === 500 || error.response.status === 404) {
          window.alert("Failed to login RNO room");
        }
      });
  };

  render() {
    return (

<div className="flex flex-row min-h-screen bg-gray-300 " > 
            <div class="flex w-full max-w-sm mt-28 mx-auto overflow-hidden h-2/4 bg-white rounded-lg shadow-lg  lg:max-w-7xl ">
        <div
          class="hidden bg-cover lg:block lg:w-full h-[650px]"
          style={{
            backgroundImage:
              "url(/assets/telkomtowercrop.jpg)",
          }}
        />

        <div class="w-full px-6 py-32 md:px-8 lg:w-1/2">
          <form onSubmit={(e) => this.handleLogin(e)}>
            <div class="flex justify-center mx-auto">
              <span class="text-black font-bold text-lg mt-1 ml-2">
                RNO room
              </span>
            </div>

            <p class="mt-3 text-sm text-center text-black">
            Please log in to the RNO room
            </p>
 
            <div class="mt-4 pl-20">
              <label
                class="block mb-2 text-sm font-medium text-black"
                for="LoggingEmailAddress"
              >
                E-mail
              </label>
              <input
                class="block w-[400px]  px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="mt-4 pl-20">
              <div class="flex justify-between">
                <label
                  class="block mb-2 text-sm font-medium text-black"
                  for="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                class="block w-[400px]  px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>

            <div class="mt-6 pl-20">
              <button
                class="w-[400px] px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                type="submit"
              >
                Log In
              </button>
            </div>
            <p class="text-sm font-normal text-black text-center mt-3 ">
                          Don’t have an account yet? <a href="register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a>
            </p>

          </form>
        </div>
      </div>
      </div>
    );
  }
}
