import styles from './TextButton.module.css';
import { clsx } from '@/utils';

export const TextButton = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={clsx(styles.textbutton, className)}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
