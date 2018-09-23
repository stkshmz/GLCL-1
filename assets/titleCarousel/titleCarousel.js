let titleCarouselWrapper = () => {
  let titleCarousel = document.getElementById('title-carousel');

  const elementBuilder = (elementType, elementId, appendTo, classes) => {
    let el = document.createElement('elementType');
    if(classes){
      el.classList.add(...classes);
    };
    el.id = elementId;
    appendTo.appendChild(el);
  };

  elementBuilder('p', 'left-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-left']);
  elementBuilder('p', 'title', titleCarousel);
  elementBuilder('p', 'right-arrow', titleCarousel, ['arrow', 'fas', 'fa-chevron-right']);



  // let la = document.createElement('p');
  // la.classList.add('arrow', 'fas', 'fa-chevron-left');
  // la.id = 'left-arrow';
  // titleCarousel.appendChild(la);

  // let ra = document.createElement('p');
  // ra.classList.add('arrow', 'fas', 'fa-chevron-right');
  // ra.id = 'right-arrow';
  // titleCarousel.appendChild(ra);

  let title = document.getElementById('title');
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };


  let titleArr = JSON.parse(titleCarousel.getAttribute('title-arr'));
  for (let i=0; i<titleArr.length; i++){

  }

  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let titleIndex = Number(titleCarousel.getAttribute('title-starting-index'));
  titleSetter(titleArr[titleIndex]);

  leftArrow.addEventListener('click', ()=>{
    if(titleIndex > 0){
      titleIndex--;
      titleSetter(titleArr[titleIndex]);
    }
  });
  rightArrow.addEventListener('click', ()=>{
    if(titleIndex < titleArr.length-1){
      titleIndex++;
      titleSetter(titleArr[titleIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', titleCarouselWrapper, false);
