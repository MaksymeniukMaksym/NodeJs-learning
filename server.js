const http = require('http');



    const html = `
    <!doctype>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Basic Node.js</title>
            <link rel="stylesheet" href="app.css">
        </head>

        <body>
            <h1>Basic Node.js</h1>
            <button>Press button</button>

            <script src= "app.js"></script>
        </body>
    </html>
    `;
    const css = ` body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1 {
        background-color: #43853d;
        color: white;
        pading: .5em;
        font-family: 'Consolas';
    }
    `;
    const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js working'));
    `;


    http.createServer((req, res) => {
        switch(req.url){
            case '/': 
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(html);
            
            case '/app.css':
            res.writeHead(200, {'Content-type': 'text/css'});
            res.end(css);

            case '/app.js':
            res.writeHead(200, {'Content-type': 'text/javascript'});
            res.end(js);

            default:
            res.writeHead(404, {'Content-type': 'text/plain'});
            res.end('404 Not Found');



        }
   
}).listen(3000,() => console.log('Server work'));