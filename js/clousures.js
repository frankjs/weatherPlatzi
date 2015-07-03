var Contador = (function() {
  
  var _contadorPrivado = 0;
  function cambiarValor(valor) {
     _contadorPrivado += valor;
  };
  
  return {
   incrementar: function() {
      cambiarValor(1);
   },

   decrementar: function() {
      cambiarValor(-1);
   },

   valor: function() {
     return _contadorPrivado;
   }, 
}
})();