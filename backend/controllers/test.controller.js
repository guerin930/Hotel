const objectID = require('mongoose').Types.ObjectId;
const Testmodel = require('../model/test.model');

module.exports.saveTest = async (req, res) => {
    const data = {
        nom, tel, startDates, endDates, paymentOption
    } = req.body
    try {
        const testnow = await Testmodel.create(data);
        res.status(200).json({ testnow: testnow._id});

    }catch(err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
module.exports.getAllTest = async (req, res) => {
    const testnow = await Testmodel.find().select();
    res.status(200).json(testnow);
};