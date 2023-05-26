const Submission = require("../models/submission.model")

let getSubmissions = async (page) => {
    let perPage = 1;
    let offset = (page - 1) * perPage;

    let submissions = await Submission.find().skip(offset).limit(perPage);
    return submissions;
}

let createSubmission = async (formData) => {
    let newSubmission = await Submission.create(formData);
    return newSubmission;
}

module.exports = { getSubmissions, createSubmission };