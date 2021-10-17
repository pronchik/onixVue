function openmenu(){
  const aside = document.querySelectorAll("aside");
  aside[0].classList.toggle('active');

  const projectName = document.getElementById('project-name');
  projectName.classList.toggle('active');

  const search = document.getElementById('search');
  search.classList.toggle('active');

  const projectLogo = document.getElementById('project-logo');
  projectLogo.classList.toggle('active');

  const namePosition = document.getElementsByClassName('name-position');
  namePosition[0].classList.toggle('active');

  const circle = document.getElementsByClassName('circle');
  circle[0].classList.toggle('active');
  circle[1].classList.toggle('active');
  circle[2].classList.toggle('active');

  const userImg = document.getElementsByClassName('user-img');
  userImg[0].classList.toggle('active');

  const statis = document.getElementsByClassName('statis');
  statis[0].classList.toggle('active');

  const menu1 = document.getElementsByClassName('menu1');
  menu1[0].classList.toggle('active');

  const menuList = document.getElementsByClassName('menu-list');
  menuList[0].classList.toggle('active');

  const menuListIcons = document.getElementsByClassName('menu-list-icons');
  menuListIcons[0].classList.toggle('active');

  const nav = document.querySelectorAll("nav");
  nav[0].classList.toggle('active');

  const section = document.querySelectorAll("section");
  section[0].classList.toggle('active');

  const selectTasks = document.getElementById('select-tasks');
  selectTasks.classList.toggle('active');

  const selectKanban = document.getElementById('select-kanban');
  selectKanban.classList.toggle('active');

  const selectActivity = document.getElementById('select-activity');
  selectActivity.classList.toggle('active');

  const selectCalendar = document.getElementById('select-calendar');
  selectCalendar.classList.toggle('active');

  const selectFiles = document.getElementById('select-files');
  selectFiles.classList.toggle('active');
}

function tasks(){
  function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const day1 = document.getElementById('day');
  day1.classList.toggle('active1');

  const selecTasks = document.getElementById('select-tasks');
  selecTasks.classList.toggle('active1');

  
}

function kanban(){
  function myFunction(e) {
      let elems = document.querySelectorAll(".active1");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active1");
      });
    }
  myFunction();
  const kanban1 = document.getElementById('kanban');
  kanban1.classList.toggle('active1');

  const selecKanban = document.getElementById('select-kanban');
  selecKanban.classList.toggle('active1');

}

function activity(){
  function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const activity1 = document.getElementById('activity');
  activity1.classList.toggle('active1');

  const message = document.getElementsByClassName('message');
  message[0].classList.toggle('active1');
  message[1].classList.toggle('active1');
  message[2].classList.toggle('active1');

  const tip = document.getElementsByClassName('tip');
  tip[0].classList.toggle('active1');

  const photo = document.getElementsByClassName('photo');
  photo[0].classList.toggle('active1');
  photo[1].classList.toggle('active1');
  photo[2].classList.toggle('active1');
  photo[3].classList.toggle('active1');

  const selecActivity = document.getElementById('select-activity');
  selecActivity.classList.toggle('active1');

}

function files(){
function myFunction(e) {
    let  elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const files1 = document.getElementById('files');
  files1.classList.toggle('active1');

  const selecFiles = document.getElementById('select-files');
  selecFiles.classList.toggle('active1');
}

function calendar(){
function myFunction(e) {
    let elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  const calendar1 = document.getElementById('calendar');
  calendar1.classList.toggle('active1');

  const selecCalendar = document.getElementById('select-calendar');
  selecCalendar.classList.toggle('active1');
}

function modal(){
  const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementsByClassName("completed-tasks")[0];

// Get the <span> element that closes the modal
const btnNo = document.getElementsByClassName('no')[0];
const btnNYes = document.getElementsByClassName('yes')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
btnNo.onclick = function() {
  modal.style.display = "none";
};

btnNYes.onclick = function(){

  const numberCompleted = document.getElementsByClassName("number-completed")[0];
  

  const numberOpen = document.getElementsByClassName("number-open")[0];
  
  if(+numberOpen.innerText <=0){
    alert("Error");
    modal.style.display = "none";
  }
  else{
    numberCompleted.innerText = +numberCompleted.innerText + 1;
    numberOpen.innerText = +numberOpen.innerText - 1;
    modal.style.display = "none";
  }
  
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
}

window.onload = activity;

