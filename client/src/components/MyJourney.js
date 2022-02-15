import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Community from './pages/Community';
import Journal from './pages/Journal';
import '../styles/MyJorney.css'

export default function MyJourney() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Dashboard') {
      return <Dashboard />;
    }
    if (currentPage === 'Journal') {
      return <Journal />;
    }
    if (currentPage === 'Plans') {
      return <Plans/>;
    }
    return <Community />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
