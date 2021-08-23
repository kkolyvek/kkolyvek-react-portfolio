import React from 'react';

// BOOTSTRAP IMPORTS
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// LOCAL IMPORTS
import ghLogo from '../globalAssets/GitHub-Mark-32px.png'
import Expand from '../ExpandButton/Expand.js'

export default function WorkCard({ work }) {
    return (
    <Card className="custom-card">
        <a
        href={work.deployedURL}
        target="_blank"
        className="card-link-text"
        rel="noreferrer">
            <Card.Body className="custom-card-body">
                {/* IMAGE */}
                <div className="card-image-container">
                    <img className="card-image" src={work.img} alt="Screenshot of Project" />
                </div>
                {/* WORK DESCRIPTION */}
                <div className="card-content-wrapper">
                    <div className="card-content">
                        <Card.Title><strong>{work.title}</strong></Card.Title>
                        <Card.Text>{work.description}</Card.Text>
                    </div>
                    <div className="link-arrow">
                        <FontAwesomeIcon icon={faChevronRight} size='1x' />
                    </div>
                </div>
            </Card.Body>
        </a>
        <Card.Footer className="d-flex align-items-start justify-content-between">
            <div className="d-flex flex-column align-items-start">
                {/* BADGES OF TECH USED */}
                <div className="d-flex mb-1">
                    {work.badges.map((badge, index) => (
                        <Badge className="rounded-pill bg-primary mx-1 my-1" key={index}>{badge}</Badge>
                    ))}
                </div>
                {/* DROPDOWN CONTAINING ROLE DETAILS */}
                <Expand role={work.role} content={work.dropdownContent} />
            </div>
            <a
            href={work.ghURL}
            target="_blank"
            className="ms-3 my-1"
            rel="noreferrer">
                <img src={ghLogo} alt="GitHub Logo"></img>
            </a>
        </Card.Footer>
    </Card>
    )
}         