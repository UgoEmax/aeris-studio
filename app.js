const menuTrigger = document.getElementById('menu-trigger');
const mobileMenu = document.querySelector('.mobile-menu');

menuTrigger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    const isOpen = mobileMenu.classList.contains('active');

    menuTrigger.innerHTML = isOpen ? '<i class="bx bx-x"></i>' : '<i class="bx bx-menu"></i>';
});

const navLinks = document.querySelectorAll('.mobile-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuTrigger.innerHTML = '<i class="bx bx-menu"></i>';
        }
    });
})

const heroForm = document.getElementById('heroForm');

heroForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let errorMsg = document.getElementById('errorMsg');
    const formEmail = document.getElementById('formEmail').value.trim();

    if (formEmail === '') {
      errorMsg.textContent = "Email is required";
      return;
    } 

    if (!formEmail.includes('@') && !formEmail.includes('.')) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }
    
    if (formEmail.includes('@') && formEmail.includes('.')) {
      errorMsg.textContent = "";
       heroForm.submit();
    }
       
})

const ctaForm = document.getElementById('ctaForm');

ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const ctaEmail = document.getElementById('ctaEmail').value;

   if (ctaEmail === '') {
        document.querySelector('#ctaErrorMsg').textContent = "Email is required";
   } else if (ctaEmail.includes('@') && ctaEmail.includes('.')) {
        document.querySelector('#ctaErrorMsg').textContent = "";

        ctaForm.submit();
   } else {
        document.querySelector('#ctaErrorMsg').textContent = "Please enter a valid email address.";
   }
      
});


// Accordion
const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionContent = item.querySelector('.accordion-content'); 
    const accordionIcon = item.querySelector('.accordion-icon');

    accordionHeader.addEventListener('click', () => {
        const isOpen = item.classList.contains('accordion-active');


// Close all items
accordionItem.forEach(i => {
  i.classList.remove('accordion-active');
  i.querySelector('.accordion-content').style.maxHeight = null;
  i.querySelector('.accordion-icon').innerHTML = '<i class="bx bxs-plus"></i>';
});

// Open clicked item if it was closed
if (!isOpen) {
  item.classList.add('accordion-active');
  accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  accordionIcon.innerHTML = '<i class="bx bxs-minus"></i>';
        }
   });

});
