console.log("i am in")

let isOpen = false ;

let navList = document.querySelector('.navlist')
let searchButton = document.getElementById('searchButton')
let searchBar = document.querySelector('.searchBar')
console.log(searchBar)



searchButton.addEventListener('click', showSearchBar)

function showSearchBar (){
    console.log('function is working');

if(!isOpen){
    navList.style.display ='none' ;
    searchBar.style.display = 'flex';
    searchBar.style.transition = '1s';
    searchButton.style.display ='none' ;
    isOpen = true ;
}

}