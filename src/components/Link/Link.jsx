import { isExternalLink } from '@/utils';
import { usePageRouter } from '@/hooks';

export const Link = (props) => {
  const { navigate } = usePageRouter();
  const { to, className, children, ...otherProps } = props;

  const handleClick = (evt) => {
    evt.preventDefault();
    if (!isExternalLink(to)) {
      navigate(to);
    }
  };

  return (
    <a className={className} {...otherProps} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
