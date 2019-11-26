const mongoose = require("mongoose")

const PaysaveSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true }
})

const Paysave1 = mongoose.model("Paysave", PaysaveSchema);

Paysave1.savedata = function (newdata, callback) {
    newdata.save(callback);
}

module.exports = Paysave1;