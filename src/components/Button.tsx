import { FC, PropsWithChildren } from "react";

const className =
  "rounded-md bg-xmas-red text-white font-bold py-2 px-4 border-xmas-red hover:bg-xmas-deep-red text-2xl";

interface Props {
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<PropsWithChildren<Props>> = ({
  onClick,
  href,
  children,
  type,
}) => {
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
