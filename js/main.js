// FAQ Accordion
document.addEventListener('DOMContentLoaded', ()=>{
  const faqContainer =document.querySelector('.faq-content');
  faqContainer.addEventListener('click', (e)=>{
    const itemHeader = e.target.closest('.faq-item-header');
    if (!itemHeader) {
      return;
    }
    const item = itemHeader.parentElement;
    const icon = itemHeader.querySelector('i');
    const itemBody = item.querySelector('.faq-item-body');
    // Toggle the icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle the body
    itemBody.classList.toggle('open');

    // Close the remaining FAQ items
    const otherItem = faqContainer.querySelectorAll('.faq-item');
    otherItem.forEach((otherItem)=>{
      if (otherItem != item) {
        const otherItemBody = otherItem.querySelector('.faq-item-body');
        const otherIcon = otherItem.querySelector('.faq-item-header i');

        otherItemBody.classList.remove('open');
        otherIcon.classList.replace('fa-minus', 'fa-plus');
      }
    });

  });

  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navBar = document.getElementById('nav-bar')
  hamburgerBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('active');
  navBar.classList.toggle('fixed');
  });

  window.addEventListener('resize', ()=>{
    if (window.innerWidth >= 720) {
      mobileMenu.classList.remove('active');
      navHeader.classList.remove('fixed');
    }
  });
});
