var socket = io();
//Escuchar sucesos
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})
//Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log(mensaje.usuario+' - '+mensaje.mensaje);
});
//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pepe',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp.resp);
});