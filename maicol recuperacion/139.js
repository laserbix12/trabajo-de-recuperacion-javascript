if('Notification' in window && 'vibrate' in navigator){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      new Notification("Vibración móvil", {
        body: "Prueba de vibración",
        vibrate: [200, 100, 200]
      });
    }
  });
}
