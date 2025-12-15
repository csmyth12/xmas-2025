import { FC, PropsWithChildren } from "react";

const className =
  "rounded-md bg-xmas-red text-white font-bold py-2 px-4 border-xmas-red hover:bg-xmas-deep-red";

export const Button: FC<
  PropsWithChildren<{ onClick?: () => void; href?: string }>
> = ({ onClick, href, children }) => {
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
