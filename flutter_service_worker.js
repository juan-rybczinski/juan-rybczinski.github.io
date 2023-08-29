'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a8aec62dc28a44b4c0f678b735bb8655",
"index.html": "7f0bd09d5e0d7c64f4e8ba01fd57f733",
"/": "7f0bd09d5e0d7c64f4e8ba01fd57f733",
"main.dart.js": "82637786d014f74547e8c8087f94902d",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2c70f48177ba07a5109c0235a3f575d",
"assets/AssetManifest.json": "2ac271f6abbf51ef9834b51db0881628",
"assets/NOTICES": "3349e958959cd5eb09b3debe9a2c41b8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/web/web_support.js": "1c365cc5ce2a69c366034266252d2cfa",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "43e94bf8a236533bbfb7bb6224677cb0",
"assets/fonts/MaterialIcons-Regular.otf": "65e21b5db78a7c132bbb04776ec9c399",
"assets/assets/html/16/5_14.jpg": "27917eb0ea4a1a71a31a78e009bc80a3",
"assets/assets/html/16/0_9.jpg": "ba3aa7b505a0093b4b953abbd65115a0",
"assets/assets/html/16/8_0.jpg": "b0d5373ff025a62b019b729208a6cf00",
"assets/assets/html/16/7_11.jpg": "069667d8475845c044ac562734b143fe",
"assets/assets/html/16/7_10.jpg": "73420b7042a95e026e90efd966318fe7",
"assets/assets/html/16/8_1.jpg": "9325f30226d540071c35c0efcc54128a",
"assets/assets/html/16/0_8.jpg": "71a6f5e14279530e00410c50e9706560",
"assets/assets/html/16/5_15.jpg": "b76c55b63b80b30882a29767ab939d2d",
"assets/assets/html/16/5_17.jpg": "04f86ceeb5d2896a6ee1da47b5c2d618",
"assets/assets/html/16/2_8.jpg": "662c9c0b557aa6ec89d8efa95a2baabc",
"assets/assets/html/16/8_3.jpg": "c5ef7c6c47837593b30051e7612febf2",
"assets/assets/html/16/7_12.jpg": "aa5d40932f94928f2e355a3ceeeef9d3",
"assets/assets/html/16/7_13.jpg": "77f9dbafde09aa397666f8cef7ac8d7c",
"assets/assets/html/16/8_2.jpg": "4cb8bb939fb4ad547ec6a764f9f7dbe2",
"assets/assets/html/16/2_9.jpg": "43c4c8326b6664c77b4c8da8e70e6861",
"assets/assets/html/16/5_16.jpg": "a667e9d8b49e53acdc10ddbbcaf70979",
"assets/assets/html/16/5_12.jpg": "12918a1394792ed287fb3547bb243c7a",
"assets/assets/html/16/8_6.jpg": "469b48ac13108989e0760f975eebe254",
"assets/assets/html/16/6_9.jpg": "4f8d26e4be037041e534eb140ba70f9b",
"assets/assets/html/16/7_17.jpg": "f0c55c2a56c73face56502dd418cf16f",
"assets/assets/html/16/7_16.jpg": "5667a783d3a0b560da50492d0d0fe185",
"assets/assets/html/16/6_8.jpg": "943067d21b93809f9e34d93991c5d944",
"assets/assets/html/16/8_7.jpg": "2d6da3b9f33cfbd94b6c6aa02a6185a5",
"assets/assets/html/16/5_13.jpg": "bd714b1f77fbf46401fe487763e24651",
"assets/assets/html/16/5_11.jpg": "c59c72a1464630120d161384490e9e5f",
"assets/assets/html/16/8_5.jpg": "1686eee64cb3737f308f899070a5ea0c",
"assets/assets/html/16/7_14.jpg": "61c038874a6f0c077a9aff42af10e5d8",
"assets/assets/html/16/4_8.jpg": "617bd4b84094564c68a26e167c8aeb87",
"assets/assets/html/16/4_9.jpg": "6c17a3267438a1bec31a230a7e21c8d7",
"assets/assets/html/16/7_15.jpg": "c7d98442c22956cd2504269bc6d23a20",
"assets/assets/html/16/8_4.jpg": "800f9c2804e4b0a10ff9ddcbb71a94a2",
"assets/assets/html/16/5_10.jpg": "6c3ff9199dbed3d103c6f6e1a1c822c6",
"assets/assets/html/16/1_13.jpg": "8039a5882158b292af5e9b3ba871bf55",
"assets/assets/html/16/3_16.jpg": "86d979e47d8c1b4c0fef433838eb9655",
"assets/assets/html/16/3_8.jpg": "a46257aead7bd3a5f8c00a6a5f04c0a5",
"assets/assets/html/16/3_9.jpg": "6df9366f05bfcc06d3d48aa1e05b9359",
"assets/assets/html/16/3_17.jpg": "a29b53ba5ec3a9b37d781c194d6a1ca7",
"assets/assets/html/16/1_12.jpg": "0c05f7f3f41cbb544ba15b1bb1dde701",
"assets/assets/html/16/1_10.jpg": "25dea6fe15f4d987865b90c17b1f3a77",
"assets/assets/html/16/3_15.jpg": "e0a99f331c22076944c408e455b7589f",
"assets/assets/html/16/1_9.jpg": "98cfe05b7ec7ab8a62dc926eafe6da32",
"assets/assets/html/16/1_8.jpg": "15d5bf009ae07c111d6dd52fb5019ff0",
"assets/assets/html/16/3_14.jpg": "b98b21e1b36a368b268d41c98b33695f",
"assets/assets/html/16/1_11.jpg": "16c632520bed978379147e87d9271ea1",
"assets/assets/html/16/5_8.jpg": "3930c82b641b7cb7d9534521c5c7467a",
"assets/assets/html/16/1_15.jpg": "84514309720173ebd7792255ae753e57",
"assets/assets/html/16/3_10.jpg": "847362859d46fb24fcd5ccfc383cff3a",
"assets/assets/html/16/3_11.jpg": "8ab4afc8aa753caae1e8da23281554cb",
"assets/assets/html/16/1_14.jpg": "44aa425ad049d55dfac8aa6e99058b6c",
"assets/assets/html/16/5_9.jpg": "002938fd2f7995ceb1640cb5eaabbf35",
"assets/assets/html/16/1_16.jpg": "8cec9ee5391d8d19a89b3c4245bef721",
"assets/assets/html/16/7_9.jpg": "f89fe2d30d4e08be7168ff63dd3be0b3",
"assets/assets/html/16/3_13.jpg": "4d3227197b060b68619a192f44e7177b",
"assets/assets/html/16/3_12.jpg": "fcbdfbd20357e5d6a3b1d367576a2071",
"assets/assets/html/16/7_8.jpg": "1b8f171adfea49c9f2e49441259044ae",
"assets/assets/html/16/1_17.jpg": "9297f5ff7b8a78e1ed945418144f1305",
"assets/assets/html/16/5_7.jpg": "a514b85df176bb406585c4c8f2f861f2",
"assets/assets/html/16/8_16.jpg": "5948a4f3604417a8c3fece1dbe73013b",
"assets/assets/html/16/6_13.jpg": "90c25d91aa8e9e93fef64ab08531d5b8",
"assets/assets/html/16/7_5.jpg": "17ffadcd9cc8389dd5c5604724ef26c5",
"assets/assets/html/16/4_16.jpg": "114b2519eca8121116bea9fb36a17e8c",
"assets/assets/html/16/1_3.jpg": "f1235f6983851cd3c7a4efa7b58ba38c",
"assets/assets/html/16/3_1.jpg": "c362b32be903d5bad420d7d32947e6c7",
"assets/assets/html/16/3_0.jpg": "41eb4ca784c197a73857e3ab7a49192b",
"assets/assets/html/16/1_2.jpg": "423b0d1e4500a0515109e8a351f10e56",
"assets/assets/html/16/4_17.jpg": "1baa4d13706017790423e4c6432668e7",
"assets/assets/html/16/7_4.jpg": "5a6507efe3fc1b01d00181d67567a28e",
"assets/assets/html/16/6_12.jpg": "fa20247dbdb0ebe4b709677dc0a4fa3c",
"assets/assets/html/16/8_17.jpg": "832a1695f77cab4030300180084f7d82",
"assets/assets/html/16/5_6.jpg": "00d39876bacc87c6b25809fc80e32a5f",
"assets/assets/html/16/5_4.jpg": "0c7ba1ff654b17a9a2ead32df84db795",
"assets/assets/html/16/8_15.jpg": "67b7e2ab97f8fa755aee34021d24ede1",
"assets/assets/html/16/6_10.jpg": "b719fe13302907f81c14b40ed15b22f0",
"assets/assets/html/16/7_6.jpg": "c0027bff29fa02a6db33bc1a32b77293",
"assets/assets/html/16/4_15.jpg": "52fadb332664ada00aab6340da9d07bd",
"assets/assets/html/16/1_0.jpg": "66ac68ae7af992e7b6cb889138f006da",
"assets/assets/html/16/3_2.jpg": "ffe9af7b1ce147ea586eeff68808f607",
"assets/assets/html/16/3_3.jpg": "2c4b52f24011842ddabc224dc1fb4e02",
"assets/assets/html/16/1_1.jpg": "bbb3ae92f874a33c476077ccea6c599e",
"assets/assets/html/16/4_14.jpg": "1d743551de8443f584a12fd4a1bfded0",
"assets/assets/html/16/7_7.jpg": "14c1bb6368e5875ef619f0702e5b9fb0",
"assets/assets/html/16/6_11.jpg": "5756e6efc22eccd7eb7879a2c36e8f63",
"assets/assets/html/16/8_14.jpg": "5cd07b42c8522fab780d18367c4ed1b9",
"assets/assets/html/16/5_5.jpg": "25f81ddfd780ca1493a6a07370d29eb9",
"assets/assets/html/16/5_1.jpg": "8c6f255d89f719718ce9d5b2090bbae0",
"assets/assets/html/16/6_15.jpg": "0443af8b6359499a3f7918db97ad404f",
"assets/assets/html/16/8_10.jpg": "1cbc2d60683a466e2e3a7538be36bc96",
"assets/assets/html/16/7_3.jpg": "8c4fe01f432df0624bda8084c18a192a",
"assets/assets/html/16/4_10.jpg": "3a1856b8c6244960ebf14a9c85fe4618",
"assets/assets/html/16/1_5.jpg": "70a4b453e10700981bebd18fe9b4e25d",
"assets/assets/html/16/3_7.jpg": "37e3eb991cbb8c701c1e18db43bb9654",
"assets/assets/html/16/3_6.jpg": "9889a03eff7fa8c4727c1eb4f48d9f3f",
"assets/assets/html/16/1_4.jpg": "d3c1b9af5171f64cacdd39ac8ef155f5",
"assets/assets/html/16/4_11.jpg": "e2f4ef5d7310c6267b8ac89423836eb8",
"assets/assets/html/16/7_2.jpg": "54148971a9d9356af23aedde39ff8c20",
"assets/assets/html/16/8_11.jpg": "431f6c1843fc5bafa2cdcb4906babc70",
"assets/assets/html/16/6_14.jpg": "9897a06973f8dbb18d857fdb08a16282",
"assets/assets/html/16/5_0.jpg": "0253a6fe40d70be4a1e9ccec23e05adc",
"assets/assets/html/16/5_2.jpg": "0b61e25e017ea0b6be2036c03370fb6b",
"assets/assets/html/16/6_16.jpg": "ed1cfbc94bb9c3e9e8167f8f253903a8",
"assets/assets/html/16/8_13.jpg": "8c4d571ca8d63b1772411dad99e8728f",
"assets/assets/html/16/7_0.jpg": "9b669392d9125a0ea5e508722e6c9096",
"assets/assets/html/16/4_13.jpg": "428a14556234a434079a7ed4f1c616e6",
"assets/assets/html/16/1_6.jpg": "7ec7ac6fa026ed3eb15523783fd4a09e",
"assets/assets/html/16/3_4.jpg": "6c08b4a31267702e28a6e624bfa5dfa5",
"assets/assets/html/16/files/GoFixedSizeIcon.png": "e9929d1937b5ab54b602cf6052e4b578",
"assets/assets/html/16/files/KeyShotXR.js": "a73182c8ce198e21591a8a0920e2021a",
"assets/assets/html/16/files/GoFullScreenIcon.png": "ab9b3af1e03839ef69bc5737c4341859",
"assets/assets/html/16/files/ks_logo.png": "b483dfc29a7b2acb9e051613d2c977c8",
"assets/assets/html/16/files/xr_cursor.gif": "6ff3c8a65b8f756f087695a4aa35fa58",
"assets/assets/html/16/files/xr_hand.gif": "c378b89afb9041b3578755dc9968f8a0",
"assets/assets/html/16/3_5.jpg": "be4dd057e1e144422ba1de4047714622",
"assets/assets/html/16/1_7.jpg": "4347304a58323d605d4e914f6ee6abf5",
"assets/assets/html/16/4_12.jpg": "7b36770f39e45ec18d2ee077186549d6",
"assets/assets/html/16/7_1.jpg": "5266e41d65919d58f12680f6e3c19e31",
"assets/assets/html/16/8_12.jpg": "38de02d03f28c0f58edda3edeaa36896",
"assets/assets/html/16/6_17.jpg": "8a09ffc8c0c075b1b0568f8ad179744c",
"assets/assets/html/16/5_3.jpg": "53623686c5c8a7de43ad5c7b265cfe4f",
"assets/assets/html/16/2_14.jpg": "e87b7fe22747d8de5cfdf250fe137650",
"assets/assets/html/16/2_2.jpg": "9908dd73dfb99f3664a63f4192b924d2",
"assets/assets/html/16/0_0.jpg": "3b44bfc79a8fd668b6145660dce19c89",
"assets/assets/html/16/8_9.jpg": "44287ae4e802372c7b1b838b95f93962",
"assets/assets/html/16/6_6.jpg": "df36a4b60228185321cd742ba3571dc9",
"assets/assets/html/16/0_11.jpg": "04d2789f3d9a8c9cd7fe237515c0e54c",
"assets/assets/html/16/4_4.jpg": "f4fe4185cbede0057113cea0d1a2310d",
"assets/assets/html/16/4_5.jpg": "ce841a9f29c61219218dda2701c6a3f8",
"assets/assets/html/16/0_10.jpg": "a3ae7a22fdca9900a37a255d4dcd8b38",
"assets/assets/html/16/6_7.jpg": "e41f4fa77e465fdc50b233fadc954fed",
"assets/assets/html/16/8_8.jpg": "27b73726fc15c501d2aa447fbd82aa6d",
"assets/assets/html/16/0_1.jpg": "bed80ba69015c4eacea653f2159b26c1",
"assets/assets/html/16/2_3.jpg": "45082a984aa4cff69e4a3ddb8ad6bdec",
"assets/assets/html/16/2_15.jpg": "c08d156f04e00c6b139f06dea452876d",
"assets/assets/html/16/2_17.jpg": "009fe4c4aa3ff6afdb5014c73aaecca5",
"assets/assets/html/16/2_1.jpg": "bd98e7ce3a5414287b224c03a5885927",
"assets/assets/html/16/0_3.jpg": "3ff4852d085ccf9359c1e6d1843d01b8",
"assets/assets/html/16/6_5.jpg": "a65348ca5403ca010a2ce07a6366a5fd",
"assets/assets/html/16/0_12.jpg": "e7bc4fdade8f895a3e84964e03a450af",
"assets/assets/html/16/4_7.jpg": "a719744404d7cb9d5ff8feb04c98b8a0",
"assets/assets/html/16/4_6.jpg": "bf7004bb7e7504333a50dc742faf69c3",
"assets/assets/html/16/0_13.jpg": "1d3682b6c3c0ee460ff477ad281d1916",
"assets/assets/html/16/6_4.jpg": "1454436c3658cae0f300c92335ec162e",
"assets/assets/html/16/0_2.jpg": "2edcca95ca2f050ef5a5fdc3207d3b44",
"assets/assets/html/16/2_0.jpg": "826df66db1ecf0b1113943d5a5924027",
"assets/assets/html/16/2_16.jpg": "269273affd486f11169972a92c145b6f",
"assets/assets/html/16/2_12.jpg": "df19260d29506c11f63ac3b77830d4c4",
"assets/assets/html/16/2_4.jpg": "16daf34b9549e6dafda7da680abefc74",
"assets/assets/html/16/0_6.jpg": "0a60b61ab8f2024dd8b3ec2213bc71c8",
"assets/assets/html/16/6_0.jpg": "b6bc333405fe07cb057792c86dcf0e66",
"assets/assets/html/16/0_17.jpg": "f8b061e5b347f57e1b0ab2d20ad40f0c",
"assets/assets/html/16/4_2.jpg": "5b05c098e50c3fef4b945bea9fccdb55",
"assets/assets/html/16/4_3.jpg": "3bf33d596a6fc1ff0e1a54bbce1ac211",
"assets/assets/html/16/0_16.jpg": "106d9d757a52d7725759dff8b508ae8f",
"assets/assets/html/16/6_1.jpg": "8b0cb2b71cbc6f8da4ea2614db79c155",
"assets/assets/html/16/0_7.jpg": "f062180d27f3dea4ba9149ee93e5bc4b",
"assets/assets/html/16/2_5.jpg": "85e83f7a970a91eac9d77bb30973e3b2",
"assets/assets/html/16/2_13.jpg": "fdf3e9d01faccf43fda210e5922180e7",
"assets/assets/html/16/2_11.jpg": "ef9907af3472532c1fcdaf3131b97fa8",
"assets/assets/html/16/2_7.jpg": "7ad9c894e785faf6bba1a4e0e65b83e7",
"assets/assets/html/16/0_5.jpg": "79b76609d2aae274f814960212ae76c4",
"assets/assets/html/16/6_3.jpg": "91ab32b16d4e960bcea65b48abccf2d2",
"assets/assets/html/16/0_14.jpg": "69eea0f062f60f993a9b481bd6d8c1d2",
"assets/assets/html/16/4_1.jpg": "0e9415566f905adb323a6a61e6bbcf60",
"assets/assets/html/16/4_0.jpg": "4132771bf0e205cf852d5a44508d9533",
"assets/assets/html/16/0_15.jpg": "9d57915c38bf0e4a722d9b4d65d8282f",
"assets/assets/html/16/6_2.jpg": "9b1bdd00a14cbfc2ef71306df7b73169",
"assets/assets/html/16/0_4.jpg": "785c17ba164c4473bbbe2532c22b5708",
"assets/assets/html/16/2_6.jpg": "203a4bbebe7866c24abe64005141e1c6",
"assets/assets/html/16/2_10.jpg": "8c86d53c97b7ef23774cf36768c5a496",
"assets/assets/html/16.html": "10c883d1a11a924e007e93ed3e34bd96",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
