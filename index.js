
    
//    const  callback= [
//     receivesAFunction(callback)
//     console.log("receives a function and calls it")
//    ]
// const =
// function receivesAFunction(callback){
//     console.log("receives a function and calls it")
// }
//  function receivesAFunction(spy){
//   const callback = "receives a function and calls it";

    
// }
//  console.log("receives a function and calls it")
function receivesAFunction() {
    
  }
  
  function receivesAFunction(callback) {
    const spy = ("receives a function and calls it");
    callback(spy);

  }
  
  receivesAFunction(spy);

//    function returnsANamedFunction(){

//   }
  function returnsANamedFunction(){
  
    return function abdi () {

    }
}

  function returnsAnAnonymousFunction(){
    return function() {
      

    }
  }

  
