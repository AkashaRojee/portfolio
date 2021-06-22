let works = [];

//Work constructor
function Work(...workData) {
  this.img = workData[0];
  this.title = workData[1];
  this.companyName = workData[2];
  this.role = workData[3];
  this.year = workData[4];
  this.description = workData[5];
  this.technology = workData[6];
}

//Create Array of Work objects
works = [
  new Work('tonic', 'Tonic', 'CANOPY', 'Back-End Dev', '2015', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', ['html', 'css', 'javascript']),

  new Work('multi-post-stories', 'Multi-Post Stories', 'FACEBOOK', 'Full Stack Dev', '2015', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('facebook-360', 'Facebook 360', 'FACEBOOK', 'Full Stack Dev', '2015', '  Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.', ['html', 'ruby on rails', 'css', 'javascript']),

  new Work('uber-navigation', 'Uber Navigation', 'UBER', 'Lead Developer', '2015', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.', ['html', 'ruby on rails', 'css', 'javascript'])
];

//Create HTML work card for each
works.forEach(work => {

});

