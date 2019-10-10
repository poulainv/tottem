module.exports = /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = require('../../../ssr-module-cache.js') // The require function
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
        /******/ /******/ var threw = true
        /******/ try {
            /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
            )
            /******/ threw = false
            /******/
        } finally {
            /******/ if (threw) delete installedModules[moduleId]
            /******/
        } // Flag the module as loaded
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
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            })
            /******/
        }
        /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module',
            })
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true })
        /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value)
        /******/ if (mode & 8) return value
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value
        /******/ var ns = Object.create(null)
        /******/ __webpack_require__.r(ns)
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value,
        })
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
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 3))
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './node_modules/@babel/runtime-corejs2/core-js/object/assign.js':
            /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! core-js/library/fn/object/assign */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js'
                )

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/extends.js':
            /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'default',
                    function() {
                        return _extends
                    }
                )
                /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../../core-js/object/assign */ './node_modules/@babel/runtime-corejs2/core-js/object/assign.js'
                )
                /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__
                )

                function _extends() {
                    _extends =
                        _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a ||
                        function(target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i]

                                for (var key in source) {
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            source,
                                            key
                                        )
                                    ) {
                                        target[key] = source[key]
                                    }
                                }
                            }

                            return target
                        }

                    return _extends.apply(this, arguments)
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js':
            /*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                __webpack_require__(
                    /*! ../../modules/es6.object.assign */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js'
                )
                module.exports = __webpack_require__(
                    /*! ../../modules/_core */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js'
                ).Object.assign

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = function(it) {
                    if (typeof it != 'function')
                        throw TypeError(it + ' is not a function!')
                    return it
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js'
                )
                module.exports = function(it) {
                    if (!isObject(it))
                        throw TypeError(it + ' is not an object!')
                    return it
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js':
            /*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // false -> Array#indexOf
                // true  -> Array#includes
                var toIObject = __webpack_require__(
                    /*! ./_to-iobject */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js'
                )
                var toLength = __webpack_require__(
                    /*! ./_to-length */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js'
                )
                var toAbsoluteIndex = __webpack_require__(
                    /*! ./_to-absolute-index */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js'
                )
                module.exports = function(IS_INCLUDES) {
                    return function($this, el, fromIndex) {
                        var O = toIObject($this)
                        var length = toLength(O.length)
                        var index = toAbsoluteIndex(fromIndex, length)
                        var value
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el)
                            while (length > index) {
                                value = O[index++]
                                // eslint-disable-next-line no-self-compare
                                if (value != value) return true
                                // Array#indexOf ignores holes, Array#includes - not
                            }
                        else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) {
                                    if (O[index] === el)
                                        return IS_INCLUDES || index || 0
                                }
                        return !IS_INCLUDES && -1
                    }
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                var toString = {}.toString

                module.exports = function(it) {
                    return toString.call(it).slice(8, -1)
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js':
            /*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                var core = (module.exports = { version: '2.6.9' })
                if (typeof __e == 'number') __e = core // eslint-disable-line no-undef

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // optional / simple context binding
                var aFunction = __webpack_require__(
                    /*! ./_a-function */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js'
                )
                module.exports = function(fn, that, length) {
                    aFunction(fn)
                    if (that === undefined) return fn
                    switch (length) {
                        case 1:
                            return function(a) {
                                return fn.call(that, a)
                            }
                        case 2:
                            return function(a, b) {
                                return fn.call(that, a, b)
                            }
                        case 3:
                            return function(a, b, c) {
                                return fn.call(that, a, b, c)
                            }
                    }
                    return function(/* ...args */) {
                        return fn.apply(that, arguments)
                    }
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js':
            /*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                // 7.2.1 RequireObjectCoercible(argument)
                module.exports = function(it) {
                    if (it == undefined)
                        throw TypeError("Can't call method on  " + it)
                    return it
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js':
            /*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // Thank's IE8 for his funny defineProperty
                module.exports = !__webpack_require__(
                    /*! ./_fails */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js'
                )(function() {
                    return (
                        Object.defineProperty({}, 'a', {
                            get: function() {
                                return 7
                            },
                        }).a != 7
                    )
                })

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js'
                )
                var document = __webpack_require__(
                    /*! ./_global */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js'
                ).document
                // typeof document.createElement is 'object' in old IE
                var is = isObject(document) && isObject(document.createElement)
                module.exports = function(it) {
                    return is ? document.createElement(it) : {}
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js':
            /*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                // IE 8- don't enum bug keys
                module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                    ','
                )

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js':
            /*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var global = __webpack_require__(
                    /*! ./_global */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js'
                )
                var core = __webpack_require__(
                    /*! ./_core */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js'
                )
                var ctx = __webpack_require__(
                    /*! ./_ctx */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js'
                )
                var hide = __webpack_require__(
                    /*! ./_hide */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js'
                )
                var has = __webpack_require__(
                    /*! ./_has */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js'
                )
                var PROTOTYPE = 'prototype'

                var $export = function(type, name, source) {
                    var IS_FORCED = type & $export.F
                    var IS_GLOBAL = type & $export.G
                    var IS_STATIC = type & $export.S
                    var IS_PROTO = type & $export.P
                    var IS_BIND = type & $export.B
                    var IS_WRAP = type & $export.W
                    var exports = IS_GLOBAL
                        ? core
                        : core[name] || (core[name] = {})
                    var expProto = exports[PROTOTYPE]
                    var target = IS_GLOBAL
                        ? global
                        : IS_STATIC
                        ? global[name]
                        : (global[name] || {})[PROTOTYPE]
                    var key, own, out
                    if (IS_GLOBAL) source = name
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined
                        if (own && has(exports, key)) continue
                        // export native or passed
                        out = own ? target[key] : source[key]
                        // prevent global pollution for namespaces
                        exports[key] =
                            IS_GLOBAL && typeof target[key] != 'function'
                                ? source[key]
                                : // bind timers to global for call from export context
                                IS_BIND && own
                                ? ctx(out, global)
                                : // wrap global constructors for prevent change them in library
                                IS_WRAP && target[key] == out
                                ? (function(C) {
                                      var F = function(a, b, c) {
                                          if (this instanceof C) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new C()
                                                  case 1:
                                                      return new C(a)
                                                  case 2:
                                                      return new C(a, b)
                                              }
                                              return new C(a, b, c)
                                          }
                                          return C.apply(this, arguments)
                                      }
                                      F[PROTOTYPE] = C[PROTOTYPE]
                                      return F
                                      // make static versions for prototype methods
                                  })(out)
                                : IS_PROTO && typeof out == 'function'
                                ? ctx(Function.call, out)
                                : out
                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                        if (IS_PROTO) {
                            ;(exports.virtual || (exports.virtual = {}))[
                                key
                            ] = out
                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                            if (type & $export.R && expProto && !expProto[key])
                                hide(expProto, key, out)
                        }
                    }
                }
                // type bitmap
                $export.F = 1 // forced
                $export.G = 2 // global
                $export.S = 4 // static
                $export.P = 8 // proto
                $export.B = 16 // bind
                $export.W = 32 // wrap
                $export.U = 64 // safe
                $export.R = 128 // real proto method for `library`
                module.exports = $export

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js':
            /*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = function(exec) {
                    try {
                        return !!exec()
                    } catch (e) {
                        return true
                    }
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js':
            /*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                var global = (module.exports =
                    typeof window != 'undefined' && window.Math == Math
                        ? window
                        : typeof self != 'undefined' && self.Math == Math
                        ? self
                        : // eslint-disable-next-line no-new-func
                          Function('return this')())
                if (typeof __g == 'number') __g = global // eslint-disable-line no-undef

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                var hasOwnProperty = {}.hasOwnProperty
                module.exports = function(it, key) {
                    return hasOwnProperty.call(it, key)
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js':
            /*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var dP = __webpack_require__(
                    /*! ./_object-dp */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js'
                )
                var createDesc = __webpack_require__(
                    /*! ./_property-desc */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js'
                )
                module.exports = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js'
                )
                    ? function(object, key, value) {
                          return dP.f(object, key, createDesc(1, value))
                      }
                    : function(object, key, value) {
                          object[key] = value
                          return object
                      }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js':
            /*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports =
                    !__webpack_require__(
                        /*! ./_descriptors */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js'
                    ) &&
                    !__webpack_require__(
                        /*! ./_fails */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js'
                    )(function() {
                        return (
                            Object.defineProperty(
                                __webpack_require__(
                                    /*! ./_dom-create */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js'
                                )('div'),
                                'a',
                                {
                                    get: function() {
                                        return 7
                                    },
                                }
                            ).a != 7
                        )
                    })

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js':
            /*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                var cof = __webpack_require__(
                    /*! ./_cof */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js'
                )
                // eslint-disable-next-line no-prototype-builtins
                module.exports = Object('z').propertyIsEnumerable(0)
                    ? Object
                    : function(it) {
                          return cof(it) == 'String' ? it.split('') : Object(it)
                      }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = function(it) {
                    return typeof it === 'object'
                        ? it !== null
                        : typeof it === 'function'
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js':
            /*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = true

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js':
            /*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                'use strict'

                // 19.1.2.1 Object.assign(target, source, ...)
                var DESCRIPTORS = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js'
                )
                var getKeys = __webpack_require__(
                    /*! ./_object-keys */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js'
                )
                var gOPS = __webpack_require__(
                    /*! ./_object-gops */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js'
                )
                var pIE = __webpack_require__(
                    /*! ./_object-pie */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js'
                )
                var toObject = __webpack_require__(
                    /*! ./_to-object */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js'
                )
                var IObject = __webpack_require__(
                    /*! ./_iobject */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js'
                )
                var $assign = Object.assign

                // should work with symbols and should have deterministic property order (V8 bug)
                module.exports =
                    !$assign ||
                    __webpack_require__(
                        /*! ./_fails */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js'
                    )(function() {
                        var A = {}
                        var B = {}
                        // eslint-disable-next-line no-undef
                        var S = Symbol()
                        var K = 'abcdefghijklmnopqrst'
                        A[S] = 7
                        K.split('').forEach(function(k) {
                            B[k] = k
                        })
                        return (
                            $assign({}, A)[S] != 7 ||
                            Object.keys($assign({}, B)).join('') != K
                        )
                    })
                        ? function assign(target, source) {
                              // eslint-disable-line no-unused-vars
                              var T = toObject(target)
                              var aLen = arguments.length
                              var index = 1
                              var getSymbols = gOPS.f
                              var isEnum = pIE.f
                              while (aLen > index) {
                                  var S = IObject(arguments[index++])
                                  var keys = getSymbols
                                      ? getKeys(S).concat(getSymbols(S))
                                      : getKeys(S)
                                  var length = keys.length
                                  var j = 0
                                  var key
                                  while (length > j) {
                                      key = keys[j++]
                                      if (!DESCRIPTORS || isEnum.call(S, key))
                                          T[key] = S[key]
                                  }
                              }
                              return T
                          }
                        : $assign

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var anObject = __webpack_require__(
                    /*! ./_an-object */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js'
                )
                var IE8_DOM_DEFINE = __webpack_require__(
                    /*! ./_ie8-dom-define */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js'
                )
                var toPrimitive = __webpack_require__(
                    /*! ./_to-primitive */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js'
                )
                var dP = Object.defineProperty

                exports.f = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js'
                )
                    ? Object.defineProperty
                    : function defineProperty(O, P, Attributes) {
                          anObject(O)
                          P = toPrimitive(P, true)
                          anObject(Attributes)
                          if (IE8_DOM_DEFINE)
                              try {
                                  return dP(O, P, Attributes)
                              } catch (e) {
                                  /* empty */
                              }
                          if ('get' in Attributes || 'set' in Attributes)
                              throw TypeError('Accessors not supported!')
                          if ('value' in Attributes) O[P] = Attributes.value
                          return O
                      }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js':
            /*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                exports.f = Object.getOwnPropertySymbols

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js':
            /*!***********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var has = __webpack_require__(
                    /*! ./_has */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js'
                )
                var toIObject = __webpack_require__(
                    /*! ./_to-iobject */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js'
                )
                var arrayIndexOf = __webpack_require__(
                    /*! ./_array-includes */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_array-includes.js'
                )(false)
                var IE_PROTO = __webpack_require__(
                    /*! ./_shared-key */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js'
                )('IE_PROTO')

                module.exports = function(object, names) {
                    var O = toIObject(object)
                    var i = 0
                    var result = []
                    var key
                    for (key in O)
                        if (key != IE_PROTO) has(O, key) && result.push(key)
                    // Don't enum bug & hidden keys
                    while (names.length > i)
                        if (has(O, (key = names[i++]))) {
                            ~arrayIndexOf(result, key) || result.push(key)
                        }
                    return result
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js':
            /*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var $keys = __webpack_require__(
                    /*! ./_object-keys-internal */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-keys-internal.js'
                )
                var enumBugKeys = __webpack_require__(
                    /*! ./_enum-bug-keys */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_enum-bug-keys.js'
                )

                module.exports =
                    Object.keys ||
                    function keys(O) {
                        return $keys(O, enumBugKeys)
                    }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                exports.f = {}.propertyIsEnumerable

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js':
            /*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = function(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value,
                    }
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var shared = __webpack_require__(
                    /*! ./_shared */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js'
                )('keys')
                var uid = __webpack_require__(
                    /*! ./_uid */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js'
                )
                module.exports = function(key) {
                    return shared[key] || (shared[key] = uid(key))
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js':
            /*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var core = __webpack_require__(
                    /*! ./_core */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js'
                )
                var global = __webpack_require__(
                    /*! ./_global */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js'
                )
                var SHARED = '__core-js_shared__'
                var store = global[SHARED] || (global[SHARED] = {})

                ;(module.exports = function(key, value) {
                    return (
                        store[key] ||
                        (store[key] = value !== undefined ? value : {})
                    )
                })('versions', []).push({
                    version: core.version,
                    mode: __webpack_require__(
                        /*! ./_library */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_library.js'
                    )
                        ? 'pure'
                        : 'global',
                    copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
                })

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js':
            /*!********************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                var toInteger = __webpack_require__(
                    /*! ./_to-integer */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js'
                )
                var max = Math.max
                var min = Math.min
                module.exports = function(index, length) {
                    index = toInteger(index)
                    return index < 0
                        ? max(index + length, 0)
                        : min(index, length)
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                // 7.1.4 ToInteger
                var ceil = Math.ceil
                var floor = Math.floor
                module.exports = function(it) {
                    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it)
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js':
            /*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var IObject = __webpack_require__(
                    /*! ./_iobject */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iobject.js'
                )
                var defined = __webpack_require__(
                    /*! ./_defined */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js'
                )
                module.exports = function(it) {
                    return IObject(defined(it))
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // 7.1.15 ToLength
                var toInteger = __webpack_require__(
                    /*! ./_to-integer */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-integer.js'
                )
                var min = Math.min
                module.exports = function(it) {
                    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // 7.1.13 ToObject(argument)
                var defined = __webpack_require__(
                    /*! ./_defined */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js'
                )
                module.exports = function(it) {
                    return Object(defined(it))
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js':
            /*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // 7.1.1 ToPrimitive(input [, PreferredType])
                var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js'
                )
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                module.exports = function(it, S) {
                    if (!isObject(it)) return it
                    var fn, val
                    if (
                        S &&
                        typeof (fn = it.toString) == 'function' &&
                        !isObject((val = fn.call(it)))
                    )
                        return val
                    if (
                        typeof (fn = it.valueOf) == 'function' &&
                        !isObject((val = fn.call(it)))
                    )
                        return val
                    if (
                        !S &&
                        typeof (fn = it.toString) == 'function' &&
                        !isObject((val = fn.call(it)))
                    )
                        return val
                    throw TypeError("Can't convert object to primitive value")
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                var id = 0
                var px = Math.random()
                module.exports = function(key) {
                    return 'Symbol('.concat(
                        key === undefined ? '' : key,
                        ')_',
                        (++id + px).toString(36)
                    )
                }

                /***/
            },

        /***/ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js':
            /*!*******************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                // 19.1.3.1 Object.assign(target, source)
                var $export = __webpack_require__(
                    /*! ./_export */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js'
                )

                $export($export.S + $export.F, 'Object', {
                    assign: __webpack_require__(
                        /*! ./_object-assign */ './node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-assign.js'
                    ),
                })

                /***/
            },

        /***/ './src/components/Cards/Card.tsx':
            /*!***************************************!*\
  !*** ./src/components/Cards/Card.tsx ***!
  \***************************************/
            /*! exports provided: CardSize, default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'CardSize',
                    function() {
                        return CardSize
                    }
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Image/Image */ 'grommet/components/Image/Image'
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Stack/Stack */ 'grommet/components/Stack/Stack'
                )
                /* harmony import */ var grommet_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./CardInfo */ './src/components/Cards/CardInfo.tsx'
                )
                /* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./CoverImage */ './src/components/Cards/CoverImage.tsx'
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Cards/Card.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement

                const width = 18 + 8 * 18
                const smallWidth = width * 0.8
                const largeWidthPx = width + 'px'
                const largeHeightPx = 1.68 * width + 'px'
                const smallWidthPx = smallWidth + 'px'
                const smallHeightPx = 1.68 * smallWidth + 'px'
                const CardSize = {
                    small: {
                        widthInNumber: smallWidth,
                        width: smallWidthPx,
                        rectangleImageHeight: smallHeightPx,
                        squareImageHeight: smallWidthPx,
                    },
                    large: {
                        widthInNumber: width,
                        width: largeWidthPx,
                        rectangleImageHeight: largeHeightPx,
                        squareImageHeight: largeWidthPx,
                    },
                }
                const colors = {
                    album: '#417D6F',
                    book: '#D87551',
                    movie: '#7CB7A9',
                    paper: '#509DAD',
                    people: '#9E4A77',
                    podcast: '#E7A704',
                    video: '#4D6892',
                }

                const Card = props => {
                    const { 0: isHover, 1: setHover } = Object(
                        react__WEBPACK_IMPORTED_MODULE_3__['useState']
                    )(false)
                    const picto = `/pictograms/${props.item.type}-white.svg`
                    return __jsx(
                        grommet_components_Stack_Stack__WEBPACK_IMPORTED_MODULE_2___default.a,
                        {
                            anchor: 'top-left',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a, // tslint:disable-next-line: jsx-no-lambda
                            {
                                onMouseEnter: () => setHover(true), // tslint:disable-next-line: jsx-no-lambda
                                onMouseLeave: () => setHover(false),
                                direction: 'column',
                                align: 'center',
                                width: props.width,
                                background: 'white',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    direction: 'column',
                                    width: 'full',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 61,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    _CoverImage__WEBPACK_IMPORTED_MODULE_5__[
                                        'default'
                                    ],
                                    {
                                        placeholderColor:
                                            colors[props.item.type],
                                        placeholderPicto: picto,
                                        imageUrl: props.item.imageUrl,
                                        small: props.small,
                                        imageShape: props.imageShape,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 62,
                                        },
                                        __self: undefined,
                                    }
                                ),
                                __jsx(
                                    _CardInfo__WEBPACK_IMPORTED_MODULE_4__[
                                        'default'
                                    ],
                                    {
                                        item: props.item,
                                        hover: isHover,
                                        small: props.small,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 69,
                                        },
                                        __self: undefined,
                                    }
                                )
                            )
                        ),
                        picto &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    style: {
                                        top: '-12px',
                                        left: '-12px',
                                        position: 'relative',
                                    },
                                    align: 'center',
                                    justify: 'center',
                                    round: '50%',
                                    background: '#6FAA9C',
                                    width: '30px',
                                    height: '30px',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 77,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        height: '16px',
                                        src: picto,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 90,
                                        },
                                        __self: undefined,
                                    }
                                )
                            )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Card

                /***/
            },

        /***/ './src/components/Cards/CardInfo.tsx':
            /*!*******************************************!*\
  !*** ./src/components/Cards/CardInfo.tsx ***!
  \*******************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Button/Button */ 'grommet/components/Button/Button'
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Text/Text */ 'grommet/components/Text/Text'
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var grommet_icons_icons_Share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! grommet-icons/icons/Share */ 'grommet-icons/icons/Share'
                )
                /* harmony import */ var grommet_icons_icons_Share__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_icons_icons_Share__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_4__
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react-ga */ 'react-ga'
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    react_ga__WEBPACK_IMPORTED_MODULE_5__
                )
                /* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react-truncate */ 'react-truncate'
                )
                /* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    react_truncate__WEBPACK_IMPORTED_MODULE_6__
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_7__
                )
                /* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ./Card */ './src/components/Cards/Card.tsx'
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Cards/CardInfo.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement

                const StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_2___default.a
                )`
    font-weight: 500;
    font-size: 14px;

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`
                const StyledAuthor = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_2___default.a
                )`
    font-size: 14px;

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`

                function trackOpenItem() {
                    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize(
                        'UA-149517534-1'
                    )
                    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.event({
                        category: 'Item',
                        action: 'Open item',
                    })
                }

                const CardInfo = props => {
                    const optionButton = __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            direction: 'row',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                            {
                                style: {
                                    padding: '0px 5px 0px 5px',
                                },
                                icon: __jsx(
                                    grommet_icons_icons_Share__WEBPACK_IMPORTED_MODULE_3___default.a,
                                    {
                                        size: 'small',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 50,
                                        },
                                        __self: undefined,
                                    }
                                ),
                                href: props.item.productUrl,
                                onClick: trackOpenItem,
                                target: '_blank',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48,
                                },
                                __self: undefined,
                            }
                        )
                    )

                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            height: '84px',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 59,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                            {
                                height: {
                                    max: 'xxsmall',
                                },
                                margin: {
                                    top: 'small',
                                },
                                responsive: false,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                StyledTitle,
                                {
                                    color: 'dark-1',
                                    size: 'medium',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 65,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    react_truncate__WEBPACK_IMPORTED_MODULE_6___default.a,
                                    {
                                        width: props.small
                                            ? _Card__WEBPACK_IMPORTED_MODULE_8__[
                                                  'CardSize'
                                              ].small.widthInNumber
                                            : _Card__WEBPACK_IMPORTED_MODULE_8__[
                                                  'CardSize'
                                              ].large.widthInNumber,
                                        lines: 2,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 67,
                                        },
                                        __self: undefined,
                                    },
                                    props.item.title
                                )
                            )
                        ),
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                            {
                                direction: 'row',
                                margin: {
                                    top: 'xsmall',
                                },
                                justify: 'between',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 79,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 80,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    StyledAuthor,
                                    {
                                        color: 'dark-3',
                                        truncate: true,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 81,
                                        },
                                        __self: undefined,
                                    },
                                    props.item.author
                                )
                            ),
                            props.hover && optionButton
                        )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = CardInfo

                /***/
            },

        /***/ './src/components/Cards/CoverImage.tsx':
            /*!*********************************************!*\
  !*** ./src/components/Cards/CoverImage.tsx ***!
  \*********************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Image/Image */ 'grommet/components/Image/Image'
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./Card */ './src/components/Cards/Card.tsx'
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Cards/CoverImage.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

                const CoverImage = props => {
                    const getImageHeight = (small, shape) => {
                        // The width is full and fixed depending on parent width
                        if (shape === 'rectangle' && !small) {
                            return _Card__WEBPACK_IMPORTED_MODULE_3__[
                                'CardSize'
                            ].large.rectangleImageHeight
                        } else if (shape === 'rectangle' && small) {
                            return _Card__WEBPACK_IMPORTED_MODULE_3__[
                                'CardSize'
                            ].small.rectangleImageHeight
                        } else if (small) {
                            return _Card__WEBPACK_IMPORTED_MODULE_3__[
                                'CardSize'
                            ].small.squareImageHeight
                        } else {
                            return _Card__WEBPACK_IMPORTED_MODULE_3__[
                                'CardSize'
                            ].large.squareImageHeight
                        }
                    }

                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                            round:
                                props.imageShape === 'circle' ? '50%' : '8px',
                            height: getImageHeight(
                                props.small,
                                props.imageShape
                            ),
                            justify: 'center',
                            width: 'full',
                            overflow: 'hidden',
                            background: props.imageUrl
                                ? 'none'
                                : props.placeholderColor,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30,
                            },
                            __self: undefined,
                        },
                        props.imageUrl
                            ? __jsx(
                                  grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default.a,
                                  {
                                      src: props.imageUrl,
                                      fit: 'cover',
                                      __source: {
                                          fileName: _jsxFileName,
                                          lineNumber: 39,
                                      },
                                      __self: undefined,
                                  }
                              )
                            : __jsx(
                                  grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default.a,
                                  {
                                      src: props.placeholderPicto,
                                      style: {
                                          marginLeft: 'auto',
                                          marginRight: 'auto',
                                      },
                                      fit: 'contain',
                                      width: '30px',
                                      height: '30px',
                                      __source: {
                                          fileName: _jsxFileName,
                                          lineNumber: 41,
                                      },
                                      __self: undefined,
                                  }
                              )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = CoverImage

                /***/
            },

        /***/ './src/components/Logo.tsx':
            /*!*********************************!*\
  !*** ./src/components/Logo.tsx ***!
  \*********************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_0__
                )

                const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default
                    .a.h1`
    font-size: 30px;
    color: black;
    font-family: 'Poiret One';
    font-weight: 700;

    @media screen and (max-width: 600px) {
        font-size: 24px;
    }
`
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Logo

                /***/
            },

        /***/ './src/components/PictureProfile.tsx':
            /*!*******************************************!*\
  !*** ./src/components/PictureProfile.tsx ***!
  \*******************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Image/Image */ 'grommet/components/Image/Image'
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_2__
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/PictureProfile.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement

                const PictureProfile = props => {
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            overflow: 'hidden',
                            justify: 'center',
                            align: 'center',
                            round: 'full',
                            elevation: 'profile',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_1___default.a,
                            {
                                src: props.imageUrl,
                                width:
                                    props.size === 'small' ? '80px' : '150px',
                                height:
                                    props.size === 'small' ? '80px' : '150px',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 18,
                                },
                                __self: undefined,
                            }
                        )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = PictureProfile

                /***/
            },

        /***/ './src/components/Social.tsx':
            /*!***********************************!*\
  !*** ./src/components/Social.tsx ***!
  \***********************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Button/Button */ 'grommet/components/Button/Button'
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Image/Image */ 'grommet/components/Image/Image'
                )
                /* harmony import */ var grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var grommet_icons_icons_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! grommet-icons/icons/Link */ 'grommet-icons/icons/Link'
                )
                /* harmony import */ var grommet_icons_icons_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_icons_icons_Link__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var grommet_icons_icons_Youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! grommet-icons/icons/Youtube */ 'grommet-icons/icons/Youtube'
                )
                /* harmony import */ var grommet_icons_icons_Youtube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_icons_icons_Youtube__WEBPACK_IMPORTED_MODULE_4__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_5__
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Social.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement

                const Social = props => {
                    const pictoHeight = '15px'
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            direction: 'row',
                            height: pictoHeight,
                            gap: 'medium',
                            align: 'end',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9,
                            },
                            __self: undefined,
                        },
                        props.mail &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 11,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        plain: true,
                                        href: 'mailto:' + props.mail,
                                        icon: __jsx(
                                            grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default.a,
                                            {
                                                height: '14px',
                                                src: '/pictograms/mail.svg',
                                                fit: 'contain',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 16,
                                                },
                                                __self: undefined,
                                            }
                                        ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 12,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                        props.github &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        target: '_blank',
                                        plain: true,
                                        href: props.github,
                                        icon: __jsx(
                                            grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default.a,
                                            {
                                                height: pictoHeight,
                                                src: '/pictograms/github.svg',
                                                fit: 'contain',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 33,
                                                },
                                                __self: undefined,
                                            }
                                        ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                        props.linkedin &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        target: '_blank',
                                        plain: true,
                                        href: props.linkedin,
                                        icon: __jsx(
                                            grommet_components_Image_Image__WEBPACK_IMPORTED_MODULE_2___default.a,
                                            {
                                                height: pictoHeight,
                                                src: '/pictograms/linkedin.svg',
                                                fit: 'contain',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 50,
                                                },
                                                __self: undefined,
                                            }
                                        ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 45,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                        props.website &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 60,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        target: '_blank',
                                        plain: true,
                                        href: props.website,
                                        icon: __jsx(
                                            grommet_icons_icons_Link__WEBPACK_IMPORTED_MODULE_3___default.a,
                                            {
                                                style: {
                                                    height: '18px',
                                                    width: 'auto',
                                                },
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 66,
                                                },
                                                __self: undefined,
                                            }
                                        ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                        props.youtube &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 73,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        target: '_blank',
                                        plain: true,
                                        href: props.youtube,
                                        icon: __jsx(
                                            grommet_icons_icons_Youtube__WEBPACK_IMPORTED_MODULE_4___default.a,
                                            {
                                                style: {
                                                    height: '18px',
                                                    width: 'auto',
                                                },
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 79,
                                                },
                                                __self: undefined,
                                            }
                                        ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 74,
                                        },
                                        __self: undefined,
                                    }
                                )
                            )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Social

                /***/
            },

        /***/ './src/components/Views/Collection.tsx':
            /*!*********************************************!*\
  !*** ./src/components/Views/Collection.tsx ***!
  \*********************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Button/Button */ 'grommet/components/Button/Button'
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Collapsible/Collapsible */ 'grommet/components/Collapsible/Collapsible'
                )
                /* harmony import */ var grommet_components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var grommet_components_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! grommet/components/Markdown/Markdown */ 'grommet/components/Markdown/Markdown'
                )
                /* harmony import */ var grommet_components_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! grommet/contexts/ResponsiveContext/ResponsiveContext */ 'grommet/contexts/ResponsiveContext/ResponsiveContext'
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_4__
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! grommet/components/Text/Text */ 'grommet/components/Text/Text'
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_6__
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! react-ga */ 'react-ga'
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
                    react_ga__WEBPACK_IMPORTED_MODULE_7__
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_8__
                )
                /* harmony import */ var _ItemList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./ItemList */ './src/components/Views/ItemList.tsx'
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/Collection.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement

                const CollectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_8___default
                    .a.h3`
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
`
                const CollectionDetail = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_5___default.a
                )`
    font-size: 16px;
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`

                const Collection = props => {
                    const size = Object(
                        react__WEBPACK_IMPORTED_MODULE_6__['useContext']
                    )(
                        grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_4___default.a
                    )
                    const isMobile = size === 'small'
                    const [
                        open,
                        setOpen,
                    ] = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(
                        false
                    )
                    const maxItem = 4
                    const initialItems = isMobile
                        ? props.items
                        : props.items.slice(0, maxItem)
                    const collapsedItems = isMobile
                        ? []
                        : props.items.slice(maxItem)

                    const trackExpand = () => {
                        react_ga__WEBPACK_IMPORTED_MODULE_7___default.a.initialize(
                            'UA-149517534-1'
                        )
                        react_ga__WEBPACK_IMPORTED_MODULE_7___default.a.event({
                            category: 'Collection',
                            action: 'Click on expand collection',
                        })
                    }

                    const seeMore = __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            margin: {
                                horizontal: 'medium',
                            },
                            onClick: trackExpand,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                            {
                                style: {
                                    fontSize: '14px',
                                },
                                label: open
                                    ? 'SHOW LESS ITEMS'
                                    : 'SHOW ALL ' +
                                      props.items.length +
                                      ' ITEMS', // tslint:disable-next-line: jsx-no-lambda
                                onClick: () => setOpen(!open),
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52,
                                },
                                __self: undefined,
                            }
                        )
                    )

                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            direction: 'column',
                            margin: {
                                vertical: 'medium',
                            },
                            background: 'white',
                            round: isMobile ? '0px' : '6px',
                            elevation: isMobile ? 'none' : 'card',
                            border: isMobile
                                ? {
                                      side: 'horizontal',
                                      size: '0.5px',
                                      color: 'light-5',
                                  }
                                : false,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 66,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                            {
                                direction: 'row',
                                justify: 'between',
                                align: 'center',
                                border: {
                                    side: 'bottom',
                                    color: 'light-3',
                                    size: '0.5px',
                                },
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 78,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    responsive: false,
                                    margin: {
                                        horizontal: 'medium',
                                    },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 84,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    CollectionTitle,
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 85,
                                        },
                                        __self: undefined,
                                    },
                                    __jsx(
                                        grommet_components_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_3___default.a,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 86,
                                            },
                                            __self: undefined,
                                        },
                                        props.name
                                    )
                                )
                            ),
                            props.items.length > 4 && !isMobile && seeMore
                        ),
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                            {
                                margin: {
                                    bottom: !isMobile ? 'large' : 'none',
                                },
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 91,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                _ItemList__WEBPACK_IMPORTED_MODULE_9__[
                                    'default'
                                ],
                                {
                                    items: initialItems,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 92,
                                    },
                                    __self: undefined,
                                }
                            ),
                            !isMobile &&
                                __jsx(
                                    grommet_components_Collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_2___default.a,
                                    {
                                        open: open,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 94,
                                        },
                                        __self: undefined,
                                    },
                                    __jsx(
                                        _ItemList__WEBPACK_IMPORTED_MODULE_9__[
                                            'default'
                                        ],
                                        {
                                            items: collapsedItems,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 95,
                                            },
                                            __self: undefined,
                                        }
                                    )
                                )
                        ),
                        props.detail &&
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    border: {
                                        side: 'top',
                                        color: 'light-3',
                                        size: '0.5px',
                                    },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 100,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                    {
                                        margin: {
                                            horizontal: 'medium',
                                            vertical: 'medium',
                                        },
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 101,
                                        },
                                        __self: undefined,
                                    },
                                    __jsx(
                                        CollectionDetail,
                                        {
                                            color: 'dark-3',
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 102,
                                            },
                                            __self: undefined,
                                        },
                                        __jsx(
                                            grommet_components_Markdown_Markdown__WEBPACK_IMPORTED_MODULE_3___default.a,
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 103,
                                                },
                                                __self: undefined,
                                            },
                                            props.detail
                                        )
                                    )
                                )
                            )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Collection

                /***/
            },

        /***/ './src/components/Views/Footer.tsx':
            /*!*****************************************!*\
  !*** ./src/components/Views/Footer.tsx ***!
  \*****************************************/
            /*! exports provided: Footer */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Footer',
                    function() {
                        return Footer
                    }
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_2__
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/Footer.tsx'
                var __jsx = react__WEBPACK_IMPORTED_MODULE_0__['createElement']

                const FootItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default
                    .a.a`
    text-transform: uppercase;
    text-decoration: none;
    color: grey;
    font-size: 12px;
`
                function Footer(props) {
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                            pad: {
                                horizontal: 'large',
                                vertical: 'medium',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14,
                            },
                            __self: this,
                        },
                        __jsx(
                            FootItem,
                            {
                                href: 'mailto:hello@tottem.app',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 15,
                                },
                                __self: this,
                            },
                            'Contact'
                        )
                    )
                }

                /***/
            },

        /***/ './src/components/Views/Header.tsx':
            /*!*****************************************!*\
  !*** ./src/components/Views/Header.tsx ***!
  \*****************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Button/Button */ 'grommet/components/Button/Button'
                )
                /* harmony import */ var grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/contexts/ResponsiveContext/ResponsiveContext */ 'grommet/contexts/ResponsiveContext/ResponsiveContext'
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ../Logo */ './src/components/Logo.tsx'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_5__
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/Header.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement

                const ButtonCTA = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(
                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a
                )`
    color: #407f6e;
    border: 1px transparent solid;
    background-color: #d4e6e1;
    border-radius: 3px;
    padding: 3px 10px 3px 10px;
    font-weight: 500;
    margin: 0px;
    height: fit-content;
    width: fit-content;

    :hover {
        border: 1px #407f6e solid;
    }

    @media screen and (max-width: 812px) {
        font-size: 14px;
    }
`

                const Header = () => {
                    const size = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(
                        grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2___default.a
                    )
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            background: 'white',
                            height: 'xxsmall',
                            direction: 'row',
                            width: 'full',
                            align: 'center',
                            justify: 'center',
                            pad: size === 'large' ? 'medium' : 'none',
                            border: {
                                color: 'light-4',
                                size: '0.5px',
                                side: 'bottom',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                            {
                                pad: {
                                    horizontal: 'large',
                                },
                                width: 'xlarge',
                                direction: 'row',
                                align: 'center',
                                justify: 'between',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 39,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 46,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        plain: true,
                                        label: __jsx(
                                            _Logo__WEBPACK_IMPORTED_MODULE_4__[
                                                'default'
                                            ],
                                            {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 47,
                                                },
                                                __self: undefined,
                                            },
                                            'Tottem'
                                        ),
                                        href: '/',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 47,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 49,
                                    },
                                    __self: undefined,
                                },
                                __jsx(ButtonCTA, {
                                    label: "What's Tottem?",
                                    plain: true,
                                    color: 'dark-2',
                                    href: '/',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50,
                                    },
                                    __self: undefined,
                                })
                            )
                        )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Header

                /***/
            },

        /***/ './src/components/Views/ItemList.tsx':
            /*!*******************************************!*\
  !*** ./src/components/Views/ItemList.tsx ***!
  \*******************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/contexts/ResponsiveContext/ResponsiveContext */ 'grommet/contexts/ResponsiveContext/ResponsiveContext'
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var _Cards_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../Cards/Card */ './src/components/Cards/Card.tsx'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_4__
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/ItemList.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement

                const imageShapes = {
                    album: 'square',
                    book: 'rectangle',
                    movie: 'rectangle',
                    paper: 'square',
                    people: 'circle',
                    podcast: 'square',
                    video: 'square',
                }
                const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a
                )`
    ::-webkit-scrollbar {
        display: none;
    }
`

                const ItemList = props => {
                    const size = Object(
                        react__WEBPACK_IMPORTED_MODULE_0__['useContext']
                    )(
                        grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_2___default.a
                    )
                    const isMobile = size === 'small'
                    return __jsx(
                        StyledBox,
                        {
                            responsive: false,
                            direction: 'row',
                            wrap: !isMobile,
                            pad: {
                                horizontal: 'medium',
                                bottom: isMobile ? 'medium' : 'none',
                            },
                            gap: isMobile ? 'large' : 'none',
                            justify: 'start',
                            align: 'start',
                            overflow: {
                                horizontal: isMobile ? 'auto' : 'visible',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 28,
                            },
                            __self: undefined,
                        },
                        props.items.map(item => {
                            return __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                {
                                    basis: isMobile ? 'none' : '25%',
                                    align: 'center',
                                    pad: {
                                        top: 'large',
                                    },
                                    key: item.title.toString(),
                                    width: {
                                        min: isMobile
                                            ? _Cards_Card__WEBPACK_IMPORTED_MODULE_3__[
                                                  'CardSize'
                                              ].small.width
                                            : _Cards_Card__WEBPACK_IMPORTED_MODULE_3__[
                                                  'CardSize'
                                              ].large.width,
                                    },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    _Cards_Card__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                    ],
                                    {
                                        width: isMobile
                                            ? _Cards_Card__WEBPACK_IMPORTED_MODULE_3__[
                                                  'CardSize'
                                              ].small.width
                                            : _Cards_Card__WEBPACK_IMPORTED_MODULE_3__[
                                                  'CardSize'
                                              ].large.width,
                                        item: item,
                                        small: isMobile,
                                        imageShape: imageShapes[item.type],
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 51,
                                        },
                                        __self: undefined,
                                    }
                                )
                            )
                        })
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = ItemList

                /***/
            },

        /***/ './src/components/Views/Nav.tsx':
            /*!**************************************!*\
  !*** ./src/components/Views/Nav.tsx ***!
  \**************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime-corejs2/helpers/esm/extends */ './node_modules/@babel/runtime-corejs2/helpers/esm/extends.js'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Heading/Heading */ 'grommet/components/Heading/Heading'
                )
                /* harmony import */ var grommet_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! grommet/contexts/ResponsiveContext/ResponsiveContext */ 'grommet/contexts/ResponsiveContext/ResponsiveContext'
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! grommet/components/Text/Text */ 'grommet/components/Text/Text'
                )
                /* harmony import */ var grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_5__
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_6__
                )
                /* harmony import */ var _PictureProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ../PictureProfile */ './src/components/PictureProfile.tsx'
                )
                /* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ../Social */ './src/components/Social.tsx'
                )

                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/Nav.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement

                const Label = styled_components__WEBPACK_IMPORTED_MODULE_6___default
                    .a.div`
    color: #777777;
    box-shadow: rgb(217, 217, 217) 0px 0px 0px 1px;
    border-radius: 40px;
    padding: 0px 8px 0px 8px;
    font-weight: 500;
    margin: 0px;
    font-size: 12px;
    height: fit-content;
    width: fit-content;
`

                const ProfileDescription = props => {
                    const size = Object(
                        react__WEBPACK_IMPORTED_MODULE_5__['useContext']
                    )(
                        grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_3___default.a
                    )
                    const isMobile = size === 'small'

                    const Biography = __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                            width: 'large',
                            margin: {
                                bottom: isMobile ? 'medium' : 'none',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default.a,
                            {
                                size: isMobile ? 'small' : 'medium',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26,
                                },
                                __self: undefined,
                            },
                            props.biography
                        )
                    )

                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                        {
                            pad: {
                                horizontal: 'large',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                            {
                                direction: 'row',
                                justify: 'start',
                                margin: {
                                    bottom: 'large',
                                },
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                {
                                    margin: {
                                        right: 'large',
                                    },
                                    flex: false,
                                    responsive: false,
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    _PictureProfile__WEBPACK_IMPORTED_MODULE_7__[
                                        'default'
                                    ],
                                    {
                                        size: size,
                                        imageUrl: props.pictureUrl,
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 38,
                                        },
                                        __self: undefined,
                                    }
                                )
                            ),
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                {
                                    width: 'full',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 40,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                    {
                                        direction: 'row',
                                        align: 'start',
                                        justify: 'between',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41,
                                        },
                                        __self: undefined,
                                    },
                                    __jsx(
                                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                        {
                                            direction: 'row-responsive',
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 42,
                                            },
                                            __self: undefined,
                                        },
                                        __jsx(
                                            grommet_components_Heading_Heading__WEBPACK_IMPORTED_MODULE_2___default.a,
                                            {
                                                level: 1,
                                                size: 'large',
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 43,
                                                },
                                                __self: undefined,
                                            },
                                            props.firstname
                                        ),
                                        props.label &&
                                            __jsx(
                                                Label,
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 46,
                                                    },
                                                    __self: undefined,
                                                },
                                                props.label
                                            )
                                    ),
                                    __jsx(
                                        _Social__WEBPACK_IMPORTED_MODULE_8__[
                                            'default'
                                        ],
                                        Object(
                                            _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                                'default'
                                            ]
                                        )({}, props.social, {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 48,
                                            },
                                            __self: undefined,
                                        })
                                    )
                                ),
                                !isMobile && Biography
                            )
                        ),
                        isMobile && Biography
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = ProfileDescription

                /***/
            },

        /***/ './src/components/Views/ProfileContent.tsx':
            /*!*************************************************!*\
  !*** ./src/components/Views/ProfileContent.tsx ***!
  \*************************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/contexts/ResponsiveContext/ResponsiveContext */ 'grommet/contexts/ResponsiveContext/ResponsiveContext'
                )
                /* harmony import */ var grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Tab/Tab */ 'grommet/components/Tab/Tab'
                )
                /* harmony import */ var grommet_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var grommet_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! grommet/components/Tabs/Tabs */ 'grommet/components/Tabs/Tabs'
                )
                /* harmony import */ var grommet_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_4__
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react-ga */ 'react-ga'
                )
                /* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    react_ga__WEBPACK_IMPORTED_MODULE_5__
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! styled-components */ 'styled-components'
                )
                /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
                    styled_components__WEBPACK_IMPORTED_MODULE_6__
                )
                /* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./Section */ './src/components/Views/Section.tsx'
                )
                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/ProfileContent.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement

                const TabTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default
                    .a.span`
    font-size: 16px;
    color: ${props => (!props.isActive ? '#333333' : '#D87551')};
    @media screen and (max-width: 812px) {
        font-size: 14px;
    }
`

                /* Hook allowing to keep tab updated with query parameters
   We probably should React Router to do it properly in order to 
   conserve history & state.

   - If no query parameter provided the first section is selected by default
   - Query parameters named "section" is filled with current sectionId when new tab 
    is clicked
*/
                function trackChangeTab() {
                    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize(
                        'UA-149517534-1'
                    )
                    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.event({
                        category: 'Section',
                        action: 'Click on change section',
                    })
                }

                function useTab(username, sortedSections) {
                    // const location = useLocation()
                    // const history = useHistory()
                    // const params = new URLSearchParams(location.search)
                    const activeSectionId = undefined
                    const activeSessionIndex = sortedSections.findIndex(
                        x => x.id === activeSectionId
                    )
                    const { 0: activeTab, 1: setActiveTab } = Object(
                        react__WEBPACK_IMPORTED_MODULE_4__['useState']
                    )(activeSessionIndex !== -1 ? activeSessionIndex : 0)

                    const setTab = args => {
                        setActiveTab(args) // history.replace(`/${username}?section=${sortedSections[args].id}`)

                        trackChangeTab()
                    }

                    return {
                        activeTab,
                        setTab,
                    }
                }

                const ProfileContent = props => {
                    const size = Object(
                        react__WEBPACK_IMPORTED_MODULE_4__['useContext']
                    )(
                        grommet_contexts_ResponsiveContext_ResponsiveContext__WEBPACK_IMPORTED_MODULE_1___default.a
                    )
                    const sortedSections = props.sections.sort(
                        (a, b) => a.index - b.index
                    )
                    const { activeTab, setTab } = useTab(
                        props.username,
                        sortedSections
                    )
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_0___default.a,
                        {
                            margin: {
                                top: 'small',
                            },
                            pad: {
                                horizontal: size === 'small' ? 'none' : 'large',
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3___default.a,
                            {
                                justify: 'start',
                                onActive: setTab,
                                flex: false,
                                activeIndex: activeTab,
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76,
                                },
                                __self: undefined,
                            },
                            sortedSections.map((section, index) => {
                                return __jsx(
                                    grommet_components_Tab_Tab__WEBPACK_IMPORTED_MODULE_2___default.a,
                                    {
                                        key: section.id,
                                        title:
                                            props.sections.length > 1 &&
                                            __jsx(
                                                TabTitle,
                                                {
                                                    isActive:
                                                        activeTab === index,
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 88,
                                                    },
                                                    __self: undefined,
                                                },
                                                section.name
                                            ),
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 84,
                                        },
                                        __self: undefined,
                                    },
                                    __jsx(
                                        _Section__WEBPACK_IMPORTED_MODULE_7__[
                                            'default'
                                        ],
                                        {
                                            collections: section.collections,
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 94,
                                            },
                                            __self: undefined,
                                        }
                                    )
                                )
                            })
                        )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = ProfileContent

                /***/
            },

        /***/ './src/components/Views/Section.tsx':
            /*!******************************************!*\
  !*** ./src/components/Views/Section.tsx ***!
  \******************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime-corejs2/helpers/esm/extends */ './node_modules/@babel/runtime-corejs2/helpers/esm/extends.js'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./Collection */ './src/components/Views/Collection.tsx'
                )

                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/components/Views/Section.tsx'
                var __jsx =
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement

                const Section = props => {
                    return __jsx(
                        grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_2___default.a,
                        {
                            direction: 'column',
                            fill: true,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12,
                            },
                            __self: undefined,
                        },
                        props.collections
                            .sort((a, b) => b.date.getTime() - a.date.getTime())
                            .filter(x => x.items)
                            .map(collection => {
                                return __jsx(
                                    _Collection__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                    ],
                                    Object(
                                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                            'default'
                                        ]
                                    )(
                                        {
                                            key: collection.name,
                                        },
                                        collection,
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 17,
                                            },
                                            __self: undefined,
                                        }
                                    )
                                )
                            })
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Section

                /***/
            },

        /***/ './src/data/vincent/collections.tsx':
            /*!******************************************!*\
  !*** ./src/data/vincent/collections.tsx ***!
  \******************************************/
            /*! exports provided: collections, default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'collections',
                    function() {
                        return collections
                    }
                )
                /* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./items */ './src/data/vincent/items.tsx'
                )

                const keyBy = __webpack_require__(
                    /*! lodash.groupby */ 'lodash.groupby'
                )

                const itemsByCollection = keyBy(
                    _items__WEBPACK_IMPORTED_MODULE_0__['default'],
                    x => x.collectionId
                )
                const collections = [
                    {
                        id: '11',
                        sectionId: '1',
                        date: new Date('2019-10-01T12:00:00'),
                        name:
                            "**Essais et biographies** qui revisitent l'entreprise et l'économie 🕴",
                        items: itemsByCollection['11'],
                    },
                    {
                        id: '16',
                        sectionId: '1',
                        date: new Date('2019-10-01T12:00:00'),
                        name:
                            "Manipulation de masses, destruction de l'attention : ce qui m'a poussé à créer **Tottem** 🤯",
                        items: itemsByCollection['16'],
                        detail:
                            "Nombreuses références pour découvrir les effets collatéraux de l'utilisation massive des algorithmes de \
            recommendations. Système de gratification aliénant, maximisation des clics et des vues en ignorant nos valeurs, crise du désir & manipulation de masse qui affecte nos démocraties...",
                    },
                    {
                        id: '15',
                        sectionId: '1',
                        date: new Date('2019-10-01T12:00:00'),
                        name: '**Podcasts,** everyday',
                        items: itemsByCollection['15'],
                    },
                    {
                        id: '14',
                        sectionId: '1',
                        date: new Date('2019-10-01T12:00:00'),
                        name: '**Influenceurs** (et gouroux) ! 🙏',
                        items: itemsByCollection['14'],
                    },
                    {
                        id: '13',
                        sectionId: '2',
                        date: new Date('2019-10-01T12:00:00'),
                        name: '**Tech papers** worth reading',
                        items: itemsByCollection['13'],
                    },
                    {
                        id: '17',
                        sectionId: '2',
                        date: new Date('2019-10-01T12:00:00'),
                        name: '**Tools**, productivity obsessed 🍿',
                        items: itemsByCollection['17'],
                    },
                    {
                        id: '10',
                        sectionId: '3',
                        date: new Date('2019-10-01T12:00:00'),
                        name: '**Albums électroniques** sur _repeat_ 👌',
                        items: itemsByCollection['10'],
                    },
                    {
                        id: '18',
                        sectionId: '3',
                        date: new Date('2019-10-01T12:00:00'),
                        name: 'Albums **Instrumentaux** 💎',
                        items: itemsByCollection['18'],
                    },
                    {
                        id: '19',
                        sectionId: '3',
                        date: new Date('2019-10-01T12:00:00'),
                        name: 'Old school & **indémodables** 🎸',
                        items: itemsByCollection['19'],
                    },
                ]
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = collections

                /***/
            },

        /***/ './src/data/vincent/items.tsx':
            /*!************************************!*\
  !*** ./src/data/vincent/items.tsx ***!
  \************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                const items = [
                    // Musique
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Jon Hopkins',
                        imageUrl: '/images/albums/hopkins.jpg',
                        title: 'Immunity',
                        productUrl:
                            'https://open.spotify.com/album/1rxWlYQcH945S3jpIMYR35?si=FgAw2EPLTPaMebU-ePWw1Q',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Moderat',
                        imageUrl: '/images/albums/moderat.jpg',
                        title: 'II',
                        productUrl:
                            'https://open.spotify.com/album/4HDUXAmHj9KEs9wP1icwcy?si=BICxfcyhRLmKDM_-mIUVog',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Flavien Berger',
                        imageUrl: 'https://f4.bcbits.com/img/0016871601_10.jpg',
                        title: 'Leviathan',
                        productUrl:
                            'https://open.spotify.com/album/3U30u1gMs6hD2Yxv1dWwK3?si=ek3CW7MYTpejVBypUW6dTw',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Stephan Bodzin',
                        imageUrl:
                            'https://static.fnac-static.com/multimedia/Images/FR/NR/b5/a5/6c/7120309/1540-1/tsp20150514104224/Powers-of-ten.jpg',
                        title: 'Powers of ten',
                        productUrl:
                            'https://open.spotify.com/album/5zj0qH4lKPQOotmWkE3ECb?si=Gx2WLeVKQpiMRwSiGwHDjA',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Four Tet',
                        imageUrl:
                            'https://m.media-amazon.com/images/I/81tWFxE01AL._SS500_.jpg',
                        title: 'There Is Love In You',
                        productUrl:
                            'https://open.spotify.com/album/6XoxeeeyZgzqUMzUBUSDG9?si=_pAYEgiYQPius7cVlSAKLw',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Weval',
                        imageUrl:
                            'https://f4.bcbits.com/img/a3429340377_10.jpg',
                        title: 'Half Age',
                        productUrl:
                            'https://open.spotify.com/album/1hDdP4atpaoKA5OE8ETG1u?si=g8dnNfTXQPGYoN-vH2uV3g',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Bicep',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/81s85pH-IiL._SY355_.jpg',
                        title: 'Bicep',
                        productUrl:
                            'https://open.spotify.com/album/4psDRFbIlUM1KUb1omccXo?si=3SsovW_FTAu-V4ejrUYoDQ',
                    },
                    {
                        collectionId: '10',
                        type: 'album',
                        author: 'Jamie XX',
                        imageUrl:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jamie_xx_-_In_Colour.png/220px-Jamie_xx_-_In_Colour.png',
                        title: 'In Colour',
                        productUrl:
                            'https://open.spotify.com/album/0AVPusXNzK1jWwefBiPJ5I?si=0RRGuPCTT1evQHP_O_HviA',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Gidge',
                        imageUrl:
                            'https://img.discogs.com/FwHDVpEcM506fx7TKHVnKfrLWNY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6014472-1413575520-7270.jpeg.jpg',
                        title: 'Autumn Bells',
                        productUrl:
                            'https://open.spotify.com/album/0GGP9n1WFDvKLPo8ewdHFi?si=YWxN7-eORPyxnvJ6q3JOew',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Nils Frahm',
                        imageUrl: '/images/albums/melody.jpg',
                        title: 'All Melody',
                        productUrl:
                            'https://open.spotify.com/album/7FUIQIDxNu0F8iH98irz7N?si=a-3uKZcpRj6IuMmeQ92Gyw',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Grandbrothers',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/81GuW3d-FQL._SY355_.jpg',
                        title: 'All Melody',
                        productUrl:
                            'https://open.spotify.com/album/40NdyNNK6vu96QBK1y7ZCx?si=nkL-Ns-STo-BOyV1DUg_BQ',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Nicolas Jaar',
                        imageUrl:
                            'https://m.media-amazon.com/images/I/81ZZVGd2b2L._SS500_.jpg',
                        title: 'Space Is Only Noise',
                        productUrl:
                            'https://open.spotify.com/album/0tUJcqDuXHNkaPKLN0lQhT?si=r7ynmREQQMa3bvYc6MVYCQ',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Nils Frahm',
                        imageUrl: '/images/albums/spaces.jpg',
                        title: 'Spaces',
                        productUrl:
                            'https://open.spotify.com/album/0DFbQjp468sMiIMTrZdr5w?si=jr2rEhf6Rbe10qOvoYFRQA',
                    },
                    {
                        collectionId: '18',
                        type: 'album',
                        author: 'Weval',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/B1DeclGCTkS._SL1500_.jpg',
                        title: 'The Weight',
                        productUrl:
                            'https://open.spotify.com/artist/12tZvy2xFpWSkuJ3FsfisZ?si=t5ycKNZ8Sby_CSfxQBEv-w',
                    },
                    {
                        collectionId: '19',
                        type: 'album',
                        author: 'Derek and the Dominos',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/B1DeclGCTkS._SL1500_.jpg',
                        title: 'Layla and other assorted love songs',
                        productUrl:
                            'https://open.spotify.com/album/5iIWnMgvSM8uEBwXKsPcXM?si=iQ0b3iIxT6CZGNEZ_Lofxw',
                    },
                    {
                        collectionId: '19',
                        type: 'album',
                        author: 'Dire Straits',
                        imageUrl:
                            'https://m.media-amazon.com/images/I/81ULJ-YpfhL._SS500_.jpg',
                        title: 'On the Night',
                        productUrl:
                            'https://open.spotify.com/album/3tybckgVqaIsR5oGnfWKpA?si=vRk9EOh1TZ2TqWMCtU1NmA',
                    },
                    {
                        collectionId: '19',
                        type: 'album',
                        author: 'Oscar Peterson',
                        imageUrl:
                            'https://m.media-amazon.com/images/I/61Fs71KoQRL._SS500_.jpg',
                        title: 'Verve Ultimate Cool',
                        productUrl:
                            'https://open.spotify.com/album/2XXmrVR8YowvH8Z1c6MO0i?si=mO4TrqHmQ5ilsaNnfik_bw',
                    },
                    {
                        collectionId: '19',
                        type: 'album',
                        author: 'Simon & Garfunkel',
                        imageUrl:
                            'https://m.media-amazon.com/images/I/71rKkKb0yML._SS500_.jpg',
                        title: 'Sounds Of Silence',
                        productUrl:
                            'https://open.spotify.com/album/07RAGILF28QweYQSZasr5k?si=9EOYJnHlTTeMjQ-B-Bx8rg',
                    },
                    {
                        collectionId: '19',
                        type: 'album',
                        author: 'Nina Simone',
                        imageUrl:
                            'https://media1.jpc.de/image/w412/front/0/0602498886984.jpg',
                        title: 'Let It All Out',
                        productUrl:
                            'https://open.spotify.com/album/4bGiPtwVEKcXbXs7oKCMqD?si=p6LwVKZZRmKZxKL7tUMwOg',
                    }, // GENERAL
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Yvon Chouinard',
                        imageUrl: '/images/books/patagonia.jpg',
                        productUrl:
                            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
                        title: 'Let my people go Surfing',
                    },
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Frederic Laloux',
                        imageUrl: '/images/books/reinventing.jpg',
                        productUrl: '',
                        title: 'Reinventing Organizations',
                    },
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Barry Schwartz',
                        imageUrl: '/images/books/paradox.jpg',
                        productUrl: '',
                        title: 'The Paradox of Choice',
                    },
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Matthiew Crawford',
                        imageUrl: '/images/books/eloge.jpg',
                        productUrl: '',
                        title: `L'égole du carburateur`,
                    },
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Cennydd Bowles',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
                        title: `Future Ethics`,
                    },
                    {
                        collectionId: '11',
                        type: 'book',
                        author: 'Jason Fried',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/81nvF-p7odL.jpg',
                        productUrl: 'https://www.amazon.fr/dp/B07FQYGWCS',
                        title: `It Doesn't Have to Be Crazy at Work`,
                    },
                    {
                        collectionId: '12',
                        type: 'movie',
                        author: 'Stanley Kubrick',
                        imageUrl: '/images/movies/pathsofglory.jpg',
                        productUrl:
                            'https://www.amazon.fr/Let-People-Surfing-Education-Businessman-Including/dp/0143109677',
                        title: 'Les sentiers de la gloire',
                    },
                    {
                        collectionId: '12',
                        type: 'movie',
                        author: 'Sergio Leone',
                        imageUrl: '/images/movies/goodbadugly.jpg',
                        productUrl: '',
                        title: 'Le bon, la brute et le truand',
                    },
                    {
                        collectionId: '12',
                        type: 'movie',
                        author: 'Peter Jackson',
                        imageUrl: '/images/movies/seigneur.jpg',
                        productUrl: '',
                        title: 'Le seigneur des anneaux : Le retour du roi',
                    },
                    {
                        collectionId: '12',
                        type: 'movie',
                        author: 'Christopher Nolan',
                        imageUrl: '/images/movies/interstellar.jpg',
                        productUrl: '',
                        title: 'Interstellar',
                    },
                    {
                        collectionId: '16',
                        type: 'paper',
                        author: 'Tristan Harris',
                        imageUrl: '/images/articles/humantec.jpg',
                        title:
                            'Downgrading technology should be more challenged',
                        productUrl:
                            'https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3',
                    },
                    {
                        collectionId: '16',
                        type: 'video',
                        author: 'Tristan Harris',
                        imageUrl: '/images/artworks/video-placeholder.svg',
                        title:
                            'How a handful of tech companies control billions of minds every day ',
                        productUrl:
                            'https://www.youtube.com/watch?v=C74amJRp730',
                    },
                    {
                        collectionId: '16',
                        type: 'paper',
                        author: 'Joe Edelman',
                        imageUrl: '/images/articles/clickgoal.jpg',
                        title: 'Is Anything worth Maximizing',
                        productUrl:
                            'https://medium.com/what-to-build/is-anything-worth-maximizing-d11e648eb56f',
                    },
                    {
                        collectionId: '16',
                        type: 'podcast',
                        author: '',
                        imageUrl: '/images/podcasts/undivided.jpg',
                        title: 'Your Individed Attention',
                        productUrl: '',
                    },
                    {
                        collectionId: '16',
                        type: 'paper',
                        author: 'Tristan Harris',
                        imageUrl: '/images/artworks/video-placeholder.svg',
                        title: 'It’s Time to Redesign the Attention Economy',
                        productUrl:
                            'https://medium.com/thrive-global/its-time-to-redesign-the-attention-economy-f9215a2210be',
                    },
                    {
                        collectionId: '16',
                        type: 'movie',
                        author: 'Karim Amer & Jehane Noujaim',
                        imageUrl:
                            'http://fr.web.img6.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/07/16/09/30/5358083.jpg',
                        title: "The Great Hack : L'Affaire Cambridge Analytica",
                        productUrl:
                            'https://www.youtube.com/watch?v=iX8GxLP1FHo',
                    },
                    {
                        collectionId: '16',
                        type: 'book',
                        author: 'Cennydd Bowles',
                        imageUrl:
                            'https://images-na.ssl-images-amazon.com/images/I/31W0m1isq%2BL._SX322_BO1,204,203,200_.jpg',
                        productUrl:
                            'https://www.amazon.com/Future-Ethics-Cennydd-Bowles/dp/1999601912',
                        title: `Future Ethics`,
                    },
                    {
                        collectionId: '16',
                        type: 'movie',
                        author: 'Thomas Huchon',
                        imageUrl:
                            'https://s3-eu-west-1.amazonaws.com/boutiquestorage.arte.tv/prod/15686_vod_thumb_114502.jpg',
                        productUrl:
                            'https://boutique.arte.tv/detail/Comment_trump_manipule_Amerique',
                        title: `Comment Trump a manipulé l'Amérique`,
                    },
                    {
                        collectionId: '16',
                        type: 'video',
                        author: 'Bernard Stiegler',
                        imageUrl: '/images/artworks/video-placeholder.svg',
                        productUrl:
                            'https://www.youtube.com/watch?v=nrxR2jmaycY',
                        title: `Crise du désir`,
                    },
                    {
                        collectionId: '13',
                        type: 'paper',
                        author: 'Maxime Beauchemin',
                        imageUrl: '/images/articles/data-func.jpg',
                        title:
                            'Functional Data Engineering — a modern paradigm for batch data processing',
                        productUrl:
                            'https://medium.com/@maximebeauchemin/functional-data-engineering-a-modern-paradigm-for-batch-data-processing-2327ec32c42a',
                    },
                    {
                        collectionId: '13',
                        type: 'paper',
                        author: 'The Syndicate Post',
                        imageUrl: '/images/articles/introvert.jpg',
                        title:
                            'Introverts: Inside The Mind of An Introverted Personality',
                        productUrl:
                            'https://medium.com/syndicate-post/introverts-your-guide-into-the-world-of-an-introverted-personality-98ff89703a1e',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Center for Humane Technology',
                        imageUrl: '/images/people/tristan.jpg',
                        title: 'Tristan Harris',
                        productUrl: '',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Ars Industrialis',
                        imageUrl: '/images/people/stiegler.jpg',
                        title: 'Bernard Stiegler',
                        productUrl: '',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Patagonia Founder',
                        imageUrl:
                            'https://www.executivegrapevine.com/uploads/articles/Yvon_Chouinard.jpg',
                        title: 'Yvon Chouinard',
                        productUrl:
                            'https://fr.wikipedia.org/wiki/Yvon_Chouinard',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Artist',
                        imageUrl:
                            'https://guitar.com/wp-content/uploads/2019/08/young-mark-knopfler-black-and-white@1400x1050.jpg',
                        title: 'Mark Knopfler',
                        productUrl:
                            'https://open.spotify.com/artist/0FI0kxP0BWurTz8cB8BBug?si=CsfNbe_ZSJmG878dqvAaoA',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Author',
                        imageUrl: '/images/people/damasio.jpg',
                        title: 'Alain Damasio',
                        productUrl: '',
                    },
                    {
                        collectionId: '14',
                        type: 'people',
                        author: 'Basecamp Founder',
                        imageUrl:
                            'https://bridge24.com/wp-content/uploads/2017/06/jason-fried-2017.png',
                        title: 'Jason Fried',
                        productUrl: '',
                    },
                ]
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = items

                /***/
            },

        /***/ './src/data/vincent/profile.tsx':
            /*!**************************************!*\
  !*** ./src/data/vincent/profile.tsx ***!
  \**************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                const profile = {
                    firstname: 'Vincent P.',
                    pictureUrl: '/images/profiles/vincent.png',
                    biography: `Hi ! My primary job is software engineer. 
    As soon as I am building things, I can't count hours anymore !   
    I try to figure out how technology can better support well-being and global challenges. 
    Here, I share only what get me inspired and give me energy.`,
                    social: {
                        github: 'https://github.com/poulainv',
                        linkedin: 'https://www.linkedin.com/in/vincentpoulain/',
                        mail: 'vincent.poulain2@gmail.com',
                    },
                }
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = profile

                /***/
            },

        /***/ './src/data/vincent/sections.tsx':
            /*!***************************************!*\
  !*** ./src/data/vincent/sections.tsx ***!
  \***************************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./collections */ './src/data/vincent/collections.tsx'
                )

                const keyBy = __webpack_require__(
                    /*! lodash.groupby */ 'lodash.groupby'
                )

                const collectionsBySection = keyBy(
                    _collections__WEBPACK_IMPORTED_MODULE_0__['default'],
                    x => x.sectionId
                )
                const sections = [
                    {
                        id: '1',
                        collections: collectionsBySection['1'],
                        name: 'Société',
                        index: 0,
                    },
                    {
                        id: '2',
                        collections: collectionsBySection['2'],
                        name: 'Tech',
                        index: 1,
                    },
                    {
                        id: '3',
                        collections: collectionsBySection['3'],
                        name: 'Musique',
                        index: 2,
                    },
                ]
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = sections

                /***/
            },

        /***/ './src/pages/profile.tsx':
            /*!*******************************!*\
  !*** ./src/pages/profile.tsx ***!
  \*******************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! @babel/runtime-corejs2/helpers/esm/extends */ './node_modules/@babel/runtime-corejs2/helpers/esm/extends.js'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/components/Box/Box */ 'grommet/components/Box/Box'
                )
                /* harmony import */ var grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var grommet_components_Grommet_Grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! grommet/components/Grommet/Grommet */ 'grommet/components/Grommet/Grommet'
                )
                /* harmony import */ var grommet_components_Grommet_Grommet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_components_Grommet_Grommet__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ 'react'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_3__
                )
                /* harmony import */ var _components_Views_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ../components/Views/Header */ './src/components/Views/Header.tsx'
                )
                /* harmony import */ var _components_Views_ProfileContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ../components/Views/ProfileContent */ './src/components/Views/ProfileContent.tsx'
                )
                /* harmony import */ var _components_Views_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ../components/Views/Nav */ './src/components/Views/Nav.tsx'
                )
                /* harmony import */ var _components_Views_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ../components/Views/Footer */ './src/components/Views/Footer.tsx'
                )
                /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! next/router */ 'next/router'
                )
                /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
                    next_router__WEBPACK_IMPORTED_MODULE_8__
                )
                /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ../theme */ './src/theme.tsx'
                )

                var _jsxFileName =
                    '/Users/vincentpoulain/Development/quiet/src/pages/profile.tsx'
                var __jsx = react__WEBPACK_IMPORTED_MODULE_3__['createElement']

                const Profile = props => {
                    // Fetch data
                    const userProfile = __webpack_require__(
                        /*! ./../data/vincent/profile */ './src/data/vincent/profile.tsx'
                    ).default

                    const sections = __webpack_require__(
                        /*! ../data/vincent/sections */ './src/data/vincent/sections.tsx'
                    ).default

                    const router = Object(
                        next_router__WEBPACK_IMPORTED_MODULE_8__['useRouter']
                    )()
                    return __jsx(
                        grommet_components_Grommet_Grommet__WEBPACK_IMPORTED_MODULE_2___default.a,
                        {
                            theme:
                                _theme__WEBPACK_IMPORTED_MODULE_9__['default'],
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22,
                            },
                            __self: undefined,
                        },
                        __jsx(
                            grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                            {
                                align: 'center',
                                background: 'light-1',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23,
                                },
                                __self: undefined,
                            },
                            __jsx(
                                _components_Views_Header__WEBPACK_IMPORTED_MODULE_4__[
                                    'default'
                                ],
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24,
                                    },
                                    __self: undefined,
                                }
                            ),
                            __jsx(
                                grommet_components_Box_Box__WEBPACK_IMPORTED_MODULE_1___default.a,
                                {
                                    margin: {
                                        top: 'large',
                                    },
                                    width: 'xlarge',
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25,
                                    },
                                    __self: undefined,
                                },
                                __jsx(
                                    _components_Views_Nav__WEBPACK_IMPORTED_MODULE_6__[
                                        'default'
                                    ],
                                    Object(
                                        _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                            'default'
                                        ]
                                    )({}, userProfile, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 26,
                                        },
                                        __self: undefined,
                                    })
                                ),
                                __jsx(
                                    _components_Views_ProfileContent__WEBPACK_IMPORTED_MODULE_5__[
                                        'default'
                                    ],
                                    {
                                        sections: sections,
                                        username: 'vincent',
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27,
                                        },
                                        __self: undefined,
                                    }
                                ),
                                __jsx(
                                    _components_Views_Footer__WEBPACK_IMPORTED_MODULE_7__[
                                        'Footer'
                                    ],
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28,
                                        },
                                        __self: undefined,
                                    }
                                )
                            )
                        )
                    )
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Profile

                /***/
            },

        /***/ './src/theme.tsx':
            /*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
            /*! exports provided: default, brand50, brand100, brand200, brand300, brand400, brand500, brand600, brand700, brand800, brand900, brandA100, brandA200, brandA400, brandA700, accent50, accent100, accent200, accent300, accent400, accent500, accent600, accent700, accent800, accent900, accentA100, accentA200, accentA400, accentA700 */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand50',
                    function() {
                        return brand50
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand100',
                    function() {
                        return brand100
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand200',
                    function() {
                        return brand200
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand300',
                    function() {
                        return brand300
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand400',
                    function() {
                        return brand400
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand500',
                    function() {
                        return brand500
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand600',
                    function() {
                        return brand600
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand700',
                    function() {
                        return brand700
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand800',
                    function() {
                        return brand800
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brand900',
                    function() {
                        return brand900
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brandA100',
                    function() {
                        return brandA100
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brandA200',
                    function() {
                        return brandA200
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brandA400',
                    function() {
                        return brandA400
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'brandA700',
                    function() {
                        return brandA700
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent50',
                    function() {
                        return accent50
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent100',
                    function() {
                        return accent100
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent200',
                    function() {
                        return accent200
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent300',
                    function() {
                        return accent300
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent400',
                    function() {
                        return accent400
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent500',
                    function() {
                        return accent500
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent600',
                    function() {
                        return accent600
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent700',
                    function() {
                        return accent700
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent800',
                    function() {
                        return accent800
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accent900',
                    function() {
                        return accent900
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accentA100',
                    function() {
                        return accentA100
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accentA200',
                    function() {
                        return accentA200
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accentA400',
                    function() {
                        return accentA400
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'accentA700',
                    function() {
                        return accentA700
                    }
                )
                /* harmony import */ var grommet_themes_grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! grommet/themes/grommet */ 'grommet/themes/grommet'
                )
                /* harmony import */ var grommet_themes_grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_themes_grommet__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! grommet/utils */ 'grommet/utils'
                )
                /* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    grommet_utils__WEBPACK_IMPORTED_MODULE_1__
                )

                const theme = Object(
                    grommet_utils__WEBPACK_IMPORTED_MODULE_1__['deepMerge']
                )(
                    grommet_themes_grommet__WEBPACK_IMPORTED_MODULE_0___default.a,
                    {
                        tab: {
                            border: {
                                color: 'dark-2',
                                active: {
                                    color: 'brand',
                                },
                            },
                        },
                        tabs: {
                            header: {
                                extend: {
                                    'overflow-x': 'auto',
                                    'flex-wrap': 'nowrap',
                                    '::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                },
                            },
                        },
                        text: {
                            medium: {
                                size: '16px',
                            },
                        },
                        collapsible: {
                            minSpeed: 350,
                        },
                        icon: {
                            size: {
                                small: '15px',
                            },
                        },
                        button: {
                            padding: {
                                vertical: '5px',
                                horizontal: '5px',
                            },
                            primary: {
                                color: 'brand',
                            },
                            color: {
                                dark: 'accent-1',
                                light: 'accent-1',
                            },
                            border: {
                                width: '0px',
                                radius: '10px',
                                color: {
                                    dark: 'white',
                                    light: 'white',
                                },
                            },
                            extend: {
                                'font-weight': '500',
                                'font-size': '16px',
                            },
                        },
                        // Increase maxWidth to avoid too small paragraph
                        paragraph: {
                            small: {
                                maxWidth: '380px',
                            },
                            medium: {
                                maxWidth: '380px',
                            },
                        },
                        global: {
                            focus: {
                                border: {
                                    color: 'transparent',
                                },
                            },
                            colors: {
                                brand: '#D87551',
                                'accent-1': '#6FAA9C',
                                'light-1': 'rgb(250, 250, 250)',
                            },
                            elevation: {
                                light: {
                                    profile: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    card: '0px 4px 4px rgba(0, 0, 0, 0.15)',
                                },
                            },
                            font: {
                                family:
                                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
                            },
                            breakpoints: {
                                small: {
                                    value: 812,
                                    edgeSize: {
                                        card: '12px',
                                    },
                                },
                            },
                            edgeSize: {
                                card: '17px',
                            },
                        },
                        heading: {
                            level: {
                                1: {
                                    font: {
                                        weight: '700',
                                    },
                                    // Firstname desktop
                                    large: {
                                        size: '28px',
                                        height: '36px',
                                    },
                                    small: {
                                        size: '16px',
                                    },
                                },
                                2: {
                                    font: {
                                        weight: '700',
                                    },
                                    // Firstname mobile
                                    large: {
                                        size: '20px',
                                        height: '24px',
                                    },
                                    small: {
                                        size: '13px',
                                    },
                                },
                                3: {
                                    font: {
                                        weight: '400',
                                    },
                                    medium: {
                                        size: '18px',
                                        height: '22px',
                                        maxWidth: '858px', // avoid collection name truncation
                                    },
                                    xsmall: {
                                        size: '14px',
                                        height: '18px',
                                    },
                                },
                                4: {
                                    font: {
                                        weight: '400',
                                    },
                                    medium: {
                                        size: '16px',
                                        height: '20px',
                                        maxWidth: '858px', // avoid collection name truncation
                                    },
                                    xsmall: {
                                        size: '12px',
                                        height: '14px',
                                    },
                                },
                            },
                        },
                    }
                )
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = theme
                const brand50 = '#eef5f3'
                const brand100 = '#d4e6e1'
                const brand200 = '#b7d5ce'
                const brand300 = '#9ac4ba'
                const brand400 = '#85b7ab'
                const brand500 = '#6faa9c'
                const brand600 = '#67a394'
                const brand700 = '#5c998a'
                const brand800 = '#529080'
                const brand900 = '#407f6e'
                const brandA100 = '#d5fff3'
                const brandA200 = '#a2ffe5'
                const brandA400 = '#6fffd7'
                const brandA700 = '#56ffd0'
                const accent50 = '#faeeea'
                const accent100 = '#f3d6cb'
                const accent200 = '#ecbaa8'
                const accent300 = '#e49e85'
                const accent400 = '#de8a6b'
                const accent500 = '#d87551'
                const accent600 = '#d46d4a'
                const accent700 = '#ce6240'
                const accent800 = '#c85837'
                const accent900 = '#bf4527'
                const accentA100 = '#fffdfc'
                const accentA200 = '#ffd3c9'
                const accentA400 = '#ffa996'
                const accentA700 = '#ff947d'

                /***/
            },

        /***/ 3:
            /*!*************************************!*\
  !*** multi ./src/pages/profile.tsx ***!
  \*************************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! /Users/vincentpoulain/Development/quiet/src/pages/profile.tsx */ './src/pages/profile.tsx'
                )

                /***/
            },

        /***/ 'grommet-icons/icons/Link':
            /*!*******************************************!*\
  !*** external "grommet-icons/icons/Link" ***!
  \*******************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet-icons/icons/Link')

                /***/
            },

        /***/ 'grommet-icons/icons/Share':
            /*!********************************************!*\
  !*** external "grommet-icons/icons/Share" ***!
  \********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet-icons/icons/Share')

                /***/
            },

        /***/ 'grommet-icons/icons/Youtube':
            /*!**********************************************!*\
  !*** external "grommet-icons/icons/Youtube" ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet-icons/icons/Youtube')

                /***/
            },

        /***/ 'grommet/components/Box/Box':
            /*!*********************************************!*\
  !*** external "grommet/components/Box/Box" ***!
  \*********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Box/Box')

                /***/
            },

        /***/ 'grommet/components/Button/Button':
            /*!***************************************************!*\
  !*** external "grommet/components/Button/Button" ***!
  \***************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Button/Button')

                /***/
            },

        /***/ 'grommet/components/Collapsible/Collapsible':
            /*!*************************************************************!*\
  !*** external "grommet/components/Collapsible/Collapsible" ***!
  \*************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Collapsible/Collapsible')

                /***/
            },

        /***/ 'grommet/components/Grommet/Grommet':
            /*!*****************************************************!*\
  !*** external "grommet/components/Grommet/Grommet" ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Grommet/Grommet')

                /***/
            },

        /***/ 'grommet/components/Heading/Heading':
            /*!*****************************************************!*\
  !*** external "grommet/components/Heading/Heading" ***!
  \*****************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Heading/Heading')

                /***/
            },

        /***/ 'grommet/components/Image/Image':
            /*!*************************************************!*\
  !*** external "grommet/components/Image/Image" ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Image/Image')

                /***/
            },

        /***/ 'grommet/components/Markdown/Markdown':
            /*!*******************************************************!*\
  !*** external "grommet/components/Markdown/Markdown" ***!
  \*******************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Markdown/Markdown')

                /***/
            },

        /***/ 'grommet/components/Stack/Stack':
            /*!*************************************************!*\
  !*** external "grommet/components/Stack/Stack" ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Stack/Stack')

                /***/
            },

        /***/ 'grommet/components/Tab/Tab':
            /*!*********************************************!*\
  !*** external "grommet/components/Tab/Tab" ***!
  \*********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Tab/Tab')

                /***/
            },

        /***/ 'grommet/components/Tabs/Tabs':
            /*!***********************************************!*\
  !*** external "grommet/components/Tabs/Tabs" ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Tabs/Tabs')

                /***/
            },

        /***/ 'grommet/components/Text/Text':
            /*!***********************************************!*\
  !*** external "grommet/components/Text/Text" ***!
  \***********************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/components/Text/Text')

                /***/
            },

        /***/ 'grommet/contexts/ResponsiveContext/ResponsiveContext':
            /*!***********************************************************************!*\
  !*** external "grommet/contexts/ResponsiveContext/ResponsiveContext" ***!
  \***********************************************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/contexts/ResponsiveContext/ResponsiveContext')

                /***/
            },

        /***/ 'grommet/themes/grommet':
            /*!*****************************************!*\
  !*** external "grommet/themes/grommet" ***!
  \*****************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/themes/grommet')

                /***/
            },

        /***/ 'grommet/utils':
            /*!********************************!*\
  !*** external "grommet/utils" ***!
  \********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('grommet/utils')

                /***/
            },

        /***/ 'lodash.groupby':
            /*!*********************************!*\
  !*** external "lodash.groupby" ***!
  \*********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('lodash.groupby')

                /***/
            },

        /***/ 'next/router':
            /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('next/router')

                /***/
            },

        /***/ react:
            /*!************************!*\
  !*** external "react" ***!
  \************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react')

                /***/
            },

        /***/ 'react-ga':
            /*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react-ga')

                /***/
            },

        /***/ 'react-truncate':
            /*!*********************************!*\
  !*** external "react-truncate" ***!
  \*********************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('react-truncate')

                /***/
            },

        /***/ 'styled-components':
            /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
            /*! no static exports found */
            /***/ function(module, exports) {
                module.exports = require('styled-components')

                /***/
            },

        /******/
    }
)
//# sourceMappingURL=profile.js.map
