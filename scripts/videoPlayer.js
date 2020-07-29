export const videoPlayerInit = () => {
// Файл для видео-плеера 
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

    // Функция для иконки play (чтобы при нажатие менялась на stop)
    const toggleIcon = () => { 
        if (videoPlayer.paused){
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
    } else{
        videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
    }
}

   // Функция по смене иконки play и stop, в зависимости от состояния видео  
   const togglePlay = () => {
    if (videoPlayer.paused){
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }

    };

    // Вторая иконка под видео, при нажимание видео обнуляется
    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    // Чтобы было красивое время (добавление 0)
    const addZero = n => n < 10 ? '0' + n : n;

    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);

    videoPlayer.addEventListener('play', toggleIcon);
    videoPlayer.addEventListener('pause', toggleIcon);

    videoButtonStop.addEventListener('click', stopPlay);

    // Время видоса
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime / duration) * 100;

        let minutePassed = Math.floor(currentTime / 60 );
        let secondsPassed = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration / 60 );
        let secondsTotal = Math.floor(duration % 60);

        // Итоговый подсчет времени, сколько прошло и сколько всего минут
        videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

    });

    // Бар прокрутки видео
    videoProgress.addEventListener('change', () => {
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    })

}