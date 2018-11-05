(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.PDFLib = {})));
}(this, (function (exports) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == numberTag);
	}

	var isNumber_1 = isNumber;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return _arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	var _baseValues = baseValues;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$2 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag$1 = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag$1] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$2.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object == null ? [] : _baseValues(object, keys_1(object));
	}

	var values_1 = values;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/**
	 * The base implementation of `_.toNumber` which doesn't ensure correct
	 * conversions of binary, hexadecimal, or octal string values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 */
	function baseToNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN;
	  }
	  return +value;
	}

	var _baseToNumber = baseToNumber;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Creates a function that performs a mathematical operation on two values.
	 *
	 * @private
	 * @param {Function} operator The function to perform the operation.
	 * @param {number} [defaultValue] The value used for `undefined` arguments.
	 * @returns {Function} Returns the new mathematical operation function.
	 */
	function createMathOperation(operator, defaultValue) {
	  return function(value, other) {
	    var result;
	    if (value === undefined && other === undefined) {
	      return defaultValue;
	    }
	    if (value !== undefined) {
	      result = value;
	    }
	    if (other !== undefined) {
	      if (result === undefined) {
	        return other;
	      }
	      if (typeof value == 'string' || typeof other == 'string') {
	        value = _baseToString(value);
	        other = _baseToString(other);
	      } else {
	        value = _baseToNumber(value);
	        other = _baseToNumber(other);
	      }
	      result = operator(value, other);
	    }
	    return result;
	  };
	}

	var _createMathOperation = createMathOperation;

	/**
	 * Adds two numbers.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {number} augend The first number in an addition.
	 * @param {number} addend The second number in an addition.
	 * @returns {number} Returns the total.
	 * @example
	 *
	 * _.add(6, 4);
	 * // => 10
	 */
	var add = _createMathOperation(function(augend, addend) {
	  return augend + addend;
	}, 0);

	var add_1 = add;

	/**
	 * The base implementation of `_.sum` and `_.sumBy` without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {number} Returns the sum.
	 */
	function baseSum(array, iteratee) {
	  var result,
	      index = -1,
	      length = array.length;

	  while (++index < length) {
	    var current = iteratee(array[index]);
	    if (current !== undefined) {
	      result = result === undefined ? current : (result + current);
	    }
	  }
	  return result;
	}

	var _baseSum = baseSum;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * Computes the sum of the values in `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.4.0
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {number} Returns the sum.
	 * @example
	 *
	 * _.sum([4, 2, 8, 6]);
	 * // => 20
	 */
	function sum(array) {
	  return (array && array.length)
	    ? _baseSum(array, identity_1)
	    : 0;
	}

	var sum_1 = sum;

	/* tslint:disable no-bitwise */
	// export const writeToDebugFile = (data: any, postfix = 0) => {
	//   // eslint-disable-next-line
	//   const fs = require('fs');
	//   fs.writeFileSync(`/Users/user/Desktop/pdf-lib/debug${postfix}`, data);
	// };
	var error = function (msg) {
	    throw new Error(msg);
	};
	var sizeInBytes = function (n) { return Math.ceil(n.toString(2).length / 8); };
	/**
	 * Converts a number into its constituent bytes and returns them as
	 * a number[].
	 *
	 * Returns most significant byte as first element in array. It may be necessary
	 * to call .reverse() to get the bits in the desired order.
	 *
	 * Example:
	 *   bytesFor(0x02A41E) => [ 0b10, 0b10100100, 0b11110 ]
	 *
	 * Credit for algorithm: https://stackoverflow.com/a/1936865
	 */
	var bytesFor = function (n) {
	    var bytes = new Uint8Array(sizeInBytes(n));
	    for (var i = 1; i <= bytes.length; i++) {
	        bytes[i - 1] = n >> ((bytes.length - i) * 8);
	    }
	    return bytes;
	};
	// Arrays and TypedArrays in JS both have .reverse() methods, which would seem
	// to negate the need for this function. However, not all runtimes support this
	// method (e.g. React Native), so using this function compensates for that.
	var reverseArray = function (array) {
	    for (var i = 0; i < Math.floor(array.length / 2); i++) {
	        var leftIdx = i;
	        var rightIdx = array.length - i - 1;
	        var temp = array[i];
	        array[leftIdx] = array[rightIdx];
	        array[rightIdx] = temp;
	    }
	    return array;
	};
	var and = function () {
	    var predicates = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        predicates[_i] = arguments[_i];
	    }
	    return function () {
	        var values = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            values[_i] = arguments[_i];
	        }
	        return predicates.every(function (predicate) { return predicate.apply(void 0, values); });
	    };
	};
	var or = function () {
	    var predicates = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        predicates[_i] = arguments[_i];
	    }
	    return function () {
	        var values = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            values[_i] = arguments[_i];
	        }
	        return predicates.some(function (predicate) { return predicate.apply(void 0, values); });
	    };
	};
	var not = function (predicate) { return function () {
	    var values = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        values[_i] = arguments[_i];
	    }
	    return !predicate.apply(void 0, values);
	}; };
	var toBoolean = function (boolStr) {
	    if (boolStr === 'true')
	        return true;
	    if (boolStr === 'false')
	        return false;
	    throw new Error("\"" + boolStr + "\" cannot be converted to a boolean");
	};
	var charCode = function (charStr) {
	    if (charStr.length !== 1) {
	        throw new Error('"char" must be exactly one character long');
	    }
	    return charStr.charCodeAt(0);
	};
	var charFromCode = function (code) { return String.fromCharCode(code); };
	var addStringToBuffer = function (str, buffer) {
	    for (var i = 0; i < str.length; i += 1) {
	        buffer[i] = str.charCodeAt(i);
	    }
	    return buffer.subarray(str.length);
	};
	var arrayToString = function (arr, startAt, stopAt) {
	    if (startAt === void 0) { startAt = 0; }
	    var stopIdx = stopAt === undefined || stopAt >= arr.length ? arr.length : stopAt;
	    var str = '';
	    for (var i = startAt; i < stopIdx; i += 1) {
	        str += charFromCode(arr[i]);
	    }
	    return str;
	};
	var arrayCharAt = function (arr, idx) {
	    return String.fromCharCode(arr[idx]);
	};
	var trimArray = function (arr) {
	    var idx = 0;
	    while (String.fromCharCode(arr[idx]).match(/^[\0\t\n\f\r ]/) &&
	        idx < arr.length) {
	        idx += 1;
	    }
	    return arr.subarray(idx);
	};
	var arraysAreEqual = function (arr1, arr1Start, arr1Stop, arr2, arr2Start, arr2Stop) {
	    var arr1Length = arr1Stop - arr1Start;
	    if (arr1Length !== arr2Stop - arr2Start)
	        return false;
	    for (var i = 0; i < arr1Length; i += 1) {
	        if (arr1[arr1Start + i] !== arr2[arr2Start + i])
	            return false;
	    }
	    return true;
	};
	var arrayIndexOf = function (arr, targetStr, startFrom) {
	    if (startFrom === void 0) { startFrom = 0; }
	    var targetArr = targetStr.split('').map(function (c) { return c.charCodeAt(0); });
	    var currIdx = startFrom;
	    while (!arraysAreEqual(arr, currIdx, currIdx + targetStr.length, targetArr, 0, targetArr.length)) {
	        currIdx += 1;
	        if (currIdx >= arr.length)
	            return undefined;
	    }
	    return currIdx;
	};
	var arrayIndexOneOf = function (arr, targetStrings, startFrom) {
	    if (startFrom === void 0) { startFrom = 0; }
	    var targetArrs = targetStrings.map(function (str) { return str.split('').map(charCode); });
	    var currIdx = startFrom;
	    var match = null;
	    while (!match) {
	        currIdx += 1;
	        if (currIdx >= arr.length)
	            return undefined;
	        match = targetArrs.find(function (target) {
	            return arraysAreEqual(arr, currIdx, currIdx + target.length, target, 0, target.length);
	        });
	    }
	    return [currIdx, arrayToString(match)];
	};
	var arrayFindIndexOf = function (arr, predicate, startFrom) {
	    if (startFrom === void 0) { startFrom = 0; }
	    var currIdx = startFrom;
	    while (!predicate(arr.subarray(currIdx, currIdx + 1)[0])) {
	        currIdx += 1;
	        if (currIdx >= arr.length)
	            return undefined;
	    }
	    return currIdx;
	};
	var setCharAt = function (str, idx, newChar) {
	    return str.substring(0, idx) + newChar + str.substring(idx + 1);
	};

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * The base implementation of `_.inRange` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to check.
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 */
	function baseInRange(number, start, end) {
	  return number >= nativeMin(start, end) && number < nativeMax(start, end);
	}

	var _baseInRange = baseInRange;

	/** Used as references for various `Number` constants. */
	var NAN$1 = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol_1(value)) {
	    return NAN$1;
	  }
	  if (isObject_1(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject_1(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN$1 : +value);
	}

	var toNumber_1 = toNumber;

	/** Used as references for various `Number` constants. */
	var INFINITY$1 = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber_1(value);
	  if (value === INFINITY$1 || value === -INFINITY$1) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	var toFinite_1 = toFinite;

	/**
	 * Checks if `n` is between `start` and up to, but not including, `end`. If
	 * `end` is not specified, it's set to `start` with `start` then set to `0`.
	 * If `start` is greater than `end` the params are swapped to support
	 * negative ranges.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.3.0
	 * @category Number
	 * @param {number} number The number to check.
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	 * @see _.range, _.rangeRight
	 * @example
	 *
	 * _.inRange(3, 2, 4);
	 * // => true
	 *
	 * _.inRange(4, 8);
	 * // => true
	 *
	 * _.inRange(4, 2);
	 * // => false
	 *
	 * _.inRange(2, 2);
	 * // => false
	 *
	 * _.inRange(1.2, 2);
	 * // => true
	 *
	 * _.inRange(5.2, 4);
	 * // => false
	 *
	 * _.inRange(-3, -2, -6);
	 * // => true
	 */
	function inRange(number, start, end) {
	  start = toFinite_1(start);
	  if (end === undefined) {
	    end = start;
	    start = 0;
	  } else {
	    end = toFinite_1(end);
	  }
	  number = toNumber_1(number);
	  return _baseInRange(number, start, end);
	}

	var inRange_1 = inRange;

	/**
	 * Checks if `value` is `NaN`.
	 *
	 * **Note:** This method is based on
	 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	 * `undefined` and other non-number values.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 * @example
	 *
	 * _.isNaN(NaN);
	 * // => true
	 *
	 * _.isNaN(new Number(NaN));
	 * // => true
	 *
	 * isNaN(undefined);
	 * // => true
	 *
	 * _.isNaN(undefined);
	 * // => false
	 */
	function isNaN$1(value) {
	  // An `NaN` primitive is the only value that is not equal to itself.
	  // Perform the `toStringTag` check first to avoid errors with some
	  // ActiveX objects in IE.
	  return isNumber_1(value) && value != +value;
	}

	var _isNaN = isNaN$1;

	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */
	function isNil(value) {
	  return value == null;
	}

	var isNil_1 = isNil;

	/* tslint:disable:ban-types */
	var validate = function (value, predicate, msg) {
	    if (!predicate(value))
	        throw new Error(msg);
	};
	var optional = function (predicate) { return function (value) {
	    return isNil_1(value) || predicate(value);
	}; };
	var validateArr = function (value, predicate, msg) {
	    validate(value, isArray_1, 'validateArr.value must be an array.');
	    value.forEach(function (v) { return validate(v, predicate, msg); });
	};
	var isInstance = function (requiredClass) { return function (value) { return value instanceof requiredClass; }; };
	var isArrayOf = function (requiredClass) { return function (value) {
	    if (!isArray_1(value))
	        return false;
	    for (var i = 0; i < value.length; i++) {
	        if (!(value[i] instanceof requiredClass))
	            return false;
	    }
	    return true;
	}; };
	var isIdentity = function (requiredValue) { return function (value) {
	    return value === requiredValue;
	}; };
	var isNotIdentity = function (requiredValue) { return function (value) {
	    return value !== requiredValue;
	}; };
	var doesMatch = function (regex) { return function (value) {
	    return !!value.match(regex);
	}; };
	var isNumber$1 = function (n) { return and(isNumber_1, not(_isNaN))(n); };
	var isInRange = function (lower, upper) { return function (value) {
	    return inRange_1(value, lower, upper) || value === upper;
	}; };
	var oneOf = function () {
	    var allowed = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        allowed[_i] = arguments[_i];
	    }
	    return function (value) {
	        return allowed.some(function (a) { return a === value; });
	    };
	};

	var PDFObject = /** @class */ (function () {
	    function PDFObject() {
	        var _this = this;
	        this.toString = function () {
	            throw new Error("toString() is not implemented on " + _this.constructor.name);
	        };
	        this.bytesSize = function () {
	            throw new Error("bytesSize() is not implemented on " + _this.constructor.name);
	        };
	        this.copyBytesInto = function (buffer) {
	            throw new Error("copyBytesInto() is not implemented on " + _this.constructor.name);
	        };
	    }
	    return PDFObject;
	}());

	var __extends = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFArray$$1 = /** @class */ (function (_super) {
	    __extends(PDFArray$$1, _super);
	    function PDFArray$$1(array, index) {
	        var _this = _super.call(this) || this;
	        _this.push = function () {
	            var val = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                val[_i] = arguments[_i];
	            }
	            validateArr(val, isInstance(PDFObject), 'PDFArray.push() requires arguments to be PDFObjects');
	            (_a = _this.array).push.apply(_a, val);
	            return _this;
	            var _a;
	        };
	        _this.set = function (idx, val) {
	            validate(idx, isNumber_1, 'PDFArray.set() requires indexes to be numbers');
	            validate(val, isInstance(PDFObject), 'PDFArray.set() requires values to be PDFObjects');
	            _this.array[idx] = val;
	            return _this;
	        };
	        _this.get = function (idx) {
	            validate(idx, isNumber_1, 'PDFArray.set() requires indexes to be numbers');
	            return _this.array[idx];
	        };
	        _this.forEach = function (fn) {
	            return _this.array.forEach(fn);
	        };
	        _this.map = function (fn) {
	            return _this.array.map(fn);
	        };
	        _this.splice = function (start, deleteCount) {
	            return _this.array.splice(start, deleteCount);
	        };
	        _this.toString = function () {
	            var bufferSize = _this.bytesSize();
	            var buffer = new Uint8Array(bufferSize);
	            _this.copyBytesInto(buffer);
	            return arrayToString(buffer);
	        };
	        _this.bytesSize = function () {
	            return 2 + // "[ "
	                _this.array
	                    .map(function (e) {
	                    if (e instanceof PDFIndirectObject)
	                        return e.toReference().length + 1;
	                    else if (e instanceof PDFObject)
	                        return e.bytesSize() + 1;
	                    return error("Not a PDFObject: " + e);
	                })
	                    .reduce(add_1, 0) +
	                1;
	        }; // "]";
	        _this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer('[ ', buffer);
	            _this.array.forEach(function (e, idx) {
	                if (e instanceof PDFIndirectObject) {
	                    remaining = addStringToBuffer(e.toReference(), remaining);
	                }
	                else if (e instanceof PDFObject) {
	                    remaining = e.copyBytesInto(remaining);
	                }
	                else {
	                    error("Not a PDFObject: " + e);
	                }
	                remaining = addStringToBuffer(' ', remaining);
	            });
	            remaining = addStringToBuffer(']', remaining);
	            return remaining;
	        };
	        validateArr(array, isInstance(PDFObject), 'Cannot construct PDFArray from array whose elements are not PDFObjects');
	        validate(index, isInstance(PDFObjectIndex), '"index" must be a an instance of PDFObjectIndex');
	        _this.array = array;
	        _this.index = index;
	        return _this;
	    }
	    PDFArray$$1.fromArray = function (array, index) {
	        return new PDFArray$$1(array, index);
	    };
	    return PDFArray$$1;
	}(PDFObject));

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]';

	/**
	 * Checks if `value` is classified as a boolean primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	 * @example
	 *
	 * _.isBoolean(false);
	 * // => true
	 *
	 * _.isBoolean(null);
	 * // => false
	 */
	function isBoolean(value) {
	  return value === true || value === false ||
	    (isObjectLike_1(value) && _baseGetTag(value) == boolTag$1);
	}

	var isBoolean_1 = isBoolean;

	var __extends$1 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFBoolean = /** @class */ (function (_super) {
	    __extends$1(PDFBoolean, _super);
	    function PDFBoolean(bool) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.boolean.toString(); };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(bool, isBoolean_1, 'Can only construct PDFBooleans from Booleans');
	        _this.boolean = bool;
	        return _this;
	    }
	    PDFBoolean.fromBool = function (bool) { return new PDFBoolean(bool); };
	    PDFBoolean.fromString = function (boolStr) { return new PDFBoolean(toBoolean(boolStr)); };
	    return PDFBoolean;
	}(PDFObject));

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = _createBaseFor();

	var _baseFor = baseFor;

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && _baseFor(object, iteratee, keys_1);
	}

	var _baseForOwn = baseForOwn;

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike_1(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	var _createBaseEach = createBaseEach;

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = _createBaseEach(_baseForOwn);

	var _baseEach = baseEach;

	/**
	 * Casts `value` to `identity` if it's not a function.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Function} Returns cast function.
	 */
	function castFunction(value) {
	  return typeof value == 'function' ? value : identity_1;
	}

	var _castFunction = castFunction;

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray_1(collection) ? _arrayEach : _baseEach;
	  return func(collection, _castFunction(iteratee));
	}

	var forEach_1 = forEach;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** `Object#toString` result references. */
	var objectTag$1 = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto$6 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$4.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	/** `Object#toString` result references. */
	var stringTag$1 = '[object String]';

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$1);
	}

	var isString_1 = isString;

	var __extends$2 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFDictionary$$1 = /** @class */ (function (_super) {
	    __extends$2(PDFDictionary$$1, _super);
	    function PDFDictionary$$1(object, index, validKeys) {
	        var _this = _super.call(this) || this;
	        _this.filter = function (predicate) {
	            return Array.from(_this.map.entries()).filter(function (_a) {
	                var key = _a[0], val = _a[1];
	                return predicate(val, key);
	            });
	        };
	        _this.getMaybe = function (key) {
	            validate(key, or(isString_1, isInstance(PDFName)), 'PDFDictionary.set() requires keys to be strings or PDFNames');
	            var keyName = key instanceof PDFName ? key : PDFName.from(key);
	            return _this.map.get(keyName);
	        };
	        _this.get = function (key) {
	            return _this.getMaybe(key) || error("Missing PDFDictionary entry \"" + key + "\".");
	        };
	        _this.set = function (key, val, validateKeys) {
	            if (validateKeys === void 0) { validateKeys = true; }
	            validate(key, or(isString_1, isInstance(PDFName)), 'PDFDictionary.set() requires keys to be strings or PDFNames');
	            validate(val, isInstance(PDFObject), 'PDFDictionary.set() requires values to be PDFObjects');
	            var keyName = key instanceof PDFName ? key : PDFName.from(key);
	            if (validateKeys &&
	                _this.validKeys &&
	                !_this.validKeys.includes(keyName.key)) {
	                error("Invalid key: \"" + keyName.key + "\"");
	            }
	            _this.map.set(keyName, val);
	            return _this;
	        };
	        _this.toString = function () {
	            var buffer = new Uint8Array(_this.bytesSize());
	            _this.copyBytesInto(buffer);
	            return arrayToString(buffer);
	        };
	        _this.bytesSize = function () {
	            return 3 + // "<<\n"
	                Array.from(_this.map.entries())
	                    .map(function (_a) {
	                    var key = _a[0], val = _a[1];
	                    var keySize = (key.toString() + " ").length;
	                    if (val instanceof PDFIndirectObject) {
	                        return keySize + val.toReference().length + 1;
	                    }
	                    else if (val instanceof PDFObject) {
	                        return keySize + val.bytesSize() + 1;
	                    }
	                    throw new Error("Not a PDFObject: " + val.constructor.name);
	                })
	                    .reduce(add_1, 0) +
	                2;
	        }; // ">>"
	        _this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer('<<\n', buffer);
	            _this.map.forEach(function (val, key) {
	                remaining = addStringToBuffer(key.toString() + " ", remaining);
	                if (val instanceof PDFIndirectObject) {
	                    remaining = addStringToBuffer(val.toReference(), remaining);
	                }
	                else if (val instanceof PDFObject) {
	                    remaining = val.copyBytesInto(remaining);
	                }
	                else {
	                    throw new Error("Not a PDFObject: " + val.constructor.name);
	                }
	                remaining = addStringToBuffer('\n', remaining);
	            });
	            remaining = addStringToBuffer('>>', remaining);
	            return remaining;
	        };
	        validate(object, and(not(isNil_1), or(isPlainObject_1, isInstance(Map))), 'PDFDictionary can only be constructed from an Object or a Map');
	        validate(index, isInstance(PDFObjectIndex), '"index" must be an instance of PDFObjectIndex');
	        _this.index = index;
	        _this.validKeys = validKeys;
	        if (object instanceof Map) {
	            _this.map = object;
	        }
	        else {
	            _this.map = new Map();
	            forEach_1(object, function (val, key) { return _this.set(key, val, false); });
	        }
	        return _this;
	    }
	    PDFDictionary$$1.from = function (object, index) { return new PDFDictionary$$1(object, index); };
	    return PDFDictionary$$1;
	}(PDFObject));

	var __extends$3 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	// TODO: We have to support whitespace characters in hex strings when parsing,
	// but maybe we should remove them when serializing?
	var HEX_STRING_REGEX = /^[\dABCDEFabcdef\0\t\n\f\r ]*$/;
	var PDFHexString = /** @class */ (function (_super) {
	    __extends$3(PDFHexString, _super);
	    function PDFHexString(str) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return "<" + _this.string + ">"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(str, isString_1, 'PDFHexString.string must be a String');
	        validate(str, doesMatch(HEX_STRING_REGEX), "Invalid characters in hex string: \"" + str + "\"");
	        _this.string = str;
	        return _this;
	    }
	    PDFHexString.fromString = function (str) { return new PDFHexString(str); };
	    return PDFHexString;
	}(PDFObject));

	var __extends$4 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	// const pdfIndirectRefEnforcer = Symbol('PDF_INDIRECT_REF_ENFORCER');
	// Using a Symbol is ideal here, but React Native doesn't current support them,
	// so we'll use a string instead.
	var pdfIndirectRefEnforcer = '@@__PDF_INDIRECT_REF_ENFORCER';
	var pdfIndirectRefPool = new Map();
	// TODO: Need to error out if obj or gen numbers are manually set!
	// tslint:disable-next-line:no-unused-variable
	var PDFIndirectReference = /** @class */ (function (_super) {
	    __extends$4(PDFIndirectReference, _super);
	    function PDFIndirectReference(enforcer, objectNumber, generationNumber) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.objectNumber + " " + _this.generationNumber + " R"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(enforcer, isIdentity(pdfIndirectRefEnforcer), 'Cannot create PDFIndirectReference via constructor. Use PDFIndirectReference.forNumbers instead.');
	        validate(objectNumber, isNumber_1, 'objectNumber must be a Number');
	        validate(generationNumber, isNumber_1, 'generationNumber must be a Number');
	        _this.objectNumber = objectNumber;
	        _this.generationNumber = generationNumber;
	        return _this;
	    }
	    PDFIndirectReference.forNumbers = function (objectNumber, generationNumber) {
	        var key = objectNumber + " " + generationNumber;
	        var indirectRef = pdfIndirectRefPool.get(key);
	        if (!indirectRef) {
	            indirectRef = new PDFIndirectReference(pdfIndirectRefEnforcer, objectNumber, generationNumber);
	            pdfIndirectRefPool.set(key, indirectRef);
	        }
	        return indirectRef;
	    };
	    return PDFIndirectReference;
	}(PDFObject));

	var __extends$5 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFIndirectObject = /** @class */ (function (_super) {
	    __extends$5(PDFIndirectObject, _super);
	    function PDFIndirectObject(pdfObject) {
	        var _this = _super.call(this) || this;
	        _this.getReference = function () { return _this.reference; };
	        _this.setReferenceNumbers = function (objectNumber, generationNumber) {
	            validate(objectNumber, isNumber_1, 'objectNumber must be a Number');
	            validate(generationNumber, isNumber_1, 'generationNumber must be a Number');
	            _this.reference = PDFIndirectReference.forNumbers(objectNumber, generationNumber);
	            return _this;
	        };
	        _this.setReference = function (reference) {
	            validate(reference, isInstance(PDFIndirectReference), '"reference" must be a PDFIndirectReference object');
	            _this.reference = reference;
	            return _this;
	        };
	        _this.toReference = function () { return _this.reference.toString(); };
	        _this.toString = function () {
	            var buffer = new Uint8Array(_this.bytesSize());
	            _this.copyBytesInto(buffer);
	            return arrayToString(buffer);
	        };
	        _this.bytesSize = function () {
	            return (_this.reference.objectNumber + " " + _this.reference.generationNumber + " obj\n")
	                .length +
	                _this.pdfObject.bytesSize() +
	                9;
	        }; // "\nendobj\n\n"
	        _this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer(_this.reference.objectNumber + " " + _this.reference.generationNumber + " obj\n", buffer);
	            remaining = _this.pdfObject.copyBytesInto(remaining);
	            remaining = addStringToBuffer('\nendobj\n\n', remaining);
	            return remaining;
	        };
	        validate(pdfObject, isInstance(PDFObject), 'PDFIndirectObject.pdfObject must be of type PDFObject');
	        _this.pdfObject = pdfObject;
	        return _this;
	    }
	    PDFIndirectObject.of = function (pdfObject) {
	        return new PDFIndirectObject(pdfObject);
	    };
	    return PDFIndirectObject;
	}(PDFObject));

	var __extends$6 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	// const pdfNameEnforcer = Symbol('PDF_NAME_ENFORCER');
	// Using a Symbol is ideal here, but React Native doesn't current support them,
	// so we'll use a string instead.
	var pdfNameEnforcer = '@@__PDF_NAME_ENFORCER';
	var pdfNamePool = new Map();
	var PDFName = /** @class */ (function (_super) {
	    __extends$6(PDFName, _super);
	    function PDFName(enforcer, key) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return ("/" + _this.key)
	                .replace('#', '#23')
	                .split('')
	                .map(function (char) {
	                return PDFName.isRegularChar(char)
	                    ? char
	                    : "#" + charCode(char).toString(16);
	            })
	                .join('');
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(enforcer, isIdentity(pdfNameEnforcer), 'Cannot create PDFName via constructor. Use PDFName.from instead.');
	        validate(key.charAt(0), and(isNotIdentity(' '), isNotIdentity('/')), 'PDFName objects may not begin with a space or slash character.');
	        _this.key = key;
	        return _this;
	    }
	    PDFName.isRegularChar = function (char) {
	        return charCode(char) >= charCode('!') && charCode(char) <= charCode('~');
	    };
	    PDFName.from = function (str) {
	        validate(str, isString_1, 'PDFName.from() requires string as argument');
	        var pdfName = pdfNamePool.get(str);
	        if (!pdfName) {
	            pdfName = new PDFName(pdfNameEnforcer, str);
	            pdfNamePool.set(str, pdfName);
	        }
	        return pdfName;
	    };
	    PDFName.fromEncoded = function (str) {
	        validate(str, isString_1, 'PDFName.fromEncoded() requires string as argument');
	        var decoded = str.replace(/(#\d{2})/g, function (match) {
	            return String.fromCharCode(parseInt(match.slice(1), 16));
	        });
	        return PDFName.from(decoded);
	    };
	    return PDFName;
	}(PDFObject));

	var __extends$7 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	// const PDF_NULL_ENFORCER = Symbol('PDF_NULL_ENFORCER');
	// Using a Symbol is ideal here, but React Native doesn't current support them,
	// so we'll use a string instead.
	var PDF_NULL_ENFORCER = '@@__PDF_NULL_ENFORCER';
	var PDFNull = /** @class */ (function (_super) {
	    __extends$7(PDFNull, _super);
	    function PDFNull(enforcer) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return 'null'; };
	        _this.bytesSize = function () { return 4; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer('null', buffer);
	        };
	        validate(enforcer, isIdentity(PDF_NULL_ENFORCER), 'Cannot create new PDFNull objects - use PDFNull.instance');
	        return _this;
	    }
	    PDFNull.instance = new PDFNull(PDF_NULL_ENFORCER);
	    return PDFNull;
	}(PDFObject));

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsFinite = _root.isFinite;

	/**
	 * Checks if `value` is a finite primitive number.
	 *
	 * **Note:** This method is based on
	 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	 * @example
	 *
	 * _.isFinite(3);
	 * // => true
	 *
	 * _.isFinite(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isFinite(Infinity);
	 * // => false
	 *
	 * _.isFinite('3');
	 * // => false
	 */
	function isFinite$1(value) {
	  return typeof value == 'number' && nativeIsFinite(value);
	}

	var _isFinite = isFinite$1;

	var __extends$8 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFNumber = /** @class */ (function (_super) {
	    __extends$8(PDFNumber, _super);
	    function PDFNumber(num) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.number.toString(); };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(num, _isFinite, 'Can only construct PDFNumbers from Numbers');
	        _this.number = num;
	        return _this;
	    }
	    PDFNumber.fromNumber = function (num) { return new PDFNumber(num); };
	    PDFNumber.fromString = function (numberStr) {
	        validate(numberStr, isString_1, 'PDFNumber.fromString requires a string as a parameter.');
	        return new PDFNumber(Number(numberStr));
	    };
	    return PDFNumber;
	}(PDFObject));

	var __extends$9 = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFStream$$1 = /** @class */ (function (_super) {
	    __extends$9(PDFStream$$1, _super);
	    function PDFStream$$1(dictionary) {
	        var _this = _super.call(this) || this;
	        _this.validateDictionary = function () {
	            if (!_this.dictionary.getMaybe('Length')) {
	                error('"Length" is a required field for PDFStream dictionaries');
	            }
	        };
	        validate(dictionary, isInstance(PDFDictionary$$1), 'PDFStream.dictionary must be of type PDFDictionary');
	        _this.dictionary = dictionary;
	        return _this;
	    }
	    return PDFStream$$1;
	}(PDFObject));

	var __extends$a = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFRawStream$$1 = /** @class */ (function (_super) {
	    __extends$a(PDFRawStream$$1, _super);
	    function PDFRawStream$$1(dictionary, content) {
	        var _this = _super.call(this, dictionary) || this;
	        _this.bytesSize = function () {
	            return _this.dictionary.bytesSize() +
	                1 + // "\n"
	                7 + // "stream\n"
	                _this.content.length +
	                10;
	        }; // "\nendstream"
	        _this.copyBytesInto = function (buffer) {
	            _this.validateDictionary();
	            var remaining = _this.dictionary.copyBytesInto(buffer);
	            remaining = addStringToBuffer('\nstream\n', remaining);
	            remaining.set(_this.content, 0);
	            remaining = remaining.subarray(_this.content.length);
	            remaining = addStringToBuffer('\nendstream', remaining);
	            return remaining;
	        };
	        validate(content, isInstance(Uint8Array), 'PDFRawStream.content must be a Uint8Array');
	        _this.content = content;
	        return _this;
	    }
	    PDFRawStream$$1.from = function (dictionary, content) {
	        return new PDFRawStream$$1(dictionary, content);
	    };
	    return PDFRawStream$$1;
	}(PDFStream$$1));

	var __extends$b = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFString = /** @class */ (function (_super) {
	    __extends$b(PDFString, _super);
	    function PDFString(str) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return "(" + _this.string
	                .replace(/\\/g, '\\\\')
	                .replace(/\(/g, '\\(')
	                .replace(/\)/g, '\\)') + ")";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(str, isString_1, 'Can only construct PDFStrings from Strings');
	        _this.string = str;
	        return _this;
	    }
	    PDFString.fromString = function (str) { return new PDFString(str); };
	    return PDFString;
	}(PDFObject));

	var PDFObjectIndex = /** @class */ (function () {
	    function PDFObjectIndex() {
	        var _this = this;
	        this.index = new Map();
	        this.set = function (key, val) {
	            validate(key, isInstance(PDFIndirectReference), '"key" must be a PDFIndirectReference');
	            validate(val, isInstance(PDFObject), '"val" must be a PDFObject');
	            _this.index.set(key, val);
	            return _this;
	        };
	        this.lookupMaybe = function (ref) {
	            if (ref instanceof PDFIndirectReference)
	                return _this.index.get(ref);
	            return ref;
	        };
	        this.lookup = function (ref) {
	            return _this.lookupMaybe(ref) || error("Failed to lookup ref: " + ref + "}");
	        };
	    }
	    PDFObjectIndex.create = function () { return new PDFObjectIndex(); };
	    return PDFObjectIndex;
	}());

	/**
	 * **Specification: "9.6.2.2 Standard Type 1 Fonts (Standard 14 Fonts)"**
	 *
	 * These are the PostScript names of 14 Type 1 fonts, known as the standard 14
	 * fonts. These fonts, or their font metrics and suitable substitution fonts,
	 * shall be available to the conforming reader.
	 */
	var Standard14Fonts = [
	    'Times-Roman',
	    'Helvetica',
	    'Courier',
	    'Symbol',
	    'Times-Bold',
	    'Helvetica-Bold',
	    'Courier-Bold',
	    'ZapfDingbats',
	    'Times-Italic',
	    'Helvetica-Oblique',
	    'Courier-Oblique',
	    'Times-BoldItalic',
	    'Helvetica-BoldOblique',
	    'Courier-BoldOblique',
	];

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$2 = 9007199254740991;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor;

	/**
	 * The base implementation of `_.repeat` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {string} string The string to repeat.
	 * @param {number} n The number of times to repeat the string.
	 * @returns {string} Returns the repeated string.
	 */
	function baseRepeat(string, n) {
	  var result = '';
	  if (!string || n < 1 || n > MAX_SAFE_INTEGER$2) {
	    return result;
	  }
	  // Leverage the exponentiation by squaring algorithm for a faster repeat.
	  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	  do {
	    if (n % 2) {
	      result += string;
	    }
	    n = nativeFloor(n / 2);
	    if (n) {
	      string += string;
	    }
	  } while (n);

	  return result;
	}

	var _baseRepeat = baseRepeat;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _baseProperty = baseProperty;

	/**
	 * Gets the size of an ASCII `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	var asciiSize = _baseProperty('length');

	var _asciiSize = asciiSize;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$1 + ']',
	    rsCombo = '[' + rsComboRange$1 + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange$1 + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$1 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange$1 + ']?',
	    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Gets the size of a Unicode `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	function unicodeSize(string) {
	  var result = reUnicode.lastIndex = 0;
	  while (reUnicode.test(string)) {
	    ++result;
	  }
	  return result;
	}

	var _unicodeSize = unicodeSize;

	/**
	 * Gets the number of symbols in `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the string size.
	 */
	function stringSize(string) {
	  return _hasUnicode(string)
	    ? _unicodeSize(string)
	    : _asciiSize(string);
	}

	var _stringSize = stringSize;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral$1 = '[' + rsAstralRange$2 + ']',
	    rsCombo$1 = '[' + rsComboRange$2 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol$1 = '(?:' + [rsNonAstral$1 + rsCombo$1 + '?', rsCombo$1, rsRegional$1, rsSurrPair$1, rsAstral$1].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode$1 = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol$1 + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode$1) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil;

	/**
	 * Creates the padding for `string` based on `length`. The `chars` string
	 * is truncated if the number of characters exceeds `length`.
	 *
	 * @private
	 * @param {number} length The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padding for `string`.
	 */
	function createPadding(length, chars) {
	  chars = chars === undefined ? ' ' : _baseToString(chars);

	  var charsLength = chars.length;
	  if (charsLength < 2) {
	    return charsLength ? _baseRepeat(chars, length) : chars;
	  }
	  var result = _baseRepeat(chars, nativeCeil(length / _stringSize(chars)));
	  return _hasUnicode(chars)
	    ? _castSlice(_stringToArray(result), 0, length).join('')
	    : result.slice(0, length);
	}

	var _createPadding = createPadding;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite_1(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	var toInteger_1 = toInteger;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Pads `string` on the left side if it's shorter than `length`. Padding
	 * characters are truncated if they exceed `length`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to pad.
	 * @param {number} [length=0] The padding length.
	 * @param {string} [chars=' '] The string used as padding.
	 * @returns {string} Returns the padded string.
	 * @example
	 *
	 * _.padStart('abc', 6);
	 * // => '   abc'
	 *
	 * _.padStart('abc', 6, '_-');
	 * // => '_-_abc'
	 *
	 * _.padStart('abc', 3);
	 * // => 'abc'
	 */
	function padStart(string, length, chars) {
	  string = toString_1(string);
	  length = toInteger_1(length);

	  var strLength = length ? _stringSize(string) : 0;
	  return (length && strLength < length)
	    ? (_createPadding(length - strLength, chars) + string)
	    : string;
	}

	var padStart_1 = padStart;

	/* tslint:disable:max-classes-per-file */
	var Entry = /** @class */ (function () {
	    function Entry() {
	        var _this = this;
	        this.isInUse = false;
	        this.setOffset = function (offset) {
	            validate(offset, isNumber_1, 'offset must be a number');
	            _this.offset = offset;
	            return _this;
	        };
	        this.setGenerationNum = function (generationNum) {
	            validate(generationNum, isNumber_1, 'generationNum must be a number');
	            _this.generationNum = generationNum;
	            return _this;
	        };
	        this.setIsInUse = function (isInUse) {
	            validate(isInUse, isBoolean_1, 'isInUse must be a boolean');
	            _this.isInUse = isInUse;
	            return _this;
	        };
	        this.toString = function () {
	            return padStart_1(String(_this.offset), 10, '0') + " " +
	                (padStart_1(String(_this.generationNum), 5, '0') + " ") +
	                ((_this.isInUse ? 'n' : 'f') + " \n");
	        };
	        this.bytesSize = function () { return _this.toString().length; };
	    }
	    Entry.create = function () { return new Entry(); };
	    return Entry;
	}());
	var Subsection = /** @class */ (function () {
	    function Subsection(entries) {
	        if (entries === void 0) { entries = []; }
	        var _this = this;
	        this.entries = [];
	        this.addEntry = function (entry) {
	            validate(entry, isInstance(Entry), '"entry" must be instance of PDFXRef.Entry');
	            _this.entries.push(entry);
	            return _this;
	        };
	        this.setFirstObjNum = function (firstObjNum) {
	            validate(firstObjNum, isNumber_1, 'firstObjNum must be a number');
	            _this.firstObjNum = firstObjNum;
	            return _this;
	        };
	        this.toString = function () {
	            return _this.firstObjNum + " " + _this.entries.length + "\n" +
	                ("" + _this.entries.map(String).join(''));
	        };
	        this.bytesSize = function () {
	            return (_this.firstObjNum + " " + _this.entries.length + "\n").length +
	                _this.entries.map(function (e) { return e.bytesSize(); }).reduce(add_1, 0);
	        };
	        validateArr(entries, isInstance(Entry), 'PDFXRef.Subsection.entries must be an array of PDFXRef.Entry');
	        this.entries = entries;
	    }
	    Subsection.from = function (entries) {
	        if (entries === void 0) { entries = []; }
	        return new Subsection(entries);
	    };
	    return Subsection;
	}());
	var Table = /** @class */ (function () {
	    function Table(subsections) {
	        if (subsections === void 0) { subsections = []; }
	        var _this = this;
	        this.subsections = [];
	        this.addSubsection = function (subsection) {
	            validate(subsection, isInstance(Subsection), '"subsection" must be instance of PDFXRef.Subsection');
	            _this.subsections.push(subsection);
	            return _this;
	        };
	        this.toString = function () { return "xref\n" + _this.subsections.map(String).join('\n') + "\n"; };
	        this.bytesSize = function () {
	            return 5 + _this.subsections.map(function (ss) { return ss.bytesSize() + 1; }).reduce(add_1, 0);
	        }; // "xref\n"
	        this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer('xref\n', buffer);
	            _this.subsections.map(String).forEach(function (subsectionStr) {
	                remaining = addStringToBuffer(subsectionStr + "\n", remaining);
	            });
	            return remaining;
	        };
	        validateArr(subsections, isInstance(Subsection), 'subsections must be an array of PDFXRef.Subsection');
	        this.subsections = subsections;
	    }
	    Table.from = function (subsections) {
	        if (subsections === void 0) { subsections = []; }
	        return new Table(subsections);
	    };
	    return Table;
	}());

	var PDFXRef = /*#__PURE__*/Object.freeze({
		Entry: Entry,
		Subsection: Subsection,
		Table: Table
	});

	var __extends$c = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var VALID_KEYS = Object.freeze([
	    'Type',
	    'Version',
	    'Extensions',
	    'Pages',
	    'PageLabels',
	    'Names',
	    'Dests',
	    'ViewerPreferences',
	    'PageLayout',
	    'PageMode',
	    'Outlines',
	    'Threads',
	    'OpenAction',
	    'AA',
	    'URI',
	    'AcroForm',
	    'Metadata',
	    'StructTreeRoot',
	    'MarkInfo',
	    'Lang',
	    'SpiderInfo',
	    'OutputIntents',
	    'PieceInfo',
	    'OCProperties',
	    'Perms',
	    'Legal',
	    'Requirements',
	    'Collection',
	    'NeedsRendering',
	]);
	var PDFCatalog = /** @class */ (function (_super) {
	    __extends$c(PDFCatalog, _super);
	    function PDFCatalog() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(PDFCatalog.prototype, "Pages", {
	        get: function () {
	            var Pages = this.get('Pages');
	            return this.index.lookup(Pages);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PDFCatalog.create = function (pageTree, index) {
	        validate(pageTree, isInstance(PDFIndirectReference), '"pageTree" must be an indirect reference');
	        return new PDFCatalog({
	            Type: PDFName.from('Catalog'),
	            Pages: pageTree,
	        }, index);
	    };
	    PDFCatalog.fromObject = function (object, index) { return new PDFCatalog(object, index, VALID_KEYS); };
	    PDFCatalog.fromDict = function (dict) {
	        validate(dict, isInstance(PDFDictionary$$1), '"dict" must be a PDFDictionary');
	        return new PDFCatalog(dict.map, dict.index, VALID_KEYS);
	    };
	    return PDFCatalog;
	}(PDFDictionary$$1));

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/** Built-in value references. */
	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray_1(value) || isArguments_1(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = _isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        _arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	var _baseFlatten = baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? _baseFlatten(array, 1) : [];
	}

	var flatten_1 = flatten;

	var common = createCommonjsModule(function (module, exports) {


	var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
	                (typeof Uint16Array !== 'undefined') &&
	                (typeof Int32Array !== 'undefined');

	function _has(obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	}

	exports.assign = function (obj /*from1, from2, from3, ...*/) {
	  var sources = Array.prototype.slice.call(arguments, 1);
	  while (sources.length) {
	    var source = sources.shift();
	    if (!source) { continue; }

	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be non-object');
	    }

	    for (var p in source) {
	      if (_has(source, p)) {
	        obj[p] = source[p];
	      }
	    }
	  }

	  return obj;
	};


	// reduce buffer size, avoiding mem copy
	exports.shrinkBuf = function (buf, size) {
	  if (buf.length === size) { return buf; }
	  if (buf.subarray) { return buf.subarray(0, size); }
	  buf.length = size;
	  return buf;
	};


	var fnTyped = {
	  arraySet: function (dest, src, src_offs, len, dest_offs) {
	    if (src.subarray && dest.subarray) {
	      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
	      return;
	    }
	    // Fallback to ordinary array
	    for (var i = 0; i < len; i++) {
	      dest[dest_offs + i] = src[src_offs + i];
	    }
	  },
	  // Join array of chunks to single array.
	  flattenChunks: function (chunks) {
	    var i, l, len, pos, chunk, result;

	    // calculate data length
	    len = 0;
	    for (i = 0, l = chunks.length; i < l; i++) {
	      len += chunks[i].length;
	    }

	    // join chunks
	    result = new Uint8Array(len);
	    pos = 0;
	    for (i = 0, l = chunks.length; i < l; i++) {
	      chunk = chunks[i];
	      result.set(chunk, pos);
	      pos += chunk.length;
	    }

	    return result;
	  }
	};

	var fnUntyped = {
	  arraySet: function (dest, src, src_offs, len, dest_offs) {
	    for (var i = 0; i < len; i++) {
	      dest[dest_offs + i] = src[src_offs + i];
	    }
	  },
	  // Join array of chunks to single array.
	  flattenChunks: function (chunks) {
	    return [].concat.apply([], chunks);
	  }
	};


	// Enable/Disable typed arrays use, for testing
	//
	exports.setTyped = function (on) {
	  if (on) {
	    exports.Buf8  = Uint8Array;
	    exports.Buf16 = Uint16Array;
	    exports.Buf32 = Int32Array;
	    exports.assign(exports, fnTyped);
	  } else {
	    exports.Buf8  = Array;
	    exports.Buf16 = Array;
	    exports.Buf32 = Array;
	    exports.assign(exports, fnUntyped);
	  }
	};

	exports.setTyped(TYPED_OK);
	});
	var common_1 = common.assign;
	var common_2 = common.shrinkBuf;
	var common_3 = common.setTyped;
	var common_4 = common.Buf8;
	var common_5 = common.Buf16;
	var common_6 = common.Buf32;

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.



	/* Public constants ==========================================================*/
	/* ===========================================================================*/


	//var Z_FILTERED          = 1;
	//var Z_HUFFMAN_ONLY      = 2;
	//var Z_RLE               = 3;
	var Z_FIXED               = 4;
	//var Z_DEFAULT_STRATEGY  = 0;

	/* Possible values of the data_type field (though see inflate()) */
	var Z_BINARY              = 0;
	var Z_TEXT                = 1;
	//var Z_ASCII             = 1; // = Z_TEXT
	var Z_UNKNOWN             = 2;

	/*============================================================================*/


	function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

	// From zutil.h

	var STORED_BLOCK = 0;
	var STATIC_TREES = 1;
	var DYN_TREES    = 2;
	/* The three kinds of block type */

	var MIN_MATCH    = 3;
	var MAX_MATCH    = 258;
	/* The minimum and maximum match lengths */

	// From deflate.h
	/* ===========================================================================
	 * Internal compression state.
	 */

	var LENGTH_CODES  = 29;
	/* number of length codes, not counting the special END_BLOCK code */

	var LITERALS      = 256;
	/* number of literal bytes 0..255 */

	var L_CODES       = LITERALS + 1 + LENGTH_CODES;
	/* number of Literal or Length codes, including the END_BLOCK code */

	var D_CODES       = 30;
	/* number of distance codes */

	var BL_CODES      = 19;
	/* number of codes used to transfer the bit lengths */

	var HEAP_SIZE     = 2 * L_CODES + 1;
	/* maximum heap size */

	var MAX_BITS      = 15;
	/* All codes must not exceed MAX_BITS bits */

	var Buf_size      = 16;
	/* size of bit buffer in bi_buf */


	/* ===========================================================================
	 * Constants
	 */

	var MAX_BL_BITS = 7;
	/* Bit length codes must not exceed MAX_BL_BITS bits */

	var END_BLOCK   = 256;
	/* end of block literal code */

	var REP_3_6     = 16;
	/* repeat previous bit length 3-6 times (2 bits of repeat count) */

	var REPZ_3_10   = 17;
	/* repeat a zero length 3-10 times  (3 bits of repeat count) */

	var REPZ_11_138 = 18;
	/* repeat a zero length 11-138 times  (7 bits of repeat count) */

	/* eslint-disable comma-spacing,array-bracket-spacing */
	var extra_lbits =   /* extra bits for each length code */
	  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

	var extra_dbits =   /* extra bits for each distance code */
	  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

	var extra_blbits =  /* extra bits for each bit length code */
	  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

	var bl_order =
	  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
	/* eslint-enable comma-spacing,array-bracket-spacing */

	/* The lengths of the bit length codes are sent in order of decreasing
	 * probability, to avoid transmitting the lengths for unused bit length codes.
	 */

	/* ===========================================================================
	 * Local data. These are initialized only once.
	 */

	// We pre-fill arrays with 0 to avoid uninitialized gaps

	var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

	// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
	var static_ltree  = new Array((L_CODES + 2) * 2);
	zero(static_ltree);
	/* The static literal tree. Since the bit lengths are imposed, there is no
	 * need for the L_CODES extra codes used during heap construction. However
	 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
	 * below).
	 */

	var static_dtree  = new Array(D_CODES * 2);
	zero(static_dtree);
	/* The static distance tree. (Actually a trivial tree since all codes use
	 * 5 bits.)
	 */

	var _dist_code    = new Array(DIST_CODE_LEN);
	zero(_dist_code);
	/* Distance codes. The first 256 values correspond to the distances
	 * 3 .. 258, the last 256 values correspond to the top 8 bits of
	 * the 15 bit distances.
	 */

	var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
	zero(_length_code);
	/* length code for each normalized match length (0 == MIN_MATCH) */

	var base_length   = new Array(LENGTH_CODES);
	zero(base_length);
	/* First normalized length for each code (0 = MIN_MATCH) */

	var base_dist     = new Array(D_CODES);
	zero(base_dist);
	/* First normalized distance for each code (0 = distance of 1) */


	function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

	  this.static_tree  = static_tree;  /* static tree or NULL */
	  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
	  this.extra_base   = extra_base;   /* base index for extra_bits */
	  this.elems        = elems;        /* max number of elements in the tree */
	  this.max_length   = max_length;   /* max bit length for the codes */

	  // show if `static_tree` has data or dummy - needed for monomorphic objects
	  this.has_stree    = static_tree && static_tree.length;
	}


	var static_l_desc;
	var static_d_desc;
	var static_bl_desc;


	function TreeDesc(dyn_tree, stat_desc) {
	  this.dyn_tree = dyn_tree;     /* the dynamic tree */
	  this.max_code = 0;            /* largest code with non zero frequency */
	  this.stat_desc = stat_desc;   /* the corresponding static tree */
	}



	function d_code(dist) {
	  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
	}


	/* ===========================================================================
	 * Output a short LSB first on the stream.
	 * IN assertion: there is enough room in pendingBuf.
	 */
	function put_short(s, w) {
	//    put_byte(s, (uch)((w) & 0xff));
	//    put_byte(s, (uch)((ush)(w) >> 8));
	  s.pending_buf[s.pending++] = (w) & 0xff;
	  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
	}


	/* ===========================================================================
	 * Send a value on a given number of bits.
	 * IN assertion: length <= 16 and value fits in length bits.
	 */
	function send_bits(s, value, length) {
	  if (s.bi_valid > (Buf_size - length)) {
	    s.bi_buf |= (value << s.bi_valid) & 0xffff;
	    put_short(s, s.bi_buf);
	    s.bi_buf = value >> (Buf_size - s.bi_valid);
	    s.bi_valid += length - Buf_size;
	  } else {
	    s.bi_buf |= (value << s.bi_valid) & 0xffff;
	    s.bi_valid += length;
	  }
	}


	function send_code(s, c, tree) {
	  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
	}


	/* ===========================================================================
	 * Reverse the first len bits of a code, using straightforward code (a faster
	 * method would use a table)
	 * IN assertion: 1 <= len <= 15
	 */
	function bi_reverse(code, len) {
	  var res = 0;
	  do {
	    res |= code & 1;
	    code >>>= 1;
	    res <<= 1;
	  } while (--len > 0);
	  return res >>> 1;
	}


	/* ===========================================================================
	 * Flush the bit buffer, keeping at most 7 bits in it.
	 */
	function bi_flush(s) {
	  if (s.bi_valid === 16) {
	    put_short(s, s.bi_buf);
	    s.bi_buf = 0;
	    s.bi_valid = 0;

	  } else if (s.bi_valid >= 8) {
	    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
	    s.bi_buf >>= 8;
	    s.bi_valid -= 8;
	  }
	}


	/* ===========================================================================
	 * Compute the optimal bit lengths for a tree and update the total bit length
	 * for the current block.
	 * IN assertion: the fields freq and dad are set, heap[heap_max] and
	 *    above are the tree nodes sorted by increasing frequency.
	 * OUT assertions: the field len is set to the optimal bit length, the
	 *     array bl_count contains the frequencies for each bit length.
	 *     The length opt_len is updated; static_len is also updated if stree is
	 *     not null.
	 */
	function gen_bitlen(s, desc)
	//    deflate_state *s;
	//    tree_desc *desc;    /* the tree descriptor */
	{
	  var tree            = desc.dyn_tree;
	  var max_code        = desc.max_code;
	  var stree           = desc.stat_desc.static_tree;
	  var has_stree       = desc.stat_desc.has_stree;
	  var extra           = desc.stat_desc.extra_bits;
	  var base            = desc.stat_desc.extra_base;
	  var max_length      = desc.stat_desc.max_length;
	  var h;              /* heap index */
	  var n, m;           /* iterate over the tree elements */
	  var bits;           /* bit length */
	  var xbits;          /* extra bits */
	  var f;              /* frequency */
	  var overflow = 0;   /* number of elements with bit length too large */

	  for (bits = 0; bits <= MAX_BITS; bits++) {
	    s.bl_count[bits] = 0;
	  }

	  /* In a first pass, compute the optimal bit lengths (which may
	   * overflow in the case of the bit length tree).
	   */
	  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

	  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
	    n = s.heap[h];
	    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
	    if (bits > max_length) {
	      bits = max_length;
	      overflow++;
	    }
	    tree[n * 2 + 1]/*.Len*/ = bits;
	    /* We overwrite tree[n].Dad which is no longer needed */

	    if (n > max_code) { continue; } /* not a leaf node */

	    s.bl_count[bits]++;
	    xbits = 0;
	    if (n >= base) {
	      xbits = extra[n - base];
	    }
	    f = tree[n * 2]/*.Freq*/;
	    s.opt_len += f * (bits + xbits);
	    if (has_stree) {
	      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
	    }
	  }
	  if (overflow === 0) { return; }

	  // Trace((stderr,"\nbit length overflow\n"));
	  /* This happens for example on obj2 and pic of the Calgary corpus */

	  /* Find the first bit length which could increase: */
	  do {
	    bits = max_length - 1;
	    while (s.bl_count[bits] === 0) { bits--; }
	    s.bl_count[bits]--;      /* move one leaf down the tree */
	    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
	    s.bl_count[max_length]--;
	    /* The brother of the overflow item also moves one step up,
	     * but this does not affect bl_count[max_length]
	     */
	    overflow -= 2;
	  } while (overflow > 0);

	  /* Now recompute all bit lengths, scanning in increasing frequency.
	   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
	   * lengths instead of fixing only the wrong ones. This idea is taken
	   * from 'ar' written by Haruhiko Okumura.)
	   */
	  for (bits = max_length; bits !== 0; bits--) {
	    n = s.bl_count[bits];
	    while (n !== 0) {
	      m = s.heap[--h];
	      if (m > max_code) { continue; }
	      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
	        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
	        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
	        tree[m * 2 + 1]/*.Len*/ = bits;
	      }
	      n--;
	    }
	  }
	}


	/* ===========================================================================
	 * Generate the codes for a given tree and bit counts (which need not be
	 * optimal).
	 * IN assertion: the array bl_count contains the bit length statistics for
	 * the given tree and the field len is set for all tree elements.
	 * OUT assertion: the field code is set for all tree elements of non
	 *     zero code length.
	 */
	function gen_codes(tree, max_code, bl_count)
	//    ct_data *tree;             /* the tree to decorate */
	//    int max_code;              /* largest code with non zero frequency */
	//    ushf *bl_count;            /* number of codes at each bit length */
	{
	  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
	  var code = 0;              /* running code value */
	  var bits;                  /* bit index */
	  var n;                     /* code index */

	  /* The distribution counts are first used to generate the code values
	   * without bit reversal.
	   */
	  for (bits = 1; bits <= MAX_BITS; bits++) {
	    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
	  }
	  /* Check that the bit counts in bl_count are consistent. The last code
	   * must be all ones.
	   */
	  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
	  //        "inconsistent bit counts");
	  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

	  for (n = 0;  n <= max_code; n++) {
	    var len = tree[n * 2 + 1]/*.Len*/;
	    if (len === 0) { continue; }
	    /* Now reverse the bits */
	    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

	    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
	    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
	  }
	}


	/* ===========================================================================
	 * Initialize the various 'constant' tables.
	 */
	function tr_static_init() {
	  var n;        /* iterates over tree elements */
	  var bits;     /* bit counter */
	  var length;   /* length value */
	  var code;     /* code value */
	  var dist;     /* distance index */
	  var bl_count = new Array(MAX_BITS + 1);
	  /* number of codes at each bit length for an optimal tree */

	  // do check in _tr_init()
	  //if (static_init_done) return;

	  /* For some embedded targets, global variables are not initialized: */
	/*#ifdef NO_INIT_GLOBAL_POINTERS
	  static_l_desc.static_tree = static_ltree;
	  static_l_desc.extra_bits = extra_lbits;
	  static_d_desc.static_tree = static_dtree;
	  static_d_desc.extra_bits = extra_dbits;
	  static_bl_desc.extra_bits = extra_blbits;
	#endif*/

	  /* Initialize the mapping length (0..255) -> length code (0..28) */
	  length = 0;
	  for (code = 0; code < LENGTH_CODES - 1; code++) {
	    base_length[code] = length;
	    for (n = 0; n < (1 << extra_lbits[code]); n++) {
	      _length_code[length++] = code;
	    }
	  }
	  //Assert (length == 256, "tr_static_init: length != 256");
	  /* Note that the length 255 (match length 258) can be represented
	   * in two different ways: code 284 + 5 bits or code 285, so we
	   * overwrite length_code[255] to use the best encoding:
	   */
	  _length_code[length - 1] = code;

	  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
	  dist = 0;
	  for (code = 0; code < 16; code++) {
	    base_dist[code] = dist;
	    for (n = 0; n < (1 << extra_dbits[code]); n++) {
	      _dist_code[dist++] = code;
	    }
	  }
	  //Assert (dist == 256, "tr_static_init: dist != 256");
	  dist >>= 7; /* from now on, all distances are divided by 128 */
	  for (; code < D_CODES; code++) {
	    base_dist[code] = dist << 7;
	    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
	      _dist_code[256 + dist++] = code;
	    }
	  }
	  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

	  /* Construct the codes of the static literal tree */
	  for (bits = 0; bits <= MAX_BITS; bits++) {
	    bl_count[bits] = 0;
	  }

	  n = 0;
	  while (n <= 143) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 8;
	    n++;
	    bl_count[8]++;
	  }
	  while (n <= 255) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 9;
	    n++;
	    bl_count[9]++;
	  }
	  while (n <= 279) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 7;
	    n++;
	    bl_count[7]++;
	  }
	  while (n <= 287) {
	    static_ltree[n * 2 + 1]/*.Len*/ = 8;
	    n++;
	    bl_count[8]++;
	  }
	  /* Codes 286 and 287 do not exist, but we must include them in the
	   * tree construction to get a canonical Huffman tree (longest code
	   * all ones)
	   */
	  gen_codes(static_ltree, L_CODES + 1, bl_count);

	  /* The static distance tree is trivial: */
	  for (n = 0; n < D_CODES; n++) {
	    static_dtree[n * 2 + 1]/*.Len*/ = 5;
	    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
	  }

	  // Now data ready and we can init static trees
	  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
	  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
	  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

	  //static_init_done = true;
	}


	/* ===========================================================================
	 * Initialize a new block.
	 */
	function init_block(s) {
	  var n; /* iterates over tree elements */

	  /* Initialize the trees. */
	  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
	  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
	  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

	  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
	  s.opt_len = s.static_len = 0;
	  s.last_lit = s.matches = 0;
	}


	/* ===========================================================================
	 * Flush the bit buffer and align the output on a byte boundary
	 */
	function bi_windup(s)
	{
	  if (s.bi_valid > 8) {
	    put_short(s, s.bi_buf);
	  } else if (s.bi_valid > 0) {
	    //put_byte(s, (Byte)s->bi_buf);
	    s.pending_buf[s.pending++] = s.bi_buf;
	  }
	  s.bi_buf = 0;
	  s.bi_valid = 0;
	}

	/* ===========================================================================
	 * Copy a stored block, storing first the length and its
	 * one's complement if requested.
	 */
	function copy_block(s, buf, len, header)
	//DeflateState *s;
	//charf    *buf;    /* the input data */
	//unsigned len;     /* its length */
	//int      header;  /* true if block header must be written */
	{
	  bi_windup(s);        /* align on byte boundary */

	  if (header) {
	    put_short(s, len);
	    put_short(s, ~len);
	  }
	//  while (len--) {
	//    put_byte(s, *buf++);
	//  }
	  common.arraySet(s.pending_buf, s.window, buf, len, s.pending);
	  s.pending += len;
	}

	/* ===========================================================================
	 * Compares to subtrees, using the tree depth as tie breaker when
	 * the subtrees have equal frequency. This minimizes the worst case length.
	 */
	function smaller(tree, n, m, depth) {
	  var _n2 = n * 2;
	  var _m2 = m * 2;
	  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
	         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
	}

	/* ===========================================================================
	 * Restore the heap property by moving down the tree starting at node k,
	 * exchanging a node with the smallest of its two sons if necessary, stopping
	 * when the heap property is re-established (each father smaller than its
	 * two sons).
	 */
	function pqdownheap(s, tree, k)
	//    deflate_state *s;
	//    ct_data *tree;  /* the tree to restore */
	//    int k;               /* node to move down */
	{
	  var v = s.heap[k];
	  var j = k << 1;  /* left son of k */
	  while (j <= s.heap_len) {
	    /* Set j to the smallest of the two sons: */
	    if (j < s.heap_len &&
	      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
	      j++;
	    }
	    /* Exit if v is smaller than both sons */
	    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

	    /* Exchange v with the smallest son */
	    s.heap[k] = s.heap[j];
	    k = j;

	    /* And continue down the tree, setting j to the left son of k */
	    j <<= 1;
	  }
	  s.heap[k] = v;
	}


	// inlined manually
	// var SMALLEST = 1;

	/* ===========================================================================
	 * Send the block data compressed using the given Huffman trees
	 */
	function compress_block(s, ltree, dtree)
	//    deflate_state *s;
	//    const ct_data *ltree; /* literal tree */
	//    const ct_data *dtree; /* distance tree */
	{
	  var dist;           /* distance of matched string */
	  var lc;             /* match length or unmatched char (if dist == 0) */
	  var lx = 0;         /* running index in l_buf */
	  var code;           /* the code to send */
	  var extra;          /* number of extra bits to send */

	  if (s.last_lit !== 0) {
	    do {
	      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
	      lc = s.pending_buf[s.l_buf + lx];
	      lx++;

	      if (dist === 0) {
	        send_code(s, lc, ltree); /* send a literal byte */
	        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
	      } else {
	        /* Here, lc is the match length - MIN_MATCH */
	        code = _length_code[lc];
	        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
	        extra = extra_lbits[code];
	        if (extra !== 0) {
	          lc -= base_length[code];
	          send_bits(s, lc, extra);       /* send the extra length bits */
	        }
	        dist--; /* dist is now the match distance - 1 */
	        code = d_code(dist);
	        //Assert (code < D_CODES, "bad d_code");

	        send_code(s, code, dtree);       /* send the distance code */
	        extra = extra_dbits[code];
	        if (extra !== 0) {
	          dist -= base_dist[code];
	          send_bits(s, dist, extra);   /* send the extra distance bits */
	        }
	      } /* literal or match pair ? */

	      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
	      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
	      //       "pendingBuf overflow");

	    } while (lx < s.last_lit);
	  }

	  send_code(s, END_BLOCK, ltree);
	}


	/* ===========================================================================
	 * Construct one Huffman tree and assigns the code bit strings and lengths.
	 * Update the total bit length for the current block.
	 * IN assertion: the field freq is set for all tree elements.
	 * OUT assertions: the fields len and code are set to the optimal bit length
	 *     and corresponding code. The length opt_len is updated; static_len is
	 *     also updated if stree is not null. The field max_code is set.
	 */
	function build_tree(s, desc)
	//    deflate_state *s;
	//    tree_desc *desc; /* the tree descriptor */
	{
	  var tree     = desc.dyn_tree;
	  var stree    = desc.stat_desc.static_tree;
	  var has_stree = desc.stat_desc.has_stree;
	  var elems    = desc.stat_desc.elems;
	  var n, m;          /* iterate over heap elements */
	  var max_code = -1; /* largest code with non zero frequency */
	  var node;          /* new node being created */

	  /* Construct the initial heap, with least frequent element in
	   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
	   * heap[0] is not used.
	   */
	  s.heap_len = 0;
	  s.heap_max = HEAP_SIZE;

	  for (n = 0; n < elems; n++) {
	    if (tree[n * 2]/*.Freq*/ !== 0) {
	      s.heap[++s.heap_len] = max_code = n;
	      s.depth[n] = 0;

	    } else {
	      tree[n * 2 + 1]/*.Len*/ = 0;
	    }
	  }

	  /* The pkzip format requires that at least one distance code exists,
	   * and that at least one bit should be sent even if there is only one
	   * possible code. So to avoid special checks later on we force at least
	   * two codes of non zero frequency.
	   */
	  while (s.heap_len < 2) {
	    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
	    tree[node * 2]/*.Freq*/ = 1;
	    s.depth[node] = 0;
	    s.opt_len--;

	    if (has_stree) {
	      s.static_len -= stree[node * 2 + 1]/*.Len*/;
	    }
	    /* node is 0 or 1 so it does not have extra bits */
	  }
	  desc.max_code = max_code;

	  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
	   * establish sub-heaps of increasing lengths:
	   */
	  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

	  /* Construct the Huffman tree by repeatedly combining the least two
	   * frequent nodes.
	   */
	  node = elems;              /* next internal node of the tree */
	  do {
	    //pqremove(s, tree, n);  /* n = node of least frequency */
	    /*** pqremove ***/
	    n = s.heap[1/*SMALLEST*/];
	    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
	    pqdownheap(s, tree, 1/*SMALLEST*/);
	    /***/

	    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

	    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
	    s.heap[--s.heap_max] = m;

	    /* Create a new node father of n and m */
	    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
	    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
	    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

	    /* and insert the new node in the heap */
	    s.heap[1/*SMALLEST*/] = node++;
	    pqdownheap(s, tree, 1/*SMALLEST*/);

	  } while (s.heap_len >= 2);

	  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

	  /* At this point, the fields freq and dad are set. We can now
	   * generate the bit lengths.
	   */
	  gen_bitlen(s, desc);

	  /* The field len is now set, we can generate the bit codes */
	  gen_codes(tree, max_code, s.bl_count);
	}


	/* ===========================================================================
	 * Scan a literal or distance tree to determine the frequencies of the codes
	 * in the bit length tree.
	 */
	function scan_tree(s, tree, max_code)
	//    deflate_state *s;
	//    ct_data *tree;   /* the tree to be scanned */
	//    int max_code;    /* and its largest code of non zero frequency */
	{
	  var n;                     /* iterates over all tree elements */
	  var prevlen = -1;          /* last emitted length */
	  var curlen;                /* length of current code */

	  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

	  var count = 0;             /* repeat count of the current code */
	  var max_count = 7;         /* max repeat count */
	  var min_count = 4;         /* min repeat count */

	  if (nextlen === 0) {
	    max_count = 138;
	    min_count = 3;
	  }
	  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

	  for (n = 0; n <= max_code; n++) {
	    curlen = nextlen;
	    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

	    if (++count < max_count && curlen === nextlen) {
	      continue;

	    } else if (count < min_count) {
	      s.bl_tree[curlen * 2]/*.Freq*/ += count;

	    } else if (curlen !== 0) {

	      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
	      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

	    } else if (count <= 10) {
	      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

	    } else {
	      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
	    }

	    count = 0;
	    prevlen = curlen;

	    if (nextlen === 0) {
	      max_count = 138;
	      min_count = 3;

	    } else if (curlen === nextlen) {
	      max_count = 6;
	      min_count = 3;

	    } else {
	      max_count = 7;
	      min_count = 4;
	    }
	  }
	}


	/* ===========================================================================
	 * Send a literal or distance tree in compressed form, using the codes in
	 * bl_tree.
	 */
	function send_tree(s, tree, max_code)
	//    deflate_state *s;
	//    ct_data *tree; /* the tree to be scanned */
	//    int max_code;       /* and its largest code of non zero frequency */
	{
	  var n;                     /* iterates over all tree elements */
	  var prevlen = -1;          /* last emitted length */
	  var curlen;                /* length of current code */

	  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

	  var count = 0;             /* repeat count of the current code */
	  var max_count = 7;         /* max repeat count */
	  var min_count = 4;         /* min repeat count */

	  /* tree[max_code+1].Len = -1; */  /* guard already set */
	  if (nextlen === 0) {
	    max_count = 138;
	    min_count = 3;
	  }

	  for (n = 0; n <= max_code; n++) {
	    curlen = nextlen;
	    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

	    if (++count < max_count && curlen === nextlen) {
	      continue;

	    } else if (count < min_count) {
	      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

	    } else if (curlen !== 0) {
	      if (curlen !== prevlen) {
	        send_code(s, curlen, s.bl_tree);
	        count--;
	      }
	      //Assert(count >= 3 && count <= 6, " 3_6?");
	      send_code(s, REP_3_6, s.bl_tree);
	      send_bits(s, count - 3, 2);

	    } else if (count <= 10) {
	      send_code(s, REPZ_3_10, s.bl_tree);
	      send_bits(s, count - 3, 3);

	    } else {
	      send_code(s, REPZ_11_138, s.bl_tree);
	      send_bits(s, count - 11, 7);
	    }

	    count = 0;
	    prevlen = curlen;
	    if (nextlen === 0) {
	      max_count = 138;
	      min_count = 3;

	    } else if (curlen === nextlen) {
	      max_count = 6;
	      min_count = 3;

	    } else {
	      max_count = 7;
	      min_count = 4;
	    }
	  }
	}


	/* ===========================================================================
	 * Construct the Huffman tree for the bit lengths and return the index in
	 * bl_order of the last bit length code to send.
	 */
	function build_bl_tree(s) {
	  var max_blindex;  /* index of last bit length code of non zero freq */

	  /* Determine the bit length frequencies for literal and distance trees */
	  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
	  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

	  /* Build the bit length tree: */
	  build_tree(s, s.bl_desc);
	  /* opt_len now includes the length of the tree representations, except
	   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
	   */

	  /* Determine the number of bit length codes to send. The pkzip format
	   * requires that at least 4 bit length codes be sent. (appnote.txt says
	   * 3 but the actual value used is 4.)
	   */
	  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
	    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
	      break;
	    }
	  }
	  /* Update opt_len to include the bit length tree and counts */
	  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
	  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
	  //        s->opt_len, s->static_len));

	  return max_blindex;
	}


	/* ===========================================================================
	 * Send the header for a block using dynamic Huffman trees: the counts, the
	 * lengths of the bit length codes, the literal tree and the distance tree.
	 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
	 */
	function send_all_trees(s, lcodes, dcodes, blcodes)
	//    deflate_state *s;
	//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
	{
	  var rank;                    /* index in bl_order */

	  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
	  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
	  //        "too many codes");
	  //Tracev((stderr, "\nbl counts: "));
	  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
	  send_bits(s, dcodes - 1,   5);
	  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
	  for (rank = 0; rank < blcodes; rank++) {
	    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
	    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
	  }
	  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

	  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
	  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

	  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
	  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
	}


	/* ===========================================================================
	 * Check if the data type is TEXT or BINARY, using the following algorithm:
	 * - TEXT if the two conditions below are satisfied:
	 *    a) There are no non-portable control characters belonging to the
	 *       "black list" (0..6, 14..25, 28..31).
	 *    b) There is at least one printable character belonging to the
	 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
	 * - BINARY otherwise.
	 * - The following partially-portable control characters form a
	 *   "gray list" that is ignored in this detection algorithm:
	 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
	 * IN assertion: the fields Freq of dyn_ltree are set.
	 */
	function detect_data_type(s) {
	  /* black_mask is the bit mask of black-listed bytes
	   * set bits 0..6, 14..25, and 28..31
	   * 0xf3ffc07f = binary 11110011111111111100000001111111
	   */
	  var black_mask = 0xf3ffc07f;
	  var n;

	  /* Check for non-textual ("black-listed") bytes. */
	  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
	    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
	      return Z_BINARY;
	    }
	  }

	  /* Check for textual ("white-listed") bytes. */
	  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
	      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
	    return Z_TEXT;
	  }
	  for (n = 32; n < LITERALS; n++) {
	    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
	      return Z_TEXT;
	    }
	  }

	  /* There are no "black-listed" or "white-listed" bytes:
	   * this stream either is empty or has tolerated ("gray-listed") bytes only.
	   */
	  return Z_BINARY;
	}


	var static_init_done = false;

	/* ===========================================================================
	 * Initialize the tree data structures for a new zlib stream.
	 */
	function _tr_init(s)
	{

	  if (!static_init_done) {
	    tr_static_init();
	    static_init_done = true;
	  }

	  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
	  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
	  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

	  s.bi_buf = 0;
	  s.bi_valid = 0;

	  /* Initialize the first block of the first file: */
	  init_block(s);
	}


	/* ===========================================================================
	 * Send a stored block
	 */
	function _tr_stored_block(s, buf, stored_len, last)
	//DeflateState *s;
	//charf *buf;       /* input block */
	//ulg stored_len;   /* length of input block */
	//int last;         /* one if this is the last block for a file */
	{
	  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
	  copy_block(s, buf, stored_len, true); /* with header */
	}


	/* ===========================================================================
	 * Send one empty static block to give enough lookahead for inflate.
	 * This takes 10 bits, of which 7 may remain in the bit buffer.
	 */
	function _tr_align(s) {
	  send_bits(s, STATIC_TREES << 1, 3);
	  send_code(s, END_BLOCK, static_ltree);
	  bi_flush(s);
	}


	/* ===========================================================================
	 * Determine the best encoding for the current block: dynamic trees, static
	 * trees or store, and output the encoded block to the zip file.
	 */
	function _tr_flush_block(s, buf, stored_len, last)
	//DeflateState *s;
	//charf *buf;       /* input block, or NULL if too old */
	//ulg stored_len;   /* length of input block */
	//int last;         /* one if this is the last block for a file */
	{
	  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
	  var max_blindex = 0;        /* index of last bit length code of non zero freq */

	  /* Build the Huffman trees unless a stored block is forced */
	  if (s.level > 0) {

	    /* Check if the file is binary or text */
	    if (s.strm.data_type === Z_UNKNOWN) {
	      s.strm.data_type = detect_data_type(s);
	    }

	    /* Construct the literal and distance trees */
	    build_tree(s, s.l_desc);
	    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
	    //        s->static_len));

	    build_tree(s, s.d_desc);
	    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
	    //        s->static_len));
	    /* At this point, opt_len and static_len are the total bit lengths of
	     * the compressed block data, excluding the tree representations.
	     */

	    /* Build the bit length tree for the above two trees, and get the index
	     * in bl_order of the last bit length code to send.
	     */
	    max_blindex = build_bl_tree(s);

	    /* Determine the best encoding. Compute the block lengths in bytes. */
	    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
	    static_lenb = (s.static_len + 3 + 7) >>> 3;

	    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
	    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
	    //        s->last_lit));

	    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

	  } else {
	    // Assert(buf != (char*)0, "lost buf");
	    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
	  }

	  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
	    /* 4: two words for the lengths */

	    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
	     * Otherwise we can't have processed more than WSIZE input bytes since
	     * the last block flush, because compression would have been
	     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
	     * transform a block into a stored block.
	     */
	    _tr_stored_block(s, buf, stored_len, last);

	  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

	    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
	    compress_block(s, static_ltree, static_dtree);

	  } else {
	    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
	    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
	    compress_block(s, s.dyn_ltree, s.dyn_dtree);
	  }
	  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
	  /* The above check is made mod 2^32, for files larger than 512 MB
	   * and uLong implemented on 32 bits.
	   */
	  init_block(s);

	  if (last) {
	    bi_windup(s);
	  }
	  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
	  //       s->compressed_len-7*last));
	}

	/* ===========================================================================
	 * Save the match info and tally the frequency counts. Return true if
	 * the current block must be flushed.
	 */
	function _tr_tally(s, dist, lc)
	//    deflate_state *s;
	//    unsigned dist;  /* distance of matched string */
	//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
	{
	  //var out_length, in_length, dcode;

	  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
	  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

	  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
	  s.last_lit++;

	  if (dist === 0) {
	    /* lc is the unmatched char */
	    s.dyn_ltree[lc * 2]/*.Freq*/++;
	  } else {
	    s.matches++;
	    /* Here, lc is the match length - MIN_MATCH */
	    dist--;             /* dist = match distance - 1 */
	    //Assert((ush)dist < (ush)MAX_DIST(s) &&
	    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
	    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

	    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
	    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
	  }

	// (!) This block is disabled in zlib defaults,
	// don't enable it for binary compatibility

	//#ifdef TRUNCATE_BLOCK
	//  /* Try to guess if it is profitable to stop the current block here */
	//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
	//    /* Compute an upper bound for the compressed length */
	//    out_length = s.last_lit*8;
	//    in_length = s.strstart - s.block_start;
	//
	//    for (dcode = 0; dcode < D_CODES; dcode++) {
	//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
	//    }
	//    out_length >>>= 3;
	//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
	//    //       s->last_lit, in_length, out_length,
	//    //       100L - out_length*100L/in_length));
	//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
	//      return true;
	//    }
	//  }
	//#endif

	  return (s.last_lit === s.lit_bufsize - 1);
	  /* We avoid equality with lit_bufsize because of wraparound at 64K
	   * on 16 bit machines and because stored blocks are restricted to
	   * 64K-1 bytes.
	   */
	}

	var _tr_init_1  = _tr_init;
	var _tr_stored_block_1 = _tr_stored_block;
	var _tr_flush_block_1  = _tr_flush_block;
	var _tr_tally_1 = _tr_tally;
	var _tr_align_1 = _tr_align;

	var trees = {
		_tr_init: _tr_init_1,
		_tr_stored_block: _tr_stored_block_1,
		_tr_flush_block: _tr_flush_block_1,
		_tr_tally: _tr_tally_1,
		_tr_align: _tr_align_1
	};

	// Note: adler32 takes 12% for level 0 and 2% for level 6.
	// It isn't worth it to make additional optimizations as in original.
	// Small size is preferable.

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	function adler32(adler, buf, len, pos) {
	  var s1 = (adler & 0xffff) |0,
	      s2 = ((adler >>> 16) & 0xffff) |0,
	      n = 0;

	  while (len !== 0) {
	    // Set limit ~ twice less than 5552, to keep
	    // s2 in 31-bits, because we force signed ints.
	    // in other case %= will fail.
	    n = len > 2000 ? 2000 : len;
	    len -= n;

	    do {
	      s1 = (s1 + buf[pos++]) |0;
	      s2 = (s2 + s1) |0;
	    } while (--n);

	    s1 %= 65521;
	    s2 %= 65521;
	  }

	  return (s1 | (s2 << 16)) |0;
	}


	var adler32_1 = adler32;

	// Note: we can't get significant speed boost here.
	// So write code to minimize size - no pregenerated tables
	// and array tools dependencies.

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	// Use ordinary array, since untyped makes no boost here
	function makeTable() {
	  var c, table = [];

	  for (var n = 0; n < 256; n++) {
	    c = n;
	    for (var k = 0; k < 8; k++) {
	      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
	    }
	    table[n] = c;
	  }

	  return table;
	}

	// Create table on load. Just 255 signed longs. Not a problem.
	var crcTable = makeTable();


	function crc32(crc, buf, len, pos) {
	  var t = crcTable,
	      end = pos + len;

	  crc ^= -1;

	  for (var i = pos; i < end; i++) {
	    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
	  }

	  return (crc ^ (-1)); // >>> 0;
	}


	var crc32_1 = crc32;

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	var messages = {
	  2:      'need dictionary',     /* Z_NEED_DICT       2  */
	  1:      'stream end',          /* Z_STREAM_END      1  */
	  0:      '',                    /* Z_OK              0  */
	  '-1':   'file error',          /* Z_ERRNO         (-1) */
	  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
	  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
	  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
	  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
	  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.







	/* Public constants ==========================================================*/
	/* ===========================================================================*/


	/* Allowed flush values; see deflate() and inflate() below for details */
	var Z_NO_FLUSH      = 0;
	var Z_PARTIAL_FLUSH = 1;
	//var Z_SYNC_FLUSH    = 2;
	var Z_FULL_FLUSH    = 3;
	var Z_FINISH        = 4;
	var Z_BLOCK         = 5;
	//var Z_TREES         = 6;


	/* Return codes for the compression/decompression functions. Negative values
	 * are errors, positive values are used for special but normal events.
	 */
	var Z_OK            = 0;
	var Z_STREAM_END    = 1;
	//var Z_NEED_DICT     = 2;
	//var Z_ERRNO         = -1;
	var Z_STREAM_ERROR  = -2;
	var Z_DATA_ERROR    = -3;
	//var Z_MEM_ERROR     = -4;
	var Z_BUF_ERROR     = -5;
	//var Z_VERSION_ERROR = -6;


	/* compression levels */
	//var Z_NO_COMPRESSION      = 0;
	//var Z_BEST_SPEED          = 1;
	//var Z_BEST_COMPRESSION    = 9;
	var Z_DEFAULT_COMPRESSION = -1;


	var Z_FILTERED            = 1;
	var Z_HUFFMAN_ONLY        = 2;
	var Z_RLE                 = 3;
	var Z_FIXED$1               = 4;
	var Z_DEFAULT_STRATEGY    = 0;

	/* Possible values of the data_type field (though see inflate()) */
	//var Z_BINARY              = 0;
	//var Z_TEXT                = 1;
	//var Z_ASCII               = 1; // = Z_TEXT
	var Z_UNKNOWN$1             = 2;


	/* The deflate compression method */
	var Z_DEFLATED  = 8;

	/*============================================================================*/


	var MAX_MEM_LEVEL = 9;
	/* Maximum value for memLevel in deflateInit2 */
	var MAX_WBITS = 15;
	/* 32K LZ77 window */
	var DEF_MEM_LEVEL = 8;


	var LENGTH_CODES$1  = 29;
	/* number of length codes, not counting the special END_BLOCK code */
	var LITERALS$1      = 256;
	/* number of literal bytes 0..255 */
	var L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
	/* number of Literal or Length codes, including the END_BLOCK code */
	var D_CODES$1       = 30;
	/* number of distance codes */
	var BL_CODES$1      = 19;
	/* number of codes used to transfer the bit lengths */
	var HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
	/* maximum heap size */
	var MAX_BITS$1  = 15;
	/* All codes must not exceed MAX_BITS bits */

	var MIN_MATCH$1 = 3;
	var MAX_MATCH$1 = 258;
	var MIN_LOOKAHEAD = (MAX_MATCH$1 + MIN_MATCH$1 + 1);

	var PRESET_DICT = 0x20;

	var INIT_STATE = 42;
	var EXTRA_STATE = 69;
	var NAME_STATE = 73;
	var COMMENT_STATE = 91;
	var HCRC_STATE = 103;
	var BUSY_STATE = 113;
	var FINISH_STATE = 666;

	var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
	var BS_BLOCK_DONE     = 2; /* block flush performed */
	var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
	var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

	var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

	function err(strm, errorCode) {
	  strm.msg = messages[errorCode];
	  return errorCode;
	}

	function rank(f) {
	  return ((f) << 1) - ((f) > 4 ? 9 : 0);
	}

	function zero$1(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


	/* =========================================================================
	 * Flush as much pending output as possible. All deflate() output goes
	 * through this function so some applications may wish to modify it
	 * to avoid allocating a large strm->output buffer and copying into it.
	 * (See also read_buf()).
	 */
	function flush_pending(strm) {
	  var s = strm.state;

	  //_tr_flush_bits(s);
	  var len = s.pending;
	  if (len > strm.avail_out) {
	    len = strm.avail_out;
	  }
	  if (len === 0) { return; }

	  common.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
	  strm.next_out += len;
	  s.pending_out += len;
	  strm.total_out += len;
	  strm.avail_out -= len;
	  s.pending -= len;
	  if (s.pending === 0) {
	    s.pending_out = 0;
	  }
	}


	function flush_block_only(s, last) {
	  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
	  s.block_start = s.strstart;
	  flush_pending(s.strm);
	}


	function put_byte(s, b) {
	  s.pending_buf[s.pending++] = b;
	}


	/* =========================================================================
	 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
	 * IN assertion: the stream state is correct and there is enough room in
	 * pending_buf.
	 */
	function putShortMSB(s, b) {
	//  put_byte(s, (Byte)(b >> 8));
	//  put_byte(s, (Byte)(b & 0xff));
	  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
	  s.pending_buf[s.pending++] = b & 0xff;
	}


	/* ===========================================================================
	 * Read a new buffer from the current input stream, update the adler32
	 * and total number of bytes read.  All deflate() input goes through
	 * this function so some applications may wish to modify it to avoid
	 * allocating a large strm->input buffer and copying from it.
	 * (See also flush_pending()).
	 */
	function read_buf(strm, buf, start, size) {
	  var len = strm.avail_in;

	  if (len > size) { len = size; }
	  if (len === 0) { return 0; }

	  strm.avail_in -= len;

	  // zmemcpy(buf, strm->next_in, len);
	  common.arraySet(buf, strm.input, strm.next_in, len, start);
	  if (strm.state.wrap === 1) {
	    strm.adler = adler32_1(strm.adler, buf, len, start);
	  }

	  else if (strm.state.wrap === 2) {
	    strm.adler = crc32_1(strm.adler, buf, len, start);
	  }

	  strm.next_in += len;
	  strm.total_in += len;

	  return len;
	}


	/* ===========================================================================
	 * Set match_start to the longest match starting at the given string and
	 * return its length. Matches shorter or equal to prev_length are discarded,
	 * in which case the result is equal to prev_length and match_start is
	 * garbage.
	 * IN assertions: cur_match is the head of the hash chain for the current
	 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
	 * OUT assertion: the match length is not greater than s->lookahead.
	 */
	function longest_match(s, cur_match) {
	  var chain_length = s.max_chain_length;      /* max hash chain length */
	  var scan = s.strstart; /* current string */
	  var match;                       /* matched string */
	  var len;                           /* length of current match */
	  var best_len = s.prev_length;              /* best match length so far */
	  var nice_match = s.nice_match;             /* stop if match long enough */
	  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
	      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

	  var _win = s.window; // shortcut

	  var wmask = s.w_mask;
	  var prev  = s.prev;

	  /* Stop when cur_match becomes <= limit. To simplify the code,
	   * we prevent matches with the string of window index 0.
	   */

	  var strend = s.strstart + MAX_MATCH$1;
	  var scan_end1  = _win[scan + best_len - 1];
	  var scan_end   = _win[scan + best_len];

	  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
	   * It is easy to get rid of this optimization if necessary.
	   */
	  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

	  /* Do not waste too much time if we already have a good match: */
	  if (s.prev_length >= s.good_match) {
	    chain_length >>= 2;
	  }
	  /* Do not look for matches beyond the end of the input. This is necessary
	   * to make deflate deterministic.
	   */
	  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

	  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

	  do {
	    // Assert(cur_match < s->strstart, "no future");
	    match = cur_match;

	    /* Skip to next match if the match length cannot increase
	     * or if the match length is less than 2.  Note that the checks below
	     * for insufficient lookahead only occur occasionally for performance
	     * reasons.  Therefore uninitialized memory will be accessed, and
	     * conditional jumps will be made that depend on those values.
	     * However the length of the match is limited to the lookahead, so
	     * the output of deflate is not affected by the uninitialized values.
	     */

	    if (_win[match + best_len]     !== scan_end  ||
	        _win[match + best_len - 1] !== scan_end1 ||
	        _win[match]                !== _win[scan] ||
	        _win[++match]              !== _win[scan + 1]) {
	      continue;
	    }

	    /* The check at best_len-1 can be removed because it will be made
	     * again later. (This heuristic is not always a win.)
	     * It is not necessary to compare scan[2] and match[2] since they
	     * are always equal when the other bytes match, given that
	     * the hash keys are equal and that HASH_BITS >= 8.
	     */
	    scan += 2;
	    match++;
	    // Assert(*scan == *match, "match[2]?");

	    /* We check for insufficient lookahead only every 8th comparison;
	     * the 256th check will be made at strstart+258.
	     */
	    do {
	      /*jshint noempty:false*/
	    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
	             scan < strend);

	    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

	    len = MAX_MATCH$1 - (strend - scan);
	    scan = strend - MAX_MATCH$1;

	    if (len > best_len) {
	      s.match_start = cur_match;
	      best_len = len;
	      if (len >= nice_match) {
	        break;
	      }
	      scan_end1  = _win[scan + best_len - 1];
	      scan_end   = _win[scan + best_len];
	    }
	  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

	  if (best_len <= s.lookahead) {
	    return best_len;
	  }
	  return s.lookahead;
	}


	/* ===========================================================================
	 * Fill the window when the lookahead becomes insufficient.
	 * Updates strstart and lookahead.
	 *
	 * IN assertion: lookahead < MIN_LOOKAHEAD
	 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
	 *    At least one byte has been read, or avail_in == 0; reads are
	 *    performed for at least two bytes (required for the zip translate_eol
	 *    option -- not supported here).
	 */
	function fill_window(s) {
	  var _w_size = s.w_size;
	  var p, n, m, more, str;

	  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

	  do {
	    more = s.window_size - s.lookahead - s.strstart;

	    // JS ints have 32 bit, block below not needed
	    /* Deal with !@#$% 64K limit: */
	    //if (sizeof(int) <= 2) {
	    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
	    //        more = wsize;
	    //
	    //  } else if (more == (unsigned)(-1)) {
	    //        /* Very unlikely, but possible on 16 bit machine if
	    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
	    //         */
	    //        more--;
	    //    }
	    //}


	    /* If the window is almost full and there is insufficient lookahead,
	     * move the upper half to the lower one to make room in the upper half.
	     */
	    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

	      common.arraySet(s.window, s.window, _w_size, _w_size, 0);
	      s.match_start -= _w_size;
	      s.strstart -= _w_size;
	      /* we now have strstart >= MAX_DIST */
	      s.block_start -= _w_size;

	      /* Slide the hash table (could be avoided with 32 bit values
	       at the expense of memory usage). We slide even when level == 0
	       to keep the hash table consistent if we switch back to level > 0
	       later. (Using level 0 permanently is not an optimal usage of
	       zlib, so we don't care about this pathological case.)
	       */

	      n = s.hash_size;
	      p = n;
	      do {
	        m = s.head[--p];
	        s.head[p] = (m >= _w_size ? m - _w_size : 0);
	      } while (--n);

	      n = _w_size;
	      p = n;
	      do {
	        m = s.prev[--p];
	        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
	        /* If n is not on any hash chain, prev[n] is garbage but
	         * its value will never be used.
	         */
	      } while (--n);

	      more += _w_size;
	    }
	    if (s.strm.avail_in === 0) {
	      break;
	    }

	    /* If there was no sliding:
	     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
	     *    more == window_size - lookahead - strstart
	     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
	     * => more >= window_size - 2*WSIZE + 2
	     * In the BIG_MEM or MMAP case (not yet supported),
	     *   window_size == input_size + MIN_LOOKAHEAD  &&
	     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
	     * Otherwise, window_size == 2*WSIZE so more >= 2.
	     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
	     */
	    //Assert(more >= 2, "more < 2");
	    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
	    s.lookahead += n;

	    /* Initialize the hash value now that we have some input: */
	    if (s.lookahead + s.insert >= MIN_MATCH$1) {
	      str = s.strstart - s.insert;
	      s.ins_h = s.window[str];

	      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
	      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
	//#if MIN_MATCH != 3
	//        Call update_hash() MIN_MATCH-3 more times
	//#endif
	      while (s.insert) {
	        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
	        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;

	        s.prev[str & s.w_mask] = s.head[s.ins_h];
	        s.head[s.ins_h] = str;
	        str++;
	        s.insert--;
	        if (s.lookahead + s.insert < MIN_MATCH$1) {
	          break;
	        }
	      }
	    }
	    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
	     * but this is not important since only literal bytes will be emitted.
	     */

	  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

	  /* If the WIN_INIT bytes after the end of the current data have never been
	   * written, then zero those bytes in order to avoid memory check reports of
	   * the use of uninitialized (or uninitialised as Julian writes) bytes by
	   * the longest match routines.  Update the high water mark for the next
	   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
	   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
	   */
	//  if (s.high_water < s.window_size) {
	//    var curr = s.strstart + s.lookahead;
	//    var init = 0;
	//
	//    if (s.high_water < curr) {
	//      /* Previous high water mark below current data -- zero WIN_INIT
	//       * bytes or up to end of window, whichever is less.
	//       */
	//      init = s.window_size - curr;
	//      if (init > WIN_INIT)
	//        init = WIN_INIT;
	//      zmemzero(s->window + curr, (unsigned)init);
	//      s->high_water = curr + init;
	//    }
	//    else if (s->high_water < (ulg)curr + WIN_INIT) {
	//      /* High water mark at or above current data, but below current data
	//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
	//       * to end of window, whichever is less.
	//       */
	//      init = (ulg)curr + WIN_INIT - s->high_water;
	//      if (init > s->window_size - s->high_water)
	//        init = s->window_size - s->high_water;
	//      zmemzero(s->window + s->high_water, (unsigned)init);
	//      s->high_water += init;
	//    }
	//  }
	//
	//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
	//    "not enough room for search");
	}

	/* ===========================================================================
	 * Copy without compression as much as possible from the input stream, return
	 * the current block state.
	 * This function does not insert new strings in the dictionary since
	 * uncompressible data is probably not useful. This function is used
	 * only for the level=0 compression option.
	 * NOTE: this function should be optimized to avoid extra copying from
	 * window to pending_buf.
	 */
	function deflate_stored(s, flush) {
	  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
	   * to pending_buf_size, and each stored block has a 5 byte header:
	   */
	  var max_block_size = 0xffff;

	  if (max_block_size > s.pending_buf_size - 5) {
	    max_block_size = s.pending_buf_size - 5;
	  }

	  /* Copy as much as possible from input to output: */
	  for (;;) {
	    /* Fill the window as much as possible: */
	    if (s.lookahead <= 1) {

	      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
	      //  s->block_start >= (long)s->w_size, "slide too late");
	//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
	//        s.block_start >= s.w_size)) {
	//        throw  new Error("slide too late");
	//      }

	      fill_window(s);
	      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }

	      if (s.lookahead === 0) {
	        break;
	      }
	      /* flush the current block */
	    }
	    //Assert(s->block_start >= 0L, "block gone");
	//    if (s.block_start < 0) throw new Error("block gone");

	    s.strstart += s.lookahead;
	    s.lookahead = 0;

	    /* Emit a stored block if pending_buf will be full: */
	    var max_start = s.block_start + max_block_size;

	    if (s.strstart === 0 || s.strstart >= max_start) {
	      /* strstart == 0 is possible when wraparound on 16-bit machine */
	      s.lookahead = s.strstart - max_start;
	      s.strstart = max_start;
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/


	    }
	    /* Flush if we may have to slide, otherwise block_start may become
	     * negative and the data will be gone:
	     */
	    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }

	  s.insert = 0;

	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }

	  if (s.strstart > s.block_start) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }

	  return BS_NEED_MORE;
	}

	/* ===========================================================================
	 * Compress as much as possible from the input stream, return the current
	 * block state.
	 * This function does not perform lazy evaluation of matches and inserts
	 * new strings in the dictionary only for unmatched strings or for short
	 * matches. It is used only for the fast compression options.
	 */
	function deflate_fast(s, flush) {
	  var hash_head;        /* head of the hash chain */
	  var bflush;           /* set if current block must be flushed */

	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the next match, plus MIN_MATCH bytes to insert the
	     * string following the next match.
	     */
	    if (s.lookahead < MIN_LOOKAHEAD) {
	      fill_window(s);
	      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) {
	        break; /* flush the current block */
	      }
	    }

	    /* Insert the string window[strstart .. strstart+2] in the
	     * dictionary, and set hash_head to the head of the hash chain:
	     */
	    hash_head = 0/*NIL*/;
	    if (s.lookahead >= MIN_MATCH$1) {
	      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
	      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	      s.head[s.ins_h] = s.strstart;
	      /***/
	    }

	    /* Find the longest match, discarding those <= prev_length.
	     * At this point we have always match_length < MIN_MATCH
	     */
	    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
	      /* To simplify the code, we prevent matches with the string
	       * of window index 0 (in particular we have to avoid a match
	       * of the string with itself at the start of the input file).
	       */
	      s.match_length = longest_match(s, hash_head);
	      /* longest_match() sets match_start */
	    }
	    if (s.match_length >= MIN_MATCH$1) {
	      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

	      /*** _tr_tally_dist(s, s.strstart - s.match_start,
	                     s.match_length - MIN_MATCH, bflush); ***/
	      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);

	      s.lookahead -= s.match_length;

	      /* Insert new strings in the hash table only if the match length
	       * is not too large. This saves time but degrades compression.
	       */
	      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH$1) {
	        s.match_length--; /* string at strstart already in table */
	        do {
	          s.strstart++;
	          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
	          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	          s.head[s.ins_h] = s.strstart;
	          /***/
	          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
	           * always MIN_MATCH bytes ahead.
	           */
	        } while (--s.match_length !== 0);
	        s.strstart++;
	      } else
	      {
	        s.strstart += s.match_length;
	        s.match_length = 0;
	        s.ins_h = s.window[s.strstart];
	        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
	        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

	//#if MIN_MATCH != 3
	//                Call UPDATE_HASH() MIN_MATCH-3 more times
	//#endif
	        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
	         * matter since it will be recomputed at next deflate call.
	         */
	      }
	    } else {
	      /* No match, output a literal byte */
	      //Tracevv((stderr,"%c", s.window[s.strstart]));
	      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

	      s.lookahead--;
	      s.strstart++;
	    }
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = ((s.strstart < (MIN_MATCH$1 - 1)) ? s.strstart : MIN_MATCH$1 - 1);
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.last_lit) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	}

	/* ===========================================================================
	 * Same as above, but achieves better compression. We use a lazy
	 * evaluation for matches: a match is finally adopted only if there is
	 * no better match at the next window position.
	 */
	function deflate_slow(s, flush) {
	  var hash_head;          /* head of hash chain */
	  var bflush;              /* set if current block must be flushed */

	  var max_insert;

	  /* Process the input block. */
	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the next match, plus MIN_MATCH bytes to insert the
	     * string following the next match.
	     */
	    if (s.lookahead < MIN_LOOKAHEAD) {
	      fill_window(s);
	      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) { break; } /* flush the current block */
	    }

	    /* Insert the string window[strstart .. strstart+2] in the
	     * dictionary, and set hash_head to the head of the hash chain:
	     */
	    hash_head = 0/*NIL*/;
	    if (s.lookahead >= MIN_MATCH$1) {
	      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
	      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	      s.head[s.ins_h] = s.strstart;
	      /***/
	    }

	    /* Find the longest match, discarding those <= prev_length.
	     */
	    s.prev_length = s.match_length;
	    s.prev_match = s.match_start;
	    s.match_length = MIN_MATCH$1 - 1;

	    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
	        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
	      /* To simplify the code, we prevent matches with the string
	       * of window index 0 (in particular we have to avoid a match
	       * of the string with itself at the start of the input file).
	       */
	      s.match_length = longest_match(s, hash_head);
	      /* longest_match() sets match_start */

	      if (s.match_length <= 5 &&
	         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

	        /* If prev_match is also MIN_MATCH, match_start is garbage
	         * but we will ignore the current match anyway.
	         */
	        s.match_length = MIN_MATCH$1 - 1;
	      }
	    }
	    /* If there was a match at the previous step and the current
	     * match is not better, output the previous match:
	     */
	    if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {
	      max_insert = s.strstart + s.lookahead - MIN_MATCH$1;
	      /* Do not insert strings in hash table beyond this. */

	      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

	      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
	                     s.prev_length - MIN_MATCH, bflush);***/
	      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);
	      /* Insert in hash table all strings up to the end of the match.
	       * strstart-1 and strstart are already inserted. If there is not
	       * enough lookahead, the last two strings are not inserted in
	       * the hash table.
	       */
	      s.lookahead -= s.prev_length - 1;
	      s.prev_length -= 2;
	      do {
	        if (++s.strstart <= max_insert) {
	          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
	          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
	          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
	          s.head[s.ins_h] = s.strstart;
	          /***/
	        }
	      } while (--s.prev_length !== 0);
	      s.match_available = 0;
	      s.match_length = MIN_MATCH$1 - 1;
	      s.strstart++;

	      if (bflush) {
	        /*** FLUSH_BLOCK(s, 0); ***/
	        flush_block_only(s, false);
	        if (s.strm.avail_out === 0) {
	          return BS_NEED_MORE;
	        }
	        /***/
	      }

	    } else if (s.match_available) {
	      /* If there was no match at the previous position, output a
	       * single literal. If there was a match but the current match
	       * is longer, truncate the previous match to a single literal.
	       */
	      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
	      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
	      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

	      if (bflush) {
	        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
	        flush_block_only(s, false);
	        /***/
	      }
	      s.strstart++;
	      s.lookahead--;
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	    } else {
	      /* There is no previous match to compare with, wait for
	       * the next step to decide.
	       */
	      s.match_available = 1;
	      s.strstart++;
	      s.lookahead--;
	    }
	  }
	  //Assert (flush != Z_NO_FLUSH, "no flush?");
	  if (s.match_available) {
	    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
	    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
	    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

	    s.match_available = 0;
	  }
	  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.last_lit) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }

	  return BS_BLOCK_DONE;
	}


	/* ===========================================================================
	 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
	 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
	 * deflate switches away from Z_RLE.)
	 */
	function deflate_rle(s, flush) {
	  var bflush;            /* set if current block must be flushed */
	  var prev;              /* byte at distance one to match */
	  var scan, strend;      /* scan goes up to strend for length of run */

	  var _win = s.window;

	  for (;;) {
	    /* Make sure that we always have enough lookahead, except
	     * at the end of the input file. We need MAX_MATCH bytes
	     * for the longest run, plus one for the unrolled loop.
	     */
	    if (s.lookahead <= MAX_MATCH$1) {
	      fill_window(s);
	      if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
	        return BS_NEED_MORE;
	      }
	      if (s.lookahead === 0) { break; } /* flush the current block */
	    }

	    /* See how many times the previous byte repeats */
	    s.match_length = 0;
	    if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {
	      scan = s.strstart - 1;
	      prev = _win[scan];
	      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
	        strend = s.strstart + MAX_MATCH$1;
	        do {
	          /*jshint noempty:false*/
	        } while (prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 prev === _win[++scan] && prev === _win[++scan] &&
	                 scan < strend);
	        s.match_length = MAX_MATCH$1 - (strend - scan);
	        if (s.match_length > s.lookahead) {
	          s.match_length = s.lookahead;
	        }
	      }
	      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
	    }

	    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
	    if (s.match_length >= MIN_MATCH$1) {
	      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

	      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
	      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH$1);

	      s.lookahead -= s.match_length;
	      s.strstart += s.match_length;
	      s.match_length = 0;
	    } else {
	      /* No match, output a literal byte */
	      //Tracevv((stderr,"%c", s->window[s->strstart]));
	      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

	      s.lookahead--;
	      s.strstart++;
	    }
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = 0;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.last_lit) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	}

	/* ===========================================================================
	 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
	 * (It will be regenerated if this run of deflate switches away from Huffman.)
	 */
	function deflate_huff(s, flush) {
	  var bflush;             /* set if current block must be flushed */

	  for (;;) {
	    /* Make sure that we have a literal to write. */
	    if (s.lookahead === 0) {
	      fill_window(s);
	      if (s.lookahead === 0) {
	        if (flush === Z_NO_FLUSH) {
	          return BS_NEED_MORE;
	        }
	        break;      /* flush the current block */
	      }
	    }

	    /* Output a literal byte */
	    s.match_length = 0;
	    //Tracevv((stderr,"%c", s->window[s->strstart]));
	    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
	    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
	    s.lookahead--;
	    s.strstart++;
	    if (bflush) {
	      /*** FLUSH_BLOCK(s, 0); ***/
	      flush_block_only(s, false);
	      if (s.strm.avail_out === 0) {
	        return BS_NEED_MORE;
	      }
	      /***/
	    }
	  }
	  s.insert = 0;
	  if (flush === Z_FINISH) {
	    /*** FLUSH_BLOCK(s, 1); ***/
	    flush_block_only(s, true);
	    if (s.strm.avail_out === 0) {
	      return BS_FINISH_STARTED;
	    }
	    /***/
	    return BS_FINISH_DONE;
	  }
	  if (s.last_lit) {
	    /*** FLUSH_BLOCK(s, 0); ***/
	    flush_block_only(s, false);
	    if (s.strm.avail_out === 0) {
	      return BS_NEED_MORE;
	    }
	    /***/
	  }
	  return BS_BLOCK_DONE;
	}

	/* Values for max_lazy_match, good_match and max_chain_length, depending on
	 * the desired pack level (0..9). The values given below have been tuned to
	 * exclude worst case performance for pathological files. Better values may be
	 * found for specific files.
	 */
	function Config(good_length, max_lazy, nice_length, max_chain, func) {
	  this.good_length = good_length;
	  this.max_lazy = max_lazy;
	  this.nice_length = nice_length;
	  this.max_chain = max_chain;
	  this.func = func;
	}

	var configuration_table;

	configuration_table = [
	  /*      good lazy nice chain */
	  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
	  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
	  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
	  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

	  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
	  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
	  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
	  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
	  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
	  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
	];


	/* ===========================================================================
	 * Initialize the "longest match" routines for a new zlib stream
	 */
	function lm_init(s) {
	  s.window_size = 2 * s.w_size;

	  /*** CLEAR_HASH(s); ***/
	  zero$1(s.head); // Fill with NIL (= 0);

	  /* Set the default configuration parameters:
	   */
	  s.max_lazy_match = configuration_table[s.level].max_lazy;
	  s.good_match = configuration_table[s.level].good_length;
	  s.nice_match = configuration_table[s.level].nice_length;
	  s.max_chain_length = configuration_table[s.level].max_chain;

	  s.strstart = 0;
	  s.block_start = 0;
	  s.lookahead = 0;
	  s.insert = 0;
	  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
	  s.match_available = 0;
	  s.ins_h = 0;
	}


	function DeflateState() {
	  this.strm = null;            /* pointer back to this zlib stream */
	  this.status = 0;            /* as the name implies */
	  this.pending_buf = null;      /* output still pending */
	  this.pending_buf_size = 0;  /* size of pending_buf */
	  this.pending_out = 0;       /* next pending byte to output to the stream */
	  this.pending = 0;           /* nb of bytes in the pending buffer */
	  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
	  this.gzhead = null;         /* gzip header information to write */
	  this.gzindex = 0;           /* where in extra, name, or comment */
	  this.method = Z_DEFLATED; /* can only be DEFLATED */
	  this.last_flush = -1;   /* value of flush param for previous deflate call */

	  this.w_size = 0;  /* LZ77 window size (32K by default) */
	  this.w_bits = 0;  /* log2(w_size)  (8..16) */
	  this.w_mask = 0;  /* w_size - 1 */

	  this.window = null;
	  /* Sliding window. Input bytes are read into the second half of the window,
	   * and move to the first half later to keep a dictionary of at least wSize
	   * bytes. With this organization, matches are limited to a distance of
	   * wSize-MAX_MATCH bytes, but this ensures that IO is always
	   * performed with a length multiple of the block size.
	   */

	  this.window_size = 0;
	  /* Actual size of window: 2*wSize, except when the user input buffer
	   * is directly used as sliding window.
	   */

	  this.prev = null;
	  /* Link to older string with same hash index. To limit the size of this
	   * array to 64K, this link is maintained only for the last 32K strings.
	   * An index in this array is thus a window index modulo 32K.
	   */

	  this.head = null;   /* Heads of the hash chains or NIL. */

	  this.ins_h = 0;       /* hash index of string to be inserted */
	  this.hash_size = 0;   /* number of elements in hash table */
	  this.hash_bits = 0;   /* log2(hash_size) */
	  this.hash_mask = 0;   /* hash_size-1 */

	  this.hash_shift = 0;
	  /* Number of bits by which ins_h must be shifted at each input
	   * step. It must be such that after MIN_MATCH steps, the oldest
	   * byte no longer takes part in the hash key, that is:
	   *   hash_shift * MIN_MATCH >= hash_bits
	   */

	  this.block_start = 0;
	  /* Window position at the beginning of the current output block. Gets
	   * negative when the window is moved backwards.
	   */

	  this.match_length = 0;      /* length of best match */
	  this.prev_match = 0;        /* previous match */
	  this.match_available = 0;   /* set if previous match exists */
	  this.strstart = 0;          /* start of string to insert */
	  this.match_start = 0;       /* start of matching string */
	  this.lookahead = 0;         /* number of valid bytes ahead in window */

	  this.prev_length = 0;
	  /* Length of the best match at previous step. Matches not greater than this
	   * are discarded. This is used in the lazy match evaluation.
	   */

	  this.max_chain_length = 0;
	  /* To speed up deflation, hash chains are never searched beyond this
	   * length.  A higher limit improves compression ratio but degrades the
	   * speed.
	   */

	  this.max_lazy_match = 0;
	  /* Attempt to find a better match only when the current match is strictly
	   * smaller than this value. This mechanism is used only for compression
	   * levels >= 4.
	   */
	  // That's alias to max_lazy_match, don't use directly
	  //this.max_insert_length = 0;
	  /* Insert new strings in the hash table only if the match length is not
	   * greater than this length. This saves time but degrades compression.
	   * max_insert_length is used only for compression levels <= 3.
	   */

	  this.level = 0;     /* compression level (1..9) */
	  this.strategy = 0;  /* favor or force Huffman coding*/

	  this.good_match = 0;
	  /* Use a faster search when the previous match is longer than this */

	  this.nice_match = 0; /* Stop searching when current match exceeds this */

	              /* used by trees.c: */

	  /* Didn't use ct_data typedef below to suppress compiler warning */

	  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
	  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
	  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

	  // Use flat array of DOUBLE size, with interleaved fata,
	  // because JS does not support effective
	  this.dyn_ltree  = new common.Buf16(HEAP_SIZE$1 * 2);
	  this.dyn_dtree  = new common.Buf16((2 * D_CODES$1 + 1) * 2);
	  this.bl_tree    = new common.Buf16((2 * BL_CODES$1 + 1) * 2);
	  zero$1(this.dyn_ltree);
	  zero$1(this.dyn_dtree);
	  zero$1(this.bl_tree);

	  this.l_desc   = null;         /* desc. for literal tree */
	  this.d_desc   = null;         /* desc. for distance tree */
	  this.bl_desc  = null;         /* desc. for bit length tree */

	  //ush bl_count[MAX_BITS+1];
	  this.bl_count = new common.Buf16(MAX_BITS$1 + 1);
	  /* number of codes at each bit length for an optimal tree */

	  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
	  this.heap = new common.Buf16(2 * L_CODES$1 + 1);  /* heap used to build the Huffman trees */
	  zero$1(this.heap);

	  this.heap_len = 0;               /* number of elements in the heap */
	  this.heap_max = 0;               /* element of largest frequency */
	  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
	   * The same heap array is used to build all trees.
	   */

	  this.depth = new common.Buf16(2 * L_CODES$1 + 1); //uch depth[2*L_CODES+1];
	  zero$1(this.depth);
	  /* Depth of each subtree used as tie breaker for trees of equal frequency
	   */

	  this.l_buf = 0;          /* buffer index for literals or lengths */

	  this.lit_bufsize = 0;
	  /* Size of match buffer for literals/lengths.  There are 4 reasons for
	   * limiting lit_bufsize to 64K:
	   *   - frequencies can be kept in 16 bit counters
	   *   - if compression is not successful for the first block, all input
	   *     data is still in the window so we can still emit a stored block even
	   *     when input comes from standard input.  (This can also be done for
	   *     all blocks if lit_bufsize is not greater than 32K.)
	   *   - if compression is not successful for a file smaller than 64K, we can
	   *     even emit a stored file instead of a stored block (saving 5 bytes).
	   *     This is applicable only for zip (not gzip or zlib).
	   *   - creating new Huffman trees less frequently may not provide fast
	   *     adaptation to changes in the input data statistics. (Take for
	   *     example a binary file with poorly compressible code followed by
	   *     a highly compressible string table.) Smaller buffer sizes give
	   *     fast adaptation but have of course the overhead of transmitting
	   *     trees more frequently.
	   *   - I can't count above 4
	   */

	  this.last_lit = 0;      /* running index in l_buf */

	  this.d_buf = 0;
	  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
	   * the same number of elements. To use different lengths, an extra flag
	   * array would be necessary.
	   */

	  this.opt_len = 0;       /* bit length of current block with optimal trees */
	  this.static_len = 0;    /* bit length of current block with static trees */
	  this.matches = 0;       /* number of string matches in current block */
	  this.insert = 0;        /* bytes at end of window left to insert */


	  this.bi_buf = 0;
	  /* Output buffer. bits are inserted starting at the bottom (least
	   * significant bits).
	   */
	  this.bi_valid = 0;
	  /* Number of valid bits in bi_buf.  All bits above the last valid bit
	   * are always zero.
	   */

	  // Used for window memory init. We safely ignore it for JS. That makes
	  // sense only for pointers and memory check tools.
	  //this.high_water = 0;
	  /* High water mark offset in window for initialized bytes -- bytes above
	   * this are set to zero in order to avoid memory check warnings when
	   * longest match routines access bytes past the input.  This is then
	   * updated to the new high water mark.
	   */
	}


	function deflateResetKeep(strm) {
	  var s;

	  if (!strm || !strm.state) {
	    return err(strm, Z_STREAM_ERROR);
	  }

	  strm.total_in = strm.total_out = 0;
	  strm.data_type = Z_UNKNOWN$1;

	  s = strm.state;
	  s.pending = 0;
	  s.pending_out = 0;

	  if (s.wrap < 0) {
	    s.wrap = -s.wrap;
	    /* was made negative by deflate(..., Z_FINISH); */
	  }
	  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
	  strm.adler = (s.wrap === 2) ?
	    0  // crc32(0, Z_NULL, 0)
	  :
	    1; // adler32(0, Z_NULL, 0)
	  s.last_flush = Z_NO_FLUSH;
	  trees._tr_init(s);
	  return Z_OK;
	}


	function deflateReset(strm) {
	  var ret = deflateResetKeep(strm);
	  if (ret === Z_OK) {
	    lm_init(strm.state);
	  }
	  return ret;
	}


	function deflateSetHeader(strm, head) {
	  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
	  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
	  strm.state.gzhead = head;
	  return Z_OK;
	}


	function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
	  if (!strm) { // === Z_NULL
	    return Z_STREAM_ERROR;
	  }
	  var wrap = 1;

	  if (level === Z_DEFAULT_COMPRESSION) {
	    level = 6;
	  }

	  if (windowBits < 0) { /* suppress zlib wrapper */
	    wrap = 0;
	    windowBits = -windowBits;
	  }

	  else if (windowBits > 15) {
	    wrap = 2;           /* write gzip wrapper instead */
	    windowBits -= 16;
	  }


	  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
	    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
	    strategy < 0 || strategy > Z_FIXED$1) {
	    return err(strm, Z_STREAM_ERROR);
	  }


	  if (windowBits === 8) {
	    windowBits = 9;
	  }
	  /* until 256-byte window bug fixed */

	  var s = new DeflateState();

	  strm.state = s;
	  s.strm = strm;

	  s.wrap = wrap;
	  s.gzhead = null;
	  s.w_bits = windowBits;
	  s.w_size = 1 << s.w_bits;
	  s.w_mask = s.w_size - 1;

	  s.hash_bits = memLevel + 7;
	  s.hash_size = 1 << s.hash_bits;
	  s.hash_mask = s.hash_size - 1;
	  s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);

	  s.window = new common.Buf8(s.w_size * 2);
	  s.head = new common.Buf16(s.hash_size);
	  s.prev = new common.Buf16(s.w_size);

	  // Don't need mem init magic for JS.
	  //s.high_water = 0;  /* nothing written to s->window yet */

	  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

	  s.pending_buf_size = s.lit_bufsize * 4;

	  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
	  //s->pending_buf = (uchf *) overlay;
	  s.pending_buf = new common.Buf8(s.pending_buf_size);

	  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
	  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
	  s.d_buf = 1 * s.lit_bufsize;

	  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
	  s.l_buf = (1 + 2) * s.lit_bufsize;

	  s.level = level;
	  s.strategy = strategy;
	  s.method = method;

	  return deflateReset(strm);
	}

	function deflateInit(strm, level) {
	  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
	}


	function deflate(strm, flush) {
	  var old_flush, s;
	  var beg, val; // for gzip header write only

	  if (!strm || !strm.state ||
	    flush > Z_BLOCK || flush < 0) {
	    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
	  }

	  s = strm.state;

	  if (!strm.output ||
	      (!strm.input && strm.avail_in !== 0) ||
	      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
	    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
	  }

	  s.strm = strm; /* just in case */
	  old_flush = s.last_flush;
	  s.last_flush = flush;

	  /* Write the header */
	  if (s.status === INIT_STATE) {

	    if (s.wrap === 2) { // GZIP header
	      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
	      put_byte(s, 31);
	      put_byte(s, 139);
	      put_byte(s, 8);
	      if (!s.gzhead) { // s->gzhead == Z_NULL
	        put_byte(s, 0);
	        put_byte(s, 0);
	        put_byte(s, 0);
	        put_byte(s, 0);
	        put_byte(s, 0);
	        put_byte(s, s.level === 9 ? 2 :
	                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
	                     4 : 0));
	        put_byte(s, OS_CODE);
	        s.status = BUSY_STATE;
	      }
	      else {
	        put_byte(s, (s.gzhead.text ? 1 : 0) +
	                    (s.gzhead.hcrc ? 2 : 0) +
	                    (!s.gzhead.extra ? 0 : 4) +
	                    (!s.gzhead.name ? 0 : 8) +
	                    (!s.gzhead.comment ? 0 : 16)
	                );
	        put_byte(s, s.gzhead.time & 0xff);
	        put_byte(s, (s.gzhead.time >> 8) & 0xff);
	        put_byte(s, (s.gzhead.time >> 16) & 0xff);
	        put_byte(s, (s.gzhead.time >> 24) & 0xff);
	        put_byte(s, s.level === 9 ? 2 :
	                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
	                     4 : 0));
	        put_byte(s, s.gzhead.os & 0xff);
	        if (s.gzhead.extra && s.gzhead.extra.length) {
	          put_byte(s, s.gzhead.extra.length & 0xff);
	          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
	        }
	        if (s.gzhead.hcrc) {
	          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
	        }
	        s.gzindex = 0;
	        s.status = EXTRA_STATE;
	      }
	    }
	    else // DEFLATE header
	    {
	      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
	      var level_flags = -1;

	      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
	        level_flags = 0;
	      } else if (s.level < 6) {
	        level_flags = 1;
	      } else if (s.level === 6) {
	        level_flags = 2;
	      } else {
	        level_flags = 3;
	      }
	      header |= (level_flags << 6);
	      if (s.strstart !== 0) { header |= PRESET_DICT; }
	      header += 31 - (header % 31);

	      s.status = BUSY_STATE;
	      putShortMSB(s, header);

	      /* Save the adler32 of the preset dictionary: */
	      if (s.strstart !== 0) {
	        putShortMSB(s, strm.adler >>> 16);
	        putShortMSB(s, strm.adler & 0xffff);
	      }
	      strm.adler = 1; // adler32(0L, Z_NULL, 0);
	    }
	  }

	//#ifdef GZIP
	  if (s.status === EXTRA_STATE) {
	    if (s.gzhead.extra/* != Z_NULL*/) {
	      beg = s.pending;  /* start of bytes to update crc */

	      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
	        if (s.pending === s.pending_buf_size) {
	          if (s.gzhead.hcrc && s.pending > beg) {
	            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	          }
	          flush_pending(strm);
	          beg = s.pending;
	          if (s.pending === s.pending_buf_size) {
	            break;
	          }
	        }
	        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
	        s.gzindex++;
	      }
	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      if (s.gzindex === s.gzhead.extra.length) {
	        s.gzindex = 0;
	        s.status = NAME_STATE;
	      }
	    }
	    else {
	      s.status = NAME_STATE;
	    }
	  }
	  if (s.status === NAME_STATE) {
	    if (s.gzhead.name/* != Z_NULL*/) {
	      beg = s.pending;  /* start of bytes to update crc */
	      //int val;

	      do {
	        if (s.pending === s.pending_buf_size) {
	          if (s.gzhead.hcrc && s.pending > beg) {
	            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	          }
	          flush_pending(strm);
	          beg = s.pending;
	          if (s.pending === s.pending_buf_size) {
	            val = 1;
	            break;
	          }
	        }
	        // JS specific: little magic to add zero terminator to end of string
	        if (s.gzindex < s.gzhead.name.length) {
	          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
	        } else {
	          val = 0;
	        }
	        put_byte(s, val);
	      } while (val !== 0);

	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      if (val === 0) {
	        s.gzindex = 0;
	        s.status = COMMENT_STATE;
	      }
	    }
	    else {
	      s.status = COMMENT_STATE;
	    }
	  }
	  if (s.status === COMMENT_STATE) {
	    if (s.gzhead.comment/* != Z_NULL*/) {
	      beg = s.pending;  /* start of bytes to update crc */
	      //int val;

	      do {
	        if (s.pending === s.pending_buf_size) {
	          if (s.gzhead.hcrc && s.pending > beg) {
	            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	          }
	          flush_pending(strm);
	          beg = s.pending;
	          if (s.pending === s.pending_buf_size) {
	            val = 1;
	            break;
	          }
	        }
	        // JS specific: little magic to add zero terminator to end of string
	        if (s.gzindex < s.gzhead.comment.length) {
	          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
	        } else {
	          val = 0;
	        }
	        put_byte(s, val);
	      } while (val !== 0);

	      if (s.gzhead.hcrc && s.pending > beg) {
	        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
	      }
	      if (val === 0) {
	        s.status = HCRC_STATE;
	      }
	    }
	    else {
	      s.status = HCRC_STATE;
	    }
	  }
	  if (s.status === HCRC_STATE) {
	    if (s.gzhead.hcrc) {
	      if (s.pending + 2 > s.pending_buf_size) {
	        flush_pending(strm);
	      }
	      if (s.pending + 2 <= s.pending_buf_size) {
	        put_byte(s, strm.adler & 0xff);
	        put_byte(s, (strm.adler >> 8) & 0xff);
	        strm.adler = 0; //crc32(0L, Z_NULL, 0);
	        s.status = BUSY_STATE;
	      }
	    }
	    else {
	      s.status = BUSY_STATE;
	    }
	  }
	//#endif

	  /* Flush as much pending output as possible */
	  if (s.pending !== 0) {
	    flush_pending(strm);
	    if (strm.avail_out === 0) {
	      /* Since avail_out is 0, deflate will be called again with
	       * more output space, but possibly with both pending and
	       * avail_in equal to zero. There won't be anything to do,
	       * but this is not an error situation so make sure we
	       * return OK instead of BUF_ERROR at next call of deflate:
	       */
	      s.last_flush = -1;
	      return Z_OK;
	    }

	    /* Make sure there is something to do and avoid duplicate consecutive
	     * flushes. For repeated and useless calls with Z_FINISH, we keep
	     * returning Z_STREAM_END instead of Z_BUF_ERROR.
	     */
	  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
	    flush !== Z_FINISH) {
	    return err(strm, Z_BUF_ERROR);
	  }

	  /* User must not provide more input after the first FINISH: */
	  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
	    return err(strm, Z_BUF_ERROR);
	  }

	  /* Start a new block or continue the current one.
	   */
	  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
	    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
	    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
	      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
	        configuration_table[s.level].func(s, flush));

	    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
	      s.status = FINISH_STATE;
	    }
	    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
	      if (strm.avail_out === 0) {
	        s.last_flush = -1;
	        /* avoid BUF_ERROR next call, see above */
	      }
	      return Z_OK;
	      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
	       * of deflate should use the same flush parameter to make sure
	       * that the flush is complete. So we don't have to output an
	       * empty block here, this will be done at next call. This also
	       * ensures that for a very small output buffer, we emit at most
	       * one empty block.
	       */
	    }
	    if (bstate === BS_BLOCK_DONE) {
	      if (flush === Z_PARTIAL_FLUSH) {
	        trees._tr_align(s);
	      }
	      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

	        trees._tr_stored_block(s, 0, 0, false);
	        /* For a full flush, this empty block will be recognized
	         * as a special marker by inflate_sync().
	         */
	        if (flush === Z_FULL_FLUSH) {
	          /*** CLEAR_HASH(s); ***/             /* forget history */
	          zero$1(s.head); // Fill with NIL (= 0);

	          if (s.lookahead === 0) {
	            s.strstart = 0;
	            s.block_start = 0;
	            s.insert = 0;
	          }
	        }
	      }
	      flush_pending(strm);
	      if (strm.avail_out === 0) {
	        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
	        return Z_OK;
	      }
	    }
	  }
	  //Assert(strm->avail_out > 0, "bug2");
	  //if (strm.avail_out <= 0) { throw new Error("bug2");}

	  if (flush !== Z_FINISH) { return Z_OK; }
	  if (s.wrap <= 0) { return Z_STREAM_END; }

	  /* Write the trailer */
	  if (s.wrap === 2) {
	    put_byte(s, strm.adler & 0xff);
	    put_byte(s, (strm.adler >> 8) & 0xff);
	    put_byte(s, (strm.adler >> 16) & 0xff);
	    put_byte(s, (strm.adler >> 24) & 0xff);
	    put_byte(s, strm.total_in & 0xff);
	    put_byte(s, (strm.total_in >> 8) & 0xff);
	    put_byte(s, (strm.total_in >> 16) & 0xff);
	    put_byte(s, (strm.total_in >> 24) & 0xff);
	  }
	  else
	  {
	    putShortMSB(s, strm.adler >>> 16);
	    putShortMSB(s, strm.adler & 0xffff);
	  }

	  flush_pending(strm);
	  /* If avail_out is zero, the application will call deflate again
	   * to flush the rest.
	   */
	  if (s.wrap > 0) { s.wrap = -s.wrap; }
	  /* write the trailer only once! */
	  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
	}

	function deflateEnd(strm) {
	  var status;

	  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
	    return Z_STREAM_ERROR;
	  }

	  status = strm.state.status;
	  if (status !== INIT_STATE &&
	    status !== EXTRA_STATE &&
	    status !== NAME_STATE &&
	    status !== COMMENT_STATE &&
	    status !== HCRC_STATE &&
	    status !== BUSY_STATE &&
	    status !== FINISH_STATE
	  ) {
	    return err(strm, Z_STREAM_ERROR);
	  }

	  strm.state = null;

	  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
	}


	/* =========================================================================
	 * Initializes the compression dictionary from the given byte
	 * sequence without producing any compressed output.
	 */
	function deflateSetDictionary(strm, dictionary) {
	  var dictLength = dictionary.length;

	  var s;
	  var str, n;
	  var wrap;
	  var avail;
	  var next;
	  var input;
	  var tmpDict;

	  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
	    return Z_STREAM_ERROR;
	  }

	  s = strm.state;
	  wrap = s.wrap;

	  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
	    return Z_STREAM_ERROR;
	  }

	  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
	  if (wrap === 1) {
	    /* adler32(strm->adler, dictionary, dictLength); */
	    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
	  }

	  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

	  /* if dictionary would fill window, just replace the history */
	  if (dictLength >= s.w_size) {
	    if (wrap === 0) {            /* already empty otherwise */
	      /*** CLEAR_HASH(s); ***/
	      zero$1(s.head); // Fill with NIL (= 0);
	      s.strstart = 0;
	      s.block_start = 0;
	      s.insert = 0;
	    }
	    /* use the tail */
	    // dictionary = dictionary.slice(dictLength - s.w_size);
	    tmpDict = new common.Buf8(s.w_size);
	    common.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
	    dictionary = tmpDict;
	    dictLength = s.w_size;
	  }
	  /* insert dictionary into window and hash */
	  avail = strm.avail_in;
	  next = strm.next_in;
	  input = strm.input;
	  strm.avail_in = dictLength;
	  strm.next_in = 0;
	  strm.input = dictionary;
	  fill_window(s);
	  while (s.lookahead >= MIN_MATCH$1) {
	    str = s.strstart;
	    n = s.lookahead - (MIN_MATCH$1 - 1);
	    do {
	      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
	      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;

	      s.prev[str & s.w_mask] = s.head[s.ins_h];

	      s.head[s.ins_h] = str;
	      str++;
	    } while (--n);
	    s.strstart = str;
	    s.lookahead = MIN_MATCH$1 - 1;
	    fill_window(s);
	  }
	  s.strstart += s.lookahead;
	  s.block_start = s.strstart;
	  s.insert = s.lookahead;
	  s.lookahead = 0;
	  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
	  s.match_available = 0;
	  strm.next_in = next;
	  strm.input = input;
	  strm.avail_in = avail;
	  s.wrap = wrap;
	  return Z_OK;
	}


	var deflateInit_1 = deflateInit;
	var deflateInit2_1 = deflateInit2;
	var deflateReset_1 = deflateReset;
	var deflateResetKeep_1 = deflateResetKeep;
	var deflateSetHeader_1 = deflateSetHeader;
	var deflate_2 = deflate;
	var deflateEnd_1 = deflateEnd;
	var deflateSetDictionary_1 = deflateSetDictionary;
	var deflateInfo = 'pako deflate (from Nodeca project)';

	/* Not implemented
	exports.deflateBound = deflateBound;
	exports.deflateCopy = deflateCopy;
	exports.deflateParams = deflateParams;
	exports.deflatePending = deflatePending;
	exports.deflatePrime = deflatePrime;
	exports.deflateTune = deflateTune;
	*/

	var deflate_1 = {
		deflateInit: deflateInit_1,
		deflateInit2: deflateInit2_1,
		deflateReset: deflateReset_1,
		deflateResetKeep: deflateResetKeep_1,
		deflateSetHeader: deflateSetHeader_1,
		deflate: deflate_2,
		deflateEnd: deflateEnd_1,
		deflateSetDictionary: deflateSetDictionary_1,
		deflateInfo: deflateInfo
	};

	// Quick check if we can use fast array to bin string conversion
	//
	// - apply(Array) can fail on Android 2.2
	// - apply(Uint8Array) can fail on iOS 5.1 Safari
	//
	var STR_APPLY_OK = true;
	var STR_APPLY_UIA_OK = true;

	try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
	try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


	// Table with utf8 lengths (calculated by first byte of sequence)
	// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
	// because max possible codepoint is 0x10ffff
	var _utf8len = new common.Buf8(256);
	for (var q = 0; q < 256; q++) {
	  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
	}
	_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


	// convert string to array (typed, when possible)
	var string2buf = function (str) {
	  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

	  // count binary size
	  for (m_pos = 0; m_pos < str_len; m_pos++) {
	    c = str.charCodeAt(m_pos);
	    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
	      c2 = str.charCodeAt(m_pos + 1);
	      if ((c2 & 0xfc00) === 0xdc00) {
	        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
	        m_pos++;
	      }
	    }
	    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
	  }

	  // allocate buffer
	  buf = new common.Buf8(buf_len);

	  // convert
	  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
	    c = str.charCodeAt(m_pos);
	    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
	      c2 = str.charCodeAt(m_pos + 1);
	      if ((c2 & 0xfc00) === 0xdc00) {
	        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
	        m_pos++;
	      }
	    }
	    if (c < 0x80) {
	      /* one byte */
	      buf[i++] = c;
	    } else if (c < 0x800) {
	      /* two bytes */
	      buf[i++] = 0xC0 | (c >>> 6);
	      buf[i++] = 0x80 | (c & 0x3f);
	    } else if (c < 0x10000) {
	      /* three bytes */
	      buf[i++] = 0xE0 | (c >>> 12);
	      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
	      buf[i++] = 0x80 | (c & 0x3f);
	    } else {
	      /* four bytes */
	      buf[i++] = 0xf0 | (c >>> 18);
	      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
	      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
	      buf[i++] = 0x80 | (c & 0x3f);
	    }
	  }

	  return buf;
	};

	// Helper (used in 2 places)
	function buf2binstring(buf, len) {
	  // use fallback for big arrays to avoid stack overflow
	  if (len < 65537) {
	    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
	      return String.fromCharCode.apply(null, common.shrinkBuf(buf, len));
	    }
	  }

	  var result = '';
	  for (var i = 0; i < len; i++) {
	    result += String.fromCharCode(buf[i]);
	  }
	  return result;
	}


	// Convert byte array to binary string
	var buf2binstring_1 = function (buf) {
	  return buf2binstring(buf, buf.length);
	};


	// Convert binary string (typed, when possible)
	var binstring2buf = function (str) {
	  var buf = new common.Buf8(str.length);
	  for (var i = 0, len = buf.length; i < len; i++) {
	    buf[i] = str.charCodeAt(i);
	  }
	  return buf;
	};


	// convert array to string
	var buf2string = function (buf, max) {
	  var i, out, c, c_len;
	  var len = max || buf.length;

	  // Reserve max possible length (2 words per char)
	  // NB: by unknown reasons, Array is significantly faster for
	  //     String.fromCharCode.apply than Uint16Array.
	  var utf16buf = new Array(len * 2);

	  for (out = 0, i = 0; i < len;) {
	    c = buf[i++];
	    // quick process ascii
	    if (c < 0x80) { utf16buf[out++] = c; continue; }

	    c_len = _utf8len[c];
	    // skip 5 & 6 byte codes
	    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

	    // apply mask on first byte
	    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
	    // join the rest
	    while (c_len > 1 && i < len) {
	      c = (c << 6) | (buf[i++] & 0x3f);
	      c_len--;
	    }

	    // terminated by end of string?
	    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

	    if (c < 0x10000) {
	      utf16buf[out++] = c;
	    } else {
	      c -= 0x10000;
	      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
	      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
	    }
	  }

	  return buf2binstring(utf16buf, out);
	};


	// Calculate max possible position in utf8 buffer,
	// that will not break sequence. If that's not possible
	// - (very small limits) return max size as is.
	//
	// buf[] - utf8 bytes array
	// max   - length limit (mandatory);
	var utf8border = function (buf, max) {
	  var pos;

	  max = max || buf.length;
	  if (max > buf.length) { max = buf.length; }

	  // go back from last position, until start of sequence found
	  pos = max - 1;
	  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

	  // Very small and broken sequence,
	  // return max, because we should return something anyway.
	  if (pos < 0) { return max; }

	  // If we came to start of buffer - that means buffer is too small,
	  // return max too.
	  if (pos === 0) { return max; }

	  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
	};

	var strings = {
		string2buf: string2buf,
		buf2binstring: buf2binstring_1,
		binstring2buf: binstring2buf,
		buf2string: buf2string,
		utf8border: utf8border
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	function ZStream() {
	  /* next input byte */
	  this.input = null; // JS specific, because we have no pointers
	  this.next_in = 0;
	  /* number of bytes available at input */
	  this.avail_in = 0;
	  /* total number of input bytes read so far */
	  this.total_in = 0;
	  /* next output byte should be put there */
	  this.output = null; // JS specific, because we have no pointers
	  this.next_out = 0;
	  /* remaining free space at output */
	  this.avail_out = 0;
	  /* total number of bytes output so far */
	  this.total_out = 0;
	  /* last error message, NULL if no error */
	  this.msg = ''/*Z_NULL*/;
	  /* not visible by applications */
	  this.state = null;
	  /* best guess about the data type: binary or text */
	  this.data_type = 2/*Z_UNKNOWN*/;
	  /* adler32 value of the uncompressed data */
	  this.adler = 0;
	}

	var zstream = ZStream;

	var toString$1 = Object.prototype.toString;

	/* Public constants ==========================================================*/
	/* ===========================================================================*/

	var Z_NO_FLUSH$1      = 0;
	var Z_FINISH$1        = 4;

	var Z_OK$1            = 0;
	var Z_STREAM_END$1    = 1;
	var Z_SYNC_FLUSH    = 2;

	var Z_DEFAULT_COMPRESSION$1 = -1;

	var Z_DEFAULT_STRATEGY$1    = 0;

	var Z_DEFLATED$1  = 8;

	/* ===========================================================================*/


	/**
	 * class Deflate
	 *
	 * Generic JS-style wrapper for zlib calls. If you don't need
	 * streaming behaviour - use more simple functions: [[deflate]],
	 * [[deflateRaw]] and [[gzip]].
	 **/

	/* internal
	 * Deflate.chunks -> Array
	 *
	 * Chunks of output data, if [[Deflate#onData]] not overridden.
	 **/

	/**
	 * Deflate.result -> Uint8Array|Array
	 *
	 * Compressed result, generated by default [[Deflate#onData]]
	 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
	 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
	 * push a chunk with explicit flush (call [[Deflate#push]] with
	 * `Z_SYNC_FLUSH` param).
	 **/

	/**
	 * Deflate.err -> Number
	 *
	 * Error code after deflate finished. 0 (Z_OK) on success.
	 * You will not need it in real life, because deflate errors
	 * are possible only on wrong options or bad `onData` / `onEnd`
	 * custom handlers.
	 **/

	/**
	 * Deflate.msg -> String
	 *
	 * Error message, if [[Deflate.err]] != 0
	 **/


	/**
	 * new Deflate(options)
	 * - options (Object): zlib deflate options.
	 *
	 * Creates new deflator instance with specified params. Throws exception
	 * on bad params. Supported options:
	 *
	 * - `level`
	 * - `windowBits`
	 * - `memLevel`
	 * - `strategy`
	 * - `dictionary`
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Additional options, for internal needs:
	 *
	 * - `chunkSize` - size of generated data chunks (16K by default)
	 * - `raw` (Boolean) - do raw deflate
	 * - `gzip` (Boolean) - create gzip wrapper
	 * - `to` (String) - if equal to 'string', then result will be "binary string"
	 *    (each char code [0..255])
	 * - `header` (Object) - custom header for gzip
	 *   - `text` (Boolean) - true if compressed data believed to be text
	 *   - `time` (Number) - modification time, unix timestamp
	 *   - `os` (Number) - operation system code
	 *   - `extra` (Array) - array of bytes with extra data (max 65536)
	 *   - `name` (String) - file name (binary string)
	 *   - `comment` (String) - comment (binary string)
	 *   - `hcrc` (Boolean) - true if header crc should be added
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * var pako = require('pako')
	 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
	 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
	 *
	 * var deflate = new pako.Deflate({ level: 3});
	 *
	 * deflate.push(chunk1, false);
	 * deflate.push(chunk2, true);  // true -> last chunk
	 *
	 * if (deflate.err) { throw new Error(deflate.err); }
	 *
	 * console.log(deflate.result);
	 * ```
	 **/
	function Deflate(options) {
	  if (!(this instanceof Deflate)) return new Deflate(options);

	  this.options = common.assign({
	    level: Z_DEFAULT_COMPRESSION$1,
	    method: Z_DEFLATED$1,
	    chunkSize: 16384,
	    windowBits: 15,
	    memLevel: 8,
	    strategy: Z_DEFAULT_STRATEGY$1,
	    to: ''
	  }, options || {});

	  var opt = this.options;

	  if (opt.raw && (opt.windowBits > 0)) {
	    opt.windowBits = -opt.windowBits;
	  }

	  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
	    opt.windowBits += 16;
	  }

	  this.err    = 0;      // error code, if happens (0 = Z_OK)
	  this.msg    = '';     // error message
	  this.ended  = false;  // used to avoid multiple onEnd() calls
	  this.chunks = [];     // chunks of compressed data

	  this.strm = new zstream();
	  this.strm.avail_out = 0;

	  var status = deflate_1.deflateInit2(
	    this.strm,
	    opt.level,
	    opt.method,
	    opt.windowBits,
	    opt.memLevel,
	    opt.strategy
	  );

	  if (status !== Z_OK$1) {
	    throw new Error(messages[status]);
	  }

	  if (opt.header) {
	    deflate_1.deflateSetHeader(this.strm, opt.header);
	  }

	  if (opt.dictionary) {
	    var dict;
	    // Convert data if needed
	    if (typeof opt.dictionary === 'string') {
	      // If we need to compress text, change encoding to utf8.
	      dict = strings.string2buf(opt.dictionary);
	    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
	      dict = new Uint8Array(opt.dictionary);
	    } else {
	      dict = opt.dictionary;
	    }

	    status = deflate_1.deflateSetDictionary(this.strm, dict);

	    if (status !== Z_OK$1) {
	      throw new Error(messages[status]);
	    }

	    this._dict_set = true;
	  }
	}

	/**
	 * Deflate#push(data[, mode]) -> Boolean
	 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
	 *   converted to utf8 byte sequence.
	 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
	 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
	 *
	 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
	 * new compressed chunks. Returns `true` on success. The last data block must have
	 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
	 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
	 * can use mode Z_SYNC_FLUSH, keeping the compression context.
	 *
	 * On fail call [[Deflate#onEnd]] with error code and return false.
	 *
	 * We strongly recommend to use `Uint8Array` on input for best speed (output
	 * array format is detected automatically). Also, don't skip last param and always
	 * use the same type in your code (boolean or number). That will improve JS speed.
	 *
	 * For regular `Array`-s make sure all elements are [0..255].
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * push(chunk, false); // push one of data chunks
	 * ...
	 * push(chunk, true);  // push last chunk
	 * ```
	 **/
	Deflate.prototype.push = function (data, mode) {
	  var strm = this.strm;
	  var chunkSize = this.options.chunkSize;
	  var status, _mode;

	  if (this.ended) { return false; }

	  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH$1 : Z_NO_FLUSH$1);

	  // Convert data if needed
	  if (typeof data === 'string') {
	    // If we need to compress text, change encoding to utf8.
	    strm.input = strings.string2buf(data);
	  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
	    strm.input = new Uint8Array(data);
	  } else {
	    strm.input = data;
	  }

	  strm.next_in = 0;
	  strm.avail_in = strm.input.length;

	  do {
	    if (strm.avail_out === 0) {
	      strm.output = new common.Buf8(chunkSize);
	      strm.next_out = 0;
	      strm.avail_out = chunkSize;
	    }
	    status = deflate_1.deflate(strm, _mode);    /* no bad return value */

	    if (status !== Z_STREAM_END$1 && status !== Z_OK$1) {
	      this.onEnd(status);
	      this.ended = true;
	      return false;
	    }
	    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH$1 || _mode === Z_SYNC_FLUSH))) {
	      if (this.options.to === 'string') {
	        this.onData(strings.buf2binstring(common.shrinkBuf(strm.output, strm.next_out)));
	      } else {
	        this.onData(common.shrinkBuf(strm.output, strm.next_out));
	      }
	    }
	  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END$1);

	  // Finalize on the last chunk.
	  if (_mode === Z_FINISH$1) {
	    status = deflate_1.deflateEnd(this.strm);
	    this.onEnd(status);
	    this.ended = true;
	    return status === Z_OK$1;
	  }

	  // callback interim results if Z_SYNC_FLUSH.
	  if (_mode === Z_SYNC_FLUSH) {
	    this.onEnd(Z_OK$1);
	    strm.avail_out = 0;
	    return true;
	  }

	  return true;
	};


	/**
	 * Deflate#onData(chunk) -> Void
	 * - chunk (Uint8Array|Array|String): output data. Type of array depends
	 *   on js engine support. When string output requested, each chunk
	 *   will be string.
	 *
	 * By default, stores data blocks in `chunks[]` property and glue
	 * those in `onEnd`. Override this handler, if you need another behaviour.
	 **/
	Deflate.prototype.onData = function (chunk) {
	  this.chunks.push(chunk);
	};


	/**
	 * Deflate#onEnd(status) -> Void
	 * - status (Number): deflate status. 0 (Z_OK) on success,
	 *   other if not.
	 *
	 * Called once after you tell deflate that the input stream is
	 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
	 * or if an error happened. By default - join collected chunks,
	 * free memory and fill `results` / `err` properties.
	 **/
	Deflate.prototype.onEnd = function (status) {
	  // On success - join
	  if (status === Z_OK$1) {
	    if (this.options.to === 'string') {
	      this.result = this.chunks.join('');
	    } else {
	      this.result = common.flattenChunks(this.chunks);
	    }
	  }
	  this.chunks = [];
	  this.err = status;
	  this.msg = this.strm.msg;
	};


	/**
	 * deflate(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * Compress `data` with deflate algorithm and `options`.
	 *
	 * Supported options are:
	 *
	 * - level
	 * - windowBits
	 * - memLevel
	 * - strategy
	 * - dictionary
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Sugar (options):
	 *
	 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
	 *   negative windowBits implicitly.
	 * - `to` (String) - if equal to 'string', then result will be "binary string"
	 *    (each char code [0..255])
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * var pako = require('pako')
	 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
	 *
	 * console.log(pako.deflate(data));
	 * ```
	 **/
	function deflate$1(input, options) {
	  var deflator = new Deflate(options);

	  deflator.push(input, true);

	  // That will never happens, if you don't cheat with options :)
	  if (deflator.err) { throw deflator.msg || messages[deflator.err]; }

	  return deflator.result;
	}


	/**
	 * deflateRaw(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * The same as [[deflate]], but creates raw data, without wrapper
	 * (header and adler32 crc).
	 **/
	function deflateRaw(input, options) {
	  options = options || {};
	  options.raw = true;
	  return deflate$1(input, options);
	}


	/**
	 * gzip(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to compress.
	 * - options (Object): zlib deflate options.
	 *
	 * The same as [[deflate]], but create gzip wrapper instead of
	 * deflate one.
	 **/
	function gzip(input, options) {
	  options = options || {};
	  options.gzip = true;
	  return deflate$1(input, options);
	}


	var Deflate_1 = Deflate;
	var deflate_2$1 = deflate$1;
	var deflateRaw_1 = deflateRaw;
	var gzip_1 = gzip;

	var deflate_1$1 = {
		Deflate: Deflate_1,
		deflate: deflate_2$1,
		deflateRaw: deflateRaw_1,
		gzip: gzip_1
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	// See state defs from inflate.js
	var BAD = 30;       /* got a data error -- remain here until reset */
	var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

	/*
	   Decode literal, length, and distance codes and write out the resulting
	   literal and match bytes until either not enough input or output is
	   available, an end-of-block is encountered, or a data error is encountered.
	   When large enough input and output buffers are supplied to inflate(), for
	   example, a 16K input buffer and a 64K output buffer, more than 95% of the
	   inflate execution time is spent in this routine.

	   Entry assumptions:

	        state.mode === LEN
	        strm.avail_in >= 6
	        strm.avail_out >= 258
	        start >= strm.avail_out
	        state.bits < 8

	   On return, state.mode is one of:

	        LEN -- ran out of enough output space or enough available input
	        TYPE -- reached end of block code, inflate() to interpret next block
	        BAD -- error in block data

	   Notes:

	    - The maximum input bits used by a length/distance pair is 15 bits for the
	      length code, 5 bits for the length extra, 15 bits for the distance code,
	      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
	      Therefore if strm.avail_in >= 6, then there is enough input to avoid
	      checking for available input while decoding.

	    - The maximum bytes that a single length/distance pair can output is 258
	      bytes, which is the maximum length that can be coded.  inflate_fast()
	      requires strm.avail_out >= 258 for each loop to avoid checking for
	      output space.
	 */
	var inffast = function inflate_fast(strm, start) {
	  var state;
	  var _in;                    /* local strm.input */
	  var last;                   /* have enough input while in < last */
	  var _out;                   /* local strm.output */
	  var beg;                    /* inflate()'s initial strm.output */
	  var end;                    /* while out < end, enough space available */
	//#ifdef INFLATE_STRICT
	  var dmax;                   /* maximum distance from zlib header */
	//#endif
	  var wsize;                  /* window size or zero if not using window */
	  var whave;                  /* valid bytes in the window */
	  var wnext;                  /* window write index */
	  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
	  var s_window;               /* allocated sliding window, if wsize != 0 */
	  var hold;                   /* local strm.hold */
	  var bits;                   /* local strm.bits */
	  var lcode;                  /* local strm.lencode */
	  var dcode;                  /* local strm.distcode */
	  var lmask;                  /* mask for first level of length codes */
	  var dmask;                  /* mask for first level of distance codes */
	  var here;                   /* retrieved table entry */
	  var op;                     /* code bits, operation, extra bits, or */
	                              /*  window position, window bytes to copy */
	  var len;                    /* match length, unused bytes */
	  var dist;                   /* match distance */
	  var from;                   /* where to copy match from */
	  var from_source;


	  var input, output; // JS specific, because we have no pointers

	  /* copy state to local variables */
	  state = strm.state;
	  //here = state.here;
	  _in = strm.next_in;
	  input = strm.input;
	  last = _in + (strm.avail_in - 5);
	  _out = strm.next_out;
	  output = strm.output;
	  beg = _out - (start - strm.avail_out);
	  end = _out + (strm.avail_out - 257);
	//#ifdef INFLATE_STRICT
	  dmax = state.dmax;
	//#endif
	  wsize = state.wsize;
	  whave = state.whave;
	  wnext = state.wnext;
	  s_window = state.window;
	  hold = state.hold;
	  bits = state.bits;
	  lcode = state.lencode;
	  dcode = state.distcode;
	  lmask = (1 << state.lenbits) - 1;
	  dmask = (1 << state.distbits) - 1;


	  /* decode literals and length/distances until end-of-block or not enough
	     input data or output space */

	  top:
	  do {
	    if (bits < 15) {
	      hold += input[_in++] << bits;
	      bits += 8;
	      hold += input[_in++] << bits;
	      bits += 8;
	    }

	    here = lcode[hold & lmask];

	    dolen:
	    for (;;) { // Goto emulation
	      op = here >>> 24/*here.bits*/;
	      hold >>>= op;
	      bits -= op;
	      op = (here >>> 16) & 0xff/*here.op*/;
	      if (op === 0) {                          /* literal */
	        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
	        //        "inflate:         literal '%c'\n" :
	        //        "inflate:         literal 0x%02x\n", here.val));
	        output[_out++] = here & 0xffff/*here.val*/;
	      }
	      else if (op & 16) {                     /* length base */
	        len = here & 0xffff/*here.val*/;
	        op &= 15;                           /* number of extra bits */
	        if (op) {
	          if (bits < op) {
	            hold += input[_in++] << bits;
	            bits += 8;
	          }
	          len += hold & ((1 << op) - 1);
	          hold >>>= op;
	          bits -= op;
	        }
	        //Tracevv((stderr, "inflate:         length %u\n", len));
	        if (bits < 15) {
	          hold += input[_in++] << bits;
	          bits += 8;
	          hold += input[_in++] << bits;
	          bits += 8;
	        }
	        here = dcode[hold & dmask];

	        dodist:
	        for (;;) { // goto emulation
	          op = here >>> 24/*here.bits*/;
	          hold >>>= op;
	          bits -= op;
	          op = (here >>> 16) & 0xff/*here.op*/;

	          if (op & 16) {                      /* distance base */
	            dist = here & 0xffff/*here.val*/;
	            op &= 15;                       /* number of extra bits */
	            if (bits < op) {
	              hold += input[_in++] << bits;
	              bits += 8;
	              if (bits < op) {
	                hold += input[_in++] << bits;
	                bits += 8;
	              }
	            }
	            dist += hold & ((1 << op) - 1);
	//#ifdef INFLATE_STRICT
	            if (dist > dmax) {
	              strm.msg = 'invalid distance too far back';
	              state.mode = BAD;
	              break top;
	            }
	//#endif
	            hold >>>= op;
	            bits -= op;
	            //Tracevv((stderr, "inflate:         distance %u\n", dist));
	            op = _out - beg;                /* max distance in output */
	            if (dist > op) {                /* see if copy from window */
	              op = dist - op;               /* distance back in window */
	              if (op > whave) {
	                if (state.sane) {
	                  strm.msg = 'invalid distance too far back';
	                  state.mode = BAD;
	                  break top;
	                }

	// (!) This block is disabled in zlib defaults,
	// don't enable it for binary compatibility
	//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
	//                if (len <= op - whave) {
	//                  do {
	//                    output[_out++] = 0;
	//                  } while (--len);
	//                  continue top;
	//                }
	//                len -= op - whave;
	//                do {
	//                  output[_out++] = 0;
	//                } while (--op > whave);
	//                if (op === 0) {
	//                  from = _out - dist;
	//                  do {
	//                    output[_out++] = output[from++];
	//                  } while (--len);
	//                  continue top;
	//                }
	//#endif
	              }
	              from = 0; // window index
	              from_source = s_window;
	              if (wnext === 0) {           /* very common case */
	                from += wsize - op;
	                if (op < len) {         /* some from window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = _out - dist;  /* rest from output */
	                  from_source = output;
	                }
	              }
	              else if (wnext < op) {      /* wrap around window */
	                from += wsize + wnext - op;
	                op -= wnext;
	                if (op < len) {         /* some from end of window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = 0;
	                  if (wnext < len) {  /* some from start of window */
	                    op = wnext;
	                    len -= op;
	                    do {
	                      output[_out++] = s_window[from++];
	                    } while (--op);
	                    from = _out - dist;      /* rest from output */
	                    from_source = output;
	                  }
	                }
	              }
	              else {                      /* contiguous in window */
	                from += wnext - op;
	                if (op < len) {         /* some from window */
	                  len -= op;
	                  do {
	                    output[_out++] = s_window[from++];
	                  } while (--op);
	                  from = _out - dist;  /* rest from output */
	                  from_source = output;
	                }
	              }
	              while (len > 2) {
	                output[_out++] = from_source[from++];
	                output[_out++] = from_source[from++];
	                output[_out++] = from_source[from++];
	                len -= 3;
	              }
	              if (len) {
	                output[_out++] = from_source[from++];
	                if (len > 1) {
	                  output[_out++] = from_source[from++];
	                }
	              }
	            }
	            else {
	              from = _out - dist;          /* copy direct from output */
	              do {                        /* minimum length is three */
	                output[_out++] = output[from++];
	                output[_out++] = output[from++];
	                output[_out++] = output[from++];
	                len -= 3;
	              } while (len > 2);
	              if (len) {
	                output[_out++] = output[from++];
	                if (len > 1) {
	                  output[_out++] = output[from++];
	                }
	              }
	            }
	          }
	          else if ((op & 64) === 0) {          /* 2nd level distance code */
	            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
	            continue dodist;
	          }
	          else {
	            strm.msg = 'invalid distance code';
	            state.mode = BAD;
	            break top;
	          }

	          break; // need to emulate goto via "continue"
	        }
	      }
	      else if ((op & 64) === 0) {              /* 2nd level length code */
	        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
	        continue dolen;
	      }
	      else if (op & 32) {                     /* end-of-block */
	        //Tracevv((stderr, "inflate:         end of block\n"));
	        state.mode = TYPE;
	        break top;
	      }
	      else {
	        strm.msg = 'invalid literal/length code';
	        state.mode = BAD;
	        break top;
	      }

	      break; // need to emulate goto via "continue"
	    }
	  } while (_in < last && _out < end);

	  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
	  len = bits >> 3;
	  _in -= len;
	  bits -= len << 3;
	  hold &= (1 << bits) - 1;

	  /* update state and return */
	  strm.next_in = _in;
	  strm.next_out = _out;
	  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
	  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
	  state.hold = hold;
	  state.bits = bits;
	  return;
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.



	var MAXBITS = 15;
	var ENOUGH_LENS = 852;
	var ENOUGH_DISTS = 592;
	//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

	var CODES = 0;
	var LENS = 1;
	var DISTS = 2;

	var lbase = [ /* Length codes 257..285 base */
	  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
	  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
	];

	var lext = [ /* Length codes 257..285 extra */
	  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
	  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
	];

	var dbase = [ /* Distance codes 0..29 base */
	  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
	  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
	  8193, 12289, 16385, 24577, 0, 0
	];

	var dext = [ /* Distance codes 0..29 extra */
	  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
	  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
	  28, 28, 29, 29, 64, 64
	];

	var inftrees = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
	{
	  var bits = opts.bits;
	      //here = opts.here; /* table entry for duplication */

	  var len = 0;               /* a code's length in bits */
	  var sym = 0;               /* index of code symbols */
	  var min = 0, max = 0;          /* minimum and maximum code lengths */
	  var root = 0;              /* number of index bits for root table */
	  var curr = 0;              /* number of index bits for current table */
	  var drop = 0;              /* code bits to drop for sub-table */
	  var left = 0;                   /* number of prefix codes available */
	  var used = 0;              /* code entries in table used */
	  var huff = 0;              /* Huffman code */
	  var incr;              /* for incrementing code, index */
	  var fill;              /* index for replicating entries */
	  var low;               /* low bits for current root entry */
	  var mask;              /* mask for low root bits */
	  var next;             /* next available space in table */
	  var base = null;     /* base value table to use */
	  var base_index = 0;
	//  var shoextra;    /* extra bits table to use */
	  var end;                    /* use base and extra for symbol > end */
	  var count = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
	  var offs = new common.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
	  var extra = null;
	  var extra_index = 0;

	  var here_bits, here_op, here_val;

	  /*
	   Process a set of code lengths to create a canonical Huffman code.  The
	   code lengths are lens[0..codes-1].  Each length corresponds to the
	   symbols 0..codes-1.  The Huffman code is generated by first sorting the
	   symbols by length from short to long, and retaining the symbol order
	   for codes with equal lengths.  Then the code starts with all zero bits
	   for the first code of the shortest length, and the codes are integer
	   increments for the same length, and zeros are appended as the length
	   increases.  For the deflate format, these bits are stored backwards
	   from their more natural integer increment ordering, and so when the
	   decoding tables are built in the large loop below, the integer codes
	   are incremented backwards.

	   This routine assumes, but does not check, that all of the entries in
	   lens[] are in the range 0..MAXBITS.  The caller must assure this.
	   1..MAXBITS is interpreted as that code length.  zero means that that
	   symbol does not occur in this code.

	   The codes are sorted by computing a count of codes for each length,
	   creating from that a table of starting indices for each length in the
	   sorted table, and then entering the symbols in order in the sorted
	   table.  The sorted table is work[], with that space being provided by
	   the caller.

	   The length counts are used for other purposes as well, i.e. finding
	   the minimum and maximum length codes, determining if there are any
	   codes at all, checking for a valid set of lengths, and looking ahead
	   at length counts to determine sub-table sizes when building the
	   decoding tables.
	   */

	  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
	  for (len = 0; len <= MAXBITS; len++) {
	    count[len] = 0;
	  }
	  for (sym = 0; sym < codes; sym++) {
	    count[lens[lens_index + sym]]++;
	  }

	  /* bound code lengths, force root to be within code lengths */
	  root = bits;
	  for (max = MAXBITS; max >= 1; max--) {
	    if (count[max] !== 0) { break; }
	  }
	  if (root > max) {
	    root = max;
	  }
	  if (max === 0) {                     /* no symbols to code at all */
	    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
	    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
	    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
	    table[table_index++] = (1 << 24) | (64 << 16) | 0;


	    //table.op[opts.table_index] = 64;
	    //table.bits[opts.table_index] = 1;
	    //table.val[opts.table_index++] = 0;
	    table[table_index++] = (1 << 24) | (64 << 16) | 0;

	    opts.bits = 1;
	    return 0;     /* no symbols, but wait for decoding to report error */
	  }
	  for (min = 1; min < max; min++) {
	    if (count[min] !== 0) { break; }
	  }
	  if (root < min) {
	    root = min;
	  }

	  /* check for an over-subscribed or incomplete set of lengths */
	  left = 1;
	  for (len = 1; len <= MAXBITS; len++) {
	    left <<= 1;
	    left -= count[len];
	    if (left < 0) {
	      return -1;
	    }        /* over-subscribed */
	  }
	  if (left > 0 && (type === CODES || max !== 1)) {
	    return -1;                      /* incomplete set */
	  }

	  /* generate offsets into symbol table for each length for sorting */
	  offs[1] = 0;
	  for (len = 1; len < MAXBITS; len++) {
	    offs[len + 1] = offs[len] + count[len];
	  }

	  /* sort symbols by length, by symbol order within each length */
	  for (sym = 0; sym < codes; sym++) {
	    if (lens[lens_index + sym] !== 0) {
	      work[offs[lens[lens_index + sym]]++] = sym;
	    }
	  }

	  /*
	   Create and fill in decoding tables.  In this loop, the table being
	   filled is at next and has curr index bits.  The code being used is huff
	   with length len.  That code is converted to an index by dropping drop
	   bits off of the bottom.  For codes where len is less than drop + curr,
	   those top drop + curr - len bits are incremented through all values to
	   fill the table with replicated entries.

	   root is the number of index bits for the root table.  When len exceeds
	   root, sub-tables are created pointed to by the root entry with an index
	   of the low root bits of huff.  This is saved in low to check for when a
	   new sub-table should be started.  drop is zero when the root table is
	   being filled, and drop is root when sub-tables are being filled.

	   When a new sub-table is needed, it is necessary to look ahead in the
	   code lengths to determine what size sub-table is needed.  The length
	   counts are used for this, and so count[] is decremented as codes are
	   entered in the tables.

	   used keeps track of how many table entries have been allocated from the
	   provided *table space.  It is checked for LENS and DIST tables against
	   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
	   the initial root table size constants.  See the comments in inftrees.h
	   for more information.

	   sym increments through all symbols, and the loop terminates when
	   all codes of length max, i.e. all codes, have been processed.  This
	   routine permits incomplete codes, so another loop after this one fills
	   in the rest of the decoding tables with invalid code markers.
	   */

	  /* set up for code type */
	  // poor man optimization - use if-else instead of switch,
	  // to avoid deopts in old v8
	  if (type === CODES) {
	    base = extra = work;    /* dummy value--not used */
	    end = 19;

	  } else if (type === LENS) {
	    base = lbase;
	    base_index -= 257;
	    extra = lext;
	    extra_index -= 257;
	    end = 256;

	  } else {                    /* DISTS */
	    base = dbase;
	    extra = dext;
	    end = -1;
	  }

	  /* initialize opts for loop */
	  huff = 0;                   /* starting code */
	  sym = 0;                    /* starting code symbol */
	  len = min;                  /* starting code length */
	  next = table_index;              /* current table to fill in */
	  curr = root;                /* current table index bits */
	  drop = 0;                   /* current bits to drop from code for index */
	  low = -1;                   /* trigger new sub-table when len > root */
	  used = 1 << root;          /* use root table entries */
	  mask = used - 1;            /* mask for comparing low */

	  /* check available table space */
	  if ((type === LENS && used > ENOUGH_LENS) ||
	    (type === DISTS && used > ENOUGH_DISTS)) {
	    return 1;
	  }

	  /* process all codes and make table entries */
	  for (;;) {
	    /* create table entry */
	    here_bits = len - drop;
	    if (work[sym] < end) {
	      here_op = 0;
	      here_val = work[sym];
	    }
	    else if (work[sym] > end) {
	      here_op = extra[extra_index + work[sym]];
	      here_val = base[base_index + work[sym]];
	    }
	    else {
	      here_op = 32 + 64;         /* end of block */
	      here_val = 0;
	    }

	    /* replicate for those indices with low len bits equal to huff */
	    incr = 1 << (len - drop);
	    fill = 1 << curr;
	    min = fill;                 /* save offset to next table */
	    do {
	      fill -= incr;
	      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
	    } while (fill !== 0);

	    /* backwards increment the len-bit code huff */
	    incr = 1 << (len - 1);
	    while (huff & incr) {
	      incr >>= 1;
	    }
	    if (incr !== 0) {
	      huff &= incr - 1;
	      huff += incr;
	    } else {
	      huff = 0;
	    }

	    /* go to next symbol, update count, len */
	    sym++;
	    if (--count[len] === 0) {
	      if (len === max) { break; }
	      len = lens[lens_index + work[sym]];
	    }

	    /* create new sub-table if needed */
	    if (len > root && (huff & mask) !== low) {
	      /* if first time, transition to sub-tables */
	      if (drop === 0) {
	        drop = root;
	      }

	      /* increment past last table */
	      next += min;            /* here min is 1 << curr */

	      /* determine length of next table */
	      curr = len - drop;
	      left = 1 << curr;
	      while (curr + drop < max) {
	        left -= count[curr + drop];
	        if (left <= 0) { break; }
	        curr++;
	        left <<= 1;
	      }

	      /* check for enough space */
	      used += 1 << curr;
	      if ((type === LENS && used > ENOUGH_LENS) ||
	        (type === DISTS && used > ENOUGH_DISTS)) {
	        return 1;
	      }

	      /* point entry in root table to sub-table */
	      low = huff & mask;
	      /*table.op[low] = curr;
	      table.bits[low] = root;
	      table.val[low] = next - opts.table_index;*/
	      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
	    }
	  }

	  /* fill in remaining table entry if code is incomplete (guaranteed to have
	   at most one remaining entry, since if the code is incomplete, the
	   maximum code length that was allowed to get this far is one bit) */
	  if (huff !== 0) {
	    //table.op[next + huff] = 64;            /* invalid code marker */
	    //table.bits[next + huff] = len - drop;
	    //table.val[next + huff] = 0;
	    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
	  }

	  /* set return parameters */
	  //opts.table_index += used;
	  opts.bits = root;
	  return 0;
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.







	var CODES$1 = 0;
	var LENS$1 = 1;
	var DISTS$1 = 2;

	/* Public constants ==========================================================*/
	/* ===========================================================================*/


	/* Allowed flush values; see deflate() and inflate() below for details */
	//var Z_NO_FLUSH      = 0;
	//var Z_PARTIAL_FLUSH = 1;
	//var Z_SYNC_FLUSH    = 2;
	//var Z_FULL_FLUSH    = 3;
	var Z_FINISH$2        = 4;
	var Z_BLOCK$1         = 5;
	var Z_TREES         = 6;


	/* Return codes for the compression/decompression functions. Negative values
	 * are errors, positive values are used for special but normal events.
	 */
	var Z_OK$2            = 0;
	var Z_STREAM_END$2    = 1;
	var Z_NEED_DICT     = 2;
	//var Z_ERRNO         = -1;
	var Z_STREAM_ERROR$1  = -2;
	var Z_DATA_ERROR$1    = -3;
	var Z_MEM_ERROR     = -4;
	var Z_BUF_ERROR$1     = -5;
	//var Z_VERSION_ERROR = -6;

	/* The deflate compression method */
	var Z_DEFLATED$2  = 8;


	/* STATES ====================================================================*/
	/* ===========================================================================*/


	var    HEAD = 1;       /* i: waiting for magic header */
	var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
	var    TIME = 3;       /* i: waiting for modification time (gzip) */
	var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
	var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
	var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
	var    NAME = 7;       /* i: waiting for end of file name (gzip) */
	var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
	var    HCRC = 9;       /* i: waiting for header crc (gzip) */
	var    DICTID = 10;    /* i: waiting for dictionary check value */
	var    DICT = 11;      /* waiting for inflateSetDictionary() call */
	var        TYPE$1 = 12;      /* i: waiting for type bits, including last-flag bit */
	var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
	var        STORED = 14;    /* i: waiting for stored size (length and complement) */
	var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
	var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
	var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
	var        LENLENS = 18;   /* i: waiting for code length code lengths */
	var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
	var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
	var            LEN = 21;       /* i: waiting for length/lit/eob code */
	var            LENEXT = 22;    /* i: waiting for length extra bits */
	var            DIST = 23;      /* i: waiting for distance code */
	var            DISTEXT = 24;   /* i: waiting for distance extra bits */
	var            MATCH = 25;     /* o: waiting for output space to copy string */
	var            LIT = 26;       /* o: waiting for output space to write literal */
	var    CHECK = 27;     /* i: waiting for 32-bit check value */
	var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
	var    DONE = 29;      /* finished check, done -- remain here until reset */
	var    BAD$1 = 30;       /* got a data error -- remain here until reset */
	var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
	var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

	/* ===========================================================================*/



	var ENOUGH_LENS$1 = 852;
	var ENOUGH_DISTS$1 = 592;
	//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

	var MAX_WBITS$1 = 15;
	/* 32K LZ77 window */
	var DEF_WBITS = MAX_WBITS$1;


	function zswap32(q) {
	  return  (((q >>> 24) & 0xff) +
	          ((q >>> 8) & 0xff00) +
	          ((q & 0xff00) << 8) +
	          ((q & 0xff) << 24));
	}


	function InflateState() {
	  this.mode = 0;             /* current inflate mode */
	  this.last = false;          /* true if processing last block */
	  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
	  this.havedict = false;      /* true if dictionary provided */
	  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
	  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
	  this.check = 0;             /* protected copy of check value */
	  this.total = 0;             /* protected copy of output count */
	  // TODO: may be {}
	  this.head = null;           /* where to save gzip header information */

	  /* sliding window */
	  this.wbits = 0;             /* log base 2 of requested window size */
	  this.wsize = 0;             /* window size or zero if not using window */
	  this.whave = 0;             /* valid bytes in the window */
	  this.wnext = 0;             /* window write index */
	  this.window = null;         /* allocated sliding window, if needed */

	  /* bit accumulator */
	  this.hold = 0;              /* input bit accumulator */
	  this.bits = 0;              /* number of bits in "in" */

	  /* for string and stored block copying */
	  this.length = 0;            /* literal or length of data to copy */
	  this.offset = 0;            /* distance back to copy string from */

	  /* for table and code decoding */
	  this.extra = 0;             /* extra bits needed */

	  /* fixed and dynamic code tables */
	  this.lencode = null;          /* starting table for length/literal codes */
	  this.distcode = null;         /* starting table for distance codes */
	  this.lenbits = 0;           /* index bits for lencode */
	  this.distbits = 0;          /* index bits for distcode */

	  /* dynamic table building */
	  this.ncode = 0;             /* number of code length code lengths */
	  this.nlen = 0;              /* number of length code lengths */
	  this.ndist = 0;             /* number of distance code lengths */
	  this.have = 0;              /* number of code lengths in lens[] */
	  this.next = null;              /* next available space in codes[] */

	  this.lens = new common.Buf16(320); /* temporary storage for code lengths */
	  this.work = new common.Buf16(288); /* work area for code table building */

	  /*
	   because we don't have pointers in js, we use lencode and distcode directly
	   as buffers so we don't need codes
	  */
	  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
	  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
	  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
	  this.sane = 0;                   /* if false, allow invalid distance too far */
	  this.back = 0;                   /* bits back of last unprocessed length/lit */
	  this.was = 0;                    /* initial length of match */
	}

	function inflateResetKeep(strm) {
	  var state;

	  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
	  state = strm.state;
	  strm.total_in = strm.total_out = state.total = 0;
	  strm.msg = ''; /*Z_NULL*/
	  if (state.wrap) {       /* to support ill-conceived Java test suite */
	    strm.adler = state.wrap & 1;
	  }
	  state.mode = HEAD;
	  state.last = 0;
	  state.havedict = 0;
	  state.dmax = 32768;
	  state.head = null/*Z_NULL*/;
	  state.hold = 0;
	  state.bits = 0;
	  //state.lencode = state.distcode = state.next = state.codes;
	  state.lencode = state.lendyn = new common.Buf32(ENOUGH_LENS$1);
	  state.distcode = state.distdyn = new common.Buf32(ENOUGH_DISTS$1);

	  state.sane = 1;
	  state.back = -1;
	  //Tracev((stderr, "inflate: reset\n"));
	  return Z_OK$2;
	}

	function inflateReset(strm) {
	  var state;

	  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
	  state = strm.state;
	  state.wsize = 0;
	  state.whave = 0;
	  state.wnext = 0;
	  return inflateResetKeep(strm);

	}

	function inflateReset2(strm, windowBits) {
	  var wrap;
	  var state;

	  /* get the state */
	  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
	  state = strm.state;

	  /* extract wrap request from windowBits parameter */
	  if (windowBits < 0) {
	    wrap = 0;
	    windowBits = -windowBits;
	  }
	  else {
	    wrap = (windowBits >> 4) + 1;
	    if (windowBits < 48) {
	      windowBits &= 15;
	    }
	  }

	  /* set number of window bits, free window if different */
	  if (windowBits && (windowBits < 8 || windowBits > 15)) {
	    return Z_STREAM_ERROR$1;
	  }
	  if (state.window !== null && state.wbits !== windowBits) {
	    state.window = null;
	  }

	  /* update state and reset the rest of it */
	  state.wrap = wrap;
	  state.wbits = windowBits;
	  return inflateReset(strm);
	}

	function inflateInit2(strm, windowBits) {
	  var ret;
	  var state;

	  if (!strm) { return Z_STREAM_ERROR$1; }
	  //strm.msg = Z_NULL;                 /* in case we return an error */

	  state = new InflateState();

	  //if (state === Z_NULL) return Z_MEM_ERROR;
	  //Tracev((stderr, "inflate: allocated\n"));
	  strm.state = state;
	  state.window = null/*Z_NULL*/;
	  ret = inflateReset2(strm, windowBits);
	  if (ret !== Z_OK$2) {
	    strm.state = null/*Z_NULL*/;
	  }
	  return ret;
	}

	function inflateInit(strm) {
	  return inflateInit2(strm, DEF_WBITS);
	}


	/*
	 Return state with length and distance decoding tables and index sizes set to
	 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
	 If BUILDFIXED is defined, then instead this routine builds the tables the
	 first time it's called, and returns those tables the first time and
	 thereafter.  This reduces the size of the code by about 2K bytes, in
	 exchange for a little execution time.  However, BUILDFIXED should not be
	 used for threaded applications, since the rewriting of the tables and virgin
	 may not be thread-safe.
	 */
	var virgin = true;

	var lenfix, distfix; // We have no pointers in JS, so keep tables separate

	function fixedtables(state) {
	  /* build fixed huffman tables if first call (may not be thread safe) */
	  if (virgin) {
	    var sym;

	    lenfix = new common.Buf32(512);
	    distfix = new common.Buf32(32);

	    /* literal/length table */
	    sym = 0;
	    while (sym < 144) { state.lens[sym++] = 8; }
	    while (sym < 256) { state.lens[sym++] = 9; }
	    while (sym < 280) { state.lens[sym++] = 7; }
	    while (sym < 288) { state.lens[sym++] = 8; }

	    inftrees(LENS$1,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

	    /* distance table */
	    sym = 0;
	    while (sym < 32) { state.lens[sym++] = 5; }

	    inftrees(DISTS$1, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

	    /* do this just once */
	    virgin = false;
	  }

	  state.lencode = lenfix;
	  state.lenbits = 9;
	  state.distcode = distfix;
	  state.distbits = 5;
	}


	/*
	 Update the window with the last wsize (normally 32K) bytes written before
	 returning.  If window does not exist yet, create it.  This is only called
	 when a window is already in use, or when output has been written during this
	 inflate call, but the end of the deflate stream has not been reached yet.
	 It is also called to create a window for dictionary data when a dictionary
	 is loaded.

	 Providing output buffers larger than 32K to inflate() should provide a speed
	 advantage, since only the last 32K of output is copied to the sliding window
	 upon return from inflate(), and since all distances after the first 32K of
	 output will fall in the output data, making match copies simpler and faster.
	 The advantage may be dependent on the size of the processor's data caches.
	 */
	function updatewindow(strm, src, end, copy) {
	  var dist;
	  var state = strm.state;

	  /* if it hasn't been done already, allocate space for the window */
	  if (state.window === null) {
	    state.wsize = 1 << state.wbits;
	    state.wnext = 0;
	    state.whave = 0;

	    state.window = new common.Buf8(state.wsize);
	  }

	  /* copy state->wsize or less output bytes into the circular window */
	  if (copy >= state.wsize) {
	    common.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
	    state.wnext = 0;
	    state.whave = state.wsize;
	  }
	  else {
	    dist = state.wsize - state.wnext;
	    if (dist > copy) {
	      dist = copy;
	    }
	    //zmemcpy(state->window + state->wnext, end - copy, dist);
	    common.arraySet(state.window, src, end - copy, dist, state.wnext);
	    copy -= dist;
	    if (copy) {
	      //zmemcpy(state->window, end - copy, copy);
	      common.arraySet(state.window, src, end - copy, copy, 0);
	      state.wnext = copy;
	      state.whave = state.wsize;
	    }
	    else {
	      state.wnext += dist;
	      if (state.wnext === state.wsize) { state.wnext = 0; }
	      if (state.whave < state.wsize) { state.whave += dist; }
	    }
	  }
	  return 0;
	}

	function inflate(strm, flush) {
	  var state;
	  var input, output;          // input/output buffers
	  var next;                   /* next input INDEX */
	  var put;                    /* next output INDEX */
	  var have, left;             /* available input and output */
	  var hold;                   /* bit buffer */
	  var bits;                   /* bits in bit buffer */
	  var _in, _out;              /* save starting available input and output */
	  var copy;                   /* number of stored or match bytes to copy */
	  var from;                   /* where to copy match bytes from */
	  var from_source;
	  var here = 0;               /* current decoding table entry */
	  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
	  //var last;                   /* parent table entry */
	  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
	  var len;                    /* length to copy for repeats, bits to drop */
	  var ret;                    /* return code */
	  var hbuf = new common.Buf8(4);    /* buffer for gzip header crc calculation */
	  var opts;

	  var n; // temporary var for NEED_BITS

	  var order = /* permutation of code lengths */
	    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


	  if (!strm || !strm.state || !strm.output ||
	      (!strm.input && strm.avail_in !== 0)) {
	    return Z_STREAM_ERROR$1;
	  }

	  state = strm.state;
	  if (state.mode === TYPE$1) { state.mode = TYPEDO; }    /* skip check */


	  //--- LOAD() ---
	  put = strm.next_out;
	  output = strm.output;
	  left = strm.avail_out;
	  next = strm.next_in;
	  input = strm.input;
	  have = strm.avail_in;
	  hold = state.hold;
	  bits = state.bits;
	  //---

	  _in = have;
	  _out = left;
	  ret = Z_OK$2;

	  inf_leave: // goto emulation
	  for (;;) {
	    switch (state.mode) {
	      case HEAD:
	        if (state.wrap === 0) {
	          state.mode = TYPEDO;
	          break;
	        }
	        //=== NEEDBITS(16);
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
	          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32_1(state.check, hbuf, 2, 0);
	          //===//

	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          state.mode = FLAGS;
	          break;
	        }
	        state.flags = 0;           /* expect zlib header */
	        if (state.head) {
	          state.head.done = false;
	        }
	        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
	          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
	          strm.msg = 'incorrect header check';
	          state.mode = BAD$1;
	          break;
	        }
	        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED$2) {
	          strm.msg = 'unknown compression method';
	          state.mode = BAD$1;
	          break;
	        }
	        //--- DROPBITS(4) ---//
	        hold >>>= 4;
	        bits -= 4;
	        //---//
	        len = (hold & 0x0f)/*BITS(4)*/ + 8;
	        if (state.wbits === 0) {
	          state.wbits = len;
	        }
	        else if (len > state.wbits) {
	          strm.msg = 'invalid window size';
	          state.mode = BAD$1;
	          break;
	        }
	        state.dmax = 1 << len;
	        //Tracev((stderr, "inflate:   zlib header ok\n"));
	        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
	        state.mode = hold & 0x200 ? DICTID : TYPE$1;
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        break;
	      case FLAGS:
	        //=== NEEDBITS(16); */
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.flags = hold;
	        if ((state.flags & 0xff) !== Z_DEFLATED$2) {
	          strm.msg = 'unknown compression method';
	          state.mode = BAD$1;
	          break;
	        }
	        if (state.flags & 0xe000) {
	          strm.msg = 'unknown header flags set';
	          state.mode = BAD$1;
	          break;
	        }
	        if (state.head) {
	          state.head.text = ((hold >> 8) & 1);
	        }
	        if (state.flags & 0x0200) {
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32_1(state.check, hbuf, 2, 0);
	          //===//
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = TIME;
	        /* falls through */
	      case TIME:
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if (state.head) {
	          state.head.time = hold;
	        }
	        if (state.flags & 0x0200) {
	          //=== CRC4(state.check, hold)
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          hbuf[2] = (hold >>> 16) & 0xff;
	          hbuf[3] = (hold >>> 24) & 0xff;
	          state.check = crc32_1(state.check, hbuf, 4, 0);
	          //===
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = OS;
	        /* falls through */
	      case OS:
	        //=== NEEDBITS(16); */
	        while (bits < 16) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if (state.head) {
	          state.head.xflags = (hold & 0xff);
	          state.head.os = (hold >> 8);
	        }
	        if (state.flags & 0x0200) {
	          //=== CRC2(state.check, hold);
	          hbuf[0] = hold & 0xff;
	          hbuf[1] = (hold >>> 8) & 0xff;
	          state.check = crc32_1(state.check, hbuf, 2, 0);
	          //===//
	        }
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = EXLEN;
	        /* falls through */
	      case EXLEN:
	        if (state.flags & 0x0400) {
	          //=== NEEDBITS(16); */
	          while (bits < 16) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.length = hold;
	          if (state.head) {
	            state.head.extra_len = hold;
	          }
	          if (state.flags & 0x0200) {
	            //=== CRC2(state.check, hold);
	            hbuf[0] = hold & 0xff;
	            hbuf[1] = (hold >>> 8) & 0xff;
	            state.check = crc32_1(state.check, hbuf, 2, 0);
	            //===//
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	        }
	        else if (state.head) {
	          state.head.extra = null/*Z_NULL*/;
	        }
	        state.mode = EXTRA;
	        /* falls through */
	      case EXTRA:
	        if (state.flags & 0x0400) {
	          copy = state.length;
	          if (copy > have) { copy = have; }
	          if (copy) {
	            if (state.head) {
	              len = state.head.extra_len - state.length;
	              if (!state.head.extra) {
	                // Use untyped array for more convenient processing later
	                state.head.extra = new Array(state.head.extra_len);
	              }
	              common.arraySet(
	                state.head.extra,
	                input,
	                next,
	                // extra field is limited to 65536 bytes
	                // - no need for additional size check
	                copy,
	                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
	                len
	              );
	              //zmemcpy(state.head.extra + len, next,
	              //        len + copy > state.head.extra_max ?
	              //        state.head.extra_max - len : copy);
	            }
	            if (state.flags & 0x0200) {
	              state.check = crc32_1(state.check, input, copy, next);
	            }
	            have -= copy;
	            next += copy;
	            state.length -= copy;
	          }
	          if (state.length) { break inf_leave; }
	        }
	        state.length = 0;
	        state.mode = NAME;
	        /* falls through */
	      case NAME:
	        if (state.flags & 0x0800) {
	          if (have === 0) { break inf_leave; }
	          copy = 0;
	          do {
	            // TODO: 2 or 1 bytes?
	            len = input[next + copy++];
	            /* use constant limit because in js we should not preallocate memory */
	            if (state.head && len &&
	                (state.length < 65536 /*state.head.name_max*/)) {
	              state.head.name += String.fromCharCode(len);
	            }
	          } while (len && copy < have);

	          if (state.flags & 0x0200) {
	            state.check = crc32_1(state.check, input, copy, next);
	          }
	          have -= copy;
	          next += copy;
	          if (len) { break inf_leave; }
	        }
	        else if (state.head) {
	          state.head.name = null;
	        }
	        state.length = 0;
	        state.mode = COMMENT;
	        /* falls through */
	      case COMMENT:
	        if (state.flags & 0x1000) {
	          if (have === 0) { break inf_leave; }
	          copy = 0;
	          do {
	            len = input[next + copy++];
	            /* use constant limit because in js we should not preallocate memory */
	            if (state.head && len &&
	                (state.length < 65536 /*state.head.comm_max*/)) {
	              state.head.comment += String.fromCharCode(len);
	            }
	          } while (len && copy < have);
	          if (state.flags & 0x0200) {
	            state.check = crc32_1(state.check, input, copy, next);
	          }
	          have -= copy;
	          next += copy;
	          if (len) { break inf_leave; }
	        }
	        else if (state.head) {
	          state.head.comment = null;
	        }
	        state.mode = HCRC;
	        /* falls through */
	      case HCRC:
	        if (state.flags & 0x0200) {
	          //=== NEEDBITS(16); */
	          while (bits < 16) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          if (hold !== (state.check & 0xffff)) {
	            strm.msg = 'header crc mismatch';
	            state.mode = BAD$1;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	        }
	        if (state.head) {
	          state.head.hcrc = ((state.flags >> 9) & 1);
	          state.head.done = true;
	        }
	        strm.adler = state.check = 0;
	        state.mode = TYPE$1;
	        break;
	      case DICTID:
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        strm.adler = state.check = zswap32(hold);
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = DICT;
	        /* falls through */
	      case DICT:
	        if (state.havedict === 0) {
	          //--- RESTORE() ---
	          strm.next_out = put;
	          strm.avail_out = left;
	          strm.next_in = next;
	          strm.avail_in = have;
	          state.hold = hold;
	          state.bits = bits;
	          //---
	          return Z_NEED_DICT;
	        }
	        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
	        state.mode = TYPE$1;
	        /* falls through */
	      case TYPE$1:
	        if (flush === Z_BLOCK$1 || flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case TYPEDO:
	        if (state.last) {
	          //--- BYTEBITS() ---//
	          hold >>>= bits & 7;
	          bits -= bits & 7;
	          //---//
	          state.mode = CHECK;
	          break;
	        }
	        //=== NEEDBITS(3); */
	        while (bits < 3) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.last = (hold & 0x01)/*BITS(1)*/;
	        //--- DROPBITS(1) ---//
	        hold >>>= 1;
	        bits -= 1;
	        //---//

	        switch ((hold & 0x03)/*BITS(2)*/) {
	          case 0:                             /* stored block */
	            //Tracev((stderr, "inflate:     stored block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = STORED;
	            break;
	          case 1:                             /* fixed block */
	            fixedtables(state);
	            //Tracev((stderr, "inflate:     fixed codes block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = LEN_;             /* decode codes */
	            if (flush === Z_TREES) {
	              //--- DROPBITS(2) ---//
	              hold >>>= 2;
	              bits -= 2;
	              //---//
	              break inf_leave;
	            }
	            break;
	          case 2:                             /* dynamic block */
	            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
	            //        state.last ? " (last)" : ""));
	            state.mode = TABLE;
	            break;
	          case 3:
	            strm.msg = 'invalid block type';
	            state.mode = BAD$1;
	        }
	        //--- DROPBITS(2) ---//
	        hold >>>= 2;
	        bits -= 2;
	        //---//
	        break;
	      case STORED:
	        //--- BYTEBITS() ---// /* go to byte boundary */
	        hold >>>= bits & 7;
	        bits -= bits & 7;
	        //---//
	        //=== NEEDBITS(32); */
	        while (bits < 32) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
	          strm.msg = 'invalid stored block lengths';
	          state.mode = BAD$1;
	          break;
	        }
	        state.length = hold & 0xffff;
	        //Tracev((stderr, "inflate:       stored length %u\n",
	        //        state.length));
	        //=== INITBITS();
	        hold = 0;
	        bits = 0;
	        //===//
	        state.mode = COPY_;
	        if (flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case COPY_:
	        state.mode = COPY;
	        /* falls through */
	      case COPY:
	        copy = state.length;
	        if (copy) {
	          if (copy > have) { copy = have; }
	          if (copy > left) { copy = left; }
	          if (copy === 0) { break inf_leave; }
	          //--- zmemcpy(put, next, copy); ---
	          common.arraySet(output, input, next, copy, put);
	          //---//
	          have -= copy;
	          next += copy;
	          left -= copy;
	          put += copy;
	          state.length -= copy;
	          break;
	        }
	        //Tracev((stderr, "inflate:       stored end\n"));
	        state.mode = TYPE$1;
	        break;
	      case TABLE:
	        //=== NEEDBITS(14); */
	        while (bits < 14) {
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	        }
	        //===//
	        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
	        //--- DROPBITS(5) ---//
	        hold >>>= 5;
	        bits -= 5;
	        //---//
	        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
	        //--- DROPBITS(5) ---//
	        hold >>>= 5;
	        bits -= 5;
	        //---//
	        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
	        //--- DROPBITS(4) ---//
	        hold >>>= 4;
	        bits -= 4;
	        //---//
	//#ifndef PKZIP_BUG_WORKAROUND
	        if (state.nlen > 286 || state.ndist > 30) {
	          strm.msg = 'too many length or distance symbols';
	          state.mode = BAD$1;
	          break;
	        }
	//#endif
	        //Tracev((stderr, "inflate:       table sizes ok\n"));
	        state.have = 0;
	        state.mode = LENLENS;
	        /* falls through */
	      case LENLENS:
	        while (state.have < state.ncode) {
	          //=== NEEDBITS(3);
	          while (bits < 3) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
	          //--- DROPBITS(3) ---//
	          hold >>>= 3;
	          bits -= 3;
	          //---//
	        }
	        while (state.have < 19) {
	          state.lens[order[state.have++]] = 0;
	        }
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        //state.next = state.codes;
	        //state.lencode = state.next;
	        // Switch to use dynamic table
	        state.lencode = state.lendyn;
	        state.lenbits = 7;

	        opts = { bits: state.lenbits };
	        ret = inftrees(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
	        state.lenbits = opts.bits;

	        if (ret) {
	          strm.msg = 'invalid code lengths set';
	          state.mode = BAD$1;
	          break;
	        }
	        //Tracev((stderr, "inflate:       code lengths ok\n"));
	        state.have = 0;
	        state.mode = CODELENS;
	        /* falls through */
	      case CODELENS:
	        while (state.have < state.nlen + state.ndist) {
	          for (;;) {
	            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;

	            if ((here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          if (here_val < 16) {
	            //--- DROPBITS(here.bits) ---//
	            hold >>>= here_bits;
	            bits -= here_bits;
	            //---//
	            state.lens[state.have++] = here_val;
	          }
	          else {
	            if (here_val === 16) {
	              //=== NEEDBITS(here.bits + 2);
	              n = here_bits + 2;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              if (state.have === 0) {
	                strm.msg = 'invalid bit length repeat';
	                state.mode = BAD$1;
	                break;
	              }
	              len = state.lens[state.have - 1];
	              copy = 3 + (hold & 0x03);//BITS(2);
	              //--- DROPBITS(2) ---//
	              hold >>>= 2;
	              bits -= 2;
	              //---//
	            }
	            else if (here_val === 17) {
	              //=== NEEDBITS(here.bits + 3);
	              n = here_bits + 3;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              len = 0;
	              copy = 3 + (hold & 0x07);//BITS(3);
	              //--- DROPBITS(3) ---//
	              hold >>>= 3;
	              bits -= 3;
	              //---//
	            }
	            else {
	              //=== NEEDBITS(here.bits + 7);
	              n = here_bits + 7;
	              while (bits < n) {
	                if (have === 0) { break inf_leave; }
	                have--;
	                hold += input[next++] << bits;
	                bits += 8;
	              }
	              //===//
	              //--- DROPBITS(here.bits) ---//
	              hold >>>= here_bits;
	              bits -= here_bits;
	              //---//
	              len = 0;
	              copy = 11 + (hold & 0x7f);//BITS(7);
	              //--- DROPBITS(7) ---//
	              hold >>>= 7;
	              bits -= 7;
	              //---//
	            }
	            if (state.have + copy > state.nlen + state.ndist) {
	              strm.msg = 'invalid bit length repeat';
	              state.mode = BAD$1;
	              break;
	            }
	            while (copy--) {
	              state.lens[state.have++] = len;
	            }
	          }
	        }

	        /* handle error breaks in while */
	        if (state.mode === BAD$1) { break; }

	        /* check for end-of-block code (better have one) */
	        if (state.lens[256] === 0) {
	          strm.msg = 'invalid code -- missing end-of-block';
	          state.mode = BAD$1;
	          break;
	        }

	        /* build code tables -- note: do not change the lenbits or distbits
	           values here (9 and 6) without reading the comments in inftrees.h
	           concerning the ENOUGH constants, which depend on those values */
	        state.lenbits = 9;

	        opts = { bits: state.lenbits };
	        ret = inftrees(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        // state.next_index = opts.table_index;
	        state.lenbits = opts.bits;
	        // state.lencode = state.next;

	        if (ret) {
	          strm.msg = 'invalid literal/lengths set';
	          state.mode = BAD$1;
	          break;
	        }

	        state.distbits = 6;
	        //state.distcode.copy(state.codes);
	        // Switch to use dynamic table
	        state.distcode = state.distdyn;
	        opts = { bits: state.distbits };
	        ret = inftrees(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
	        // We have separate tables & no pointers. 2 commented lines below not needed.
	        // state.next_index = opts.table_index;
	        state.distbits = opts.bits;
	        // state.distcode = state.next;

	        if (ret) {
	          strm.msg = 'invalid distances set';
	          state.mode = BAD$1;
	          break;
	        }
	        //Tracev((stderr, 'inflate:       codes ok\n'));
	        state.mode = LEN_;
	        if (flush === Z_TREES) { break inf_leave; }
	        /* falls through */
	      case LEN_:
	        state.mode = LEN;
	        /* falls through */
	      case LEN:
	        if (have >= 6 && left >= 258) {
	          //--- RESTORE() ---
	          strm.next_out = put;
	          strm.avail_out = left;
	          strm.next_in = next;
	          strm.avail_in = have;
	          state.hold = hold;
	          state.bits = bits;
	          //---
	          inffast(strm, _out);
	          //--- LOAD() ---
	          put = strm.next_out;
	          output = strm.output;
	          left = strm.avail_out;
	          next = strm.next_in;
	          input = strm.input;
	          have = strm.avail_in;
	          hold = state.hold;
	          bits = state.bits;
	          //---

	          if (state.mode === TYPE$1) {
	            state.back = -1;
	          }
	          break;
	        }
	        state.back = 0;
	        for (;;) {
	          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
	          here_bits = here >>> 24;
	          here_op = (here >>> 16) & 0xff;
	          here_val = here & 0xffff;

	          if (here_bits <= bits) { break; }
	          //--- PULLBYTE() ---//
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	          //---//
	        }
	        if (here_op && (here_op & 0xf0) === 0) {
	          last_bits = here_bits;
	          last_op = here_op;
	          last_val = here_val;
	          for (;;) {
	            here = state.lencode[last_val +
	                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;

	            if ((last_bits + here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          //--- DROPBITS(last.bits) ---//
	          hold >>>= last_bits;
	          bits -= last_bits;
	          //---//
	          state.back += last_bits;
	        }
	        //--- DROPBITS(here.bits) ---//
	        hold >>>= here_bits;
	        bits -= here_bits;
	        //---//
	        state.back += here_bits;
	        state.length = here_val;
	        if (here_op === 0) {
	          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
	          //        "inflate:         literal '%c'\n" :
	          //        "inflate:         literal 0x%02x\n", here.val));
	          state.mode = LIT;
	          break;
	        }
	        if (here_op & 32) {
	          //Tracevv((stderr, "inflate:         end of block\n"));
	          state.back = -1;
	          state.mode = TYPE$1;
	          break;
	        }
	        if (here_op & 64) {
	          strm.msg = 'invalid literal/length code';
	          state.mode = BAD$1;
	          break;
	        }
	        state.extra = here_op & 15;
	        state.mode = LENEXT;
	        /* falls through */
	      case LENEXT:
	        if (state.extra) {
	          //=== NEEDBITS(state.extra);
	          n = state.extra;
	          while (bits < n) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
	          //--- DROPBITS(state.extra) ---//
	          hold >>>= state.extra;
	          bits -= state.extra;
	          //---//
	          state.back += state.extra;
	        }
	        //Tracevv((stderr, "inflate:         length %u\n", state.length));
	        state.was = state.length;
	        state.mode = DIST;
	        /* falls through */
	      case DIST:
	        for (;;) {
	          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
	          here_bits = here >>> 24;
	          here_op = (here >>> 16) & 0xff;
	          here_val = here & 0xffff;

	          if ((here_bits) <= bits) { break; }
	          //--- PULLBYTE() ---//
	          if (have === 0) { break inf_leave; }
	          have--;
	          hold += input[next++] << bits;
	          bits += 8;
	          //---//
	        }
	        if ((here_op & 0xf0) === 0) {
	          last_bits = here_bits;
	          last_op = here_op;
	          last_val = here_val;
	          for (;;) {
	            here = state.distcode[last_val +
	                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
	            here_bits = here >>> 24;
	            here_op = (here >>> 16) & 0xff;
	            here_val = here & 0xffff;

	            if ((last_bits + here_bits) <= bits) { break; }
	            //--- PULLBYTE() ---//
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	            //---//
	          }
	          //--- DROPBITS(last.bits) ---//
	          hold >>>= last_bits;
	          bits -= last_bits;
	          //---//
	          state.back += last_bits;
	        }
	        //--- DROPBITS(here.bits) ---//
	        hold >>>= here_bits;
	        bits -= here_bits;
	        //---//
	        state.back += here_bits;
	        if (here_op & 64) {
	          strm.msg = 'invalid distance code';
	          state.mode = BAD$1;
	          break;
	        }
	        state.offset = here_val;
	        state.extra = (here_op) & 15;
	        state.mode = DISTEXT;
	        /* falls through */
	      case DISTEXT:
	        if (state.extra) {
	          //=== NEEDBITS(state.extra);
	          n = state.extra;
	          while (bits < n) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
	          //--- DROPBITS(state.extra) ---//
	          hold >>>= state.extra;
	          bits -= state.extra;
	          //---//
	          state.back += state.extra;
	        }
	//#ifdef INFLATE_STRICT
	        if (state.offset > state.dmax) {
	          strm.msg = 'invalid distance too far back';
	          state.mode = BAD$1;
	          break;
	        }
	//#endif
	        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
	        state.mode = MATCH;
	        /* falls through */
	      case MATCH:
	        if (left === 0) { break inf_leave; }
	        copy = _out - left;
	        if (state.offset > copy) {         /* copy from window */
	          copy = state.offset - copy;
	          if (copy > state.whave) {
	            if (state.sane) {
	              strm.msg = 'invalid distance too far back';
	              state.mode = BAD$1;
	              break;
	            }
	// (!) This block is disabled in zlib defaults,
	// don't enable it for binary compatibility
	//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
	//          Trace((stderr, "inflate.c too far\n"));
	//          copy -= state.whave;
	//          if (copy > state.length) { copy = state.length; }
	//          if (copy > left) { copy = left; }
	//          left -= copy;
	//          state.length -= copy;
	//          do {
	//            output[put++] = 0;
	//          } while (--copy);
	//          if (state.length === 0) { state.mode = LEN; }
	//          break;
	//#endif
	          }
	          if (copy > state.wnext) {
	            copy -= state.wnext;
	            from = state.wsize - copy;
	          }
	          else {
	            from = state.wnext - copy;
	          }
	          if (copy > state.length) { copy = state.length; }
	          from_source = state.window;
	        }
	        else {                              /* copy from output */
	          from_source = output;
	          from = put - state.offset;
	          copy = state.length;
	        }
	        if (copy > left) { copy = left; }
	        left -= copy;
	        state.length -= copy;
	        do {
	          output[put++] = from_source[from++];
	        } while (--copy);
	        if (state.length === 0) { state.mode = LEN; }
	        break;
	      case LIT:
	        if (left === 0) { break inf_leave; }
	        output[put++] = state.length;
	        left--;
	        state.mode = LEN;
	        break;
	      case CHECK:
	        if (state.wrap) {
	          //=== NEEDBITS(32);
	          while (bits < 32) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            // Use '|' instead of '+' to make sure that result is signed
	            hold |= input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          _out -= left;
	          strm.total_out += _out;
	          state.total += _out;
	          if (_out) {
	            strm.adler = state.check =
	                /*UPDATE(state.check, put - _out, _out);*/
	                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

	          }
	          _out = left;
	          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
	          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
	            strm.msg = 'incorrect data check';
	            state.mode = BAD$1;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          //Tracev((stderr, "inflate:   check matches trailer\n"));
	        }
	        state.mode = LENGTH;
	        /* falls through */
	      case LENGTH:
	        if (state.wrap && state.flags) {
	          //=== NEEDBITS(32);
	          while (bits < 32) {
	            if (have === 0) { break inf_leave; }
	            have--;
	            hold += input[next++] << bits;
	            bits += 8;
	          }
	          //===//
	          if (hold !== (state.total & 0xffffffff)) {
	            strm.msg = 'incorrect length check';
	            state.mode = BAD$1;
	            break;
	          }
	          //=== INITBITS();
	          hold = 0;
	          bits = 0;
	          //===//
	          //Tracev((stderr, "inflate:   length matches trailer\n"));
	        }
	        state.mode = DONE;
	        /* falls through */
	      case DONE:
	        ret = Z_STREAM_END$2;
	        break inf_leave;
	      case BAD$1:
	        ret = Z_DATA_ERROR$1;
	        break inf_leave;
	      case MEM:
	        return Z_MEM_ERROR;
	      case SYNC:
	        /* falls through */
	      default:
	        return Z_STREAM_ERROR$1;
	    }
	  }

	  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

	  /*
	     Return from inflate(), updating the total counts and the check value.
	     If there was no progress during the inflate() call, return a buffer
	     error.  Call updatewindow() to create and/or update the window state.
	     Note: a memory error from inflate() is non-recoverable.
	   */

	  //--- RESTORE() ---
	  strm.next_out = put;
	  strm.avail_out = left;
	  strm.next_in = next;
	  strm.avail_in = have;
	  state.hold = hold;
	  state.bits = bits;
	  //---

	  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD$1 &&
	                      (state.mode < CHECK || flush !== Z_FINISH$2))) {
	    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
	      state.mode = MEM;
	      return Z_MEM_ERROR;
	    }
	  }
	  _in -= strm.avail_in;
	  _out -= strm.avail_out;
	  strm.total_in += _in;
	  strm.total_out += _out;
	  state.total += _out;
	  if (state.wrap && _out) {
	    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
	      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
	  }
	  strm.data_type = state.bits + (state.last ? 64 : 0) +
	                    (state.mode === TYPE$1 ? 128 : 0) +
	                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
	  if (((_in === 0 && _out === 0) || flush === Z_FINISH$2) && ret === Z_OK$2) {
	    ret = Z_BUF_ERROR$1;
	  }
	  return ret;
	}

	function inflateEnd(strm) {

	  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
	    return Z_STREAM_ERROR$1;
	  }

	  var state = strm.state;
	  if (state.window) {
	    state.window = null;
	  }
	  strm.state = null;
	  return Z_OK$2;
	}

	function inflateGetHeader(strm, head) {
	  var state;

	  /* check state */
	  if (!strm || !strm.state) { return Z_STREAM_ERROR$1; }
	  state = strm.state;
	  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

	  /* save header structure */
	  state.head = head;
	  head.done = false;
	  return Z_OK$2;
	}

	function inflateSetDictionary(strm, dictionary) {
	  var dictLength = dictionary.length;

	  var state;
	  var dictid;
	  var ret;

	  /* check state */
	  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR$1; }
	  state = strm.state;

	  if (state.wrap !== 0 && state.mode !== DICT) {
	    return Z_STREAM_ERROR$1;
	  }

	  /* check for correct dictionary identifier */
	  if (state.mode === DICT) {
	    dictid = 1; /* adler32(0, null, 0)*/
	    /* dictid = adler32(dictid, dictionary, dictLength); */
	    dictid = adler32_1(dictid, dictionary, dictLength, 0);
	    if (dictid !== state.check) {
	      return Z_DATA_ERROR$1;
	    }
	  }
	  /* copy dictionary to window using updatewindow(), which will amend the
	   existing dictionary if appropriate */
	  ret = updatewindow(strm, dictionary, dictLength, dictLength);
	  if (ret) {
	    state.mode = MEM;
	    return Z_MEM_ERROR;
	  }
	  state.havedict = 1;
	  // Tracev((stderr, "inflate:   dictionary set\n"));
	  return Z_OK$2;
	}

	var inflateReset_1 = inflateReset;
	var inflateReset2_1 = inflateReset2;
	var inflateResetKeep_1 = inflateResetKeep;
	var inflateInit_1 = inflateInit;
	var inflateInit2_1 = inflateInit2;
	var inflate_2 = inflate;
	var inflateEnd_1 = inflateEnd;
	var inflateGetHeader_1 = inflateGetHeader;
	var inflateSetDictionary_1 = inflateSetDictionary;
	var inflateInfo = 'pako inflate (from Nodeca project)';

	/* Not implemented
	exports.inflateCopy = inflateCopy;
	exports.inflateGetDictionary = inflateGetDictionary;
	exports.inflateMark = inflateMark;
	exports.inflatePrime = inflatePrime;
	exports.inflateSync = inflateSync;
	exports.inflateSyncPoint = inflateSyncPoint;
	exports.inflateUndermine = inflateUndermine;
	*/

	var inflate_1 = {
		inflateReset: inflateReset_1,
		inflateReset2: inflateReset2_1,
		inflateResetKeep: inflateResetKeep_1,
		inflateInit: inflateInit_1,
		inflateInit2: inflateInit2_1,
		inflate: inflate_2,
		inflateEnd: inflateEnd_1,
		inflateGetHeader: inflateGetHeader_1,
		inflateSetDictionary: inflateSetDictionary_1,
		inflateInfo: inflateInfo
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	var constants = {

	  /* Allowed flush values; see deflate() and inflate() below for details */
	  Z_NO_FLUSH:         0,
	  Z_PARTIAL_FLUSH:    1,
	  Z_SYNC_FLUSH:       2,
	  Z_FULL_FLUSH:       3,
	  Z_FINISH:           4,
	  Z_BLOCK:            5,
	  Z_TREES:            6,

	  /* Return codes for the compression/decompression functions. Negative values
	  * are errors, positive values are used for special but normal events.
	  */
	  Z_OK:               0,
	  Z_STREAM_END:       1,
	  Z_NEED_DICT:        2,
	  Z_ERRNO:           -1,
	  Z_STREAM_ERROR:    -2,
	  Z_DATA_ERROR:      -3,
	  //Z_MEM_ERROR:     -4,
	  Z_BUF_ERROR:       -5,
	  //Z_VERSION_ERROR: -6,

	  /* compression levels */
	  Z_NO_COMPRESSION:         0,
	  Z_BEST_SPEED:             1,
	  Z_BEST_COMPRESSION:       9,
	  Z_DEFAULT_COMPRESSION:   -1,


	  Z_FILTERED:               1,
	  Z_HUFFMAN_ONLY:           2,
	  Z_RLE:                    3,
	  Z_FIXED:                  4,
	  Z_DEFAULT_STRATEGY:       0,

	  /* Possible values of the data_type field (though see inflate()) */
	  Z_BINARY:                 0,
	  Z_TEXT:                   1,
	  //Z_ASCII:                1, // = Z_TEXT (deprecated)
	  Z_UNKNOWN:                2,

	  /* The deflate compression method */
	  Z_DEFLATED:               8
	  //Z_NULL:                 null // Use -1 or null inline, depending on var type
	};

	// (C) 1995-2013 Jean-loup Gailly and Mark Adler
	// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
	//
	// This software is provided 'as-is', without any express or implied
	// warranty. In no event will the authors be held liable for any damages
	// arising from the use of this software.
	//
	// Permission is granted to anyone to use this software for any purpose,
	// including commercial applications, and to alter it and redistribute it
	// freely, subject to the following restrictions:
	//
	// 1. The origin of this software must not be misrepresented; you must not
	//   claim that you wrote the original software. If you use this software
	//   in a product, an acknowledgment in the product documentation would be
	//   appreciated but is not required.
	// 2. Altered source versions must be plainly marked as such, and must not be
	//   misrepresented as being the original software.
	// 3. This notice may not be removed or altered from any source distribution.

	function GZheader() {
	  /* true if compressed data believed to be text */
	  this.text       = 0;
	  /* modification time */
	  this.time       = 0;
	  /* extra flags (not used when writing a gzip file) */
	  this.xflags     = 0;
	  /* operating system */
	  this.os         = 0;
	  /* pointer to extra field or Z_NULL if none */
	  this.extra      = null;
	  /* extra field length (valid if extra != Z_NULL) */
	  this.extra_len  = 0; // Actually, we don't need it in JS,
	                       // but leave for few code modifications

	  //
	  // Setup limits is not necessary because in js we should not preallocate memory
	  // for inflate use constant limit in 65536 bytes
	  //

	  /* space at extra (only when reading header) */
	  // this.extra_max  = 0;
	  /* pointer to zero-terminated file name or Z_NULL */
	  this.name       = '';
	  /* space at name (only when reading header) */
	  // this.name_max   = 0;
	  /* pointer to zero-terminated comment or Z_NULL */
	  this.comment    = '';
	  /* space at comment (only when reading header) */
	  // this.comm_max   = 0;
	  /* true if there was or will be a header crc */
	  this.hcrc       = 0;
	  /* true when done reading gzip header (not used when writing a gzip file) */
	  this.done       = false;
	}

	var gzheader = GZheader;

	var toString$2 = Object.prototype.toString;

	/**
	 * class Inflate
	 *
	 * Generic JS-style wrapper for zlib calls. If you don't need
	 * streaming behaviour - use more simple functions: [[inflate]]
	 * and [[inflateRaw]].
	 **/

	/* internal
	 * inflate.chunks -> Array
	 *
	 * Chunks of output data, if [[Inflate#onData]] not overridden.
	 **/

	/**
	 * Inflate.result -> Uint8Array|Array|String
	 *
	 * Uncompressed result, generated by default [[Inflate#onData]]
	 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
	 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
	 * push a chunk with explicit flush (call [[Inflate#push]] with
	 * `Z_SYNC_FLUSH` param).
	 **/

	/**
	 * Inflate.err -> Number
	 *
	 * Error code after inflate finished. 0 (Z_OK) on success.
	 * Should be checked if broken data possible.
	 **/

	/**
	 * Inflate.msg -> String
	 *
	 * Error message, if [[Inflate.err]] != 0
	 **/


	/**
	 * new Inflate(options)
	 * - options (Object): zlib inflate options.
	 *
	 * Creates new inflator instance with specified params. Throws exception
	 * on bad params. Supported options:
	 *
	 * - `windowBits`
	 * - `dictionary`
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information on these.
	 *
	 * Additional options, for internal needs:
	 *
	 * - `chunkSize` - size of generated data chunks (16K by default)
	 * - `raw` (Boolean) - do raw inflate
	 * - `to` (String) - if equal to 'string', then result will be converted
	 *   from utf8 to utf16 (javascript) string. When string output requested,
	 *   chunk length can differ from `chunkSize`, depending on content.
	 *
	 * By default, when no options set, autodetect deflate/gzip data format via
	 * wrapper header.
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * var pako = require('pako')
	 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
	 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
	 *
	 * var inflate = new pako.Inflate({ level: 3});
	 *
	 * inflate.push(chunk1, false);
	 * inflate.push(chunk2, true);  // true -> last chunk
	 *
	 * if (inflate.err) { throw new Error(inflate.err); }
	 *
	 * console.log(inflate.result);
	 * ```
	 **/
	function Inflate(options) {
	  if (!(this instanceof Inflate)) return new Inflate(options);

	  this.options = common.assign({
	    chunkSize: 16384,
	    windowBits: 0,
	    to: ''
	  }, options || {});

	  var opt = this.options;

	  // Force window size for `raw` data, if not set directly,
	  // because we have no header for autodetect.
	  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
	    opt.windowBits = -opt.windowBits;
	    if (opt.windowBits === 0) { opt.windowBits = -15; }
	  }

	  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
	  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
	      !(options && options.windowBits)) {
	    opt.windowBits += 32;
	  }

	  // Gzip header has no info about windows size, we can do autodetect only
	  // for deflate. So, if window size not set, force it to max when gzip possible
	  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
	    // bit 3 (16) -> gzipped data
	    // bit 4 (32) -> autodetect gzip/deflate
	    if ((opt.windowBits & 15) === 0) {
	      opt.windowBits |= 15;
	    }
	  }

	  this.err    = 0;      // error code, if happens (0 = Z_OK)
	  this.msg    = '';     // error message
	  this.ended  = false;  // used to avoid multiple onEnd() calls
	  this.chunks = [];     // chunks of compressed data

	  this.strm   = new zstream();
	  this.strm.avail_out = 0;

	  var status  = inflate_1.inflateInit2(
	    this.strm,
	    opt.windowBits
	  );

	  if (status !== constants.Z_OK) {
	    throw new Error(messages[status]);
	  }

	  this.header = new gzheader();

	  inflate_1.inflateGetHeader(this.strm, this.header);
	}

	/**
	 * Inflate#push(data[, mode]) -> Boolean
	 * - data (Uint8Array|Array|ArrayBuffer|String): input data
	 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
	 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
	 *
	 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
	 * new output chunks. Returns `true` on success. The last data block must have
	 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
	 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
	 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
	 *
	 * On fail call [[Inflate#onEnd]] with error code and return false.
	 *
	 * We strongly recommend to use `Uint8Array` on input for best speed (output
	 * format is detected automatically). Also, don't skip last param and always
	 * use the same type in your code (boolean or number). That will improve JS speed.
	 *
	 * For regular `Array`-s make sure all elements are [0..255].
	 *
	 * ##### Example
	 *
	 * ```javascript
	 * push(chunk, false); // push one of data chunks
	 * ...
	 * push(chunk, true);  // push last chunk
	 * ```
	 **/
	Inflate.prototype.push = function (data, mode) {
	  var strm = this.strm;
	  var chunkSize = this.options.chunkSize;
	  var dictionary = this.options.dictionary;
	  var status, _mode;
	  var next_out_utf8, tail, utf8str;
	  var dict;

	  // Flag to properly process Z_BUF_ERROR on testing inflate call
	  // when we check that all output data was flushed.
	  var allowBufError = false;

	  if (this.ended) { return false; }
	  _mode = (mode === ~~mode) ? mode : ((mode === true) ? constants.Z_FINISH : constants.Z_NO_FLUSH);

	  // Convert data if needed
	  if (typeof data === 'string') {
	    // Only binary strings can be decompressed on practice
	    strm.input = strings.binstring2buf(data);
	  } else if (toString$2.call(data) === '[object ArrayBuffer]') {
	    strm.input = new Uint8Array(data);
	  } else {
	    strm.input = data;
	  }

	  strm.next_in = 0;
	  strm.avail_in = strm.input.length;

	  do {
	    if (strm.avail_out === 0) {
	      strm.output = new common.Buf8(chunkSize);
	      strm.next_out = 0;
	      strm.avail_out = chunkSize;
	    }

	    status = inflate_1.inflate(strm, constants.Z_NO_FLUSH);    /* no bad return value */

	    if (status === constants.Z_NEED_DICT && dictionary) {
	      // Convert data if needed
	      if (typeof dictionary === 'string') {
	        dict = strings.string2buf(dictionary);
	      } else if (toString$2.call(dictionary) === '[object ArrayBuffer]') {
	        dict = new Uint8Array(dictionary);
	      } else {
	        dict = dictionary;
	      }

	      status = inflate_1.inflateSetDictionary(this.strm, dict);

	    }

	    if (status === constants.Z_BUF_ERROR && allowBufError === true) {
	      status = constants.Z_OK;
	      allowBufError = false;
	    }

	    if (status !== constants.Z_STREAM_END && status !== constants.Z_OK) {
	      this.onEnd(status);
	      this.ended = true;
	      return false;
	    }

	    if (strm.next_out) {
	      if (strm.avail_out === 0 || status === constants.Z_STREAM_END || (strm.avail_in === 0 && (_mode === constants.Z_FINISH || _mode === constants.Z_SYNC_FLUSH))) {

	        if (this.options.to === 'string') {

	          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

	          tail = strm.next_out - next_out_utf8;
	          utf8str = strings.buf2string(strm.output, next_out_utf8);

	          // move tail
	          strm.next_out = tail;
	          strm.avail_out = chunkSize - tail;
	          if (tail) { common.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

	          this.onData(utf8str);

	        } else {
	          this.onData(common.shrinkBuf(strm.output, strm.next_out));
	        }
	      }
	    }

	    // When no more input data, we should check that internal inflate buffers
	    // are flushed. The only way to do it when avail_out = 0 - run one more
	    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
	    // Here we set flag to process this error properly.
	    //
	    // NOTE. Deflate does not return error in this case and does not needs such
	    // logic.
	    if (strm.avail_in === 0 && strm.avail_out === 0) {
	      allowBufError = true;
	    }

	  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== constants.Z_STREAM_END);

	  if (status === constants.Z_STREAM_END) {
	    _mode = constants.Z_FINISH;
	  }

	  // Finalize on the last chunk.
	  if (_mode === constants.Z_FINISH) {
	    status = inflate_1.inflateEnd(this.strm);
	    this.onEnd(status);
	    this.ended = true;
	    return status === constants.Z_OK;
	  }

	  // callback interim results if Z_SYNC_FLUSH.
	  if (_mode === constants.Z_SYNC_FLUSH) {
	    this.onEnd(constants.Z_OK);
	    strm.avail_out = 0;
	    return true;
	  }

	  return true;
	};


	/**
	 * Inflate#onData(chunk) -> Void
	 * - chunk (Uint8Array|Array|String): output data. Type of array depends
	 *   on js engine support. When string output requested, each chunk
	 *   will be string.
	 *
	 * By default, stores data blocks in `chunks[]` property and glue
	 * those in `onEnd`. Override this handler, if you need another behaviour.
	 **/
	Inflate.prototype.onData = function (chunk) {
	  this.chunks.push(chunk);
	};


	/**
	 * Inflate#onEnd(status) -> Void
	 * - status (Number): inflate status. 0 (Z_OK) on success,
	 *   other if not.
	 *
	 * Called either after you tell inflate that the input stream is
	 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
	 * or if an error happened. By default - join collected chunks,
	 * free memory and fill `results` / `err` properties.
	 **/
	Inflate.prototype.onEnd = function (status) {
	  // On success - join
	  if (status === constants.Z_OK) {
	    if (this.options.to === 'string') {
	      // Glue & convert here, until we teach pako to send
	      // utf8 aligned strings to onData
	      this.result = this.chunks.join('');
	    } else {
	      this.result = common.flattenChunks(this.chunks);
	    }
	  }
	  this.chunks = [];
	  this.err = status;
	  this.msg = this.strm.msg;
	};


	/**
	 * inflate(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * Decompress `data` with inflate/ungzip and `options`. Autodetect
	 * format via wrapper header by default. That's why we don't provide
	 * separate `ungzip` method.
	 *
	 * Supported options are:
	 *
	 * - windowBits
	 *
	 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
	 * for more information.
	 *
	 * Sugar (options):
	 *
	 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
	 *   negative windowBits implicitly.
	 * - `to` (String) - if equal to 'string', then result will be converted
	 *   from utf8 to utf16 (javascript) string. When string output requested,
	 *   chunk length can differ from `chunkSize`, depending on content.
	 *
	 *
	 * ##### Example:
	 *
	 * ```javascript
	 * var pako = require('pako')
	 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
	 *   , output;
	 *
	 * try {
	 *   output = pako.inflate(input);
	 * } catch (err)
	 *   console.log(err);
	 * }
	 * ```
	 **/
	function inflate$1(input, options) {
	  var inflator = new Inflate(options);

	  inflator.push(input, true);

	  // That will never happens, if you don't cheat with options :)
	  if (inflator.err) { throw inflator.msg || messages[inflator.err]; }

	  return inflator.result;
	}


	/**
	 * inflateRaw(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * The same as [[inflate]], but creates raw data, without wrapper
	 * (header and adler32 crc).
	 **/
	function inflateRaw(input, options) {
	  options = options || {};
	  options.raw = true;
	  return inflate$1(input, options);
	}


	/**
	 * ungzip(data[, options]) -> Uint8Array|Array|String
	 * - data (Uint8Array|Array|String): input data to decompress.
	 * - options (Object): zlib inflate options.
	 *
	 * Just shortcut to [[inflate]], because it autodetects format
	 * by header.content. Done for convenience.
	 **/


	var Inflate_1 = Inflate;
	var inflate_2$1 = inflate$1;
	var inflateRaw_1 = inflateRaw;
	var ungzip  = inflate$1;

	var inflate_1$1 = {
		Inflate: Inflate_1,
		inflate: inflate_2$1,
		inflateRaw: inflateRaw_1,
		ungzip: ungzip
	};

	var assign    = common.assign;





	var pako = {};

	assign(pako, deflate_1$1, inflate_1$1, constants);

	var pako_1 = pako;

	var __extends$d = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFOperator = /** @class */ (function () {
	    function PDFOperator() {
	        var _this = this;
	        this.toString = function () {
	            return error("toString() is not implemented on " + _this.constructor.name);
	        };
	        this.bytesSize = function () {
	            return error("bytesSize() is not implemented on " + _this.constructor.name);
	        };
	        this.copyBytesInto = function (buffer) {
	            return error("copyBytesInto() is not implemented on " + _this.constructor.name);
	        };
	    }
	    PDFOperator.createSingletonOp = function (op) {
	        // const ENFORCER = Symbol(`${op}_ENFORCER`);
	        // Using a Symbol is ideal here, but React Native doesn't current support
	        // them, so we'll use a string instead.
	        var ENFORCER = "@@__" + op + "_ENFORCER";
	        var Singleton = /** @class */ (function (_super) {
	            __extends$d(Singleton, _super);
	            function Singleton(enforcer) {
	                var _this = _super.call(this) || this;
	                _this.toString = function () { return op + "\n"; };
	                _this.bytesSize = function () { return _this.toString().length; };
	                _this.copyBytesInto = function (buffer) {
	                    return addStringToBuffer(_this.toString(), buffer);
	                };
	                validate(enforcer, isIdentity(ENFORCER), "Cannot instantiate PDFOperator." + op + " - use \"" + op + ".operator\" instead");
	                return _this;
	            }
	            return Singleton;
	        }(PDFOperator));
	        Singleton.operator = new Singleton(ENFORCER);
	        return Singleton;
	    };
	    return PDFOperator;
	}());

	(function(){function l(){function n(a){return a?"object"===typeof a||"function"===typeof a:!1}var p=null;var g=function(a,b){function f(){}if(!n(a)||!n(b))throw new TypeError("Cannot create proxy with a non-object as target or handler");p=function(){f=function(a){throw new TypeError("Cannot perform '"+a+"' on a proxy that has been revoked");};};var e=b;b={get:null,set:null,apply:null,construct:null};for(var k in e){if(!(k in b))throw new TypeError("Proxy polyfill does not support trap '"+k+"'");b[k]=e[k];}"function"===
	typeof e&&(b.apply=e.apply.bind(e));var c=this,g=!1,q=!1;"function"===typeof a?(c=function(){var h=this&&this.constructor===c,d=Array.prototype.slice.call(arguments);f(h?"construct":"apply");return h&&b.construct?b.construct.call(this,a,d):!h&&b.apply?b.apply(a,this,d):h?(d.unshift(a),new (a.bind.apply(a,d))):a.apply(this,d)},g=!0):a instanceof Array&&(c=[],q=!0);var r=b.get?function(a){f("get");return b.get(this,a,c)}:function(a){f("get");return this[a]},v=b.set?function(a,d){f("set");b.set(this,
	a,d,c);}:function(a,b){f("set");this[a]=b;},t={};Object.getOwnPropertyNames(a).forEach(function(b){if(!((g||q)&&b in c)){var d={enumerable:!!Object.getOwnPropertyDescriptor(a,b).enumerable,get:r.bind(a,b),set:v.bind(a,b)};Object.defineProperty(c,b,d);t[b]=!0;}});e=!0;Object.setPrototypeOf?Object.setPrototypeOf(c,Object.getPrototypeOf(a)):c.__proto__?c.__proto__=a.__proto__:e=!1;if(b.get||!e)for(var m in a)t[m]||Object.defineProperty(c,m,{get:r.bind(a,m)});Object.seal(a);Object.seal(c);return c};g.revocable=
	function(a,b){return {proxy:new g(a,b),revoke:p}};return g}var u="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!==typeof navigator&&"ReactNative"===navigator.product?commonjsGlobal:self;u.Proxy||(u.Proxy=l(),u.Proxy.revocable=u.Proxy.revocable);})();

	/* tslint:disable:ban-types */
	var EMPTY_ARR = [];
	// TODO: See if this can be refined/simplified at all...
	var typedArrayProxy = function (obj, type, config) {
	    if (config === void 0) { config = {}; }
	    forEach_1(config.methods, function (val, key) {
	        obj[key] = new Proxy(obj[key], {
	            apply: function (target, thisArg, elements) {
	                return val(function (args) { return target.apply(thisArg, args); }, elements);
	            },
	        });
	    });
	    return new Proxy(obj, {
	        set: function (target, property, value, receiver) {
	            if (!(property in EMPTY_ARR)) {
	                validate(value, isInstance(type), "Typed Array Proxy elements must be of type " + type.name);
	            }
	            if (config.set)
	                config.set(property, value);
	            target[property] = value;
	            return true;
	        },
	        get: function (target, property, receiver) {
	            if (config.get && config.get(property)) {
	                return config.get(property)(target[property]);
	            }
	            return target[property];
	        },
	    });
	};

	var __extends$e = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFContentStream = /** @class */ (function (_super) {
	    __extends$e(PDFContentStream, _super);
	    function PDFContentStream(dictionary) {
	        var operators = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            operators[_i - 1] = arguments[_i];
	        }
	        var _this = _super.call(this, dictionary) || this;
	        _this.encode = function () {
	            _this.dictionary.set(PDFName.from('Filter'), PDFName.from('FlateDecode'));
	            var buffer = new Uint8Array(_this.operatorsBytesSize());
	            _this.copyOperatorBytesInto(buffer);
	            _this.encodedOperators = pako_1.deflate(buffer);
	            _this.dictionary.set('Length', PDFNumber.fromNumber(_this.encodedOperators.length));
	            return _this;
	        };
	        _this.operatorsBytesSize = function () {
	            return _this.encodedOperators
	                ? _this.encodedOperators.length
	                : _this.operators
	                    .filter(Boolean)
	                    .map(function (op) { return op.bytesSize(); })
	                    .reduce(add_1, 0);
	        };
	        _this.bytesSize = function () {
	            return _this.dictionary.bytesSize() +
	                1 + // "\n"
	                7 + // "stream\n"
	                _this.operatorsBytesSize() +
	                10;
	        }; // \nendstream
	        _this.copyBytesInto = function (buffer) {
	            _this.validateDictionary();
	            var remaining = _this.dictionary.copyBytesInto(buffer);
	            remaining = addStringToBuffer('\nstream\n', remaining);
	            if (_this.encodedOperators) {
	                for (var i = 0; i < _this.encodedOperators.length; i++) {
	                    remaining[i] = _this.encodedOperators[i];
	                }
	                remaining = remaining.subarray(_this.encodedOperators.length);
	            }
	            else {
	                remaining = _this.copyOperatorBytesInto(remaining);
	            }
	            remaining = addStringToBuffer('\nendstream', remaining);
	            return remaining;
	        };
	        _this.copyOperatorBytesInto = function (buffer) {
	            return _this.operators
	                .filter(Boolean)
	                .reduce(function (remBytes, op) { return op.copyBytesInto(remBytes); }, buffer);
	        };
	        validateArr(operators, or(isInstance(PDFOperator), isArrayOf(PDFOperator)), 'PDFContentStream requires PDFOperators or PDFOperator[]s to be constructed.');
	        _this.operators = typedArrayProxy(flatten_1(operators), PDFOperator, {
	            set: function (property) {
	                if (isNumber_1(Number(property))) {
	                    _this.Length.number = _this.operatorsBytesSize();
	                }
	            },
	        });
	        _this.dictionary.set('Length', PDFNumber.fromNumber(_this.operatorsBytesSize()));
	        return _this;
	    }
	    Object.defineProperty(PDFContentStream.prototype, "Length", {
	        get: function () {
	            var Length = this.dictionary.get('Length');
	            return this.dictionary.index.lookup(Length);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PDFContentStream.of = function (dict) {
	        var operators = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            operators[_i - 1] = arguments[_i];
	        }
	        return new (PDFContentStream.bind.apply(PDFContentStream, [void 0, dict].concat(operators)))();
	    };
	    PDFContentStream.validateOperators = function (elements) {
	        return validateArr(elements, isInstance(PDFOperator), 'Only PDFOperators can be pushed to a PDFContentStream.');
	    };
	    return PDFContentStream;
	}(PDFStream$$1));

	/**
	 * Creates a slice of `array` with `n` elements dropped from the end.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @param {number} [n=1] The number of elements to drop.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.dropRight([1, 2, 3]);
	 * // => [1, 2]
	 *
	 * _.dropRight([1, 2, 3], 2);
	 * // => [1]
	 *
	 * _.dropRight([1, 2, 3], 5);
	 * // => []
	 *
	 * _.dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */
	function dropRight(array, n, guard) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return [];
	  }
	  n = (guard || n === undefined) ? 1 : toInteger_1(n);
	  n = length - n;
	  return _baseSlice(array, 0, n < 0 ? 0 : n);
	}

	var dropRight_1 = dropRight;

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}

	var last_1 = last;

	var __extends$f = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFObjectStream = /** @class */ (function (_super) {
	    __extends$f(PDFObjectStream, _super);
	    function PDFObjectStream(dictionary, objects) {
	        var _this = _super.call(this, dictionary) || this;
	        _this.objectByteSizes = [];
	        _this.encode = function () {
	            _this.updateObjectByteSizes();
	            _this.dictionary.set(PDFName.from('Filter'), PDFName.from('FlateDecode'));
	            var buffer = new Uint8Array(_this.contentBytesSize());
	            _this.copyContentBytesInto(buffer);
	            _this.encodedContents = pako_1.deflate(buffer);
	            return _this;
	        };
	        _this.bytesSize = function () {
	            if (_this.objectByteSizes.length === 0)
	                _this.updateObjectByteSizes();
	            _this.updateDictionary();
	            return (_this.dictionary.bytesSize() +
	                1 + // "\n"
	                7 + // "stream\n"
	                _this.contentBytesSize() +
	                10 // \nendstream
	            );
	        };
	        _this.copyBytesInto = function (buffer) {
	            if (_this.objectByteSizes.length === 0)
	                _this.updateObjectByteSizes();
	            _this.updateDictionary();
	            _this.validateDictionary();
	            var remaining = _this.dictionary.copyBytesInto(buffer);
	            remaining = addStringToBuffer('\nstream\n', remaining);
	            if (_this.encodedContents) {
	                for (var i = 0; i < _this.encodedContents.length; i++) {
	                    remaining[i] = _this.encodedContents[i];
	                }
	                remaining = remaining.subarray(_this.encodedContents.length);
	            }
	            else {
	                remaining = _this.copyContentBytesInto(remaining);
	            }
	            remaining = addStringToBuffer('\nendstream', remaining);
	            return remaining;
	        };
	        _this.copyContentBytesInto = function (buffer) {
	            var remaining = addStringToBuffer(_this.leadingIntegerPairsStr(), buffer);
	            return _this.objects.reduce(function (remBytes, obj) {
	                return addStringToBuffer('\n', obj.pdfObject.copyBytesInto(remBytes));
	            }, remaining);
	        };
	        _this.updateObjectByteSizes = function () {
	            // "+ 1" for the newline we add to separate the objects
	            _this.objectByteSizes = _this.objects.map(function (obj) { return obj.pdfObject.bytesSize() + 1; });
	        };
	        _this.contentBytesSize = function () {
	            return _this.encodedContents
	                ? _this.encodedContents.length
	                : _this.leadingIntegerPairsStr().length +
	                    _this.objectByteSizes.reduce(add_1, 0);
	        };
	        _this.leadingIntegerPairsStr = function () {
	            return flatten_1(_this.leadingIntegerPairs()).join(' ') + '\n';
	        };
	        _this.leadingIntegerPairs = function () {
	            var byteOffsets = _this.objectByteOffsets();
	            return _this.objects.map(function (obj, idx) {
	                return [obj.reference.objectNumber, byteOffsets[idx]];
	            });
	        };
	        _this.objectByteOffsets = function () {
	            var offsets = [0];
	            dropRight_1(_this.objectByteSizes).forEach(function (byteSize) {
	                offsets.push(last_1(offsets) + byteSize);
	            });
	            return offsets;
	        };
	        _this.updateDictionary = function () {
	            _this.dictionary.set(PDFName.from('Length'), PDFNumber.fromNumber(_this.contentBytesSize()));
	            _this.dictionary.set(PDFName.from('N'), PDFNumber.fromNumber(_this.objects.length));
	            _this.dictionary.set(PDFName.from('First'), PDFNumber.fromNumber(_this.leadingIntegerPairsStr().length));
	        };
	        validateArr(objects, isInstance(PDFIndirectObject), 'PDFObjectStream.objects must be an array of PDFIndirectObject');
	        _this.objects = objects;
	        return _this;
	    }
	    PDFObjectStream.create = function (index, objects) {
	        return new PDFObjectStream(new PDFDictionary$$1({ Type: PDFName.from('ObjStm') }, index), objects);
	    };
	    PDFObjectStream.from = function (dictionary, objects) {
	        return new PDFObjectStream(dictionary, objects);
	    };
	    return PDFObjectStream;
	}(PDFStream$$1));

	var PDFHeader = /** @class */ (function () {
	    function PDFHeader(major, minor) {
	        var _this = this;
	        this.toString = function () { return "%PDF-" + _this.major + "." + _this.minor + "\n"; };
	        this.bytesSize = function () { return ("%PDF-" + _this.major + "." + _this.minor + "\n").length + 6; };
	        this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer("%PDF-" + _this.major + "." + _this.minor + "\n", buffer);
	            remaining.set([charCode('%'), 130, 130, 130, 130, charCode('\n')], 0);
	            return remaining.subarray(6);
	        };
	        validate(major, isNumber_1, 'PDFHeader.major must be a Number');
	        validate(minor, isNumber_1, 'PDFHeader.minor must be a Number');
	        this.major = major;
	        this.minor = minor;
	    }
	    PDFHeader.forVersion = function (major, minor) {
	        return new PDFHeader(major, minor);
	    };
	    return PDFHeader;
	}());

	var __extends$g = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/** @hidden */
	var VALID_KEYS$1 = Object.freeze([
	    'Type',
	    'Parent',
	    'LastModified',
	    'Resources',
	    'MediaBox',
	    'CropBox',
	    'BleedBox',
	    'TrimBox',
	    'ArtBox',
	    'BoxColorInfo',
	    'Contents',
	    'Rotate',
	    'Group',
	    'Thumb',
	    'B',
	    'Dur',
	    'Trans',
	    'Annots',
	    'AA',
	    'Metadata',
	    'PieceInfo',
	    'StructParents',
	    'ID',
	    'PZ',
	    'SeparationInfo',
	    'Tabs',
	    'TemplateInstantiated',
	    'PresSteps',
	    'UserUnit',
	    'VP',
	]);
	var PDFPage = /** @class */ (function (_super) {
	    __extends$g(PDFPage, _super);
	    function PDFPage() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.autoNormalizeCTM = true;
	        /* Convert "Contents" to array if it exists and is not already */
	        // TODO: See is this is inefficient...
	        /** @hidden */
	        _this.normalizeContents = function () {
	            var Contents = _this.getMaybe('Contents');
	            if (Contents) {
	                var contents = _this.index.lookup(Contents);
	                if (!(contents instanceof PDFArray$$1)) {
	                    _this.set('Contents', PDFArray$$1.fromArray([Contents], _this.index));
	                }
	            }
	        };
	        /**
	         * Ensures that content streams added to the [[PDFPage]] after calling
	         * [[normalizeCTM]] will be working in the default Content Transformation
	         * Matrix.
	         *
	         * This can be useful in cases where PDFs are being modified that
	         * have existing content streams which modify the CTM outside without
	         * resetting their changes (with the Q and q operators).
	         *
	         * Works by wrapping any existing content streams for this page in two new
	         * content streams that contain a single operator each: `q` and `Q`,
	         * respectively.
	         *
	         * Note that the `Contents` entry in this [[PDFPage]] must be a PDFArray.
	         * Calling [[normalizeContents]] first will ensure that this is the case.
	         *
	         * @param pdfDoc The document containing this PDFPage, to which the two new
	         *               [[PDFContentStream]]s will be added
	         *
	         * @returns Returns this [[PDFPage]] instance.
	         */
	        _this.normalizeCTM = function () {
	            var contents = _this.getMaybe('Contents');
	            if (!contents)
	                return _this;
	            var _a = _this.index, pushGraphicsStateContentStream = _a.pushGraphicsStateContentStream, popGraphicsStateContentStream = _a.popGraphicsStateContentStream;
	            if (pushGraphicsStateContentStream &&
	                popGraphicsStateContentStream &&
	                contents.array[0] !== pushGraphicsStateContentStream) {
	                contents.array.unshift(pushGraphicsStateContentStream);
	                contents.array.push(popGraphicsStateContentStream);
	            }
	            return _this;
	        };
	        /** @hidden */
	        _this.normalizeResources = function (_a) {
	            var Font = _a.Font, XObject = _a.XObject;
	            if (!_this.getMaybe('Resources')) {
	                _this.set('Resources', PDFDictionary$$1.from(new Map(), _this.index));
	            }
	            if (Font && !_this.Resources.getMaybe('Font')) {
	                _this.Resources.set('Font', PDFDictionary$$1.from(new Map(), _this.index));
	            }
	            if (XObject && !_this.Resources.getMaybe('XObject')) {
	                _this.Resources.set('XObject', PDFDictionary$$1.from(new Map(), _this.index));
	            }
	        };
	        // TODO: Consider allowing *insertion* of content streams so order can be changed
	        /**
	         * Add one or more content streams to the page.
	         *
	         * Note that this method does
	         * **not** directly accept [[PDFContentStream]](s) as its arguments. Instead,
	         * it accepts references to the content streams in the form of
	         * [[PDFIndirectReference]] objects. To obtain a reference for a
	         * [[PDFContentStream]], you must call the [[PDFDocument.register]] method
	         * with the [[PDFContentStream]].
	         *
	         * @param contentStreams The content stream(s) to be added to the page.
	         */
	        _this.addContentStreams = function () {
	            var contentStreams = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                contentStreams[_i] = arguments[_i];
	            }
	            validateArr(contentStreams, isInstance(PDFIndirectReference), '"contentStream" must be of type PDFIndirectReference<PDFContentStream>');
	            _this.normalizeContents();
	            if (_this.autoNormalizeCTM)
	                _this.normalizeCTM();
	            if (!_this.getMaybe('Contents')) {
	                _this.set('Contents', PDFArray$$1.fromArray(contentStreams, _this.index));
	            }
	            else {
	                (_a = _this.Contents).push.apply(_a, contentStreams);
	            }
	            return _this;
	            var _a;
	        };
	        /**
	         * Adds a font dictionary to the page.
	         *
	         * Note that this method does **not** directly accept font
	         * [[PDFDictionary]](s) as its arguments. Instead, it accepts references to
	         * the font dictionaries in the form of [[PDFIndirectReference]] objects.
	         *
	         * The first element of the tuples returned by the
	         * [[PDFDocument.embedStandardFont]] and [[PDFDocument.embedFont]] methods
	         * is a [[PDFIndirectReference]] to a font dictionary that can be passed as
	         * the `fontDict` parameter of this method.
	         *
	         * @param key      The name by which the font dictionary will be referenced.
	         * @param fontDict The font dictionary to be added to the page.
	         */
	        _this.addFontDictionary = function (key, // TODO: Allow PDFName objects to be passed too
	        fontDict) {
	            validate(key, isString_1, '"key" must be a string');
	            validate(fontDict, isInstance(PDFIndirectReference), '"fontDict" must be an instance of PDFIndirectReference');
	            _this.normalizeResources({ Font: true });
	            var Font = _this.index.lookup(_this.Resources.get('Font'));
	            Font.set(key, fontDict);
	            return _this;
	        };
	        /**
	         * **Note:** This method is an alias for [[addXObject]]. It exists because its
	         * name is more descriptive and familiar than `addXObject` is.
	         *
	         * Adds an image object to the page.
	         *
	         * Note that this method does **not** directly accept a [[PDFStream]] object
	         * as its argument. Instead, it accepts a reference to the [[PDFStream]] in
	         * the form of a [[PDFIndirectReference]] object.
	         *
	         * The first element of the tuples returned by the
	         * [[PDFDocument.embedPNG]] and [[PDFDocument.embedJPG]] methods
	         * is a [[PDFIndirectReference]] to a [[PDFStream]] that can be passed as
	         * the `imageObject` parameter of this method.
	         *
	         * @param key         The name by which the image object will be referenced.
	         * @param imageObject The image object to be added to the page.
	         */
	        _this.addImageObject = function (key, imageObject) {
	            _this.addXObject(key, imageObject);
	            return _this;
	        };
	        /**
	         * Adds an XObject to the page.
	         *
	         * Note that this method does **not** directly accept a [[PDFStream]] object
	         * as its argument. Instead, it accepts a reference to the [[PDFStream]] in
	         * the form of a [[PDFIndirectReference]] object.
	         *
	         * @param key     The name by which the XObject will be referenced.
	         * @param xObject The XObject to be added to the page.
	         */
	        _this.addXObject = function (key, xObject) {
	            validate(key, isString_1, '"key" must be a string');
	            validate(xObject, isInstance(PDFIndirectReference), '"xObject" must be an instance of PDFIndirectReference');
	            _this.normalizeResources({ XObject: true });
	            var XObject = _this.index.lookup(_this.Resources.get('XObject'));
	            XObject.set(key, xObject);
	            return _this;
	        };
	        return _this;
	    }
	    Object.defineProperty(PDFPage.prototype, "Resources", {
	        /** @hidden */
	        get: function () {
	            return this.index.lookup(this.get('Resources'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PDFPage.prototype, "Contents", {
	        /** @hidden */
	        get: function () {
	            return this.index.lookup(this.get('Contents'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @hidden */
	    PDFPage.validKeys = VALID_KEYS$1;
	    PDFPage.create = function (index, size, resources) {
	        validate(size, isArray_1, 'size must be an array of 2 numbers.');
	        validate(size.length, isIdentity(2), 'size tuple must have two elements.');
	        validate(size[0], isNumber_1, 'size tuple entries must be Numbers.');
	        validate(size[1], isNumber_1, 'size tuple entries must be Numbers.');
	        validate(resources, optional(isInstance(PDFDictionary$$1)), 'resources must be a PDFDictionary');
	        var mediaBox = [0, 0, size[0], size[1]];
	        var page = new PDFPage({
	            Type: PDFName.from('Page'),
	            // TODO: Convert this to use PDFRectangle
	            MediaBox: PDFArray$$1.fromArray(mediaBox.map(PDFNumber.fromNumber), index),
	        }, index, VALID_KEYS$1);
	        if (resources)
	            page.set('Resources', resources);
	        return page;
	    };
	    PDFPage.fromDict = function (dict) {
	        validate(dict, isInstance(PDFDictionary$$1), '"dict" must be a PDFDictionary');
	        return new PDFPage(dict.map, dict.index, VALID_KEYS$1);
	    };
	    return PDFPage;
	}(PDFDictionary$$1));

	var __extends$h = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var VALID_KEYS$2 = Object.freeze(['Type', 'Parent', 'Kids', 'Count']);
	var PDFPageTree = /** @class */ (function (_super) {
	    __extends$h(PDFPageTree, _super);
	    function PDFPageTree() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.addPage = function (page) {
	            validate(page, isInstance(PDFIndirectReference), '"page" arg must be of type PDFIndirectReference<PDFPage>');
	            _this.Kids.array.push(page);
	            _this.ascend(function (pageTree) {
	                pageTree.Count.number += 1;
	            });
	            return _this;
	        };
	        _this.removePage = function (idx) {
	            validate(idx, isNumber_1, '"idx" arg must be a Number');
	            _this.Kids.array.splice(idx, 1);
	            _this.ascend(function (pageTree) {
	                pageTree.Count.number -= 1;
	            });
	            return _this;
	        };
	        _this.insertPage = function (idx, page) {
	            validate(idx, isNumber_1, '"idx" arg must be a Number');
	            validate(page, isInstance(PDFIndirectReference), '"page" arg must be of type PDFIndirectReference<PDFPage>');
	            _this.Kids.array.splice(idx, 0, page);
	            _this.ascend(function (pageTree) {
	                pageTree.Count.number += 1;
	            });
	            return _this;
	        };
	        // TODO: Pass a "stop" callback to allow "visit" to end traversal early
	        // TODO: Allow for optimized tree search given an index
	        _this.traverse = function (visit) {
	            if (_this.Kids.array.length === 0)
	                return _this;
	            _this.Kids.forEach(function (kidRef) {
	                var kid = _this.index.lookup(kidRef);
	                visit(kid, kidRef);
	                if (kid instanceof PDFPageTree)
	                    kid.traverse(visit);
	            });
	            return _this;
	        };
	        _this.traverseRight = function (visit) {
	            if (_this.Kids.array.length === 0)
	                return _this;
	            var lastKidRef = last_1(_this.Kids.array);
	            var lastKid = _this.index.lookup(lastKidRef);
	            visit(lastKid, lastKidRef);
	            if (lastKid instanceof PDFPageTree)
	                lastKid.traverseRight(visit);
	            return _this;
	        };
	        _this.ascend = function (visit, visitSelf) {
	            if (visitSelf === void 0) { visitSelf = true; }
	            if (visitSelf)
	                visit(_this);
	            var Parent = _this.Parent;
	            if (!Parent)
	                return;
	            visit(Parent);
	            Parent.ascend(visit, false);
	        };
	        return _this;
	    }
	    Object.defineProperty(PDFPageTree.prototype, "Kids", {
	        get: function () {
	            return this.index.lookup(this.get('Kids'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PDFPageTree.prototype, "Parent", {
	        get: function () {
	            return this.index.lookupMaybe(this.getMaybe('Parent'));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PDFPageTree.prototype, "Count", {
	        get: function () {
	            return this.get('Count');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PDFPageTree.createRootNode = function (kids, index) {
	        validate(kids, isInstance(PDFArray$$1), '"kids" must be a PDFArray');
	        validate(index, isInstance(PDFObjectIndex), '"index" must be an instance of PDFObjectIndex');
	        return new PDFPageTree({
	            Type: PDFName.from('Pages'),
	            Kids: kids,
	            Count: PDFNumber.fromNumber(kids.array.length),
	        }, index);
	    };
	    PDFPageTree.createNode = function (parent, kids, index) {
	        validate(parent, isInstance(PDFIndirectReference), '"parent" must be a PDFIndirectReference');
	        return PDFPageTree.createRootNode(kids, index).set('Parent', parent);
	    };
	    PDFPageTree.fromDict = function (dict) {
	        validate(dict, isInstance(PDFDictionary$$1), '"dict" must be a PDFDictionary');
	        return new PDFPageTree(dict.map, dict.index, VALID_KEYS$2);
	    };
	    return PDFPageTree;
	}(PDFDictionary$$1));

	var PDFTrailer = /** @class */ (function () {
	    function PDFTrailer(offset, dictionary) {
	        var _this = this;
	        this.toString = function () {
	            return (_this.dictionary ? "trailer\n" + _this.dictionary.toString() + "\n" : '') +
	                "startxref\n" +
	                (_this.offset + "\n") +
	                "%%EOF\n";
	        };
	        this.bytesSize = function () {
	            return (_this.dictionary
	                ? 8 /* "trailer\n" */ + _this.dictionary.bytesSize() + 1 /* "\n" */
	                : 0) +
	                10 + // "startxref\n"
	                String(_this.offset).length +
	                1 + // "\n"
	                6;
	        }; // "%%EOF\n"
	        this.copyBytesInto = function (buffer) {
	            var remaining = buffer;
	            if (_this.dictionary) {
	                remaining = addStringToBuffer('trailer\n', remaining);
	                remaining = _this.dictionary.copyBytesInto(remaining);
	                remaining = addStringToBuffer('\n', remaining);
	            }
	            remaining = addStringToBuffer("startxref\n" + _this.offset + "\n%%EOF\n", remaining);
	            return remaining;
	        };
	        validate(offset, isNumber_1, 'PDFTrailer.offset must be a number');
	        validate(dictionary, or(isNil_1, isInstance(PDFDictionary$$1)), 'PDFTrailer.dictionary must be instance of PDFDictionary or undefined');
	        this.offset = offset;
	        this.dictionary = dictionary;
	    }
	    PDFTrailer.from = function (offset, dictionary) {
	        return new PDFTrailer(offset, dictionary);
	    };
	    return PDFTrailer;
	}());

	var __extends$i = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFLinearizationParams = /** @class */ (function (_super) {
	    __extends$i(PDFLinearizationParams, _super);
	    function PDFLinearizationParams() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PDFLinearizationParams.validKeys = Object.freeze(['L', 'H', 'O', 'E', 'N', 'T', 'P']);
	    PDFLinearizationParams.fromDict = function (dict) {
	        validate(dict, isInstance(PDFDictionary$$1), '"dict" must be a PDFDictionary');
	        return new PDFLinearizationParams(dict.map, dict.index, PDFLinearizationParams.validKeys);
	    };
	    return PDFLinearizationParams;
	}(PDFDictionary$$1));

	/**
	 * The base implementation of methods like `_.max` and `_.min` which accepts a
	 * `comparator` to determine the extremum value.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The iteratee invoked per iteration.
	 * @param {Function} comparator The comparator used to compare values.
	 * @returns {*} Returns the extremum value.
	 */
	function baseExtremum(array, iteratee, comparator) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index],
	        current = iteratee(value);

	    if (current != null && (computed === undefined
	          ? (current === current && !isSymbol_1(current))
	          : comparator(current, computed)
	        )) {
	      var computed = current,
	          result = value;
	    }
	  }
	  return result;
	}

	var _baseExtremum = baseExtremum;

	/**
	 * The base implementation of `_.gt` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if `value` is greater than `other`,
	 *  else `false`.
	 */
	function baseGt(value, other) {
	  return value > other;
	}

	var _baseGt = baseGt;

	/**
	 * Computes the maximum value of `array`. If `array` is empty or falsey,
	 * `undefined` is returned.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Math
	 * @param {Array} array The array to iterate over.
	 * @returns {*} Returns the maximum value.
	 * @example
	 *
	 * _.max([4, 2, 8, 6]);
	 * // => 8
	 *
	 * _.max([]);
	 * // => undefined
	 */
	function max(array) {
	  return (array && array.length)
	    ? _baseExtremum(array, identity_1, _baseGt)
	    : undefined;
	}

	var max_1 = max;

	var __extends$j = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var PDFXRefStream = /** @class */ (function (_super) {
	    __extends$j(PDFXRefStream, _super);
	    function PDFXRefStream(_a, index) {
	        var Size = _a.Size, Root = _a.Root;
	        var _this = _super.call(this, new PDFDictionary$$1({ Type: PDFName.from('XRef'), Size: Size, Root: Root }, index)) || this;
	        _this.entries = [];
	        _this.addFreeObjectEntry = function (nextFreeObjectNum, generationNum) {
	            _this.entries.push([0, nextFreeObjectNum, generationNum]);
	        };
	        _this.addUncompressedObjectEntry = function (byteOffset, generationNum) {
	            _this.entries.push([1, byteOffset, generationNum]);
	        };
	        _this.addCompressedObjectEntry = function (objectStreamNum, index) {
	            _this.entries.push([2, objectStreamNum, index]);
	        };
	        _this.encode = function () {
	            _this.dictionary.set(PDFName.from('Filter'), PDFName.from('FlateDecode'));
	            var buffer = new Uint8Array(_this.entriesBytesSize());
	            _this.copyEntryBytesInto(buffer);
	            _this.encodedEntries = pako_1.deflate(buffer);
	            return _this;
	        };
	        _this.bytesSize = function () {
	            _this.updateDictionary();
	            return (_this.dictionary.bytesSize() +
	                1 + // "\n"
	                7 + // "stream\n"
	                _this.contentBytesSize() +
	                10 // \nendstream
	            );
	        };
	        _this.copyBytesInto = function (buffer) {
	            _this.updateDictionary();
	            _this.validateDictionary();
	            var remaining = _this.dictionary.copyBytesInto(buffer);
	            remaining = addStringToBuffer('\nstream\n', remaining);
	            if (_this.encodedEntries) {
	                for (var i = 0; i < _this.encodedEntries.length; i++) {
	                    remaining[i] = _this.encodedEntries[i];
	                }
	                remaining = remaining.subarray(_this.encodedEntries.length);
	            }
	            else {
	                remaining = _this.copyEntryBytesInto(remaining);
	            }
	            remaining = addStringToBuffer('\nendstream', remaining);
	            return remaining;
	        };
	        _this.contentBytesSize = function () {
	            return _this.encodedEntries ? _this.encodedEntries.length : _this.entriesBytesSize();
	        };
	        _this.copyEntryBytesInto = function (buffer) {
	            var entryWidths = _this.maxEntryByteWidths();
	            var idx = 0;
	            flatten_1(_this.entries).forEach(function (entry, currEntryIdx) {
	                var bytes = reverseArray(bytesFor(entry));
	                for (var i = entryWidths[currEntryIdx % 3] - 1; i >= 0; i--) {
	                    buffer[idx++] = bytes[i] || 0;
	                }
	            });
	            return buffer.subarray(idx);
	        };
	        _this.entriesBytesSize = function () {
	            return sum_1(_this.maxEntryByteWidths()) * _this.entries.length;
	        };
	        _this.maxEntryByteWidths = function () { return [
	            sizeInBytes(max_1(_this.entries.map(function (_a) {
	                var x = _a[0];
	                return x;
	            }))),
	            sizeInBytes(max_1(_this.entries.map(function (_a) {
	                var x = _a[1];
	                return x;
	            }))),
	            sizeInBytes(max_1(_this.entries.map(function (_a) {
	                var x = _a[2];
	                return x;
	            }))),
	        ]; };
	        _this.updateDictionary = function () {
	            _this.dictionary.set(PDFName.from('W'), PDFArray$$1.fromArray(_this.maxEntryByteWidths().map(PDFNumber.fromNumber), _this.dictionary.index));
	            _this.dictionary.set(PDFName.from('Length'), PDFNumber.fromNumber(_this.contentBytesSize()));
	        };
	        return _this;
	    }
	    PDFXRefStream.create = function (config, index) { return new PDFXRefStream(config, index); };
	    return PDFXRefStream;
	}(PDFStream$$1));

	/** @hidden */
	var MARKERS = [
	    0xffc0,
	    0xffc1,
	    0xffc2,
	    0xffc3,
	    0xffc5,
	    0xffc6,
	    0xffc7,
	    0xffc8,
	    0xffc9,
	    0xffca,
	    0xffcb,
	    0xffcc,
	    0xffcd,
	    0xffce,
	    0xffcf,
	];
	/**
	 * A note of thanks to the developers of https://github.com/devongovett/pdfkit,
	 * as this class borrows heavily from:
	 * https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/jpeg.coffee
	 */
	var JPEGXObjectFactory = /** @class */ (function () {
	    function JPEGXObjectFactory(data) {
	        var _this = this;
	        this.embedImageIn = function (document) {
	            var xObjDict = PDFDictionary$$1.from({
	                Type: PDFName.from('XObject'),
	                Subtype: PDFName.from('Image'),
	                BitsPerComponent: PDFNumber.fromNumber(_this.bits),
	                Width: PDFNumber.fromNumber(_this.width),
	                Height: PDFNumber.fromNumber(_this.height),
	                ColorSpace: PDFName.from(_this.colorSpace),
	                Filter: PDFName.from('DCTDecode'),
	            }, document.index);
	            // Add extra decode params for CMYK images. By swapping the
	            // min and max values from the default, we invert the colors. See
	            // section 4.8.4 of the spec.
	            if (_this.colorSpace === 'DeviceCYMK') {
	                xObjDict.set('Decode', PDFArray$$1.fromArray([
	                    PDFNumber.fromNumber(1.0),
	                    PDFNumber.fromNumber(0.0),
	                    PDFNumber.fromNumber(1.0),
	                    PDFNumber.fromNumber(0.0),
	                    PDFNumber.fromNumber(1.0),
	                    PDFNumber.fromNumber(0.0),
	                    PDFNumber.fromNumber(1.0),
	                    PDFNumber.fromNumber(0.0),
	                ], document.index));
	            }
	            xObjDict.set('Length', PDFNumber.fromNumber(_this.imgData.length));
	            var xObj = document.register(PDFRawStream$$1.from(xObjDict, _this.imgData));
	            return xObj;
	        };
	        validate(data, isInstance(Uint8Array), '"data" must be a Uint8Array');
	        this.imgData = data;
	        var dataView = new DataView(data.buffer);
	        if (dataView.getUint16(0) !== 0xffd8)
	            error('SOI not found in JPEG');
	        var pos = 2;
	        var marker;
	        while (pos < dataView.byteLength) {
	            marker = dataView.getUint16(pos);
	            pos += 2;
	            if (MARKERS.includes(marker))
	                break;
	            pos += dataView.getUint16(pos);
	        }
	        if (!MARKERS.includes(marker))
	            error('Invalid JPEG');
	        pos += 2;
	        this.bits = dataView.getUint8(pos++);
	        this.height = dataView.getUint16(pos);
	        pos += 2;
	        this.width = dataView.getUint16(pos);
	        pos += 2;
	        var channelMap = {
	            1: 'DeviceGray',
	            3: 'DeviceRGB',
	            4: 'DeviceCYMK',
	        };
	        var channels = dataView.getUint8(pos++);
	        this.colorSpace = channelMap[channels] || error('Unknown JPEG channel.');
	    }
	    JPEGXObjectFactory.for = function (data) { return new JPEGXObjectFactory(data); };
	    return JPEGXObjectFactory;
	}());

	var byteLength_1 = byteLength;
	var toByteArray_1 = toByteArray;
	var fromByteArray_1 = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function placeHoldersCount (b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return (b64.length * 3 / 4) - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);

	  arr = new Arr((len * 3 / 4) - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0; i < l; i += 4) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	var base64Js = {
		byteLength: byteLength_1,
		toByteArray: toByteArray_1,
		fromByteArray: fromByteArray_1
	};

	var read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	};

	var write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

	var ieee754 = {
		read: read,
		write: write
	};

	var buffer = createCommonjsModule(function (module, exports) {




	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	var K_MAX_LENGTH = 0x7fffffff;
	exports.kMaxLength = K_MAX_LENGTH;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
	    typeof console.error === 'function') {
	  console.error(
	    'This browser lacks typed array (Uint8Array) support which is required by ' +
	    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
	  );
	}

	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }};
	    return arr.foo() === 42
	  } catch (e) {
	    return false
	  }
	}

	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
	    throw new RangeError('Invalid typed array length')
	  }
	  // Return an augmented `Uint8Array` instance
	  var buf = new Uint8Array(length);
	  buf.__proto__ = Buffer.prototype;
	  return buf
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}

	// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	if (typeof Symbol !== 'undefined' && Symbol.species &&
	    Buffer[Symbol.species] === Buffer) {
	  Object.defineProperty(Buffer, Symbol.species, {
	    value: null,
	    configurable: true,
	    enumerable: false,
	    writable: false
	  });
	}

	Buffer.poolSize = 8192; // not used by this implementation

	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (isArrayBuffer(value)) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(value, encodingOrOffset)
	  }

	  return fromObject(value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	};

	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Buffer.prototype.__proto__ = Uint8Array.prototype;
	Buffer.__proto__ = Uint8Array;

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(size).fill(fill, encoding)
	      : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	};

	function allocUnsafe (size) {
	  assertSize(size);
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	};

	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  var buf = createBuffer(length);

	  var actual = buf.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    buf = buf.slice(0, actual);
	  }

	  return buf
	}

	function fromArrayLike (array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  var buf = createBuffer(length);
	  for (var i = 0; i < length; i += 1) {
	    buf[i] = array[i] & 255;
	  }
	  return buf
	}

	function fromArrayBuffer (array, byteOffset, length) {
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  var buf;
	  if (byteOffset === undefined && length === undefined) {
	    buf = new Uint8Array(array);
	  } else if (length === undefined) {
	    buf = new Uint8Array(array, byteOffset);
	  } else {
	    buf = new Uint8Array(array, byteOffset, length);
	  }

	  // Return an augmented `Uint8Array` instance
	  buf.__proto__ = Buffer.prototype;
	  return buf
	}

	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    var buf = createBuffer(len);

	    if (buf.length === 0) {
	      return buf
	    }

	    obj.copy(buf, 0, 0, len);
	    return buf
	  }

	  if (obj) {
	    if (isArrayBufferView(obj) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
	        return createBuffer(0)
	      }
	      return fromArrayLike(obj)
	    }

	    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
	      return fromArrayLike(obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return b != null && b._isBuffer === true
	};

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (isArrayBufferView(string) || isArrayBuffer(string)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
	// reliably in a browserify context because there could be multiple different
	// copies of the 'buffer' package in use. This method works even for Buffer
	// instances that were created from another copy of the `buffer` package.
	// See: https://github.com/feross/buffer/issues/154
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  var length = this.length;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (numberIsNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (numberIsNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset >>> 0;
	    if (isFinite(length)) {
	      length = length >>> 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64Js.fromByteArray(buf)
	  } else {
	    return base64Js.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf = this.subarray(start, end);
	  // Return an augmented `Uint8Array` instance
	  newBuf.__proto__ = Buffer.prototype;
	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0;
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  byteLength = byteLength >>> 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  return offset + 2
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  this[offset] = (value >>> 8);
	  this[offset + 1] = (value & 0xff);
	  return offset + 2
	};

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  this[offset + 3] = (value >>> 24);
	  this[offset + 2] = (value >>> 16);
	  this[offset + 1] = (value >>> 8);
	  this[offset] = (value & 0xff);
	  return offset + 4
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  this[offset] = (value >>> 24);
	  this[offset + 1] = (value >>> 16);
	  this[offset + 2] = (value >>> 8);
	  this[offset + 3] = (value & 0xff);
	  return offset + 4
	};

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  this[offset] = (value >>> 8);
	  this[offset + 1] = (value & 0xff);
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  this[offset] = (value & 0xff);
	  this[offset + 1] = (value >>> 8);
	  this[offset + 2] = (value >>> 16);
	  this[offset + 3] = (value >>> 24);
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  this[offset] = (value >>> 24);
	  this[offset + 1] = (value >>> 16);
	  this[offset + 2] = (value >>> 8);
	  this[offset + 3] = (value & 0xff);
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value;
	  offset = offset >>> 0;
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : new Buffer(val, encoding);
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = str.trim().replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64Js.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
	// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
	function isArrayBuffer (obj) {
	  return obj instanceof ArrayBuffer ||
	    (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
	      typeof obj.byteLength === 'number')
	}

	// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
	function isArrayBufferView (obj) {
	  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
	}

	function numberIsNaN (obj) {
	  return obj !== obj // eslint-disable-line no-self-compare
	}
	});
	var buffer_1 = buffer.Buffer;
	var buffer_2 = buffer.SlowBuffer;
	var buffer_3 = buffer.INSPECT_MAX_BYTES;
	var buffer_4 = buffer.kMaxLength;

	var bundle = createCommonjsModule(function (module, exports) {
	});

	var fontkit = unwrapExports(bundle);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil$1 = Math.ceil,
	    nativeMax$1 = Math.max;

	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax$1(nativeCeil$1((end - start) / (step || 1)), 0),
	      result = Array(length);

	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}

	var _baseRange = baseRange;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject_1(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike_1(object) && _isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq_1(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall;

	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite_1(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite_1(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite_1(step);
	    return _baseRange(start, end, step, fromRight);
	  };
	}

	var _createRange = createRange;

	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = _createRange();

	var range_1 = range;

	/** @hidden */
	var unsigned32Bit = '00000000000000000000000000000000';
	// TODO: Make sure this works correctly. Setting any flag besides
	//       Nonsymbolic to true seems to screw up the font...
	/*
	 * Doing this by bit-twiddling a string, and then parsing it, gets around
	 * JavaScript converting the results of bit-shifting ops back into 64-bit integers.
	 */
	// prettier-ignore
	/** @hidden */
	var fontFlags = function (options) {
	    var flags = unsigned32Bit;
	    if (options.FixedPitch)
	        flags = setCharAt(flags, 32 - 1, '1');
	    if (options.Serif)
	        flags = setCharAt(flags, 32 - 2, '1');
	    if (options.Symbolic)
	        flags = setCharAt(flags, 32 - 3, '1');
	    if (options.Script)
	        flags = setCharAt(flags, 32 - 4, '1');
	    if (options.Nonsymbolic)
	        flags = setCharAt(flags, 32 - 6, '1');
	    if (options.Italic)
	        flags = setCharAt(flags, 32 - 7, '1');
	    if (options.AllCap)
	        flags = setCharAt(flags, 32 - 17, '1');
	    if (options.SmallCap)
	        flags = setCharAt(flags, 32 - 18, '1');
	    if (options.ForceBold)
	        flags = setCharAt(flags, 32 - 19, '1');
	    return parseInt(flags, 2);
	};
	/**
	 * This Factory supports TrueType and OpenType fonts. Note that the apparent
	 * hardcoding of values for OpenType fonts does not actually affect TrueType
	 * fonts.
	 *
	 * A note of thanks to the developers of https://github.com/devongovett/pdfkit,
	 * as this class borrows heavily from:
	 * https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/font/embedded.coffee
	 */
	var PDFFontFactory = /** @class */ (function () {
	    function PDFFontFactory(fontData, flagOptions) {
	        var _this = this;
	        /*
	        TODO: This is hardcoded for "Simple Fonts" with non-modified encodings, need
	        to broaden support to other fonts.
	        */
	        this.embedFontIn = function (pdfDoc, name) {
	            validate(pdfDoc, isInstance(PDFDocument), 'PDFFontFactory.embedFontIn: "pdfDoc" must be an instance of PDFDocument');
	            validate(name, or(isString_1, isNil_1), '"name" must be a string or undefined');
	            var randSuffix = "-rand_" + Math.floor(Math.random() * 10000);
	            var fontName = name || _this.font.postscriptName + randSuffix || 'Font' + randSuffix;
	            var deflatedFontData = pako_1.deflate(_this.fontData);
	            var fontStreamDict = PDFDictionary$$1.from({
	                Subtype: PDFName.from('OpenType'),
	                Filter: PDFName.from('FlateDecode'),
	                Length: PDFNumber.fromNumber(deflatedFontData.length),
	            }, pdfDoc.index);
	            var fontStream = pdfDoc.register(PDFRawStream$$1.from(fontStreamDict, deflatedFontData));
	            var _a = _this.font, italicAngle = _a.italicAngle, ascent = _a.ascent, descent = _a.descent, capHeight = _a.capHeight, xHeight = _a.xHeight, bbox = _a.bbox;
	            var fontDescriptor = PDFDictionary$$1.from({
	                Type: PDFName.from('FontDescriptor'),
	                FontName: PDFName.from(fontName),
	                Flags: PDFNumber.fromNumber(fontFlags(_this.flagOptions)),
	                FontBBox: PDFArray$$1.fromArray([
	                    PDFNumber.fromNumber(bbox.minX * _this.scale),
	                    PDFNumber.fromNumber(bbox.minY * _this.scale),
	                    PDFNumber.fromNumber(bbox.maxX * _this.scale),
	                    PDFNumber.fromNumber(bbox.maxY * _this.scale),
	                ], pdfDoc.index),
	                ItalicAngle: PDFNumber.fromNumber(italicAngle),
	                Ascent: PDFNumber.fromNumber(ascent * _this.scale),
	                Descent: PDFNumber.fromNumber(descent * _this.scale),
	                CapHeight: PDFNumber.fromNumber((capHeight || ascent) * _this.scale),
	                XHeight: PDFNumber.fromNumber((xHeight || 0) * _this.scale),
	                // Not sure how to compute/find this, nor is anybody else really:
	                // https://stackoverflow.com/questions/35485179/stemv-value-of-the-truetype-font
	                StemV: PDFNumber.fromNumber(0),
	                FontFile3: fontStream,
	            }, pdfDoc.index);
	            return pdfDoc.register(PDFDictionary$$1.from({
	                Type: PDFName.from('Font'),
	                Subtype: PDFName.from('OpenType'),
	                BaseFont: PDFName.from(fontName),
	                FirstChar: PDFNumber.fromNumber(0),
	                LastChar: PDFNumber.fromNumber(255),
	                Widths: _this.getWidths(pdfDoc.index),
	                FontDescriptor: pdfDoc.register(fontDescriptor),
	            }, pdfDoc.index));
	        };
	        /** @hidden */
	        this.getWidths = function (index) {
	            return PDFArray$$1.fromArray(range_1(0, 256)
	                .map(_this.getCodePointWidth)
	                .map(PDFNumber.fromNumber), index);
	        };
	        this.getCodePointWidth = function (code) {
	            return _this.font.characterSet.includes(code)
	                ? _this.font.glyphForCodePoint(code).advanceWidth * _this.scale
	                : 0;
	        };
	        validate(fontData, isInstance(Uint8Array), '"fontData" must be a Uint8Array');
	        validate(flagOptions, isObject_1, '"flagOptions" must be an Object');
	        // This has to work in browser & Node JS environments. And, unfortunately,
	        // the "fontkit" package makes use of Node "Buffer" objects, instead of
	        // standard JS typed arrays. So, for now we'll just use the "buffer" package
	        // to convert the "data" to a "Buffer" object that "fontkit" can work with.
	        var dataBuffer = buffer_1.from(fontData);
	        this.fontData = fontData;
	        this.flagOptions = flagOptions;
	        this.font = fontkit.create(dataBuffer);
	        this.scale = 1000 / this.font.unitsPerEm;
	    }
	    PDFFontFactory.for = function (fontData, flagOptions) {
	        return new PDFFontFactory(fontData, flagOptions);
	    };
	    return PDFFontFactory;
	}());

	var UnicodeToWinAnsiMap = {
	    402: 131,
	    8211: 150,
	    8212: 151,
	    8216: 145,
	    8217: 146,
	    8218: 130,
	    8220: 147,
	    8221: 148,
	    8222: 132,
	    8224: 134,
	    8225: 135,
	    8226: 149,
	    8230: 133,
	    8364: 128,
	    8240: 137,
	    8249: 139,
	    8250: 155,
	    710: 136,
	    8482: 153,
	    338: 140,
	    339: 156,
	    732: 152,
	    352: 138,
	    353: 154,
	    376: 159,
	    381: 142,
	    382: 158,
	};
	/**
	 * This Factory supports Standard fonts. Note that the apparent
	 * hardcoding of values for OpenType fonts does not actually affect TrueType
	 * fonts.
	 *
	 * A note of thanks to the developers of https://github.com/foliojs/pdfkit,
	 * as this class borrows from:
	 * https://github.com/foliojs/pdfkit/blob/f91bdd61c164a72ea06be1a43dc0a412afc3925f/lib/font/afm.coffee
	 */
	var PDFStandardFontFactory = /** @class */ (function () {
	    function PDFStandardFontFactory(fontName) {
	        var _this = this;
	        this.encodeText = function (text) {
	            return PDFHexString.fromString(text
	                .split('')
	                .map(function (char) { return char.charCodeAt(0); })
	                .map(function (charCode) { return UnicodeToWinAnsiMap[charCode] || charCode; })
	                .map(function (charCode) { return charCode.toString(16); })
	                .join(''));
	        };
	        /*
	            TODO:
	            A Type 1 font dictionary may contain the entries listed in Table 111.
	            Some entries are optional for the standard 14 fonts listed under 9.6.2.2,
	              "Standard Type 1 Fonts (Standard 14 Fonts)", but are required otherwise.
	      
	            NOTE: For compliance sake, these standard 14 font dictionaries need to be
	                  updated to include the following entries:
	                    • FirstChar
	                    • LastChar
	                    • Widths
	                    • FontDescriptor
	                  See "Table 111 – Entries in a Type 1 font dictionary (continued)"
	                  for details on this...
	          */
	        this.embedFontIn = function (pdfDoc) {
	            validate(pdfDoc, isInstance(PDFDocument), 'PDFFontFactory.embedFontIn: "pdfDoc" must be an instance of PDFDocument');
	            return pdfDoc.register(PDFDictionary$$1.from({
	                Type: PDFName.from('Font'),
	                Subtype: PDFName.from('Type1'),
	                Encoding: PDFName.from('WinAnsiEncoding'),
	                BaseFont: PDFName.from(_this.fontName),
	            }, pdfDoc.index));
	        };
	        /** @hidden */
	        this.getWidths = function () {
	            throw new Error('getWidths() Not implemented yet for Standard Font');
	        };
	        this.getCodePointWidth = function () {
	            throw new Error('getCodePointWidth() Not implemented yet for Standard Font');
	        };
	        validate(fontName, oneOf.apply(void 0, Standard14Fonts), 'PDFDocument.embedStandardFont: "fontName" must be one of the Standard 14 Fonts: ' +
	            values_1(Standard14Fonts).join(', '));
	        this.fontName = fontName;
	    }
	    PDFStandardFontFactory.for = function (fontName) {
	        return new PDFStandardFontFactory(fontName);
	    };
	    return PDFStandardFontFactory;
	}());

	var pngNode = createCommonjsModule(function (module) {
	// Generated by CoffeeScript 1.4.0

	/*
	# MIT LICENSE
	# Copyright (c) 2011 Devon Govett
	#
	# Permission is hereby granted, free of charge, to any person obtaining a copy of this
	# software and associated documentation files (the "Software"), to deal in the Software
	# without restriction, including without limitation the rights to use, copy, modify, merge,
	# publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
	# to whom the Software is furnished to do so, subject to the following conditions:
	#
	# The above copyright notice and this permission notice shall be included in all copies or
	# substantial portions of the Software.
	#
	# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
	# BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/


	(function() {
	  var PNG, pako;

	  pako = pako_1;

	  module.exports = PNG = (function() {

	    function PNG(data) {
	      var chunkSize, colors, i, index, key, section, short, text, _i, _j, _ref;
	      this.data = data;
	      this.pos = 8;
	      this.palette = [];
	      this.imgData = [];
	      this.transparency = {};
	      this.text = {};
	      while (true) {
	        chunkSize = this.readUInt32();
	        section = ((function() {
	          var _i, _results;
	          _results = [];
	          for (i = _i = 0; _i < 4; i = ++_i) {
	            _results.push(String.fromCharCode(this.data[this.pos++]));
	          }
	          return _results;
	        }).call(this)).join('');
	        switch (section) {
	          case 'IHDR':
	            this.width = this.readUInt32();
	            this.height = this.readUInt32();
	            this.bits = this.data[this.pos++];
	            this.colorType = this.data[this.pos++];
	            this.compressionMethod = this.data[this.pos++];
	            this.filterMethod = this.data[this.pos++];
	            this.interlaceMethod = this.data[this.pos++];
	            break;
	          case 'PLTE':
	            this.palette = this.read(chunkSize);
	            break;
	          case 'IDAT':
	            for (i = _i = 0; _i < chunkSize; i = _i += 1) {
	              this.imgData.push(this.data[this.pos++]);
	            }
	            break;
	          case 'tRNS':
	            this.transparency = {};
	            switch (this.colorType) {
	              case 3:
	                this.transparency.indexed = this.read(chunkSize);
	                short = 255 - this.transparency.indexed.length;
	                if (short > 0) {
	                  for (i = _j = 0; 0 <= short ? _j < short : _j > short; i = 0 <= short ? ++_j : --_j) {
	                    this.transparency.indexed.push(255);
	                  }
	                }
	                break;
	              case 0:
	                this.transparency.grayscale = this.read(chunkSize)[0];
	                break;
	              case 2:
	                this.transparency.rgb = this.read(chunkSize);
	            }
	            break;
	          case 'tEXt':
	            text = this.read(chunkSize);
	            index = text.indexOf(0);
	            key = String.fromCharCode.apply(String, text.slice(0, index));
	            this.text[key] = String.fromCharCode.apply(String, text.slice(index + 1));
	            break;
	          case 'IEND':
	            this.colors = (function() {
	              switch (this.colorType) {
	                case 0:
	                case 3:
	                case 4:
	                  return 1;
	                case 2:
	                case 6:
	                  return 3;
	              }
	            }).call(this);
	            this.hasAlphaChannel = (_ref = this.colorType) === 4 || _ref === 6;
	            colors = this.colors + (this.hasAlphaChannel ? 1 : 0);
	            this.pixelBitlength = this.bits * colors;
	            this.colorSpace = (function() {
	              switch (this.colors) {
	                case 1:
	                  return 'DeviceGray';
	                case 3:
	                  return 'DeviceRGB';
	              }
	            }).call(this);
	            this.imgData = new Uint8Array(this.imgData);
	            return;
	          default:
	            this.pos += chunkSize;
	        }
	        this.pos += 4;
	        if (this.pos > this.data.length) {
	          throw new Error("Incomplete or corrupt PNG file");
	        }
	      }
	      return;
	    }

	    PNG.prototype.read = function(bytes) {
	      var i, _i, _results;
	      _results = [];
	      for (i = _i = 0; 0 <= bytes ? _i < bytes : _i > bytes; i = 0 <= bytes ? ++_i : --_i) {
	        _results.push(this.data[this.pos++]);
	      }
	      return _results;
	    };

	    PNG.prototype.readUInt32 = function() {
	      var b1, b2, b3, b4;
	      b1 = this.data[this.pos++] << 24;
	      b2 = this.data[this.pos++] << 16;
	      b3 = this.data[this.pos++] << 8;
	      b4 = this.data[this.pos++];
	      return b1 | b2 | b3 | b4;
	    };

	    PNG.prototype.readUInt16 = function() {
	      var b1, b2;
	      b1 = this.data[this.pos++] << 8;
	      b2 = this.data[this.pos++];
	      return b1 | b2;
	    };

	    PNG.prototype.decodePixels = function(fn) {
	      var pixels;
	      pixels = this.decodePixelsSync();
	      return fn(pixels);
	    };

	    PNG.prototype.decodePixelsSync = function() {
	      var byte, c, col, data, i, left, length, p, pa, paeth, pb, pc, pixelBytes, pixels, pos, row, scanlineLength, upper, upperLeft, _i, _j, _k, _l, _m;
	      data = pako.inflate(this.imgData);
	      pixelBytes = this.pixelBitlength / 8;
	      scanlineLength = pixelBytes * this.width;
	      pixels = new Uint8Array(scanlineLength * this.height);
	      length = data.length;
	      row = 0;
	      pos = 0;
	      c = 0;
	      while (pos < length) {
	        switch (data[pos++]) {
	          case 0:
	            for (i = _i = 0; _i < scanlineLength; i = _i += 1) {
	              pixels[c++] = data[pos++];
	            }
	            break;
	          case 1:
	            for (i = _j = 0; _j < scanlineLength; i = _j += 1) {
	              byte = data[pos++];
	              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
	              pixels[c++] = (byte + left) % 256;
	            }
	            break;
	          case 2:
	            for (i = _k = 0; _k < scanlineLength; i = _k += 1) {
	              byte = data[pos++];
	              col = (i - (i % pixelBytes)) / pixelBytes;
	              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
	              pixels[c++] = (upper + byte) % 256;
	            }
	            break;
	          case 3:
	            for (i = _l = 0; _l < scanlineLength; i = _l += 1) {
	              byte = data[pos++];
	              col = (i - (i % pixelBytes)) / pixelBytes;
	              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
	              upper = row && pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
	              pixels[c++] = (byte + Math.floor((left + upper) / 2)) % 256;
	            }
	            break;
	          case 4:
	            for (i = _m = 0; _m < scanlineLength; i = _m += 1) {
	              byte = data[pos++];
	              col = (i - (i % pixelBytes)) / pixelBytes;
	              left = i < pixelBytes ? 0 : pixels[c - pixelBytes];
	              if (row === 0) {
	                upper = upperLeft = 0;
	              } else {
	                upper = pixels[(row - 1) * scanlineLength + col * pixelBytes + (i % pixelBytes)];
	                upperLeft = col && pixels[(row - 1) * scanlineLength + (col - 1) * pixelBytes + (i % pixelBytes)];
	              }
	              p = left + upper - upperLeft;
	              pa = Math.abs(p - left);
	              pb = Math.abs(p - upper);
	              pc = Math.abs(p - upperLeft);
	              if (pa <= pb && pa <= pc) {
	                paeth = left;
	              } else if (pb <= pc) {
	                paeth = upper;
	              } else {
	                paeth = upperLeft;
	              }
	              pixels[c++] = (byte + paeth) % 256;
	            }
	            break;
	          default:
	            throw new Error("Invalid filter algorithm: " + data[pos - 1]);
	        }
	        row++;
	      }
	      return pixels;
	    };

	    PNG.prototype.decodePalette = function() {
	      var c, i, length, palette, pos, ret, transparency, _i, _ref, _ref1;
	      palette = this.palette;
	      transparency = this.transparency.indexed || [];
	      ret = new Uint8Array(transparency.length + palette.length);
	      pos = 0;
	      length = palette.length;
	      c = 0;
	      for (i = _i = 0, _ref = palette.length; _i < _ref; i = _i += 3) {
	        ret[pos++] = palette[i];
	        ret[pos++] = palette[i + 1];
	        ret[pos++] = palette[i + 2];
	        ret[pos++] = (_ref1 = transparency[c++]) != null ? _ref1 : 255;
	      }
	      return ret;
	    };

	    PNG.prototype.copyToImageData = function(imageData, pixels) {
	      var alpha, colors, data, i, input, j, k, length, palette, v, _ref;
	      colors = this.colors;
	      palette = null;
	      alpha = this.hasAlphaChannel;
	      if (this.palette.length) {
	        palette = (_ref = this._decodedPalette) != null ? _ref : this._decodedPalette = this.decodePalette();
	        colors = 4;
	        alpha = true;
	      }
	      data = (imageData != null ? imageData.data : void 0) || imageData;
	      length = data.length;
	      input = palette || pixels;
	      i = j = 0;
	      if (colors === 1) {
	        while (i < length) {
	          k = palette ? pixels[i / 4] * 4 : j;
	          v = input[k++];
	          data[i++] = v;
	          data[i++] = v;
	          data[i++] = v;
	          data[i++] = alpha ? input[k++] : 255;
	          j = k;
	        }
	      } else {
	        while (i < length) {
	          k = palette ? pixels[i / 4] * 4 : j;
	          data[i++] = input[k++];
	          data[i++] = input[k++];
	          data[i++] = input[k++];
	          data[i++] = alpha ? input[k++] : 255;
	          j = k;
	        }
	      }
	    };

	    PNG.prototype.decode = function(fn) {
	      var ret,
	        _this = this;
	      ret = new Uint8Array(this.width * this.height * 4);
	      return this.decodePixels(function(pixels) {
	        _this.copyToImageData(ret, pixels);
	        return fn(ret);
	      });
	    };

	    PNG.prototype.decodeSync = function() {
	      var pixels, ret;
	      ret = new Uint8Array(this.width * this.height * 4);
	      pixels = this.decodePixelsSync();
	      this.copyToImageData(ret, pixels);
	      return ret;
	    };

	    return PNG;

	  })();

	}).call(commonjsGlobal);
	});

	/**
	 * A note of thanks to the developers of https://github.com/devongovett/pdfkit,
	 * as this class borrows heavily from:
	 * https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/png.coffee
	 */
	var PNGXObjectFactory = /** @class */ (function () {
	    function PNGXObjectFactory(data) {
	        var _this = this;
	        this.embedImageIn = function (document) {
	            _this.document = document;
	            _this.xObjDict = PDFDictionary$$1.from({
	                Type: PDFName.from('XObject'),
	                Subtype: PDFName.from('Image'),
	                BitsPerComponent: PDFNumber.fromNumber(_this.image.bits),
	                Width: PDFNumber.fromNumber(_this.width),
	                Height: PDFNumber.fromNumber(_this.height),
	                Filter: PDFName.from('FlateDecode'),
	            }, document.index);
	            if (!_this.image.hasAlphaChannel) {
	                var params = PDFDictionary$$1.from({
	                    Predictor: PDFNumber.fromNumber(15),
	                    Colors: PDFNumber.fromNumber(_this.image.colors),
	                    BitsPerComponent: PDFNumber.fromNumber(_this.image.bits),
	                    Columns: PDFNumber.fromNumber(_this.width),
	                }, document.index);
	                _this.xObjDict.set('DecodeParms', params);
	            }
	            if (_this.image.palette.length === 0) {
	                _this.xObjDict.set('ColorSpace', PDFName.from(_this.image.colorSpace));
	            }
	            else {
	                var paletteStream = document.register(PDFRawStream$$1.from(PDFDictionary$$1.from({
	                    Length: PDFNumber.fromNumber(_this.image.palette.length),
	                }, document.index), new Uint8Array(_this.image.palette)));
	                _this.xObjDict.set('ColorSpace', PDFArray$$1.fromArray([
	                    PDFName.from('Indexed'),
	                    PDFName.from('DeviceRGB'),
	                    PDFNumber.fromNumber(_this.image.palette.length / 3 - 1),
	                    paletteStream,
	                ], document.index));
	            }
	            // TODO: Handle the following two transparency types. They don't seem to be
	            // fully handled in:
	            // https://github.com/devongovett/pdfkit/blob/e71edab0dd4657b5a767804ba86c94c58d01fbca/lib/image/png.coffee
	            // if (this.image.transparency.grayscale)
	            // if (this.image.transparency.rgb)
	            // prettier-ignore
	            return (_this.image.transparency.indexed ? _this.loadIndexedAlphaChannel()
	                : _this.image.hasAlphaChannel ? _this.splitAlphaChannel()
	                    : _this.finalize());
	        };
	        /** @hidden */
	        this.finalize = function () {
	            if (_this.alphaChannel) {
	                var deflatedAlphaChannel = pako_1.deflate(_this.alphaChannel);
	                var alphaStreamDict = PDFDictionary$$1.from({
	                    Type: PDFName.from('XObject'),
	                    Subtype: PDFName.from('Image'),
	                    Height: PDFNumber.fromNumber(_this.height),
	                    Width: PDFNumber.fromNumber(_this.width),
	                    BitsPerComponent: PDFNumber.fromNumber(8),
	                    Filter: PDFName.from('FlateDecode'),
	                    ColorSpace: PDFName.from('DeviceGray'),
	                    Decode: PDFArray$$1.fromArray([PDFNumber.fromNumber(0), PDFNumber.fromNumber(1)], _this.document.index),
	                    Length: PDFNumber.fromNumber(deflatedAlphaChannel.length),
	                }, _this.document.index);
	                var smaskStream = _this.document.register(PDFRawStream$$1.from(alphaStreamDict, deflatedAlphaChannel));
	                _this.xObjDict.set('SMask', smaskStream);
	            }
	            _this.xObjDict.set('Length', PDFNumber.fromNumber(_this.imgData.length));
	            var xObj = _this.document.register(PDFRawStream$$1.from(_this.xObjDict, _this.imgData));
	            return xObj;
	        };
	        /** @hidden */
	        this.splitAlphaChannel = function () {
	            var pixels = _this.image.decodePixelsSync();
	            var colorByteSize = _this.image.colors * _this.image.bits / 8;
	            var pixelCount = _this.image.width * _this.image.height;
	            _this.imgData = new Uint8Array(pixelCount * colorByteSize);
	            _this.alphaChannel = new Uint8Array(pixelCount);
	            var i = 0;
	            var p = 0;
	            var a = 0;
	            while (i < pixels.length) {
	                _this.imgData[p++] = pixels[i++];
	                _this.imgData[p++] = pixels[i++];
	                _this.imgData[p++] = pixels[i++];
	                _this.alphaChannel[a++] = pixels[i++];
	            }
	            _this.imgData = pako_1.deflate(_this.imgData);
	            return _this.finalize();
	        };
	        /** @hidden */
	        this.loadIndexedAlphaChannel = function () {
	            var transparency = _this.image.transparency.indexed;
	            var pixels = _this.image.decodePixelsSync();
	            _this.alphaChannel = new Uint8Array(_this.width * _this.height);
	            // Can't use forEach here, because it's missing on React Native Android
	            for (var idx = 0; idx < pixels.length; idx++) {
	                _this.alphaChannel[idx] = transparency[pixels[idx]];
	            }
	            return _this.finalize();
	        };
	        validate(data, isInstance(Uint8Array), '"data" must be an instance of Uint8Array');
	        this.image = new pngNode(data);
	        this.width = this.image.width;
	        this.height = this.image.height;
	        this.imgData = this.image.imgData;
	    }
	    PNGXObjectFactory.for = function (data) { return new PNGXObjectFactory(data); };
	    return PNGXObjectFactory;
	}());

	var PDFDocument = /** @class */ (function () {
	    function PDFDocument(catalog, maxObjectNumber, index) {
	        var _this = this;
	        /** @hidden */
	        this.header = PDFHeader.forVersion(1, 7);
	        this.maxObjNum = 0;
	        /**
	         * Registers a [[PDFObject]] to the [[PDFDocument]]'s `index`. Returns a
	         * [[PDFIndirectReference]] that can be used to reference the given `object`
	         * in other `pdf-lib` methods.
	         *
	         * @param   object The [[PDFObject]] to be registered.
	         *
	         * @returns The [[PDFIndirectReference]] under which the `object` has been
	         *          registered.
	         */
	        this.register = function (object) {
	            validate(object, isInstance(PDFObject), 'object must be a PDFObject');
	            _this.maxObjNum += 1;
	            var ref = PDFIndirectReference.forNumbers(_this.maxObjNum, 0);
	            _this.index.set(ref, object);
	            return ref;
	        };
	        /**
	         * @returns An array of [[PDFPage]] objects representing the pages of the
	         *          [[PDFDocument]]. The order of the [[PDFPage]] documents in the
	         *          array mirrors the order in which they will be rendered in the
	         *          [[PDFDocument]].
	         */
	        this.getPages = function () {
	            var pages = [];
	            _this.catalog.Pages.traverse(function (kid) {
	                if (kid instanceof PDFPage)
	                    pages.push(kid);
	            });
	            return pages;
	        };
	        /**
	         * Creates a new [[PDFPage]] of the given `size`. And optionally, with the
	         * given `resources` dictionary.
	         *
	         * Note that the [[PDFPage]] returned by this method is **not** automatically
	         * added to the [[PDFDocument]]. You must call the [[addPage]] or [[insertPage]]
	         * methods for it to be rendered in the document.
	         *
	         * @param size      A tuple containing the width and height of the page,
	         *                  respectively.
	         * @param resources A resources dictionary for the page.
	         *
	         * @returns The newly created [[PDFPage]].
	         */
	        this.createPage = function (size, resources) {
	            return PDFPage.create(_this.index, size, resources);
	        };
	        /**
	         * Creates a new [[PDFContentStream]] with the given operators.
	         *
	         * Note that the [[PDFContentStream]] returned by this method is **not**
	         * automatically registered to the document or added to any of its pages.
	         * You must first call the [[register]] method for it to be registered to the
	         * [[PDFDocument]]. Then, you must call [[PDFPage.addContentStreams]] to add
	         * the registered [[PDFContentStream]] to the desired page(s).
	         *
	         * @param operators One or more [[PDFOperator]]s to be added to the
	         *                  [[PDFContentStream]].
	         *
	         * @returns The newly created [[PDFContentStream]].
	         */
	        this.createContentStream = function () {
	            var operators = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                operators[_i] = arguments[_i];
	            }
	            return PDFContentStream.of.apply(PDFContentStream, [PDFDictionary$$1.from({}, _this.index)].concat(operators));
	        };
	        /**
	         * Adds a page to the end of the [[PDFDocument]].
	         *
	         * @param page The page to be added.
	         */
	        this.addPage = function (page) {
	            validate(page, isInstance(PDFPage), 'page must be a PDFPage');
	            var Pages = _this.catalog.Pages;
	            var lastPageTree = Pages;
	            var lastPageTreeRef = _this.catalog.get('Pages');
	            Pages.traverseRight(function (kid, ref) {
	                if (kid instanceof PDFPageTree) {
	                    lastPageTree = kid;
	                    lastPageTreeRef = ref;
	                }
	            });
	            page.set('Parent', lastPageTreeRef);
	            lastPageTree.addPage(_this.register(page));
	            return _this;
	        };
	        // TODO: Clean up unused objects when possible after removing page from tree
	        // TODO: Make sure "idx" is within required range
	        /**
	         * Removes a page from the document.
	         *
	         * @param index The index of the page to be removed. The index is zero-based,
	         *              e.g. the first page in the document is index `0`.
	         */
	        this.removePage = function (index) {
	            validate(index, isNumber_1, 'idx must be a number');
	            var pageTreeRef = _this.catalog.get('Pages');
	            // TODO: Use a "stop" callback to avoid unneccesarily traversing whole page tree...
	            var treeRef = pageTreeRef;
	            var pageCount = 0;
	            var kidNum = 0;
	            _this.catalog.Pages.traverse(function (kid, ref) {
	                if (pageCount !== index) {
	                    if (kid instanceof PDFPageTree)
	                        kidNum = 0;
	                    if (kid instanceof PDFPage) {
	                        pageCount += 1;
	                        kidNum += 1;
	                        if (pageCount === index)
	                            treeRef = kid.get('Parent');
	                    }
	                }
	            });
	            var tree = _this.index.lookup(treeRef);
	            tree.removePage(kidNum);
	            return _this;
	        };
	        // TODO: Make sure "idx" is within required range
	        /**
	         * Inserts a page into the document at the specified index. The page that is
	         * displaced by the insertion will be become the page immediately following
	         * the inserted page.
	         *
	         * @param index The index of the page to be removed. The index is zero-based,
	         *              e.g. the first page in the document is index `0`.
	         * @param page  The page to be inserted.
	         */
	        this.insertPage = function (index, page) {
	            validate(index, isNumber_1, 'idx must be a number');
	            validate(page, isInstance(PDFPage), 'page must be a PDFPage');
	            var pageTreeRef = _this.catalog.get('Pages');
	            // TODO: Use a "stop" callback to avoid unneccesarily traversing whole page tree...
	            var treeRef = pageTreeRef;
	            var pageCount = 0;
	            var kidNum = 0;
	            _this.catalog.Pages.traverse(function (kid, ref) {
	                if (pageCount !== index) {
	                    if (kid instanceof PDFPageTree)
	                        kidNum = 0;
	                    if (kid instanceof PDFPage) {
	                        pageCount += 1;
	                        kidNum += 1;
	                        if (pageCount === index)
	                            treeRef = kid.get('Parent');
	                    }
	                }
	            });
	            page.set('Parent', treeRef);
	            var tree = _this.index.lookup(treeRef);
	            tree.insertPage(kidNum, _this.register(page));
	            return _this;
	        };
	        /**
	         * Embeds one of the Standard 14 Fonts fonts in the document. This method
	         * does **not** require a `Uint8Array` containing a font to be passed, because
	         * the Standard 14 Fonts are automatically available to all PDF documents.
	         *
	         * @param fontName Name of the font to be embedded.
	         *
	         * @returns A tuple containing the [[PDFIndirectReference]] under which the
	         *          specified font is registered.
	         */
	        this.embedStandardFont = function (fontName) {
	            validate(fontName, oneOf.apply(void 0, Standard14Fonts), 'PDFDocument.embedStandardFont: "fontName" must be one of the Standard 14 Fonts: ' +
	                values_1(Standard14Fonts).join(', '));
	            var standardFontFactory = PDFStandardFontFactory.for(fontName);
	            return [standardFontFactory.embedFontIn(_this), standardFontFactory];
	        };
	        /**
	         * Embeds the font contained in the specified `Uint8Array` in the document.
	         *
	         * @param fontData A `Uint8Array` containing an OpenType (`.otf`) or TrueType
	         *                 (`.ttf`) font.
	         *
	         * @returns A tuple containing (1) the [[PDFIndirectReference]] under which the
	         *          specified font is registered, and (2) a [[PDFFontFactory]] object
	         *          containing font metadata properties and methods.
	         */
	        this.embedFont = function (fontData, fontFlags) {
	            if (fontFlags === void 0) { fontFlags = { Nonsymbolic: true }; }
	            var fontFactory = PDFFontFactory.for(fontData, fontFlags);
	            return [fontFactory.embedFontIn(_this), fontFactory];
	        };
	        /**
	         * Embeds the PNG image contained in the specified `Uint8Array` in the document.
	         *
	         * @param pngData A `Uint8Array` containing a PNG (`.png`) image.
	         *
	         * @returns A tuple containing (1) the [[PDFIndirectReference]] under which the
	         *          specified image is registered, and (2) a [[PNGXObjectFactory]]
	         *          object containing the image's width and height.
	         */
	        this.embedPNG = function (pngData) {
	            var pngFactory = PNGXObjectFactory.for(pngData);
	            return [pngFactory.embedImageIn(_this), pngFactory];
	        };
	        /**
	         * Embeds the JPG image contained in the specified `Uint8Array` in the document.
	         *
	         * @param jpgData A `Uint8Array` containing a JPG (`.jpg`) image.
	         *
	         * @returns A tuple containing (1) the [[PDFIndirectReference]] under which the
	         *          specified image is registered, and (2) a [[JPEGXObjectFactory]]
	         *          object containing the image's width and height.
	         */
	        this.embedJPG = function (jpgData) {
	            var jpgFactory = JPEGXObjectFactory.for(jpgData);
	            return [jpgFactory.embedImageIn(_this), jpgFactory];
	        };
	        validate(catalog, isInstance(PDFCatalog), '"catalog" must be a PDFCatalog object');
	        validate(maxObjectNumber, isNumber_1, '"maxObjectNumber" must be a number');
	        validate(index, isInstance(PDFObjectIndex), '"index" must be a PDFObjectIndex object');
	        this.catalog = catalog;
	        this.maxObjNum = maxObjectNumber;
	        this.index = index;
	    }
	    PDFDocument.from = function (catalog, maxObjectNumber, index) { return new PDFDocument(catalog, maxObjectNumber, index); };
	    return PDFDocument;
	}());

	// tslint:disable-next-line:no-unused-variable
	var QOps = {
	    /**
	     * Save the current graphics state on the graphics state stack
	     */
	    q: PDFOperator.createSingletonOp('q'),
	    /**
	     * Restore the graphics state by removing the most recently saved state from the
	     * stack and making it the current state
	     */
	    Q: PDFOperator.createSingletonOp('Q'),
	};

	/**
	 * Gets all but the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {Array} Returns the slice of `array`.
	 * @example
	 *
	 * _.initial([1, 2, 3]);
	 * // => [1, 2]
	 */
	function initial(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? _baseSlice(array, 0, -1) : [];
	}

	var initial_1 = initial;

	/**
	 * Accepts an array of bytes as input. Removes all leading bytes that do not
	 * make up digits ([0-9]). Returns a subarray of the input with these leading
	 * non-digit bytes removed.
	 *
	 * This allows us to remove the binary comment following a PDF header, before
	 * proceeding to parse the rest of the document. The specification defines this
	 * binary comment (section 7.5.2 File Header) as a sequence of 4 or more bytes
	 * that are 128 or greater, and which are preceded by a "%".
	 *
	 * This would imply that to strip out this binary comment, we could check for a
	 * sequence of bytes starting with "%", and remove all subsequent bytes that are
	 * 128 or greater. This works for many documents that properly comply with the
	 * spec. But in the wild, there are PDFs that omit the leading "%", and include
	 * bytes that are less than 128 (e.g. 0 or 1). So in order to parse these
	 * headers correctly, we just throw out all bytes leading up to the first digit.
	 * (we assume the first digit is the object number of the first indirect object)
	 */
	var stripBinaryComment = function (input) {
	    var idx = 0;
	    while (idx < input.length &&
	        String.fromCharCode(input[idx]).match(/^(?![\d])./)) {
	        idx += 1;
	    }
	    return input.subarray(idx);
	};
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Header.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Header and (2) a subarray of the input with the characters making up the parsed
	 * header removed. The "onParseHeader" parse handler will also be called with the
	 * PDFHeader obect.
	 *
	 * If not, null is returned.
	 */
	var parseHeader = function (input, _a) {
	    var onParseHeader = (_a === void 0 ? {} : _a).onParseHeader;
	    var trimmed = trimArray(input);
	    var fileHeaderRegex = /^[\0\t\n\f\r ]*%PDF-(\d+)\.(\d+)[\0\t\n\f\r ]*/;
	    // Search for first character that isn't part of a header
	    var idx = 0;
	    while (idx < trimmed.length &&
	        String.fromCharCode(trimmed[idx]).match(/^[\0\t\n\f\r %PDF-\d.]/)) {
	        idx += 1;
	    }
	    // Try to match the regex up to that character to see if we've got a header
	    var result = arrayToString(trimmed, 0, idx).match(fileHeaderRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], major = result[1], minor = result[2];
	    var withoutVersion = trimArray(trimmed.subarray(fullMatch.length));
	    var returnArray = stripBinaryComment(withoutVersion);
	    var pdfHeader = PDFHeader.forVersion(Number(major), Number(minor));
	    if (onParseHeader)
	        onParseHeader(pdfHeader);
	    return [pdfHeader, returnArray];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in
	 * the trimmed input make up a PDF Boolean.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed
	 * PDF Boolean and (2) a subarray of the input with the characters making up the
	 * parsed header removed. The "onParseBool" parse handler will also be called
	 * with the PDFBoolean object.
	 *
	 * If not, null is returned.
	 */
	var parseBool = function (input, _a) {
	    var onParseBool = (_a === void 0 ? {} : _a).onParseBool;
	    var trimmed = trimArray(input);
	    var boolRegex = /^(?:[\0\t\n\f\r ]*)(true|false)((?=[\0\t\n\f\r \]]))?/;
	    // Search for first character that isn't part of a boolean
	    var idx = 0;
	    while (String.fromCharCode(trimmed[idx]).match(/^[\0\t\n\f\r truefalse]/) &&
	        idx < trimmed.length) {
	        idx += 1;
	    }
	    // Try to match the regex up to that character to see if we've got a boolean
	    var result = arrayToString(trimmed, 0, idx).match(boolRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], bool = result[1];
	    var pdfBool = PDFBoolean.fromString(bool);
	    if (onParseBool)
	        onParseBool(pdfBool);
	    return [pdfBool, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Hex String.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF Hex
	 * String and (2) a subarray of the input with the characters making up the parsed
	 * hex string removed. The "onParseHexString" parse handle will also be called with
	 * the PDFHexString object.
	 *
	 * If not, null is returned.
	 */
	var parseHexString = function (input, _a) {
	    var onParseHexString = (_a === void 0 ? {} : _a).onParseHexString;
	    var hexStringRegex = /^<([\dABCDEFabcdef\0\t\n\f\r ]*)>/;
	    var trimmed = trimArray(input);
	    if (trimmed.length === 0)
	        return undefined;
	    // Search for first character that isn't part of a hex string
	    var idx = 0;
	    while (charFromCode(trimmed[idx]).match(/^[<(\dABCDEFabcdef\0\t\n\f\r ]/)) {
	        idx += 1;
	    }
	    // Try to match the regex up to that character to see if we've got a hex string
	    var result = arrayToString(trimmed, 0, idx + 2).match(hexStringRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], hexString = result[1];
	    var pdfHexString = PDFHexString.fromString(hexString);
	    if (onParseHexString)
	        onParseHexString(pdfHexString);
	    return [pdfHexString, trimmed.subarray(fullMatch.length)];
	};

	// tslint:disable-next-line:no-unused-variable
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Indirect Reference.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Indirect Reference and (2) a subarray of the input with the characters making up
	 * the parsed indirect reference removed. The "onParseIndirectRef" parse handler
	 * will also be called with the PDFIndirectReference.
	 *
	 * If not, null is returned.
	 */
	var parseIndirectRef = function (input, _a) {
	    var onParseIndirectRef = (_a === void 0 ? {} : _a).onParseIndirectRef;
	    var trimmed = trimArray(input);
	    var indirectRefRegex = /^(\d+)[\0\t\n\f\r ]*(\d+)[\0\t\n\f\r ]*R/;
	    // Check that initial characters make up an indirect reference
	    var rIdx = arrayIndexOf(trimmed, 'R');
	    var result = arrayToString(trimmed, 0, rIdx + 1).match(indirectRefRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], objNum = result[1], genNum = result[2];
	    var ref = PDFIndirectReference.forNumbers(Number(objNum), Number(genNum));
	    if (onParseIndirectRef)
	        onParseIndirectRef(ref);
	    return [ref, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Name.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF Name
	 * and (2) a subarray of the input with the characters making up the parsed name
	 * removed. The "onParseName" parse handler will also be called with the PDFName
	 * object.
	 *
	 * If not, null is returned.
	 */
	var parseName = function (input, _a) {
	    var onParseName = (_a === void 0 ? {} : _a).onParseName;
	    var trimmed = trimArray(input);
	    var nameRegex = /^\/([^\0\t\n\f\r \][<>(/]*)/;
	    // Search for first character that isn't part of a name
	    var idx = 1; // Skip the leading '/'
	    while (trimmed[idx] !== undefined &&
	        String.fromCharCode(trimmed[idx]).match(/^[^\0\t\n\f\r \][<>(/]/)) {
	        idx += 1;
	    }
	    // Try to match the regex up to that character to see if we've got a name
	    var result = arrayToString(trimmed, 0, idx).match(nameRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], name = result[1];
	    var pdfName = PDFName.fromEncoded(name);
	    if (onParseName)
	        onParseName(pdfName);
	    return [pdfName, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Null value.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF Null
	 * value and (2) a subarray of the input with the characters making up the parsed
	 * null value removed. The "onParseNull" parse handler will also be called with the
	 * PDFNull object.
	 *
	 * If not, null is returned.
	 */
	var parseNull = function (input, _a) {
	    var onParseNull = (_a === void 0 ? {} : _a).onParseNull;
	    var trimmed = trimArray(input);
	    if (arrayToString(trimmed, 0, 4) !== 'null')
	        return undefined;
	    if (onParseNull)
	        onParseNull(PDFNull.instance);
	    return [PDFNull.instance, trimmed.subarray(4)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Number.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Number and (2) a subarray of the input with the characters making up the parsed
	 * number removed. The "onParseNumber" parse handler will also be called with the
	 * parsed PDFNumber object.
	 *
	 * If not, null is returned.
	 */
	var parseNumber = function (input, _a) {
	    var onParseNumber = (_a === void 0 ? {} : _a).onParseNumber;
	    var trimmed = trimArray(input);
	    var numRegex = /^(([+-]?\d+(\.\d+)?)|([+-]?\.\d+))/;
	    // Search for the first character that isn't part of a number
	    var idx = 0;
	    while (String.fromCharCode(trimmed[idx]).match(/^[+-.\d]/))
	        idx += 1;
	    // Try to match the regex up to that character to see if we've got a number
	    var result = arrayToString(trimmed, 0, idx).match(numRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], num = result[1];
	    var pdfNumber = PDFNumber.fromString(num);
	    if (onParseNumber)
	        onParseNumber(pdfNumber);
	    return [pdfNumber, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF String.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * String and (2) a subarray of the input with the characters making up the parsed
	 * string removed. The "onParseString" parse handler will also be called with the
	 * PDFString object.
	 *
	 * If not, returns null.
	 */
	var parseString = function (input, _a) {
	    var onParseString = (_a === void 0 ? {} : _a).onParseString;
	    var trimmed = trimArray(input);
	    if (arrayCharAt(trimmed, 0) !== '(')
	        return undefined;
	    var parensStack = [];
	    var isEscaped = false;
	    for (var idx = 0; idx < trimmed.length; idx += 1) {
	        var c = arrayCharAt(trimmed, idx);
	        // Check for unescaped parenthesis
	        if (!isEscaped) {
	            if (c === '(')
	                parensStack.push(c);
	            else if (c === ')')
	                parensStack.pop();
	        }
	        // Track whether current character is being escaped or not
	        if (c === '\\') {
	            if (!isEscaped) {
	                isEscaped = true;
	            }
	            else {
	                isEscaped = false;
	            }
	        }
	        else if (isEscaped)
	            isEscaped = false;
	        // Once (if) the unescaped parenthesis balance out, return their contents
	        if (parensStack.length === 0) {
	            var str = arrayToString(trimmed, 1, idx);
	            var pdfString = PDFString.fromString(str);
	            if (onParseString)
	                onParseString(pdfString);
	            return [pdfString, trimmed.subarray(idx + 1)];
	        }
	    }
	    return undefined; // Parenthesis didn't balance out
	};

	// prettier-ignore
	var typeDict = function (dict) {
	    if (dict.getMaybe('Linearized'))
	        return PDFLinearizationParams.fromDict(dict);
	    switch (dict.getMaybe('Type')) {
	        case PDFName.from('Catalog'): return PDFCatalog.fromDict(dict);
	        case PDFName.from('Pages'): return PDFPageTree.fromDict(dict);
	        case PDFName.from('Page'): return PDFPage.fromDict(dict);
	        default: return dict;
	    }
	};
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in
	 * the trimmed input make up a PDF Dictionary.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed
	 * PDFDictionary and (2) a subarray of the input with the characters making up
	 * the parsed dictionary removed. The "onParseDict" parse handler will also be
	 * called with the PDFDictionary object.
	 *
	 * If not, null is returned.
	 *
	 * Note that the entries of the PDF Dictionary are recursively parsed, so the
	 * appropriate parse handlers will be called when each entry of the dictionary
	 * is parsed. The returned PDFDictionary's keys will be PDFName objects, and its
	 * values will be PDFObjects.
	 */
	var parseDict = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    var trimmed = trimArray(input);
	    if (arrayToString(trimmed, 0, 2) !== '<<')
	        return undefined;
	    var pdfDict = PDFDictionary$$1.from(new Map(), index);
	    // Recursively parse each entry in the dictionary
	    var remainder = trimArray(trimmed.subarray(2));
	    while (arrayToString(trimArray(remainder), 0, 2) !== '>>') {
	        // Parse the key for this entry
	        var _a = parseName(remainder) || error('Failed to parse dictionary key'), key = _a[0], r1 = _a[1];
	        remainder = r1;
	        // Parse the value for this entry
	        var _b = parseName(remainder, parseHandlers) ||
	            parseDict(remainder, index, parseHandlers) ||
	            parseArray(remainder, index, parseHandlers) ||
	            parseString(remainder, parseHandlers) ||
	            parseIndirectRef(remainder, parseHandlers) ||
	            parseNumber(remainder, parseHandlers) ||
	            parseHexString(remainder, parseHandlers) ||
	            parseBool(remainder, parseHandlers) ||
	            parseNull(remainder, parseHandlers) ||
	            error('Failed to parse dictionary value'), pdfObject = _b[0], r2 = _b[1];
	        pdfDict.set(key, pdfObject);
	        remainder = r2;
	    }
	    var remainderTrim = trimArray(remainder);
	    // Make sure the brackets are paired
	    validate(arrayToString(remainderTrim, 0, 2), isIdentity('>>'), 'Mismatched brackets!');
	    remainder = trimArray(remainderTrim.subarray(2)); // Remove ending '>>' pair
	    var typedDict = typeDict(pdfDict);
	    if (parseHandlers.onParseDict)
	        parseHandlers.onParseDict(typedDict);
	    return [typedDict, remainder];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Array.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDFArray
	 * and (2) a subarray of the input with the characters making up the parsed array
	 * removed. The "onParseArray" parse handler will also be called with the PDFArray
	 * object.
	 *
	 * If not, null is returned.
	 *
	 * Note that the elements of the PDF Array are recursively parsed, so the
	 * appropriate parse handlers will be called when each element of the array is
	 * parsed. The returned PDFArray's elements will be composed of PDFObjects.
	 */
	var parseArray = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    // Make sure it is possible for this to be an array.
	    var trimmed = trimArray(input);
	    if (arrayCharAt(trimmed, 0) !== '[')
	        return undefined;
	    var pdfArray = PDFArray$$1.fromArray([], index);
	    // Recursively parse each element of the array
	    var remainder = trimmed.subarray(1); // Remove the '['
	    while (arrayCharAt(trimArray(remainder), 0) !== ']') {
	        // Parse the value for this element
	        var _a = parseName(remainder, parseHandlers) ||
	            parseDict(remainder, index, parseHandlers) ||
	            parseArray(remainder, index, parseHandlers) ||
	            parseString(remainder, parseHandlers) ||
	            parseIndirectRef(remainder, parseHandlers) ||
	            parseNumber(remainder, parseHandlers) ||
	            parseHexString(remainder, parseHandlers) ||
	            parseBool(remainder, parseHandlers) ||
	            parseNull(remainder, parseHandlers) ||
	            error('Failed to parse array element'), pdfObject = _a[0], r = _a[1];
	        pdfArray.push(pdfObject);
	        remainder = r;
	    }
	    var remainderTrim = trimArray(remainder);
	    // Make sure the brackets are paired
	    validate(arrayCharAt(remainderTrim, 0), isIdentity(']'), 'Mismatched brackets!');
	    remainder = trimArray(remainderTrim.subarray(1)); // Remove the ']'
	    if (parseHandlers.onParseArray)
	        parseHandlers.onParseArray(pdfArray);
	    return [pdfArray, remainder];
	};

	var decodeStream = function (data, _a) {
	    var filter = _a.key;
	    if (filter === 'FlateDecode')
	        return pako_1.inflate(data);
	    // TODO: Implement support for all other filter types
	    if (filter === 'DCTDecode')
	        return data;
	    throw new Error("Unknown stream filter type: " + filter);
	};
	var decodeStream$1 = (function (dict, contents) {
	    var filters = dict.get('Filter');
	    if (filters) {
	        var filtersArr = filters instanceof PDFArray$$1 ? filters.array : [filters];
	        return filtersArr.reduce(decodeStream, contents);
	    }
	    return contents;
	});

	/**
	 * Accepts a PDFDictionary and an array of bytes as input. The PDFDictionary should
	 * be a PDF Object Stream dictionary, and the array of bytes should be the Object Stream's content.
	 *
	 * Attempts to parse the pairs of integers at the start of the input bytes. Each
	 * pair describes one object within the Object Stream - its object number and byte
	 * offset within the stream, respectively.
	 *
	 * Returns an array of objects representing the parsed integer pairs.
	 */
	var parseObjData = function (dict, input) {
	    // Extract the value of the "N" entry from the dict
	    var numObjects = dict.get('N').number;
	    // Regex representing a pair of integers
	    var objDatumRegex = /^[\0\t\n\f\r ]*(\d+)[\0\t\n\f\r ]*(\d+)[\0\t\n\f\r ]*/;
	    // Find the first non-numeric character (not including EOLs and spaces) in the
	    // input bytes
	    var firstNonNumIdx = arrayFindIndexOf(input, function (charByte) { return !!String.fromCharCode(charByte).match(/[^\0\t\n\f\r \d]/); });
	    // Convert the input bytes to a string, up to the first non-numeric character
	    var objDatumsStr = arrayToString(input, 0, firstNonNumIdx);
	    // Repeatedly apply the integer pair regex to the input string to build up an
	    // array of the parsed integer pairs
	    var objData = [];
	    var i = 0;
	    var remaining = objDatumsStr;
	    while (i < numObjects) {
	        var _a = remaining.match(objDatumRegex), fullmatch = _a[0], objNum = _a[1], byteOffset = _a[2];
	        objData.push({ objNum: Number(objNum), byteOffset: Number(byteOffset) });
	        remaining = remaining.substring(fullmatch.length);
	        i += 1;
	    }
	    return objData;
	};
	/**
	 * Accepts an a PDFDictionary and an array of bytes as input. The PDFDictionary
	 * should be a PDF Object Stream dictionary, and the array of bytes should be the Object Stream's
	 * content. *The array of bytes is expected to have been decoded (based on the
	 * "Filter"s in the dictionary) prior to being passed to this function.*
	 *
	 * After parsing the integer pairs from the start of the input bytes, the objects
	 * themselves will be parsed from the remaining input bytes.
	 *
	 * A PDFObjectStream will be returned, representing the objects parsed
	 * from the Object Stream. The "onParseObjectStream" parse handler will also be
	 * called with the parsed PDFObjectStream object.
	 */
	var parseObjectStream = function (dict, input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    // Parse the pairs of integers from start of input bytes
	    var objData = parseObjData(dict, input);
	    // Extract the value of the "First" entry in the dict
	    var First = dict.get('First');
	    var firstObjOffset = First.number;
	    // Map each pair of integers to a PDFIndirectObject
	    var indirectObjects = objData.map(function (_a) {
	        var objNum = _a.objNum, byteOffset = _a.byteOffset;
	        var subarray = input.subarray(firstObjOffset + byteOffset);
	        var pdfObject = (parseDict(subarray, index, parseHandlers) ||
	            parseArray(subarray, index, parseHandlers) ||
	            parseName(subarray, parseHandlers) ||
	            parseString(subarray, parseHandlers) ||
	            parseIndirectRef(subarray, parseHandlers) ||
	            parseNumber(subarray, parseHandlers) ||
	            parseHexString(subarray, parseHandlers) ||
	            parseBool(subarray, parseHandlers) ||
	            parseNull(subarray, parseHandlers) ||
	            error('Failed to parse object in Object Stream'))[0];
	        return PDFIndirectObject.of(pdfObject).setReferenceNumbers(objNum, 0);
	    });
	    var objectStream = PDFObjectStream.from(dict, indirectObjects);
	    // Call the parse handler
	    if (parseHandlers.onParseObjectStream) {
	        parseHandlers.onParseObjectStream(objectStream);
	    }
	    return objectStream;
	};

	/**
	 * Accepts an array of bytes and a PDFDictionary as input. Checks to see if the
	 * first characters in the trimmed input make up a PDF Stream.
	 *
	 * If so, the content of the stream is extracted into a subarray. A tuple
	 * containing this content subarray and a subarray of the input with the bytes making
	 * up the entire stream removed is returned.
	 *
	 * If not, null is returned.
	 */
	var parseStream = function (input, dict, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    // Check that the next bytes comprise the beginning of a stream
	    var trimmed = trimArray(input);
	    var startstreamIdx;
	    if (arrayToString(trimmed, 0, 7) === 'stream\n')
	        startstreamIdx = 7;
	    else if (arrayToString(trimmed, 0, 8) === 'stream\r\n')
	        startstreamIdx = 8;
	    if (!startstreamIdx)
	        return undefined;
	    /*
	    TODO: Make this more efficient by using the "Length" entry of the stream
	    dictionary to jump to the end of the stream, instead of traversing each byte.
	    */
	    // Locate the end of the stream
	    var endstreamMatchTuple = arrayIndexOneOf(trimmed, [
	        '\nendstream',
	        '\rendstream',
	        'endstream',
	    ]);
	    if (!endstreamMatchTuple)
	        error('Invalid Stream!');
	    var _a = endstreamMatchTuple, endstreamIdx = _a[0], endstreamMatch = _a[1];
	    /*
	    TODO: See if it makes sense to .slice() the stream contents, even though this
	    would require more memory space.
	    */
	    // Extract the stream content bytes
	    var contents = trimmed.subarray(startstreamIdx, endstreamIdx);
	    // Verify that the next characters denote the end of the stream
	    var endobjIdx = arrayIndexOf(trimmed, 'endobj', endstreamIdx);
	    if (arrayToString(trimmed, endstreamIdx, endobjIdx).trim() !== 'endstream') {
	        error('Invalid Stream!');
	    }
	    return [contents, trimmed.subarray(endstreamIdx + endstreamMatch.length)];
	};
	/**
	 * Accepts an array of bytes and a PDFDictionary as input. Checks to see if the
	 * first characters in the trimmed input make up a PDF Stream.
	 *
	 * If so, returns a tuple containing (1) a PDFObjectStream if it is an
	 * Object Stream, otherwise a PDFStream and (2) a subarray of the input wih the
	 * characters making up the parsed stream removed. The "onParseObjectStream" will
	 * be called with the PDFObjectStream if it is an Object Stream. Otherwise
	 * the "onParseStream" parse hander will be called.
	 *
	 * If not, null is returned.
	 */
	var parseStream$1 = (function (input, dict, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    // Parse the input bytes into the stream dictionary and content bytes
	    var res = parseStream(input, dict, parseHandlers);
	    if (!res)
	        return undefined;
	    var contents = res[0], remaining = res[1];
	    // If it's an Object Stream, parse it and return the indirect objects it contains
	    if (dict.getMaybe('Type') === PDFName.from('ObjStm')) {
	        if (dict.getMaybe('Filter') !== PDFName.from('FlateDecode')) {
	            error("Cannot decode \"" + dict.get('Filter') + "\" Object Streams");
	        }
	        var decoded = decodeStream$1(dict, contents);
	        var objectStream = parseObjectStream(dict, decoded, index, parseHandlers);
	        if (parseHandlers.onParseObjectStream) {
	            parseHandlers.onParseObjectStream(objectStream);
	        }
	        return [objectStream, remaining];
	    }
	    // Otherwise, return a PDFStream without parsing the content bytes
	    var stream = PDFRawStream$$1.from(dict, contents);
	    if (parseHandlers.onParseStream)
	        parseHandlers.onParseStream(stream);
	    return [stream, remaining];
	});

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Dictionary. Then checks if the subsequent characters
	 * make up a PDF Stream.
	 *
	 * If a PDFDictionary is found, but no PDFStream, then the dictionary is returned.
	 * If a PDFStream is also found, then it is instead returned. The second argument
	 * of the returned tuple contains a subarray of the input with the characters
	 * making up the parsed object removed.
	 *
	 * If no PDFDictionary is found at all, null is returned.
	 */
	var parseDictOrStream = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    // Attempt to parse a dictionary
	    var dictMatch = parseDict(input, index, parseHandlers);
	    if (!dictMatch)
	        return undefined;
	    var dict = dictMatch[0], r = dictMatch[1];
	    // Attempt to parse a stream next
	    var streamMatch = parseStream$1(r, dict, index, parseHandlers);
	    // Return stream if one was parsed, otherwise return the dictionary
	    if (streamMatch)
	        return streamMatch;
	    return [dict, r];
	};

	// tslint:disable-next-line:no-unused-variable
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Indirect Object.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Indirect Object and (2) a subarray of the input with the characters making up
	 * the parsed indirect object removed. The "onParseIndirectObj" parse handler will
	 * also be called with the PDFIndirectObject.
	 *
	 * If not, null is returned.
	 */
	var parseIndirectObj = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    var trimmed = trimArray(input);
	    var indirectObjRegex = /^(\d+)[\0\t\n\f\r ]*(\d+)[\0\t\n\f\r ]*obj/;
	    // Check that initial characters make up an indirect object "header"
	    var objIdx = arrayIndexOf(trimmed, 'obj');
	    var result = arrayToString(trimmed.subarray(0, objIdx + 3)).match(indirectObjRegex);
	    if (!result)
	        return undefined;
	    // eslint-disable-next-line no-unused-vars
	    var _fullMatch = result[0], objNum = result[1], genNum = result[2];
	    // Extract the bytes making up the object itself
	    var endobjIdx = arrayIndexOf(trimmed, 'endobj', objIdx);
	    var content = trimmed.subarray(objIdx + 3, endobjIdx);
	    // Try to parse the object bytes
	    var _a = parseDictOrStream(content, index, parseHandlers) ||
	        parseArray(content, index, parseHandlers) ||
	        parseName(content, parseHandlers) ||
	        parseString(content, parseHandlers) ||
	        parseIndirectRef(content, parseHandlers) ||
	        parseNumber(content, parseHandlers) ||
	        parseHexString(content, parseHandlers) ||
	        parseBool(content, parseHandlers) ||
	        parseNull(content, parseHandlers) ||
	        error('Failed to parse object contents'), contentObj = _a[0], r = _a[1];
	    if (trimArray(r).length > 0)
	        error('Incorrectly parsed object contents');
	    var indirectObj = PDFIndirectObject.of(contentObj).setReferenceNumbers(Number(objNum), Number(genNum));
	    if (parseHandlers.onParseIndirectObj) {
	        parseHandlers.onParseIndirectObj(indirectObj);
	    }
	    return [indirectObj, trimmed.subarray(endobjIdx + 6)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Trailer.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Trailer and (2) a subarray of the input with the characters making up the parsed
	 * trailer removed. The "onParseTrailer" parse handler will be called with the
	 * PDFTrailer object. The "onParseDict" parse handler will be called with the
	 * dictionary of the PDFTrailer, and the "onParseNumber" parse handler will be
	 * called with the "lastXRefOffset" of the PDFTrailer.
	 *
	 * If not, null is returned.
	 */
	var parseTrailer = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    var trimmed = trimArray(input);
	    var trailerRegex = /^trailer[\n|\r| ]*([^]+)startxref[\n|\r| ]+?(\d+)[\n|\r| ]+?%%EOF/;
	    // Find the nearest "%%EOF" of the input and match the regex up to that index
	    var eofIdx = arrayIndexOf(trimmed, '%%EOF');
	    var result = arrayToString(trimmed, 0, eofIdx + 5).match(trailerRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], dictStr = result[1], lastXRefOffsetStr = result[2];
	    // Parse the dictionary string into a PDFDictionary
	    var dictBytes = new Uint8Array(dictStr.split('').map(charCode));
	    var dict = (parseDict(dictBytes, index, parseHandlers) ||
	        error('Failed to parse trailer dictionary'))[0];
	    // Parse the xref offset string value into a PDFNumber
	    var offsetBytes = new Uint8Array(lastXRefOffsetStr.split('').map(charCode));
	    var lastXRefOffset = (parseNumber(offsetBytes, parseHandlers) ||
	        error('Failed to parse lastXRefOffset of trailer'))[0];
	    var trailer = PDFTrailer.from(lastXRefOffset.number, dict);
	    if (parseHandlers.onParseTrailer)
	        parseHandlers.onParseTrailer(trailer);
	    return [trailer, trimmed.subarray(fullMatch.length)];
	};
	/**
	 * Same as "parseTrailer" function, except does not look for the complete trailer.
	 * Specifically, the "trailer" keyword and the trailer's dictionary are not parsed.
	 *
	 * Documents that use Object Streams do not need the "trailer" keyword or the
	 * associated dictionary. (The Object Streams store the trailer's dictionary.)
	 */
	var parseTrailerWithoutDict = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    var trimmed = trimArray(input);
	    var trailerRegex = /^startxref[\n|\r| ]+?(\d+)[\n|\r| ]+?%%EOF/;
	    // Find the nearest "%%EOF" of the input and match the regex up to that index
	    var eofIdx = arrayIndexOf(trimmed, '%%EOF');
	    var result = arrayToString(trimmed, 0, eofIdx + 5).match(trailerRegex);
	    if (!result)
	        return undefined;
	    var fullMatch = result[0], lastXRefOffsetStr = result[1];
	    // Parse the xref offset string value into a PDFNumber
	    var offsetBytes = new Uint8Array(lastXRefOffsetStr.split('').map(charCode));
	    var lastXRefOffset = (parseNumber(offsetBytes, parseHandlers) ||
	        error('Failed to parse lastXRefOffset of trailer'))[0];
	    var trailer = PDFTrailer.from(lastXRefOffset.number, PDFDictionary$$1.from(new Map(), index));
	    if (parseHandlers.onParseTrailer)
	        parseHandlers.onParseTrailer(trailer);
	    return [trailer, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an string as input. Repeatedly applies a regex to the input that matches
	 * against entries of PDF Cross Reference Table subsections.
	 *
	 * If entries are found, then an array of Entry will be returned.
	 *
	 * If not, null is returned.
	 */
	var parseEntries = function (input) {
	    var trimmed = input.trim();
	    var entryRegex = /^(\d{10}) (\d{5}) (n|f)/;
	    var entriesArr = [];
	    var remainder = trimmed;
	    while (remainder.length > 0) {
	        var result = remainder.match(entryRegex);
	        if (!result)
	            return undefined;
	        var fullMatch = result[0], offset = result[1], genNum = result[2], isInUse = result[3];
	        entriesArr.push(Entry.create()
	            .setOffset(Number(offset))
	            .setGenerationNum(Number(genNum))
	            .setIsInUse(isInUse === 'n'));
	        remainder = remainder.substring(fullMatch.length).trim();
	    }
	    return entriesArr;
	};
	/**
	 * Accepts an string as input. Repeatedly applies a regex to the input that matches
	 * against subsections of PDF Cross Reference Tables.
	 *
	 * If subsections are found, then an array of Subsection will be returned.
	 *
	 * If not, null is returned.
	 */
	var parseSubsections = function (input) {
	    var trimmed = input.trim();
	    var sectionsRegex = /^(\d+) (\d+)((\n|\r| )*(\d{10} \d{5} (n|f)(\n|\r| )*)+)/;
	    var sectionsArr = [];
	    var remainder = trimmed;
	    while (remainder.length > 0) {
	        var result = remainder.match(sectionsRegex);
	        if (!result)
	            return undefined;
	        var fullMatch = result[0], firstObjNum = result[1], _objCount = result[2], entriesStr = result[3];
	        var entries = parseEntries(entriesStr);
	        if (!entries)
	            return undefined;
	        sectionsArr.push(Subsection.from(entries).setFirstObjNum(Number(firstObjNum)));
	        remainder = remainder.substring(fullMatch.length).trim();
	    }
	    return sectionsArr;
	};
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Cross Reference Table.
	 *
	 * If so, returns a tuple containing (1) an object representing the parsed PDF
	 * Cross Reference Table and (2) a subarray of the input with the characters making
	 * up the parsed cross reference table removed. The "onParseXRefTable" parse
	 * handler will also be called with the Table object.
	 *
	 * If not, null is returned.
	 */
	var parseXRefTable = function (input, _a) {
	    var onParseXRefTable = (_a === void 0 ? {} : _a).onParseXRefTable;
	    var trimmed = trimArray(input);
	    var xRefTableRegex = /^xref[\n|\r| ]*([\d|\n|\r| |f|n]+)/;
	    // Search for first character that isn't part of an xref table
	    var idx = 0;
	    while (String.fromCharCode(trimmed[idx]).match(/^[xref \n\r\dfn]/))
	        idx += 1;
	    // Try to match the regex up to that character to see if we've got an xref table
	    var result1 = arrayToString(trimmed, 0, idx).match(xRefTableRegex);
	    if (!result1)
	        return undefined;
	    // Parse the subsections of the xref table
	    var fullMatch = result1[0], contents = result1[1];
	    var subsections = parseSubsections(contents);
	    if (!subsections)
	        return undefined;
	    var xRefTable = Table.from(subsections);
	    if (onParseXRefTable)
	        onParseXRefTable(xRefTable);
	    return [xRefTable, trimmed.subarray(fullMatch.length)];
	};

	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * trimmed input make up a PDF Linearization Param Dict, followed by an xref table
	 * or stream, and finally a trailer.
	 *
	 * If so, returns a tuple containing (1) an object representing those three objects
	 * and (2) a subarray of the input with the characters making up the parsed objects
	 * removed. The "onParseDict" parse handler will be called with the linearization
	 * param dict. The "onParseLinearization" parse handler will also be called with
	 * objects representing the three parsed linearization objects.
	 *
	 * If not, null is returned.
	 */
	var parseLinearization = function (input, index, parseHandlers) {
	    if (parseHandlers === void 0) { parseHandlers = {}; }
	    var trimmed = trimArray(input);
	    // Try to parse a dictionary from the input
	    var paramDictMatch = parseIndirectObj(trimmed, index, parseHandlers);
	    if (!paramDictMatch)
	        return undefined;
	    // Make sure it is a Linearization Param Dictionary
	    var _a = paramDictMatch, paramDict = _a[0], remaining1 = _a[1];
	    if (!(paramDict.pdfObject instanceof PDFLinearizationParams)) {
	        return undefined;
	    }
	    // TODO: Do the parseHandlers really need to be passed to parseIndirectObj?
	    // Next we should find a cross reference stream or xref table
	    var xrefMatch = parseXRefTable(remaining1) ||
	        parseIndirectObj(remaining1, index, parseHandlers) ||
	        error('Found Linearization param dict but no first page xref table or stream.');
	    var _b = xrefMatch, xref = _b[0], remaining2 = _b[1];
	    var trailerMatch = parseTrailer(remaining2, index) ||
	        parseTrailerWithoutDict(remaining2, index);
	    // Per the PDF spec, a trailer should always be present - but some PDFs in the
	    // wild are missing them anyways
	    if (!trailerMatch) {
	        console.warn('Found Linearization param dict and cross reference index, but no associated trailer.');
	    }
	    var _c = trailerMatch || [undefined, undefined], trailer = _c[0], remaining3 = _c[1];
	    var linearization = { paramDict: paramDict, xref: xref, trailer: trailer };
	    if (parseHandlers.onParseLinearization) {
	        parseHandlers.onParseLinearization(linearization);
	    }
	    return [linearization, remaining3 || remaining2];
	};

	/* eslint-disable no-constant-condition */
	/**
	 * Accepts an array of bytes as input. Parses indirect objects from the input bytes
	 * until an xref table or trailer is found. The "onParseIndirectObj" parse
	 * handler is called with each indirect object that is parsed.
	 *
	 * Returns a subarray of the input bytes with the bytes making up the parsed
	 * indirect objects removed.
	 */
	var parseBodySection = function (input, index, parseHandlers) {
	    var remainder = input;
	    while (true) {
	        var result = parseIndirectObj(remainder, index, parseHandlers);
	        if (!result)
	            break;
	        remainder = result[1];
	    }
	    return remainder;
	};
	/**
	 * Accepts an array of bytes as input. Checks to see if the first characters in the
	 * input make up an xref table followed by a trailer, or just a trailer. The
	 * "onParseXRefTable" and "onParseTrailer" parseHandlers will be called with the
	 * parsed objects.
	 *
	 * Returns a subarray of the input bytes with the bytes making up the parsed
	 * objects removed.
	 */
	var parseFooterSection = function (input, index, parseHandlers) {
	    var remainder = input;
	    // Try to parse the XRef table (some PDFs omit the XRef table)
	    var parsedXRef = parseXRefTable(input, parseHandlers);
	    if (parsedXRef)
	        remainder = parsedXRef[1];
	    // Try to parse the trailer with and without dictionary, because some
	    // malformatted documents are missing the dictionary.
	    var parsedTrailer = parseTrailer(remainder, index, parseHandlers) ||
	        parseTrailerWithoutDict(remainder, index, parseHandlers);
	    if (!parsedTrailer)
	        return undefined;
	    remainder = parsedTrailer[1];
	    return remainder;
	};
	/**
	 * Accepts an array of bytes comprising a PDF document as input. Parses all the
	 * objects in the file in a sequential fashion, beginning with the header and
	 * ending with the last trailer.
	 *
	 * The XRef tables/streams in the input are not used to locate and parse objects
	 * as needed. Rather, the whole document is parsed and stored in memory at once.
	 */
	var parseDocument = function (input, index, parseHandlers) {
	    // TODO: Figure out way to clean comments without messing stream content up
	    // const cleaned = removeComments(input);
	    var cleaned = input;
	    // Parse the document header
	    var remainder;
	    _a = parseHeader(cleaned, parseHandlers) || error('PDF is missing a header'), remainder = _a[1];
	    // If document is linearized, we'll need to parse the linearization
	    // dictionary and First-Page XRef table/stream next...
	    var linearizationMatch = parseLinearization(remainder, index, parseHandlers);
	    if (linearizationMatch)
	        remainder = linearizationMatch[1];
	    // Parse each body of the document and its corresponding footer.
	    // (if document does not have update sections, loop will only occur once)
	    while (remainder) {
	        remainder = parseBodySection(remainder, index, parseHandlers);
	        remainder = parseFooterSection(remainder, index, parseHandlers);
	    }
	    var _a;
	};

	var PDFParser = /** @class */ (function () {
	    function PDFParser() {
	        var _this = this;
	        this.activelyParsing = false;
	        this.maxObjectNumber = -1;
	        this.arrays = [];
	        this.dictionaries = [];
	        this.body = new Map();
	        this.updates = [];
	        this.parse = function (bytes, index) {
	            validate(index, isInstance(PDFObjectIndex), '"index" must be an instance of PDFObjectIndex');
	            if (_this.activelyParsing)
	                error('Cannot parse documents concurrently');
	            _this.activelyParsing = true;
	            _this.maxObjectNumber = -1;
	            _this.arrays = [];
	            _this.dictionaries = [];
	            _this.catalog = undefined;
	            _this.header = undefined;
	            _this.body = new Map();
	            _this.xRefTable = undefined;
	            _this.trailer = undefined;
	            _this.linearization = undefined;
	            _this.updates = [];
	            try {
	                parseDocument(bytes, index, _this.parseHandlers);
	                _this.activelyParsing = false;
	            }
	            catch (e) {
	                _this.activelyParsing = false;
	                throw e;
	            }
	            return {
	                maxObjectNumber: _this.maxObjectNumber,
	                catalog: _this.catalog,
	                arrays: _this.arrays,
	                dictionaries: _this.dictionaries,
	                original: {
	                    header: _this.header,
	                    linearization: _this.linearization,
	                    body: _this.body,
	                    xRefTable: _this.xRefTable,
	                    trailer: _this.trailer,
	                },
	                // Drop the last element, because it will always be empty:
	                updates: initial_1(_this.updates),
	            };
	        };
	        this.handleArray = function (array) {
	            _this.arrays.push(array);
	        };
	        this.handleDict = function (dict) {
	            _this.dictionaries.push(dict);
	            if (dict instanceof PDFCatalog)
	                _this.catalog = dict;
	        };
	        this.handleObjectStream = function (_a) {
	            var objects = _a.objects;
	            objects.forEach(function (indirectObj) {
	                if (_this.updates.length > 0) {
	                    last_1(_this.updates).body.set(indirectObj.getReference(), indirectObj);
	                }
	                else {
	                    _this.body.set(indirectObj.getReference(), indirectObj);
	                }
	            });
	        };
	        this.handleIndirectObj = function (indirectObj) {
	            if (_this.updates.length > 0) {
	                last_1(_this.updates).body.set(indirectObj.getReference(), indirectObj);
	            }
	            else {
	                _this.body.set(indirectObj.getReference(), indirectObj);
	            }
	            if (indirectObj.reference.objectNumber > _this.maxObjectNumber) {
	                _this.maxObjectNumber = indirectObj.reference.objectNumber;
	            }
	        };
	        this.handleHeader = function (header) {
	            _this.header = header;
	        };
	        this.handleXRefTable = function (xRefTable) {
	            if (!_this.trailer)
	                _this.xRefTable = xRefTable;
	            else
	                last_1(_this.updates).xRefTable = xRefTable;
	        };
	        this.handleTrailer = function (trailer) {
	            if (!_this.trailer)
	                _this.trailer = trailer;
	            else
	                last_1(_this.updates).trailer = trailer;
	            _this.updates.push({
	                body: new Map(),
	                xRefTable: undefined,
	                trailer: undefined,
	            });
	        };
	        this.handleLinearization = function (linearization) {
	            _this.linearization = linearization;
	        };
	        this.parseHandlers = {
	            onParseArray: this.handleArray,
	            onParseDict: this.handleDict,
	            onParseObjectStream: this.handleObjectStream,
	            onParseIndirectObj: this.handleIndirectObj,
	            onParseHeader: this.handleHeader,
	            onParseXRefTable: this.handleXRefTable,
	            onParseTrailer: this.handleTrailer,
	            onParseLinearization: this.handleLinearization,
	        };
	    }
	    return PDFParser;
	}());

	var PDFDocumentFactory = /** @class */ (function () {
	    function PDFDocumentFactory() {
	    }
	    /**
	     * Creates a new [[PDFDocument]] object. Useful for creating new PDF documents.
	     *
	     * @returns The new [[PDFDocument]] object.
	     */
	    PDFDocumentFactory.create = function () {
	        var index = PDFObjectIndex.create();
	        var refs = {
	            catalog: PDFIndirectReference.forNumbers(1, 0),
	            pageTree: PDFIndirectReference.forNumbers(2, 0),
	        };
	        var catalog = PDFCatalog.create(refs.pageTree, index);
	        var pageTree = PDFPageTree.createRootNode(PDFArray$$1.fromArray([], index), index);
	        index.set(refs.catalog, catalog);
	        index.set(refs.pageTree, pageTree);
	        return PDFDocument.from(catalog, 2, index);
	    };
	    /**
	     * Loads an existing PDF document contained from the specified `Uint8Array`
	     * into a [[PDFDocument]] object. Useful for modifying existing PDF documents.
	     *
	     * @param data A `Uint8Array` containing the raw bytes of a PDF document.
	     *
	     * @returns A [[PDFDocument]] object initialized from the provided document.
	     */
	    PDFDocumentFactory.load = function (data) {
	        validate(data, isInstance(Uint8Array), '"PDFDocumentFactory.load()" must be called with an argument of type Uint8Array.');
	        var index = PDFObjectIndex.create();
	        var pdfParser = new PDFParser();
	        var parsedPdf = pdfParser.parse(data, index);
	        var indexMap = PDFDocumentFactory.normalize(parsedPdf);
	        index.index = indexMap;
	        var pushGraphicsStateContentStream = PDFContentStream.of(PDFDictionary$$1.from({}, index), QOps.q.operator);
	        var popGraphicsStateContentStream = PDFContentStream.of(PDFDictionary$$1.from({}, index), QOps.Q.operator);
	        var maxObjectNumber = parsedPdf.maxObjectNumber;
	        var ref1 = PDFIndirectReference.forNumbers(maxObjectNumber + 1, 0);
	        var ref2 = PDFIndirectReference.forNumbers(maxObjectNumber + 2, 0);
	        index.set(ref1, pushGraphicsStateContentStream);
	        index.set(ref2, popGraphicsStateContentStream);
	        index.pushGraphicsStateContentStream = ref1;
	        index.popGraphicsStateContentStream = ref2;
	        return PDFDocument.from(parsedPdf.catalog, maxObjectNumber + 2, index);
	    };
	    // TODO: Need to throw out objects with "free" obj numbers...
	    /** @hidden */
	    PDFDocumentFactory.normalize = function (_a) {
	        var dictionaries = _a.dictionaries, arrays = _a.arrays, body = _a.original.body, updates = _a.updates;
	        var index = new Map();
	        // Remove Object Streams and Cross Reference Streams, because we've already
	        // parsed the Object Streams into PDFIndirectObjects, and will just write
	        // them as such and use normal xref tables to reference them.
	        var shouldKeep = function (object) {
	            return !(object instanceof PDFObjectStream) &&
	                !(object instanceof PDFStream$$1 &&
	                    object.dictionary.getMaybe('Type') === PDFName.from('XRef'));
	        };
	        // Initialize index with objects in the original body
	        body.forEach(function (_a, ref) {
	            var pdfObject = _a.pdfObject;
	            if (shouldKeep(pdfObject))
	                index.set(ref, pdfObject);
	        });
	        // Update index with most recent version of each object
	        // TODO: This could be omitted to recover a previous version of the document...
	        updates.forEach(function (_a) {
	            var updateBody = _a.body;
	            updateBody.forEach(function (_a, ref) {
	                var pdfObject = _a.pdfObject;
	                if (shouldKeep(pdfObject))
	                    index.set(ref, pdfObject);
	            });
	        });
	        return index;
	    };
	    return PDFDocumentFactory;
	}());

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString$1.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$7 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$2.call(hasOwnProperty$5).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map$1 = _getNative(_root, 'Map');

	var _Map = Map$1;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED$2);
	  return this;
	}

	var _setCacheAdd = setCacheAdd;

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	var _setCacheHas = setCacheHas;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new _MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
	SetCache.prototype.has = _setCacheHas;

	var _SetCache = SetCache;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	var _arraySome = arraySome;

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	var _cacheHas = cacheHas;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!_arraySome(other, function(othValue, othIndex) {
	            if (!_cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	var _equalArrays = equalArrays;

	/** Built-in value references. */
	var Uint8Array$1 = _root.Uint8Array;

	var _Uint8Array = Uint8Array$1;

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	var _mapToArray = mapToArray;

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	var _setToArray = setToArray;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$1 = 1,
	    COMPARE_UNORDERED_FLAG$1 = 2;

	/** `Object#toString` result references. */
	var boolTag$2 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    mapTag$1 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$1 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$1 = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$1 = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag$1:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag$2:
	    case dateTag$1:
	    case numberTag$2:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq_1(+object, +other);

	    case errorTag$1:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag$1:
	    case stringTag$2:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag$1:
	      var convert = _mapToArray;

	    case setTag$1:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
	      convert || (convert = _setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG$1;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag$1:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	var _equalByTag = equalByTag;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$2 = 1;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
	      objProps = _getAllKeys(object),
	      objLength = objProps.length,
	      othProps = _getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	var _equalObjects = equalObjects;

	/* Built-in method references that are verified to be native. */
	var DataView$1 = _getNative(_root, 'DataView');

	var _DataView = DataView$1;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$2 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$2 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$2 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
	    (_Map && getTag(new _Map) != mapTag$2) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$2) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$2;
	        case mapCtorString: return mapTag$2;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$2;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$3 = 1;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    objectTag$3 = '[object Object]';

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray_1(object),
	      othIsArr = isArray_1(other),
	      objTag = objIsArr ? arrayTag$1 : _getTag(object),
	      othTag = othIsArr ? arrayTag$1 : _getTag(other);

	  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
	  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

	  var objIsObj = objTag == objectTag$3,
	      othIsObj = othTag == objectTag$3,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer_1(object)) {
	    if (!isBuffer_1(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new _Stack);
	    return (objIsArr || isTypedArray_1(object))
	      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
	    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new _Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new _Stack);
	  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	var _baseIsEqualDeep = baseIsEqualDeep;

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
	    return value !== value && other !== other;
	  }
	  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	var _baseIsEqual = baseIsEqual;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$4 = 1,
	    COMPARE_UNORDERED_FLAG$2 = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new _Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	var _baseIsMatch = baseIsMatch;

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject_1(value);
	}

	var _isStrictComparable = isStrictComparable;

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys_1(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, _isStrictComparable(value)];
	  }
	  return result;
	}

	var _getMatchData = getMatchData;

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	var _matchesStrictComparable = matchesStrictComparable;

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = _getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || _baseIsMatch(object, source, matchData);
	  };
	}

	var _baseMatches = baseMatches;

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol_1(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	var _isKey = isKey;

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || _MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = _MapCache;

	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize_1(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = _memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	var _stringToPath = stringToPath;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }
	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** Used as references for various `Number` constants. */
	var INFINITY$2 = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = _castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	var _baseGet = baseGet;

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : _baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	var get_1 = get;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) &&
	    (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG$5 = 1,
	    COMPARE_UNORDERED_FLAG$3 = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (_isKey(path) && _isStrictComparable(srcValue)) {
	    return _matchesStrictComparable(_toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get_1(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn_1(object, path)
	      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
	  };
	}

	var _baseMatchesProperty = baseMatchesProperty;

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return _baseGet(object, path);
	  };
	}

	var _basePropertyDeep = basePropertyDeep;

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
	}

	var property_1 = property;

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity_1;
	  }
	  if (typeof value == 'object') {
	    return isArray_1(value)
	      ? _baseMatchesProperty(value[0], value[1])
	      : _baseMatches(value);
	  }
	  return property_1(value);
	}

	var _baseIteratee = baseIteratee;

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike_1(collection) ? Array(collection.length) : [];

	  _baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	var _baseMap = baseMap;

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;

	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}

	var _baseSortBy = baseSortBy;

	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol_1(value);

	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol_1(other);

	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}

	var _compareAscending = compareAscending;

	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;

	  while (++index < length) {
	    var result = _compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}

	var _compareMultiple = compareMultiple;

	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = _arrayMap(iteratees.length ? iteratees : [identity_1], _baseUnary(_baseIteratee));

	  var result = _baseMap(collection, function(value, key, collection) {
	    var criteria = _arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });

	  return _baseSortBy(result, function(object, other) {
	    return _compareMultiple(object, other, orders);
	  });
	}

	var _baseOrderBy = baseOrderBy;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax$2 = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax$2(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax$2(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
	  return _defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return _setToString(_overRest(func, start, identity_1), func + '');
	}

	var _baseRest = baseRest;

	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, [function(o) { return o.user; }]);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	 */
	var sortBy = _baseRest(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
	});

	var sortBy_1 = sortBy;

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray_1(collection) ? _arrayMap : _baseMap;
	  return func(collection, _baseIteratee(iteratee, 3));
	}

	var map_1 = map;

	/**
	 * Creates a flattened array of values by running each element in `collection`
	 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	 * with three arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * function duplicate(n) {
	 *   return [n, n];
	 * }
	 *
	 * _.flatMap([1, 2], duplicate);
	 * // => [1, 1, 2, 2]
	 */
	function flatMap(collection, iteratee) {
	  return _baseFlatten(map_1(collection, iteratee), 1);
	}

	var flatMap_1 = flatMap;

	var computeIndices = function (objectStream) {
	    return objectStream.objects.map(function (object, index) { return ({
	        objectNumber: object.reference.objectNumber,
	        generationNumber: object.reference.generationNumber,
	        index: index,
	    }); });
	};
	var PDFXRefStreamFactory = /** @class */ (function () {
	    function PDFXRefStreamFactory() {
	    }
	    PDFXRefStreamFactory.forOffsetsAndObjectStream = function (offsets, objectStream, catalog, index) {
	        var indices = computeIndices(objectStream.pdfObject);
	        var merged = sortBy_1(offsets.concat(indices), 'objectNumber');
	        var xrefObjectNumber = last_1(merged).objectNumber + 1;
	        var xrefStream = PDFXRefStream.create({
	            Size: PDFNumber.fromNumber(xrefObjectNumber + 1),
	            Root: catalog,
	        }, index);
	        merged.push({
	            objectNumber: xrefObjectNumber,
	            generationNumber: 0,
	            startOffset: last_1(offsets).startOffset,
	        });
	        xrefStream.addFreeObjectEntry(0, 65535);
	        var xrefSections = [{ firstObjectNumber: 0, size: 1 }];
	        merged.forEach(function (obj, idx) {
	            var shouldStartNewSection = idx !== 0 && obj.objectNumber - merged[idx - 1].objectNumber > 1;
	            if (shouldStartNewSection) {
	                xrefSections.push({ firstObjectNumber: obj.objectNumber, size: 1 });
	            }
	            else {
	                last_1(xrefSections).size += 1;
	            }
	            if ('startOffset' in obj) {
	                xrefStream.addUncompressedObjectEntry(obj.startOffset, obj.generationNumber);
	            }
	            if ('index' in obj) {
	                xrefStream.addCompressedObjectEntry(objectStream.reference.objectNumber, obj.index);
	            }
	        });
	        xrefStream.dictionary.set(PDFName.from('Index'), PDFArray$$1.fromArray(flatMap_1(xrefSections, function (_a) {
	            var firstObjectNumber = _a.firstObjectNumber, size = _a.size;
	            return [
	                PDFNumber.fromNumber(firstObjectNumber),
	                PDFNumber.fromNumber(size),
	            ];
	        }), index));
	        xrefStream.encode();
	        return PDFIndirectObject.of(xrefStream).setReferenceNumbers(xrefObjectNumber, 0);
	    };
	    return PDFXRefStreamFactory;
	}());

	var PDFXRefTableFactory = /** @class */ (function () {
	    function PDFXRefTableFactory() {
	    }
	    PDFXRefTableFactory.forOffsets = function (offsets) {
	        var table = new Table();
	        var subsection = new Subsection().setFirstObjNum(0);
	        subsection.addEntry(Entry.create()
	            .setOffset(0)
	            .setGenerationNum(65535)
	            .setIsInUse(false));
	        table.addSubsection(subsection);
	        offsets.forEach(function (info, idx) {
	            // Add new subsection if needed...
	            var prevObjectMeta = offsets[idx - 1] || info;
	            if (info.objectNumber - prevObjectMeta.objectNumber > 1) {
	                subsection = new Subsection().setFirstObjNum(info.objectNumber);
	                table.addSubsection(subsection);
	            }
	            subsection.addEntry(Entry.create()
	                .setOffset(info.startOffset)
	                .setGenerationNum(0)
	                .setIsInUse(true));
	        });
	        return table;
	    };
	    return PDFXRefTableFactory;
	}());

	var createIndirectObjectsFromIndex = function (_a) {
	    var index = _a.index;
	    var catalogRef;
	    var streamObjects = [];
	    var nonStreamObjects = [];
	    index.forEach(function (object, ref) {
	        if (object instanceof PDFCatalog)
	            catalogRef = ref;
	        var array = object instanceof PDFStream$$1 ? streamObjects : nonStreamObjects;
	        array.push(PDFIndirectObject.of(object).setReference(ref));
	    });
	    return { catalogRef: catalogRef, streamObjects: streamObjects, nonStreamObjects: nonStreamObjects };
	};
	var computeOffsets = function (startingOffset, indirectObjects) {
	    return indirectObjects.map(function (object) { return ({
	        objectNumber: object.reference.objectNumber,
	        generationNumber: object.reference.generationNumber,
	        startOffset: startingOffset,
	        endOffset: (startingOffset += object.bytesSize()),
	    }); });
	};
	var PDFDocumentWriter = /** @class */ (function () {
	    function PDFDocumentWriter() {
	    }
	    /**
	     * Converts a [[PDFDocument]] object into the raw bytes of a PDF document.
	     * These raw bytes could, for example, be saved as a file and opened in a
	     * PDF reader.
	     *
	     * `options.useObjectStreams` controls whether or not to use Object Streams
	     * when saving the document. Using Object Streams will result in a smaller
	     * file size for many documents. This option is `true` by default. If set to
	     * `false`, then Object Streams will not be used.
	     *
	     * @param pdfDoc  The [[PDFDocument]] to be converted to bytes.
	     * @param options An options object.
	     *
	     * @returns A `Uint8Array` containing the raw bytes of a PDF document.
	     */
	    PDFDocumentWriter.saveToBytes = function (pdfDoc, options) {
	        if (options === void 0) { options = { useObjectStreams: true }; }
	        return options.useObjectStreams === false
	            ? PDFDocumentWriter.saveToBytesWithXRefTable(pdfDoc)
	            : PDFDocumentWriter.saveToBytesWithObjectStreams(pdfDoc);
	    };
	    PDFDocumentWriter.saveToBytesWithXRefTable = function (pdfDoc) {
	        /* ===== (1) Compute indirect object offsets and sort by objectnumber ===== */
	        var _a = createIndirectObjectsFromIndex(pdfDoc.index), catalogRef = _a.catalogRef, streamObjects = _a.streamObjects, nonStreamObjects = _a.nonStreamObjects;
	        if (!catalogRef)
	            error('Missing PDFCatalog');
	        streamObjects.forEach(function (streamObj) {
	            if (isFunction_1(streamObj.pdfObject.encode))
	                streamObj.pdfObject.encode();
	        });
	        var merged = streamObjects.concat(nonStreamObjects);
	        var offsets = computeOffsets(pdfDoc.header.bytesSize(), merged);
	        var sortedOffsets = sortBy_1(offsets, 'objectNumber');
	        /* ===== (2) Create XRefTable and Trailer ===== */
	        var table = PDFXRefTableFactory.forOffsets(sortedOffsets);
	        var tableOffset = last_1(offsets).endOffset;
	        var trailer = PDFTrailer.from(tableOffset, PDFDictionary$$1.from({
	            Size: PDFNumber.fromNumber(last_1(offsets).objectNumber + 1),
	            Root: catalogRef,
	        }, pdfDoc.index));
	        /* ===== (3) Create buffer and copy objects into it ===== */
	        var bufferSize = tableOffset + table.bytesSize() + trailer.bytesSize();
	        var buffer = new Uint8Array(bufferSize);
	        var remaining = pdfDoc.header.copyBytesInto(buffer);
	        remaining = merged.reduce(function (remBytes, indirectObj) { return indirectObj.copyBytesInto(remBytes); }, remaining);
	        remaining = table.copyBytesInto(remaining);
	        remaining = trailer.copyBytesInto(remaining);
	        return buffer;
	    };
	    PDFDocumentWriter.saveToBytesWithObjectStreams = function (pdfDoc) {
	        /* ===== (1) Split objects into streams and nonstreams ===== */
	        var _a = createIndirectObjectsFromIndex(pdfDoc.index), catalogRef = _a.catalogRef, streamObjects = _a.streamObjects, nonStreamObjects = _a.nonStreamObjects;
	        if (!catalogRef)
	            error('Missing PDFCatalog');
	        streamObjects.forEach(function (streamObj) {
	            if (isFunction_1(streamObj.pdfObject.encode))
	                streamObj.pdfObject.encode();
	        });
	        /* ===== (2) Create ObjectStream ===== */
	        var objectStream = PDFObjectStream.create(pdfDoc.index, nonStreamObjects);
	        objectStream.encode();
	        var objectStreamIndObj = PDFIndirectObject.of(objectStream).setReferenceNumbers(pdfDoc.maxObjNum + 1, 0);
	        streamObjects.push(objectStreamIndObj);
	        /* ===== (3) Compute indirect object offsets ===== */
	        var offsets = computeOffsets(pdfDoc.header.bytesSize(), streamObjects);
	        var trailerOffset = last_1(offsets).endOffset;
	        /* ===== (4) Create XRefStream and Trailer ===== */
	        var xrefStream = PDFXRefStreamFactory.forOffsetsAndObjectStream(offsets, objectStreamIndObj, catalogRef, pdfDoc.index);
	        streamObjects.push(xrefStream);
	        var trailer = PDFTrailer.from(trailerOffset);
	        /* ===== (5) Create buffer and copy objects into it ===== */
	        var bufferSize = trailerOffset + xrefStream.bytesSize() + trailer.bytesSize();
	        var buffer = new Uint8Array(bufferSize);
	        var remaining = pdfDoc.header.copyBytesInto(buffer);
	        remaining = streamObjects.reduce(function (remBytes, obj) { return obj.copyBytesInto(remBytes); }, remaining);
	        remaining = trailer.copyBytesInto(remaining);
	        return buffer;
	    };
	    return PDFDocumentWriter;
	}());

	/**
	 * Modify the current clipping path by intersecting it with the current path,
	 * using the nonzero winding number rule to determine which regions lie inside
	 * the clipping path.
	 */
	var W = PDFOperator.createSingletonOp('W');
	/**
	 * Modify the current clipping path by intersecting it with the current path,
	 * using the nonzero winding number rule to determine which regions lie inside
	 * the clipping path.
	 */
	W.asterisk = PDFOperator.createSingletonOp('W*');

	var __extends$k = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the current colour space to use for stroking operations. The operand name
	 * shall be a name object. If the colour space is one that can be specified by a
	 * name and no additional parameters (DeviceGray, DeviceRGB, DeviceCMYK, and
	 * certain cases of Pattern), the name may be specified directly. Otherwise, it
	 * shall be a name defined in the ColorSpace subdictionary of the current resource
	 * dictionary; the associated value shall be an array describing the colour space.
	 *
	 * The names DeviceGray, DeviceRGB, DeviceCMYK, and Pattern always identify the
	 * corresponding colour spaces directly; they never refer to resources in the
	 * ColorSpace subdictionary.
	 *
	 * The CS operator shall also set the current stroking colour to its initial value,
	 * which depends on the colour space:
	 *
	 * In a DeviceGray, DeviceRGB, CalGray, or CalRGB colour space, the initial colour
	 * shall have all components equal to 0.0.
	 *
	 * In a DeviceCMYK colour space, the initial colour shall be [0.0 0.0 0.0 1.0].
	 *
	 * In a Lab or ICCBased colour space, the initial colour shall have all components
	 * equal to 0.0 unless that falls outside the intervals specified by the space’s
	 * Range entry, in which case the nearest valid value shall be substituted.
	 *
	 * In an Indexed colour space, the initial colour value shall be 0.
	 *
	 * In a Separation or DeviceN colour space, the initial tint value shall be 1.0 for
	 * all colorants.
	 *
	 * In a Pattern colour space, the initial colour shall be a pattern object that
	 * causes nothing to be painted.
	 */
	var CS = /** @class */ (function (_super) {
	    __extends$k(CS, _super);
	    function CS(name) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.name + " CS\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(name, or(isString_1, isInstance(PDFName)), 'CS operator arg "name" must be a string or PDFName.');
	        _this.name = isString_1(name) ? PDFName.from(name) : name;
	        return _this;
	    }
	    CS.of = function (name) { return new CS(name); };
	    return CS;
	}(PDFOperator));
	/**
	 * Same as CS but used for nonstroking operations.
	 */
	var cs = /** @class */ (function (_super) {
	    __extends$k(cs, _super);
	    function cs(name) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.name + " cs\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(name, or(isString_1, isInstance(PDFName)), 'cs operator arg "name" must be a string or PDFName.');
	        _this.name = isString_1(name) ? PDFName.from(name) : name;
	        return _this;
	    }
	    cs.of = function (name) { return new cs(name); };
	    return cs;
	}(PDFOperator));

	var __extends$l = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the stroking colour space to DeviceGray (or the DefaultGray colour space)
	 * and set the gray level to use for stroking operations. gray shall be a number
	 * between 0.0 (black) and 1.0 (white).
	 */
	var G = /** @class */ (function (_super) {
	    __extends$l(G, _super);
	    function G(gray) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.gray + " G\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(gray, and(isNumber$1, isInRange(0.0, 1.0)), 'G operator arg "gray" must be a number between 0.0 and 1.0.');
	        _this.gray = gray;
	        return _this;
	    }
	    G.of = function (gray) { return new G(gray); };
	    return G;
	}(PDFOperator));
	/**
	 * Same as G but used for nonstroking operations.
	 */
	var g = /** @class */ (function (_super) {
	    __extends$l(g, _super);
	    function g(gray) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.gray + " g\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(gray, and(isNumber$1, isInRange(0.0, 1.0)), 'g operator arg "gray" must be a number between 0.0 and 1.0.');
	        _this.gray = gray;
	        return _this;
	    }
	    g.of = function (gray) { return new g(gray); };
	    return g;
	}(PDFOperator));

	var __extends$m = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the stroking colour space to DeviceCMYK (or the DefaultCMYK colour space and
	 * set the colour to use for stroking operations. Each operand shall be a number
	 * between 0.0 (zero concentration) and 1.0 (maximum concentration). The behaviour
	 * of this operator is affected by the overprint mode.
	 */
	var K = /** @class */ (function (_super) {
	    __extends$m(K, _super);
	    function K(c, m, y, k) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.c + " " + _this.m + " " + _this.y + " " + _this.k + " K\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(c, and(isNumber$1, isInRange(0.0, 1.0)), 'K operator arg "c" must be a number between 0.0 and 1.0.');
	        validate(m, and(isNumber$1, isInRange(0.0, 1.0)), 'K operator arg "m" must be a number between 0.0 and 1.0.');
	        validate(y, and(isNumber$1, isInRange(0.0, 1.0)), 'K operator arg "y" must be a number between 0.0 and 1.0.');
	        validate(k, and(isNumber$1, isInRange(0.0, 1.0)), 'K operator arg "k" must be a number between 0.0 and 1.0.');
	        _this.c = c;
	        _this.m = m;
	        _this.y = y;
	        _this.k = k;
	        return _this;
	    }
	    K.of = function (c, m, y, k) { return new K(c, m, y, k); };
	    return K;
	}(PDFOperator));
	/**
	 * Same as K but used for nonstroking operations.
	 */
	var k = /** @class */ (function (_super) {
	    __extends$m(k, _super);
	    function k(c, m, y, key) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.c + " " + _this.m + " " + _this.y + " " + _this.k + " k\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(c, and(isNumber$1, isInRange(0.0, 1.0)), 'k operator arg "c" must be a number between 0.0 and 1.0.');
	        validate(m, and(isNumber$1, isInRange(0.0, 1.0)), 'k operator arg "m" must be a number between 0.0 and 1.0.');
	        validate(y, and(isNumber$1, isInRange(0.0, 1.0)), 'k operator arg "y" must be a number between 0.0 and 1.0.');
	        validate(key, and(isNumber$1, isInRange(0.0, 1.0)), 'k operator arg "k" must be a number between 0.0 and 1.0.');
	        _this.c = c;
	        _this.m = m;
	        _this.y = y;
	        _this.k = key;
	        return _this;
	    }
	    k.of = function (c, m, y, key) {
	        return new k(c, m, y, key);
	    };
	    return k;
	}(PDFOperator));

	var __extends$n = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the stroking colour space to DeviceRGB (or the DefaultRGB colour space) and
	 * set the colour to use for stroking operations. Each operand shall be a number
	 * between 0.0 (minimum intensity) and 1.0 (maximum intensity).
	 */
	var RG = /** @class */ (function (_super) {
	    __extends$n(RG, _super);
	    function RG(r, g, b) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.r + " " + _this.g + " " + _this.b + " RG\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(r, and(isNumber$1, isInRange(0.0, 1.0)), 'RG operator arg "r" must be a number between 0.0 and 1.0.');
	        validate(g, and(isNumber$1, isInRange(0.0, 1.0)), 'RG operator arg "g" must be a number between 0.0 and 1.0.');
	        validate(b, and(isNumber$1, isInRange(0.0, 1.0)), 'RG operator arg "b" must be a number between 0.0 and 1.0.');
	        _this.r = r;
	        _this.g = g;
	        _this.b = b;
	        return _this;
	    }
	    RG.of = function (r, g, b) { return new RG(r, g, b); };
	    return RG;
	}(PDFOperator));
	/**
	 * Same as RG but used for nonstroking operations.
	 */
	var rg = /** @class */ (function (_super) {
	    __extends$n(rg, _super);
	    function rg(r, g, b) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.r + " " + _this.g + " " + _this.b + " rg\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(r, and(isNumber$1, isInRange(0.0, 1.0)), 'rg operator arg "r" must be a number between 0.0 and 1.0.');
	        validate(g, and(isNumber$1, isInRange(0.0, 1.0)), 'rg operator arg "g" must be a number between 0.0 and 1.0.');
	        validate(b, and(isNumber$1, isInRange(0.0, 1.0)), 'rg operator arg "b" must be a number between 0.0 and 1.0.');
	        _this.r = r;
	        _this.g = g;
	        _this.b = b;
	        return _this;
	    }
	    rg.of = function (r, g, b) { return new rg(r, g, b); };
	    return rg;
	}(PDFOperator));

	var __extends$o = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Same as SC but also supports Pattern, Separation, DeviceN and ICCBased colour
	 * spaces.
	 *
	 * If the current stroking colour space is a Separation, DeviceN, or ICCBased
	 * colour space, the operands c1...cn shall be numbers. The number of operands and
	 * their interpretation depends on the colour space.
	 *
	 * If the current stroking colour space is a Pattern colour space, name shall be
	 * the name of an entry in the Pattern subdictionary of the current resource
	 * dictionary. For an uncoloured tiling pattern
	 * (PatternType = 1 and PaintType = 2), c1...cn
	 * shall be component values specifying a colour in the pattern’s underlying colour
	 * space. For other types of patterns, these operands shall not be specified.
	 */
	var SCN = /** @class */ (function (_super) {
	    __extends$o(SCN, _super);
	    // TODO: Confirm whether or not a number[] and string will ever both be present?
	    function SCN(c, name) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.name
	                ? _this.c.join(' ') + " " + _this.name + " SCN\n"
	                : _this.c.join(' ') + " SCN\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr(c, isNumber$1, 'SCN operator args "c" must be all be numbers.');
	        validate(name, or(isString_1, isInstance(PDFName), isNil_1), 'SCN operator arg "name" must be a string or PDFName.');
	        _this.c = c;
	        _this.name = isString_1(name) ? PDFName.from(name) : name;
	        return _this;
	    }
	    SCN.of = function (c, name) { return new SCN(c, name); };
	    return SCN;
	}(PDFOperator));
	/**
	 * Same as SCN but used for nonstroking operations.
	 */
	var scn = /** @class */ (function (_super) {
	    __extends$o(scn, _super);
	    function scn(c, name) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.name
	                ? _this.c.join(' ') + " " + _this.name + " scn\n"
	                : _this.c.join(' ') + " scn\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr(c, isNumber$1, 'scn operator args "c" must be all be numbers.');
	        validate(name, or(isString_1, isInstance(PDFName), isNil_1), 'scn operator arg "name" must be a string or PDFName.');
	        _this.c = c;
	        _this.name = isString_1(name) ? PDFName.from(name) : name;
	        return _this;
	    }
	    scn.of = function (c, name) { return new scn(c, name); };
	    return scn;
	}(PDFOperator));

	var __extends$p = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the colour to use for stroking operations in a device, CIE-based
	 * (other than ICCBased), or Indexed colour space. The number of operands required
	 * and their interpretation depends on the current stroking colour space:
	 *
	 * For DeviceGray, CalGray, and Indexed colour spaces, one operand shall be
	 * required (n = 1).
	 *
	 * For DeviceRGB, CalRGB, and Lab colour spaces, three operands shall be
	 * required (n = 3).
	 *
	 * For DeviceCMYK, four operands shall be required (n = 4).
	 */
	var SC = /** @class */ (function (_super) {
	    __extends$p(SC, _super);
	    // TODO: The number of operands required here depends on the current
	    // color space. So shouldn't really be restricting it to just 4 numbers.
	    function SC() {
	        var c = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            c[_i] = arguments[_i];
	        }
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.c.join(' ') + " SC\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(c[0], isNumber$1, 'SC operator args "c" must be a number.');
	        validate(c[1], or(isNumber$1, isNil_1), 'SC operator args "c" must be a number.');
	        validate(c[2], or(isNumber$1, isNil_1), 'SC operator args "c" must be a number.');
	        validate(c[3], or(isNumber$1, isNil_1), 'SC operator args "c" must be a number.');
	        _this.c = c;
	        return _this;
	    }
	    SC.of = function () {
	        var c = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            c[_i] = arguments[_i];
	        }
	        return new (SC.bind.apply(SC, [void 0].concat(c)))();
	    };
	    return SC;
	}(PDFOperator));
	/**
	 * Same as SC but used for nonstroking operations.
	 */
	var sc = /** @class */ (function (_super) {
	    __extends$p(sc, _super);
	    // TODO: The number of operands required here depends on the current
	    // color space. So shouldn't really be restricting it to just 4 numbers.
	    function sc() {
	        var c = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            c[_i] = arguments[_i];
	        }
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.c.join(' ') + " sc\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(c[0], isNumber$1, 'sc operator args "c" must be a number.');
	        validate(c[1], or(isNumber$1, isNil_1), 'sc operator args "c" must be a number.');
	        validate(c[2], or(isNumber$1, isNil_1), 'sc operator args "c" must be a number.');
	        validate(c[3], or(isNumber$1, isNil_1), 'sc operator args "c" must be a number.');
	        _this.c = c;
	        return _this;
	    }
	    sc.of = function () {
	        var c = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            c[_i] = arguments[_i];
	        }
	        return new (sc.bind.apply(sc, [void 0].concat(c)))();
	    };
	    return sc;
	}(PDFOperator));

	var __extends$q = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Modify the current transformation matrix (CTM) by concatenating the specified
	 * matrix. Although the operands specify a matrix, they shall be written as six
	 * separate numbers, not as an array.
	 */
	var cm = /** @class */ (function (_super) {
	    __extends$q(cm, _super);
	    function cm(a, b, c, d, e, f) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.a + " " + _this.b + " " + _this.c + " " + _this.d + " " + _this.e + " " + _this.f + " cm\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr([a, b, c, d, e, f], isNumber$1, 'cm operator args "a, b, c, d, e, f" must be all be numbers.');
	        _this.a = a;
	        _this.b = b;
	        _this.c = c;
	        _this.d = d;
	        _this.e = e;
	        _this.f = f;
	        return _this;
	    }
	    cm.of = function (a, b, c, d, e, f) { return new cm(a, b, c, d, e, f); };
	    return cm;
	}(PDFOperator));

	var __extends$r = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the line dash pattern in the graphics state
	 */
	var d = /** @class */ (function (_super) {
	    __extends$r(d, _super);
	    // TODO: Looks like the dashArray can actually be an array of arbitrary size,
	    //       so shouldn't be restricting it here.
	    function d(dashArray, dashPhase) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return "[" + _this.dashArray.join(' ') + "] " + _this.dashPhase + " d\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(dashArray[0], or(isNumber$1, isNil_1), 'dashArray[0] must be a number or undefined.');
	        validate(dashArray[1], or(isNumber$1, isNil_1), 'dashArray[1] must be a number or undefined.');
	        validate(dashPhase, or(isNumber$1, isNil_1), 'd operator arg "dashPhase" must be a number.');
	        _this.dashArray = dashArray;
	        _this.dashPhase = dashPhase;
	        return _this;
	    }
	    d.of = function (dashArray, dashPhase) {
	        return new d(dashArray, dashPhase);
	    };
	    return d;
	}(PDFOperator));

	var __extends$s = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the specified parameters in the graphics state.
	 * dictName shall be the name of a graphics state parameter dictionary in the
	 *  ExtGState subdictionary of the current resource dictionary.
	 */
	var gs = /** @class */ (function (_super) {
	    __extends$s(gs, _super);
	    function gs(dictName) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.dictName + " gs\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(dictName, isString_1, 'gs operator arg "dictName" must be a string or PDFName.');
	        _this.dictName = isString_1(dictName) ? PDFName.from(dictName) : dictName;
	        return _this;
	    }
	    gs.of = function (dictName) { return new gs(dictName); };
	    return gs;
	}(PDFOperator));

	var __extends$t = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the flatness tolerance in the graphics state.
	 * flatness is a number in the * range 0 to 100; a value of 0 shall specify the
	 *   output device’s default flatness tolerance.
	 */
	var i$1 = /** @class */ (function (_super) {
	    __extends$t(i, _super);
	    function i(flatness) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.flatness + " i\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(flatness, isInRange(0, 100), 'i operator arg "flatness" must be a number from 0 to 100.');
	        _this.flatness = flatness;
	        return _this;
	    }
	    i.of = function (flatness) { return new i(flatness); };
	    return i;
	}(PDFOperator));

	var __extends$u = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the line cap style in the graphics state
	 */
	var J = /** @class */ (function (_super) {
	    __extends$u(J, _super);
	    function J(lineCap) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.lineCap + " J\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(lineCap, oneOf(0, 1, 2), 'J operator arg "lineCap" must be 0, 1, or 2.');
	        _this.lineCap = lineCap;
	        return _this;
	    }
	    J.of = function (lineCap) { return new J(lineCap); };
	    return J;
	}(PDFOperator));
	/**
	 * Set the line join style in the graphics state
	 */
	var j = /** @class */ (function (_super) {
	    __extends$u(j, _super);
	    function j(lineJoin) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.lineJoin + " j\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(lineJoin, oneOf(0, 1, 2), 'j operator arg "lineJoin" must be 0, 1, or 2.');
	        _this.lineJoin = lineJoin;
	        return _this;
	    }
	    j.of = function (lineJoin) { return new j(lineJoin); };
	    return j;
	}(PDFOperator));

	var __extends$v = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the miter limit in the graphics state
	 */
	var M = /** @class */ (function (_super) {
	    __extends$v(M, _super);
	    function M(miterLimit) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.miterLimit + " M\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(miterLimit, isNumber$1, 'M operator arg "miterLimit" must be a number.');
	        _this.miterLimit = miterLimit;
	        return _this;
	    }
	    M.of = function (miterLimit) { return new M(miterLimit); };
	    return M;
	}(PDFOperator));

	var __extends$w = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the colour rendering intent in the graphics state. The rendering intent
	 * must be one of the following values:
	 *  - AbsoluteColorimetric
	 *  - RelativeColorimetric
	 *  - Saturation
	 *  - Perceptual
	 */
	var ri = /** @class */ (function (_super) {
	    __extends$w(ri, _super);
	    // TODO: Should this be a PDFName?
	    function ri(intent) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.intent + " ri\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(intent, oneOf('/AbsoluteColorimetric', '/RelativeColorimetric', '/Saturation', '/Perceptual'), "ri operator arg \"intent\" must be one of: \"AbsoluteColorimetric\", \"RelativeColorimetric\", \"Saturation\", \"Perceptual\"");
	        _this.intent = intent;
	        return _this;
	    }
	    ri.of = function (intent) { return new ri(intent); };
	    return ri;
	}(PDFOperator));

	var __extends$x = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the line width in the graphics state
	 */
	var w = /** @class */ (function (_super) {
	    __extends$x(w, _super);
	    function w(lineWidth) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.lineWidth + " w\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(lineWidth, isNumber$1, 'w operator arg "lineWidth" must be a number.');
	        _this.lineWidth = lineWidth;
	        return _this;
	    }
	    w.of = function (lineWidth) { return new w(lineWidth); };
	    return w;
	}(PDFOperator));

	var __extends$y = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Append a cubic Bézier curve to the current path.
	 * The curve shall extend from the current point to the point (x3, y3),
	 *   using (x1, y1) and (x2, y2) as the Bézier control points.
	 * The new current point shall be (x3, y3).
	 */
	var c = /** @class */ (function (_super) {
	    __extends$y(c, _super);
	    function c(x1, y1, x2, y2, x3, y3) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.x1 + " " + _this.y1 + " " + _this.x2 + " " + _this.y2 + " " + _this.x3 + " " + _this.y3 + " c\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr([x1, y1, x2, y2, x3, y3], isNumber$1, 'c operator args "x1 y1 x2 y2 x3 y3" must all be numbers.');
	        _this.x1 = x1;
	        _this.y1 = y1;
	        _this.x2 = x2;
	        _this.y2 = y2;
	        _this.x3 = x3;
	        _this.y3 = y3;
	        return _this;
	    }
	    c.of = function (x1, y1, x2, y2, x3, y3) { return new c(x1, y1, x2, y2, x3, y3); };
	    return c;
	}(PDFOperator));

	// tslint:disable-next-line:no-unused-variable
	/**
	 * Close the current subpath by appending a straight line segment from the current
	 * point to the starting point of the subpath. If the current subpath is already
	 * closed, h shall do nothing. This operator terminates the current subpath.
	 * Appending another segment to the current path shall begin a new subpath, even if
	 * the new segment begins at the endpoint reached by the h operation.
	 */
	var h = PDFOperator.createSingletonOp('h');

	var __extends$z = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * (lowercase L) Append a straight line segment from the current point to the
	 *   point (x, y).
	 * The new current point shall be (x, y).
	 */
	var l = /** @class */ (function (_super) {
	    __extends$z(l, _super);
	    function l(x, y) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.x + " " + _this.y + " l\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(x, isNumber$1, 'l operator arg "x" must be a number.');
	        validate(y, isNumber$1, 'l operator arg "y" must be a number.');
	        _this.x = x;
	        _this.y = y;
	        return _this;
	    }
	    l.of = function (x, y) { return new l(x, y); };
	    return l;
	}(PDFOperator));

	var __extends$A = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Begin a new subpath by moving the current point to coordinates (x, y),
	 *  omitting any connecting line segment.
	 * If the previous path construction operator in the current path was also m,
	 *  the new m overrides it; no vestige of the previous m operation remains in
	 *  the path.
	 */
	var m = /** @class */ (function (_super) {
	    __extends$A(m, _super);
	    function m(x, y) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.x + " " + _this.y + " m\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(x, isNumber$1, 'm operator arg "x" must be a number.');
	        validate(y, isNumber$1, 'm operator arg "y" must be a number.');
	        _this.x = x;
	        _this.y = y;
	        return _this;
	    }
	    m.of = function (x, y) { return new m(x, y); };
	    return m;
	}(PDFOperator));

	var __extends$B = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Append a rectangle to the current path as a complete subpath, with lower-left
	 *   corner (x, y) and dimensions width and height in user space.
	 * The operation `x y width height re` is equivalent to
	 * ```
	 * x y m
	 * (x + width) y l
	 * (x + width) (y + height) l
	 * x (y + height) l
	 * h
	 * ```
	 */
	var re = /** @class */ (function (_super) {
	    __extends$B(re, _super);
	    function re(x, y, width, height) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.x + " " + _this.y + " " + _this.width + " " + _this.height + " re\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(x, isNumber$1, 're operator arg "x" must be a number.');
	        validate(y, isNumber$1, 're operator arg "y" must be a number.');
	        validate(width, isNumber$1, 're operator arg "width" must be a number.');
	        validate(height, isNumber$1, 're operator arg "height" must be a number.');
	        _this.x = x;
	        _this.y = y;
	        _this.width = width;
	        _this.height = height;
	        return _this;
	    }
	    re.of = function (x, y, width, height) {
	        return new re(x, y, width, height);
	    };
	    return re;
	}(PDFOperator));

	var __extends$C = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Append a cubic Bézier curve to the current path.
	 * The curve shall extend from the current point to the point (x3, y3), using
	 *  the current point and (x2, y2) as the Bézier control points.
	 * The new current point shall be (x3, y3).
	 */
	var v = /** @class */ (function (_super) {
	    __extends$C(v, _super);
	    function v(x2, y2, x3, y3) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.x2 + " " + _this.y2 + " " + _this.x3 + " " + _this.y3 + " v\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr([x2, y2, x3, y3], isNumber$1, 'v operator args "x2 y2 x3 y3" must all be numbers.');
	        _this.x2 = x2;
	        _this.y2 = y2;
	        _this.x3 = x3;
	        _this.y3 = y3;
	        return _this;
	    }
	    v.of = function (x2, y2, x3, y3) {
	        return new v(x2, y2, x3, y3);
	    };
	    return v;
	}(PDFOperator));

	var __extends$D = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Append a cubic Bézier curve to the current path.
	 * The curve shall extend from the current point to the point (x3, y3),
	 *  using (x1, y1) and (x3, y3) as the Bézier control points.
	 * The new current point shall be (x3, y3).
	 */
	var y = /** @class */ (function (_super) {
	    __extends$D(y, _super);
	    function y(x1, y1, x3, y3) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.x1 + " " + _this.y1 + " " + _this.x3 + " " + _this.y3 + " y\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr([x1, y1, x3, y3], isNumber$1, 'y operator args "x1 y1 x3 y3" must all be numbers.');
	        _this.x1 = x1;
	        _this.y1 = y1;
	        _this.x3 = x3;
	        _this.y3 = y3;
	        return _this;
	    }
	    y.of = function (x1, y1, x3, y3) {
	        return new y(x1, y1, x3, y3);
	    };
	    return y;
	}(PDFOperator));

	/**
	 * Stroke the path.
	 */
	var S = PDFOperator.createSingletonOp('S');
	/**
	 * Close and stroke the path. This operator shall have the same effect as the sequence h S.
	 */
	var s = PDFOperator.createSingletonOp('s');
	/**
	 * Fill the path, using the nonzero winding number rule to determine the region
	 * to fill. Any subpaths that are open shall be implicitly closed before being
	 * filled.
	 */
	var f = PDFOperator.createSingletonOp('f');
	/**
	 * Fill the path, using the even-odd rule to determine the region to fill.
	 */
	f.asterisk = PDFOperator.createSingletonOp('f*');
	/**
	 * Equivalent to f; included only for compatibility. Although PDF reader
	 * applications shall be able to accept this operator, PDF writer applications
	 * should use f instead.
	 */
	var F = PDFOperator.createSingletonOp('F');
	/**
	 * Fill and then stroke the path, using the nonzero winding number rule to
	 * determine the region to fill. This operator shall produce the same result as
	 * constructing two identical path objects, painting the first with f and the
	 * second with S.
	 * NOTE: The filling and stroking portions of the operation consult different
	 * values of several graphics state parameters, such as the current colour.
	 */
	var B = PDFOperator.createSingletonOp('B');
	/**
	 * Fill and then stroke the path, using the even-odd rule to determine the
	 * region to fill. This operator shall produce the same result as B, except
	 * that the path is filled as if with f* instead of f.
	 */
	B.asterisk = PDFOperator.createSingletonOp('B*');
	/**
	 * Close, fill, and then stroke the path, using the nonzero winding number rule
	 * to determine the region to fill. This operator shall have the same effect as
	 * the sequence h B.
	 */
	var b = PDFOperator.createSingletonOp('b');
	/**
	 * Close, fill, and then stroke the path, using the even-odd rule to determine
	 * the region to fill. This operator shall have the same effect as
	 * the sequence h B*.
	 */
	b.asterisk = PDFOperator.createSingletonOp('b*');
	/**
	 * End the path object without filling or stroking it. This operator shall be a
	 * path-painting no-op, used primarily for the side effect of changing the
	 * current clipping path
	 */
	var n = PDFOperator.createSingletonOp('n');

	var pathPaintingOps = /*#__PURE__*/Object.freeze({
		S: S,
		s: s,
		f: f,
		F: F,
		B: B,
		b: b,
		n: n
	});

	// tslint:disable-next-line:no-unused-variable
	/**
	 * Move to the start of the next line.
	 * This operator has the same effect as the code
	 * 0 -Tl Td
	 * where Tl denotes the current leading parameter in the text state. The
	 * negative of Tl is used here because Tl is the text leading expressed as a
	 * positive number. Going to the next line entails decreasing the y coordinate.
	 */
	var TAsterisk = PDFOperator.createSingletonOp('T*');

	var __extends$E = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Move to the start of the next line, offset from the start of the current line by
	 * (tx, ty). tx and ty shall denote numbers expressed in unscaled text space units.
	 * More precisely, this operator shall perform these assignments:
	 *              |1   0   0|
	 * T_m = T_lm = |0   1   0| × T_lm
	 *              |t_x t_y 1|
	 */
	var Td = /** @class */ (function (_super) {
	    __extends$E(Td, _super);
	    function Td(tx, ty) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.tx + " " + _this.ty + " Td\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(tx, isNumber$1, 'Td operator arg "tx" must be a number.');
	        validate(ty, isNumber$1, 'Td operator arg "ty" must be a number.');
	        _this.tx = tx;
	        _this.ty = ty;
	        return _this;
	    }
	    Td.of = function (tx, ty) { return new Td(tx, ty); };
	    return Td;
	}(PDFOperator));
	/**
	 * Move to the start of the next line, offset from the start of the current line by
	 * (tx, ty). As a side effect, this operator shall set the leading parameter in the
	 * text state. This operator shall have the same effect as this code:
	 * −ty TL
	 * tx ty Td
	 */
	var TD = /** @class */ (function (_super) {
	    __extends$E(TD, _super);
	    function TD(tx, ty) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.tx + " " + _this.ty + " TD\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(tx, isNumber$1, 'TD operator arg "tx" must be a number.');
	        validate(ty, isNumber$1, 'TD operator arg "ty" must be a number.');
	        _this.tx = tx;
	        _this.ty = ty;
	        return _this;
	    }
	    TD.of = function (tx, ty) { return new TD(tx, ty); };
	    return TD;
	}(PDFOperator));

	var __extends$F = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the text matrix, Tm, and the text line matrix, T_lm:
	 *              |a b 0|
	 * T_m = T_lm = |c d 0|
	 *              |e f 1|
	 * The operands shall all be numbers, and the initial value for Tm and Tlm shall be
	 * the identity matrix, [1 0 0 1 0 0]. Although the operands specify a matrix, they
	 * shall be passed to Tm as six separate numbers, not as an array. The matrix
	 * specified by the operands shall not be concatenated onto the current text
	 * matrix, but shall replace it.
	 */
	var Tm = /** @class */ (function (_super) {
	    __extends$F(Tm, _super);
	    function Tm(a, b, c, d, e, f) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.a + " " + _this.b + " " + _this.c + " " + _this.d + " " + _this.e + " " + _this.f + " Tm\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validateArr([a, b, c, d, e, f], isNumber$1, 'Tm operator args "a b c d e f" must all be numbers.');
	        _this.a = a;
	        _this.b = b;
	        _this.c = c;
	        _this.d = d;
	        _this.e = e;
	        _this.f = f;
	        return _this;
	    }
	    Tm.of = function (a, b, c, d, e, f) { return new Tm(a, b, c, d, e, f); };
	    return Tm;
	}(PDFOperator));

	var __extends$G = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Move to the next line and show a text string.
	 * This operator shall have the same effect as the code:
	 * T*
	 * string Tj
	 */
	var SingleQuote = /** @class */ (function (_super) {
	    __extends$G(SingleQuote, _super);
	    function SingleQuote(str) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.string.toString() + " '\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(str, or(isInstance(PDFString), isInstance(PDFHexString), isString_1), '\' operator arg "string" must be one of: PDFString, PDFHexString, String');
	        _this.string = isString_1(str) ? PDFString.fromString(str) : str;
	        return _this;
	    }
	    SingleQuote.of = function (str) { return new SingleQuote(str); };
	    return SingleQuote;
	}(PDFOperator));
	/**
	 * Move to the next line and show a text string, using aw as the word spacing
	 * and ac as the character spacing (setting the corresponding parameters in the
	 * text state). aw and ac shall be numbers expressed in unscaled text space units.
	 * This operator shall have the same effect as this code:
	 * aw Tw
	 * ac Tc
	 * string '
	 */
	var DoubleQuote = /** @class */ (function (_super) {
	    __extends$G(DoubleQuote, _super);
	    function DoubleQuote(aw, ac, str) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            return _this.aw + " " + _this.ac + " " + _this.string.toString() + " \"\n";
	        };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(aw, isNumber$1, '" operator arg "aw" must be a Number');
	        validate(ac, isNumber$1, '" operator arg "ac" must be a Number');
	        validate(str, or(isInstance(PDFString), isInstance(PDFHexString), isString_1), '" operator arg "string" must be one of: PDFString, PDFHexString, String');
	        _this.aw = aw;
	        _this.ac = ac;
	        _this.string = isString_1(str) ? PDFString.fromString(str) : str;
	        return _this;
	    }
	    DoubleQuote.of = function (aw, ac, str) { return new DoubleQuote(aw, ac, str); };
	    return DoubleQuote;
	}(PDFOperator));

	var __extends$H = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Show a text string.
	 */
	var Tj = /** @class */ (function (_super) {
	    __extends$H(Tj, _super);
	    function Tj(str) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.string + " Tj\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(str, or(isInstance(PDFString), isInstance(PDFHexString), isString_1), 'Tj operator arg "str" must be one of: PDFString, PDFHexString, String');
	        _this.string = isString_1(str) ? PDFString.fromString(str) : str;
	        return _this;
	    }
	    Tj.of = function (str) { return new Tj(str); };
	    return Tj;
	}(PDFOperator));
	/**
	 * Show one or more text strings, allowing individual glyph positioning.
	 * Each element of array shall be either a string or a number.
	 * If the element is a string, this operator shall show the string.
	 * If it is a number, the operator shall adjust the text position by that
	 *  amount; that is, it shall translate the text matrix, Tm.
	 * The number shall be expressed in thousandths of a unit of text space.
	 * This amount shall be subtracted from the current horizontal or vertical
	 *   coordinate, depending on the writing mode.
	 * In the default coordinate system, a positive adjustment has the effect of
	 * moving the next glyph painted either to the left or down by the given amount.
	 */
	var TJ = /** @class */ (function (_super) {
	    __extends$H(TJ, _super);
	    function TJ() {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i] = arguments[_i];
	        }
	        var _this = _super.call(this) || this;
	        _this.toString = function () {
	            var buffer = new Uint8Array(_this.bytesSize());
	            _this.copyBytesInto(buffer);
	            return arrayToString(buffer);
	        };
	        _this.bytesSize = function () {
	            return _this.array.map(function (elem) { return elem.bytesSize(); }).reduce(add_1, 0) +
	                _this.array.length + // Spaces between elements
	                4 + // "[ " and "]"
	                3;
	        }; // The "TJ" characters and trailing newline
	        _this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer('[ ', buffer);
	            _this.array.forEach(function (elem) {
	                remaining = elem.copyBytesInto(remaining);
	                remaining = addStringToBuffer(' ', remaining);
	            });
	            remaining = addStringToBuffer('] TJ\n', remaining);
	            return remaining;
	        };
	        if (array.length === 0) {
	            error('TJ operator requires  PDFStrings, PDFHexStrings, PDFNumbers, Strings, or Numbers to be constructed');
	        }
	        validateArr(array, or(isInstance(PDFString), isInstance(PDFHexString), isInstance(PDFNumber), isString_1, isNumber_1), 'TJ operator arg elements must be one of: PDFString, PDFHexString, PDFNumber, String, Number');
	        // prettier-ignore
	        _this.array = array.map(function (elem) {
	            return isString_1(elem) ? PDFString.fromString(elem)
	                : isNumber_1(elem) ? PDFNumber.fromNumber(elem)
	                    : elem;
	        });
	        return _this;
	    }
	    TJ.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i] = arguments[_i];
	        }
	        return new (TJ.bind.apply(TJ, [void 0].concat(array)))();
	    };
	    return TJ;
	}(PDFOperator));

	var __extends$I = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the character spacing, Tc, to charSpace, which shall be a number
	 *   expressed in unscaled text space units.
	 * Character spacing shall be used by the Tj, TJ, and ' operators.
	 * Initial value: 0.
	 */
	var Tc = /** @class */ (function (_super) {
	    __extends$I(Tc, _super);
	    function Tc(charSpace) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.charSpace + " Tc\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(charSpace, isNumber$1, 'Tc operator arg "charSpace" must be a number.');
	        _this.charSpace = charSpace;
	        return _this;
	    }
	    Tc.of = function (charSpace) { return new Tc(charSpace); };
	    return Tc;
	}(PDFOperator));

	var __extends$J = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the text font, Tf, to font and the text font size, Tfs, to size. font shall
	 * be the name of a font resource in the Font subdictionary of the current resource
	 * dictionary; size shall be a number representing a scale factor. There is no
	 * initial value for either font or size; they shall be specified explicitly by
	 * using Tf before any text is shown.
	 */
	var Tf = /** @class */ (function (_super) {
	    __extends$J(Tf, _super);
	    function Tf(font, size) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.font + " " + _this.size + " Tf\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(font, or(isString_1, isInstance(PDFName)), 'Tf operator arg "font" must be a string or PDFName.');
	        validate(size, isNumber$1, 'Tf operator arg "size" must be a number.');
	        _this.font = isString_1(font) ? PDFName.from(font) : font;
	        _this.size = size;
	        return _this;
	    }
	    Tf.of = function (font, size) { return new Tf(font, size); };
	    return Tf;
	}(PDFOperator));

	var __extends$K = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the text leading, Tl, to leading, which shall be a number expressed in
	 * unleading text space units. Text leading shall be used only by the T*, ', and "
	 * operators. Initial value: 0.
	 */
	var TL = /** @class */ (function (_super) {
	    __extends$K(TL, _super);
	    function TL(leading) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.leading + " TL\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(leading, isNumber$1, 'TL operator arg "leading" must be a number.');
	        _this.leading = leading;
	        return _this;
	    }
	    TL.of = function (leading) { return new TL(leading); };
	    return TL;
	}(PDFOperator));

	var __extends$L = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the text rendering mode, Tmode, to render, which shall be an integer.
	 * Initial value: 0.
	 */
	var Tr = /** @class */ (function (_super) {
	    __extends$L(Tr, _super);
	    function Tr(render) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.render + " Tr\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(render, isNumber$1, 'Tr operator arg "render" must be a number.');
	        _this.render = render;
	        return _this;
	    }
	    Tr.of = function (render) { return new Tr(render); };
	    return Tr;
	}(PDFOperator));

	var __extends$M = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the text rise, Tsise, to rise, which shall be a number expressed in unscaled
	 * text space units. Initial value: 0.
	 */
	var Ts = /** @class */ (function (_super) {
	    __extends$M(Ts, _super);
	    function Ts(rise) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.rise + " Ts\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(rise, isNumber$1, 'Ts operator arg "rise" must be a number.');
	        _this.rise = rise;
	        return _this;
	    }
	    Ts.of = function (rise) { return new Ts(rise); };
	    return Ts;
	}(PDFOperator));

	var __extends$N = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the word spacing, Tw, to wordSpace, which shall be a number expressed in
	 * unscaled text space units. Word spacing shall be used by the Tj, TJ, and '
	 * operators. Initial value: 0.
	 */
	var Tw = /** @class */ (function (_super) {
	    __extends$N(Tw, _super);
	    function Tw(wordSpace) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.wordSpace + " Tw\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(wordSpace, isNumber$1, 'Tw operator arg "wordSpace" must be a number.');
	        _this.wordSpace = wordSpace;
	        return _this;
	    }
	    Tw.of = function (wordSpace) { return new Tw(wordSpace); };
	    return Tw;
	}(PDFOperator));

	var __extends$O = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Set the horizontal scaling, Th, to (scale ÷ 100). scale shall be a number
	 * specifying the percentage of the normal width. Initial value: 100 (normal width).
	 */
	var Tz = /** @class */ (function (_super) {
	    __extends$O(Tz, _super);
	    function Tz(scale) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.scale + " Tz\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(scale, isNumber$1, 'Tz operator arg "scale" must be a number.');
	        _this.scale = scale;
	        return _this;
	    }
	    Tz.of = function (scale) { return new Tz(scale); };
	    return Tz;
	}(PDFOperator));

	var __extends$P = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	/**
	 * Draws the XObject with the given name in the current Page's Resource dictionary.
	 */
	var Do = /** @class */ (function (_super) {
	    __extends$P(Do, _super);
	    function Do(name) {
	        var _this = _super.call(this) || this;
	        _this.toString = function () { return _this.name + " Do\n"; };
	        _this.bytesSize = function () { return _this.toString().length; };
	        _this.copyBytesInto = function (buffer) {
	            return addStringToBuffer(_this.toString(), buffer);
	        };
	        validate(name, or(isString_1, isInstance(PDFName)), 'Do operator arg "name" must be a string or PDFName.');
	        _this.name = isString_1(name) ? PDFName.from(name) : name;
	        return _this;
	    }
	    Do.of = function (name) { return new Do(name); };
	    return Do;
	}(PDFOperator));

	var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
	    for (var s$$1, i = 1, n$$1 = arguments.length; i < n$$1; i++) {
	        s$$1 = arguments[i];
	        for (var p in s$$1) if (Object.prototype.hasOwnProperty.call(s$$1, p))
	            t[p] = s$$1[p];
	    }
	    return t;
	};
	/*
	 * These operator categories are defined in the
	 * "Table 51 – Operator Categories" table in the PDF specification document
	 */
	var generalGraphicsStateOperators = [w, J, j, M, d, ri, i$1, gs];
	var colorOperators = [CS, cs, SC, SCN, sc, scn, G, g, RG, rg, K, k];
	var textStateOperators = [Tc, Tw, Tz, TL, Tf, Tr, Ts];
	var textShowingOperators = [Tj, TJ, SingleQuote, DoubleQuote];
	var textPositioningOperators = [Td, TD, Tm, TAsterisk];
	// TODO: These are valid in TextObjects, but they aren't implemented in
	//       pdf-lib yet.
	// export const markedContentOperators =
	//   [MP, DP, BMC, BDC, EMC]
	var PDFOperators = __assign({ W: W,
	    CS: CS,
	    cs: cs,
	    SC: SC,
	    sc: sc,
	    SCN: SCN,
	    scn: scn,
	    G: G,
	    g: g,
	    RG: RG,
	    rg: rg,
	    K: K,
	    k: k }, QOps, { cm: cm,
	    w: w,
	    M: M,
	    d: d,
	    ri: ri,
	    i: i$1,
	    gs: gs,
	    J: J,
	    j: j,
	    c: c,
	    h: h,
	    l: l,
	    m: m,
	    re: re,
	    v: v,
	    y: y }, pathPaintingOps, { T: { asterisk: TAsterisk }, TD: TD,
	    Td: Td,
	    Tm: Tm, quote: { single: SingleQuote, double: DoubleQuote }, TJ: TJ,
	    Tj: Tj,
	    Tc: Tc,
	    Tf: Tf,
	    TL: TL,
	    Tr: Tr,
	    Ts: Ts,
	    Tw: Tw,
	    Tz: Tz,
	    Do: Do });

	var __extends$Q = (undefined && undefined.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var validCategories = colorOperators.concat(generalGraphicsStateOperators, textPositioningOperators, textShowingOperators, textStateOperators);
	// TODO: Validate that only valid text operators are passed or pushed to this object.
	var PDFTextObject = /** @class */ (function (_super) {
	    __extends$Q(PDFTextObject, _super);
	    function PDFTextObject() {
	        var operators = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            operators[_i] = arguments[_i];
	        }
	        var _this = _super.call(this) || this;
	        _this.operatorsBytesSize = function () {
	            return _this.operators
	                .filter(Boolean)
	                .map(function (op) { return op.bytesSize(); })
	                .reduce(add_1, 0);
	        };
	        _this.toString = function () {
	            var buffer = new Uint8Array(_this.bytesSize());
	            _this.copyBytesInto(buffer);
	            return arrayToString(buffer);
	        };
	        _this.bytesSize = function () {
	            return 3 + // "BT\n"
	                _this.operatorsBytesSize() +
	                3;
	        }; // "ET\n"
	        _this.copyBytesInto = function (buffer) {
	            var remaining = addStringToBuffer('BT\n', buffer);
	            remaining = _this.operators
	                .filter(Boolean)
	                .reduce(function (remBytes, op) { return op.copyBytesInto(remBytes); }, remaining);
	            remaining = addStringToBuffer('ET\n', remaining);
	            return remaining;
	        };
	        PDFTextObject.validateOperators(operators);
	        _this.operators = operators;
	        return _this;
	    }
	    PDFTextObject.of = function () {
	        var operators = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            operators[_i] = arguments[_i];
	        }
	        return new (PDFTextObject.bind.apply(PDFTextObject, [void 0].concat(operators)))();
	    };
	    PDFTextObject.validateOperators = function (elements) {
	        return validateArr(elements, function (op) {
	            return validCategories.some(function (category) { return op instanceof category; });
	        }, 'only PDF text operators can be pushed to a PDFTextObject');
	    };
	    return PDFTextObject;
	}(PDFOperator));

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]',
	    setTag$3 = '[object Set]';

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike_1(value) &&
	      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
	        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
	    return !value.length;
	  }
	  var tag = _getTag(value);
	  if (tag == mapTag$3 || tag == setTag$3) {
	    return !value.size;
	  }
	  if (_isPrototype(value)) {
	    return !_baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty$a.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	var isEmpty_1 = isEmpty;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin$1 = Math.min;

	/**
	 * Creates a function like `_.round`.
	 *
	 * @private
	 * @param {string} methodName The name of the `Math` method to use when rounding.
	 * @returns {Function} Returns the new round function.
	 */
	function createRound(methodName) {
	  var func = Math[methodName];
	  return function(number, precision) {
	    number = toNumber_1(number);
	    precision = precision == null ? 0 : nativeMin$1(toInteger_1(precision), 292);
	    if (precision) {
	      // Shift with exponential notation to avoid floating-point issues.
	      // See [MDN](https://mdn.io/round#Examples) for more details.
	      var pair = (toString_1(number) + 'e').split('e'),
	          value = func(pair[0] + 'e' + (+pair[1] + precision));

	      pair = (toString_1(value) + 'e').split('e');
	      return +(pair[0] + 'e' + (+pair[1] - precision));
	    }
	    return func(number);
	  };
	}

	var _createRound = createRound;

	/**
	 * Computes `number` rounded to `precision`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.10.0
	 * @category Math
	 * @param {number} number The number to round.
	 * @param {number} [precision=0] The precision to round to.
	 * @returns {number} Returns the rounded number.
	 * @example
	 *
	 * _.round(4.006);
	 * // => 4
	 *
	 * _.round(4.006, 2);
	 * // => 4.01
	 *
	 * _.round(4060, -2);
	 * // => 4100
	 */
	var round = _createRound('round');

	var round_1 = round;

	/* ======== Clipping path operators ======== */
	var W$1 = PDFOperators.W;
	var clip = function () { return W$1.operator; };
	var clipEvenOdd = function () { return W$1.asterisk.operator; };
	/* ======== Graphics state operators ======== */
	var Q = PDFOperators.Q, q$1 = PDFOperators.q;
	var cos = Math.cos, sin = Math.sin, tan = Math.tan;
	var degreesToRadians = function (degrees) { return degrees * Math.PI / 180; };
	var translate = function (xPos, yPos) {
	    return cm.of(1, 0, 0, 1, xPos, yPos);
	};
	var scale = function (xPos, yPos) {
	    return cm.of(xPos, 0, 0, yPos, 0, 0);
	};
	// Round to the 6th decimal place to avoid JavaScript exponential notation
	// being used, which starts at the 7th decimal place, e.g.
	//   0.0000001 => 1e-7
	//   0.000001  => 0.000001
	var rotateRadians = function (angle) {
	    return cm.of(round_1(cos(angle), 6), round_1(sin(angle), 6), round_1(-sin(angle), 6), round_1(cos(angle), 6), 0, 0);
	};
	var rotateDegrees = function (angle) {
	    return rotateRadians(degreesToRadians(angle));
	};
	// Round to the 6th decimal place to avoid JavaScript exponential notation
	// being used, which starts at the 7th decimal place, e.g.
	//   0.0000001 => 1e-7
	//   0.000001  => 0.000001
	var skewRadians = function (xSkewAngle, ySkewAngle) {
	    return cm.of(1, round_1(tan(xSkewAngle), 6), round_1(tan(ySkewAngle), 6), 1, 0, 0);
	};
	var skewDegrees = function (xSkewAngle, ySkewAngle) {
	    return skewRadians(degreesToRadians(xSkewAngle), degreesToRadians(ySkewAngle));
	};
	var dashPattern = d.of;
	var restoreDashPattern = function () { return d.of([], 0); };
	var lineCap = function (style) {
	    return J.of({ butt: 0, round: 1, projecting: 2 }[style]);
	};
	var lineJoin = function (style) {
	    return j.of({ miter: 0, round: 1, bevel: 2 }[style]);
	};
	var popGraphicsState = function () { return Q.operator; };
	var pushGraphicsState = function () { return q$1.operator; };
	var lineWidth = w.of;
	/* ======== Path construction operators ======== */
	var appendBezierCurve = c.of;
	var closePath = function () { return h.operator; };
	var moveTo = m.of;
	var lineTo = l.of;
	var rectangle = re.of;
	var square = function (xPos, yPos, size) {
	    return rectangle(xPos, yPos, size, size);
	};
	/* ======== Path painting operators ======== */
	var S$1 = PDFOperators.S, f$1 = PDFOperators.f, B$1 = PDFOperators.B, n$1 = PDFOperators.n;
	var stroke = function () { return S$1.operator; };
	var fill = function () { return f$1.operator; };
	var fillAndStroke = function () { return B$1.operator; };
	var endPath = function () { return n$1.operator; };
	/* ======== Test positioning operators ======== */
	var T = PDFOperators.T;
	// TODO: Allow an optional number to move more/less than the default line height.
	var nextLine = function () { return T.asterisk.operator; };
	var textPosition = Td.of;
	/* ======== Text showing operators ======== */
	var text = Tj.of;
	/* ======== Text state operators ======== */
	var fontAndSize = Tf.of;
	var charSpacing = Tc.of;
	var wordSpacing = Tw.of;
	// Compresses glyphs horizontally - not vertically.
	var charSqueeze = Tz.of;
	var lineHeight = TL.of;
	var textRise = Ts.of;
	var textRenderingMode = function (style) {
	    return Tr.of({
	        fill: 0,
	        outline: 1,
	        fillAndOutline: 2,
	        invisible: 3,
	        fillAndClip: 4,
	        outlineAndClip: 5,
	        fillAndOutlineAndClip: 6,
	        clip: 7,
	    }[style]);
	};
	var textMatrix = Tm.of;
	// Round to the 6th decimal place to avoid JavaScript exponential notation
	// being used, which starts at the 7th decimal place, e.g.
	//   0.0000001 => 1e-7
	//   0.000001  => 0.000001
	var rotateAndSkewTextRadiansAndTranslate = function (rotationAngle, xSkewAngle, ySkewAngle, x, y) {
	    return Tm.of(round_1(cos(rotationAngle), 6), round_1(sin(rotationAngle) + tan(xSkewAngle), 6), round_1(-sin(rotationAngle) + tan(ySkewAngle), 6), round_1(cos(rotationAngle), 6), x, y);
	};
	var rotateAndSkewTextDegreesAndTranslate = function (rotationAngle, xSkewAngle, ySkewAngle, x, y) {
	    return rotateAndSkewTextRadiansAndTranslate(degreesToRadians(rotationAngle), degreesToRadians(xSkewAngle), degreesToRadians(ySkewAngle), x, y);
	};
	/* ======== XObject operator ======== */
	var image = Do.of;
	/* ======== Color operators ======== */
	var fillingGrayscaleColor = g.of;
	var strokingGrayscaleColor = G.of;
	var fillingRgbColor = rg.of;
	var strokingRgbColor = RG.of;
	var fillingCmykColor = k.of;
	var strokingCmykColor = K.of;

	// =============================================================================
	// Based on: http://spencermortensen.com/articles/bezier-circle/
	//   P_0 = (0,1),  P_1 = (c,1),   P_2 = (1,c),   P_3 = (1,0)
	//   P_0 = (1,0),  P_1 = (1,-c),  P_2 = (c,-1),  P_3 = (0,-1)
	//   P_0 = (0,-1), P_1 = (-c,-1), P_3 = (-1,-c), P_4 = (-1,0)
	//   P_0 = (-1,0), P_1 = (-1,c),  P_2 = (-c,1),  P_3 = (0,1)
	//     with c = 0.551915024494
	/** @hidden */
	var C_VAL = 0.551915024494;
	/** @hidden */
	var drawEllipsePath = function (_a) {
	    var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c, _d = _a.xScale, xScale = _d === void 0 ? 100 : _d, _e = _a.yScale, yScale = _e === void 0 ? 100 : _e, _f = _a.rotationAngle, rotationAngle = _f === void 0 ? 0 : _f, _g = _a.skewAngles, skewAngles = _g === void 0 ? { xAxis: 0, yAxis: 0 } : _g;
	    return [
	        pushGraphicsState(),
	        translate(x, y),
	        rotateRadians(rotationAngle),
	        scale(xScale, yScale),
	        skewRadians(skewAngles.xAxis, skewAngles.yAxis),
	        moveTo(0, 1),
	        appendBezierCurve(C_VAL, 1, 1, C_VAL, 1, 0),
	        appendBezierCurve(1, -C_VAL, C_VAL, -1, 0, -1),
	        appendBezierCurve(-C_VAL, -1, -1, -C_VAL, -1, 0),
	        appendBezierCurve(-1, C_VAL, -C_VAL, 1, 0, 1),
	        popGraphicsState(),
	    ];
	};
	/**
	 * Draws an ellipse in a content stream.
	 *
	 * ```javascript
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawEllipse({
	 *       x: 25,
	 *       y: 50,
	 *       xScale: 50,
	 *       yScale: 150,
	 *       rotateDegrees: 45,
	 *       skewDegrees: { xAxis: 30, yAxis: 30 },
	 *       borderWidth: 25,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *       borderColorRgb: [0.79, 0.25, 1.0],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param options An options object with named parameters.
	 */
	var drawEllipse = function (options) { return [
	    pushGraphicsState(),
	    fillingRgbColor(get_1(options, 'colorRgb[0]', 0), get_1(options, 'colorRgb[1]', 0), get_1(options, 'colorRgb[2]', 0)),
	    strokingRgbColor(get_1(options, 'borderColorRgb[0]', 0), get_1(options, 'borderColorRgb[1]', 0), get_1(options, 'borderColorRgb[2]', 0)),
	    lineWidth(options.borderWidth || 15)
	].concat(drawEllipsePath({
	    x: options.x || 0,
	    y: options.y || 0,
	    xScale: options.xScale || 100,
	    yScale: options.yScale || 100,
	    rotationAngle: options.rotateDegrees
	        ? degreesToRadians(options.rotateDegrees)
	        : options.rotateRadians,
	    skewAngles: options.skewDegrees
	        ? {
	            xAxis: degreesToRadians(options.skewDegrees.xAxis),
	            yAxis: degreesToRadians(options.skewDegrees.yAxis),
	        }
	        : options.skewRadians,
	}), [
	    // prettier-ignore
	    !isEmpty_1(options.colorRgb) && !isEmpty_1(options.borderColorRgb) ? fillAndStroke()
	        : !isEmpty_1(options.colorRgb) ? fill()
	            : !isEmpty_1(options.borderColorRgb) ? stroke()
	                : closePath(),
	    popGraphicsState(),
	]); };
	/**
	 * Draws a circle in a content stream.
	 *
	 * ```javascript
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawCircle({
	 *       x: 25,
	 *       y: 50,
	 *       size: 50,
	 *       rotateDegrees: 45,
	 *       skewDegrees: { xAxis: 30, yAxis: 30 },
	 *       borderWidth: 25,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *       borderColorRgb: [0.79, 0.25, 1.0],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param options An options object with named parameters.
	 */
	var drawCircle = function (options) {
	    return drawEllipse({
	        x: options.x || 0,
	        y: options.y || 0,
	        xScale: options.size || 100,
	        yScale: options.size || 100,
	        borderWidth: options.borderWidth || 15,
	        colorRgb: options.colorRgb || [],
	        borderColorRgb: options.borderColorRgb || [],
	        rotateDegrees: options.rotateDegrees,
	        rotateRadians: options.rotateRadians,
	        skewDegrees: options.skewDegrees,
	        skewRadians: options.skewRadians,
	    });
	};

	/**
	 * Draws an image object in a content stream. PNG and JPG image objects are
	 * supported.
	 *
	 * ```javascript
	 * // Should be a Uint8Array containing a PNG image
	 * const pngBytes = ...
	 *
	 * const [pngImage, pngDims] = pdfDoc.embedPNG(pngBytes);
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawImage('MyPngImage', {
	 *       x: 25,
	 *       y: 50,
	 *       width:  pngDims.width  * 0.5, // Make the image 50% smaller
	 *       height: pngDims.height * 0.5, // Make the image 50% smaller
	 *       rotateDegrees: 180            // Draw the image upside down
	 *       skewDegrees: { xAxis: 30, yAxis: 30 } // Skew both axes by 30 degrees
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addImageObject('MyPngImage', pngImage)
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param name    Name of the image XObject to be drawn. Should be present in
	 *                the XObject Dictionary of the page to which the content stream
	 *                is applied.
	 * @param options An options object with named parameters.
	 */
	var drawImage = function (name, options) {
	    return [
	        pushGraphicsState(),
	        translate(options.x || 0, options.y || 0),
	        options.rotateDegrees && rotateDegrees(options.rotateDegrees),
	        options.rotateRadians && rotateRadians(options.rotateRadians),
	        scale(options.width || 100, options.height || 100),
	        options.skewDegrees &&
	            skewDegrees(options.skewDegrees.xAxis, options.skewDegrees.yAxis),
	        options.skewRadians &&
	            skewRadians(options.skewRadians.xAxis, options.skewRadians.yAxis),
	        image(name),
	        popGraphicsState(),
	    ].filter(Boolean);
	};

	/**
	 * Draws a rectangle in a content stream.
	 *
	 * ```javascript
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawRectangle({
	 *       x: 25,
	 *       y: 50,
	 *       width: 1000,
	 *       height: 500,
	 *       rotateDegrees: 45,
	 *       skewDegrees: { xAxis: 30, yAxis: 30 },
	 *       borderWidth: 25,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *       borderColorRgb: [0.79, 0.25, 1.0],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param options An options object with named parameters.
	 */
	var drawRectangle = function (options) {
	    return [
	        pushGraphicsState(),
	        fillingRgbColor(get_1(options, 'colorRgb[0]', 0), get_1(options, 'colorRgb[1]', 0), get_1(options, 'colorRgb[2]', 0)),
	        strokingRgbColor(get_1(options, 'borderColorRgb[0]', 0), get_1(options, 'borderColorRgb[1]', 0), get_1(options, 'borderColorRgb[2]', 0)),
	        lineWidth(options.borderWidth || 15),
	        translate(options.x || 0, options.y || 0),
	        options.rotateDegrees && rotateDegrees(options.rotateDegrees),
	        options.rotateRadians && rotateRadians(options.rotateRadians),
	        options.skewDegrees &&
	            skewDegrees(options.skewDegrees.xAxis, options.skewDegrees.yAxis),
	        options.skewRadians &&
	            skewRadians(options.skewRadians.xAxis, options.skewRadians.yAxis),
	        moveTo(0, 0),
	        lineTo(0, options.height || 100),
	        lineTo(options.width || 150, options.height || 100),
	        lineTo(options.width || 150, 0),
	        closePath(),
	        // prettier-ignore
	        !isEmpty_1(options.colorRgb) && !isEmpty_1(options.borderColorRgb) ? fillAndStroke()
	            : !isEmpty_1(options.colorRgb) ? fill()
	                : !isEmpty_1(options.borderColorRgb) ? stroke()
	                    : closePath(),
	        popGraphicsState(),
	    ].filter(Boolean);
	};
	/**
	 * Draws a square in a content stream.
	 *
	 * ```javascript
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawSquare({
	 *       x: 25,
	 *       y: 50,
	 *       size: 500,
	 *       rotateDegrees: 45,
	 *       skewDegrees: { xAxis: 30, yAxis: 30 },
	 *       borderWidth: 25,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *       borderColorRgb: [0.79, 0.25, 1.0],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param options An options object with named parameters.
	 */
	var drawSquare = function (options) {
	    return drawRectangle({
	        x: options.x || 0,
	        y: options.y || 0,
	        width: options.size || 100,
	        height: options.size || 100,
	        rotateDegrees: options.rotateDegrees,
	        rotateRadians: options.rotateRadians,
	        skewDegrees: options.skewDegrees,
	        skewRadians: options.skewRadians,
	        borderWidth: options.borderWidth || 15,
	        colorRgb: options.colorRgb || [],
	        borderColorRgb: options.borderColorRgb || [],
	    });
	};

	// TODO: Implement the border* options
	/**
	 * Draws a line of text in a content stream.
	 *
	 * ```javascript
	 * const [timesRomanFont] = pdfDoc.embedStandardFont('Times-Roman');
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawText('This is a line of text!', {
	 *       x: 25,
	 *       y: 50,
	 *       rotateDegrees: 180,
	 *       skewDegrees: { xAxis: 15, yAxis: 15 },
	 *       font: 'Times-Roman',
	 *       size: 24,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addFontDictionary('Times-Roman', timesRomanFont)
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param line    A string of text to draw.
	 * @param options An options object with named parameters.
	 */
	var drawText = function (line, options) { return [
	    PDFTextObject.of(fillingRgbColor(get_1(options, 'colorRgb[0]', 0), get_1(options, 'colorRgb[1]', 0), get_1(options, 'colorRgb[2]', 0)), fontAndSize(options.font, options.size || 12), rotateAndSkewTextRadiansAndTranslate(options.rotateDegrees
	        ? degreesToRadians(options.rotateDegrees)
	        : options.rotateRadians || 0, 
	    // prettier-ignore
	    options.skewDegrees ? degreesToRadians(options.skewDegrees.xAxis)
	        : options.skewRadians ? options.skewRadians.xAxis
	            : 0, 
	    // prettier-ignore
	    options.skewDegrees ? degreesToRadians(options.skewDegrees.yAxis)
	        : options.skewRadians ? options.skewRadians.yAxis
	            : 0, options.x || 0, options.y || 0), text(line)),
	]; };
	/**
	 * Draws multiple lines of text in a content stream.
	 *
	 * ```javascript
	 * const [timesRomanFont] = pdfDoc.embedStandardFont('Times-Roman');
	 * const contentStream = pdfDoc.register(
	 *   pdfDoc.createContentStream(
	 *     drawLinesOfText(
	 *       ['First line of text.', 'Second line of text.'], {
	 *       x: 25,
	 *       y: 50,
	 *       rotateDegrees: 180,
	 *       skewDegrees: { xAxis: 15, yAxis: 15 },
	 *       font: 'Times-Roman',
	 *       size: 24,
	 *       lineHeight: 48,
	 *       colorRgb: [0.25, 1.0, 0.79],
	 *     }),
	 *   ),
	 * );
	 * const page = pdfDoc
	 *   .createPage([250, 500])
	 *   .addFontDictionary('Times-Roman', timesRomanFont)
	 *   .addContentStreams(contentStream);
	 * ```
	 *
	 * @param lines   An array of strings to be drawn.
	 * @param options An options object with named parameters.
	 */
	var drawLinesOfText = function (lines, options) { return [
	    PDFTextObject.of.apply(PDFTextObject, [fillingRgbColor(get_1(options, 'colorRgb[0]', 0), get_1(options, 'colorRgb[1]', 0), get_1(options, 'colorRgb[2]', 0)),
	        fontAndSize(options.font, options.size || 12),
	        lineHeight(options.lineHeight || options.size || 12),
	        rotateAndSkewTextRadiansAndTranslate(options.rotateDegrees
	            ? degreesToRadians(options.rotateDegrees)
	            : options.rotateRadians || 0, 
	        // prettier-ignore
	        options.skewDegrees ? degreesToRadians(options.skewDegrees.xAxis)
	            : options.skewRadians ? options.skewRadians.xAxis
	                : 0, 
	        // prettier-ignore
	        options.skewDegrees ? degreesToRadians(options.skewDegrees.yAxis)
	            : options.skewRadians ? options.skewRadians.yAxis
	                : 0, options.x || 0, options.y || 0)].concat(flatMap_1(lines, function (line) { return [text(line), nextLine()]; }))),
	]; };

	exports.PDFOperators = PDFOperators;
	exports.PDFTextObject = PDFTextObject;
	exports.PDFDocument = PDFDocument;
	exports.PDFDocumentFactory = PDFDocumentFactory;
	exports.PDFDocumentWriter = PDFDocumentWriter;
	exports.PDFObjectIndex = PDFObjectIndex;
	exports.Standard14Fonts = Standard14Fonts;
	exports.PDFArray = PDFArray$$1;
	exports.PDFBoolean = PDFBoolean;
	exports.PDFDictionary = PDFDictionary$$1;
	exports.PDFHexString = PDFHexString;
	exports.PDFIndirectObject = PDFIndirectObject;
	exports.PDFIndirectReference = PDFIndirectReference;
	exports.PDFName = PDFName;
	exports.PDFNull = PDFNull;
	exports.PDFNumber = PDFNumber;
	exports.PDFObject = PDFObject;
	exports.PDFStream = PDFStream$$1;
	exports.PDFRawStream = PDFRawStream$$1;
	exports.PDFString = PDFString;
	exports.parseDocument = parseDocument;
	exports.PDFParser = PDFParser;
	exports.PDFXRef = PDFXRef;
	exports.PDFCatalog = PDFCatalog;
	exports.PDFContentStream = PDFContentStream;
	exports.PDFObjectStream = PDFObjectStream;
	exports.PDFHeader = PDFHeader;
	exports.PDFPage = PDFPage;
	exports.PDFPageTree = PDFPageTree;
	exports.PDFTrailer = PDFTrailer;
	exports.PDFLinearizationParams = PDFLinearizationParams;
	exports.PDFXRefStream = PDFXRefStream;
	exports.drawEllipse = drawEllipse;
	exports.drawCircle = drawCircle;
	exports.drawImage = drawImage;
	exports.drawRectangle = drawRectangle;
	exports.drawSquare = drawSquare;
	exports.drawText = drawText;
	exports.drawLinesOfText = drawLinesOfText;
	exports.clip = clip;
	exports.clipEvenOdd = clipEvenOdd;
	exports.degreesToRadians = degreesToRadians;
	exports.translate = translate;
	exports.scale = scale;
	exports.rotateRadians = rotateRadians;
	exports.rotateDegrees = rotateDegrees;
	exports.skewRadians = skewRadians;
	exports.skewDegrees = skewDegrees;
	exports.dashPattern = dashPattern;
	exports.restoreDashPattern = restoreDashPattern;
	exports.lineCap = lineCap;
	exports.lineJoin = lineJoin;
	exports.popGraphicsState = popGraphicsState;
	exports.pushGraphicsState = pushGraphicsState;
	exports.lineWidth = lineWidth;
	exports.appendBezierCurve = appendBezierCurve;
	exports.closePath = closePath;
	exports.moveTo = moveTo;
	exports.lineTo = lineTo;
	exports.rectangle = rectangle;
	exports.square = square;
	exports.stroke = stroke;
	exports.fill = fill;
	exports.fillAndStroke = fillAndStroke;
	exports.endPath = endPath;
	exports.nextLine = nextLine;
	exports.textPosition = textPosition;
	exports.text = text;
	exports.fontAndSize = fontAndSize;
	exports.charSpacing = charSpacing;
	exports.wordSpacing = wordSpacing;
	exports.charSqueeze = charSqueeze;
	exports.lineHeight = lineHeight;
	exports.textRise = textRise;
	exports.textRenderingMode = textRenderingMode;
	exports.textMatrix = textMatrix;
	exports.rotateAndSkewTextRadiansAndTranslate = rotateAndSkewTextRadiansAndTranslate;
	exports.rotateAndSkewTextDegreesAndTranslate = rotateAndSkewTextDegreesAndTranslate;
	exports.image = image;
	exports.fillingGrayscaleColor = fillingGrayscaleColor;
	exports.strokingGrayscaleColor = strokingGrayscaleColor;
	exports.fillingRgbColor = fillingRgbColor;
	exports.strokingRgbColor = strokingRgbColor;
	exports.fillingCmykColor = fillingCmykColor;
	exports.strokingCmykColor = strokingCmykColor;

	Object.defineProperty(exports, '__esModule', { value: true });

})));