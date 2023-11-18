import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudSun,
    faLocationDot,
    faClockFour,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

function Header(props) {
    const [enteredCity, setEnteredCity] = useState('');

    const InputUserHandler = (event) => {
        setEnteredCity(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredCity.trim().length === 0) return;
        props.onGetCityName(enteredCity);
        setEnteredCity('')
    }

    return (
        <header className={styles['header']}>
            <div className={styles['header__logo']}>
                <FontAwesomeIcon icon={faCloudSun} size="3x" />
                <span>weatherly.io</span>
            </div>
            <form className={styles['header__search']} onSubmit={formSubmitHandler} >
                <FontAwesomeIcon icon={faLocationDot} />
                <input
                    type="text"
                    maxLength="15"
                    placeholder="Enter zip code or city here..."
                    value={enteredCity}
                    onChange={InputUserHandler}
                />
            </form>
            <div className={styles['header__info']}>
                <FontAwesomeIcon icon={faClockFour} />
                <span className={styles['header__day']}> {props.date.day} </span>
                <span className={styles['header__time']}>{props.date.currentTime}</span>
            </div>
        </header>
    );
}

export default Header;
