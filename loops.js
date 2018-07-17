function forLoop(array) {
  for (let i  = 0; i < 25; i++){
    if (i === 1) {
      array.push(`I am ${i} strange loop.`); 
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
<<<<<<< HEAD
  return array;
}
function whileLoop(n) {
   while ( n > 0) {
    console.log(--n);
  }
  return 'done';
}
function doWhileLoop(array){
  do{
    array.splice(0, array.length -1);
    return [array];
  } while(array.length > 0);
}
=======
}
function whileLoop(n) {
  let countdown = 'n';
  
  while ( countdown > 0) {
    console.log(--countdown);
  }
}
>>>>>>> d3168fb5b3789896f35a2cf7298b6e4a30c6026f
