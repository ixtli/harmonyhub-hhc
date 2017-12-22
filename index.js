const HarmonyHubDiscover = require("harmonyhubjs-discover");
const discover = new HarmonyHubDiscover(61991);

discover.on('online', function (hub) {
	console.log('discovered', hub.ip);
});

discover.on('offline', function (hub) {
	console.log('lost', hub.ip);
});

discover.on('update', function (hubs) {
	const knownIPs = hubs.reduce((prev, hub) => {
		return prev + (prev.length > 0 ? ', ' : '') + hub.ip
	}, '');
	console.log("known ips", knownIPs);
});

discover.start();