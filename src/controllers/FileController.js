const File = require("../models/File");
const Box  = require("../models/Box");

//cria boxes
class FileController {
    async store(req, res) {
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key,
        });
        // cria um arquivo

        box.files.push(file);
        
        await box.save();

        // pega todos os usuarios que estão conectados e envia os dados em tempo real
        req.io.sockets.in(box._id).emit('file', file);
        
        return res.json(file);
    }
}

module.exports = new FileController();