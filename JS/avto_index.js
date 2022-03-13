"use strict"

document.addEventListener('DOMContentLoaded', function(){

  const btn_remove_1 = document.querySelector('.img_js_click');
  btn_remove_1.addEventListener("click", function(event) {
  window.location.href = '../index.html';
  });

  const passwordbtn = document.querySelector('.passwordbtn');
  passwordbtn.addEventListener("click", function(event) {
  window.location.href = '../HTML/password.html';
  });

});
