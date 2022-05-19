import React from 'react';

const Cosmetic = (props) => {
   console.log(props.cosmetic);
   const {name, balance,gender}=props.cosmetic;
   return (
      <div>
         <h2>name: {name}</h2>
         <p>price: {balance}</p>
         <p>Gender: {gender}</p>
      </div>
   );
};

export default Cosmetic;