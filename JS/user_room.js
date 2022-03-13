"use strict"

document.addEventListener('DOMContentLoaded', function(){

  const curt = document.querySelector('.curt');
  const menu = document.querySelector('.menu');
  const click_menu = document.querySelector('.refresh');
  click_menu.addEventListener("click", user_room_menu)

function user_room_menu(){
  click_menu.classList.toggle('active');
  menu.classList.toggle('active');
  curt.classList.toggle('active');
}
});
