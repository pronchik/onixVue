
function openmenu(){
    leftSidebar = document.getElementsByClassName('left-sidebar'),
    projectName = document.getElementById('project-name'),
    search = document.getElementById('search'),
    projectLogo = document.getElementById('project-logo'),
    headSidebar = document.getElementsByClassName('head-sidebar'),
    namePosition = document.getElementsByClassName('name-position'),
    circle = document.getElementsByClassName('circle'),
    userImg = document.getElementsByClassName('user-img'),
    statis = document.getElementsByClassName('statis'),
    menu1 = document.getElementsByClassName('menu1'),
    menuList = document.getElementsByClassName('menu-list'),
    menuListIcons = document.getElementsByClassName('menu-list-icons'),
    content = document.getElementsByClassName('content');

    leftSidebar [0].classList.toggle('active');
    
    projectName.classList.toggle('active');
  
    search.classList.toggle('active');
 
    projectLogo.classList.toggle('active');

    headSidebar[0].classList.toggle('active');

    namePosition[0].classList.toggle('active');

    circle[0].classList.toggle('active');
    circle[1].classList.toggle('active');
    circle[2].classList.toggle('active');
    
    userImg[0].classList.toggle('active');

    statis[0].classList.toggle('active');

    menu1[0].classList.toggle('active');

    menuList[0].classList.toggle('active');

    menuListIcons[0].classList.toggle('active');

    content[0].classList.toggle('active');

    
}

function tasks(){
    function myFunction(e) {
        let elems = document.querySelectorAll(".active1");
        [].forEach.call(elems, function(el) {
          el.classList.remove("active1");
        });
      }
    myFunction();
    day = document.getElementById('day');
    day.classList.toggle('active1');

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
}

function activity(){
  function myFunction(e) {
      var elems = document.querySelectorAll(".active1");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active1");
      });
    }
  myFunction();
  activity1 = document.getElementById('activity');
  activity1.classList.toggle('active1');
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
}