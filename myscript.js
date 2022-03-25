const heroBtn = document.querySelector('button.hero-cta');
const ctaBtn = document.querySelector('button.cta');
const msg = () => alert("Thank you for signing up!");

heroBtn.addEventListener('click', msg);
ctaBtn.addEventListener('click', msg);
