document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".second-navbar").classList.add("sticky");
  }, 4000); // Delay of 2000 milliseconds (2 seconds)
});

let previousSrc; // Variable to store the previous image source

function changeImage(imagePath) {
    var mainImage = document.querySelector('.main-image');
    mainImage.src = imagePath;
}

function revertImage(originalImagePath) {
    var mainImage = document.querySelector('.main-image');
    mainImage.src = originalImagePath;
}

const imagesContainer = document.querySelector('.images-container');
const imageColumns = document.querySelectorAll('.image-column');
const imageLeft = document.querySelector('.image-left');
const imageRight = document.querySelector('.image-right');

let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  if (currentIndex < imageColumns.length - 1) {
    currentIndex++;
    imagesContainer.scrollLeft += imageColumns[currentIndex].offsetWidth;
  }
}

// Function to show the previous image
function showPreviousImage() {
  if (currentIndex > 0) {
    currentIndex--;
    imagesContainer.scrollLeft -= imageColumns[currentIndex].offsetWidth;
  }
}

imageLeft.addEventListener('click', showPreviousImage);
imageRight.addEventListener('click', showNextImage);
// Избиране на всички елементи с клас "custom-image-container"
const imageContainers = document.querySelectorAll('.custom-image-container');

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var container = document.querySelector(".firstrow-container");
    var containerPosition = container.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; 
    if (containerPosition < screenPosition) {
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var customSecondRowContainer = document.querySelector(".custom-secondrow-container");
  var items = customSecondRowContainer.querySelectorAll(".custom-image-container");
  var currentIndex = 0;

  function showItem(index) {
    items.forEach(function(item, i) {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
    setTimeout(autoSlide, 3000); 
  }

  window.addEventListener("scroll", function() {
    var containerPosition = customSecondRowContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
      customSecondRowContainer.classList.add("active");
      autoSlide();
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var thirdRowContainer = document.querySelector(".thirdrow-container");

  window.addEventListener("scroll", function() {
    var containerPosition = thirdRowContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
      thirdRowContainer.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var forthRowContainer = document.querySelector(".forthrow-container");

  window.addEventListener("scroll", function() {
    var containerPosition = forthRowContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
      forthRowContainer.classList.add("active");
    }
  });
});


// Функция за задаване на цвят на първата дума
function setFirstWordColor(paragraph, color) {
    const words = paragraph.textContent.split(' ');
    words[0] = `<span style="color:${color}">${words[0]}</span>`;
    paragraph.innerHTML = words.join(' ');
}

// Задаване на цветове
setFirstWordColor(imageContainers[0].querySelector('p'), '#5FB865'); 
setFirstWordColor(imageContainers[1].querySelector('p'), '#008AEE'); 
setFirstWordColor(imageContainers[2].querySelector('p'), '#5FB865'); 

document.addEventListener("DOMContentLoaded", function() {
  var sixthRowContainer = document.querySelector(".sixthrow-container");

  window.addEventListener("scroll", function() {
    var containerPosition = sixthRowContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (containerPosition < screenPosition) {
      sixthRowContainer.classList.add("active");
    }
  });
});
function autoSlideImages() {
  const imageContainers = document.querySelectorAll('.custom-image-container');
  let currentIndex = 0;

  setInterval(() => {
      imageContainers[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imageContainers.length;
      imageContainers[currentIndex].classList.add('active');
  }, 3000); // Change images every 3 seconds (adjust as needed)
}

// Call the autoSlideImages function to start the animation
autoSlideImages();
