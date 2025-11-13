if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      const noti = new Notification("Haz click en mí", { body: "Se abrirá Google" });
      noti.onclick = () => window.open("https://www.google.com");
    }
  });
}
