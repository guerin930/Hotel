const mongoose = require('mongoose');
const { TRUE } = require('node-sass');

const TestSchema = new mongoose.Schema(
    {
        
        nom: {
            type: String,
            require: true,
            trim: true,
            uppercase: true
        },
        tel: {
            type: Number,
            require: true
        },
        startDates: {
            type: Date,
            require: true,
            unique: true
        },
        endDates: {
            type: Date,
            require: true,
            unique: true
        },
        paymentOption: {
            type: String,
            require: true
        }

    },
    {
        timestamps: true,
    }
)

const Testmodel = mongoose.model("test", TestSchema);
module.exports = Testmodel;