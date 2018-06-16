'use strict';

//===================================================================
// Configuration Stuff
//===================================================================

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.about_me',
  'myApp.about_site',
  'myApp.contact',
  'myApp.dept_sci_ed',
  'myApp.github',
  'myApp.home',
  'myApp.linkedin',
  'myApp.tbp',
  'myApp.testbest',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);

//===================================================================
// Viewport width calculations
//===================================================================
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

//===================================================================
// Animations after DOM ready
//===================================================================

let bomb = $('.y-wing-bomb');
let yWingDist1 = 10;
let yWingDist2 = 10;
let bombDrop = 10;

function moveYWing() {
  console.log('1.)');
  let quux = function (){
    // hide fireball, pring up menu
    console.log('hide the fireball!')
    $('#y_wing_bomb').css('display', 'none');
    $('#after_bomb').css('display', 'block');
    setTimeout(function(){$('#after_bomb').css('transform', 'scale(3)');}, 0);
    setTimeout(function(){
      $('#after_bomb').css('display', 'none');
      $('.home-content').css('visibility', 'visible');
      $('.home-content').css('opacity', '1');
    }, 800);
  }

  let qux = function (){
    console.log('2.5.)');
    let explosion = $('#after_bomb');
    explosion.css('position', 'absolute');
    explosion.css('top', bombDrop+'px');
    explosion.css('right', (-1*yWingDist1)+'px');
    // explosion.css('display', 'none');

    console.log('3.)');
    move('#y_wing_bomb')
      .y(bombDrop)
      .rotate(90)
      .then(quux)
      .end();
    move('#y_wing_bomber')
      .y(-200)
      .x(yWingDist2)
      .rotate(20)
      .end();
  }

  let baz = function (){
    console.log('2.)');
    move('#y_wing_bomb')
      .set('display', 'block')
      .end();
    qux();
  }

  move('#y_wing_bomber')
    .x(yWingDist1)
    .then(baz)
    .end();
}

/**
 * Temp Y-Wing fxn that takes callback arg
 * 
 * @param {string} shipId : id of ship being moved within DOM
 * @param {int} xDirection : distance (in px) for ship to be moved on x-axis
 * @param {int} yDirection : (optional) "..." on y-axis
 * @param {*} callback : function to drop bomb and move ship again
 */
function flyYWing(shipId, xDirection, yDirection, callback) {
  let ship = $('#' + shipId);
  ship.css('transform', 'translate('+ xDirection + ', ' + yDirection + ')');
  callback();
}

/**
 * Function to translate an element (i.e. ship) within the DOM
 * 
 * @param {string} shipId : id of ship being moved within DOM
 * @param {int} xDirection : distance (in px) for ship to be moved on x-axis
 * @param {int} yDirection : (optional) "..." on y-axis
 */
function flyShip(shipId, xDirection) {
  let ship = $('#' + shipId);
  if(arguments.length > 2) {
    ship.css('transform', 'translate('+ xDirection + ', ' + yDirection + ')');
  } else {
    ship.css('transform', 'translate('+ xDirection + ')');
  }
}

function flyInMenu() {
  let menu = $('#main_menu');
  menu.css('transform', 'translate(' + xDirection + ')');
}

// Instantiate Welcome modal
var modal = new Custombox.modal({
  content: {
    effect: 'door',
    target: '#welcome_modal'
  }
});

// Open Modal after .4 seconds
setTimeout(
  function() { modal.open(); },
  370
);


// Event listener for modal close, will prompy Y-Wing
document.addEventListener('custombox:overlay:close', function() {
  // flyWingy();
  // flyShip('y_wing_bomber', '-1920px');

  // flyYWing('y_wing_bomber', '-700px', 0, function() {console.log('after, hi....')} );
  moveYWing();


  // flyInMenu();
});

$(document).ready(function() {
  let h = getHeight();
  let w = getWidth();
  console.log('w: ', w);
  console.log('h: ', h);
  // bombDrop = 300; //27% - 30% height
  let temp = h * .30;
  bombDrop = temp.toFixed(0);
  console.log('bombDrop: ', bombDrop);
  // yWingDist1 = -1 * 600; // 55% of width
  temp = w * .4;
  temp = temp.toFixed(0);
  yWingDist1 = -1 * temp;
  console.log('yWingDist1: ', yWingDist1);
  // yWingDist2 = -1 * 2100; // 117% of width
  temp = w * 1.17;
  temp = temp.toFixed(0);
  yWingDist2 = -1 * temp;
  console.log('yWingDist2: ', yWingDist2);
  bomb.css('right',  (-1 * yWingDist1) + 'px');
  setTimeout(function(){
    console.log('terrible terrible hack, use promises or callbacks');
    $('.home-content').css('opacity', '0');
    $('.home-content').css('visibility', 'hidden');
  }, 10);
});

$('nav .taskbar-icon').on('click', function(event) {
  $('nav div.active').removeClass('active');
  $(this).addClass('active');
});
