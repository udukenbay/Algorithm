/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let indexS = null;
  while(s.includes('#')) {
     indexS  = s.indexOf('#');
     console.log(indexS);
      if(indexS) {
        s = s.replace(s.slice(indexS-1, indexS+1), "");
      }

      indexS=null;
  }
  // console.log(s);

  let indexT = null;
  while(t.includes('#')) {
     indexT  = t.indexOf('#');
     console.log(indexT);
      if(indexT) {
        t = t.replace(t.slice(indexT-1, indexT+1), "");
      }

      indexT=null;
  }
  // console.log(t);

  if(s == t)
    return true;
  else return false;
};

console.log(backspaceCompare("ab#c", "ad#c"));