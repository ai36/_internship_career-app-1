import styles from './Counter.module.css';

export const Counter = ({ number = 1}) => {
  return (
      <div className={styles.counter}>{number}</div>
  );
}