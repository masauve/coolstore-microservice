'use strict';

angular.module("app")

.factory('review', ['$http', '$q', 'COOLSTORE_CONFIG', 'Auth', '$location', function($http, $q, COOLSTORE_CONFIG, $auth, $location) {
	var factory = {}, baseUrl;

    baseUrl="http://coolstore-prod-apicast.apps.myocp.net/api/review";
	

    factory.getReviews = function(itemId) {
		var deferred = $q.defer();
        $http({
            method: 'GET',
            url: baseUrl + "/" + itemId+"?USER_KEY="+COOLSTORE_CONFIG.USER_KEY
        }).then(function(resp) {
            deferred.resolve(resp.data);
        }, function(err) {
            deferred.reject(err);
        });
	   return deferred.promise;
	};

	return factory;
}]);
