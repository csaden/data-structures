var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._items = 0;
};

HashTable.prototype.insert = function(k, v){
  this._items++;
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined || this._storage.get(i) === null){
  	var obj = [];
  	this._storage.set(i, obj);
  }
  this._storage.get(i)[k] = v;

  if (this._items > (this._limit * .75)) {
    this._limit *= 2;
    

  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(i) !== null || this._storage.get(i) !== undefined) {
  // 	return this._storage.get(i).contains(k);

  // }
  return this._storage.get(i)[k];

};

HashTable.prototype.remove = function(k){
  this._items--;
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.get(i)[k] = null;
};

HashTable.prototype.createNewStorage = function() {
  
};


// In Insert
  // if length.storage > 75%
  // change limit
  // call create new storage function

// In remove
  // if length.storage is less than 75% of half
  // change limit
  // call create new storage function


// Create New Storage Function
  // create new storage object
  // for each item in old storage, 
    // create new hash
    // insert into new storage

/*
 * Complexity: What is the time complexity of the above functions?
 */