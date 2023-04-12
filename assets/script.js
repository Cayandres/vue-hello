const {createApp} = Vue;

createApp({
  data(){
    return{
      messaggio:'Ciao Andres',
      immagine:'<img src="assets/img/fiori.jpg" alt="">'
    }

  }
}).mount('#app')