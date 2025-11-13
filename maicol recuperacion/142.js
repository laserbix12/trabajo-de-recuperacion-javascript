if('Notification' in window){
  Notification.requestPermission().then(permission => {
    if(permission === 'granted'){
      new Notification("Única", { tag: "unica" });
      new Notification("Única", { tag: "unica" }); // No se duplicará
    }
  });
}
