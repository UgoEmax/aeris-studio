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

    const formEmail = document.getElementById('formEmail').value;

    if (formEmail === '') {
      document.getElementById('errorMsg').textContent = "Email is required";
    } else if (formEmail.includes('@') && formEmail.includes('.')) {
      document.getElementById('errorMsg').textContent = "";
      // Proceed with form submission

      heroForm.submit();
    } else {
      document.getElementById('errorMsg').textContent = "Please enter a valid email address.";
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

console.log(ctaEmail);