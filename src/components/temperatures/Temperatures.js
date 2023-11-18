import React from 'react';
import styles from './Temperatures.module.css';

function Temperatures(props) {
    return <div className={`${styles["card"]} ${styles["card--dark"]} ${styles["days"]}`}>
        {props.temps.map(temp => <div key={temp.day}>
            <p className={styles["days__temperature"]}>{temp.temperature}</p>
            <img src={`http://openweathermap.org/img/w/${temp.icon}.png`} alt="" />
            <p className={styles["days__day"]}>{temp.day}</p>
        </div>)}
    </div>
}

export default Temperatures;