var http = require('http'),
    parseUrl = require('url').parse,
    readFile = require('fs').readFile,
    logLevel = function(level) {
        if (console[level]) {
            return console[level];
        } else {
            return function() {};
        }
    };

http.createServer(function(req, res) {
    var url = parseUrl(req.url, true);
    if (url.pathname === "/log") {
        res.writeHead(200, {
            'Content-Type': 'application/javascript'
        });
        var msg = [url.query.level.toUpperCase()];
        if (typeof url.query.param === "string") {
            msg.push(url.query.param);
        } else {
            msg.push.apply(msg, url.query.param);
        }
        logLevel(url.query.level).apply(this, msg);
        res.end();
    } else {
        readFile(__dirname + '/script.js', function(err, data) {
            var host = req.headers.host;
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.writeHead(200, {
                    'Content-Type': 'application/javascript'
                });
                res.write('(function() { var host = "//' + host + '";');
                res.write(data);
                res.write('})();')
            }
            res.end();
        });
    }
}).listen(1337);