var a=document.getElementById("para");
function show(){
  a.textContent="Hello World";
}
function hide(){
  a.textContent="";
}
function changebg(){
  document.body.style.backgroundColor="red";
}
function changetext(){
  a.textContent="Hello";
}
function reset(){
  document.body.style.backgroundColor="white";
  a.textContent="";
}
