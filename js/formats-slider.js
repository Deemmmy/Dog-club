const swiper = new Swiper('.swiper-container', {
  parallax: true,
  loop: true,
    
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      
        // when window width is >= 480px
      768: {
        
        slidesPerView: 2,
          spaceBetween: 16,
          
        },
        // when window width is >= 768px
        1280: {
          slidesPerView: 3,
          
        }
      },
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
      clickable: true,
    },
  
    
    navigation: {
      nextEl: '.corousel-button.next',
      prevEl: '.corousel-button.prev',
    },
  
    
  });