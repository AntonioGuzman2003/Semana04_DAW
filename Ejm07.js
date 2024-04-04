//En este ejemplo, el servidor HTTP emite un evento 'request' cada vez que recibe una petición. El método on() se utiliza para escuchar este evento, permitiendo el registro de la URL solicitada.
//Mejore el código aplicando IA.

const http = require('http');

// Función para manejar las solicitudes HTTP
function handleRequest(req, res) {
    // Manejo de la solicitud según la URL
    if (req.url === '/home') {
        respondWithText(res, 200, 'text/plain', 'Welcome to the home page!');
    } else if (req.url === '/about') {
        respondWithText(res, 200, 'text/plain', 'About us page.\n');
    } else {
        respondWithText(res, 404, 'text/plain', 'Page not found!');
    }
}

// Función para responder con texto
function respondWithText(res, statusCode, contentType, body) {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(body);
}

// Crear el servidor HTTP
const server = http.createServer(handleRequest);

// Manejar el evento 'request'
server.on('request', (req, res) => {
    console.log(`Request received for URL: ${req.url}`);
});

// Manejar errores del servidor
server.on('error', (error) => {
    console.error('Server error:', error);
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
