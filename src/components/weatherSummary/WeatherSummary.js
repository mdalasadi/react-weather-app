import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherSummary.module.css';

function WeatherSummary(props) {
    return (
        <div className={styles['summary']} >
            <section className={styles['summary__degree']}>
                <img src={`http://openweathermap.org/img/w/${props.data.icon}.png`} alt="" />
                <h1>{props.data.temp}&deg;</h1>
            </section>
            <section className={styles['summary__location']}>
                <p>{props.data.desc}</p>
                <h1><FontAwesomeIcon icon={faLocationDot} /> {props.data.city}</h1>
            </section>
        </div>
    )
}

export default WeatherSummary;