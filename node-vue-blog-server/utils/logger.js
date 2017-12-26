const log4js = require('log4js')
const config = require('./../config/log4js')

log4js.configure(config)

module.exports = {
    system:function(){
        return log4js.getLogger('system')
    },
    access: function () {
        return log4js.connectLogger(log4js.getLogger('access'), {
            level: 'auto',
            format: ':method :url :status :response-time ms'
        });
    },
}