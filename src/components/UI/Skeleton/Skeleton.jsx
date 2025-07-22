import styles from './Skeleton.module.css';
import { clsx } from '@/utils';

export const Skeleton = ({className = '', width, height}) => {
  return (
    <div className={clsx(className, styles.placeholder)} style={{width, height}}></div>
  );
};