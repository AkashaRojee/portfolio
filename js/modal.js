let works = [];
let workCardElements = [];
const workSection = document.querySelector('#works');

//Constructor for each work
function Work(...workData) {
  this.image = workData[0];
  this.title = workData[1];
  this.client = workData[2];
  this.role = workData[3];
  this.year = workData[4];
  this.description = workData[5];
  this.technology = workData[6];
}

//Constructor for each HTML element in work-card:
//class names to apply to it, and its element type
function ClassElement(classNames, elementType) {
  this.classNames = classNames;
  this.elementType = elementType;
}

//Create array of Work objects
works = [
  new Work('tonic', 'Tonic', 'CANOPY', 'Back-End Dev', '2015', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', ['html', 'css', 'javascript']),

  new Work('multi-post-stories', 'Multi-Post Stories', 'FACEBOOK', 'Full Stack Dev', '2015', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('facebook-360', 'Facebook 360', 'FACEBOOK', 'Full Stack Dev', '2015', '  Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('uber-navigation', 'Uber Navigation', 'UBER', 'Lead Developer', '2015', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', ['html', 'ruby on rails', 'css', 'javascript'])
];

//Create array of ClassElement objects
workCardElements = [
  new ClassElement(['work-card', 'flex-row', 'justify-between', 'wrap'], 'div'),
  new ClassElement(['work-image', 'flex-col'], 'img'),
  new ClassElement(['work-info', 'flex-col'], 'div'),
  new ClassElement(['title', 'flex-row', 'blue-main'], 'span'),
  new ClassElement(['subtitle', 'flex-row', 'align-center'], 'div'),
  new ClassElement(['client', 'blue-light'], 'span'),
  new ClassElement(['separator'], 'div'),
  new ClassElement(['separator-image'], 'img'),
  new ClassElement(['role', 'grey-main'], 'span'),
  new ClassElement(['separator'], 'div'),
  new ClassElement(['separator-image'], 'img'),
  new ClassElement(['year', 'grey-main'], 'span'),
  new ClassElement(['work-details', 'flex-row', 'wrap'], 'div'),
  new ClassElement(['work-description', 'flex-col', 'blue-light'], 'p'),
  new ClassElement(['work-tags-buttons', 'flex-col'], 'div'),
  new ClassElement(['tag-info', 'flex-row', 'font-medium', 'purple-main', 'wrap'], 'div'),
  new ClassElement(['work-buttons'], 'div'),
  new ClassElement(['btn', 'font-medium'], 'button')
];

/*
========================================
Create HTML for works container
========================================
*/ 

const workHeading = createElements([new ClassElement(['hidden'], 'h2')])[0];
workHeading.textContent = 'Works';
workSection.appendChild(workHeading);

/*
========================================
Create HTML for each work-card container
========================================
*/ 

works.forEach(work => {

  let cardElements = createElements(workCardElements);

  //set Work values for: image, title, client, role, year, description
  cardElements[1].src = '/images/works/' + work.image + '.png';
  cardElements[1].alt = 'Screenshot of ' + work.title;
  cardElements[3].textContent = work.title;
  cardElements[5].textContent = work.client;
  cardElements[8].textContent = work.role;
  cardElements[11].textContent = work.year;
  cardElements[13].textContent = work.description;

  /*
  ----------------------------------------
  Set HTML for work-tags-buttons container
  ----------------------------------------
  */  

  //Set tag-info span values and append spans to tag-info
  work.technology.forEach(tech => {
    let span = createElements([new ClassElement(['work-technology'], 'span')]);
    span[0].textContent = tech;
    cardElements[15].appendChild(span[0]);
  });

  //Set See Project button text and append button to work-buttons
  cardElements[17].textContent = 'See Project';
  cardElements[16].appendChild(cardElements[17]);

  //Append tag-info and work-buttons to work-tags-button
  cardElements[14].append(cardElements[15], cardElements[16]);

  /*
  ----------------------------------------
  Set HTML for work-details container
  ----------------------------------------
  */  

  //Append work-description and work-tags-buttons to work-details
  cardElements[12].append(cardElements[13], cardElements[14]);

  /*
  ----------------------------------------
  Set HTML for subtitle container
  ----------------------------------------
  */  

  //Set separator-image image
  cardElements[7].src = 'images/works/circle.png';
  cardElements[7].alt = 'Separator';
  cardElements[10].src = 'images/works/circle.png';
  cardElements[10].alt = 'Separator';

  //Append separator-image to separator
  cardElements[6].appendChild(cardElements[7]);
  cardElements[9].appendChild(cardElements[10]);

  //Append client, role, year and separators to subtitle
  cardElements[4].append(cardElements[5], cardElements[6], cardElements[8], cardElements[9], cardElements[11]);

  /*
  ----------------------------------------
  Set HTML for work-info container
  ----------------------------------------
  */ 

  //Append title and subtitle to work-info
  cardElements[2].append(cardElements[3], cardElements[4], cardElements[12]);

  /*
  ----------------------------------------
  Set HTML for work-card container
  ----------------------------------------
  */ 

  //Append work-image and work-info to work-card
  cardElements[0].append(cardElements[1], cardElements[2]);

  /*
  ----------------------------------------
  Append work-card to works container
  ----------------------------------------
  */ 

  workSection.append(cardElements[0]);

});

//Take an array of ClassElement objects and create them accordingly
function createElements(elements) {
  let elementsArray = [];
  elements.forEach(element => {
    let elementItem = document.createElement(element.elementType);
    element.classNames.forEach(className => {
      elementItem.classList.add(className);
    });
    elementsArray.push(elementItem);
  });
  return elementsArray;
}

