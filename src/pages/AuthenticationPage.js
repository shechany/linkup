import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import { Head } from "../components/Elements";
import { Login, Register } from "../components/Auth";


export default class AuthenticationPage extends Component {



    //Constructor
    constructor(props) {
        super(props);
        this.state = { currentView: null };
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleShowRegister = this.handleShowRegister.bind(this);
    }

    //Handles Login form submit 
    handleLogin(e , props) {
        e.preventDefault();
        console.log("Email: ", e.target.email.value);
        console.log("Passowrd: ", e.target.pass.value);
        //Ajax request to submit form

        //Next action to perform when form has been submited
        //In this case action is to show dashboard

        props.onLoginTrigger()
    }

    //Handles Registration form submit
    handleRegister(e , props) {
        e.preventDefault();
        console.log("Email: ", e.target.email.value);
        console.log("First name: ", e.target.firstname.value);
        console.log("Last name: ", e.target.lastname.value);
        console.log("Middle name: ", e.target.middlename.value);
        console.log("Password: ", e.target.pass.value);
        console.log("Confirm Pass: ", e.target.cpass.value);
        //Ajax request to submit form

        //Next action to perform when form has been submited
        //In this case action is to show dashboard
        props.onRegTrigger()
    }

    //Shows Login form
    handleShowLogin() {
        //Action is performed when Login Tab is clicked
        //(e) in onsubmit is the 'this' from the Login component and this.props are props from this component
        this.setState(() => ({ currentView: <Login onsubmit={(e) => this.handleLogin(e , this.props)} /> }));
    }

    //Shows Register form
    handleShowRegister() {
        //Action is performed when regiter tab is clicked
        //(e) in onsubmit is the 'this' from the Register component and this.props are props from this component
        this.setState(() => ({ currentView: <Register onsubmit={(e) => this.handleRegister(e , this.props)} /> }));
    }

    //On Component Mount show Login Form
    componentDidMount() {
        this.handleShowLogin();
    }

    render() {
        return (
            <section>
                <Head />
                <Container>
                    <Row>
                        <Col md={9}></Col>
                        <Col md={3}>
                            {this.state.currentView}
                            <a href="#?ui_display=login" onClick={this.handleShowLogin}>L o g i n</a> |
                            <a href="#?ui_display=register" onClick={this.handleShowRegister}>R e g i s t e r</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}