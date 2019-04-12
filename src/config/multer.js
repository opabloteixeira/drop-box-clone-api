const multer = require('multer');
let path     = require('path'); // lib do node para padronizar a escrita de caminhos
const crypto = require('crypto'); //lib do node pra criar hashs 

path = path.resolve(__dirname, '..' , '..' , 'tmp');

module.exports = {
    
    dest: path,

    storage: multer.diskStorage(
        {
            destination: (req, file, cb) => {
                cb(null, path);
            },
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    
                    if (err) cb(err);

                    file.key = `${hash.toString('hex')}-${file.originalname}`;

                    cb(null, file.key);

                });
            }
        }
    )
};