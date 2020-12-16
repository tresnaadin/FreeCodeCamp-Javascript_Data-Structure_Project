function convertToRoman(num) {
let romanString = '';
while (num > 0){
switch (true) {
  // triple digits
  case (num > 999):
    romanString = romanString.concat('M');
    num = num -1000;
    break;
  case (num > 899):
    romanString = romanString.concat('CM');
    num = num -900;
    break;    
  case (num > 499):
    romanString = romanString.concat('D');
    num = num -500;
    break;    
  case (num > 499):
    romanString = romanString.concat('D');
    num = num -500;
    break;    
  case (num > 399):
    romanString = romanString.concat('CD');
    num = num -400;
    break;
  case (num > 99):
    romanString = romanString.concat('C');
    num = num -100;
    break;    
// double digits    
  case (num > 90):
    romanString = romanString.concat('XC');
    console.log(romanString);    
    num = num -90;
    break;
  case (num > 80):
    romanString = romanString.concat('LXXX');    
    num = num -80;
    break; 
  case (num > 50):
    romanString = romanString.concat('L');    
    num = num -50;
    break;
  case (num > 39):
    romanString = romanString.concat('XL');    
    num = num -40;
    break;
  case (num > 30):
    romanString = romanString.concat('XXX');    
    num = num -30;
    break;    
//single digits    
  case (num > 9):
    romanString = romanString.concat('X');
    console.log(romanString);    
    num = num -10;
    break;
  case (num > 8):
    romanString = romanString.concat('IX');    
    num = num -9;
    break;     
  case (num > 4):
    romanString = romanString.concat('V');    
    num = num -5;
    break;
  case (num > 3):
    romanString = romanString.concat('IV');    
    num = num -5;
    break;
  case (num > 0):
    romanString = romanString.concat('I');
    num = num -1;
    break;
  default:
    console.log(num);
  }//end of switch
  }//end of while..
  console.log(romanString);
  return romanString;
}//end of function convertToRoman(num)
