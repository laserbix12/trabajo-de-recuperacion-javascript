if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      let noti = new Notification("Texto inicial");
      setTimeout(() => {
        noti.close();
        new Notification("Texto actualizado después de 3s");
      }, 3000);
    }
  });
}
