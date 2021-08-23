import React from 'react';

// BOOTSTRAP IMPORTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// LOCAL IMPORTS
import './Work.css';
import '../ExpandButton/Expand.css';

import WorkCard from '../WorkCard/WorkCard.js';
import RecipesRefocused from './assets/recipes-refocused-feature.png';
import CryptoCompare from './assets/currency-compare-feature.png';
import WeatherDashboard from './assets/weather-dashboard-feature.png';

// Work Descriptions Array
const WorkArray = [
    {
        id: 1,
        title: 'Recipes Refocused',
        description: 'A full stack application that allows users to browse, comment on, and save recipes that other users have shared. The recipe creation page restricts all recipes to the same format so users can get right to reading the recipe and learning new kitchen techniques.',
        img: RecipesRefocused,
        deployedURL: 'https://recipes-refocused.herokuapp.com/',
        badges: [
            'MVC',
            'Handlebars',
            'Express',
            'Sequelize'
        ],
        role: 'Frontend Developer',
        dropdownContent: [
            {
                id: 1,
                description: 'Worked with handlebars and express to create the "view recipe", "create recipe", and "edit recipe" pages, as well as their associated routes.'
            },
            {
                id: 2,
                description: 'Developed comment functionality, including editing and deleting exisiting comments.'
            },
            {
                id: 3,
                description: 'Contributed to a central CSS file to keep styling consistent across the whole site.'
            },
            {
                id: 4,
                description: 'Created a responsive UI that adapts to all screen sizes.'
            }
        ],
        ghURL: 'https://github.com/TheHebi/recipe-forum-site'
    },
    {
        id: 2,
        title: 'Crypto Compare',
        description: 'A single-page, client-side application for market enthusiasts to quickly compare the values of currencies. Uses APIs from CoinGecko and Frankfurter.',
        img: CryptoCompare,
        deployedURL: 'https://kkolyvek.github.io/crypto-compare/',
        badges: [
            'JavaScript',
            'HTML',
            'CSS',
        ],
        role: 'Frontend Developer',
        dropdownContent: [
            {
                id: 1,
                description: 'Developed the responsive input fields that update the converted value as the user is typing.'
            },
            {
                id: 2,
                description: "Optimized the site's communication with the APIs such that data is requested only when a user inputs a valid comparison."
            },
            {
                id: 3,
                description: 'Created a responsive UI that adapts to all screen sizes.'
            }
        ],
        ghURL: 'https://github.com/kkolyvek/crypto-compare'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A single-page, client-side weather application that displays current weather details of a selected city, as well as a 5 day forecast. Uses the OpenWeather API.',
        img: WeatherDashboard,
        deployedURL: 'https://kkolyvek.github.io/weather-dashboard/',
        badges: [
            'JavaScript',
            'HTML',
            'CSS',
        ],
        role: 'Fullstack Developer',
        dropdownContent: [
            {
                id: 1,
                description: 'Developed full interaction with the OpenWeather API to deliver relevant data.'
            },
            {
                id: 3,
                description: 'Worked with the CSS framework Bulma to create a pleasent user interface.'
            }
        ],
        ghURL: 'https://github.com/kkolyvek/weather-dashboard'
    },
]

function Work() {
    return (
        <Container fluid id="work" className="custom-work">
            <Container>
                <Row>
                    <Col lg={3} className="work-title p-5">
                        <h3>Work</h3>
                    </Col>
                    <Col lg={9} className="work-container">
                        {WorkArray.map((project) => (
                            <WorkCard work={project} key={project.id} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Work;