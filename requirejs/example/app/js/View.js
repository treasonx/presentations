define(['text!template.html',
				'order!jquery',
				'order!jquery_tmpl'], function(Templates) {
	return function View(parentSelector) {
		var container;
		
		//load templates
		$('#person', Templates).template('personTemplate');
		$('#employee', Templates).template('employeeTemplate');
		$('#manager', Templates).template('managerTemplate');

		this.displayEmployee = function(emp) {
			var tmpl = $.tmpl('personTemplate', emp),
					empTmpl = $.tmpl('employeeTemplate', emp);
			tmpl.append($('tr',empTmpl)).appendTo(parentSelector);
						
		};

		this.displayPerson = function(p) {
			$.tmpl('personTemplate', p).appendTo(parentSelector);
		};

		this.displayManager = function(m) {
			var tmpl = $.tmpl('personTemplate', m),
					mTmpl = $.tmpl('employeeTemplate', m);
			tmpl.append($('tr',mTmpl));
			mTmpl = $.tmpl('managerTemplate', m);
			tmpl.append($('tr',mTmpl)).appendTo(parentSelector);

		};


		
	};

});
