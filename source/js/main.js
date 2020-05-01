var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var filter = document.querySelector('.filter__form');

if (filter) {
  var requireds = filter.querySelectorAll('input[required]');
}


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var addTheNecessaryHandler = function (required) {
  if (filter) {
    required.addEventListener('input invalid', function () {
      required.classList.add('.filter__input-invalid');
    });
  }
};

for (var i = 0; i < requireds.length; i++) {
  addTheNecessaryHandler(requireds[i]);
};
