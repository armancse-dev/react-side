import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
   
   const {name, balance,gender, _id}=props.cosmetic;
   const handlePurchase = id => {
      //set to local storage
      console.log(id);
      addToDb(id);
   }
  
   return (
      <div>
         <h2>name: {name}</h2>
         <p>_id: {_id} price: {balance}</p>
         <p>Gender: {gender}</p>
         <button onClick={() => handlePurchase(_id)}>Purches</button>
      </div>
   );
};

export default Cosmetic;