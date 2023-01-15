import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from './Temperatures.module.css';

function Temperatures(props) {
    return <div className={`${styles["card"]} ${styles["card--dark"]} ${styles["days"]}`}>
        {props.temps.map(temp => <div key={temp.day}>
            <p className={styles["days__temperature"]}>{temp.temperature}</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>{temp.day}</p>
        </div>)}
    </div>
}

export default Temperatures;