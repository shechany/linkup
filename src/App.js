import React, { Component } from "react";
import { ReactDOM } from 'react-dom';
// import Login from "./components/Login";
// import Register from "./components/register";

import { Loader, Sidebar } from './components/Elements'
import AuthenticationPage from './pages/AuthenticationPage';
import DashboardPage from './pages/DashboardPage';

import { Col, Row, Container } from "reactstrap";
// import Head from "./components/Head";
// import Footer from "./components/Footer";

class App extends Component {

	constructor(props) {
		super(props);

		// this.state = {
		// 	login: true,
		// 	register: "false",
		// 	loggedin: true,
		// }

		this.state = { currentPage: <Loader size="loader-md" position="loader-center" /> }
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
		// this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
	}

	handleLoginSubmit() {
		//Action is  performed when Login button is clicked or when form is submitted
		//make your ajax request and set state based on response
		this.setState(() => ({ currentPage: <DashboardPage /> }))
	}

	handleRegisterSubmit() {
		//Action is  performed when Register button is clicked or when form is submitted
		//make your ajax request and set state based on response
		this.setState(() => ({ currentView: <DashboardPage /> }))
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState(() => ({ currentPage: <AuthenticationPage onLoginTrigger={this.handleLoginSubmit} onRegTrigger={this.handleRegisterSubmit} /> }))
		}, 3000)
	}



	// login() {
	// 	this.setState({ login: "true", register: "false" })

	// }
	// register() {
	// 	this.setState({ login: "false", register: "true" });
	// }

	render() {
		// let inputs = null;

		// let inputs = this.state.login ? <Login /> : <Register />

		// if (this.state.login == "true" && this.state.register == "false") {
		// 	inputs = <Login />
		// } else if (this.state.register == "true" && this.state.login == "false") {
		// 	inputs = <Register />
		// }

		// var mystyle = {
		// 	border: "1px solid "
		// }
		return (this.state.currentPage
			// <div>
			// 	<Container fluid={true} >
			// 		<Row><Head /></Row>
			// 		<br />

			// 		<Row noGutters={false}>
			// 			<Col md={9}></Col>
			// 			<Col md={3}>
			// 				{/* {inputs} */}
			// 				{this.state.currentView}
			// 				{/* <small onClick={this.login.bind(this)}>L o g i n</small> | 
			// 				<small onClick={this.register.bind(this)}>R e g i s t e r</small> */}
			// 				<br /><br />
			// 			</Col>
			// 		</Row>
			// 	</Container>
			// </div>
		)
	}
}

export default App;
