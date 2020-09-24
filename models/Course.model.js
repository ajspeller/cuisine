const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      reuired: true,
    },
    maxStudents: {
      type: Number,
      default: 0,
      min: [0, 'Course cannot have a negative number of students'],
    },
    cost: {
      type: Number,
      default: 0,
      min: [0, 'Course cannot have a negative cost'],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model('Course', courseSchema);
