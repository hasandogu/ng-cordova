// install  :   cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git
// link   :   https://github.com/petermetz/cordova-plugin-ibeacon

angular.module('ngCordova.plugins.iBeacon', [])
.factory('$cordovaiBeacon', ['$q', function ($q) {

  return {

	createDelegate: function () {
	  return new cordova.plugins.locationManager.Delegate();
	},

	setDelegate: function (delegate) {
	  return cordova.plugins.locationManager.setDelegate(delegate);
	},

	createBeaconRegion: function (identifier, uuid, major, minor) {
	  return new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
	},

	requestWhenInUseAuthorization: function () {
	  var q = $q.defer();

	  cordova.plugins.locationManager.requestWhenInUseAuthorization().then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	},

	requestAlwaysAuthorization: function () {
	  var q = $q.defer();

	  cordova.plugins.locationManager.requestAlwaysAuthorization().then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	},

	startMonitoringForRegion: function (beaconRegion) {
	  var q = $q.defer();

	  cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion).then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	},

	stopMonitoringForRegion: function (beaconRegion) {
	  var q = $q.defer();

	  cordova.plugins.locationManager.stopMonitoringForRegion(beaconRegion).then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	},

	startRangingBeaconsInRegion: function (beaconRegion) {
	  var q = $q.defer();

	  cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion).then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	},

	stopRangingBeaconsInRegion: function (beaconRegion) {
	  var q = $q.defer();

	  cordova.plugins.locationManager.stopRangingBeaconsInRegion(beaconRegion).then(function (result) {
		q.resolve(result);
	  }).fail(function (error) {
		q.reject(error);
	  }).done();

	  return q.promise;
	}

  };
}]);