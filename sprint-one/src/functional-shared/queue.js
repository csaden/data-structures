var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.length = 0;
  obj.beginning = 1;
  obj.storage = {};

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
	enqueue: function (value) {
		this.storage[this.beginning + this.length] = value;
		this.length++;
	},
	dequeue: function () {
		if (this.length > 0) {
			this.length--;
			this.beginning++;
		}
		return this.storage[this.beginning - 1];
	},
	size: function() {
		return this.length;
	}
};



