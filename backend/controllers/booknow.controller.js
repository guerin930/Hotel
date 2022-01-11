const BooknowModel = require('../model/booknow.model');
const objectID = require('mongoose').Types.ObjectId;

module.exports.saveBooknow = async (req, res) => {
    const data = {
        typeChambre, nbrplc, taille, breakfasts, petss, 
        features, nom, tel, startDates, endDates, nbrJ,
        prixPj, totalP, paymentOption
    } = req.body
    try {
        const booknow = await BooknowModel.create(data);
        res.status(200).json({ booknow: booknow._id});

    }catch(err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

module.exports.getAllBooking = async (req, res) => {
    const booknow = await BooknowModel.find().select();
    res.status(200).json(booknow);
};

module.exports.currentBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    BooknowModel.findById(req.params.id, (err, res) => {
        if (!err) res.send(docs);
        else console.log('ID inconnu : ' + err);
    }).select('-_v');

};

module.exports.UpdateBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await BooknowModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom,
                    tel: req.body.tel,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    nbrJ: req.body.nbrJ,
                    prixPj: req.body.prixPj,
                    totalP: req.body.totalP,
                    paymentOption: req.body.paymentOption
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs);
                if (err) return res.status(500).send({ message: err });
            }
        ).select('-_v')

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }

};

module.exports.DeleteBooking = async (req, res) => {
    console.log(req.params.id);
    if (!objectID.isValid(req.params.id))
        return res.status(400).send('ID inconnu :' + req.params.id);

    try {
        await BooknowModel.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
        console.log(err);
        res.status(500)
        res.send(err.message)
    }
};