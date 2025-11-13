if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      new Notification("Notificación avanzada", {
        body: "Texto, ícono, y tag",
        icon: "https://via.placeholder.com/48",
        tag: "demo1"
      });
    }
  });
}
