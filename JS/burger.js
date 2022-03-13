const element_1 = document.querySelector('.text_shapka');
const btn_1 = document.querySelector('.burger');

btn_1.addEventListener("click", function(event) {
  element_1.classList.toggle('active');
});
