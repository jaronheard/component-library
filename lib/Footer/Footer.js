'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _ScrollToTop = require('../ScrollToTop/ScrollToTop');

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _civicLogoStack_standard = require('../../assets/civic-logo-stack_standard.svg');

var _civicLogoStack_standard2 = _interopRequireDefault(_civicLogoStack_standard);

require('./Footer.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Footer' },
    _react2.default.createElement(
      'div',
      { className: 'Container' },
      _react2.default.createElement(
        'div',
        { className: 'copyright' },
        '\xA9 Copyright ',
        new Date().getFullYear()
      ),
      _react2.default.createElement('img', {
        alt: 'Hack Oregon footer logo',
        className: 'footer-logo',
        src: _civicLogoStack_standard2.default
      }),
      _react2.default.createElement(
        _ScrollToTop2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'scroll-to-top' },
          _react2.default.createElement(_Icon2.default, { className: 'fa fa-angle-up' }),
          _react2.default.createElement('br', null),
          'Back to Top'
        )
      )
    )
  );
};

Footer.displayName = 'Footer';

exports.default = Footer;