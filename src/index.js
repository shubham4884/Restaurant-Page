import './style.css';
import { callPage, createFooter } from './pages';
import homePage from './home';

const container = document.getElementById('content');
const createMenuTabs = () => {
  const tabs = document.createElement('div');
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');
  tabs.className = 'tabsContainer';
  homeButton.className = 'menulink';
  menuButton.className = 'menulink';
  contactButton.className = 'menulink';
  homeButton.id = 'home';
  menuButton.id = 'menu';
  contactButton.id = 'contact';
  homeButton.innerText = 'Home';
  menuButton.innerText = 'Our Menu';
  contactButton.innerText = 'Contact Us';
  tabs.append(homeButton, menuButton, contactButton);
  return tabs;
};

const createNav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = '<strong>The Flavours Restaurant<strong>';
  nav.appendChild(createMenuTabs());
  return nav;
};

function init() {
  container.append(createNav(), homePage(), createFooter());

  const home = document.getElementById('home');
  home.addEventListener('click', callPage);
  const menu = document.getElementById('menu');
  menu.addEventListener('click', callPage);
  const contact = document.getElementById('contact');
  contact.addEventListener('click', callPage);
}

document.addEventListener('DOMContentLoaded', init);