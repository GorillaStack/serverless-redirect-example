'use strict';

module.exports.redirect = (event, context, callback) => {
  const response = {
    statusCode: 301,
    headers: {
      Location: 'https://www.gorillastack.com',
    },
    body: '',
  };

  callback(null, response);
};
