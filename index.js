// Array Functions
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, item => result.push(callback(item)));
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (!acc) {
      const keys = Object.keys(collection);
      acc = collection[keys[0]];
      startIdx = 1;
    }
    const keys = Object.keys(collection);
    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key]);
    }
    return acc;
  }
  
  
  function myFind(collection, predicate) {
    for (const item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, item => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions (continued)
  function myFirst(array, n) {
    if (!n) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (!n) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  