if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      const noti = new Notification("Se cerrará en 3 segundos", { body: "Prueba autocierre" });
      setTimeout(() => noti.close(), 3000);
    }
  });
}
