console.log("i am in")

let isOpen = false ;

// DECLARING ALL THE VARIABLES 

let navList = document.querySelector('.navlist')
let searchButton = document.getElementById('searchButton')
let searchBar = document.querySelector('.searchBar')
let body = document.getElementsByTagName('body')


// ADDING EVENT TO THE SEARCH ICON 

searchButton.addEventListener('click', showSearchBar)


// FUNCTION FOR OPENING AND CLOSING SEARCH BAR 

function showSearchBar (){
    console.log('function is working');

if(!isOpen){
    navList.style.display ='none' ;
    searchBar.style.display = 'flex';
    searchBar.style.transition = '1s';
    searchButton.style.backgroundColor ='orange' ;
    isOpen = true ;
  
}
else{
    navList.style.display ='flex' ;
    searchBar.style.display = 'none';
    searchButton.style.backgroundColor =' rgb(187, 187, 196)' ;
    isOpen = false ;
}
}

// HAMBURGER NAV BAR MAKING 
// selecting the hamburger 
let hamBurger = document.querySelector('.threeBar') ;
deviceWidth = window.innerWidth ;
let hamBurgerOpen = false ;
let mobileMenu = document.querySelector('.mobileMenu');
let mobileMenuCloseButton =document.querySelector('#menuClose')
console.log(mobileMenuCloseButton)

console.log(hamBurger)


hamBurger.addEventListener('click', openHamburger)

function openHamburger (){
    if(deviceWidth<=770 ){
        console.log("everything is okk!")
       mobileMenu.style.display = 'flex'
    }
}

mobileMenuCloseButton.addEventListener('click', ()=>{
    mobileMenu.style.display = 'none'
})










// transformation of the subscribe button 
let Subscribed = false ;

let SubscribeButton = document.querySelector('.section1Button')
SubscribeButton.addEventListener('click', doSubScribe)

function doSubScribe () {
  
   if (Subscribed==false){
    SubscribeButton.innerHTML= 'Subscribed'
    SubscribeButton.style.backgroundColor='grey'
    Subscribed = true 
   }
   else {
    SubscribeButton.innerHTML= 'Subscribe'
    SubscribeButton.style.backgroundColor='rgb(241, 161, 10)'
    Subscribed = false
   }
}