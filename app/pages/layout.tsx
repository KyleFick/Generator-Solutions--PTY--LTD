// app/pages/layout.tsx

import { ReactNode } from "react";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <main className="pt-20 px-4">{children}</main>
    </div>
  );
};

export default Layout;
