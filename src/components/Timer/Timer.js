import styles from './Timer.module.scss'
import React from "react";

const Timer = (props)=> {


return (
  <div className={styles.wrapper}>
    <span>{("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:</span>
     <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
     <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>
     <span>{("0" + ((props.time / 10) % 100)).slice(-3)}</span>
  </div>
)
};

export default Timer