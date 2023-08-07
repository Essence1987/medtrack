document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close-btn');

  function showModal(error) {
    if (error) {
    modal.querySelector('p').textContent = error;
    }
    modal.style.display = 'block';
  }

  function hideModal() {
    modal.style.display = 'none';
  }

  const error = modal.dataset.error;

  if (error) {
    showModal(error);
  }

  closeBtn.addEventListener('click', hideModal);

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      hideModal();
    }
  });
});
