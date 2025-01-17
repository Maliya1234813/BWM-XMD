const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVS5OqRhj9L72VuSIgD6umKiiiAgqKT1K3Ui000MpLaESccpFt9tllmWV+Wu5/SKEzNbPIvZmw6mqa850+53wfLyBJcYF0VIPeC8hyfIYENUtSZwj0QL/0fZQDCniQQNADI3M0Ueu0GPdrQZ8uzpZ+npcH53KKKt0UZbhhh4zWUqK+GjyDGwWych9h9weApsPpdcBE0kru7luTS7GJA2HCc2tcHoaTbsqnvGGa0Lps58/g1iBCnOMkGGYhilEOIx3VFsT55+gXA2UwXmzLq99pnXRm7kDPiTaK4NaX9kBwdqTdVZzd3NvE3OfoC1OnxQlrHMtsehBEWlW78YFWrkQ9+nRYJht+wBZlHLux+6Bf4CBB3sRDCcGk/rTuu5l2ceyROadJYq+mngW5PJGzQM6vx/WovctsQ+47M2O9/qTujjFmlsZMISn0ZHfbHWuKW0TTtEWjxIvjcT0cV8NZPVGU6UfiVv6WleP/0d20DFXyx26UBuKk9qZCAI8V8YPO8lrqh2w3P47SIrCiXUx/UnecOPMiSHX+EG3Fgi8W3Xg3pukzUvmr20ktOK5kJrKlKn2nD0mZ/4ilrq0QpyjcihcMuAiXh7i6XLWrLvg5WWzr8wJP++Uy40xtO5Zcy1CubLBSmbba51sif7b0YTSK7bWI55p6HS3WiW+bQfV8v9ER1RMP9Do3CuQowAXJIcFpct9jeApA72wjN0fkLi8gEufFJjaDK7O5Woa24AMYWF1hsTezWSTBRDt04rA2F6v0GVAgy1MXFQXyxrggaV5PUVHAABWg9/NXCiToQh7GNeXYDgV8nBdklZRZlELvzdW3l9B10zIhdp24g2aBctD7sI0IwUlQNDqWCczdEJ/RIISkAD0fRgW6UcBDZ+yiBg/wWd87ndlfFssTP5Bm2yoQrmTeUA7T5HEESr7LSazwtKc94YlDIv8kCbz7xDMd32N5SezwLKAAfu2Z5pvvWmirRp34xsy3q/WyJQys7cnql76tbIu7DQ/tUY480CN5iSiwh+6xzJbpESU/wM08Z7E+b+T8UGbOrJwz/OUQeQQfTe4D7sNT0Ht5n1OD1GvwhsZCFtm5BSgQ3yOIm5tLnCB0aKkjdtgew/xUfKkaHWGWfUkQARRIYHMYfPv9j79/+/Pbr381lV5taDA8RCCOCtADA30sdLmJOtT5+rSvRiN5GMiDQAbvtr3l/5Evx1cN2sRclV3a7pAMDX24x6OpvOs7aXScluUwCeXuUV0vi+d/AQE9IB9STVoHLU3sdrulVk1GO9Zexq3YC7qrMnHD9SDkVYlX2+s+0uyrQHumFIqhVHcuxFcv7cvleEpj56hcTYg2orhfccr8uan2iM/HYrHBbGYtra1ol0zc5f4OLa6mPik0291Yvpq0DSmWxSLNtEOxbA0qnZXDMD6ZVYWJUrQd8xiyDBZW4kSb0kynhZg5HcwfnXmfDNHrRMb3nnl5DZuP0X3AvfrwX3a9x56+UR8gXifmd6LV32wvtqSk5VR3fbZvLAZ1OOLCgzySN1BzFCMPNW5uOv31SgC321cKZBEkfprHzQ8t3kNAgQgWRH5v2yWOUUFgnIFeR2CFDkPTXYkCcS1nmU0geet2IDePwVTg9g9XcXY8CQgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

