const sumAll = function(x, y) {
 if(x<y){ let sum = 0;
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
