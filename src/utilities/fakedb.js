// use local storage as your db for now
const addToDb = id =>{
   const exsits = getDb;
   let shopping_cart = {};
   // console.log(exsits);
   if(!exsits){
      shopping_cart[id] = 1;
      // localStorage.setItem(id, 1);
   }
   else{
      shopping_cart = JSON.parse(exsits);
      if(shopping_cart[id]){
         const newCount = shopping_cart[id] + 1;
         shopping_cart[id] = newCount;
      }
      else{
         shopping_cart[id] = 1;
      }
      // const newCount = parseInt(exsits)+ 1;
      // localStorage.setItem(id, newCount);
   }
   updateDb(shopping_cart);

}

const getDb = () => localStorage.getItem('shopping_cart');

const updateDb = cart => {
   localStorage.setItem('shopping_cart', JSON.stringify(cart));
}
const removeFromDb = id => {
   const exsits = getDb();
   if(!exsits){

   }
   else{
      const shopping_cart = JSON.parse(exsits);
      delete shopping_cart[id];
      updateDb(shopping_cart);
   }
}

export {addToDb, removeFromDb as deleteFromDb}