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

function fun1() {
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
    activity();
  }
}

/*function tasks(){
  function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const day1 = document.getElementsByClassName('tasks')[0];
  day1.classList.toggle('active1');

  const select = document.getElementsByTagName("span");
  for(let i = 15 ; i < 20; i++){
    if(i == 15){
      select[i].style.display = 'block';
    }
    else{
      select[i].style.display = 'none';
    }
  }
  
}

function kanban(){
  function myFunction(e) {
      let elems = document.querySelectorAll(".active1");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active1");
      });
    }
  myFunction();
  const kanban1 = document.getElementsByClassName('kanban')[0];
  kanban1.classList.toggle('active1');

  const select = document.getElementsByTagName("span");
  for(let i = 15 ; i < 20; i++){
    if(i == 16){
      select[i].style.display = 'block';
    }
    else{
      select[i].style.display = 'none';
    }
  }

}

function activity(){
  function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const activity1 = document.getElementsByClassName('activity')[0];
  activity1.classList.toggle('active1');

  const message = document.getElementsByClassName('message');
  message[0].classList.toggle('active1');
  message[1].classList.toggle('active1');
  message[2].classList.toggle('active1');

  const tip = document.getElementsByClassName('tip');
  tip[0].classList.toggle('active1');



  const select = document.getElementsByTagName("span");
  for(let i = 15 ; i < 20; i++){
    if(i == 17){
      select[i].style.display = 'block';
    }
    else{
      select[i].style.display = 'none';
    }
  }
}

function files(){
function myFunction(e) {
    let  elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const files1 = document.getElementsByClassName('files')[0];
  files1.classList.toggle('active1');

  const select = document.getElementsByTagName("span");
  for(let i = 15 ; i < 20; i++){
    if(i == 18){
      select[i].style.display = 'block';
    }
    else{
      select[i].style.display = 'none';
    }
  }
}

function calendar(){
function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const calendar1 = document.getElementsByClassName('calendar')[0];
  calendar1.classList.toggle('active1');

  const select = document.getElementsByTagName("span");
  for(let i = 15 ; i < 20; i++){
    if(i == 19){
      select[i].style.display = 'block';
    }
    else{
      select[i].style.display = 'none';
    }
  }
}*/

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
  activity();
  img();
};
