import React, {useState} from "react";

// NPM PACKAGE IMPORTS
import { CSSTransition } from 'react-transition-group';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// LOCAL IMPORTS
import './Expand.css'



// CUSTOM EXPANDER BUTTON
// On click, reveal hidden list content and turn icon
export default function Expand( { role, content} ) {
    // states
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownHeight, setDropdownHeight] = useState(0);

    // Handle Height Change
    function calcHeight(element) {
        const height = element.offsetHeight;
        setDropdownHeight(height);
    }

    // Handle Click Function
    function handleExpandClick(e) {
        e.preventDefault();

        if (isOpen === true) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    };

    return (
        <div className="d-flex flex-column">
            <button onClick={handleExpandClick} className="expand-button">
                <FontAwesomeIcon icon={faChevronRight} size='1x' className={ isOpen ? 'me-2 fa-chevron open' : 'me-2 fa-chevron'} />
                <p 
                className="ms-1" 
                style={{margin: '0', padding: '0', textAlign: 'center'}}>{role}</p>
            </button>
            <div className="content-wrapper mb-2" style={{ height: dropdownHeight }}>
                <CSSTransition 
                    in={isOpen} 
                    timeout={300}
                    classNames="dropdown"
                    unmountOnExit
                    onEnter={calcHeight}
                    onExit={calcHeight}
                > 
                    <ul className="dropdown">
                        { isOpen ? content.map(item => { return <li key={item.id}>{item.description}</li>}) : null }
                    </ul>
                </CSSTransition>
            </div>
        </div>
    );
}
