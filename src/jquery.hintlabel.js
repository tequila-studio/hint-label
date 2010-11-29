(function($) {
	$.fn.hintlabel = function(settings){
		
		// defaults values:
		var defaults = { allowedFieldsTypes: 'input[type=text], textarea' };
		
		// merge defaults with the specified settings
		$.extend(defaults, settings);
		
		// foreach label, find & update the next input or textarea
		return this.each(function() {
			
			// store the most used parameters in local vars 
			// to avoid parsing the DOM again and again
			var label = $(this);
			var text  = label.text();
			var field = label.next(defaults.allowedFieldsTypes);
			
			// if the next field does not exist or is not of allowed
			// type, we have nothing to do
			if (field.length == 0)
		    return;
		
			// hide the original label
			label.hide();
			
			// if the field is empty, replace it with the 
			// label's text on page load
			if (field.val() == '') field.val(text);
			
			field
				.focus(function() {
					// if the value is equal to the label's text, 
					// remove it on focus
					if (field.val() == text) field.val('');
				})
				.blur(function() {
					// if the value is empty on blur,
					// replace it with text
					if (field.val() == '') field.val(text);
				})
		})
	}
})(jQuery);