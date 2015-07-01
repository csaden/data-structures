var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var beginning = 1;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[beginning + length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    if(length > 0) {
      length--;
      beginning++;
    }
    return storage[beginning - 1];
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};