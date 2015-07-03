var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var j;
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined || this._storage.get(i) === null){
  	var obj = [];
  	this._storage.set(i, obj);
  }
  this._storage.get(i)[k] = v;

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(i) !== null || this._storage.get(i) !== undefined) {
  // 	return this._storage.get(i).contains(k);

  // }
  return this._storage.get(i)[k];

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.get(i)[k] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */