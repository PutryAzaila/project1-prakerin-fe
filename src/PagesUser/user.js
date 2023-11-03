import React from "react";
import Sidebar from "../Components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import $ from "jquery";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      id: "",
      username: "",
      email: "",
      password: "",
      token: "",
      action: "",
      keyword: "",
    };

    if (localStorage.getItem("token")) {
        this.state.token = localStorage.getItem("token");
      } else {
        window.alert("Anda harus login terlebih dahulu!");
        window.location = "/";
      }
      
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFile = (e) => {
    this.setState({
      foto: e.target.files[0],
    });
  };

  _handleFilter = () => {
    let data = {
        keyword: this.state.keyword,
    }
    let url = "http://localhost:8000/user/findUser"
    axios.post(url, data, this.headerConfig())
        .then(response => {
            if (response.status === 200) {
                this.setState({
                    user: response.data.data
                })
            } else {
                alert(response.data.message)
                this.setState({ message: response.data.message })

            }
        })
        .catch(error => {
            console.log("error", error.response.status)
        })
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

componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="flex flex-row min-h-screen bg-white text-black">
        <Sidebar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          
          <div className="main-content flex flex-col flex-grow p-4 z-0 pl-80">
            <h1 className="font-bold text-2xl text-black-700 ml-12 mb-4">Daftar User</h1>

            <div className=" mt-2 mr-4">
            <div className="flex rounded-full w-1/2 ml-12 mb-4">
                  <input
                    type="text"
                    className="w-3/6 block px-12 py-2 bg-white border rounded-full focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 relative"
                    placeholder="Search..."
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    onKeyUp={this._handleFilter}
                  />
                  <button
                    className="w-1/8 ml-4 py-2 text-black absolute"
                    onClick={this._handleFilter}
                  >
                    <FontAwesomeIcon icon={faSearch} color="black" />
                  </button>
                  </div>
            </div>

            <div className="flex flex-col mt-2 mr-4 ml-12">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-red-600">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                          >
                            Username
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                          >
                            Email
                          </th>
                          
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {this.state.user.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-center text-gray-900">
                                  {index + 1}
                                </div>
                              </td>
                             
                             
                              <td className="px-6 py-4 whitespace-nowrap">
                                
                                  <div className="text-sm text-center font-medium text-gray-900">
                                    {item.username}
                                  </div>
                               
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-center font-medium text-gray-900">
                                  {item.email}
                                </div>
                              </td>
                              
                            
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="footer px-4 py-2">
            <div class="footer-content">
              <p class="text-sm text-gray-600 text-center">
                © Brandname 2023. All rights reserved.{" "}
                <a href="https://instagram.com/fjhn.hra">by hantu</a>
              </p>
            </div>
          </footer>
        </main>

        
      </div>
    );
  }
}
