const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [String], // Array of permissions like ['manage-classes', 'view-reports']
});

module.exports = mongoose.model("Role", RoleSchema);
