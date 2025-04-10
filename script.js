// Reveal on scroll using Intersection Observer
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Optional: animate once
    }
  });
}, {
  threshold: 0.15
});

animatedElements.forEach(el => {
  observer.observe(el);
});
