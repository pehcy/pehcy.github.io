import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Layout : React.FC<Props> = ({ children } : Props) => {
  return (
    <div className="mx-auto min-h-screen flex flex-col">
      { children }
    </div>
  );
}

export default Layout;