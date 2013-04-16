if(jQuery) (function($) {
	$.fn.initHiSelector = function(option) {
		return this.each(function() {
			var defaults = {
					titleLeft: 'To be Selected',
					titleRight: 'Selected Items',
					searchable: 'both',	//both, left, right
					searchLocation: 'name', //both, name, value
					searchWhenTyping: true, //false will search when enter key is pressed
					items: {name1: 'value1', name2: 'value2'}
			};
			var $ts = $(this);
			var opt = $.extend(defaults, option);
		});
	}
	
	function getLevelOfObject(obj) {
		var level = 1;
		return _getLevel(obj, level);
	}
	function _getLevel(obj, level) {
		if(obj instanceof Object && !obj instanceof Date) {
			var max = 0;
			for(var prop in obj) {
				var cur = _getLevel(obj, level);
				if(max < cur) max = cur;
			}
			return level + max;
		} else {
			return level;
		}
	}
})(jQuery);