define(['Person'], function(Person) {
	function Employee() {
		this.jobTitle = 'Support Monkey';
		this.department = 'IT';
		this.salary = 123000;
	}

	Employee.prototype = new Person();

	return Employee;

});
