import React,{Component} from 'react';
// import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
Container,Row,Col} from 'reactstrap';

class Head extends Component{
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
        <Navbar  light expand="md" className="header fixed-top">
          <NavbarBrand href="/">Info</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          </Collapse>
        </Navbar>
    );
  }
}

export default Head;
