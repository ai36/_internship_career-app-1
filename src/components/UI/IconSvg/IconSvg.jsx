import sprite from '@/components/UI/IconSvg/sprite.svg';

export function IconSvg({ id, className }) {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
}
