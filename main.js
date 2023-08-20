import './style.scss';
const mainMenu = document.querySelector('#main-menu');
const subMenu = document.querySelector('#sub-menu');
const liItems = mainMenu.querySelectorAll('li');
const searchBtn = document.querySelector('#searchBtn');
const searchItem = document.querySelector('#search-item');
const btnClose = document.querySelector('#btn-close');

//data for menu items
const pclists = [
  { id: 11, type: 'PC', title: 'Steam', class: 'fa-brands fa-steam' },
  {
    id: 12,
    type: 'PC',
    title: 'Ubisoft Connect',
    class: 'fa-brands fa-dashcube',
  },
  { id: 13, type: 'PC', title: 'EA App', class: 'fa-solid fa-peace' },
  { id: 14, type: 'PC', title: 'Battle.net', class: 'fa-brands fa-battle-net' },
  { id: 15, type: 'PC', title: 'Rockstar', class: 'fa-brands fa-rockrms' },
  { id: 16, type: 'PC', title: 'GOG.com', class: 'fa-solid fa-hill-rockslide' },
  {
    id: 17,
    type: 'PC',
    title: 'Microsoft store',
    class: 'fa-brands fa-microsoft',
  },
  { id: 18, type: 'PC', title: 'Epic', class: 'fa-solid fa-helicopter-symbol' },
];

const playstationlists = [
  { id: 11, title: 'Station 1', class: 'fa-brands fa-steam' },
  {
    id: 12,
    title: 'Station 2',
    class: 'fa-brands fa-dashcube',
  },
  { id: 13, title: 'Station 3', class: 'fa-solid fa-peace' },
  { id: 14, title: 'Station 4', class: 'fa-brands fa-battle-net' },
  { id: 15, title: 'Station 5', class: 'fa-brands fa-rockrms' },
  { id: 16, title: 'Station 6', class: 'fa-solid fa-hill-rockslide' },
  {
    id: 17,
    title: 'Station 7',
    class: 'fa-brands fa-microsoft',
  },
  { id: 18, title: 'Station 8', class: 'fa-solid fa-helicopter-symbol' },
];

const xboxlists = [
  { id: 11, title: 'Xbox 1', class: 'fa-brands fa-steam' },
  {
    id: 12,
    title: 'Xbox 2',
    class: 'fa-brands fa-dashcube',
  },
  { id: 13, title: 'Xbox 3', class: 'fa-solid fa-peace' },
  { id: 14, title: 'Xbox 4', class: 'fa-brands fa-battle-net' },
  { id: 15, title: 'Xbox 5', class: 'fa-brands fa-rockrms' },
  { id: 16, title: 'Xbox 6', class: 'fa-solid fa-hill-rockslide' },
  {
    id: 17,
    title: 'Xbox 7',
    class: 'fa-brands fa-microsoft',
  },
  { id: 18, title: 'Xbox 8', class: 'fa-solid fa-helicopter-symbol' },
];

const ninlists = [
  { id: 11, title: 'Nintendo 1', class: 'fa-brands fa-steam' },
  {
    id: 12,
    title: 'Nintendo 2',
    class: 'fa-brands fa-dashcube',
  },
  { id: 13, title: 'Nintendo 3', class: 'fa-solid fa-peace' },
  { id: 14, title: 'Nintendo 4', class: 'fa-brands fa-battle-net' },
  { id: 15, title: 'Nintendo 5', class: 'fa-brands fa-rockrms' },
  { id: 16, title: 'Nintendo 6', class: 'fa-solid fa-hill-rockslide' },
  {
    id: 17,
    title: 'Nintendo 7',
    class: 'fa-brands fa-microsoft',
  },
  { id: 18, title: 'Nintendo 8', class: 'fa-solid fa-helicopter-symbol' },
];

let isShowSubMenu = false;
let pcFocused = false;
let playFocused = false;
let xboxFocused = false;
let ninFocused = false;
let isShowSearch = false;

//display none search items
searchItem.style.display = 'none';

//click event outside of the submenu and menuitems
document.body.addEventListener('click', function (event) {
  if (!subMenu.contains(event.target) && !mainMenu.contains(event.target)) {
    subMenu.style.display = 'none';
    pcFocused = false;
    playFocused = false;
    xboxFocused = false;
    ninFocused = false;
  }
});
//click event for each menu item
liItems.forEach((li) =>
  li.addEventListener('click', () => {
    const hoveredItem = li.querySelector('span').textContent;
    console.log(hoveredItem);

    if (hoveredItem === 'PC' && !pcFocused) {
      subMenu.style.display = 'block';
      showSubMenu(pclists);
      pcFocused = true;
      playFocused = false;
      xboxFocused = false;
      ninFocused = false;
    } else if (hoveredItem === 'Playstation' && !playFocused) {
      subMenu.style.display = 'block';
      showSubMenu(playstationlists);
      pcFocused = false;
      playFocused = true;
      xboxFocused = false;
      ninFocused = false;
    } else if (hoveredItem === 'Xbox' && !xboxFocused) {
      subMenu.style.display = 'block';
      showSubMenu(xboxlists);
      pcFocused = false;
      playFocused = false;
      xboxFocused = true;
      ninFocused = false;
    } else if (hoveredItem === 'Nintendo' && !ninFocused) {
      subMenu.style.display = 'block';
      showSubMenu(ninlists);
      pcFocused = false;
      playFocused = false;
      xboxFocused = false;
      ninFocused = true;
    } else {
      pcFocused = false;
      playFocused = false;
      xboxFocused = false;
      ninFocused = false;
      subMenu.style.display = 'none';
    }
  })
);

//display sub menu function
const showSubMenu = (items) => {
  subMenu.innerHTML = `<div >
<div class="flex-between bg-dark">
<h5 class='heading-5'>Plantforms</h5>
<button class='btn-2'>view all</button>
</div>
<div class="platform-items">
${items
  .map(
    (item) =>
      `<div key=${item.id} class="platform">
    <span>
      <i class='${item.class} platform__icon'></i>
    </span>
    <span>${item.title}</span>
  </div>`
  )
  .join('')}
</div>
<div class="flex-between bg-dark">
<h5 class='heading-5'>Prepaid cards</h5>
<button class='btn-2'>view all</button>
</div>
<div class='prepaidcard-items'>
<div class="prepaidcard">
<i class="fa-brands fa-steam"></i>
<span>
Steam gift cards
</span>
</div>
<div class="prepaidcard">
<i class="fa-solid fa-signal"></i>
<span>
IG gift cards
</span>
</div>
<div class="prepaidcard">
<i class="fa-solid fa-dragon"></i>
<span>
Blizzard gift cards
</span>
</div>
</div>
</div>`;
};

btnClose.addEventListener('click', () => {
  searchItem.style.display = 'none';
  mainMenu.style.display = 'block';
});

searchBtn.addEventListener('click', () => {
  subMenu.style.display = 'none';
  mainMenu.style.display = 'none';
  searchItem.style.display = 'flex';
});
