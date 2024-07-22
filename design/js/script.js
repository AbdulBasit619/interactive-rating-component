// Activating strict mode
'use strict';

//////////////////////////
////// SELECTING ELEMENTS
const ratings = document.querySelectorAll('.rating');

const btnSubmit = document.querySelector('.btn');

const ratingState = document.querySelector('.rating__state');
const thankYouState = document.querySelector('.thankyou__state');

const selectRating = document.querySelector('.select-rating');

//////////////////////////
////// IMPLEMENTING FUNCTIONALITY

let clickedRating;

ratings.forEach(rating =>
  rating.addEventListener('click', function (e) {
    if (rating.dataset.rating === '1') {
      ratings.forEach(rating => rating.removeAttribute('id', 'active'));
      rating.setAttribute('id', 'active');
      clickedRating = 1;
    }
    if (rating.dataset.rating === '2') {
      ratings.forEach(rating => rating.removeAttribute('id', 'active'));
      rating.setAttribute('id', 'active');
      clickedRating = 2;
    }
    if (rating.dataset.rating === '3') {
      ratings.forEach(rating => rating.removeAttribute('id', 'active'));
      rating.setAttribute('id', 'active');
      clickedRating = 3;
    }
    if (rating.dataset.rating === '4') {
      ratings.forEach(rating => rating.removeAttribute('id', 'active'));
      rating.setAttribute('id', 'active');
      clickedRating = 4;
    }
    if (rating.dataset.rating === '5') {
      ratings.forEach(rating => rating.removeAttribute('id', 'active'));
      rating.setAttribute('id', 'active');
      clickedRating = 5;
    }
  })
);

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  ratingState.classList.add('hidden');
  selectRating.innerHTML = clickedRating;
  thankYouState.classList.remove('hidden');
});
