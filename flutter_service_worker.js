'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8615550beea064848b49ef50b22fc0de",
".git/config": "20ae1add1fa786934950012baafed2c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dfe60093657aef26f47fd461117018f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eeaf6583512b9675596dc9f6256bf3a2",
".git/logs/refs/heads/main": "80eb845932e9216b258bd33fba0346ae",
".git/logs/refs/remotes/origin/main": "a31fd563677ec17c2cb539c36e60914d",
".git/objects/00/f7fd098fea1f957935d771eb9775ee159f6476": "8ed675e2f6576292d28d7a41cbb7916c",
".git/objects/01/6b441c50ca76620bf7732149339a96ff39e305": "8a07298b8fd295b4c7ebdfb5fe7ced75",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/8339dff591358fc826dffcc70940b84151ea0d": "3f8ee23f1da48fbbd9e009310796ea20",
".git/objects/12/73eb3e33ec38fc7e95c1749ed74873818126d9": "0637966a3ab8d8d34c77564f655ae506",
".git/objects/13/aebc8e2cc1713fd3f3e9244992c17d0830b5d5": "854e247a20bf388d8026c46fb84daffd",
".git/objects/14/12be4f317440d3e88c4b9fe6ed3004de9e0916": "8cf43e628eea006a0eb5779bbc88c31e",
".git/objects/1d/4a095a1e81c6f92f98ff380278c9ba07380e6b": "ed915fbb453d4675cd369eb77a06e263",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/a08ed2e5403fa75facc68859a35366b25f6ae3": "2e9de02ce976f6725da430f9340000c7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3a/68e00b65192dfd3c1304b24555c9c68e30a49d": "1f8b404246d01d03246266305a6003df",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/315a0366dea254ea5a54e16fa82eb93bcec10b": "45ef09bdc8080d1d274f37794abbaac1",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/c4be9590fc76e9e7ab6e10ad58ffbcb85d35bc": "c0b6a7615b79188c3c3fa53235eb10fb",
".git/objects/59/04e0783429ac29d97081d74e436385c9206538": "3b59d74d6193623d3fd720a938ab188c",
".git/objects/5b/a2903e1c9fd82273d9914150e696df3fdb60ec": "4bde5276d8b513916e4fc0a5c64a1a11",
".git/objects/5d/f8894da2d06c14596223a79831d7d1965bac5a": "fe192f1b09ec4b5e37cdda4c8d176a04",
".git/objects/67/71d924a63eb172b181b2a0cef4945e2bdae17a": "6ca0600adcfc99da7ec7ffe007a924f8",
".git/objects/72/f5c42324f07a2855ffcceab8d565352abfe225": "b14f908bb009668f3e82c46a2a3d64f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/84/17cbedcc2d591fb373ccd03befe6e61efbb20e": "693898a2fb7b3d8ab267db9b334a9bb0",
".git/objects/86/24c9861bb3411fbd0be846675d7c6b9d2d8342": "be84491b96f29b890edd2b4be6528707",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/afe9c8f26c52cdd10b44c61cc326c0ee47e2e0": "8385c98d3ce76d34299da1a43f47f51c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/a94ebbfc514910de8e6e6183e9d0949b477a2b": "cb873604db8cfbccd77ec116d5afd6b8",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/1fb9292b0bfab60404d1b5e2d41d2c8dc6a65e": "2b0d0576d1e0417b2c9bb5c28cee1c0e",
".git/objects/9d/e3b0e632e704c073de9281cf1af56ff40b1989": "dc796fdca2999134cc58858b3582d169",
".git/objects/a1/19d49328ee83881abe932bc03e52961c9d581e": "43b77c8d90bfb968b5e142fad240c0ec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/3915176edfae550b6071ed0c3d7b7fb39d16f4": "abb9c7a4d1f7dcaade78199ac9490c2d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c7b118dd293e06b7445f9ac8cac0357f8bfc6b": "9b8b5ba202e17ba6702a4d4887b0f2c8",
".git/objects/ac/4efaf2eb6a812cbf6da756ac4b342bf428715a": "9cd9437060d34aea1784e1a9376c3b7e",
".git/objects/af/e78b3c497ee0c5b2058da45e03ed5f5a5c7104": "29d4257f5581393c9fc34a0cfb416eda",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/793b5b6cc9097f2309fedaaf1a51ad537a22fe": "52375de507b8ddfe9d149577c964b72d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c8/24977fc0f2e450db0b03bfcf57984ce3e816c6": "cf853b296f0604ebd6ea024df555a21a",
".git/objects/c8/84dd4dd2f3d4e349fb9c0f7d293a0b290c4112": "310e58caab0f6c308c8c0c77b2ade9bc",
".git/objects/c9/fc825170481c7e2e948843512028fab376b6fb": "766bccecdb202f614b8fa569f22f7f9e",
".git/objects/cb/8a5114f9afd8cecfefb0daf1adfb2b56f5f56b": "f93a1871b0f63c5128f372bba0fa1685",
".git/objects/cd/28e7f84725c074841ecea58a1356b0d830ca69": "f8589b419f0636d5d44de8287c27cf55",
".git/objects/ce/56050365f9b562542218defb04f01a91886bc4": "198385a5a739c9543aefed283e4aa615",
".git/objects/cf/0d33f06d339846013ff1585bad5e91563671fb": "489eb0213d0ad7a5296b32b88d55360e",
".git/objects/d0/0f6d23ba4b294eec4587bf83b116736d17276b": "c44e2257a7ade9a523887cd3da54974b",
".git/objects/d0/692fdf45cb0d5dd5e1b1e58110389f76fb113b": "8267c4224929c38ca2df7432be018225",
".git/objects/d1/bd125c89da8af096a9b3e50f8e7bbf1b809ad2": "b4590027b90e2bb8808ca9c5a8f74530",
".git/objects/d3/9eb5252b0fc8e7f36b1641aa340b300e8152e5": "0fc27960e44f834d448f9d72090dbbad",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/50d46279cc94f4e56a806e2bb5fadcc3c3ac37": "a2a717fc0b8a2964d2919c364a8a3244",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/276b8477066017cc0fead96d7cd4befa9c84e9": "c6c4e037f7518af3569dd34bc7f32a41",
".git/objects/da/509850506596e9c6bd392de7f8b7b43cce9b1a": "e814cd63b2822ec8ee085c27390c8977",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/3801090103bddef8541c7dda2cdb3440bc9446": "e9981693a0c521fb3483260e60c4e9bc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "5d205bfd021d2ce0b7baad2e099f447a",
".git/refs/remotes/origin/main": "5d205bfd021d2ce0b7baad2e099f447a",
"assets/AssetManifest.bin": "41ae56b8d1ed00b1611084336eb5ea05",
"assets/AssetManifest.json": "a226707883c749b9c9af859067ff1090",
"assets/assets/Toshiba.png": "7349849675366f3296572c692eace688",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c42ea49e4ed1384da7ab894bbb2efb11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b27d0a4758d41b67bf0e1511f16227af",
"/": "b27d0a4758d41b67bf0e1511f16227af",
"main.dart.js": "465153207313fe9a1666d349b670581b",
"manifest.json": "a09acdf1da3964f954ed3f76ec77c08d",
"version.json": "cb38d5a9e130ace5073601e1a542d0ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
