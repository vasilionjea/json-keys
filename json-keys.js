/*
 * JSONKeys:
 * Retrieves all keys from an object of unknown size using recursion.
 */
var JSONKeys = (function() {
  var 
  _isObject = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  },

  _eachKey = function(obj, callback, context) {
    Object.keys(obj).forEach(callback.bind(context));
  };

  function JSONKeys(obj) {
    this._container = [];

    if (_isObject(obj)) {
      this._data = obj;
    } else if (typeof obj === 'string') {
      this._data = JSON.parse(obj);
    } else {
      throw new Error('The provided argument must be an object literal or a JSON string.');
    }
  }

  JSONKeys.prototype = {
    constructor: JSONKeys,

    _recur: function(key, data) {
        // If this key's value is also an object go deeper.
        if (_isObject(data[key])) {
          this._collect(data[key]);
        }

        if (Array.isArray(data[key])) {
          // Because we're looping through an array and each array's item is an object, 
          // the `_collect` method is receiving each object of the array as an argument.
          data[key].forEach(this._collect.bind(this));
        }
    },

    _collect: function(data) {
      _eachKey(data, function(key) {
        this._container.push(key);

        // Continue collecting
        this._recur(key, data);
      }, this);
    },

    getAll: function() {
      this._collect(this._data);
      return this._container;
    }
  };

  return JSONKeys;
}());
