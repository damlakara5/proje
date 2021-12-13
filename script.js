'use strict';

const btnAvatar = document.querySelector('.account-avatar');
const box = document.querySelector('.box');
const section = document.querySelector('.section');
const btnDrop = document.querySelector('.dropbtn');
const dropDownContent = document.querySelector('.dropdown-content');
const searchBar = document.querySelector('.search-bar');
const searchBarContent = document.querySelector('.search-bar_content');
const overlay = document.querySelector('.overlay');

const toggle = function () {
  dropDownContent.classList.add('hidden');
  searchBarContent.classList.add('hidden');
};

btnDrop.addEventListener('click', function getDetails(evt) {
  dropDownContent.classList.toggle('hidden');
  searchBarContent.classList.add('hidden');
  evt.stopPropagation();
});

document.addEventListener('click', function (e) {
  toggle(); // call function
});

btnAvatar.addEventListener('click', function () {
  box.classList.toggle('hidden');
});

searchBar.addEventListener('click', function getDetails(evt) {
  searchBarContent.classList.toggle('hidden');
  dropDownContent.classList.add('hidden');
  evt.stopPropagation();
});

document.addEventListener('click', function (e) {
  toggle(); // call function
});

//search content
const Database = [
  'Lorem',
  'Lorem',
  'Lorem',
  'ananan jsdkd kajkaj',
  'bacım ne diyon',
];
// you stiil can use const but not changhe the value in the array ok..
const displayDatabase = function (Database) {
  Database.forEach(function (cont) {
    const html = ` <a href="#" class="search-bar_add">${cont}</a>`;

    searchBarContent.insertAdjacentHTML('afterbegin', html);
  });
};

displayDatabase(Database);

function selectElement(selector) {
  return document.querySelector(selector);
}

function getResults() {
  selectElement('.search-bar_content').innerHTML = '';
  const search = selectElement('#arama').value;
  for (let i = 0; i < Database.length; i++) {
    if (Database[i].toLowerCase().includes(search.toLowerCase())) {
      selectElement('.search-bar_content').innerHTML += `
        <a href="#" class="search-bar_add">${Database[i]}</a> `;
    }
  }
}

selectElement('#arama').addEventListener('keyup', getResults);
