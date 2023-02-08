const ftoc = function(fer) {
let cel = 0;
cel = ((fer - 32) *(5/9));
cel = cel*10
cel = Math.round(cel);
cel = (cel/10);
return cel;
};

const ctof = function(cel) {
  let fer = 0;
  fer = ((cel*(9/5))+32);
  fer = fer*10;
  fer = Math.round(fer);
  fer = (fer/10);
  return fer;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
