// How interactions by users 
function clickCollaspse(){
    const keyBtn = document.querySelector(".material-icons");
  
    if (keyBtn.innerText === "keyboard_arrow_down"){
      keyBtn.innerText = "keyboard_arrow_up";
    } else { keyBtn.innerText = "keyboard_arrow_down"}
  }

export default clickCollaspse;