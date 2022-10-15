/**
 * @param {string} time
 * @return {number}
 */
 var countTime = function(time) {

  if(!time.includes('?'))
    return 1;

  let hh = 0;
  let mm = 0;

  let fHour = time.charAt(0);
  let sHour = time.charAt(1);

  let fMin = time.charAt(3);
  let sMin = time.charAt(4);


  if(fHour.includes('?')) {
    if(sHour.includes('?')) { // '??' hh
      hh += 24;
    } else if(parseInt(sHour) >= 4) { // '?5' hh
      hh += 2;
    } else {
      hh += 3; // '?4' 0-4
    }
  } else if(!fHour.includes('?') && sHour.includes('?')) {
    if(fHour.includes('0') || fHour .includes('1')) {
      hh += 10;
    } else { // time[1]=='2'
      hh += 4;
    }
  }

  // console.log('hh:',hh);

  if(fMin.includes('?')) {
    if(sMin.includes('?')) {
      mm += 60;
    } else if(sMin.includes('?')) {
      mm += 7; //'0-6'
    } else {
      mm += 6; //'0-5'
    }
  } else if(!fMin.includes('?') && sMin.includes('?')) {
    if(fMin == '6') {
      mm += 1;
    } else mm += 10;
  }

  // console.log(`hh:mm ${hh}:${mm}`);

  if(mm == 0) return hh;
  else if(hh == 0) return mm;
  else return hh * mm;
};

// console.log(countTime("?5:00"));
// console.log(countTime("0?:0?"));
// console.log(countTime("??:??"));
// console.log(countTime("07:?3"));
// console.log(countTime("2?:??"));
// console.log(countTime("?4:22"));// 2
console.log(countTime("1?:?6")); //60
// console.log(countTime("0?:0?"));//100