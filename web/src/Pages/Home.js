import React from 'react';
import NavBar from '../Utils/NavBar';
import bg1 from '../accets/bh1.png';

const Home = () => {
    return (
        <div>
          <NavBar/>
          <div>
              <img src={bg1} alt="bg1" className="bg1" style={{width:'100%'}}/>
          </div>
          </div>
    );
};

export default Home;