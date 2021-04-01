import React, { useEffect, useState } from 'react';

import { scaleLinear } from 'd3-scale';
import RPT from 'prop-types';
import axios from 'axios';
import './index.scss';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
    .domain([1, 50, 100, 1000, 5000, 100000, 1000000, 3000000])
    .range([
        '#ffedea',
        '#ffcec5',
        '#ffad9f',
        '#ff8a75',
        '#ff5533',
        '#e2492d',
        '#be3d26',
        '#9a311f'
    ]);

const MapChart = ({ setTooltipContent }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let url2 = 'https://api.covid19api.com/summary';
        axios
            .get(url2, {
                headers: {}
            })
            .then(
                response => {
                    let countries = response.data.Countries;
                    let map_array = [];
                    countries.map(country =>
                        map_array.push({
                            ISO3: country.CountryCode,
                            name: country.Country,
                            value: country.TotalConfirmed
                        })
                    );

                    setData(map_array);
                    console.log('Lmaooo');
                },
                error => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <>
            {data.length === 0 ? (
                <div className="center-loader">
                    <Loader
                        type="Audio"
                        color="#ff5533"
                        height={100}
                        width={100}
                        timeout={100000} //3 secs
                    />
                </div>
            ) : (
                <ComposableMap
                    projectionConfig={{
                        rotate: [-1, 0, 0],
                        scale: 170
                    }}
                    data-tip=""
                    width={980}
                    height={450}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}>
                    {data.length > 0 && (
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo => {
                                    const d = data.find(
                                        s => s.ISO3 === geo.properties.ISO_A2
                                    );
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={
                                                d
                                                    ? colorScale(d.value)
                                                    : '#808080'
                                            }
                                            stroke={'#000'}
                                            onMouseEnter={() => {
                                                const { NAME } = geo.properties;
                                                setTooltipContent(
                                                    `${NAME}: ${
                                                        d
                                                            ? d.value
                                                                  .toString()
                                                                  .replace(
                                                                      /(\d)(?=(\d{3})+(?!\d))/g,
                                                                      '$1,'
                                                                  )
                                                            : undefined
                                                    } cases`
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
                    )}
                </ComposableMap>
            )}
        </>
    );
};
MapChart.propTypes = {
    setTooltipContent: RPT.func
};

export default MapChart;
