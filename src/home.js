import cover from './images/cover.jpg';

const homePage = () => {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');
  const intro = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const img = document.createElement('img');
  intro.setAttribute('class', 'intro');
  h1.innerText = 'Lets know Our Restaurant';
  p.innerText =`This place is known for its warm courtseyand excellent hospitality
  it gives to its every guest. Restaurant Flowers provides the perfect ambiance for every type of guest with wide variety of food to choose from.`;
  img.setAttribute('class', 'image');
  img.setAttribute('src', `${cover}`);
  intro.append(h1, p);
  main.append(intro, img);

  return main;
};

export default homePage;