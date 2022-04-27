function rish (num){

    for(let i=0; i<num; i++){
   
        if(i%3 === 0 && i%5 === 0){
            console.log(i,"Multiple of both 3 and 5");
        } else if(i%5 === 0){
            console.log(i,"Multiple of 5")
        } else if(i%3 === 0){
            console.log(i,"Multiple of 3")
        } 
         else{
            console.log(i);
        }
    }
    return num
}