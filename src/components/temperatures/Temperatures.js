import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import styles from './Temperatures.module.css';

function Temperatures() {
    return <div className={`${styles["card"]} ${styles["card--dark"]} ${styles["days"]}`}>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Monday</p>
        </div>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Tuesday</p>
        </div>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Wednesday</p>
        </div>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Thursday</p>
        </div>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Friday</p>
        </div>
        <div>
            <p className={styles["days__temperature"]}>78</p>
            <FontAwesomeIcon icon={faCloudSun} size="3x" />
            <p className={styles["days__day"]}>Saturday</p>
        </div>
    </div>
}

export default Temperatures;