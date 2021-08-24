const footer = document.querySelector("#footer");
const searchBar = document.querySelector("#searchBar")
if (window.innerWidth < 400){
  footer.style.display = "none";
}
window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');
  

  // if (window.innerWidth > 375) {
  //   if (window.pageYOffset >= 150) {
  //     fakeH.style.top = '0px';
  //     fakeH.style.opacity = '1';

  //   } else {
  //     fakeH.style.top = '-75px';
  //     fakeH.style.opacity = '0';

  //   }
  // }

  if (window.innerWidth < 400) {
    
    

    console.log("Escroll"+window.pageYOffset)
    if (window.pageYOffset >=350) {
      
      searchBar.style.display = "none";
      footer.style.display = "flex";
    }
    if(window.pageYOffset <=350){

      searchBar.style.display = "flex";
      footer.style.display = "none";

    }
  }
};
