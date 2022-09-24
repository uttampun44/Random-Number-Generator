
   function Random(){
    let random_number = Math.floor((Math.random() * 200));
    let result = document.getElementById('result');

       result.innerText = random_number;
   }

   function Reset(Random){
    
      result.innerText = "";
   }