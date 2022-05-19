import React, { useEffect, useState } from 'react';
import { add, multiply } from '../../utilities/storage';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmatics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect( ()=>{
     fetch('./cosmetics.json')
     .then(res=> res.json())
     .then(data => setCosmetics(data));
  }, [])
   return (
      <div>
         <h3>Shop my Consmetics!</h3>
         {
            cosmetics.map(cosmetic => <Cosmetic 
               key={cosmetic._id}
               cosmetic={cosmetic}></Cosmetic>)
         }
      </div>
   );
};

export default Cosmatics;