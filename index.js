// Иконка профиля, нажать.
const iconProfile = document.querySelector('.icon-profile');
const menuProfile = document.querySelector('.menu-profile');
iconProfile.addEventListener('click', () => {
  menuProfile.classList.toggle('open')
})
//CLICK LOGIN
const clickLogin = document.querySelector('.login');
const openModalLogin = document.querySelector('.modal-login');
clickLogin.addEventListener('click', () => {
  openModalLogin.classList.toggle('hidden');
})
openModalLogin.addEventListener('click', (e) =>{
  if(e.target.className === 'modal-login hidden' || e.target.className === 'bttn-close'){
     openModalLogin.classList.toggle('hidden');}
     if(e.target.className === 'register'){
      openModalLogin.classList.toggle('hidden');
       openModalregister.classList.toggle('hidden')
     }
  })
//CLICK REGISTER
const clickRegister = document.querySelector('.register');
const openModalregister = document.querySelector('.modal-register');
clickRegister.addEventListener('click', () =>{
    openModalregister.classList.toggle('hidden')
})
openModalregister.addEventListener('click', (e) => {
  if(e.target.className === 'modal-register hidden' || e.target.className === 'bttn-close'){
    openModalregister.classList.toggle('hidden')}
    if(e.target.className === 'login'){
      openModalregister.classList.toggle('hidden');
      openModalLogin.classList.toggle('hidden');
 }})
//OPEN MY PROFILE 
const buttomOpenModalMyProfile = document.querySelector('.open-myprofile');
const openModalMyProfile = document.querySelector('.modal-my-profile');
buttomOpenModalMyProfile.addEventListener('click', () => {
  openModalLogin.classList.remove('hidden');
  openModalregister.classList.remove('hidden');
  openModalMyProfile.classList.toggle('hidden')
})
openModalMyProfile.addEventListener('click', (e) => {
 if (e.target.className === 'modal-my-profile hidden' || e.target.className === 'bttn-close'){
  openModalMyProfile.classList.toggle('hidden')
  }
})


//КАРУСЕЛЬ, КАРУСЕЛЬ//
/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;}
/* конфигурация */
const referenceWidth = 769; // Размер экрана адаптива. 
let width = 495; // ширина картинки
let count = 1; // видимое количество изображений
let position = 0; // положение ленты прокрутки
const paginationBar = document.querySelector('.about__pagination');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
paginationBar.addEventListener('click', (e) => {
  //То бишь, innerWidth - это размер экрана, и коль он больше размера
  //таблета, то ширина картинки будет либо 495(5 кнопки) или 450, как в макете.
  const imageWidth = window.innerWidth > referenceWidth ? 495 : 450;
  // Маркировка ????? Разберись, мазафака.
  for (const child of paginationBar.children) {
    child.classList.remove("active");
  }
  e.target.classList.add("active");
//Так-с, значиться здесь напрямую можно обращщаться к детям пагинации через child? 
//Вроде дошло, paginationBar.children - доступ к детям. Актив это свойство из ксс? 
const currentIndex = e.target.dataset.index; // Это что? NB 
// 3 btns
if (window.innerWidth > referenceWidth) {
  switch (+currentIndex) {
    case 0:
      position = 0;
      break;

    case 1:
      if (position === 0) {
        position -= width;
      } else {
        position += width;
      }
      break;

    case 2:
      position = -(width * (count + count));
      break;

    default:
      position = 0;
      break;
  }
}
// 5 btns
if (referenceWidth >= window.innerWidth) {
  position = currentIndex * (-imageWidth + -imageWidth);
}
list.style.marginLeft = position + "px";
}); 
//Значицца идем дальше, стрелки, можно сделать по дефолту, как в том
// примере, слегка меняя пораметры. Кстати, можно обьеденить это
//в одну функцию? И еще, как это взаимосвязать с дотами? Мол, при 
//переключении картики через стрелку, дот переключал вместе с картинкой 
//класс на активный. Пыталась это взимосвязать это выше, но какая-то фигня.
carousel.querySelector('.prew').onclick = function() { //лево
  position += width * count;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};
carousel.querySelector('.next').onclick = function() { // право
  width = 900;
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

//ФАВОРИТЫ, МОИ Ж ВЫ ФАВОРИТЫ.
function favoritesTab(pageName, elem){
  let i;
  let favoritesContent = document.getElementsByClassName('favorites__item');
  //Тут скрываем все по дефолту.
  for( i = 0; i < favoritesContent.length; i++){
    favoritesContent[i].style.display = "none";
    document.getElementById(pageName).style.display = "flex";
  }}
document.getElementById("defaultOpen").click();
//


console.log();


//Для отслеживания моего клика по элементам, мне эта штука не помешает.
window.addEventListener('click', (event) =>{
  console.log(event)})






let


