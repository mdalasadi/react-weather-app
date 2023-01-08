import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from './WeatherSummary.module.css';

function WeatherSummary() {
    return (
        <div className={styles['summary']} >
            <section className={styles['summary__degree']}>
                <FontAwesomeIcon icon={faCloudSun} />
                <h1>70&deg;</h1>
            </section>
            <section className={styles['summary__location']}>
                <p>Clear with periodic clouds</p>
                <h1><FontAwesomeIcon icon={faLocationDot} /> Fort Lauderdale,Fl</h1>
            </section>
        </div>
    )
}

export default WeatherSummary;