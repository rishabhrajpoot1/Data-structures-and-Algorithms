// To reverse the number
function reverseInt(n) {
    let isNeg=false;
    if(n<0){
      isNeg=true;
      n*=-1;
    }
    let m = String(n)
    return  isNeg?-1* Number(m.split('').reverse().join('')): Number(m.split('').reverse().join(''));
  }

  