import { Icon } from '@components';
import styles from './Button.module.css';

// customize = "filled" | "outlined" | "text", size = "lg" | "sm"
export const Button = ({ icon, title, type = 'button', customize = 'filled', size = 'lg', className, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[customize]} ${styles[size]} ${className}`} type={type} onClick={onClick}>
      {icon && <Icon className={styles.icon} name={icon} />}
      {title && <span className={styles.title}>{title}</span>}
    </button>
  );
};
