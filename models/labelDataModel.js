// models/Component.js
const mongoose = require('mongoose');

const labelDataSchema = new mongoose.Schema({
  componentType: String,
  title: String,
  content: String,
});

const LabelData = mongoose.model('LabelData', labelDataSchema);

module.exports = LabelData;
