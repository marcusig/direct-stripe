/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    BlockControls = _wp$blocks.BlockControls,
    AlignmentToolbar = _wp$blocks.AlignmentToolbar,
    RichText = _wp$blocks.RichText;


var Buttons = [];
jQuery.ajax({
  url: ds_admin_block_vars.api.buttons
}).done(function (response) {
  Buttons = Object.values(response);
});

registerBlockType('direct-stripe/payment-button', {
  title: __('Stripe Payment button'),
  category: 'common',
  icon: 'money',
  attributes: {
    buttonItem: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    },
    content: {
      type: 'object',
      default: {
        label: __('Button not set')
      }
    },
    value: {
      type: 'string',
      default: '0'
    }
  },

  edit: function edit(props) {
    var isSelected = props.isSelected,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var alignment = attributes.alignment,
        buttonItem = attributes.buttonItem,
        content = attributes.content,
        value = attributes.value;


    var onChangeButton = function onChangeButton(updatedButton) {
      setAttributes({ buttonItem: updatedButton.target.value });
      var newContent = Buttons.filter(function (button) {
        return button.value === updatedButton.target.value;
      });
      setAttributes({ content: newContent[0] });
      setAttributes({ value: newContent[0]['value'] });
    };

    var onChangeAlignment = function onChangeAlignment(updatedAlignment) {
      setAttributes({ alignment: updatedAlignment });
    };

    return [isSelected && wp.element.createElement(
      BlockControls,
      { key: 'controls' },
      wp.element.createElement(
        'select',
        { value: value, onChange: onChangeButton },
        wp.element.createElement(
          'option',
          null,
          'Select Button'
        ),
        Buttons.map(function (item) {
          return wp.element.createElement(
            'option',
            { value: item.value },
            item.text
          );
        })
      )
    ), wp.element.createElement(
      'button',
      { value: content.value },
      content.label
    )];
  },

  save: function save(props) {
    return null;
  }

});

/*  Alignment Toolbar to return
 <!-- <AlignmentToolbar
    value={alignment}
    onChange={onChangeAlignment}
  /> -->
*/

/***/ })
/******/ ]);