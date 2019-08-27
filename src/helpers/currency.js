export const addZeroOnDecimals = (number) => {
  if(number < 10){
    return '0'+number.toString();
  }

  return number.toString();
};