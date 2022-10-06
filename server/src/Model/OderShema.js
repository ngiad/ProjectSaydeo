import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    buy :  [{name: String, price: Number}],
    messenger : {
        type : String,
        default : "Không có yêu cần gì"
    },
    checkOder : {
        type :Boolean,
        required : true
    }
})

export const OderModel = mongoose.model("oder",Schema)