var Graph = function(){
	this.graph = {};
	// this.nodes = [];
};

Graph.prototype.addNode = function(node){
	this.graph[node] = [];
	// this.nodes.push(node);
};

Graph.prototype.contains = function(node){
	return this.graph.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
	delete this.graph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	return _.contains(this.graph[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.graph[fromNode].push(toNode);
	this.graph[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.graph, function(value, key, collection) {
		cb(key);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



