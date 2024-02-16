'use client'

import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import axios from 'axios';


const Cards = () => {
  const [cards, setCards] = useState([]);
  /*const [selectedCard, setSelectedCard] = useState(null);
*/
  useEffect(() => {

    const fetchData = async () => {
    
      try { 
        const apiUrl = `http://127.0.0.1:5000/get_saved_posts`;
        const response = await axios.get(apiUrl);
        setCards(response.data)
        console.log("Response Search ", response.data)
    } catch (error) {
        console.error('---------Error in the request:', error);
    }
      
      /*
        try {
            const apiUrl = `http://127.0.0.1:5000/get_hashtag_recent_media?search=${'messi'}`;
            const response = await axios.get(apiUrl);
            console.log("Response Search ", response.data.json_data.data)
            setCards(response.data.json_data.data);
        } catch (error) {
            console.error('Error in the request:', error);
        }
      */  
    };

    fetchData();
  }, []);

 /* const handleCardSelect = (cardData) => {
    setSelectedCard(cardData);
  };
*/
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 
    m-4 cursor-pointer max-w-auto relative flex-col-reverse'>
      {cards.map((card, index) => (
        <Card  key={index} data={card}   />
      ))}

    </div>
  );
};

export default Cards;
