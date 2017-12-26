
const dir = "./";
module.exports = {
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'dateFile',
            category: 'access',
            filename: dir+'logs/access/access',
            pattern: '_yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        {
            type: 'dateFile',
            category: 'system',
            filename: dir+'logs/system/system',
            pattern: '-MM.log',
            alwaysIncludePattern: true
        }
    ],
    replaceConsole: true
};