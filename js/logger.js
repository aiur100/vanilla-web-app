const Logger = function (isDebug) {
    var logger = {};
    if (isDebug) {
        for (var m in console) {
            if (typeof console[m] == 'function') {
                logger[m] = console[m].bind(window.console, 'Redline UWL:');
            }
        }
    } else {
        for (var m in console) {
            if (typeof console[m] == 'function') {
                logger[m] = function () {};
            }
        }
    }

    return logger;
}

export default Logger(Service.environment() !== 'production' || localStorage.getItem('uwlLogging'));