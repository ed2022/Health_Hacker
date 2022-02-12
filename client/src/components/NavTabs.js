import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
       <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('Dashboard')}
          // Check to see if the currentPage is `Dashboard`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#journal"
          onClick={() => handlePageChange('Journal')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Journal"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Journal' ? 'nav-link active' : 'nav-link'}
        >
          Journal
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#plans"
          onClick={() => handlePageChange('Plans')}
          // Check to see if the currentPage is `Plans`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Plans' ? 'nav-link active' : 'nav-link'}
        >
          Plans
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#community"
          onClick={() => handlePageChange('Community')}
          // Check to see if the currentPage is `Community`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Community' ? 'nav-link active' : 'nav-link'}
        >
          Community
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
