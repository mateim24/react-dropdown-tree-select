;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require('react'))
  else if (typeof define === 'function' && define.amd) define('ReactDropdownTreeSelect', ['react'], factory)
  else if (typeof exports === 'object') exports['ReactDropdownTreeSelect'] = factory(require('react'))
  else root['ReactDropdownTreeSelect'] = factory(root['React'])
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
        /******/
      }
      /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value)
      /******/ if (mode & 8) return value
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
      /******/ var ns = Object.create(null)
      /******/ __webpack_require__.r(ns)
      /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key]
            }.bind(null, key)
          )
      /******/ return ns
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default']
            }
          : /******/ function getModuleExports() {
              return module
            }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './src/index.js'))
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './node_modules/array.partial/index.js':
        /*!*********************************************!*\
  !*** ./node_modules/array.partial/index.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict'

          module.exports = function(arr, func) {
            var some = arr.filter(func)
            return some.length !== 0 && some.length !== arr.length
          }

          /***/
        },

      /***/ './node_modules/classnames/bind.js':
        /*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_ARRAY__,
            __WEBPACK_AMD_DEFINE_RESULT__ /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
          /* global define */

          ;(function() {
            'use strict'

            var hasOwn = {}.hasOwnProperty

            function classNames() {
              var classes = []

              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i]
                if (!arg) continue

                var argType = typeof arg

                if (argType === 'string' || argType === 'number') {
                  classes.push((this && this[arg]) || arg)
                } else if (Array.isArray(arg)) {
                  classes.push(classNames.apply(this, arg))
                } else if (argType === 'object') {
                  for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                      classes.push((this && this[key]) || key)
                    }
                  }
                }
              }

              return classes.join(' ')
            }

            if (true && module.exports) {
              classNames.default = classNames
              module.exports = classNames
            } else if (true) {
              // register as 'classnames', consistent with npm package name
              !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return classNames
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            } else {
            }
          })()

          /***/
        },

      /***/ './node_modules/prop-types/factoryWithThrowingShims.js':
        /*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict'
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactPropTypesSecret = __webpack_require__(
            /*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js'
          )

          function emptyFunction() {}
          function emptyFunctionWithReset() {}
          emptyFunctionWithReset.resetWarningCache = emptyFunction

          module.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
              if (secret === ReactPropTypesSecret) {
                // It is still safe when called from React.
                return
              }
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                  'Use PropTypes.checkPropTypes() to call them. ' +
                  'Read more at http://fb.me/use-check-prop-types'
              )
              err.name = 'Invariant Violation'
              throw err
            }
            shim.isRequired = shim
            function getShim() {
              return shim
            }
            // Important!
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
              array: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,

              any: shim,
              arrayOf: getShim,
              element: shim,
              elementType: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim,

              checkPropTypes: emptyFunctionWithReset,
              resetWarningCache: emptyFunction,
            }

            ReactPropTypes.PropTypes = ReactPropTypes

            return ReactPropTypes
          }

          /***/
        },

      /***/ './node_modules/prop-types/index.js':
        /*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          if (false) {
            var throwOnDirectAccess, ReactIs
          } else {
            // By explicitly using `prop-types` you are opting into new production behavior.
            // http://fb.me/prop-types-in-prod
            module.exports = __webpack_require__(
              /*! ./factoryWithThrowingShims */ './node_modules/prop-types/factoryWithThrowingShims.js'
            )()
          }

          /***/
        },

      /***/ './node_modules/prop-types/lib/ReactPropTypesSecret.js':
        /*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict'
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

          module.exports = ReactPropTypesSecret

          /***/
        },

      /***/ './node_modules/react-infinite-scroll-component/lib/index.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-component/lib/index.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          ;(function webpackUniversalModuleDefinition(root, factory) {
            if (true) module.exports = factory(__webpack_require__(/*! react */ 'react'))
            else {
            }
          })(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
            return /******/ (function(modules) {
              // webpackBootstrap
              /******/ // The module cache
              /******/ var installedModules = {} // The require function

              /******/ /******/ function __webpack_require__(moduleId) {
                /******/ // Check if module is in cache
                /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports // Create a new module (and put it into the cache)

                /******/ /******/ var module = (installedModules[moduleId] = {
                  /******/ exports: {},
                  /******/ id: moduleId,
                  /******/ loaded: false,
                  /******/
                }) // Execute the module function

                /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__) // Flag the module as loaded

                /******/ /******/ module.loaded = true // Return the exports of the module

                /******/ /******/ return module.exports
                /******/
              } // expose the modules object (__webpack_modules__)

              /******/ /******/ __webpack_require__.m = modules // expose the module cache

              /******/ /******/ __webpack_require__.c = installedModules // __webpack_public_path__

              /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports

              /******/ /******/ return __webpack_require__(0)
              /******/
            })(
              /************************************************************************/
              /******/ [
                /* 0 */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true,
                  })

                  var _extends =
                    Object.assign ||
                    function(target) {
                      for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i]
                        for (var key in source) {
                          if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                          }
                        }
                      }
                      return target
                    }

                  var _createClass = (function() {
                    function defineProperties(target, props) {
                      for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i]
                        descriptor.enumerable = descriptor.enumerable || false
                        descriptor.configurable = true
                        if ('value' in descriptor) descriptor.writable = true
                        Object.defineProperty(target, descriptor.key, descriptor)
                      }
                    }
                    return function(Constructor, protoProps, staticProps) {
                      if (protoProps) defineProperties(Constructor.prototype, protoProps)
                      if (staticProps) defineProperties(Constructor, staticProps)
                      return Constructor
                    }
                  })()

                  var _get = function get(_x2, _x3, _x4) {
                    var _again = true
                    _function: while (_again) {
                      var object = _x2,
                        property = _x3,
                        receiver = _x4
                      _again = false
                      if (object === null) object = Function.prototype
                      var desc = Object.getOwnPropertyDescriptor(object, property)
                      if (desc === undefined) {
                        var parent = Object.getPrototypeOf(object)
                        if (parent === null) {
                          return undefined
                        } else {
                          _x2 = parent
                          _x3 = property
                          _x4 = receiver
                          _again = true
                          desc = parent = undefined
                          continue _function
                        }
                      } else if ('value' in desc) {
                        return desc.value
                      } else {
                        var getter = desc.get
                        if (getter === undefined) {
                          return undefined
                        }
                        return getter.call(receiver)
                      }
                    }
                  }

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError('Cannot call a class as a function')
                    }
                  }

                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== 'function' && superClass !== null) {
                      throw new TypeError(
                        'Super expression must either be null or a function, not ' + typeof superClass
                      )
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                      constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
                    })
                    if (superClass)
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(subClass, superClass)
                        : (subClass.__proto__ = superClass)
                  }

                  var _react = __webpack_require__(8)

                  var _react2 = _interopRequireDefault(_react)

                  var _propTypes = __webpack_require__(6)

                  var _propTypes2 = _interopRequireDefault(_propTypes)

                  var _utilsThrottle = __webpack_require__(2)

                  var _utilsThrottle2 = _interopRequireDefault(_utilsThrottle)

                  var _utilsThreshold = __webpack_require__(1)

                  var InfiniteScroll = (function(_Component) {
                    _inherits(InfiniteScroll, _Component)

                    function InfiniteScroll(props) {
                      _classCallCheck(this, InfiniteScroll)

                      _get(Object.getPrototypeOf(InfiniteScroll.prototype), 'constructor', this).call(this)
                      this.state = {
                        showLoader: false,
                        lastScrollTop: 0,
                        actionTriggered: false,
                        pullToRefreshThresholdBreached: false,
                      }
                      // variables to keep track of pull down behaviour
                      this.startY = 0
                      this.currentY = 0
                      this.dragging = false
                      // will be populated in componentDidMount
                      // based on the height of the pull down element
                      this.maxPullDownDistance = 0

                      this.onScrollListener = this.onScrollListener.bind(this)
                      this.throttledOnScrollListener = (0, _utilsThrottle2['default'])(this.onScrollListener, 150).bind(
                        this
                      )
                      this.onStart = this.onStart.bind(this)
                      this.onMove = this.onMove.bind(this)
                      this.onEnd = this.onEnd.bind(this)
                      this.getScrollableTarget = this.getScrollableTarget.bind(this)
                    }

                    _createClass(InfiniteScroll, [
                      {
                        key: 'componentDidMount',
                        value: function componentDidMount() {
                          this._scrollableNode = this.getScrollableTarget()
                          this.el = this.props.height ? this._infScroll : this._scrollableNode || window
                          this.el.addEventListener('scroll', this.throttledOnScrollListener)

                          if (
                            typeof this.props.initialScrollY === 'number' &&
                            this.el.scrollHeight > this.props.initialScrollY
                          ) {
                            this.el.scrollTo(0, this.props.initialScrollY)
                          }

                          if (this.props.pullDownToRefresh) {
                            this.el.addEventListener('touchstart', this.onStart)
                            this.el.addEventListener('touchmove', this.onMove)
                            this.el.addEventListener('touchend', this.onEnd)

                            this.el.addEventListener('mousedown', this.onStart)
                            this.el.addEventListener('mousemove', this.onMove)
                            this.el.addEventListener('mouseup', this.onEnd)

                            // get BCR of pullDown element to position it above
                            this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height
                            this.forceUpdate()

                            if (typeof this.props.refreshFunction !== 'function') {
                              throw new Error(
                                'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                              )
                            }
                          }
                        },
                      },
                      {
                        key: 'componentWillUnmount',
                        value: function componentWillUnmount() {
                          this.el.removeEventListener('scroll', this.throttledOnScrollListener)

                          if (this.props.pullDownToRefresh) {
                            this.el.removeEventListener('touchstart', this.onStart)
                            this.el.removeEventListener('touchmove', this.onMove)
                            this.el.removeEventListener('touchend', this.onEnd)

                            this.el.removeEventListener('mousedown', this.onStart)
                            this.el.removeEventListener('mousemove', this.onMove)
                            this.el.removeEventListener('mouseup', this.onEnd)
                          }
                        },
                      },
                      {
                        key: 'componentWillReceiveProps',
                        value: function componentWillReceiveProps(props) {
                          // do nothing when dataLength and key are unchanged
                          if (this.props.key === props.key && this.props.dataLength === props.dataLength) return

                          // update state when new data was sent in
                          this.setState({
                            showLoader: false,
                            actionTriggered: false,
                            pullToRefreshThresholdBreached: false,
                          })
                        },
                      },
                      {
                        key: 'getScrollableTarget',
                        value: function getScrollableTarget() {
                          if (this.props.scrollableTarget instanceof HTMLElement) return this.props.scrollableTarget
                          if (typeof this.props.scrollableTarget === 'string') {
                            return document.getElementById(this.props.scrollableTarget)
                          }
                          if (this.props.scrollableTarget === null) {
                            console.warn(
                              'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                            )
                          }
                          return null
                        },
                      },
                      {
                        key: 'onStart',
                        value: function onStart(evt) {
                          if (this.state.lastScrollTop) return

                          this.dragging = true
                          this.startY = evt.pageY || evt.touches[0].pageY
                          this.currentY = this.startY

                          this._infScroll.style.willChange = 'transform'
                          this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'
                        },
                      },
                      {
                        key: 'onMove',
                        value: function onMove(evt) {
                          if (!this.dragging) return
                          this.currentY = evt.pageY || evt.touches[0].pageY

                          // user is scrolling down to up
                          if (this.currentY < this.startY) return

                          if (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold) {
                            this.setState({
                              pullToRefreshThresholdBreached: true,
                            })
                          }

                          // so you can drag upto 1.5 times of the maxPullDownDistance
                          if (this.currentY - this.startY > this.maxPullDownDistance * 1.5) return

                          this._infScroll.style.overflow = 'visible'
                          this._infScroll.style.transform =
                            'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'
                        },
                      },
                      {
                        key: 'onEnd',
                        value: function onEnd(evt) {
                          var _this = this

                          this.startY = 0
                          this.currentY = 0

                          this.dragging = false

                          if (this.state.pullToRefreshThresholdBreached) {
                            this.props.refreshFunction && this.props.refreshFunction()
                          }

                          requestAnimationFrame(function() {
                            // this._infScroll
                            if (_this._infScroll) {
                              _this._infScroll.style.overflow = 'auto'
                              _this._infScroll.style.transform = 'none'
                              _this._infScroll.style.willChange = 'none'
                            }
                          })
                        },
                      },
                      {
                        key: 'isElementAtBottom',
                        value: function isElementAtBottom(target) {
                          var scrollThreshold = arguments.length <= 1 || arguments[1] === undefined ? 0.8 : arguments[1]

                          var clientHeight =
                            target === document.body || target === document.documentElement
                              ? window.screen.availHeight
                              : target.clientHeight

                          var threshold = (0, _utilsThreshold.parseThreshold)(scrollThreshold)

                          if (threshold.unit === _utilsThreshold.ThresholdUnits.Pixel) {
                            return target.scrollTop + clientHeight >= target.scrollHeight - threshold.value
                          }

                          return target.scrollTop + clientHeight >= (threshold.value / 100) * target.scrollHeight
                        },
                      },
                      {
                        key: 'onScrollListener',
                        value: function onScrollListener(event) {
                          var _this2 = this

                          if (typeof this.props.onScroll === 'function') {
                            // Execute this callback in next tick so that it does not affect the
                            // functionality of the library.
                            setTimeout(function() {
                              return _this2.props.onScroll(event)
                            }, 0)
                          }

                          var target =
                            this.props.height || this._scrollableNode
                              ? event.target
                              : document.documentElement.scrollTop
                              ? document.documentElement
                              : document.body

                          // return immediately if the action has already been triggered,
                          // prevents multiple triggers.
                          if (this.state.actionTriggered) return

                          var atBottom = this.isElementAtBottom(target, this.props.scrollThreshold)

                          // call the `next` function in the props to trigger the next data fetch
                          if (atBottom && this.props.hasMore) {
                            this.setState({ actionTriggered: true, showLoader: true })
                            this.props.next()
                          }
                          this.setState({ lastScrollTop: target.scrollTop })
                        },
                      },
                      {
                        key: 'render',
                        value: function render() {
                          var _this3 = this

                          var style = _extends(
                            {
                              height: this.props.height || 'auto',
                              overflow: 'auto',
                              WebkitOverflowScrolling: 'touch',
                            },
                            this.props.style
                          )
                          var hasChildren =
                            this.props.hasChildren || !!(this.props.children && this.props.children.length)

                          // because heighted infiniteScroll visualy breaks
                          // on drag down as overflow becomes visible
                          var outerDivStyle =
                            this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                          return _react2['default'].createElement(
                            'div',
                            { style: outerDivStyle },
                            _react2['default'].createElement(
                              'div',
                              {
                                className: 'infinite-scroll-component ' + (this.props.className || ''),
                                ref: function(infScroll) {
                                  return (_this3._infScroll = infScroll)
                                },
                                style: style,
                              },
                              this.props.pullDownToRefresh &&
                                _react2['default'].createElement(
                                  'div',
                                  {
                                    style: { position: 'relative' },
                                    ref: function(pullDown) {
                                      return (_this3._pullDown = pullDown)
                                    },
                                  },
                                  _react2['default'].createElement(
                                    'div',
                                    {
                                      style: {
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: -1 * this.maxPullDownDistance,
                                      },
                                    },
                                    !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                    this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                  )
                                ),
                              this.props.children,
                              !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader,
                              this.state.showLoader && this.props.hasMore && this.props.loader,
                              !this.props.hasMore && this.props.endMessage
                            )
                          )
                        },
                      },
                    ])

                    return InfiniteScroll
                  })(_react.Component)

                  exports['default'] = InfiniteScroll

                  InfiniteScroll.defaultProps = {
                    pullDownToRefreshContent: _react2['default'].createElement('h3', null, 'Pull down to refresh'),
                    releaseToRefreshContent: _react2['default'].createElement('h3', null, 'Release to refresh'),
                    pullDownToRefreshThreshold: 100,
                    disableBrowserPullToRefresh: true,
                  }

                  InfiniteScroll.propTypes = {
                    next: _propTypes2['default'].func,
                    hasMore: _propTypes2['default'].bool,
                    children: _propTypes2['default'].node,
                    loader: _propTypes2['default'].node.isRequired,
                    scrollThreshold: _propTypes2['default'].oneOfType([
                      _propTypes2['default'].number,
                      _propTypes2['default'].string,
                    ]),
                    endMessage: _propTypes2['default'].node,
                    style: _propTypes2['default'].object,
                    height: _propTypes2['default'].number,
                    scrollableTarget: _propTypes2['default'].node,
                    hasChildren: _propTypes2['default'].bool,
                    pullDownToRefresh: _propTypes2['default'].bool,
                    pullDownToRefreshContent: _propTypes2['default'].node,
                    releaseToRefreshContent: _propTypes2['default'].node,
                    pullDownToRefreshThreshold: _propTypes2['default'].number,
                    refreshFunction: _propTypes2['default'].func,
                    onScroll: _propTypes2['default'].func,
                    dataLength: _propTypes2['default'].number.isRequired,
                    key: _propTypes2['default'].string,
                  }
                  module.exports = exports['default']

                  /***/
                },
                /* 1 */
                /***/ function(module, exports) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true,
                  })
                  exports.parseThreshold = parseThreshold
                  var ThresholdUnits = {
                    Pixel: 'Pixel',
                    Percent: 'Percent',
                  }

                  exports.ThresholdUnits = ThresholdUnits
                  var defaultThreshold = {
                    unit: ThresholdUnits.Percent,
                    value: 0.8,
                  }

                  function parseThreshold(scrollThreshold) {
                    if (typeof scrollThreshold === 'number') {
                      return {
                        unit: ThresholdUnits.Percent,
                        value: scrollThreshold * 100,
                      }
                    }

                    if (typeof scrollThreshold === 'string') {
                      if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
                        return {
                          unit: ThresholdUnits.Pixel,
                          value: parseFloat(scrollThreshold),
                        }
                      }

                      if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
                        return {
                          unit: ThresholdUnits.Percent,
                          value: parseFloat(scrollThreshold),
                        }
                      }

                      console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...')

                      return defaultThreshold
                    }

                    console.warn('scrollThreshold should be string or number')

                    return defaultThreshold
                  }

                  /***/
                },
                /* 2 */
                /***/ function(module, exports) {
                  // https://remysharp.com/2010/07/21/throttling-function-calls
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true,
                  })
                  exports['default'] = throttle

                  function throttle(fn, threshhold, scope) {
                    threshhold || (threshhold = 250)
                    var last, deferTimer
                    return function() {
                      var context = scope || this

                      var now = +new Date(),
                        args = arguments
                      if (last && now < last + threshhold) {
                        // hold on to it
                        clearTimeout(deferTimer)
                        deferTimer = setTimeout(function() {
                          last = now
                          fn.apply(context, args)
                        }, threshhold)
                      } else {
                        last = now
                        fn.apply(context, args)
                      }
                    }
                  }

                  module.exports = exports['default']

                  /***/
                },
                /* 3 */
                /***/ function(module, exports) {
                  'use strict'

                  /**
                   * Copyright (c) 2013-present, Facebook, Inc.
                   *
                   * This source code is licensed under the MIT license found in the
                   * LICENSE file in the root directory of this source tree.
                   *
                   *
                   */

                  function makeEmptyFunction(arg) {
                    return function() {
                      return arg
                    }
                  }

                  /**
                   * This function accepts and discards inputs; it has no side effects. This is
                   * primarily useful idiomatically for overridable function endpoints which
                   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
                   */
                  var emptyFunction = function emptyFunction() {}

                  emptyFunction.thatReturns = makeEmptyFunction
                  emptyFunction.thatReturnsFalse = makeEmptyFunction(false)
                  emptyFunction.thatReturnsTrue = makeEmptyFunction(true)
                  emptyFunction.thatReturnsNull = makeEmptyFunction(null)
                  emptyFunction.thatReturnsThis = function() {
                    return this
                  }
                  emptyFunction.thatReturnsArgument = function(arg) {
                    return arg
                  }

                  module.exports = emptyFunction

                  /***/
                },
                /* 4 */
                /***/ function(module, exports, __webpack_require__) {
                  /**
                   * Copyright (c) 2013-present, Facebook, Inc.
                   *
                   * This source code is licensed under the MIT license found in the
                   * LICENSE file in the root directory of this source tree.
                   *
                   */

                  'use strict'

                  /**
                   * Use invariant() to assert state which your program assumes to be true.
                   *
                   * Provide sprintf-style format (only %s is supported) and arguments
                   * to provide information about what broke and what you were
                   * expecting.
                   *
                   * The invariant message will be stripped in production, but the invariant
                   * will remain to ensure logic does not differ in production.
                   */

                  var validateFormat = function validateFormat(format) {}

                  if (false) {
                  }

                  function invariant(condition, format, a, b, c, d, e, f) {
                    validateFormat(format)

                    if (!condition) {
                      var error
                      if (format === undefined) {
                        error = new Error(
                          'Minified exception occurred; use the non-minified dev environment ' +
                            'for the full error message and additional helpful warnings.'
                        )
                      } else {
                        var args = [a, b, c, d, e, f]
                        var argIndex = 0
                        error = new Error(
                          format.replace(/%s/g, function() {
                            return args[argIndex++]
                          })
                        )
                        error.name = 'Invariant Violation'
                      }

                      error.framesToPop = 1 // we don't care about invariant's own frame
                      throw error
                    }
                  }

                  module.exports = invariant

                  /***/
                },
                /* 5 */
                /***/ function(module, exports, __webpack_require__) {
                  /**
                   * Copyright 2013-present, Facebook, Inc.
                   * All rights reserved.
                   *
                   * This source code is licensed under the BSD-style license found in the
                   * LICENSE file in the root directory of this source tree. An additional grant
                   * of patent rights can be found in the PATENTS file in the same directory.
                   */

                  'use strict'

                  var emptyFunction = __webpack_require__(3)
                  var invariant = __webpack_require__(4)
                  var ReactPropTypesSecret = __webpack_require__(7)

                  module.exports = function() {
                    function shim(props, propName, componentName, location, propFullName, secret) {
                      if (secret === ReactPropTypesSecret) {
                        // It is still safe when called from React.
                        return
                      }
                      invariant(
                        false,
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                          'Use PropTypes.checkPropTypes() to call them. ' +
                          'Read more at http://fb.me/use-check-prop-types'
                      )
                    }
                    shim.isRequired = shim
                    function getShim() {
                      return shim
                    }
                    // Important!
                    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
                    var ReactPropTypes = {
                      array: shim,
                      bool: shim,
                      func: shim,
                      number: shim,
                      object: shim,
                      string: shim,
                      symbol: shim,

                      any: shim,
                      arrayOf: getShim,
                      element: shim,
                      instanceOf: getShim,
                      node: shim,
                      objectOf: getShim,
                      oneOf: getShim,
                      oneOfType: getShim,
                      shape: getShim,
                    }

                    ReactPropTypes.checkPropTypes = emptyFunction
                    ReactPropTypes.PropTypes = ReactPropTypes

                    return ReactPropTypes
                  }

                  /***/
                },
                /* 6 */
                /***/ function(module, exports, __webpack_require__) {
                  /**
                   * Copyright 2013-present, Facebook, Inc.
                   * All rights reserved.
                   *
                   * This source code is licensed under the BSD-style license found in the
                   * LICENSE file in the root directory of this source tree. An additional grant
                   * of patent rights can be found in the PATENTS file in the same directory.
                   */

                  if (false) {
                    var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE
                  } else {
                    // By explicitly using `prop-types` you are opting into new production behavior.
                    // http://fb.me/prop-types-in-prod
                    module.exports = __webpack_require__(5)()
                  }

                  /***/
                },
                /* 7 */
                /***/ function(module, exports) {
                  /**
                   * Copyright 2013-present, Facebook, Inc.
                   * All rights reserved.
                   *
                   * This source code is licensed under the BSD-style license found in the
                   * LICENSE file in the root directory of this source tree. An additional grant
                   * of patent rights can be found in the PATENTS file in the same directory.
                   */

                  'use strict'

                  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

                  module.exports = ReactPropTypesSecret

                  /***/
                },
                /* 8 */
                /***/ function(module, exports) {
                  module.exports = __WEBPACK_EXTERNAL_MODULE_8__

                  /***/
                },
                /******/
              ]
            )
          })

          /***/
        },

      /***/ './src/a11y/index.js':
        /*!***************************!*\
  !*** ./src/a11y/index.js ***!
  \***************************/
        /*! exports provided: getAriaLabel */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getAriaLabel', function() {
            return getAriaLabel
          })
          function getAriaLabel(label, additionalLabelledBy) {
            var attributes = getAriaAttributeForLabel(label)

            if (additionalLabelledBy) {
              attributes['aria-labelledby'] = (
                (attributes['aria-labelledby'] || '') +
                ' ' +
                additionalLabelledBy
              ).trim()
            }

            return attributes
          }

          function getAriaAttributeForLabel(label) {
            if (!label) return {}

            /* See readme for label. When label starts with # it references ids of dom nodes instead.
    When used on aria-labelledby, they should be referenced without a starting hash/# */
            if (label[0] === '#') {
              return { 'aria-labelledby': label.substring(1).replace(/ #/g, ' ') }
            }
            return { 'aria-label': label }
          }

          /***/
        },

      /***/ './src/checkbox/index.js':
        /*!*******************************!*\
  !*** ./src/checkbox/index.js ***!
  \*******************************/
        /*! exports provided: refUpdater, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'refUpdater', function() {
            return refUpdater
          })
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _objectWithoutProperties(obj, keys) {
            var target = {}
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
              target[i] = obj[i]
            }
            return target
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var refUpdater = function refUpdater(_ref) {
            var checked = _ref.checked,
              indeterminate = _ref.indeterminate
            return function(input) {
              if (input) {
                input.checked = checked
                input.indeterminate = indeterminate
              }
            }
          }

          var Checkbox = (function(_PureComponent) {
            _inherits(Checkbox, _PureComponent)

            function Checkbox() {
              _classCallCheck(this, Checkbox)

              return _possibleConstructorReturn(
                this,
                (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments)
              )
            }

            _createClass(Checkbox, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    checked = _props.checked,
                    _props$indeterminate = _props.indeterminate,
                    indeterminate = _props$indeterminate === undefined ? false : _props$indeterminate,
                    onChange = _props.onChange,
                    disabled = _props.disabled,
                    readOnly = _props.readOnly,
                    rest = _objectWithoutProperties(_props, [
                      'checked',
                      'indeterminate',
                      'onChange',
                      'disabled',
                      'readOnly',
                    ])

                  var isDisabled = disabled || readOnly

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'input',
                    _extends(
                      {
                        type: 'checkbox',
                        ref: refUpdater({ checked: checked, indeterminate: indeterminate }),
                        onChange: onChange,
                        disabled: isDisabled,
                      },
                      rest
                    )
                  )
                },
              },
            ])

            return Checkbox
          })(react__WEBPACK_IMPORTED_MODULE_0__['PureComponent'])

          Checkbox.propTypes = {
            checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            indeterminate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          }

          /* harmony default export */ __webpack_exports__['default'] = Checkbox

          /***/
        },

      /***/ './src/index.css':
        /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ './src/index.js':
        /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./utils */ './src/utils/index.js'
          )
          /* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./input */ './src/input/index.js'
          )
          /* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./trigger */ './src/trigger/index.js'
          )
          /* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./tree */ './src/tree/index.js'
          )
          /* harmony import */ var _tree_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./tree-manager */ './src/tree-manager/index.js'
          )
          /* harmony import */ var _tree_manager_keyboardNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./tree-manager/keyboardNavigation */ './src/tree-manager/keyboardNavigation.js'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./index.css */ './src/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_9__
          )
          /* harmony import */ var _a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ./a11y */ './src/a11y/index.js'
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          /*!
           * React Dropdown Tree Select
           * A lightweight, fast and highly customizable tree select component.
           * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
           * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
           * license MIT
           * see https://github.com/dowjones/react-dropdown-tree-select
           */

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_9___default.a
          )

          var DropdownTreeSelect = (function(_Component) {
            _inherits(DropdownTreeSelect, _Component)

            function DropdownTreeSelect(props) {
              _classCallCheck(this, DropdownTreeSelect)

              var _this = _possibleConstructorReturn(
                this,
                (DropdownTreeSelect.__proto__ || Object.getPrototypeOf(DropdownTreeSelect)).call(this, props)
              )

              _this.initNewProps = function(_ref) {
                var data = _ref.data,
                  mode = _ref.mode,
                  showDropdown = _ref.showDropdown,
                  showPartiallySelected = _ref.showPartiallySelected,
                  searchPredicate = _ref.searchPredicate

                _this.treeManager = new _tree_manager__WEBPACK_IMPORTED_MODULE_7__['default']({
                  data: data,
                  mode: mode,
                  showPartiallySelected: showPartiallySelected,
                  rootPrefixId: _this.clientId,
                  searchPredicate: searchPredicate,
                })
                // Restore focus-state
                var currentFocusNode =
                  _this.state.currentFocus && _this.treeManager.getNodeById(_this.state.currentFocus)
                if (currentFocusNode) {
                  currentFocusNode._focused = true
                }
                _this.setState(function(prevState) {
                  return _extends(
                    {
                      showDropdown: /initial|always/.test(showDropdown) || prevState.showDropdown === true,
                    },
                    _this.treeManager.getTreeAndTags()
                  )
                })
              }

              _this.resetSearchState = function() {
                // clear the search criteria and avoid react controlled/uncontrolled warning
                _this.searchInput.value = ''
                return {
                  tree: _this.treeManager.restoreNodes(), // restore the tree to its pre-search state
                  searchModeOn: false,
                  allNodesHidden: false,
                }
              }

              _this.handleClick = function(e, callback) {
                _this.setState(function(prevState) {
                  // keep dropdown active when typing in search box
                  var showDropdown =
                    _this.props.showDropdown === 'always' || _this.keepDropdownActive || !prevState.showDropdown

                  // register event listeners only if there is a state change
                  if (showDropdown !== prevState.showDropdown) {
                    if (showDropdown) {
                      document.addEventListener('click', _this.handleOutsideClick, false)
                    } else {
                      document.removeEventListener('click', _this.handleOutsideClick, false)
                    }
                  }

                  if (showDropdown) _this.props.onFocus()
                  else _this.props.onBlur()

                  return !showDropdown
                    ? _extends({ showDropdown: showDropdown }, _this.resetSearchState())
                    : { showDropdown: showDropdown }
                }, callback)
              }

              _this.handleOutsideClick = function(e) {
                if (
                  _this.props.showDropdown === 'always' ||
                  !Object(_utils__WEBPACK_IMPORTED_MODULE_3__['isOutsideClick'])(e, _this.node)
                ) {
                  return
                }

                _this.handleClick()
              }

              _this.onInputChange = function(value) {
                var _this$treeManager$fil = _this.treeManager.filterTree(
                    value,
                    _this.props.keepTreeOnSearch,
                    _this.props.keepChildrenOnSearch
                  ),
                  allNodesHidden = _this$treeManager$fil.allNodesHidden,
                  tree = _this$treeManager$fil.tree

                var searchModeOn = value.length > 0

                _this.setState({
                  tree: tree,
                  searchModeOn: searchModeOn,
                  allNodesHidden: allNodesHidden,
                })
              }

              _this.onTagRemove = function(id, isKeyboardEvent) {
                var prevTags = _this.state.tags

                _this.onCheckboxChange(id, false, function(tags) {
                  if (!isKeyboardEvent) return

                  _tree_manager_keyboardNavigation__WEBPACK_IMPORTED_MODULE_8__['default']
                    .getNextFocusAfterTagDelete(id, prevTags, tags, _this.searchInput)
                    .focus()
                })
              }

              _this.onNodeToggle = function(id) {
                _this.treeManager.toggleNodeExpandState(id)
                var tree = _this.state.searchModeOn ? _this.treeManager.matchTree : _this.treeManager.tree
                _this.setState({ tree: tree })
                typeof _this.props.onNodeToggle === 'function' &&
                  _this.props.onNodeToggle(_this.treeManager.getNodeById(id))
              }

              _this.onCheckboxChange = function(id, checked, callback) {
                var _this$props = _this.props,
                  mode = _this$props.mode,
                  keepOpenOnSelect = _this$props.keepOpenOnSelect

                _this.treeManager.setNodeCheckedState(id, checked)
                var tags = _this.treeManager.tags
                var isSingleSelect = ['simpleSelect', 'radioSelect'].indexOf(mode) > -1
                var showDropdown = isSingleSelect && !keepOpenOnSelect ? false : _this.state.showDropdown

                if (!tags.length) {
                  _this.treeManager.restoreDefaultValues()
                  tags = _this.treeManager.tags
                }

                var tree = _this.state.searchModeOn ? _this.treeManager.matchTree : _this.treeManager.tree
                var nextState = {
                  tree: tree,
                  tags: tags,
                  showDropdown: showDropdown,
                }

                if ((isSingleSelect && !showDropdown) || _this.props.clearSearchOnChange) {
                  Object.assign(nextState, _this.resetSearchState())
                }

                if (isSingleSelect && !showDropdown) {
                  document.removeEventListener('click', _this.handleOutsideClick, false)
                }

                _this.setState(nextState, function() {
                  callback && callback(tags)
                })
                _this.props.onChange(_this.treeManager.getNodeById(id), tags)
              }

              _this.onAction = function(nodeId, action) {
                _this.props.onAction(_this.treeManager.getNodeById(nodeId), action)
              }

              _this.onInputFocus = function() {
                _this.keepDropdownActive = true
              }

              _this.onInputBlur = function() {
                _this.keepDropdownActive = false
              }

              _this.onTrigger = function(e) {
                _this.handleClick(e, function() {
                  // If the dropdown is shown after key press, focus the input
                  if (_this.state.showDropdown) {
                    _this.searchInput.focus()
                  }
                })
              }

              _this.onKeyboardKeyDown = function(e) {
                var _this$props2 = _this.props,
                  readOnly = _this$props2.readOnly,
                  mode = _this$props2.mode
                var _this$state = _this.state,
                  showDropdown = _this$state.showDropdown,
                  tags = _this$state.tags,
                  searchModeOn = _this$state.searchModeOn,
                  currentFocus = _this$state.currentFocus

                var tm = _this.treeManager
                var tree = searchModeOn ? tm.matchTree : tm.tree

                if (
                  !showDropdown &&
                  (_tree_manager_keyboardNavigation__WEBPACK_IMPORTED_MODULE_8__['default'].isValidKey(e.key, false) ||
                    /^\w$/i.test(e.key))
                ) {
                  // Triggers open of dropdown and retriggers event
                  e.persist()
                  _this.handleClick(null, function() {
                    return _this.onKeyboardKeyDown(e)
                  })
                  if (/\w/i.test(e.key)) return
                } else if (
                  showDropdown &&
                  _tree_manager_keyboardNavigation__WEBPACK_IMPORTED_MODULE_8__['default'].isValidKey(e.key, true)
                ) {
                  var newFocus = tm.handleNavigationKey(
                    currentFocus,
                    tree,
                    e.key,
                    readOnly,
                    !searchModeOn,
                    _this.onCheckboxChange,
                    _this.onNodeToggle
                  )
                  if (newFocus !== currentFocus) {
                    _this.setState({ currentFocus: newFocus })
                  }
                } else if (showDropdown && ['Escape', 'Tab'].indexOf(e.key) > -1) {
                  if (mode === 'simpleSelect' && tree.has(currentFocus)) {
                    _this.onCheckboxChange(currentFocus, true)
                  } else {
                    // Triggers close
                    _this.keepDropdownActive = false
                    _this.handleClick()
                  }
                  return
                } else if (e.key === 'Backspace' && tags.length && _this.searchInput.value.length === 0) {
                  var lastTag = tags.pop()
                  _this.onCheckboxChange(lastTag._id, false)
                } else {
                  return
                }
                e.preventDefault()
              }

              _this.getAriaAttributes = function() {
                var _this$props3 = _this.props,
                  mode = _this$props3.mode,
                  texts = _this$props3.texts

                if (mode !== 'radioSelect') return {}

                return _extends(
                  {
                    role: 'radiogroup',
                  },
                  Object(_a11y__WEBPACK_IMPORTED_MODULE_10__['getAriaLabel'])(texts.label)
                )
              }

              _this.state = {
                searchModeOn: false,
                currentFocus: undefined,
              }
              _this.clientId = props.id || _utils__WEBPACK_IMPORTED_MODULE_3__['clientIdGenerator'].get(_this)
              return _this
            }

            _createClass(DropdownTreeSelect, [
              {
                key: 'componentWillMount',
                value: function componentWillMount() {
                  this.initNewProps(this.props)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  document.removeEventListener('click', this.handleOutsideClick, false)
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function componentWillReceiveProps(nextProps) {
                  this.initNewProps(nextProps)
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this

                  var _props = this.props,
                    disabled = _props.disabled,
                    readOnly = _props.readOnly,
                    mode = _props.mode,
                    texts = _props.texts
                  var _state = this.state,
                    showDropdown = _state.showDropdown,
                    currentFocus = _state.currentFocus,
                    tags = _state.tags

                  var activeDescendant = currentFocus ? currentFocus + '_li' : undefined

                  var commonProps = {
                    disabled: disabled,
                    readOnly: readOnly,
                    activeDescendant: activeDescendant,
                    texts: texts,
                    mode: mode,
                    clientId: this.clientId,
                  }

                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'div',
                    {
                      id: this.clientId,
                      className: cx(this.props.className, 'react-dropdown-tree-select'),
                      ref: function ref(node) {
                        _this2.node = node
                      },
                    },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      'div',
                      {
                        className: cx(
                          'dropdown',
                          { 'simple-select': mode === 'simpleSelect' },
                          { 'radio-select': mode === 'radioSelect' }
                        ),
                      },
                      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        _trigger__WEBPACK_IMPORTED_MODULE_5__['default'],
                        _extends({ onTrigger: this.onTrigger, showDropdown: showDropdown }, commonProps, {
                          tags: tags,
                        }),
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                          _input__WEBPACK_IMPORTED_MODULE_4__['default'],
                          _extends(
                            {
                              inputRef: function inputRef(el) {
                                _this2.searchInput = el
                              },
                              tags: tags,
                              onInputChange: this.onInputChange,
                              onFocus: this.onInputFocus,
                              onBlur: this.onInputBlur,
                              onTagRemove: this.onTagRemove,
                              onKeyDown: this.onKeyboardKeyDown,
                            },
                            commonProps
                          )
                        )
                      ),
                      showDropdown &&
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                          'div',
                          _extends({ className: 'dropdown-content' }, this.getAriaAttributes()),
                          this.state.allNodesHidden
                            ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                'span',
                                { className: 'no-matches' },
                                texts.noMatches || 'No matches found'
                              )
                            : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                                _tree__WEBPACK_IMPORTED_MODULE_6__['default'],
                                _extends(
                                  {
                                    data: this.state.tree,
                                    keepTreeOnSearch: this.props.keepTreeOnSearch,
                                    keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                    searchModeOn: this.state.searchModeOn,
                                    onAction: this.onAction,
                                    onCheckboxChange: this.onCheckboxChange,
                                    onNodeToggle: this.onNodeToggle,
                                    mode: mode,
                                    showPartiallySelected: this.props.showPartiallySelected,
                                  },
                                  commonProps
                                )
                              )
                        )
                    )
                  )
                },
              },
            ])

            return DropdownTreeSelect
          })(react__WEBPACK_IMPORTED_MODULE_2__['Component'])

          DropdownTreeSelect.propTypes = {
            data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            ]).isRequired,
            clearSearchOnChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            keepTreeOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            keepChildrenOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            keepOpenOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              noMatches: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              labelRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            }),
            showDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'initial', 'always']),
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onNodeToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'multiSelect',
              'simpleSelect',
              'radioSelect',
              'hierarchical',
            ]),
            showPartiallySelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            searchPredicate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
          }
          DropdownTreeSelect.defaultProps = {
            onFocus: function onFocus() {},
            onBlur: function onBlur() {},
            onChange: function onChange() {},
            texts: {},
            showDropdown: 'default',
          }

          /* harmony default export */ __webpack_exports__['default'] = DropdownTreeSelect

          /***/
        },

      /***/ './src/input/index.css':
        /*!*****************************!*\
  !*** ./src/input/index.css ***!
  \*****************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ './src/input/index.js':
        /*!****************************!*\
  !*** ./src/input/index.js ***!
  \****************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../tag */ './src/tag/index.js'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./index.css */ './src/input/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_4__
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )
          /* harmony import */ var _a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ../a11y */ './src/a11y/index.js'
          )
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_4___default.a
          )

          var getTags = function getTags() {
            var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
            var onDelete = arguments[1]
            var readOnly = arguments[2]
            var disabled = arguments[3]
            var labelRemove = arguments[4]
            return tags.map(function(tag) {
              var _id = tag._id,
                label = tag.label,
                tagClassName = tag.tagClassName,
                dataset = tag.dataset

              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                _extends(
                  { className: cx('tag-item', tagClassName), key: 'tag-item-' + _id },
                  Object(_utils__WEBPACK_IMPORTED_MODULE_5__['getDataset'])(dataset)
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _tag__WEBPACK_IMPORTED_MODULE_3__['default'],
                  {
                    label: label,
                    id: _id,
                    onDelete: onDelete,
                    readOnly: readOnly,
                    disabled: disabled,
                    labelRemove: labelRemove,
                  }
                )
              )
            })
          }

          var Input = (function(_PureComponent) {
            _inherits(Input, _PureComponent)

            function Input(props) {
              _classCallCheck(this, Input)

              var _this = _possibleConstructorReturn(
                this,
                (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props)
              )

              _this.handleInputChange = function(e) {
                e.persist()
                _this.delayedCallback(e)
              }

              _this.delayedCallback = Object(_utils__WEBPACK_IMPORTED_MODULE_5__['debounce'])(function(e) {
                return _this.props.onInputChange(e.target.value)
              }, 300)
              return _this
            }

            _createClass(Input, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    tags = _props.tags,
                    onTagRemove = _props.onTagRemove,
                    inputRef = _props.inputRef,
                    _props$texts = _props.texts,
                    texts = _props$texts === undefined ? {} : _props$texts,
                    onFocus = _props.onFocus,
                    onBlur = _props.onBlur,
                    disabled = _props.disabled,
                    readOnly = _props.readOnly,
                    onKeyDown = _props.onKeyDown,
                    activeDescendant = _props.activeDescendant

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: cx('tag-list') },
                    getTags(tags, onTagRemove, readOnly, disabled, texts.labelRemove),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'li',
                      { className: cx('tag-item') },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'input',
                        _extends(
                          {
                            type: 'text',
                            disabled: disabled,
                            ref: inputRef,
                            className: cx('search'),
                            placeholder: texts.placeholder || 'Choose...',
                            onKeyDown: onKeyDown,
                            onChange: this.handleInputChange,
                            onFocus: onFocus,
                            onBlur: onBlur,
                            readOnly: readOnly,
                            'aria-activedescendant': activeDescendant,
                            'aria-autocomplete': onKeyDown ? 'list' : undefined,
                          },
                          Object(_a11y__WEBPACK_IMPORTED_MODULE_6__['getAriaLabel'])(texts.label)
                        )
                      )
                    )
                  )
                },
              },
            ])

            return Input
          })(react__WEBPACK_IMPORTED_MODULE_0__['PureComponent'])

          Input.propTypes = {
            tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onTagRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            inputRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            activeDescendant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }

          /* harmony default export */ __webpack_exports__['default'] = Input

          /***/
        },

      /***/ './src/radio/index.js':
        /*!****************************!*\
  !*** ./src/radio/index.js ***!
  \****************************/
        /*! exports provided: refUpdater, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'refUpdater', function() {
            return refUpdater
          })
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _objectWithoutProperties(obj, keys) {
            var target = {}
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
              target[i] = obj[i]
            }
            return target
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var refUpdater = function refUpdater(_ref) {
            var checked = _ref.checked
            return function(input) {
              if (input) {
                input.checked = checked
              }
            }
          }

          var RadioButton = (function(_PureComponent) {
            _inherits(RadioButton, _PureComponent)

            function RadioButton() {
              _classCallCheck(this, RadioButton)

              return _possibleConstructorReturn(
                this,
                (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments)
              )
            }

            _createClass(RadioButton, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    name = _props.name,
                    checked = _props.checked,
                    onChange = _props.onChange,
                    disabled = _props.disabled,
                    readOnly = _props.readOnly,
                    rest = _objectWithoutProperties(_props, ['name', 'checked', 'onChange', 'disabled', 'readOnly'])

                  var isDisabled = disabled || readOnly

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'input',
                    _extends(
                      {
                        type: 'radio',
                        name: name,
                        ref: refUpdater({ checked: checked }),
                        onChange: onChange,
                        disabled: isDisabled,
                      },
                      rest
                    )
                  )
                },
              },
            ])

            return RadioButton
          })(react__WEBPACK_IMPORTED_MODULE_0__['PureComponent'])

          RadioButton.propTypes = {
            name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          }

          /* harmony default export */ __webpack_exports__['default'] = RadioButton

          /***/
        },

      /***/ './src/tag/index.css':
        /*!***************************!*\
  !*** ./src/tag/index.css ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ './src/tag/index.js':
        /*!**************************!*\
  !*** ./src/tag/index.js ***!
  \**************************/
        /*! exports provided: getTagId, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getTagId', function() {
            return getTagId
          })
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./index.css */ './src/tag/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_3__
          )
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_3___default.a
          )

          var getTagId = function getTagId(id) {
            return id + '_tag'
          }

          var Tag = (function(_PureComponent) {
            _inherits(Tag, _PureComponent)

            function Tag() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, Tag)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = Tag.__proto__ || Object.getPrototypeOf(Tag)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.handleClick = function(e) {
                  var _this$props = _this.props,
                    id = _this$props.id,
                    onDelete = _this$props.onDelete

                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation()
                  onDelete(id, (e.key || e.keyCode) !== undefined)
                }),
                (_this.onKeyDown = function(e) {
                  if (e.key === 'Backspace') {
                    _this.handleClick(e)
                    e.preventDefault()
                  }
                }),
                (_this.onKeyUp = function(e) {
                  if (e.keyCode === 32 || ['Delete', 'Enter'].indexOf(e.key) > -1) {
                    _this.handleClick(e)
                    e.preventDefault()
                  }
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(Tag, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    id = _props.id,
                    label = _props.label,
                    _props$labelRemove = _props.labelRemove,
                    labelRemove = _props$labelRemove === undefined ? 'Remove' : _props$labelRemove,
                    readOnly = _props.readOnly,
                    disabled = _props.disabled

                  var tagId = getTagId(id)
                  var buttonId = id + '_button'
                  var className = cx('tag-remove', { readOnly: readOnly }, { disabled: disabled })
                  var isDisabled = readOnly || disabled

                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'span',
                    { className: cx('tag'), id: tagId, 'aria-label': label },
                    label,
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      'button',
                      {
                        id: buttonId,
                        onClick: !isDisabled ? this.handleClick : undefined,
                        onKeyDown: !isDisabled ? this.onKeyDown : undefined,
                        onKeyUp: !isDisabled ? this.onKeyUp : undefined,
                        className: className,
                        type: 'button',
                        'aria-label': labelRemove,
                        'aria-labelledby': buttonId + ' ' + tagId,
                        'aria-disabled': isDisabled,
                      },
                      'x'
                    )
                  )
                },
              },
            ])

            return Tag
          })(react__WEBPACK_IMPORTED_MODULE_2__['PureComponent'])

          Tag.propTypes = {
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            labelRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }

          /* harmony default export */ __webpack_exports__['default'] = Tag

          /***/
        },

      /***/ './src/tree-manager/flatten-tree.js':
        /*!******************************************!*\
  !*** ./src/tree-manager/flatten-tree.js ***!
  \******************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var _getPartialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./getPartialState */ './src/tree-manager/getPartialState.js'
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )

          /**
 * Converts a nested node into an associative array with pointers to child and parent nodes
 * Given:
```
const tree = [
  {
    label: 'item1',
    value: 'value1',
    children: [
      {
        label: 'item1-1',
        value: 'value1-1',
        children: [
          {
            label: 'item1-1-1',
            value: 'value1-1-1'
          },
          {
            label: 'item1-1-2',
            value: 'value1-1-2'
          }
        ]
      },
      {
        label: 'item1-2',
        value: 'value1-2'
      }
    ]
  },
  {
    label: 'item2',
    value: 'value2',
    children: [
      {
        label: 'item2-1',
        value: 'value2-1',
        children: [
          {
            label: 'item2-1-1',
            value: 'value2-1-1'
          },
          {
            label: 'item2-1-2',
            value: 'value2-1-2'
          },
          {
            label: 'item2-1-3',
            value: 'item2-1-3',
            children: [
              {
                label: 'item2-1-3-1',
                value: 'value2-1-3-1'
              }
            ]
          }
        ]
      },
      {
        label: 'item2-2',
        value: 'value2-2'
      }
    ]
  }
]
```
 * results in
```
{
  "0": {
    _id: "0",
    _parent: null,
    _children: [
      "0-0",
      "0-1"
    ],
    label: "item1",
    value: "value1"
  },
  "1": {
    _id: "1",
    _parent: null,
    _children: [
      "1-0",
      "1-1"
    ],
    label: "item2",
    value: "value2"
  },
  "0-0": {
    _id: "0-0",
    _parent: "0",
    _children: [
      "0-0-0",
      "0-0-1"
    ],
    label: "item1-1",
    value: "value1-1"
  },
  "0-1": {
    _id: "0-1",
    _parent: "0",
    label: "item1-2",
    value: "value1-2"
  },
  "0-0-0": {
    _id: "0-0-0",
    _parent: "0-0",
    label: "item1-1-1",
    value: "value1-1-1"
  },
  "0-0-1": {
    _id: "0-0-1",
    _parent: "0-0",
    label: "item1-1-2",
    value: "value1-1-2"
  },
  "1-0": {
    _id: "1-0",
    _parent: "1",
    _children: [
      "1-0-0",
      "1-0-1",
      "1-0-2"
    ],
    label: "item2-1",
    value: "value2-1"
  },
  "1-1": {
    _id: "1-1",
    _parent: "1",
    label: "item2-2",
    value: "value2-2"
  },
  "1-0-0": {
    _id: "1-0-0",
    _parent: "1-0",
    label: "item2-1-1",
    value: "value2-1-1"
  },
  "1-0-1": {
    _id: "1-0-1",
    _parent: "1-0",
    label: "item2-1-2",
    value: "value2-1-2"
  },
  "1-0-2": {
    _id: "1-0-2",
    _parent: "1-0",
    _children: [
      "1-0-2-0"
    ],
    label: "item2-1-3",
    value: "value2-1-3"
  },
  "1-0-2-0": {
    _id: "1-0-2-0",
    _parent: "1-0-2",
    label: "item2-1-3-1",
    value: "value2-1-3-1"
  }
}
```
 * @param  {[type]} tree              The incoming tree object
 * @param  {[bool]} simple            Whether its in Single select mode (simple dropdown)
 * @param  {[bool]} radio             Whether its in Radio select mode (radio dropdown)
 * @param  {[bool]} showPartialState  Whether to show partially checked state
 * @param  {[string]} rootPrefixId    The prefix to use when setting root node ids
 * @return {object}                   The flattened list
 */
          function flattenTree(_ref) {
            var tree = _ref.tree,
              simple = _ref.simple,
              radio = _ref.radio,
              showPartialState = _ref.showPartialState,
              hierarchical = _ref.hierarchical,
              rootPrefixId = _ref.rootPrefixId

            var forest = Array.isArray(tree) ? tree : [tree]

            // eslint-disable-next-line no-use-before-define
            return walkNodes({
              nodes: forest,
              simple: simple,
              radio: radio,
              showPartialState: showPartialState,
              hierarchical: hierarchical,
              rootPrefixId: rootPrefixId,
            })
          }

          /**
           * If the node didn't specify anything on its own
           * figure out the initial state based on parent
           * @param {object} node           [current node]
           * @param {object} parent         [node's immediate parent]
           * @param {bool}   inheritChecked [if checked should be inherited]
           */
          function setInitialStateProps(node) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
            var inheritChecked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true

            var stateProps = inheritChecked ? ['checked', 'disabled'] : ['disabled']
            for (var index = 0; index < stateProps.length; index++) {
              var prop = stateProps[index]

              // if and only if, node doesn't explicitly define a prop, grab it from parent
              if (node[prop] === undefined && parent[prop] !== undefined) {
                node[prop] = parent[prop]
              }
            }
          }

          function walkNodes(_ref2) {
            var nodes = _ref2.nodes,
              parent = _ref2.parent,
              _ref2$depth = _ref2.depth,
              depth = _ref2$depth === undefined ? 0 : _ref2$depth,
              simple = _ref2.simple,
              radio = _ref2.radio,
              showPartialState = _ref2.showPartialState,
              hierarchical = _ref2.hierarchical,
              rootPrefixId = _ref2.rootPrefixId,
              _ref2$_rv = _ref2._rv,
              _rv =
                _ref2$_rv === undefined ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : _ref2$_rv

            var single = simple || radio
            nodes.forEach(function(node, i) {
              node._depth = depth

              if (parent) {
                node._id = node.id || parent._id + '-' + i
                node._parent = parent._id
                parent._children.push(node._id)
              } else {
                node._id = node.id || '' + (rootPrefixId ? rootPrefixId + '-' + i : i)
              }

              if (single && node.checked) {
                if (_rv.singleSelectedNode) {
                  node.checked = false
                } else {
                  _rv.singleSelectedNode = node
                }
              }

              if (single && node.isDefaultValue && _rv.singleSelectedNode && !_rv.singleSelectedNode.isDefaultValue) {
                // Default value has precedence, uncheck previous value
                _rv.singleSelectedNode.checked = false
                _rv.singleSelectedNode = null
              }

              if (node.isDefaultValue && (!single || _rv.defaultValues.length === 0)) {
                _rv.defaultValues.push(node._id)
                node.checked = true
                if (single) {
                  _rv.singleSelectedNode = node
                }
              }

              if (!hierarchical || radio) setInitialStateProps(node, parent, !radio)

              _rv.list.set(node._id, node)
              if (!simple && node.children) {
                node._children = []
                walkNodes({
                  nodes: node.children,
                  parent: node,
                  depth: depth + 1,
                  radio: radio,
                  showPartialState: showPartialState,
                  hierarchical: hierarchical,
                  _rv: _rv,
                })

                if (showPartialState && !node.checked) {
                  node.partial = Object(_getPartialState__WEBPACK_IMPORTED_MODULE_0__['default'])(node)

                  // re-check if all children are checked. if so, check thyself
                  if (
                    !single &&
                    !Object(_utils__WEBPACK_IMPORTED_MODULE_1__['isEmpty'])(node.children) &&
                    node.children.every(function(c) {
                      return c.checked
                    })
                  ) {
                    node.checked = true
                  }
                }

                node.children = undefined
              }
            })

            return _rv
          }

          /* harmony default export */ __webpack_exports__['default'] = flattenTree

          /***/
        },

      /***/ './src/tree-manager/getPartialState.js':
        /*!*********************************************!*\
  !*** ./src/tree-manager/getPartialState.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var array_partial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! array.partial */ './node_modules/array.partial/index.js'
          )
          /* harmony import */ var array_partial__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            array_partial__WEBPACK_IMPORTED_MODULE_0__
          )

          var identity = function identity(c) {
            return c
          }

          /* harmony default export */ __webpack_exports__['default'] = function(node) {
            var childProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children'
            var childSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity
            return (
              array_partial__WEBPACK_IMPORTED_MODULE_0___default()(node[childProp], function(c) {
                return childSelector(c).checked
              }) ||
              node[childProp].some(function(c) {
                return childSelector(c).partial
              })
            )
          }

          /***/
        },

      /***/ './src/tree-manager/index.js':
        /*!***********************************!*\
  !*** ./src/tree-manager/index.js ***!
  \***********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var _getPartialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./getPartialState */ './src/tree-manager/getPartialState.js'
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )
          /* harmony import */ var _flatten_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./flatten-tree */ './src/tree-manager/flatten-tree.js'
          )
          /* harmony import */ var _nodeVisitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./nodeVisitor */ './src/tree-manager/nodeVisitor.js'
          )
          /* harmony import */ var _keyboardNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./keyboardNavigation */ './src/tree-manager/keyboardNavigation.js'
          )
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          var TreeManager = (function() {
            function TreeManager(_ref) {
              var data = _ref.data,
                mode = _ref.mode,
                showPartiallySelected = _ref.showPartiallySelected,
                rootPrefixId = _ref.rootPrefixId,
                searchPredicate = _ref.searchPredicate

              _classCallCheck(this, TreeManager)

              this._src = data
              this.simpleSelect = mode === 'simpleSelect'
              this.radioSelect = mode === 'radioSelect'
              this.hierarchical = mode === 'hierarchical'
              this.searchPredicate = searchPredicate

              var _flattenTree = Object(_flatten_tree__WEBPACK_IMPORTED_MODULE_2__['default'])({
                  tree: JSON.parse(JSON.stringify(data)),
                  simple: this.simpleSelect,
                  radio: this.radioSelect,
                  showPartialState: showPartiallySelected,
                  hierarchical: this.hierarchical,
                  rootPrefixId: rootPrefixId,
                }),
                list = _flattenTree.list,
                defaultValues = _flattenTree.defaultValues,
                singleSelectedNode = _flattenTree.singleSelectedNode

              this.tree = list
              this.defaultValues = defaultValues
              this.showPartialState = !this.hierarchical && showPartiallySelected
              this.searchMaps = new Map()

              if ((this.simpleSelect || this.radioSelect) && singleSelectedNode) {
                // Remembers initial check on single select dropdowns
                this.currentChecked = singleSelectedNode._id
              }
            }

            _createClass(TreeManager, [
              {
                key: 'getNodeById',
                value: function getNodeById(id) {
                  return this.tree.get(id)
                },
              },
              {
                key: 'getMatches',
                value: function getMatches(searchTerm) {
                  var _this = this

                  if (this.searchMaps.has(searchTerm)) {
                    return this.searchMaps.get(searchTerm)
                  }

                  var proximity = -1
                  var closestMatch = searchTerm
                  this.searchMaps.forEach(function(m, key) {
                    if (searchTerm.startsWith(key) && key.length > proximity) {
                      proximity = key.length
                      closestMatch = key
                    }
                  })

                  var matches = []

                  var addOnMatch = this._getAddOnMatch(matches, searchTerm)

                  if (closestMatch !== searchTerm) {
                    var superMatches = this.searchMaps.get(closestMatch)
                    superMatches.forEach(function(key) {
                      return addOnMatch(_this.getNodeById(key))
                    })
                  } else {
                    this.tree.forEach(addOnMatch)
                  }

                  this.searchMaps.set(searchTerm, matches)
                  return matches
                },
              },
              {
                key: 'addParentsToTree',
                value: function addParentsToTree(id, tree) {
                  if (id !== undefined) {
                    var node = this.getNodeById(id)
                    this.addParentsToTree(node._parent, tree)
                    node.hide = node._isMatch ? node.hide : true
                    node.matchInChildren = true
                    tree.set(id, node)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function addChildrenToTree(ids, tree, matches) {
                  var _this2 = this

                  if (ids !== undefined) {
                    ids.forEach(function(id) {
                      if (matches && matches.includes(id)) {
                        // if a child is found by search anyways, don't display it as a child here
                        return
                      }
                      var node = _this2.getNodeById(id)
                      node.matchInParent = true
                      tree.set(id, node)
                      _this2.addChildrenToTree(node._children, tree)
                    })
                  }
                },
              },
              {
                key: 'filterTree',
                value: function filterTree(searchTerm, keepTreeOnSearch, keepChildrenOnSearch) {
                  var _this3 = this

                  var matches = this.getMatches(searchTerm.toLowerCase())

                  var matchTree = new Map()

                  matches.forEach(function(m) {
                    var node = _this3.getNodeById(m)
                    node.hide = false

                    // add a marker to tell `addParentsToTree` to not hide this node; even if it's an ancestor node
                    node._isMatch = true

                    if (keepTreeOnSearch) {
                      // add parent nodes first or else the tree won't be rendered in correct hierarchy
                      _this3.addParentsToTree(node._parent, matchTree)
                    }
                    matchTree.set(m, node)
                    if (keepTreeOnSearch && keepChildrenOnSearch) {
                      // add children nodes after a found match
                      _this3.addChildrenToTree(node._children, matchTree, matches)
                    }
                  })

                  var allNodesHidden = matches.length === 0

                  // we store a local reference so that components can use it in subsequent renders
                  // this is the least intrusive way of fixing #190
                  this.matchTree = matchTree

                  return { allNodesHidden: allNodesHidden, tree: matchTree }
                },
              },
              {
                key: 'restoreNodes',
                value: function restoreNodes() {
                  this.tree.forEach(function(node) {
                    node.hide = false
                  })

                  return this.tree
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function restoreDefaultValues() {
                  var _this4 = this

                  this.defaultValues.forEach(function(id) {
                    _this4.setNodeCheckedState(id, true)
                  })

                  return this.tree
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function togglePreviousChecked(id, checked) {
                  var prevChecked = this.currentChecked

                  // if id is same as previously selected node, then do nothing (since it's state is already set correctly by setNodeCheckedState)
                  // but if they ar not same, then toggle the previous one
                  if (prevChecked && prevChecked !== id) this.getNodeById(prevChecked).checked = false

                  this.currentChecked = checked ? id : null
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function setNodeCheckedState(id, checked) {
                  var node = this.getNodeById(id)
                  node.checked = checked

                  // TODO: this can probably be combined with the same check in the else block. investigate in a separate release.
                  if (this.showPartialState) {
                    node.partial = false
                  }

                  if (this.simpleSelect) {
                    this.togglePreviousChecked(id, checked)
                  } else if (this.radioSelect) {
                    this.togglePreviousChecked(id, checked)
                    if (this.showPartialState) {
                      this.partialCheckParents(node)
                    }
                    if (!checked) {
                      this.unCheckParents(node)
                    }
                  } else {
                    if (!this.hierarchical) this.toggleChildren(id, checked)

                    if (this.showPartialState) {
                      this.partialCheckParents(node)
                    }

                    if (!this.hierarchical && !checked) {
                      this.unCheckParents(node)
                    }
                  }
                },

                /**
                 * Walks up the tree unchecking parent nodes
                 * @param  {[type]} node [description]
                 * @return {[type]}      [description]
                 */
              },
              {
                key: 'unCheckParents',
                value: function unCheckParents(node) {
                  var parent = node._parent
                  while (parent) {
                    var next = this.getNodeById(parent)
                    next.checked = false
                    next.partial = Object(_getPartialState__WEBPACK_IMPORTED_MODULE_0__['default'])(
                      next,
                      '_children',
                      this.getNodeById.bind(this)
                    )
                    parent = next._parent
                  }
                },

                /**
                 * Walks up the tree setting partial state on parent nodes
                 * @param  {[type]} node [description]
                 * @return {[type]}      [description]
                 */
              },
              {
                key: 'partialCheckParents',
                value: function partialCheckParents(node) {
                  var _this5 = this

                  var parent = node._parent
                  while (parent) {
                    var next = this.getNodeById(parent)
                    next.checked = next._children.every(function(c) {
                      return _this5.getNodeById(c).checked
                    })
                    next.partial = Object(_getPartialState__WEBPACK_IMPORTED_MODULE_0__['default'])(
                      next,
                      '_children',
                      this.getNodeById.bind(this)
                    )
                    parent = next._parent
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function toggleChildren(id, state) {
                  var _this6 = this

                  var node = this.getNodeById(id)
                  node.checked = state

                  if (this.showPartialState) {
                    node.partial = false
                  }

                  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__['isEmpty'])(node._children)) {
                    node._children.forEach(function(id) {
                      return _this6.toggleChildren(id, state)
                    })
                  }
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function toggleNodeExpandState(id) {
                  var node = this.getNodeById(id)
                  node.expanded = !node.expanded
                  if (!node.expanded) this.collapseChildren(node)
                  return this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function collapseChildren(node) {
                  var _this7 = this

                  node.expanded = false
                  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__['isEmpty'])(node._children)) {
                    node._children.forEach(function(c) {
                      return _this7.collapseChildren(_this7.getNodeById(c))
                    })
                  }
                },
              },
              {
                key: 'getTreeAndTags',
                value: function getTreeAndTags() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function handleNavigationKey(
                  currentFocus,
                  tree,
                  key,
                  readOnly,
                  markSubTreeOnNonExpanded,
                  onToggleChecked,
                  onToggleExpanded
                ) {
                  var _this8 = this

                  var prevFocus = currentFocus && this.getNodeById(currentFocus)
                  var getNodeById = function getNodeById(id) {
                    return _this8.getNodeById(id)
                  }
                  var action = _keyboardNavigation__WEBPACK_IMPORTED_MODULE_4__['default'].getAction(prevFocus, key)

                  if (_keyboardNavigation__WEBPACK_IMPORTED_MODULE_4__['FocusActionNames'].has(action)) {
                    var newFocus = _keyboardNavigation__WEBPACK_IMPORTED_MODULE_4__['default'].handleFocusNavigationkey(
                      tree,
                      action,
                      prevFocus,
                      getNodeById,
                      markSubTreeOnNonExpanded
                    )
                    return newFocus
                  }

                  if (!prevFocus || !tree.has(prevFocus._id)) {
                    // No current focus or not visible
                    return currentFocus
                  }

                  return _keyboardNavigation__WEBPACK_IMPORTED_MODULE_4__['default'].handleToggleNavigationkey(
                    action,
                    prevFocus,
                    readOnly,
                    onToggleChecked,
                    onToggleExpanded
                  )
                },
              },
              {
                key: '_getAddOnMatch',
                value: function _getAddOnMatch(matches, searchTerm) {
                  var isMatch = function isMatch(node, term) {
                    return node.label.toLowerCase().indexOf(term) >= 0
                  }
                  if (typeof this.searchPredicate === 'function') {
                    isMatch = this.searchPredicate
                  }

                  return function(node) {
                    if (isMatch(node, searchTerm)) {
                      matches.push(node._id)
                    }
                  }
                },
              },
              {
                key: 'tags',
                get: function get() {
                  var _this9 = this

                  if (this.radioSelect || this.simpleSelect) {
                    if (this.currentChecked) {
                      return [this.getNodeById(this.currentChecked)]
                    }
                    return []
                  }

                  return _nodeVisitor__WEBPACK_IMPORTED_MODULE_3__['default'].getNodesMatching(this.tree, function(
                    node,
                    key,
                    visited
                  ) {
                    if (node.checked && !_this9.hierarchical) {
                      // Parent node, so no need to walk children
                      _nodeVisitor__WEBPACK_IMPORTED_MODULE_3__['default'].markSubTreeVisited(node, visited, function(
                        id
                      ) {
                        return _this9.getNodeById(id)
                      })
                    }
                    return node.checked
                  })
                },
              },
            ])

            return TreeManager
          })()

          /* harmony default export */ __webpack_exports__['default'] = TreeManager

          /***/
        },

      /***/ './src/tree-manager/keyboardNavigation.js':
        /*!************************************************!*\
  !*** ./src/tree-manager/keyboardNavigation.js ***!
  \************************************************/
        /*! exports provided: NavActions, FocusActionNames, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'NavActions', function() {
            return NavActions
          })
          /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FocusActionNames', function() {
            return FocusActionNames
          })
          /* harmony import */ var _nodeVisitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./nodeVisitor */ './src/tree-manager/nodeVisitor.js'
          )
          /* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../tag */ './src/tag/index.js'
          )
          var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
              var _arr = []
              var _n = true
              var _d = false
              var _e = undefined
              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value)
                  if (i && _arr.length === i) break
                }
              } catch (err) {
                _d = true
                _e = err
              } finally {
                try {
                  if (!_n && _i['return']) _i['return']()
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
            return function(arr, i) {
              if (Array.isArray(arr)) {
                return arr
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i)
              } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
              }
            }
          })()

          var Keys = {
            Up: 'ArrowUp',
            Down: 'ArrowDown',
            Left: 'ArrowLeft',
            Right: 'ArrowRight',
            Enter: 'Enter',
            Home: 'Home',
            PageUp: 'PageUp',
            End: 'End',
            PageDown: 'PageDown',
          }

          var NavActions = {
            None: 'None',
            FocusPrevious: 'FocusPrevious',
            FocusNext: 'FocusNext',
            FocusParent: 'FocusParent',
            FocusFirst: 'FocusFirst',
            FocusLast: 'FocusLast',
            ToggleExpanded: 'ToggleExpanded',
            ToggleChecked: 'ToggleChecked',
          }

          var FocusActionNames = new Set([
            NavActions.FocusPrevious,
            NavActions.FocusNext,
            NavActions.FocusParent,
            NavActions.FocusFirst,
            NavActions.FocusLast,
          ])

          var validTriggerOpenKeys = [Keys.Up, Keys.Down, Keys.Home, Keys.PageUp, Keys.End, Keys.PageDown]
          var validKeys = validTriggerOpenKeys.concat([Keys.Left, Keys.Right, Keys.Enter])

          var isValidKey = function isValidKey(key, isOpen) {
            var keysToCheck = isOpen ? validKeys : validTriggerOpenKeys
            return keysToCheck.indexOf(key) > -1
          }

          var isMatchingEvent = function isMatchingEvent(key, keys, currentFocus, nonFocusKey) {
            return keys.indexOf(key) > -1 || (!currentFocus && key === nonFocusKey)
          }

          var isFocusFirstEvent = function isFocusFirstEvent(key, currentFocus) {
            return isMatchingEvent(key, [Keys.Home, Keys.PageUp], currentFocus, Keys.Down)
          }

          var isFocusLastEvent = function isFocusLastEvent(key, currentFocus) {
            return isMatchingEvent(key, [Keys.End, Keys.PageDown], currentFocus, Keys.Up)
          }

          var isReverseTraverseAction = function isReverseTraverseAction(action) {
            return isMatchingEvent(action, [NavActions.FocusPrevious, NavActions.FocusLast], true)
          }

          var isEdgeTraverseAction = function isEdgeTraverseAction(action) {
            return isMatchingEvent(action, [NavActions.FocusFirst, NavActions.FocusLast], true)
          }

          var getLeftNavAction = function getLeftNavAction(currentFocus, key) {
            if (!currentFocus || key !== Keys.Left) return NavActions.None

            if (currentFocus.expanded === true) {
              return NavActions.ToggleExpanded
            }
            if (currentFocus._parent) {
              return NavActions.FocusParent
            }

            return NavActions.None
          }

          var getRightNavAction = function getRightNavAction(currentFocus, key) {
            if (!currentFocus || !currentFocus._children || key !== Keys.Right) {
              return NavActions.None
            }

            return currentFocus.expanded !== true ? NavActions.ToggleExpanded : NavActions.FocusNext
          }

          var getRelativeAction = function getRelativeAction(currentFocus, key) {
            if (!currentFocus) return NavActions.None
            switch (key) {
              case Keys.Up:
                return NavActions.FocusPrevious
              case Keys.Down:
                return NavActions.FocusNext
              case Keys.Enter:
                return NavActions.ToggleChecked
              default:
                return NavActions.None
            }
          }

          var getAction = function getAction(currentFocus, key) {
            var action = void 0
            if (key === Keys.Left) {
              action = getLeftNavAction(currentFocus, key)
            } else if (key === Keys.Right) {
              action = getRightNavAction(currentFocus, key)
            } else if (isFocusFirstEvent(key, currentFocus)) {
              action = NavActions.FocusFirst
            } else if (isFocusLastEvent(key, currentFocus)) {
              action = NavActions.FocusLast
            } else {
              action = getRelativeAction(currentFocus, key)
            }
            return action
          }

          var getParentFocus = function getParentFocus(prevFocus, getNodeById) {
            return prevFocus && prevFocus._parent ? getNodeById(prevFocus._parent) : prevFocus
          }

          var getRelativeNeighborsFocus = function getRelativeNeighborsFocus(sortedNodes, prevFocus) {
            var nextIndex = sortedNodes.indexOf(prevFocus) + 1
            if (nextIndex % sortedNodes.length === 0) {
              return sortedNodes[0]
            }
            return sortedNodes[nextIndex]
          }

          var getRelativeFocus = function getRelativeFocus(sortedNodes, prevFocus, action) {
            if (!sortedNodes || sortedNodes.length === 0) {
              return prevFocus
            }

            var focus = prevFocus
            if (isEdgeTraverseAction(action)) {
              var _sortedNodes = _slicedToArray(sortedNodes, 1)

              focus = _sortedNodes[0]
            } else if ([NavActions.FocusPrevious, NavActions.FocusNext].indexOf(action) > -1) {
              focus = getRelativeNeighborsFocus(sortedNodes, prevFocus)
            }
            return focus
          }

          var getNextFocus = function getNextFocus(tree, prevFocus, action, getNodeById, markSubTreeOnNonExpanded) {
            if (action === NavActions.FocusParent) {
              return getParentFocus(prevFocus, getNodeById)
            }
            if (!FocusActionNames.has(action)) {
              return prevFocus
            }

            var nodes = _nodeVisitor__WEBPACK_IMPORTED_MODULE_0__['default'].getVisibleNodes(
              tree,
              getNodeById,
              markSubTreeOnNonExpanded
            )
            if (isReverseTraverseAction(action)) {
              nodes = nodes.reverse()
            }

            return getRelativeFocus(nodes, prevFocus, action)
          }

          var getNextFocusAfterTagDelete = function getNextFocusAfterTagDelete(deletedId, prevTags, tags, fallback) {
            // Sets new focus to next tag or returns fallback
            var index =
              prevTags &&
              prevTags.findIndex(function(t) {
                return t._id === deletedId
              })
            if (index < 0 || !tags.length) return fallback

            index = tags.length > index ? index : tags.length - 1
            var newFocusId = tags[index]._id
            var focusNode = document.getElementById(Object(_tag__WEBPACK_IMPORTED_MODULE_1__['getTagId'])(newFocusId))
            if (focusNode) {
              return focusNode.firstElementChild || fallback
            }
            return fallback
          }

          var handleFocusNavigationkey = function handleFocusNavigationkey(
            tree,
            action,
            prevFocus,
            getNodeById,
            markSubTreeOnNonExpanded
          ) {
            var newFocus = keyboardNavigation.getNextFocus(
              tree,
              prevFocus,
              action,
              getNodeById,
              markSubTreeOnNonExpanded
            )
            if (prevFocus && newFocus && prevFocus._id !== newFocus._id) {
              prevFocus._focused = false
            }
            if (newFocus) {
              newFocus._focused = true
              return newFocus._id
            }
            return prevFocus && prevFocus._id
          }

          var handleToggleNavigationkey = function handleToggleNavigationkey(
            action,
            prevFocus,
            readOnly,
            onToggleChecked,
            onToggleExpanded
          ) {
            if (action === NavActions.ToggleChecked && !readOnly && !(prevFocus.readOnly || prevFocus.disabled)) {
              onToggleChecked(prevFocus._id, prevFocus.checked !== true)
            } else if (action === NavActions.ToggleExpanded) {
              onToggleExpanded(prevFocus._id)
            }
            return prevFocus && prevFocus._id
          }

          var keyboardNavigation = {
            isValidKey: isValidKey,
            getAction: getAction,
            getNextFocus: getNextFocus,
            getNextFocusAfterTagDelete: getNextFocusAfterTagDelete,
            handleFocusNavigationkey: handleFocusNavigationkey,
            handleToggleNavigationkey: handleToggleNavigationkey,
          }

          /* harmony default export */ __webpack_exports__['default'] = keyboardNavigation

          /***/
        },

      /***/ './src/tree-manager/nodeVisitor.js':
        /*!*****************************************!*\
  !*** ./src/tree-manager/nodeVisitor.js ***!
  \*****************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )

          var markSubTreeVisited = function markSubTreeVisited(node, visited, getItemById) {
            visited[node._id] = true
            if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__['isEmpty'])(node._children)) {
              node._children.forEach(function(c) {
                return markSubTreeVisited(getItemById(c), visited, getItemById)
              })
            }
          }

          var getNodesMatching = function getNodesMatching(tree, nodePredicate) {
            var nodes = []
            var visited = {}

            tree.forEach(function(node, key) {
              if (visited[key]) return

              if (nodePredicate(node, key, visited)) {
                nodes.push(node)
              }

              visited[key] = true
            })

            return nodes
          }

          var getVisibleNodes = function getVisibleNodes(tree, getItemById, markSubTreeOnNonExpanded) {
            return getNodesMatching(tree, function(node, key, visited) {
              if (markSubTreeOnNonExpanded && node._children && node._children.length && node.expanded !== true) {
                markSubTreeVisited(node, visited, getItemById)
              }
              return !node.hide
            })
          }

          var nodeVisitor = {
            getNodesMatching: getNodesMatching,
            getVisibleNodes: getVisibleNodes,
            markSubTreeVisited: markSubTreeVisited,
          }
          /* harmony default export */ __webpack_exports__['default'] = nodeVisitor

          /***/
        },

      /***/ './src/tree-node/action.js':
        /*!*********************************!*\
  !*** ./src/tree-node/action.js ***!
  \*********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var Action = (function(_PureComponent) {
            _inherits(Action, _PureComponent)

            function Action() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, Action)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = Action.__proto__ || Object.getPrototypeOf(Action)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.handleClick = function() {
                  var _this$props = _this.props,
                    onAction = _this$props.onAction,
                    actionData = _this$props.actionData

                  if (onAction) {
                    onAction(actionData.nodeId, actionData.action)
                  }
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(Action, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    title = _props.title,
                    className = _props.className,
                    text = _props.text,
                    readOnly = _props.readOnly

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'i',
                    { title: title, className: className, onClick: !readOnly ? this.handleClick : undefined },
                    text
                  )
                },
              },
            ])

            return Action
          })(react__WEBPACK_IMPORTED_MODULE_0__['PureComponent'])

          Action.propTypes = {
            title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            actionData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            onAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
          }
          Action.defaultProps = {
            onAction: function onAction() {},
          }

          /* harmony default export */ __webpack_exports__['default'] = Action

          /***/
        },

      /***/ './src/tree-node/actions.js':
        /*!**********************************!*\
  !*** ./src/tree-node/actions.js ***!
  \**********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./action */ './src/tree-node/action.js'
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _objectWithoutProperties(obj, keys) {
            var target = {}
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
              target[i] = obj[i]
            }
            return target
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var Actions = (function(_PureComponent) {
            _inherits(Actions, _PureComponent)

            function Actions() {
              _classCallCheck(this, Actions)

              return _possibleConstructorReturn(
                this,
                (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments)
              )
            }

            _createClass(Actions, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    actions = _props.actions,
                    id = _props.id,
                    rest = _objectWithoutProperties(_props, ['actions', 'id'])

                  if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__['isEmpty'])(actions)) return null

                  return actions.map(function(a, idx) {
                    var actionId = a.id || 'action-' + idx
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      _action__WEBPACK_IMPORTED_MODULE_2__['default'],
                      _extends({ key: actionId }, rest, a, {
                        actionData: { action: _extends({}, a, { id: actionId }), nodeId: id },
                      })
                    )
                  })
                },
              },
            ])

            return Actions
          })(react__WEBPACK_IMPORTED_MODULE_1__['PureComponent'])

          Actions.propTypes = {
            id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
            actions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
          }

          /* harmony default export */ __webpack_exports__['default'] = Actions

          /***/
        },

      /***/ './src/tree-node/index.css':
        /*!*********************************!*\
  !*** ./src/tree-node/index.css ***!
  \*********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ './src/tree-node/index.js':
        /*!********************************!*\
  !*** ./src/tree-node/index.js ***!
  \********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../utils */ './src/utils/index.js'
          )
          /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./actions */ './src/tree-node/actions.js'
          )
          /* harmony import */ var _node_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./node-label */ './src/tree-node/node-label.js'
          )
          /* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./toggle */ './src/tree-node/toggle.js'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./index.css */ './src/tree-node/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_7__
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_7___default.a
          )

          var isLeaf = function isLeaf(children) {
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__['isEmpty'])(children)
          }

          var getNodeCx = function getNodeCx(props) {
            var keepTreeOnSearch = props.keepTreeOnSearch,
              keepChildrenOnSearch = props.keepChildrenOnSearch,
              _children = props._children,
              matchInChildren = props.matchInChildren,
              matchInParent = props.matchInParent,
              disabled = props.disabled,
              partial = props.partial,
              hide = props.hide,
              className = props.className,
              showPartiallySelected = props.showPartiallySelected,
              readOnly = props.readOnly,
              checked = props.checked,
              focused = props._focused

            return cx(
              'node',
              {
                leaf: isLeaf(_children),
                tree: !isLeaf(_children),
                disabled: disabled,
                hide: hide,
                'match-in-children': keepTreeOnSearch && matchInChildren,
                'match-in-parent': keepTreeOnSearch && keepChildrenOnSearch && matchInParent,
                partial: showPartiallySelected && partial,
                readOnly: readOnly,
                checked: checked,
                focused: focused,
              },
              className
            )
          }

          var TreeNode = (function(_PureComponent) {
            _inherits(TreeNode, _PureComponent)

            function TreeNode() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, TreeNode)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.getAriaAttributes = function() {
                  var _this$props = _this.props,
                    _children = _this$props._children,
                    _depth = _this$props._depth,
                    checked = _this$props.checked,
                    disabled = _this$props.disabled,
                    expanded = _this$props.expanded,
                    readOnly = _this$props.readOnly,
                    mode = _this$props.mode,
                    partial = _this$props.partial

                  var attributes = {}

                  attributes.role = mode === 'simpleSelect' ? 'option' : 'treeitem'
                  attributes['aria-disabled'] = disabled || readOnly
                  attributes['aria-selected'] = checked
                  if (mode !== 'simpleSelect') {
                    attributes['aria-checked'] = partial ? 'mixed' : checked
                    attributes['aria-level'] = (_depth || 0) + 1
                    attributes['aria-expanded'] = _children && (expanded ? 'true' : 'false')
                  }
                  return attributes
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(TreeNode, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    mode = _props.mode,
                    keepTreeOnSearch = _props.keepTreeOnSearch,
                    _id = _props._id,
                    _children = _props._children,
                    dataset = _props.dataset,
                    _depth = _props._depth,
                    expanded = _props.expanded,
                    title = _props.title,
                    label = _props.label,
                    partial = _props.partial,
                    checked = _props.checked,
                    value = _props.value,
                    disabled = _props.disabled,
                    actions = _props.actions,
                    onAction = _props.onAction,
                    searchModeOn = _props.searchModeOn,
                    onNodeToggle = _props.onNodeToggle,
                    onCheckboxChange = _props.onCheckboxChange,
                    showPartiallySelected = _props.showPartiallySelected,
                    readOnly = _props.readOnly,
                    clientId = _props.clientId

                  var liCx = getNodeCx(this.props)
                  var style = keepTreeOnSearch || !searchModeOn ? { paddingLeft: (_depth || 0) * 20 + 'px' } : {}

                  var liId = _id + '_li'

                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'li',
                    _extends(
                      { className: liCx, style: style, id: liId },
                      Object(_utils__WEBPACK_IMPORTED_MODULE_3__['getDataset'])(dataset),
                      this.getAriaAttributes()
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _toggle__WEBPACK_IMPORTED_MODULE_6__['default'],
                      { isLeaf: isLeaf(_children), expanded: expanded, id: _id, onNodeToggle: onNodeToggle }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _node_label__WEBPACK_IMPORTED_MODULE_5__['default'],
                      {
                        title: title,
                        label: label,
                        id: _id,
                        partial: partial,
                        checked: checked,
                        value: value,
                        disabled: disabled,
                        mode: mode,
                        onCheckboxChange: onCheckboxChange,
                        showPartiallySelected: showPartiallySelected,
                        readOnly: readOnly,
                        clientId: clientId,
                      }
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _actions__WEBPACK_IMPORTED_MODULE_4__['default'],
                      { actions: actions, onAction: onAction, id: _id, readOnly: readOnly }
                    )
                  )
                },
              },
            ])

            return TreeNode
          })(react__WEBPACK_IMPORTED_MODULE_2__['PureComponent'])

          TreeNode.propTypes = {
            _id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            _depth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            _children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            partial: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            dataset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            keepTreeOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            keepChildrenOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            searchModeOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onNodeToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCheckboxChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'multiSelect',
              'simpleSelect',
              'radioSelect',
              'hierarchical',
            ]),
            showPartiallySelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }

          /* harmony default export */ __webpack_exports__['default'] = TreeNode

          /***/
        },

      /***/ './src/tree-node/node-label.js':
        /*!*************************************!*\
  !*** ./src/tree-node/node-label.js ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../checkbox */ './src/checkbox/index.js'
          )
          /* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../radio */ './src/radio/index.js'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./index.css */ './src/tree-node/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_5__
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_5___default.a
          )

          var NodeLabel = (function(_PureComponent) {
            _inherits(NodeLabel, _PureComponent)

            function NodeLabel() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, NodeLabel)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = NodeLabel.__proto__ || Object.getPrototypeOf(NodeLabel)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.handleCheckboxChange = function(e) {
                  var _this$props = _this.props,
                    mode = _this$props.mode,
                    id = _this$props.id,
                    onCheckboxChange = _this$props.onCheckboxChange

                  if (mode === 'simpleSelect' || mode === 'radioSelect') {
                    onCheckboxChange(id, true)
                  } else {
                    var checked = e.target.checked

                    onCheckboxChange(id, checked)
                  }
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation()
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(NodeLabel, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    mode = _props.mode,
                    title = _props.title,
                    label = _props.label,
                    id = _props.id,
                    partial = _props.partial,
                    checked = _props.checked
                  var _props2 = this.props,
                    value = _props2.value,
                    disabled = _props2.disabled,
                    showPartiallySelected = _props2.showPartiallySelected,
                    readOnly = _props2.readOnly,
                    clientId = _props2.clientId

                  var nodeLabelProps = {
                    className: 'node-label',

                    // in case of simple select mode, there is no checkbox, so we need to handle the click via the node label
                    // but not if the control is in readOnly or disabled state
                  }
                  var shouldRegisterClickHandler = mode === 'simpleSelect' && !readOnly && !disabled

                  if (shouldRegisterClickHandler) {
                    nodeLabelProps.onClick = this.handleCheckboxChange
                  }

                  var sharedProps = {
                    id: id,
                    value: value,
                    checked: checked,
                    disabled: disabled,
                    readOnly: readOnly,
                    tabIndex: -1,
                  }

                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'label',
                    { title: title || label, htmlFor: id },
                    mode === 'radioSelect'
                      ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                          _radio__WEBPACK_IMPORTED_MODULE_4__['default'],
                          _extends(
                            { name: clientId, className: 'radio-item', onChange: this.handleCheckboxChange },
                            sharedProps
                          )
                        )
                      : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                          _checkbox__WEBPACK_IMPORTED_MODULE_3__['default'],
                          _extends(
                            {
                              name: id,
                              className: cx('checkbox-item', { 'simple-select': mode === 'simpleSelect' }),
                              indeterminate: showPartiallySelected && partial,
                              onChange: this.handleCheckboxChange,
                            },
                            sharedProps
                          )
                        ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('span', nodeLabelProps, label)
                  )
                },
              },
            ])

            return NodeLabel
          })(react__WEBPACK_IMPORTED_MODULE_2__['PureComponent'])

          NodeLabel.propTypes = {
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
            checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            partial: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            dataset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'multiSelect',
              'simpleSelect',
              'radioSelect',
              'hierarchical',
            ]),
            showPartiallySelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onCheckboxChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }

          /* harmony default export */ __webpack_exports__['default'] = NodeLabel

          /***/
        },

      /***/ './src/tree-node/toggle.js':
        /*!*********************************!*\
  !*** ./src/tree-node/toggle.js ***!
  \*********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./index.css */ './src/tree-node/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_3__
          )
          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_0___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_3___default.a
          )

          var Toggle = (function(_PureComponent) {
            _inherits(Toggle, _PureComponent)

            function Toggle() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, Toggle)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.onToggle = function(e) {
                  e.stopPropagation()
                  e.nativeEvent.stopImmediatePropagation()
                  _this.props.onNodeToggle(_this.props.id)
                }),
                (_this.onKeyDown = function(e) {
                  if (e.key === 'Enter' || e.keyCode === 32) {
                    _this.props.onNodeToggle(_this.props.id)
                    e.preventDefault()
                  }
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(Toggle, [
              {
                key: 'render',
                value: function render() {
                  var _props = this.props,
                    expanded = _props.expanded,
                    isLeaf = _props.isLeaf

                  if (isLeaf) return null

                  var toggleCx = cx('toggle', { expanded: expanded, collapsed: !expanded })
                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('i', {
                    role: 'button',
                    tabIndex: -1,
                    className: toggleCx,
                    onClick: this.onToggle,
                    onKeyDown: this.onKeyDown,
                    'aria-hidden': true,
                  })
                },
              },
            ])

            return Toggle
          })(react__WEBPACK_IMPORTED_MODULE_2__['PureComponent'])

          Toggle.propTypes = {
            expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            isLeaf: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onNodeToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }

          /* harmony default export */ __webpack_exports__['default'] = Toggle

          /***/
        },

      /***/ './src/tree/index.js':
        /*!***************************!*\
  !*** ./src/tree/index.js ***!
  \***************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-infinite-scroll-component */ './node_modules/react-infinite-scroll-component/lib/index.js'
          )
          /* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _tree_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../tree-node */ './src/tree-node/index.js'
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var shouldRenderNode = function shouldRenderNode(node, searchModeOn, data) {
            if (searchModeOn || node.expanded) return true

            var parent = node._parent && data.get(node._parent)
            // if it has a parent, then check parent's state.
            // otherwise root nodes are always rendered
            return !parent || parent.expanded
          }

          var Tree = (function(_Component) {
            _inherits(Tree, _Component)

            function Tree(props) {
              _classCallCheck(this, Tree)

              var _this = _possibleConstructorReturn(
                this,
                (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props)
              )

              _initialiseProps.call(_this)

              _this.currentPage = 1
              _this.computeInstanceProps(props, true)

              _this.state = {
                items: _this.allVisibleNodes.slice(0, _this.props.pageSize),
              }
              return _this
            }

            _createClass(Tree, [
              {
                key: 'render',
                value: function render() {
                  var searchModeOn = this.props.searchModeOn

                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    'ul',
                    _extends(
                      { className: 'root ' + (searchModeOn ? 'searchModeOn' : ''), ref: this.setNodeRef },
                      this.getAriaAttributes()
                    ),
                    this.state.scrollableTarget &&
                      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                          dataLength: this.state.items.length,
                          next: this.loadMore,
                          hasMore: this.hasMore(),
                          loader: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                            'span',
                            { className: 'searchLoader' },
                            'Loading...'
                          ),
                          scrollableTarget: this.state.scrollableTarget,
                        },
                        this.state.items
                      )
                  )
                },
              },
            ])

            return Tree
          })(react__WEBPACK_IMPORTED_MODULE_2__['Component'])

          Tree.propTypes = {
            data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            keepTreeOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            keepChildrenOnSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            searchModeOn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onNodeToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCheckboxChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'multiSelect',
              'simpleSelect',
              'radioSelect',
              'hierarchical',
            ]),
            showPartiallySelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            pageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            activeDescendant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          }
          Tree.defaultProps = {
            pageSize: 100,
          }

          var _initialiseProps = function _initialiseProps() {
            var _this2 = this

            this.componentWillReceiveProps = function(nextProps) {
              var activeDescendant = nextProps.activeDescendant

              var hasSameActiveDescendant = activeDescendant === _this2.props.activeDescendant
              _this2.computeInstanceProps(nextProps, !hasSameActiveDescendant)
              _this2.setState(
                { items: _this2.allVisibleNodes.slice(0, _this2.currentPage * _this2.props.pageSize) },
                function() {
                  if (hasSameActiveDescendant) return
                  var scrollableTarget = _this2.state.scrollableTarget

                  var activeLi = activeDescendant && document && document.getElementById(activeDescendant)
                  if (activeLi && scrollableTarget) {
                    scrollableTarget.scrollTop =
                      activeLi.offsetTop - (scrollableTarget.clientHeight - activeLi.clientHeight) / 2
                  }
                }
              )
            }

            this.componentDidMount = function() {
              _this2.setState({ scrollableTarget: _this2.node.parentNode })
            }

            this.computeInstanceProps = function(props, checkActiveDescendant) {
              _this2.allVisibleNodes = _this2.getNodes(props)
              _this2.totalPages = Math.ceil(_this2.allVisibleNodes.length / _this2.props.pageSize)
              if (checkActiveDescendant && props.activeDescendant) {
                var currentId = props.activeDescendant.replace(/_li$/, '')
                var focusIndex =
                  _this2.allVisibleNodes.findIndex(function(n) {
                    return n.key === currentId
                  }) + 1
                _this2.currentPage = focusIndex > 0 ? Math.ceil(focusIndex / _this2.props.pageSize) : 1
              }
            }

            this.getNodes = function(props) {
              var data = props.data,
                keepTreeOnSearch = props.keepTreeOnSearch,
                keepChildrenOnSearch = props.keepChildrenOnSearch,
                searchModeOn = props.searchModeOn,
                mode = props.mode,
                showPartiallySelected = props.showPartiallySelected,
                readOnly = props.readOnly,
                onAction = props.onAction,
                onChange = props.onChange,
                onCheckboxChange = props.onCheckboxChange,
                onNodeToggle = props.onNodeToggle,
                activeDescendant = props.activeDescendant,
                clientId = props.clientId

              var items = []
              data.forEach(function(node) {
                if (shouldRenderNode(node, searchModeOn, data)) {
                  items.push(
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _tree_node__WEBPACK_IMPORTED_MODULE_3__['default'],
                      _extends(
                        {
                          keepTreeOnSearch: keepTreeOnSearch,
                          keepChildrenOnSearch: keepChildrenOnSearch,
                          key: node._id,
                        },
                        node,
                        {
                          searchModeOn: searchModeOn,
                          onChange: onChange,
                          onCheckboxChange: onCheckboxChange,
                          onNodeToggle: onNodeToggle,
                          onAction: onAction,
                          mode: mode,
                          showPartiallySelected: showPartiallySelected,
                          readOnly: readOnly,
                          clientId: clientId,
                          activeDescendant: activeDescendant,
                        }
                      )
                    )
                  )
                }
              })
              return items
            }

            this.hasMore = function() {
              return _this2.currentPage < _this2.totalPages
            }

            this.loadMore = function() {
              _this2.currentPage = _this2.currentPage + 1
              var nextItems = _this2.allVisibleNodes.slice(0, _this2.currentPage * _this2.props.pageSize)
              _this2.setState({ items: nextItems })
            }

            this.setNodeRef = function(node) {
              _this2.node = node
            }

            this.getAriaAttributes = function() {
              var mode = _this2.props.mode

              var attributes = {
                /* https://www.w3.org/TR/wai-aria-1.1/#select
                 * https://www.w3.org/TR/wai-aria-1.1/#tree */
                role: mode === 'simpleSelect' ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(mode),
              }

              return attributes
            }
          }

          /* harmony default export */ __webpack_exports__['default'] = Tree

          /***/
        },

      /***/ './src/trigger/index.js':
        /*!******************************!*\
  !*** ./src/trigger/index.js ***!
  \******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 'react')
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ './node_modules/prop-types/index.js'
          )
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! classnames/bind */ './node_modules/classnames/bind.js'
          )
          /* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            classnames_bind__WEBPACK_IMPORTED_MODULE_2__
          )
          /* harmony import */ var _a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../a11y */ './src/a11y/index.js'
          )
          /* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../tag */ './src/tag/index.js'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ../index.css */ './src/index.css'
          )
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            _index_css__WEBPACK_IMPORTED_MODULE_5__
          )
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                  }
                }
              }
              return target
            }

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i]
                descriptor.enumerable = descriptor.enumerable || false
                descriptor.configurable = true
                if ('value' in descriptor) descriptor.writable = true
                Object.defineProperty(target, descriptor.key, descriptor)
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps)
              if (staticProps) defineProperties(Constructor, staticProps)
              return Constructor
            }
          })()

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function')
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return call && (typeof call === 'object' || typeof call === 'function') ? call : self
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass)
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
            })
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass)
          }

          var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default.a.bind(
            _index_css__WEBPACK_IMPORTED_MODULE_5___default.a
          )

          var Trigger = (function(_PureComponent) {
            _inherits(Trigger, _PureComponent)

            function Trigger() {
              var _ref

              var _temp, _this, _ret

              _classCallCheck(this, Trigger)

              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  (_ref = Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call.apply(_ref, [this].concat(args))
                )),
                _this)),
                (_this.getAriaAttributes = function() {
                  var _this$props = _this.props,
                    mode = _this$props.mode,
                    _this$props$texts = _this$props.texts,
                    texts = _this$props$texts === undefined ? {} : _this$props$texts,
                    showDropdown = _this$props.showDropdown,
                    clientId = _this$props.clientId,
                    tags = _this$props.tags

                  var triggerId = clientId + '_trigger'
                  var labelledBy = []
                  var labelAttributes = Object(_a11y__WEBPACK_IMPORTED_MODULE_3__['getAriaLabel'])(texts.label)
                  if (tags && tags.length) {
                    if (labelAttributes['aria-label']) {
                      // Adds reference to self when having aria-label
                      labelledBy.push(triggerId)
                    }
                    tags.forEach(function(t) {
                      labelledBy.push(Object(_tag__WEBPACK_IMPORTED_MODULE_4__['getTagId'])(t._id))
                    })
                    labelAttributes = Object(_a11y__WEBPACK_IMPORTED_MODULE_3__['getAriaLabel'])(
                      texts.label,
                      labelledBy.join(' ')
                    )
                  }

                  var attributes = _extends(
                    {
                      id: triggerId,
                      role: 'button',
                      tabIndex: 0,
                      'aria-haspopup': mode === 'simpleSelect' ? 'listbox' : 'tree',
                      'aria-expanded': showDropdown ? 'true' : 'false',
                    },
                    labelAttributes
                  )

                  return attributes
                }),
                (_this.handleTrigger = function(e) {
                  // Just return if triggered from keyDown and the key isn't enter, space or arrow down
                  if (e.key && e.keyCode !== 13 && e.keyCode !== 32 && e.keyCode !== 40) {
                    return
                  } else if (e.key && _this.triggerNode && _this.triggerNode !== document.activeElement) {
                    // Do not trigger if not activeElement
                    return
                  } else if (!_this.props.showDropdown && e.keyCode === 32) {
                    // Avoid adding space to input on open
                    e.preventDefault()
                  }

                  // Else this is a key press that should trigger the dropdown
                  _this.props.onTrigger(e)
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              )
            }

            _createClass(Trigger, [
              {
                key: 'render',
                value: function render() {
                  var _this2 = this

                  var _props = this.props,
                    disabled = _props.disabled,
                    readOnly = _props.readOnly,
                    showDropdown = _props.showDropdown

                  var dropdownTriggerClassname = cx({
                    'dropdown-trigger': true,
                    arrow: true,
                    disabled: disabled,
                    readOnly: readOnly,
                    top: showDropdown,
                    bottom: !showDropdown,
                  })

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'a',
                    _extends(
                      {
                        ref: function ref(node) {
                          _this2.triggerNode = node
                        },
                        className: dropdownTriggerClassname,
                        onClick: !disabled ? this.handleTrigger : undefined,
                        onKeyDown: !disabled ? this.handleTrigger : undefined,
                      },
                      this.getAriaAttributes()
                    ),
                    this.props.children
                  )
                },
              },
            ])

            return Trigger
          })(react__WEBPACK_IMPORTED_MODULE_0__['PureComponent'])

          Trigger.propTypes = {
            onTrigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            showDropdown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'multiSelect',
              'simpleSelect',
              'radioSelect',
              'hierarchical',
            ]),
            texts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
          }

          /* harmony default export */ __webpack_exports__['default'] = Trigger

          /***/
        },

      /***/ './src/utils/dataset.js':
        /*!******************************!*\
  !*** ./src/utils/dataset.js ***!
  \******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var toKebabCase = function toKebabCase(str) {
            return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
          }

          var getDataset = function getDataset() {
            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
            return Object.keys(o).reduce(function(acc, cur) {
              acc['data-' + toKebabCase(cur)] = o[cur]
              return acc
            }, {})
          }

          /* harmony default export */ __webpack_exports__['default'] = getDataset

          /***/
        },

      /***/ './src/utils/debounce.js':
        /*!*******************************!*\
  !*** ./src/utils/debounce.js ***!
  \*******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /**
           * Modified debounce that always invokes on leading edge
           * See unmodified: https://gist.github.com/mrchief/a7e8938ee96774f05644905b37f09536
           */
          /* harmony default export */ __webpack_exports__['default'] = function(func, wait) {
            var timeout = void 0

            return function() {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
              }

              var later = function later() {
                timeout = null
                func.apply(undefined, args)
              }

              // timeout will be undefined the first time (leading edge)
              // so the callback will get executed once on leading edge
              var callNow = !timeout

              clearTimeout(timeout)
              timeout = setTimeout(later, wait)

              if (callNow) func.apply(undefined, args)
            }
          }

          /***/
        },

      /***/ './src/utils/generateUID.js':
        /*!**********************************!*\
  !*** ./src/utils/generateUID.js ***!
  \**********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var generateUID = function generateUID(prefix) {
            var counter = 1

            var map = new WeakMap()

            var get = function get(item) {
              if (!map.has(item)) {
                map.set(item, counter++)
              }
              return '' + prefix + map.get(item)
            }

            var reset = function reset() {
              map = new WeakMap()
              counter = 1
            }

            return { get: get, reset: reset }
          }

          var clientIdGenerator = generateUID('rdts')
          /* harmony default export */ __webpack_exports__['default'] = clientIdGenerator

          /***/
        },

      /***/ './src/utils/index.js':
        /*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
        /*! exports provided: getDataset, mapToObject, isEmpty, isOutsideClick, debounce, clientIdGenerator */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./dataset */ './src/utils/dataset.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'getDataset', function() {
            return _dataset__WEBPACK_IMPORTED_MODULE_0__['default']
          })

          /* harmony import */ var _mapToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./mapToObject */ './src/utils/mapToObject.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'mapToObject', function() {
            return _mapToObject__WEBPACK_IMPORTED_MODULE_1__['default']
          })

          /* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./isEmpty */ './src/utils/isEmpty.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'isEmpty', function() {
            return _isEmpty__WEBPACK_IMPORTED_MODULE_2__['default']
          })

          /* harmony import */ var _isOutsideClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./isOutsideClick */ './src/utils/isOutsideClick.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'isOutsideClick', function() {
            return _isOutsideClick__WEBPACK_IMPORTED_MODULE_3__['default']
          })

          /* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./debounce */ './src/utils/debounce.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'debounce', function() {
            return _debounce__WEBPACK_IMPORTED_MODULE_4__['default']
          })

          /* harmony import */ var _generateUID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./generateUID */ './src/utils/generateUID.js'
          )
          /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'clientIdGenerator', function() {
            return _generateUID__WEBPACK_IMPORTED_MODULE_5__['default']
          })

          /***/
        },

      /***/ './src/utils/isEmpty.js':
        /*!******************************!*\
  !*** ./src/utils/isEmpty.js ***!
  \******************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          /**
           * Simplified implmentation of isEmpty.
           * Note: This is not complete and will return false positives for empty objects and likes.
           * However, it suffices for the limited use-case of this project.
           */
          var isEmpty = function isEmpty(o) {
            return !o || (Array.isArray(o) && !o.length)
          }

          /* harmony default export */ __webpack_exports__['default'] = isEmpty

          /***/
        },

      /***/ './src/utils/isOutsideClick.js':
        /*!*************************************!*\
  !*** ./src/utils/isOutsideClick.js ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var getPath = function getPath(e) {
            if (e.path) return e.path

            var elem = e.target
            var path = [elem]

            while (elem.parentElement) {
              elem = elem.parentElement
              path.unshift(elem)
            }

            return path
          }

          /* harmony default export */ __webpack_exports__['default'] = function(e, node) {
            if (!(e instanceof Event)) return false
            return !getPath(e).some(function(eventNode) {
              return eventNode === node
            })
          }

          /***/
        },

      /***/ './src/utils/mapToObject.js':
        /*!**********************************!*\
  !*** ./src/utils/mapToObject.js ***!
  \**********************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict'
          __webpack_require__.r(__webpack_exports__)
          var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
              var _arr = []
              var _n = true
              var _d = false
              var _e = undefined
              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value)
                  if (i && _arr.length === i) break
                }
              } catch (err) {
                _d = true
                _e = err
              } finally {
                try {
                  if (!_n && _i['return']) _i['return']()
                } finally {
                  if (_d) throw _e
                }
              }
              return _arr
            }
            return function(arr, i) {
              if (Array.isArray(arr)) {
                return arr
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i)
              } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance')
              }
            }
          })()

          var mapToObject = function mapToObject(map) {
            var obj = Object.create(null)
            // eslint-disable-next-line no-restricted-syntax
            var _iteratorNormalCompletion = true
            var _didIteratorError = false
            var _iteratorError = undefined

            try {
              for (
                var _iterator = map[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
              ) {
                var _step$value = _slicedToArray(_step.value, 2),
                  k = _step$value[0],
                  v = _step$value[1]

                // We don’t escape the key '__proto__'
                // which can cause problems on older engines
                obj[k] = v
              }
            } catch (err) {
              _didIteratorError = true
              _iteratorError = err
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return()
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError
                }
              }
            }

            return obj
          }

          /* harmony default export */ __webpack_exports__['default'] = mapToObject

          /***/
        },

      /***/ react:
        /*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_react__

          /***/
        },

      /******/
    }
  )
})
//# sourceMappingURL=react-dropdown-tree-select.js.map
