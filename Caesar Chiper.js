function rot13(str) { // LBH QVQ VG!
  
  //Dictionary of values
  const key = {
    'N' : 'A',
    'O' : 'B',
    'P' : 'C',
    'Q' : 'D',
    'R' : 'E',
    'S' : 'F',
    'T' : 'G',
    'U' : 'H',
    'V' : 'I',
    'W' : 'J',
    'X' : 'K',
    'Y' : 'L',
    'Z' : 'M',
    'A' : 'N',
    'B' : 'O',
    'C' : 'P',
    'D' : 'Q',
    'E' : 'R',
    'F' : 'S',
    'G' : 'T',
    'H' : 'U',
    'I' : 'V',
    'J' : 'W',
    'K' : 'X',
    'L' : 'Y',
    'M' : 'Z'
  }
  
  //Convert string to array
  let stringArray = str.split("");

  //function for replacing using the dictionary
  function transcribe(array){
    return [].reduce.call(array, (transcribed, char, index) => {
      return transcribed +=  (key[char] || char);
      },'');
  }

 let transcribedString = transcribe(stringArray);
 
 return transcribedString;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
