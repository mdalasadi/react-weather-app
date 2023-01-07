import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCloudSun } from '@fortawesome/free-solid-svg-icons';

function WeatherSummary() {
    return (
        <div>
            <section>
                <FontAwesomeIcon icon={faCloudSun} />
                <h1>70 &deg;</h1>
            </section>
            <section>
                <p>Clear with periodic clouds</p>
                <h1><FontAwesomeIcon icon={faLocationDot} /> Fort Lauderdale, Fl</h1>
            </section>
        </div>
    )
}

export default WeatherSummary;