import React, { Component } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import '../assets/css/loaders.css';
import '../assets/css/elements.css';

export class Footer extends Component {
    render() {
        return (
            <p>this is the footer</p>
        );
    }
}

export class Head extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <header>
                <Navbar light expand="md" className="header fixed-top">
                    <NavbarBrand href="/">Info</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    </Collapse>
                </Navbar>
                <div className="has-fixed-nav"></div>
            </header>
        );
    }
}

export class Sidebar extends Component{
    render(){
        return(
            <div>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
                <span><img src=""/> option</span><br/>
            </div>
        )
    }
}

export const Loader = (props) => (
    // console.log(props)
    /** Check loaders.css for sizes */
    <div className={`${props.size}`}><div className={`ld ld-ring ld-spin ${props.color || ''}   ${props.position}`}></div></div>
)

//Buttons
//Modals
//Cards
//Inputs
//Basically all elements of your app