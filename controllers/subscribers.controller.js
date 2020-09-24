const Subscriber = require('../models/Subscriber.model');

const getSubscriberParams = (body) => {
  const { name, email, zipCode } = body;
  return {
    name,
    email,
    zipCode: Number(zipCode),
  };
};

module.exports = {
  index: (req, res, next) => {},
  indexView: (req, res, next) => {},
  new: (req, res, next) => {},
  create: (req, res, next) => {},
  redirectView: (req, res, next) => {},
  show: (req, res, next) => {},
  showView: (req, res, next) => {},
  edit: (req, res, next) => {},
  update: (req, res, next) => {},
  delete: (req, res, next) => {},
};
