import map from './images/map.png';

const contactPage = () => {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');
  const intro = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const ul = document.createElement('ul');
  const contactLine1 = document.createElement('li');
  const contactLine2 = document.createElement('li');
  const contactLine3 = document.createElement('li');
  const contactLine4 = document.createElement('li');
  const img = document.createElement('img');
  intro.setAttribute('class', 'intro');
  h1.innerText = 'Get to know Our Restaurant';
  p.innerText = `Restaurant Flowers provides the perfect ambiance for every type of guest with wide variety of food to choose from:`;
  contactLine1.innerText = 'Contact Name : shubham kumar';
  contactLine2.innerText = 'Phone number: +91 7745698521';
  contactLine3.innerText = 'Address: Street 123';
  contactLine4.innerText = 'email: info@table.com';
  img.setAttribute('class', 'image');
  img.setAttribute('src', `${map}`);
  ul.append(contactLine1, contactLine2, contactLine3, contactLine4);
  intro.append(h1, p, ul);
  main.append(intro, img);

  return main;
};

export default contactPage;
