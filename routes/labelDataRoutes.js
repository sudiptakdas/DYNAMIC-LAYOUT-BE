const express = require('express');
const router = express.Router();

const LabelData = require('../models/labelDataModel');

// Get all components
router.get('/', async (req, res) => {
  try {
    const components = await LabelData.find();
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific component by ID
router.get('/:id', async (req, res) => {
  try {
    const component = await LabelData.findById(req.params.id);
    if (!component) {
      return res.status(404).json({ message: 'Component not found.' });
    }
    res.json(component);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add or Update content
router.post('/updateOrCreate', async (req, res) => {
  const { _id, componentType, title, content } = req.body;
  try {
    let component;
    if (_id) {
      // If ID is provided, update existing component
      component = await LabelData.findByIdAndUpdate(
        _id,
        { title, content },
        { new: true }
      );
    } else {
      // If no ID provided, create new component
      component = new LabelData({ componentType, title, content });
      await component.save();
    }
    res
      .status(200)
      .json({ message: 'Component saved successfully.', component });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete content
router.delete('/delete/:id', async (req, res) => {
  try {
    await LabelData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Component deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
