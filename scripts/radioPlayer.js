export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    // Смена иконки на stop и play 
    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play'); //Иконка крутится при запуске радио)))
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else{
            radio.classList.add('play');  //Иконка перестает крутиться при стопе радио
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    // Серая рамка выбранного радио
    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }
    // Функция для подключения радио 
    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');
        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;

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