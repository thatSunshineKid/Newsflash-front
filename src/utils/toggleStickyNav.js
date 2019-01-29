export const toggleStickyNav = () => {
  const nav = document.querySelector('.navbar-container');
  const button = document.querySelector('.top-topics-button');
  const header = document.querySelector('.home-header');
  const flashBar = document.querySelector('.flashbar-icon-container');

  if (nav === null) return;

  let topOfNav = nav.offsetTop;

  let totalHeight =
    header.offsetHeight + button.offsetHeight + flashBar.offsetHeight;

  if (window.pageYOffset >= topOfNav) {
    document.body.style.marginTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }

  if (window.pageYOffset <= totalHeight) {
    document.body.classList.remove('fixed-nav');
    document.body.style.marginTop = 0;
  }
};
