function openMenu(){
  const aside = document.getElementsByTagName("aside")[0];
  aside.classList.toggle('active');

  const span = document.getElementsByTagName("span")[0];
  span.classList.toggle('active');

  const pLogo = document.getElementById('project-logo');
  pLogo.classList.toggle('active');

  const search = document.getElementById('search');
  search.classList.toggle('active');

  const userImg = document.getElementsByClassName('introduction')[0];
  userImg.classList.toggle('active');

  const name = document.getElementsByTagName('p')[0].classList.toggle('active');

  const position = document.getElementsByTagName('span')[1];
  position.classList.toggle('active');

  const circle = document.getElementsByClassName("circle")[0];
  circle.classList.toggle('active');

  const statis = document.getElementsByClassName("statistic")[0];
  statis.classList.toggle('active');

  const  menu = document.getElementsByClassName('menu')[0];
  menu.classList.toggle('active');

  const img = document.getElementsByTagName("img");
  img[3].classList.toggle('active');
  img[4].classList.toggle('active');
  img[5].classList.toggle('active');

  const spanMenu = document.getElementsByTagName('span')[7];
  spanMenu.classList.toggle('active');

  const ul = document.getElementsByTagName('ul')[0];
  ul.classList.toggle('active');

  const asd = document.getElementsByClassName('asd')[0];
  asd.classList.toggle('active');
}

/*function fun1() {
  let sel=document.getElementById('select').selectedIndex;
  let options=document.getElementById('select').options;
  if(options[sel].value == 'Kanban'){
    kanban();
  }
  if(options[sel].value == 'Tasks'){
    tasks();
  }
  if(options[sel].value == 'Calendar'){
    calendar();
  }
  if(options[sel].value == 'Files'){
    files();
  }
  if(options[sel].value == 'Activity'){
    
  }
}*/
function activity(){
const markers = document.querySelectorAll('.marker span')
 const tabs = document.querySelectorAll('.content>div')
 document.querySelectorAll('.navigation a').forEach((link, index) => {
   link.onclick = () => {
     markers.forEach(marker => marker.style.display = 'none')
     tabs.forEach(tab => tab.classList.remove('active1'))
     markers[index].style.display = 'block'
     Array.from(tabs).find(tab => tab.classList.contains(link.innerHTML.toLowerCase())).classList.add('active1')
   }
 })
}


function activity1(){
  const markers = document.querySelectorAll('.marker span')[2]
 const tabs = document.querySelectorAll('.content>div')[2]
markers.style.display = 'block'
     tab.classList.add('active1')
   }
}


function modal(){
  const modal = document.getElementsByClassName("modal")[0];

  const btnNo = document.getElementsByClassName('no')[0];
  const btnNYes = document.getElementsByClassName('yes')[0];

  const numberCompleted = document.getElementsByTagName("p")[1];
  
  const numberOpen = document.getElementsByTagName("p")[2];

  modal.style.display = "block";

  btnNo.onclick = function() {
    modal.style.display = "none";
  };

  btnNYes.onclick = function(){

    if(+numberOpen.innerText <= 0){
      alert("Error");
      modal.style.display = "none";
    }
    else{
      numberCompleted.innerText = +numberCompleted.innerText + 1;
      numberOpen.innerText = +numberOpen.innerText - 1;
      modal.style.display = "none";
    }
  
};

}

function img(){
  const img1 = document.getElementsByTagName('img');
  const log = document.getElementsByTagName("span")[8];

  img1[14].onclick = () =>{
    log.innerText = '0';
  };
  img1[15].onclick = function(){
    log.innerText = '1';
  };
  img1[16].onclick = function(){
    log.innerText = '2';
  };
  img1[17].onclick = function(){
    log.innerText = '3';
  };

}

window.onload = () =>{
  img();
  activity1();
  activity();
};
