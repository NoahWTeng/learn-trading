import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="bg-white dark:bg-black transition-all">
      <main className="sticky top-0 my-4 z-[9999]">
        <div className="container">
          <nav className="bg-gray-200 rounded-md py-6 px-4 grid grid-cols-6 gap-4">
            <div className="flex items-center justify-center">
              <Link to="/">
                <span className="font-medium uppercase">Home</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full md:space-y-4 overflow-y-auto">
            <Outlet />
          </div>
        </div> */}
      </main>
    </div>
  );
};
