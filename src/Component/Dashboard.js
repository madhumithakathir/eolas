import React from 'react';

import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../img/logo.png"
import avatar from "../img/img_avatar2.png"
import Chart from "react-google-charts";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);

    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">DASHBOARD</a>
                    <a href="#">DEPARTMENTS</a>
                    <a href="#">CLIENTS</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">CONSUMERS</a>
                    <a href="#">INSIGHTS</a>
                </div>

                <div id="main">

                    <nav className="navbar navbar-expand-lg  navbar-light bg-light ">
                        <a className="navbar-brand" href="home.html">

                            <img src={logo} alt="logo" className="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="ml-auto">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <i className="fa fa-bell" aria-hidden="true"></i>
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </div>

                        </div>
                    </nav>

                    <span className="openNav" onClick={this.openNav}>&lt;</span>
                    <div className="container">
                        <div className="row">

                            <div className="col-sm-4 pro-col" >
                                <h3 className="dashBoard">Dashboard</h3>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        All Projects
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <div className=" project">
                                    <h4>Project Name</h4>

                                    <Chart
                                        width={'100%'}
                                        height={'100%'}
                                        chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={[
                                            ['Task', 'Hours per Day'],
                                            ['Work', 11],
                                            ['Eat', 2],
                                            ['Commute', 2],
                                            ['Watch TV', 2],
                                            ['Sleep', 7],
                                        ]}
                                        options={{
                                            title: 'My Daily Activities',
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />
                                </div>
                                <div className="  details">
                                    <h2>Marketing</h2><br />
                                    <p>CountryLocation <b>UK,Liverpool</b></p><br />
                                    <p>Department Owner <b>jessica</b></p><br />
                                    <p>Email <b>jessica@dove.com</b></p><br />
                                    <p> Phone <b>+44 20 7234 3456</b></p>
                                    <hr />
                                    <div>
                                        <span ><b>8</b>Clients</span>
                                        <span className="vl"><b>12</b>Projects</span>
                                        <span className="vl"><b>29</b>Surveys</span>
                                    </div>
                                </div>


                            </div>

                            <div className="col-sm-4" style={{ backgroundColor: "lightgray" }}>

                            </div>

                            <div className="col-sm-4 pro-col3">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <h5>Departments</h5>
                                        <a>Add a Department</a>
                                        <p className="count">12</p>
                                        <p>in Total</p>
                                    </div>
                                    <div className="col-md-6 vl">
                                        <h5>Clients</h5>
                                        <a>Add New Client</a>
                                        <p className="count">180</p>
                                        <p>in Total</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Consumers</h5>
                                        <a>Add a Comsumer</a>
                                        <p className="count">24</p>
                                        <p>Active</p>

                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <br />
                                        <p className="count">70</p>
                                        <p>in Total</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Surveys</h5>
                                        <a>Create a New Survey</a>
                                        <p className="count">65</p>
                                        <p>Active</p>
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <br />
                                        <p className="count">8</p>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5>Project Summary</h5>
                                        <a>Create a New Project</a>
                                        <p className="count">24</p>
                                        <p>Active</p>
                                    </div>
                                    <div className="col-md-6">
                                        <br />
                                        <br />
                                        <p className="count">8</p>
                                        <p>Drafts</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="count">2</p>
                                        <p>On Hold</p>
                                    </div>
                                    <div className="col-md-6">

                                        <p className="count">120</p>
                                        <p>Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        )
    }



}
export default Dashboard