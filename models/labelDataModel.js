// models/Component.js
const mongoose = require('mongoose');

const labelDataSchema = new mongoose.Schema({
  componentType: String,
  title: String,
  content: String,
  addCount: { type: Number, default: 0 },
  updateCount: { type: Number, default: 0 },
});

const LabelData = mongoose.model('LabelData', labelDataSchema);

module.exports = LabelData;
