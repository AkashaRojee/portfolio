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
  this.liveLink = workData[7];
  this.sourceLink = workData[8];
}

//Create array of Work objects
works = [
  new Work('tonic', 'Tonic', 'CANOPY', 'Back-End Dev', '2015',
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
            ['html', 'css', 'javascript'],
            'https://AkashaRojee.github.io/tonic',
            'https://github.com/AkashaRojee/tonic'),

  new Work('multi-post-stories', 'Multi-Post Stories','FACEBOOK', 'Full Stack Dev', '2015',
            'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
            ['html', 'ruby on rails', 'css', 'javascript'],
            'https://AkashaRojee.github.io/multi-post-stories',
            'https://github.com/AkashaRojee/multi-post-stories'),

  new Work('facebook-360', 'Facebook 360', 'FACEBOOK', 'Full Stack Dev', '2015',
            'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
            ['html', 'ruby on rails', 'css', 'javascript'],
            'https://AkashaRojee.github.io/facebook-360',
            'https://github.com/AkashaRojee/facebook-360'),

  new Work('uber-navigation', 'Uber Navigation', 'UBER', 'Lead Developer', '2015',
            'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
            ['html', 'ruby on rails', 'css', 'javascript'],
            'https://AkashaRojee.github.io/uber-navigation',
            'https://github.com/AkashaRojee/uber-navigation')
];

//Create HTML element of given type and add classes, attributes and textContent (where applicable)
function createElement(elementType, classNames, attributes = {}, textContent = '') {
  let elementObject = document.createElement(elementType);
  elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach(attribute => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = textContent;
  return elementObject;
}

//Create card elements
function createCard(index) {
  return {
    'work-card' : createElement('div',
                                'work-card flex-col desktop-flex-row justify-between' +
                                (index % 2 === 0 ? '' : ' desktop-row-reverse')),
    'image-container' : createElement('div', 'image-container flex-col'),
    'image' : createElement('img', 'image',
                            {'src' : '/images/works/' + works[index].image + '.png',
                              'alt' : 'Screenshot of ' + works[index].title}),
    'content' : createElement('div', 'content flex-col'),
    'title-subtitle' : createElement('div', 'title-subtitle flex-col'),
    'title' : createElement('span', 'title flex-row blue-main span', {}, works[index].title),
    'subtitle' : createElement('div', 'subtitle flex-row align-center'),
    'client' : createElement('span', 'client blue-light', {}, works[index].client),
    'separator' : createElement('div', 'separator'),
    'separator-image' : createElement('img', 'separator-image',
                                    {'src' : 'images/works/circle.png',
                                      'alt' : 'Separator'}),
    'role' : createElement('span', 'role grey-main', {}, works[index].role),
    'year' : createElement('span', 'year grey-main', {}, works[index].year),
    'desc-tag-button' : createElement('div', 'desc-tag-button flex-col'),
    'work-description' : createElement('p', 'work-description flex-row blue-light', {}, works[index].description),
    'tags-buttons' : createElement('div', 'tags-buttons flex-col'),
    'tag-info' : createElement('div', 'tag-info flex-row font-medium purple-main wrap'),
    'technology': createElement('span', 'technology'),
    'work-buttons' : createElement('div', 'work-buttons flex-row'),
    'button-project' : createElement('button', 'button-project btn font-medium', {}, 'See Project'),
    'button-live' : createElement('button', 'button-live button-modal btn font-medium',
                                  {}, '<a href="' + works[index].liveLink + '">See Live</a>'),
    'button-source' : createElement('button', 'button-source button-modal btn font-medium',
                                    {}, '<a href="' + works[index].sourceLink + '">See Source</a>')
  };
}

//Append card elements to required parents
function structureCard(card, index) {
  workSection.appendChild(card['work-card']);
  card['work-card'].append(card['image-container'], card['content']);
  card['image-container'].append(card['image']);
  card['content'].append(card['title-subtitle'], card['desc-tag-button']);
  card['title-subtitle'].append(card['title'], card['subtitle']);
  
  card['separator'].appendChild(card['separator-image']);
  card['subtitle'].append(card['client'], card['separator'],
                          card['role'], card['separator'].cloneNode(true),
                          card['year']);

  card['desc-tag-button'].append(card['work-description'], card['tags-buttons']);
  card['tags-buttons'].append(card['tag-info'], card['work-buttons']);

  works[index].technologies.forEach(tech => {
    let span = card['technology'].cloneNode(true);
    span.textContent = tech;
    card['tag-info'].appendChild(span);
  });

  card['work-buttons'].appendChild(card['button-project'])
  return card;
}

//Remove modal work card from body,
//and reset brightness in the background
function closeModal() {
  body.querySelector('.modal').remove();
  body.querySelectorAll(':not(.modal, .modal *)').forEach(element => {
    element.style.filter = 'brightness(100%)';
  })
}

function showModal(index) {

  //Create modal work card
  let modalCard = createCard(index);
  modalCard = structureCard(modalCard, index);
  modalCard['work-card'].classList.add('modal');
  modalCard['work-card'].classList.remove('desktop-flex-row', 'desktop-row-reverse');

  //Unpack content container and append its direct children to work card
  modalCard['work-card'].append(modalCard['title-subtitle'], modalCard['desc-tag-button']);
  modalCard['content'].remove();

  modalCard['desc-tag-button'].classList.add('desktop-flex-row');
  modalCard['work-description'].classList.add('desktop-flex-col');
  modalCard['tags-buttons'].classList.add('desktop-flex-col');

  //Dynamically add modal close icon to modal work card,
  //and add event listener to close modal window
  let modalClose = createElement('img', 'modal-close',
                                  {'src' : '/images/icons/mobile-modal-close.svg',
                                  'alt' : 'Close mobile modal window'});
  modalCard['work-card'].appendChild(modalClose);
  modalClose.addEventListener('click', function () {
    closeModal();
  });

  modalCard['work-buttons'].removeChild(modalCard['button-project']);
  modalCard['work-buttons'].append(modalCard['button-live'], modalCard['button-source']);
  modalCard['work-buttons'].classList.add('justify-around');

  //Add modal work card to body,
  //and reduce brightness in the background
  body.append(modalCard['work-card']);
  body.querySelectorAll(':not(.modal, .modal *)').forEach(element => {
    element.style.filter = 'brightness(50%) grayscale(100%)';
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
    card['button-project'].addEventListener('click', function() {
      showModal(index);
    });
  });
}

//Create HTML for work section after whole page has loaded
window.addEventListener('load', populateWorkSection);