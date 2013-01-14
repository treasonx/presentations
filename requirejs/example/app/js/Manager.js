define(['Employee'], function(Employee) {
	function Manager() {
		this.jobTitle = 'Boss';
		this.numEmployees =99;
	}

	Manager.prototype = new Employee();

	return Manager;
});
