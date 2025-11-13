if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      const noti = new Notification("Notificación con sonido");
      const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
      audio.play();
    }
  });
}
