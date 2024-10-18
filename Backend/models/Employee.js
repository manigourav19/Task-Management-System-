const mongoose = require("mongoose");
const shortid = require("shortid");

const employeeSchema = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate,
    },
    fullName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    tasktitle: {
        type: [String],
        required: false,
    },
    taskdeadline: {
        type: String,
        required: false,
    },
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;

