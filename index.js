module.exports = {
	isoString: function(date) {
		if(date) {
			dDate = new Date(date);
			return dDate.toISOString();
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