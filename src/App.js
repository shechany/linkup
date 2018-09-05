import React, {Component} from "react";
import  { ReactDOM } from 'react-dom';
import Login from "./components/Login";
import Register from "./components/register";
import {Col,Row,Container} from "reactstrap";
import Head from "./components/Head";
import Footer from "./components/Footer";

class App extends Component{
    
    constructor(props){
        super(props);
    
        this.state = {
          login:"true",
          register:"false",
          loggedin: true,          
        }
      }


    
      login(){
          this.setState({login: "true", register:"false"})    
    
        }
      register(){
        this.setState({login:"false", register:"true"});
      }
    render(){
        let inputs = null;
        if(this.state.login == "true" && this.state.register == "false"){
            inputs = <Login/>
          }else if(this.state.register == "true" && this.state.login == "false"){
            inputs = <Register/>
          }

          var mystyle ={
              border: "1px solid "
          }
        return(
            <div>
                <Container fluid={true} >
                  <Row>
                  <Head/>
                  </Row>
                  <br/>
                  <Row noGutters={false}>
                    <Col md={9} >
                    </Col>
                    <Col md={3}>
                    {inputs}
                <small onClick={this.login.bind(this)}>L o g i n</small> | <small onClick={this.register.bind(this)}>R e g i s t e r</small>
                <br/><br/>
                    </Col>
                  </Row>

                  
                </Container>
                
            </div>
                
        )
    }
}

export default App;
