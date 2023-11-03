import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
    };
    
    this.state.email = localStorage.getItem("email");
    this.state.username = localStorage.getItem("username");
  }

  logout = () => {
    if (window.confirm("Are you sure to logout?")) {
      window.location = "/";
        localStorage.clear()
        localStorage.removeItem("id")
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        this.setState({
            isLogin: false
        })
    }
}

  componentDidMount() {
  }

  render() {
    return (
      <aside class="sidebar w-80 fixed h-full transform z-10 -translate-x-full py-8 md:translate-x-0 transition-transform duration-150 ease-in bg-gray-200 border-x ">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex">
            <a href="#" class="inline-flex flex-row items-center">
              <span class="leading-10 text-black text-2xl font-bold ml-1 ">
                RNO room
              </span>
            </a>
          </div>
        </div>

        <div class="sidebar-content px-4 py-2 ml-4">
          <ul class="flex flex-col w-full">
            <li class="my-px py-3">
              <a
                href="/dashboard"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-black hover:bg-red-600 hover:text-white font-base"
              >
                <span class="mr-2 flex items-center justify-center text-lg text-black">
                  <FontAwesomeIcon icon={faHome} color="black" />
                </span>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li class="my-px py-3">
              <a
                href="/user"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-black hover:bg-red-600 hover:text-white font-base"
              >
                <span class="mr-3 flex items-center justify-center text-lg text-black">
                  <FontAwesomeIcon icon={faUser} color="black" />
                </span>
                <span class="ml-4">User</span>
              </a>
            </li>
            <li class="my-px py-3">
              <button
                onClick={() => this.logout()}
                class="flex flex-row items-center h-10 px-3 pr-40 rounded-lg text-black hover:bg-red-600 hover:text-white font-base"
              >
                <span class="mr-3 flex items-center justify-center text-lg text-black">
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </span>
                <span class="ml-2">
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}
