import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

function Temperatures() {
    return <div className="card card--dark">
        <div className="days">
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Sunday</p>
            </div>
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Monday</p>
            </div>
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Tuesday</p>
            </div>
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Wednesday</p>
            </div>
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Friday</p>
            </div>
            <div>
                <p>78</p>
                <FontAwesomeIcon icon={faCloudSun} />
                <p>Saturday</p>
            </div>
        </div>
    </div>
}

export default Temperatures;