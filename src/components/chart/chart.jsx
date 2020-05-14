import React, { useEffect, useState } from 'react';

import { scaleLinear, scaleQuantile } from 'd3-scale';
import RPT from 'prop-types';
import axios from 'axios';

import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule,
    ZoomableGroup
} from 'react-simple-maps';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleQuantile()
    .domain([1, 3000000])
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
    const [data2, setdata2] = useState([]);
    const lol = () => {
        return [
            { ISO3: 'US', name: 'United sates', value: 40000 },
            { ISO3: 'GH', name: 'Ghana', value: 500 }
        ];
    };
    let randomizer = () => {
        return Math.floor(Math.random() * (1000000 - 1)) + 1;
    };

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
                },
                error => {
                    console.log(error);
                }
            );
    }, []);

    return (
        <>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 170
                }}
                data-tip=""
                width={980}
                height={500}
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
                                            d ? colorScale(d.value) : '#808080'
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
        </>
    );
};
MapChart.propTypes = {
    setTooltipContent: RPT.func
};

export default MapChart;
