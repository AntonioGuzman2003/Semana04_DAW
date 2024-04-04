//En este ejemplo, se registran dos escuchadores para el 'eventoA'. Cuando el evento es emitido usando emit(), ambos listeners son ejecutados secuencialmente en el orden en que fueron registrados.
//Mejore el código aplicando IA.

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Primer listener para el evento 'eventA'
myEmitter.on('eventA', () => {
    console.log('Listener 1 for eventA executed');
});

// Segundo listener para el evento 'eventA'
myEmitter.on('eventA', () => {
    console.log('Listener 2 for eventA executed');
});

// Emitir el evento 'eventA'
myEmitter.emit('eventA');
