if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      const noti = new Notification("Click y mira la consola");
      noti.onclick = () => console.log("Usuario hizo click en la notificación");
    }
  });
}
