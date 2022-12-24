(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 289:
/***/ ((module) => {

// Exports
module.exports = {
	"photographer_profile_title": "PhotographerProfile_photographer_profile_title__cBnjt",
	"photographer_profile_address": "PhotographerProfile_photographer_profile_address__T9Goi",
	"photographer_profile_tagline": "PhotographerProfile_photographer_profile_tagline__8lw8n",
	"photographer_profile_price": "PhotographerProfile_photographer_profile_price__PfWqs"
};


/***/ }),

/***/ 528:
/***/ ((module) => {

// Exports
module.exports = {
	"photographer_section": "Home_photographer_section__gp408"
};


/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./factories/PhotographerFactory.ts
var PhotographerFactory = __webpack_require__(2295);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(6498);
// EXTERNAL MODULE: ./styles/components/PhotographerProfile.module.scss
var PhotographerProfile_module = __webpack_require__(289);
var PhotographerProfile_module_default = /*#__PURE__*/__webpack_require__.n(PhotographerProfile_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.3_3duxcpitbtplz62feflag7fwby/node_modules/next/link.js
var next_link = __webpack_require__(6939);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/PhotographerProfile.tsx




function PhotographerProfile({ picture , name , tagline , url , formattedPrice , address  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: url,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar/* default */.Z, {
                    src: picture,
                    alt: name,
                    width: 200,
                    height: 200
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: (PhotographerProfile_module_default()).photographer_profile_title,
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PhotographerProfile_module_default()).photographer_profile_address,
                        children: address
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PhotographerProfile_module_default()).photographer_profile_tagline,
                        children: tagline
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PhotographerProfile_module_default()).photographer_profile_price,
                        children: formattedPrice
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/PhotographersSection.tsx



function PhotographersSection({ photographer  }) {
    const photographerProfileView = PhotographerFactory/* PhotographerFactory.createPhotographerProfileView */.D.createPhotographerProfileView(photographer);
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(PhotographerProfile, {
            id: photographerProfileView.id,
            url: photographerProfileView.url,
            name: photographerProfileView.name,
            picture: photographerProfileView.picture,
            address: photographerProfileView.address,
            tagline: photographerProfileView.tagline,
            formattedPrice: photographerProfileView.formattedPrice
        })
    });
}

// EXTERNAL MODULE: ./styles/pages/Home.module.scss
var Home_module = __webpack_require__(528);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./pages/index.tsx





function Home({ photographersData  }) {
    const photographers = photographersData.map((data)=>PhotographerFactory/* PhotographerFactory.createPhotographer */.D.createPhotographer(data));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Fisheye"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: (Home_module_default()).photographer_section,
                children: photographers.map((photographer)=>/*#__PURE__*/ jsx_runtime_.jsx(PhotographersSection, {
                        photographer: photographer
                    }, photographer.id))
            })
        ]
    });
}
async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/api/photographer`);
    const data = await response.json();
    const photographersData = data.photographers;
    return {
        props: {
            photographersData
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [651,821,530], () => (__webpack_exec__(89)));
module.exports = __webpack_exports__;

})();