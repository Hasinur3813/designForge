'use strict';
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

function openMenu(){
    mobileMenu.classList.toggle('hidden');
}



function sortNum(n){
    let nArr = n.split(',')
    let sortedNumber;
    sortedNumber = nArr.sort((a,b)=>{
        return a-b;
    });
    return sortedNumber;
}



console.log(sortNum('2,3,5,3,33,23,64,6,7'));