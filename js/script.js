function openmenu(){
  aside = document.querySelectorAll("aside");
  aside[0].classList.toggle('active');

  projectName = document.getElementById('project-name');
  projectName.classList.toggle('active');

  search = document.getElementById('search');
  search.classList.toggle('active');

  projectLogo = document.getElementById('project-logo');
  projectLogo.classList.toggle('active');

  

  namePosition = document.getElementsByClassName('name-position');
  namePosition[0].classList.toggle('active');

  circle = document.getElementsByClassName('circle');
  circle[0].classList.toggle('active');
  circle[1].classList.toggle('active');
  circle[2].classList.toggle('active');

  userImg = document.getElementsByClassName('user-img');
  userImg[0].classList.toggle('active');

  statis = document.getElementsByClassName('statis');
  statis[0].classList.toggle('active');

  menu1 = document.getElementsByClassName('menu1');
  menu1[0].classList.toggle('active');

  menuList = document.getElementsByClassName('menu-list');
  menuList[0].classList.toggle('active');

  menuListIcons = document.getElementsByClassName('menu-list-icons');
  menuListIcons[0].classList.toggle('active');

  nav = document.querySelectorAll("nav");
  nav[0].classList.toggle('active');

  section = document.querySelectorAll("section");
  section[0].classList.toggle('active');

}

function tasks(){
  function myFunction(e) {
    var elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  day1 = document.getElementById('day');
  day1.classList.toggle('active1');

  selecTasks = document.getElementById('select-tasks');
  selecTasks.classList.toggle('active1');

  
}

function kanban(){
  function myFunction(e) {
      var elems = document.querySelectorAll(".active1");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active1");
      });
    }
  myFunction();
  kanban1 = document.getElementById('kanban');
  kanban1.classList.toggle('active1');

  selecKanban = document.getElementById('select-kanban');
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
  activity1 = document.getElementById('activity');
  activity1.classList.toggle('active1');

  message = document.getElementsByClassName('message');
  message[0].classList.toggle('active1');
  message[1].classList.toggle('active1');
  message[2].classList.toggle('active1');

  hr = document.getElementsByTagName('hr');
  hr[0].classList.toggle('active1');
  hr[1].classList.toggle('active1');
  hr[2].classList.toggle('active1');

  tip = document.getElementsByClassName('tip');
  tip[0].classList.toggle('active1');

  photo = document.getElementsByClassName('photo');
  photo[0].classList.toggle('active1');
  photo[1].classList.toggle('active1');
  photo[2].classList.toggle('active1');
  photo[3].classList.toggle('active1');
  selecActivity = document.getElementById('select-activity');
  selecActivity.classList.toggle('active1');

}

function files(){
function myFunction(e) {
    var elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  files1 = document.getElementById('files');
  files1.classList.toggle('active1');

  selecFiles = document.getElementById('select-files');
  selecFiles.classList.toggle('active1');
}

function calendar(){
function myFunction(e) {
    var elems = document.querySelectorAll(".active1");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active1");
    });
  }
  myFunction();
  calendar1 = document.getElementById('calendar');
  calendar1.classList.toggle('active1');

  selecCalendar = document.getElementById('select-calendar');
  selecCalendar.classList.toggle('active1');
}


window.onload = activity;

