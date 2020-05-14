import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import axios from 'axios';
import './pages.scss';
import MapChart from '../components/chart/gchart';
import ReactTooltip from 'react-tooltip';
import RPT from 'prop-types';

import './pages.scss';
const Ghana = () => {
    const [content, setContent] = useState('');
    let data = [
        { ADM1_NAME: 'Northern', value: 19 + 2 + 0, id: 0 },
        { ADM1_NAME: 'Eastern', value: 99, id: 1 },
        { ADM1_NAME: 'Greater Accra', value: 4147, id: 2 },
        { ADM1_NAME: 'Central', value: 192, id: 3 },
        { ADM1_NAME: 'Western', value: 61 + 56, id: 4 },
        { ADM1_NAME: 'Ashanti', value: 726, id: 5 },
        { ADM1_NAME: 'Volta', value: 34 + 24, id: 6 },
        { ADM1_NAME: 'Brong Ahafo', value: 1 + 0, id: 7 },
        { ADM1_NAME: 'Upper West', value: 21, id: 8 },
        { ADM1_NAME: 'Upper East', value: 26 + 2, id: 9 }
    ];

    let ghana_data = data.map(ghana => (
        <Row key={ghana.id}>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="mt-2 text-center">{ghana.ADM1_NAME}</div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="mt-2 text-center">
                    {ghana.value
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
            </Col>
        </Row>
    ));
    return (
        <div>
            <Navbar />
            <Container fluid className="covid-map">
                <div className="ghana-page">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            {' '}
                            <div className="ghana-box">
                                <Container>
                                    {' '}
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <div className="covid-head">
                                                Region
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <div className="covid-head">
                                                Confirmed Cases
                                            </div>
                                        </Col>
                                    </Row>
                                    {ghana_data}
                                    <div className="mb-3"></div>
                                </Container>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={8}>
                            <div className="">
                                {' '}
                                <MapChart setTooltipContent={setContent} />
                                <ReactTooltip>{content}</ReactTooltip>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Ghana;
