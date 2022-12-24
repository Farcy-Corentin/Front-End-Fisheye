"use strict";
(() => {
var exports = {};
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler),
  "getPhotographer": () => (/* binding */ getPhotographer)
});

;// CONCATENATED MODULE: ./factories/PhotographerFactory.ts
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

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./pages/api/photographer/[id].ts



async function handler(req, res) {
    const jsonDirectory = external_path_default().join(process.cwd(), "data");
    const fileContents = await external_fs_.promises.readFile(jsonDirectory + "/photographers.json", "utf8");
    const data = JSON.parse(fileContents);
    const photographer = data.photographers.find((photographer)=>photographer.id === parseInt(req.query.id));
    res.status(200).json(photographer);
}
async function getPhotographer(id) {
    const response = await fetch(`${process.env.API_URL}/api/photographer/${id}`);
    const data = await response.json();
    return PhotographerFactory.createPhotographer(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2957));
module.exports = __webpack_exports__;

})();