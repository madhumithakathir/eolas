import React from "react";
import "../styles/signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../img/logo.png"
import login from "../img/login.png"


class Signin extends React.Component {



    render() {
        return (
            <div>
                <header>
                    <div className="row navbar" >
                        <a href="home.html">  <img src={logo} alt="logo" /></a>
                    </div>
                </header>
                <main>

                    <div className="row">

                        <div className="col-md-8 outter " >
                            <div className="login  ">
                                <h1>Welcome to Eolas International Portal</h1>
                                <p>Auditing product quality globally.</p>
                                <form>
                                    <input type="text" placeholder="Email" /><br />
                                    <input type="password" placeholder="Password" /><br />
                                    <button type="submit" className="login_button">Login</button>
                                </form>
                                <h6>Forgot Password?</h6>
                                <h6>Register for a New Account</h6>
                            </div>
                        </div>

                        <div className="col-md-4 side-img">
                            <img src={login} alt="" className="login_img" />

                        </div>
                    </div>

                </main>



            </div>
        )
    }



}
export default Signin