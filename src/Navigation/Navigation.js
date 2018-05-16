import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";




let active;
class Navigation extends Component {
    
    constructor(props) {
        super();

        this.state = {
          showHideSidenav:active
        }; 
    }     

    toggleSidenav() {
        this.setState({"showHideSidenav":!this.state.showHideSidenav});
    }


    render() {       

        return (
            <div>
            <div className="nav-outer">
                <a  onClick={this.toggleSidenav.bind(this)}  href="javascript:void(0);" className="toggle"> <i class="fa fa-bars" aria-hidden="true"></i></a>
                <div  id="navbar" className={"navigation " + (this.state.showHideSidenav ? 'active': '')}>                   
                    <div className="container">
                    <a class="close-menu" href="javascript:void(0);" onClick={this.toggleSidenav.bind(this)}>
                        <i class="	fa fa-arrow-circle-left"></i>
                    </a>
                        <ul>
                        <li  onClick={this.toggleSidenav.bind(this)}> <NavLink exact   to={'PnrStatus'}>PNR Status</NavLink></li>
                        <li  onClick={this.toggleSidenav.bind(this)}> <NavLink to={'Traininfo'}>Train info</NavLink></li>
                        <li  onClick={this.toggleSidenav.bind(this)}> <NavLink to={'TrainRunning'}>Running Status</NavLink></li>
                        </ul>      
                    </div>
                </div>
                
            </div>
            {/* <div className="overlay"></div> */}
            </div>
        )
    }
}

export default Navigation;
