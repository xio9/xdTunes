export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeader = document.querySelector('.radio-header');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // Смена иконки на stop и play 
    const changeIconPlay = () => {
        if (audio.paused) {
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else{
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    // Функция для подключения радио 
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        radioStop.disabled = false;
        
        audio.src = target.dataset.radioStantion;
        
        audio.play();
        changeIconPlay();
    });

    // Функция для проигрыша радио
    radioStop.addEventListener('click', () =>{
        if (audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        changeIconPlay();
    });
};