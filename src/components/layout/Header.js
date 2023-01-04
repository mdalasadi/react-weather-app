import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudSun,
    faLocationDot,
    faClockFour,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <FontAwesomeIcon icon={faCloudSun} size="3x" />
                <span>weatherly.io</span>
            </div>
            <form className="header__search">
                <FontAwesomeIcon icon={faLocationDot} />
                <input
                    type="text"
                    maxLength="15"
                    placeholder="Enter zip code or city here..."
                />
            </form>
            <div className="header__info">
                <FontAwesomeIcon icon={faClockFour} />
                <span className="header__day">Sunday</span>
                <span className="header__time">9:31 PM</span>
            </div>
        </header>
    );
}

export default Header;
