var socket = io();

socket.on('connect',function(){ 
    console.log('conectado al servidor');
});
// escuchar 
socket.on('disconnect', function() { 
    console.log('Perdimos la conexión');
});

//Enviar información
socket.emit('enviarMensaje',{
    usuario:'Omar lizarraga',
    mensaje:'Hola mundo'

}/*, function( resp ) { 
    console.log('Se disparo el callback', resp);
}*/);

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});