if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      new Notification("Con ícono", {
        body: "Notificación con ícono",
        icon: "https://via.placeholder.com/48"
      });
    }
  });
}
