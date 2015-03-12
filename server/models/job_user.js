/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var User      = require('./user'),
var Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var JobUser = db.Model.extend({
	tablename: 'jobs_users',
	hasTimestamps: true,
	listings: function(){
		return this.belongsTo(Listing, 'job_id');
	},
	users: function(){
		return this.belongsTo(User, 'user_id');
	}
});

module.exports = JobUser;