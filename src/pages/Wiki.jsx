import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Navbar from '../components/navbar/navbar';

export default function wiki() {
    return (
        <>
            <Navbar />
            <Container>
                <Row>
                    <Col>
                        <h2>
                            <i className="fas fa-question-circle"></i> What are
                            Coronaviruses ?
                        </h2>
                        <ul>
                            <li>
                                Coronaviruses are a large group of viruses that
                                are common among animals. In rare cases, they
                                are what scientists call zoonotic, meaning they
                                can be transmitted from animals to humans,
                                according to the US Centers for Disease Control
                                and Prevention. It is a dangerous diseases with
                                incubation period between 4-6 days. It is fatal
                                especially for those with weakened immune
                                system, the elderly and the very young. It could
                                also result in Pneumonia and bronchitis.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            {' '}
                            <i className="fas fa-question-circle"></i> What is
                            COVID-19 ?
                        </h2>
                        <ul>
                            <li>
                                COVID-19 is the infectious disease caused by the
                                most recently discovered coronavirus. This new
                                virus and disease were unknown before the
                                outbreak began in Wuhan, China, in December
                                2019. COVID-19 is now a pandemic affecting many
                                countries globally
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            {' '}
                            <i className="fas fa-question-circle"></i> How Does
                            it Spread
                        </h2>

                        <ul>
                            <li>
                                The virus that causes COVID-19 is thought to
                                spread mainly from person to person, mainly
                                through respiratory droplets.
                            </li>
                            <li>
                                These respiratory droplets areproduced when an
                                infected person coughs or sneezes.
                            </li>
                            <li>
                                These droplets can land in the mouths or noses
                                of people who are nearby or possibly be inhaled
                                into the lungs. Spread is more likely when
                                people are in close contact with one another
                                (within about 6 feet).
                            </li>
                            <li>
                                The Respiratory droplets can also lan on
                                surfaces such handrails and door knobs.People
                                can become infected by touching these objects or
                                surfaces, then touching their eyes, nose or
                                mouth.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            {' '}
                            <i className="fas fa-question-circle"></i> Symptoms
                            Of Covid 19
                        </h2>

                        <ul>
                            <li>
                                Symptoms can include fever, cough and shortness
                                of breath.
                            </li>
                            <li>
                                {' '}
                                Other symptoms that are less common and may
                                affect some patients include aches and pains,
                                nasal congestion, headache, conjunctivitis, sore
                                throat, diarrhea, loss of taste or smell or a
                                rash on skin or discoloration of fingers or
                                toes.
                            </li>
                            <li>
                                In more severe cases, infection can cause
                                pneumonia or breathing difficulties. More
                                rarely, the disease can be fatal.
                            </li>
                            <li>
                                These symptoms are similar to the flu
                                (influenza) or the common cold, which are a lot
                                more common than COVID-19. This is why testing
                                is required to confirm if someone has COVID-19
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            {' '}
                            <i className="fas fa-question-circle"></i> How to
                            Protect Yourself ?
                        </h2>
                        <ul>
                            <li>
                                Clean your hands often. Use soap and water, or
                                an alcohol-based hand rub.
                            </li>
                            <li>
                                Maintain a safe distance from anyone who is
                                coughing or sneezing.
                            </li>
                            <li>
                                Don’t touch your eyes, nose or mouth. Cover your
                                nose and mouth with your bent elbow or a tissue
                                when you cough or sneeze
                            </li>
                            <li>
                                Stay home if you feel unwell. If you have a
                                fever, cough and difficulty breathing, seek
                                medical attention
                            </li>
                            <li>
                                {' '}
                                Call in advance. Follow the directions of your
                                local health authority.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>
                            {' '}
                            <i className="fas fa-question-circle"></i> Covid-19
                            MythBusters
                        </h2>

                        <ul>
                            <li>
                                5G Network DOES NOT Transmit coronavirus.
                                Viruses do not travel on Radio waves or Mobile
                                Networks
                            </li>

                            <li>
                                Drinking alcohol DOES NOT protect you from
                                getting the virus
                            </li>
                            <li>
                                Antibiotics CANNOT treat Covid-19 because it is
                                a virus
                            </li>
                            <li>
                                People of ALL AGES can be infected by the
                                Covid-19 virus
                            </li>
                            <li>
                                regularly rinsing your nose with saline DOES NOT
                                prevent infection
                            </li>
                            <li>
                                Ultra-violet (UV) lamps should not be used to
                                disinfect hands or other areas of your skin
                            </li>
                            <li>
                                The new coronavirus CANNOT be transmitted
                                through mosquito bites
                            </li>
                            <li>
                                Taking a hot bath does not prevent the new
                                coronavirus disease
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
