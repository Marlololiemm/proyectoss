const newButton =document.getElementById("newButton");

function changeBackgroundColor(){
  const randomColor=`hs1(${Math.random()*360},100%,75%)`;
  document.body.style.backgroundColor=randomColor
}
newButton.addEventListener('click'.changeBackgroundColor);