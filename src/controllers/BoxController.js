const Box = require("../models/Box");

//cria boxes
class BoxController {
    async store(req, res) {
        
        const box = await Box.create({title: req.body.title});

        return res.json(box);
    }
}

module.exports = new BoxController();