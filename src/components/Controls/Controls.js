import styles from "./Controls.module.scss";

const Controls = (props) => {
  return <div className={styles.controls}>{props.children}</div>
}

export default Controls