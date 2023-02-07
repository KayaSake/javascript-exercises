const sumAll = function(x, y) {
if (x < 0 || y < 0) {return "ERROR";}
 else if(x<y){ let sum = 0;
  for (let i = x; i < y + 1; i++) {
    sum += i;
  }
  return sum;
}
else if(x>y){ let sum =0;
  for (let i = y; i < x+1; i++){
    sum += i;
  }
  return sum;
}
}

// Do not edit below this line
module.exports = sumAll;
