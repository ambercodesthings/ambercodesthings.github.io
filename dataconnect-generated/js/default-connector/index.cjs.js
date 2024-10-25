const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ambercodesthings.github.io',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

