var createHeading = require('./heading.js');

const heading = createHeading();
var addELement = () => document.body.append(heading);

var clickDiv = document.getElementById('clickDiv');

clickDiv.addEventListener('click', addELement)