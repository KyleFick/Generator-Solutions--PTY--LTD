// app/pages/layout.tsx

import { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen text-blue-900">
      <main className="px-4 pt-20">{children}</main>
    </div>
  );
};

export default Layout;
