define(['Person',
				'Employee',
				'Manager',
				'View',
				'jquery'], function(Person, Employee, Manager, View) {
	var m = new Manager(),
			p = new Person(),
			e = new Employee(),
			view = new View('#wrapper');
		$(function(){
			view.displayPerson(p);
			view.displayEmployee(e);
			view.displayManager(m);
		});	
	
	
});
