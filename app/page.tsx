import React from 'react';
import  { SearchProvider }  from '../context/SearchContext'
import  HomePages  from '../pages/HomePages'

const Home = () => {
  return (
    <div className="text-center">
        <SearchProvider >
          <HomePages />
        </ SearchProvider>
    </div>
   
  );
}
export default  Home;