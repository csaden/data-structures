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
    this.createNewStorage();
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i) === null || this._storage.get(i) === undefined) {
    return null;
  }
  return this._storage.get(i)[k];

};

HashTable.prototype.remove = function(k){
  //this._items--;
	var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket) {
    var idx = _.indexOf(bucket, bucket[k]);
    bucket.splice(idx, 1);
    this._items--;
  }
	

  if (this._items < (this._limit * .5)) {
    console.log(this._limit);
    this._limit /= 2;
    console.log(this._limit);
    this.createNewStorage();
  }
};

HashTable.prototype.createNewStorage = function() {
  var newStorage = LimitedArray(this._limit);

  // for each item in the storage
  this._storage.each(function(v, k, arr) {
    // get the k, v from storage
    // generate new hash key for the k using (k and this._limit)  
    var i = getIndexBelowMaxForKey(k, this._limit);
    if (newStorage && (newStorage.get(i) === undefined || newStorage.get(i) === null)) {
      var obj = [];
      newStorage.set(i, obj);
    }
    newStorage.get(i)[k] = v;
  });

  this._storage = newStorage;

};

// Create New Storage Function
  // create new storage object
  // for each item in old storage, 
    // create new hash
    // check if bucket exists in new storage
      // get bucket if it exists
      // otherwise, create the bucket
    // insert into new storage

/*
 * Complexity: What is the time complexity of the above functions?
 */