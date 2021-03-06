/*eslint-env mocha*/
/*global BOOMR,BOOMR_test,assert,describe,it*/

describe("e2e/05-angular/108-iframe-wait-for-spa", function() {
	var tf = BOOMR.plugins.TestFramework;
	var t = BOOMR_test;

	it("Should pass basic beacon validation", function(done) {
		t.validateBeaconWasSent(done);
	});

	it("Should have only sent one beacon", function() {
		// only one beacon should've been sent
		assert.equal(tf.beacons.length, 1);
	});

	it("Should have finished 1 iframe", function() {
		var b = tf.lastBeacon();
		assert.equal(b["ifdl.ct"], 1);
	});

	it("Time the iframe delay plugin was done and the t_done should be close to equal", function() {
		var b = tf.lastBeacon();
		if (t.isNavigationTimingSupported()) {
			assert.closeTo(b.t_done, b["ifdl.done"] - window.performance.timing.navigationStart, 5);
		}
	});
});
