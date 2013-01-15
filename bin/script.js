if (typeof window.console === "undefined") {
    window.console = {};
};
var slice = Array.prototype.slice,
    log   = function(level) {
        return function() { 
            var scr = document.createElement("script"),
                src = host + "/log?level=" + level + "&param=";

            src += slice.call(arguments).join("&param=");
            scr.src = src
            document.body.appendChild(scr); 
        };
    };

window.console.log = log('info');
window.console.error = log('error');
window.console.warn = log('warn');
window.console.debug = log('debug');

window.onerror = function() {
    console.error(slice.call(arguments));
};