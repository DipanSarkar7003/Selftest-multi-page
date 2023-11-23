console.log("i am in")

let isOpen = false ;

// DECLARING ALL THE VARIABLES 

let navList = document.querySelector('.navlist')
let searchButton = document.getElementById('searchButton')
let searchBar = document.querySelector('.searchBar')
let body = document.getElementsByTagName('body')
console.log(body)

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

// transformation of the subscribe button 
let Subscribed = false ;

let SubscribeButton = document.querySelector('.section1Button')
console.log(SubscribeButton)
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