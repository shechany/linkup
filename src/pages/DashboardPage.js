import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import { Head, Loader } from "../components/Elements";
import '../assets/css/dashboard.css';


export default class AuthenticationPage extends Component {
    
    //Constructor
    constructor(props) {
        super(props);
        this.state = {
            col_1: <Loader size="loader-md" position="loader-center-parent" />,
            col_2: <Loader size="loader-md" position="loader-center-parent" />,
            col_3: <Loader size="loader-md" position="loader-center-parent" />,
        };

        this.updateCol1 = this.updateCol1.bind(this)
        this.updateCol2 = this.updateCol2.bind(this)
        this.updateCol3 = this.updateCol3.bind(this)
    }

    //Update Col 1
    updateCol1() {
        this.setState(() => ({ col_1: "Col1" }))
    }

    //Update Col 2
    updateCol2() {
        this.setState(() => ({ col_2: "Col2" }))
    }

    //Update Col 3
    updateCol3() {
        this.setState(() => ({ col_3: "Col3" }))
    }

    render() {
        return (
            <section>
                <Head />
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="card-col">{this.state.col_1}</div>
                            <button className="btn" type="button" onClick={this.updateCol1}>Change Column 1 state</button>
                        </Col>
                        <Col md={4}>
                            <div className="card-col">{this.state.col_2}</div>
                            <button className="btn" type="button" onClick={this.updateCol2}>Change Column 2 state</button>
                        </Col>
                        <Col md={4}>
                            <div className="card-col">{this.state.col_3}</div>
                            <button className="btn" type="button" onClick={this.updateCol3}>Change Column 3 state</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}