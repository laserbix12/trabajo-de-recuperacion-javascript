let contador = 0;
function mostrarNoti(){
  if('Notification' in window){
    Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        contador++;
        new Notification("Contador: " + contador);
      }
    });
  }
}
