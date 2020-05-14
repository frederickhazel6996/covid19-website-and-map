import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';
import axios from 'axios';
import './pages.scss';
import MapChart from '../components/chart/chart';
import ReactTooltip from 'react-tooltip';
import RPT from 'prop-types';

import './pages.scss';
const Map = () => {
    const [content, setContent] = useState('');
    const geoUrl =
        'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

    return (
        <div>
            <Navbar />
            <Container fluid className="covid-map">
                <MapChart setTooltipContent={setContent} />
                <ReactTooltip>{content}</ReactTooltip>
            </Container>
        </div>
    );
};

export default Map;
