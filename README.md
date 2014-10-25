json-keys
=========

A utility helper for getting **all the keys** recursively from an object that has an unknown size; meaning it's a deep hierarchy of object literals and/or of arrays of object literals. This came up on a  [StackOverflow](http://stackoverflow.com/questions/26560435/html5-json-multidimensional-arrays-keys-with-javascript-or-jquery/26563494#26563494) question that I answered.


#### Create a new instance passing in the object hierarchy.

`data` is a predefined object hierarchy.

    var jsonKeys = new JSONKeys(data);
    allKeys = jsonKeys.getAll();

