import React from "react";
import Sidebar from "../Components/Sidebar";
// import Header from "../Components/Header";

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      token: "",
      action: "",
    };

    // if (localStorage.getItem("token")) {
    //   if (
    //     localStorage.getItem("role") === "admin" ||
    //     localStorage.getItem("role") === "resepsionis"
    //   ) {
    //     this.state.token = localStorage.getItem("token");
    //     this.state.role = localStorage.getItem("role");
    //   } else {
    //     window.alert("You're not admin or resepsionis!");
    //     window.location = "/";
    //   }
    // }
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };


  // checkRole = () => {
  //   if (this.state.role !== "admin" && this.state.role !== "resepsionis") {
  //     localStorage.clear();
  //     window.alert("You're not admin or resepsionis!");
  //     window.location = "/";
  //   }
  // };

  componentDidMount() {
    // this.checkRole();
  }

  render() {
    return (
      <div class="flex flex-row min-h-screen bg-white text-white">
        <Sidebar />
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          {/* <Header /> */}
      
          <div
            className="container ml-32 flex flex-col items-center px-4 py-16 text-center md:py-72 md:px-10 lg:px-10 xl:max-w-full h-screen"
            style={{
              backgroundImage: `url('/assets/meeting.jpeg')`, // Menggunakan background-image untuk gambar latar belakang
              backgroundSize: 'cover', // Untuk menutupi seluruh area dengan gambar.
              
            }}
          >
            <div class="absolute inset-0 flex items-center justify-center bg-black/50">
              <div class="text-center ml-72">
              <h1 className="text-4xl font-bold leading sm:text-5xl">
                Welcome to RNO room
              </h1>
              <p className="px-8 mt-8 mb-12 text-lg">
              Our first project was during an internship at PT Telkom Regional V Surabaya
              </p>
              <div className="flex flex-wrap justify-center">
     
                <button className="px-8 py-3 m-2 text-lg border rounded text-white border-white">
                <a href="/user"> Let's see user</a>
              </button>
            
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
