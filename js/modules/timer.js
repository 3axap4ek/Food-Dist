function timer (id, deadline) {

    

    function getTimeRemaning (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60 ) % 60),
              seconds = Math.floor((t / 1000) % 60);
         
        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };    
              
    }

    function getZero(num){
        if(num >= 0 && num < 10){
           return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateClock, 1000);

              updateClock (); 
        function updateClock () {
            const t = getTimeRemaning(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            function nullInterval (){
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
            
            if (t.total <= 0){
                clearInterval(timerInterval);
                nullInterval();
            }
            
        }

        
    }

   

    setClock(id, deadline);

}

export default timer;