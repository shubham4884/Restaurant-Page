import item1 from './images/Pizza.jpg';
import item2 from './images/Burger.jpg';
import item3 from './images/Crispy Chicken.jpg';

const menuPage = () => {
  const title = document.createElement('h1');
  const grid = document.createElement('div');
  const tempContainer = document.createElement('div');
  tempContainer.setAttribute('class', 'menu');
  const module1 = document.createElement('div');
  const module2 = document.createElement('div');
  const module3 = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const title1 = document.createElement('h2');
  const title2 = document.createElement('h2');
  const title3 = document.createElement('h2');
  const price1 = document.createElement('span');
  const price2 = document.createElement('span');
  const price3 = document.createElement('span');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  title.innerHTML = 'Our Unique Menu';
  grid.setAttribute('class', 'grid');
  module1.setAttribute('class', 'module');
  module2.setAttribute('class', 'module');
  module3.setAttribute('class', 'module');
  img1.setAttribute('src', `${item1}`);
  img2.setAttribute('src', `${item2}`);
  img3.setAttribute('src', `${item3}`);
  title1.innerText = 'Pizza';
  title2.innerText = 'Burger';
  title3.innerText = 'Crispy Chicken';
  price1.innerText = 'price: Rs - 200';
  price2.innerText = 'price: Rs- 100';
  price3.innerText = 'price: Rs- 250';
  p1.innerText = `One of the most popular foods in the world and a common fast food item in Europe and North America.`;
  p2.innerText = `A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun`;
  p3.innerText = `The dish has also been called "spicy" and "salty". Occasionally, fried chicken is also topped with chili like paprika, or hot sauce to give it a spicy taste.`;
  module1.append(img1, title1, price1, p1);
  module2.append(img2, title2, price2, p2);
  module3.append(img3, title3, price3, p3);
  grid.append(module1, module2, module3);

  tempContainer.append(title, grid);
  return tempContainer;
};

export default menuPage;