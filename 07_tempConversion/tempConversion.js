const ftoc = function(fer) {
let cel = 0;
cel = ((fer - 32) *(5/9));
cel = cel*10
cel = Math.round(cel);
cel = (cel/10);
return cel;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
