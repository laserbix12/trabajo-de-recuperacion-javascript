if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      new Notification("Saludos!", { body: "Este es el cuerpo de la notificación" });
    }
  });
}
