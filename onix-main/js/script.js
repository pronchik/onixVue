function openmenu(){
    const leftSidebar = document.getElementsByClassName('left-sidebar'),
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