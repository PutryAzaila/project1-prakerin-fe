import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import $ from "jquery";


export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            action: "",
            errorMessage: "", 
        }
    }

    handleClose = () => {
      $("#modal_user").hide();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    headerConfig = () => {
        let header = {
          headers: { Authorization: `Bearer ${this.state.token}` },
        };
        return header;
      };

    handleRegister = (e) => {
      e.preventDefault();

      
  
      let data = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
      };
  
      let url = "http://localhost:8000/user/addUser";
  
      axios.post(url, data)
          .then(response => {
            if (response.data.message === `Validation error`) {
              window.alert("email is already in use")
            } else {
              window.alert("Success add data")
              window.location.href = "/"
              this.getUser();
              this.handleClose();
              }
          })
          .catch(error => {
              if (error.response) {
                  if (error.response.status === 500) {
                      // Gagal terdaftar sebagai pelanggan
                      window.alert("Failed to add data");
                  
              }
            }
          });    
  }
  getUser = () => {
    let url = "http://localhost:8000/user/getAllUser";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({
          user: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
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
          <form onSubmit={(e) => this.handleRegister(e)}>
            <div class="flex justify-center mx-auto">
              <img
                class="w-auto h-7 sm:h-8"
                src="/assets/logoputih.png"
                alt=""
              />
              <span class="text-black font-bold text-lg mt-1 ml-2">
                Register to RNO room
              </span>
            </div>

            <p class="mt-3 text-sm text-center text-black">
            Silahkan Register
            </p>

            <div class="mt-4 pl-20">
              <label
                class="block mb-2 text-sm font-medium text-black" 
                for="username"
              >
                Username
              </label>
              <input
                class="block w-[400px]  px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="username"
                id="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </div>
 
            <div class="mt-4 pl-20">
              <label
                class="block mb-2 text-sm font-medium text-black" 
                for="email"
              >
                Email
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
              <label
                class="block mb-2 text-sm font-medium text-black" 
                for="password"
              >
                Password
              </label>
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
                Register
              </button>
              
            </div>
          </form>
        </div>
      </div>
      </div>
        );
    }
}
