function palindrome(str) {
  
  //Transform input to lowercase alphanumeric only
  let stringChanger = str.toLowerCase().replace(/[^a-z0-9]/ig,'');

  //Compare string to reversed string
  if (stringChanger === stringChanger.split("").reverse().join("")){
    return true;
  }else {
    return false;
  }

}



palindrome("eye");
