'use strict';
const utils = require('./utils.js');

module.exports.hello = async event => {
  return utils.buildResponse(200,{
    message: "hell world",
    event
  })
};
