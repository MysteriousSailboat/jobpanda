/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var Comapny 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tablename: 'industries',
	companies: function(){
		return this.hasMany(Company);
	}
});

module.exports = Position;