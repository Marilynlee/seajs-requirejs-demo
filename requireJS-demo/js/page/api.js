define(['jquery'],function ($) {
	return{
		getUser:function(){
			var def=$.Deferred();
			require(['./info'],function (user) {
				def.resolve(user);
			});
			return def;
		}
	}
});