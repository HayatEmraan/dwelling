"use client"
import React, { useEffect, useState } from 'react';

const Cards = () => {

    const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    
    fetch('/rooms/rooms.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  console.log(jsonData);
    return (
        <div>
            <h1 className='text-4xl font-bold'>hello world {jsonData.length}</h1>
        </div>
    );
};

export default Cards;