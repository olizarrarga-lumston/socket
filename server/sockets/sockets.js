const { io } = require('../server');
io.on('connection',(client) => { 
    console.log('usuario conectado');
    
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect',() => { 
        console.log('Usuario desconectado');
    });

    

    // Escuchar el cliente
    client.on('enviarMensaje',(mensaje/*,callback*/) => { 
        //console.log('mensaje',mensaje);
        client.broadcast.emit('enviarMensaje', mensaje);
        // client.broadcast.emit('enviarMensaje',data);
        // callback();

        // if ( mensaje.usuario ) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL !!!'
        //     });
        // }

    });

    
});