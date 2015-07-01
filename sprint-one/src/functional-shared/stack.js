var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.length = 0;
  obj.storage = {};

  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
	push: function(value) {
		this.length++;
		this.storage[this.length] = value;
	},
	pop: function(){
		if(this.length > 0) {
			this.length--;
		}
		return this.storage[this.length + 1];
	},
	size: function(){
		return this.length;
	}
};

