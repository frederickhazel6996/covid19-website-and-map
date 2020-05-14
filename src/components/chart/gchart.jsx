import React, { useEffect, useState } from 'react';

import { scaleLinear, scaleQuantile } from 'd3-scale';
import RPT from 'prop-types';
import axios from 'axios';
const Ghana = require('./ghana3.json');

import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule,
    ZoomableGroup
} from 'react-simple-maps';

const colorScale = scaleLinear()
    .domain([1, 10, 30, 50, 100, 200, 300, 500, 800, 1000, 3000, 5000])
    .range([
        '#ffedea',
        '#ffcec5',
        '#ffad9f',
        '#ff8a75',
        '#ff5533',
        '#e2492d',
        '#be3d26',
        '#9a311f',
        '#df0005'
    ]);

const MapChart = ({ setTooltipContent }) => {
    const [data, setData] = useState([]);
    const [data2, setdata2] = useState([]);
    let randomizer = () => {
        return Math.floor(Math.random() * (1000000 - 1)) + 1;
    };
    useEffect(() => {
        setData([
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
        ]);
    }, []);

    return (
        <>
            <ComposableMap
                projectionConfig={{
                    scale: 1800,

                    rotation: [-1, 0, 0]
                }}
                data-tip=""
                width={340}
                height={830}
                style={{
                    width: '100%',
                    height: 'auto'
                }}>
                {
                    <Geographies geography={Ghana}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const d = data.find(
                                    s =>
                                        s.ADM1_NAME === geo.properties.ADM1_NAME
                                );
                                return (
                                    <Geography
                                        key={d.id}
                                        geography={geo}
                                        fill={
                                            d ? colorScale(d.value) : '#808080'
                                        }
                                        stroke={'#000'}
                                        onMouseEnter={() => {
                                            const {
                                                ADM1_NAME
                                            } = geo.properties;
                                            setTooltipContent(
                                                `${ADM1_NAME} Region : ${d.value
                                                    .toString()
                                                    .replace(
                                                        /(\d)(?=(\d{3})+(?!\d))/g,
                                                        '$1,'
                                                    )}`
                                            );
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                }
            </ComposableMap>
        </>
    );
};
MapChart.propTypes = {
    setTooltipContent: RPT.func
};

export default MapChart;
