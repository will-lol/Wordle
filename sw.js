if (!self.define) {
    let e,
      s = {};
    const i = (i, r) => (
      (i = new URL(i + ".js", r).href),
      s[i] ||
        new Promise((s) => {
          if ("document" in self) {
            const e = document.createElement("script");
            (e.src = i), (e.onload = s), document.head.appendChild(e);
          } else (e = i), importScripts(i), s();
        }).then(() => {
          let e = s[i];
          if (!e) throw new Error(`Module ${i} didn’t register its module`);
          return e;
        })
    );
    self.define = (r, n) => {
      const o =
        e ||
        ("document" in self ? document.currentScript.src : "") ||
        location.href;
      if (s[o]) return;
      let t = {};
      const c = (e) => i(e, o),
        a = { module: { uri: o }, exports: t, require: c };
      s[o] = Promise.all(r.map((e) => a[e] || c(e))).then((e) => (n(...e), t));
    };
  }
  define(["./workbox-6a98ad58"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
      e.precacheAndRoute(
        [
          {
            url: "/assets/banner-styles.css",
            revision: "7da9edc0e8763fb4c3fd64123b5da773",
          },
          {
            url: "/assets/bundle-playback.js",
            revision: "ad00a6b2fd3610c5480713775ab7736b",
          },
          { url: "/assets/iconochive.css", revision: "aadbcc29c209482b1adf0f4cd1a0255e" },
          {
            url: "/assets/main.e65ce0a5.js",
            revision: "6a3d61601b3420a2a2b590e5fd49aadb",
          },
        ],
        { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
      );
  });
  //# sourceMappingURL=sw.js.map