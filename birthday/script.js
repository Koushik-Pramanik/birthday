window.addEventListener('scroll', function() {
  const element = document.querySelector('.end p');
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Check if the element is within the viewport
  if (elementPosition < screenHeight - 100) { // Adjust the value (-100) as needed
      document.querySelector('.end').classList.add('p-show');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const rotatingImages = document.querySelectorAll('.rotating-img');
  const video3 = document.getElementById('video3');
  const video4 = document.getElementById('video4');
  const video5 = document.getElementById('video5');
  

  //image
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // 
      }
    });
  }, { threshold: 0.5 }); 

  rotatingImages.forEach(img => {
    observer.observe(img);
  });

 
  //video
  const createObserver = (videoElement) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(videoElement);
  };

  


  createObserver(video3);
  createObserver(video4);
  createObserver(video5);
});
