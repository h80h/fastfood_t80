const audio = document.querySelector('audio');
const mute_container = document.querySelector('#mute_container');
const svg1 = `<svg id="mute" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#877764" d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21L21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63"/></svg>`;
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#877764" d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2t-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.138T21 11.975t-1.95 5.613T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95q1.175.55 1.838 1.65T16.5 12q0 1.275-.663 2.363T14 16"/></svg>`;
const container = document.querySelector(".container");

let isFirst = true;
        
mute_container.addEventListener('click', function() {
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }

  this.innerHTML = isFirst ? svg2 : svg1;
  isFirst = !isFirst;
});

audio.volume = 0.2;

function showElementAfterImagesLoad(elementSelector) {
  const images = document.querySelectorAll('img');
  const element = document.querySelector(elementSelector);
  
  // Hide the element initially
  element.style.display = 'none';
  
  const imagePromises = Array.from(images).map(img => {
    return new Promise((resolve, reject) => {
      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = reject;
      }
    });
  });
  
  Promise.all(imagePromises)
    .then(() => {
      element.style.display = 'block'; // Show the element
    })
    .catch(() => {
      console.log('Some images failed to load');
      element.style.display = 'block'; // Show anyway
    });
}

// Usage
showElementAfterImagesLoad(container);