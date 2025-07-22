import styles from './Container.module.css';
import { clsx } from '@/utils';

export function Container({ children, className }) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
