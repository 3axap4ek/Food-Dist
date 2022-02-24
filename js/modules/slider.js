function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

      // Slider 
    
      const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      btnNext = document.querySelector(nextArrow),
      btnPrev = document.querySelector(prevArrow),
      currNum = document.getElementById(currentCounter),
      totalNum = document.getElementById(totalCounter),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;
      let index = 1;
      let offset = 0;

      slidesField.style.width = 100 * slides.length + '%';
      
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all';

      slidesWrapper.style.overflow ='hidden';

      slides.forEach(slide =>{
          slide.style.width = width;
      })

      slider.style.position = 'relative';

      const indicators = document.createElement('ol'),
            dots = [];
      indicators.classList.add('carousel-indicators');
      indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
      `;

      slider.append(indicators);

      for(let i = 0; i < slides.length; i++){
          const dot = document.createElement('li');
          
          dot.setAttribute('data-slide-to', i + 1)

          dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;

            
          `;

          if (i == 0){
              dot.style.opacity = 1;
          }
          indicators.append(dot);
          dots.push(dot);
      }

      if (slides.length < 10){
        totalNum.textContent = `0${slides.length}`
        currNum.textContent = `0${index}`;
      } 
      else {
        totalNum.textContent = slides.length;
        currNum.textContent = index;
      }

      function makeNumber (str){
          return  +str.replace(/\D/g, '');
      }

      btnNext.addEventListener('click', ()=>{
        if(offset == makeNumber(width) * (slides.length -1)){
            offset = 0;
        } else{
            offset += makeNumber(width);
        }
          slidesField.style.transform = `translateX(-${offset}px)`

          if(index == slides.length){
              index = 1;
          }
          else{
              index++
          }

          checkNum();

          makeVisibilityDot();
      })

      btnPrev.addEventListener('click', ()=>{
        if(offset == 0){
            offset = makeNumber(width) * (slides.length - 1);
        } else{
            offset -= makeNumber(width);
        }
          slidesField.style.transform = `translateX(-${offset}px)`;

          if(index == 1){
            index = slides.length;
        }
        else{
            index--;
        }

        checkNum();

        makeVisibilityDot();
      });

      dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');
                index = slideTo;

                offset = makeNumber(width) * (slideTo - 1)

                slidesField.style.transform = `translateX(-${offset}px)`

                
                checkNum()
                makeVisibilityDot()
          })
      })

      function checkNum(){
            
        if(slides.length < 10){
            currNum.textContent = `0${index}`;
        }else{
            currNum.textContent = index;
        }
      }

      function makeVisibilityDot(){

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[index - 1].style.opacity = 1;
      }

      
    //   showSlides(index);
     
    //   if(slides.length < 10){
    //     totalNum.textContent = `0${slides.length}`
    //   }else {
    //     totalNum.textContent = slides.length;
    //   }

    //   function showSlides(n) {
    //     if(n > slides.length){
    //         index = 1
    //     }

    //     if(n < 1){          
    //         index = slides.length;
    //     }

    //     slides.forEach(item => item.classList.add('hide'))

    //     slides[index - 1].classList.remove('hide');

    //     if(slides.length < 10){
    //         currNum.textContent = `0${index}`
    //     }else {
    //         currNum.textContent = index;
    //     }
    //   }

    //   function plusSlides(n) {
    //     showSlides(index += n)
    //   }

    //   btnNext.addEventListener('click', () => {
    //       plusSlides(1);
    //   })

    //   btnPrev.addEventListener('click', () => {
    //       plusSlides(-1);
    //   })
}

export default slider;