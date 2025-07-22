import styles from './Button.module.css';
import { clsx } from '@/utils';
import { IconSvg } from '@/components';

export const Button = ({ className, children, icon, filled, ...props }) => {
  return (
    <button
      className={clsx(styles.button, filled && styles.filled, className)}
      type={'button'}
      {...props}
    >
      {icon && <IconSvg id={icon} className={styles.icon} />}
      <span>{children}</span>
    </button>
  );
};
