const checkLenght = (string, len) => (string.length <= len);

const checkPalidrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();

  let index = 0;

  for(let indexRev = string.length - 1; indexRev > 0; indexRev--){
    if(string[indexRev] !== string[index]){
      return false;
    }
    index++;
  }
  return true;
};
