const fs = require('fs');

const reqHandler = (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"> <input type="text" name="message"> <br><br>  <input type="submit" value="Submit"> </form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && req.method === 'POST') {

        const body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
}

module.exports = reqHandler;