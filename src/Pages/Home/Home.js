import './Home.css'

import AdvanceSearchZone from '../../Components/AdvanceSearchZone/AdvanceSearchZone';
import Header from '../../Components/Header/Header';
import JobFilter from '../../Components/JobFilter/JobFilter';
import React from 'react';
import RecruterLogin from '../../Components/LogIn/RecruterLogin';
import StudentLogin from '../../Components/LogIn/StudentLogin';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home-body-container'>
        <div className='home-body-student'>
            <StudentLogin/>
            <JobFilter/>
        </div>
        <div className='home-body-advance'>
            <AdvanceSearchZone/>
        </div>
        <div className='home-body-recruter'>
            <RecruterLogin/>
        </div>
      </div>
    </div>
  );
};

export default Home;
