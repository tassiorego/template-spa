const componentGenerator = require('./generators/components/index');

module.exports = function (plop) {
    plop.setGenerator('component', componentGenerator);
};
