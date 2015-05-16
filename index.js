module.exports = {
	isoString: function(date) {
		if(date) {
			date = new Date(date);
			return date.toISOString();
		}
		else {
			date = new Date();
			return date.toISOString();
		}

	},

	dateString: function(isoDate) {
		if(isoDate) {
			return new Date(isoDate);
		}
		else {
			return new Date();
		}

	}
}