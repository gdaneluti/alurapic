import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({ 
  el: '#app', //Elemento alvo em index.html para colocar o componente
  //el diz onde eu quero renderizar meu componente
  render: h => h(App) // Diz qual o componente que eu quero renderizar
})
