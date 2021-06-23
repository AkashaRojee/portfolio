let works = [];
const workSection = document.querySelector('#works');
const body = document.querySelector('body');

//Constructor for each work
function Work(...workData) {
  this.image = workData[0];
  this.title = workData[1];
  this.client = workData[2];
  this.role = workData[3];
  this.year = workData[4];
  this.description = workData[5];
  this.technologies = workData[6];
}

//Create array of Work objects
works = [
  new Work('tonic', 'Tonic', 'CANOPY', 'Back-End Dev', '2015', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', ['html', 'css', 'javascript']),

  new Work('multi-post-stories', 'Multi-Post Stories', 'FACEBOOK', 'Full Stack Dev', '2015', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('facebook-360', 'Facebook 360', 'FACEBOOK', 'Full Stack Dev', '2015', '  Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('uber-navigation', 'Uber Navigation', 'UBER', 'Lead Developer', '2015', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', ['html', 'ruby on rails', 'css', 'javascript'])
];

//Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames, attributes = {}, textContent = '') {
  let elementObject = document.createElement(elementType);
  elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach(attribute => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.textContent = textContent;
  return elementObject;
}

//Create card elements
function createCard(index) {
  return {
    'work-card' : createElement('div',
                                'work-card flex-row justify-between wrap' +
                                  (index % 2 === 0 ? '' : ' desktop-row-reverse')),
    'work-image' : createElement('div', 'work-image flex-col justify-center'),
    'image' : createElement('img', 'image',
                            {'src' : '/images/works/' + works[index].image + '.png',
                              'alt' : 'Screenshot of ' + works[index].title}),
    'work-info' : createElement('div', 'work-info flex-col'),
    'title' : createElement('span', 'title flex-row blue-main span', {}, works[index].title),
    'subtitle' : createElement('div', 'subtitle flex-row align-center'),
    'client' : createElement('span', 'client blue-light', {}, works[index].client),
    'separator' : createElement('div', 'separator'),
    'separator-image' : createElement('img', 'separator-image',
                                    {'src' : 'images/works/circle.png',
                                      'alt' : 'Separator'}),
    'role' : createElement('span', 'role grey-main', {}, works[index].role),
    'year' : createElement('span', 'year grey-main', {}, works[index].year),
    'work-details' : createElement('div', 'work-details flex-row wrap'),
    'work-description' : createElement('p', 'work-description flex-col blue-light', {}, works[index].description),
    'work-tags-buttons' : createElement('div', 'work-tags-buttons flex-col'),
    'tag-info' : createElement('div', 'tag-info flex-row font-medium purple-main wrap'),
    'work-technology': createElement('span', 'work-technology'),
    'work-buttons' : createElement('div', 'work-buttons'),
    'btn' : createElement('button', 'btn font-medium', {}, 'See Project')
  };
}

//Append card elements to required parents
function structureCard(card, index) {
  workSection.appendChild(card['work-card']);
  card['work-card'].append(card['work-image'], card['work-info']);
  card['work-image'].appendChild(card['image']);
  card['work-info'].append(card['title'], card['subtitle'], card['work-details']);
  
  card['separator'].appendChild(card['separator-image']);
  card['subtitle'].append(card['client'], card['separator'],
                          card['role'], card['separator'].cloneNode(true),
                          card['year']);

  card['work-details'].append(card['work-description'], card['work-tags-buttons']);
  card['work-tags-buttons'].append(card['tag-info'], card['work-buttons']);

  let spans = [];
  works[index].technologies.forEach(tech => {
    let span = card['work-technology'].cloneNode(true);
    span.textContent = tech;
    spans.push(span);
  });
  card['tag-info'].append(...spans);

  card['work-buttons'].appendChild(card['btn'])
  return card;
}

function showModal(index) {
  let modalCard = createCard(index);
  modalCard = structureCard(modalCard, index);
  modalCard['work-card'].classList.add('modal');
  body.append(modalCard['work-card']);
  body.querySelectorAll(':not(.modal, .modal *)').forEach(element => {
    element.style.filter = 'brightness(50%)';
  })
}

//Create HTML for works container and for each work card
//and add event listener to See Project button
function populateWorkSection() {
  const workHeading = createElement('h2', 'hidden', {}, 'Works');
  workSection.appendChild(workHeading);
  works.forEach((work, index) => {
    let card = createCard(index);
    card = structureCard(card, index);
    card['btn'].addEventListener('click', function() {
      showModal(index);
    });
  });
}

//Create HTML for work section after whole page has loaded
window.addEventListener('load', populateWorkSection);