const mongoose = require('mongoose');
const { TRUE } = require('node-sass');

const BooknowSchema = new mongoose.Schema(
    {
        typeChambre: {
            type: String,
            required: true
        },
        nbrplc : {
            type: Number,
            require: TRUE,
            default: 1
        },
        taille: {
            type: Number,
            require: true
        },
        breakfasts: {
            type: Boolean,
            require: true
        },
        petss: {
            type: Boolean,
            require: true
        },
        features: {
            type: Boolean,
            require: true
        },
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
        nbrJ: {
            type: Number,
            require: true
        },
        prixPj: {
            type: Number,
            require: true
        },
        totalP: {
            type: Number,
            require: true
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

const BooknowModel = mongoose.model("booknow", BooknowSchema);
module.exports = BooknowModel;