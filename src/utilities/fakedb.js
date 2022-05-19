// use local storage as your db for now
const addToDb = id =>{
   const exsits = localStorage.getItem(id);
   console.log(exsits);
   if(!exsits){
      localStorage.setItem(id, 1);
   }
   else{
      const newCount = parseInt(exsits)+ 1;
      localStorage.setItem(id, newCount);
   }
  
}

export {addToDb}