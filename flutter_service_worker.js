'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cc0bf51ac0c2bb42cb900f6ea0209e26",
"assets/AssetManifest.bin.json": "db1cfbb69c9e9d224295f2de8bfdedf1",
"assets/AssetManifest.json": "8630daf6e7e2f705d5f6e7717525286c",
"assets/assets/Animation/animated_login_character.riv": "3a864a25d892b7d95e7964ce144614bc",
"assets/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/assets/fonts/Cairo-Black-1.ttf": "2594318e02816dbea2837af4c5a6b0e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/assets/images/Logo.jpg": "5184b0ef23bdca22db2c1577fe8ee7b8",
"assets/assets/images/photo_1.jpg": "3657e9c1fa871a6d7c9ade76d6878a62",
"assets/assets/images/photo_2.jpg": "3846ccc2e5517280972febc9044f1de5",
"assets/assets/images/photo_3.jpg": "d9a7a6596b17d27dd59703b0036c42ba",
"assets/assets/images/photo_4.jpg": "fa63771b968c6764ef32aa895d96cd0c",
"assets/assets/images/splashscreen.jpg": "5d50ce2760fc2cd4b31cfaaf7caf3f3c",
"assets/assets/infoIcon.png": "0aa75311081b0cac43dd965724dcb310",
"assets/assets/photo.jpg": "0dc71f3688590e9346a5860f958bc9c6",
"assets/assets/photo_1.jpg": "b4da4e35996ffe14501d2616ff202941",
"assets/assets/photo_2.jpg": "3c2f9718f4475c8550706be2d66e6199",
"assets/assets/photo_3.jpg": "8b4c5ec1b1a93f38e88773cf4d5802f3",
"assets/assets/photo_4.jpg": "010cba50ee5496d8532ca3ae65bf14ed",
"assets/assets/photo_5.jpg": "663eb4341fdd929599c2e8375384c650",
"assets/assets/photo_6.jpg": "d9e3de5f7e20b6d801864b35731da354",
"assets/assets/priceSlider.png": "5e5857e16517905351da7d78110cc4d8",
"assets/assets/share.png": "47b202b4eff453a7568bbf6116db5340",
"assets/assets/splash.mp4": "0bb072f0636af69b7b5c8b682041ce8a",
"assets/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/FontManifest.json": "cb74e12bff6c9e91481bc5b3148c7b42",
"assets/fonts/MaterialIcons-Regular.otf": "aab1f476054caf62cc2c0c5d747bc481",
"assets/NOTICES": "7ea2e187af092aee8c2cb4f506d8c79d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bdbd9122e98875aa3ce380b025dfe288",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "fa3c2889160271339fea04d2a1c9627b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4768b2d76df0c8be647f56d44a01e0f4",
"/": "4768b2d76df0c8be647f56d44a01e0f4",
"main.dart.js": "43ea9713e8b015acf8af1ec7ecf91eca",
"manifest.json": "6418610d7e3d5372797d6916635a6c0e",
"version.json": "87c8bb477f19c265c21712c4591daca6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
