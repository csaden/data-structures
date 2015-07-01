var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.beginning = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.length + this.beginning] = value;
	this.length++;
};

Queue.prototype.dequeue = function(){
	if(this.length > 0) {
		this.length--;
		this.beginning++;
	}
	return this.storage[this.beginning-1];
};

Queue.prototype.size = function(){
	return this.length;
};
