exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 1232:
/***/ ((module) => {

// Exports
module.exports = {
	"avatar": "Avatar_avatar__HCqPs"
};


/***/ }),

/***/ 6498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(281);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1232);
/* harmony import */ var _styles_components_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Avatar({ src , alt , width , height  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            className: (_styles_components_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().avatar),
            src: src,
            alt: alt,
            width: width,
            height: height,
            quality: 90,
            priority: true
        })
    });
}


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ PhotographerFactory)
/* harmony export */ });
function formatPrice(price) {
    return price + "€/jour";
}
function makePortrait(portrait) {
    return `/assets/photographers/${portrait}`;
}
function url(id) {
    return `/photographer/${id}`;
}
class PhotographerFactory {
    static createPhotographer(photographerApi) {
        if (photographerApi === undefined) {
            throw new Error("Il n'y a aucun photographe.");
        }
        return {
            id: photographerApi.id,
            name: photographerApi.name,
            city: photographerApi.city,
            country: photographerApi.country,
            tagline: photographerApi.tagline,
            price: photographerApi.price,
            portrait: photographerApi.portrait
        };
    }
    static createPhotographerProfileView(photographer) {
        return {
            id: photographer.id,
            url: url(photographer.id),
            name: photographer.name,
            picture: makePortrait(photographer.portrait),
            address: photographer.city + ", " + photographer.country,
            tagline: photographer.tagline,
            formattedPrice: formatPrice(photographer.price)
        };
    }
}


/***/ })

};
;