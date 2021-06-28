const str = "ab";

if (str[str.length - 1] == 0) {
  console.log(str);
}else if(str.length < 2){
  console.log(str);
}
 else {
  const a = str[0];
  const b = str[str.length - 1];
  const c = str.substr(1, str.length - 2);
  const res = b + a + c;
  
  console.log(res);
}
