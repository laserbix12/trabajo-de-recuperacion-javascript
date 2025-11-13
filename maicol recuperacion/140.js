if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      setTimeout(() => {
        new Notification("Recordatorio", { body: "Han pasado 5 segundos" });
      }, 5000);
    }
  });
}
