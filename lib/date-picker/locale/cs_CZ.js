'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cs_CZ = require('rc-calendar/lib/locale/cs_CZ');

var _cs_CZ2 = _interopRequireDefault(_cs_CZ);

var _cs_CZ3 = require('../../time-picker/locale/cs_CZ');

var _cs_CZ4 = _interopRequireDefault(_cs_CZ3);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2['default'])({
        placeholder: 'Vybrat datum',
        rangePlaceholder: ['Od', 'Do']
    }, _cs_CZ2['default']),
    timePickerLocale: (0, _objectAssign2['default'])({}, _cs_CZ4['default'])
};
// All settings at:
// https://github.com/mode-design/mode-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];
