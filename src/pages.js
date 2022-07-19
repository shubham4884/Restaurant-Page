import contactPage from './contact';
import homePage from './home';
import menuPage from './menu';

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = 'darbhanga123@2015';
  return footer;
};
const replaceElem = newElem => {
    const container = document.getElementById('content');
    const oldElem = container.getElementsByTagName('div')[1];
    container.replaceChild(newElem, oldElem);
    return container;
  };
  
  const callPage = (event) => {
    switch (event.target.id) {
      case 'home':
        replaceElem(homePage());
        break;
      case 'menu':
        replaceElem(menuPage());
        break;
      case 'contact':
        replaceElem(contactPage());
        break;
      default:
        break;
    }
  };
  
  
  export { callPage, createFooter };