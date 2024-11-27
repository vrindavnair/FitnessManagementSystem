
const Class = require("../models/Class");

// Create a new class
exports.createClass = async (req, res) => {
  try {
    const { name, description, coach } = req.body;

    const newClass = await Class.create({
      name,
      description,
      coach,
    });

    res.status(201).json({ message: "Class created successfully!", newClass });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("coach", "name email role");
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a class
exports.updateClass = async (req, res) => {
  try {
    const classId = req.params.id;

    const updatedClass = await Class.findByIdAndUpdate(
      classId,
      req.body,
      { new: true } // Returns the updated document
    );

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found!" });
    }

    res.status(200).json({ message: "Class updated successfully!", updatedClass });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a class
exports.deleteClass = async (req, res) => {
  try {
    const classId = req.params.id;

    const deletedClass = await Class.findByIdAndDelete(classId);

    if (!deletedClass) {
      return res.status(404).json({ message: "Class not found!" });
    }

    res.status(200).json({ message: "Class deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


