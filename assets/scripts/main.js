document.addEventListener('DOMContentLoaded', function() {

  // toggle main menu on mobile
  document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('shown');
  });

});
