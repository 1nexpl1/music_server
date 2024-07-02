const uuid = require('uuid')
const path = require('path');
const {Song} = require('../models/models')
const ApiError = require('../error/ApiError');

class songController{
    async create(req, res, next) {
        try {
            let {name, author, link} = req.body
            const {img, file} = req.files
            let fileName = uuid.v4() + ".jpg"
            let fileName1 = uuid.v4() + ".mp3"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            file.mv(path.resolve(__dirname, '..', 'static', fileName1))
            const song = await Song.create({name, author, link, img: fileName, file: fileName1});

            return res.json(song)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let song = await Song.findAndCountAll()
        return res.json(song)
    }

    async getOne(req, res) {
        const {id} = req.params
        const song = await Song.findOne(
            {
                where: {id}
            },
        )
        return res.json(song)
    }
    async deleteOne(req, res)  {
        const {id} = req.params
        const song = await Song.destroy(
            {
                where: {id}
            }
        )
        return res.json(song)
    }
}

module.exports = new songController