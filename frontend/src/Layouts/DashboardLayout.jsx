
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
const DashboardLayout = () => {
  

  return (
    <div className="bg-blue-gray-200 dark:bg-boxdark-2 dark:text-bodydark">
      
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto  overflow-x-hidden gap-6  ">
          
         <DashboardHeader/>

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          
        </div>
        
      </div>
     
    </div>
  );
};

export default DashboardLayout;
