import React from 'react';

interface SvgIconProps {
  name?: string;
  src?: string;
  size?: string;
  color?: string;
  label?: string;
  className?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-svg': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          src?: string;
          size?: string;
          color?: string;
          label?: string;
        },
        HTMLElement
      >;
    }
  }
}

export const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  src,
  size = '24',
  color,
  label,
  className,
}) => {
  return (
    <a-svg
      name={name}
      src={src}
      size={size}
      color={color}
      label={label}
      className={className}
    />
  );
};
