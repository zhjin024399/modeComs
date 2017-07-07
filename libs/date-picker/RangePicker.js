'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _getLocale = require('../_util/getLocale');

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getShowDateFromValue(value) {
    var _value = (0, _slicedToArray3['default'])(value, 2),
        start = _value[0],
        end = _value[1];
    // value could be an empty array, then we should not reset showDate


    if (!start && !end) {
        return;
    }
    var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
    return [start, newEnd];
}
function formatValue(value, format) {
    return value && value.format(format) || '';
}
function pickerValueAdapter(value) {
    if (!value) {
        return;
    }
    if (Array.isArray(value)) {
        return value;
    }
    return [value, value.clone().add(1, 'month')];
}

var RangePicker = function (_React$Component) {
    (0, _inherits3['default'])(RangePicker, _React$Component);

    function RangePicker(props) {
        (0, _classCallCheck3['default'])(this, RangePicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (RangePicker.__proto__ || Object.getPrototypeOf(RangePicker)).call(this, props));

        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.setState({ value: [] });
            _this.handleChange([]);
        };
        _this.clearHoverValue = function () {
            return _this.setState({ hoverValue: [] });
        };
        _this.handleChange = function (value) {
            var props = _this.props;
            if (!('value' in props)) {
                _this.setState({ value: value, showDate: getShowDateFromValue(value) });
            }
            props.onChange(value, [formatValue(value[0], props.format), formatValue(value[1], props.format)]);
        };
        _this.handleOpenChange = function (open) {
            _this.setState({ open: open });
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(open);
            }
        };
        _this.handleShowDateChange = function (showDate) {
            return _this.setState({ showDate: showDate });
        };
        _this.handleHoverChange = function (hoverValue) {
            return _this.setState({ hoverValue: hoverValue });
        };
        _this.renderFooter = function () {
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                ranges = _this$props.ranges,
                renderExtraFooter = _this$props.renderExtraFooter;

            if (!ranges && !renderExtraFooter) {
                return null;
            }
            var customFooter = renderExtraFooter ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-footer-extra', key: 'extra' },
                renderExtraFooter.apply(undefined, arguments)
            ) : null;
            var operations = Object.keys(ranges || {}).map(function (range) {
                var value = ranges[range];
                return _react2['default'].createElement(
                    'a',
                    { key: range, onClick: function onClick() {
                            return _this.setValue(value);
                        }, onMouseEnter: function onMouseEnter() {
                            return _this.setState({ hoverValue: value });
                        }, onMouseLeave: _this.clearHoverValue },
                    range
                );
            });
            var rangeNode = _react2['default'].createElement(
                'div',
                { className: prefixCls + '-footer-extra ' + prefixCls + '-range-quick-selector', key: 'range' },
                operations
            );
            return [rangeNode, customFooter];
        };
        var value = props.value || props.defaultValue || [];
        if (value[0] && !_moment2['default'].isMoment(value[0]) || value[1] && !_moment2['default'].isMoment(value[1])) {
            throw new Error('The value/defaultValue of RangePicker must be a moment object array after `antd@2.0`, ' + 'see: http://u.ant.design/date-picker-value');
        }
        _this.state = {
            value: value,
            open: props.open,
            hoverValue: []
        };
        return _this;
    }

    (0, _createClass3['default'])(RangePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                var value = nextProps.value || [];
                this.setState({ value: value, showDate: getShowDateFromValue(value) });
            }
            if ('open' in nextProps) {
                this.setState({
                    open: nextProps.open
                });
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.handleChange(value);
            if (!this.props.showTime) {
                this.setState({ open: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var state = this.state,
                props = this.props,
                context = this.context;
            var value = state.value,
                showDate = state.showDate,
                hoverValue = state.hoverValue,
                open = state.open;

            var localeCode = (0, _getLocale.getLocaleCode)(context);
            if (value && localeCode) {
                if (value[0]) {
                    value[0].locale(localeCode);
                }
                if (value[1]) {
                    value[1].locale(localeCode);
                }
            }
            var prefixCls = props.prefixCls,
                popupStyle = props.popupStyle,
                style = props.style,
                disabledDate = props.disabledDate,
                disabledTime = props.disabledTime
