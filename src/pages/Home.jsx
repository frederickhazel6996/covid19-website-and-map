import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import axios from 'axios';
import './pages.scss';

const Home = () => {
    const [covid, setcovid] = useState({
        total_cases: '',
        death_cases: '',
        recovery_cases: '',
        critical_condition_active_cases: '',
        currently_infected: ''
    });

    useEffect(() => {
        let url2 =
            'https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats';
        axios
            .get(url2, {
                headers: {}
            })
            .then(
                response => {
                    const {
                        total_cases,
                        death_cases,
                        recovery_cases,
                        critical_condition_active_cases,
                        currently_infected
                    } = response.data.data;
                    setcovid({
                        total_cases,
                        death_cases,
                        recovery_cases,
                        critical_condition_active_cases,
                        currently_infected
                    });

                    console.log(covid);
                },
                error => {
                    console.log(error);
                }
            );
    });

    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                        <div className="world-meter box">
                            <div className="text-center mt-3">
                                <i className="fas fa-globe-africa"></i> World
                                Meter
                            </div>

                            <div className="text-center mt-3">
                                {covid.total_cases}
                            </div>
                            <div className="text-center">Confirmed Cases</div>
                            <div className="text-center mt-3">
                                {covid.recovery_cases}
                            </div>
                            <div className="text-center">Recovered</div>
                            <div className="text-center mt-3">
                                {covid.critical_condition_active_cases}
                            </div>
                            <div className="text-center">Critical</div>
                            <div className="text-center mt-3">
                                {covid.death_cases}
                            </div>
                            <div className="text-center">Deceased</div>
                            <div className="text-center mt-3">
                                {covid.currently_infected}
                            </div>
                            <div className="text-center mb-5">Active</div>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
