/*   This code creates a simple HTTP server that:

    Listens on port 50000.
    Serves different responses based on the URL path:
    / → Home page with a welcome message.
    /about → About page with a simple text.
    Any other URL → Custom 404 page with an error message and a link back to the home page.             */

const http = require('http')

// this  Creates an HTTP server. The server listens for incoming requests and executes the provided callback function for each request.
//req object: Represents the incoming HTTP request (e.g., URL, headers, method).
//res object: Represents the outgoing HTTP response (e.g., status code, headers, body).
const server = http.createServer((req, res) => {
    if(req.url ==='/')
       return res.end('Welcome to our home page')
    if(req.url ==='/about')
       return res.end('Here is our aboutt page')
    res.end(`
        <h1>OOPS!!</h1>
        <p>We cant seem to find the page you are looking for </p>
        <a href="/"> backkhome</a>
        `)}
)
server.listen(50000)