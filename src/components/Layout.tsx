import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-slate-200">
    <div className="max-w-300 mx-auto bg-xmas-green h-screen px-4 pt-12 text-white">
      {children}
    </div>
  </div>
);
