/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'a-svg': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      name?: string;
      src?: string;
      size?: string;
      color?: string;
      label?: string;
    }, HTMLElement>;
    'a-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      variant?: string;
      size?: string;
      disabled?: boolean;
    }, HTMLElement>;
  }
}
