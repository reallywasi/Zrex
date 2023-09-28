
function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.nav-item:nth-child(2) a');
    const aboutLink = document.querySelector('.nav-item:nth-child(3) a');
    const contactLink = document.querySelector('.nav-item:nth-child(4) a');
  
    homeLink.addEventListener('click', function (event) {
      event.preventDefault();
      scrollToElement('home'); 
    });
  
    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      scrollToElement('about');
    });
  
    contactLink.addEventListener('click', function (event) {
      event.preventDefault();
      scrollToElement('contact');
    });
  });
  
