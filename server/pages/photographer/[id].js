(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 3586:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__zojcg",
	"contactButton": "Button_contactButton__wS6jz",
	"dropdownButton": "Button_dropdownButton__y_Fzq",
	"likeBtn": "Button_likeBtn__WckMQ"
};


/***/ }),

/***/ 2966:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Dropdown_button__yvYDi",
	"menu": "Dropdown_menu__jZSNH",
	"contactButton": "Dropdown_contactButton__Z4ckd",
	"dropdownButton": "Dropdown_dropdownButton__MKrit",
	"likeBtn": "Dropdown_likeBtn__dLwfZ"
};


/***/ }),

/***/ 179:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "Form_overlay__lv4F4",
	"modal": "Form_modal__07sP0",
	"form": "Form_form__LUGza"
};


/***/ }),

/***/ 6657:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "Lightbox_overlay__ARkC7",
	"content": "Lightbox_content__UEsga",
	"closeBtn": "Lightbox_closeBtn__26lqs",
	"previousBtn": "Lightbox_previousBtn__k0Lb6",
	"nextBtn": "Lightbox_nextBtn__iuk7E",
	"title": "Lightbox_title__lIZAA"
};


/***/ }),

/***/ 8315:
/***/ ((module) => {

// Exports
module.exports = {
	"LikeBox": "LikeByPhotographer_LikeBox__jLK_z",
	"fade-up": "LikeByPhotographer_fade-up__xv3ep"
};


/***/ }),

/***/ 7550:
/***/ ((module) => {

// Exports
module.exports = {
	"mediaCard": "MediaCard_mediaCard__0qcPW",
	"img": "MediaCard_img__Mx0Um",
	"video": "MediaCard_video__mx24L",
	"like": "MediaCard_like__XOsKy",
	"content": "MediaCard_content__Wjo5n"
};


/***/ }),

/***/ 6483:
/***/ ((module) => {

// Exports
module.exports = {
	"photographHeader": "PhotographerHeader_photographHeader__gmgZ1",
	"title": "PhotographerHeader_title__K0jPi",
	"address": "PhotographerHeader_address__MWGvg"
};


/***/ }),

/***/ 4240:
/***/ ((module) => {

// Exports
module.exports = {
	"mediaSection": "Photographer_mediaSection__FrUFk",
	"mediaGrid": "Photographer_mediaGrid__L7O1x",
	"filterSection": "Photographer_filterSection__kFAEQ",
	"label": "Photographer_label__n4pFm",
	"title": "Photographer_title__P9CN5"
};


/***/ }),

/***/ 9632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Photographer),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./factories/PhotographerFactory.ts
var PhotographerFactory = __webpack_require__(2295);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/layout/PhotographerHeader.module.scss
var PhotographerHeader_module = __webpack_require__(6483);
var PhotographerHeader_module_default = /*#__PURE__*/__webpack_require__.n(PhotographerHeader_module);
// EXTERNAL MODULE: ./components/Avatar.tsx
var Avatar = __webpack_require__(6498);
// EXTERNAL MODULE: ./styles/components/Button.module.scss
var Button_module = __webpack_require__(3586);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./components/Button.tsx


function Button({ type ="button" , label , onClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: (Button_module_default()).contactButton,
            type: type,
            onClick: onClick,
            children: label
        })
    });
}

;// CONCATENATED MODULE: external "react-modal"
const external_react_modal_namespaceObject = require("react-modal");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/components/Form.module.scss
var Form_module = __webpack_require__(179);
var Form_module_default = /*#__PURE__*/__webpack_require__.n(Form_module);
;// CONCATENATED MODULE: ./public/assets/icons/close.svg
/* harmony default export */ const icons_close = ({"src":"/_next/static/media/close.3b919793.svg","height":42,"width":42});
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.3_3duxcpitbtplz62feflag7fwby/node_modules/next/image.js
var next_image = __webpack_require__(281);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ContactFormModal.tsx







external_react_modal_default().setAppElement("#__next");
function ContactFormModal({ isOpen , setIsOpen , userName  }) {
    const [firstname, setFirstname] = (0,external_react_.useState)("");
    const [lastname, setLastname] = (0,external_react_.useState)("");
    const [email, setEmail] = (0,external_react_.useState)("");
    const [message, setMessage] = (0,external_react_.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("firstname", firstname);
        console.log("lastname", lastname);
        console.log("email", email);
        console.log("message", message);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_modal_default()), {
        isOpen: isOpen,
        onRequestClose: ()=>setIsOpen(false),
        overlayClassName: (Form_module_default()).overlay,
        role: "dialog",
        "aria-describedby": "contact modal",
        className: (Form_module_default()).modal,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            children: [
                                "Contactez-moi ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: userName
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icons_close,
                            "aria-label": "Close contact Form",
                            alt: "close modal icon",
                            width: 50,
                            height: 50,
                            onClick: ()=>setIsOpen(false),
                            tabIndex: 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: (Form_module_default()).form,
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "firstname",
                                    children: "Pr\xe9nom"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: firstname,
                                    onChange: (event)=>setFirstname(event.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "lastname",
                                    children: "Nom"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: lastname,
                                    onChange: (event)=>setLastname(event.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "email",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: email,
                                    onChange: (event)=>setEmail(event.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "message",
                                    children: "Message"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    value: message,
                                    onChange: (event)=>setMessage(event.target.value)
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            className: (Button_module_default()).contactButton,
                            children: "Envoyer"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/PhotographerHeader.tsx






function PhotographerHeader({ photographerProfileView  }) {
    const [isOpenContactFormModal, setIsOpenContactFormModal] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (PhotographerHeader_module_default()).photographHeader,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (PhotographerHeader_module_default()).title,
                        children: photographerProfileView.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PhotographerHeader_module_default()).address,
                        children: photographerProfileView.address
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: photographerProfileView.tagline
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        type: "button",
                        label: "Contactez-moi",
                        onClick: ()=>setIsOpenContactFormModal(true)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContactFormModal, {
                        isOpen: isOpenContactFormModal,
                        setIsOpen: setIsOpenContactFormModal,
                        userName: photographerProfileView.name
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Avatar/* default */.Z, {
                    src: photographerProfileView.picture,
                    alt: photographerProfileView.name,
                    width: 200,
                    height: 200
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/pages/Photographer.module.scss
var Photographer_module = __webpack_require__(4240);
var Photographer_module_default = /*#__PURE__*/__webpack_require__.n(Photographer_module);
;// CONCATENATED MODULE: ./factories/MediaFactory.ts
function url(photographerId, url) {
    return `/assets/images/${photographerId}/${url}`;
}
class MediaFactory {
    static createMedia(mediaApi) {
        return {
            id: mediaApi.id,
            photographerId: mediaApi.photographerId,
            title: mediaApi.title,
            componentType: mediaApi.image ? "image" : "video",
            url: mediaApi.image ? url(mediaApi.photographerId, mediaApi.image) : url(mediaApi.photographerId, mediaApi.video),
            like: mediaApi.likes,
            date: mediaApi.date,
            price: mediaApi.price
        };
    }
    static createPicture(media) {
        return {
            id: media.id,
            photographerId: media.photographerId,
            title: media.title,
            url: media.url,
            like: media.like,
            date: media.date,
            price: media.price
        };
    }
    static createMovie(media) {
        return {
            id: media.id,
            photographerId: media.photographerId,
            title: media.title,
            url: media.url,
            like: media.like,
            date: media.date,
            price: media.price
        };
    }
}

// EXTERNAL MODULE: ./styles/components/MediaCard.module.scss
var MediaCard_module = __webpack_require__(7550);
var MediaCard_module_default = /*#__PURE__*/__webpack_require__.n(MediaCard_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.3_3duxcpitbtplz62feflag7fwby/node_modules/next/link.js
var next_link = __webpack_require__(6939);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./hooks/useLike.ts

function useLike(like) {
    const [likeCounter, setLikeCounter] = (0,external_react_.useState)(like);
    const [isLike, setIsLike] = (0,external_react_.useState)(false);
    const handleClick = ()=>{
        setLikeCounter(likeCounter + (isLike ? -1 : 1));
        setIsLike(!isLike);
    };
    return {
        likeCounter,
        isLike,
        handleClick
    };
}

;// CONCATENATED MODULE: ./components/Like.tsx






function Like({ like , likeCounterChange  }) {
    const { isLike , likeCounter , handleClick  } = useLike(like);
    const HeartIcon = isLike ? fa_namespaceObject.FaHeart : fa_namespaceObject.FaRegHeart;
    (0,external_react_.useEffect)(()=>{
        likeCounterChange(likeCounter);
    }, [
        likeCounter
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        className: (MediaCard_module_default()).like,
        children: [
            likeCounter,
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (Button_module_default()).likeBtn,
                onClick: handleClick,
                tabIndex: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(HeartIcon, {
                    size: 18,
                    "aria-label": "likes"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/MediaCard.tsx







function MediaCard({ media , onLikeChange  }) {
    const router = (0,router_.useRouter)();
    if (media.componentType === "image") {
        const picture = MediaFactory.createPicture(media);
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (MediaCard_module_default()).mediaCard,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/photographer/${router.query.id}?media=${media.id}`,
                    as: `/photographer/${router.query.id}?media=${media.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (MediaCard_module_default()).img,
                        src: picture.url,
                        alt: picture.title,
                        width: 350,
                        height: 300
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MediaCard_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: picture.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Like, {
                            likeCounterChange: (like)=>{
                                picture.like = like;
                                onLikeChange(picture);
                            },
                            like: picture.like
                        })
                    ]
                })
            ]
        });
    }
    const video = MediaFactory.createMovie(media);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MediaCard_module_default()).mediaCard,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/photographer/${router.query.id}?media=${media.id}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    className: (MediaCard_module_default()).video,
                    src: video.url
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (MediaCard_module_default()).content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: video.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Like, {
                        likeCounterChange: (like)=>{
                            video.like = like;
                            onLikeChange(video);
                        },
                        like: video.like
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/components/Dropdown.module.scss
var Dropdown_module = __webpack_require__(2966);
var Dropdown_module_default = /*#__PURE__*/__webpack_require__.n(Dropdown_module);
;// CONCATENATED MODULE: external "react-use"
const external_react_use_namespaceObject = require("react-use");
// EXTERNAL MODULE: ./styles/components/Lightbox.module.scss
var Lightbox_module = __webpack_require__(6657);
var Lightbox_module_default = /*#__PURE__*/__webpack_require__.n(Lightbox_module);
;// CONCATENATED MODULE: external "react-focus-on"
const external_react_focus_on_namespaceObject = require("react-focus-on");
;// CONCATENATED MODULE: ./components/LightboxMedia.tsx




function LightboxMedia({ media , mediaIndex  }) {
    const mediaLightbox = media[mediaIndex]?.componentType === "image" ? MediaFactory.createPicture(media[mediaIndex]) : MediaFactory.createMovie(media[mediaIndex]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            media[mediaIndex]?.componentType === "image" ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: mediaLightbox.url,
                alt: mediaLightbox.title,
                fill: true,
                priority: true,
                style: {
                    objectFit: "cover"
                }
            }) : /*#__PURE__*/ jsx_runtime_.jsx("video", {
                src: mediaLightbox.url,
                controls: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Lightbox_module_default()).title,
                children: mediaLightbox.title
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Lightbox.tsx









function useLightboxNavigation(prevBtn, nextBtn) {
    const [mediaIndex, setMediaIndex] = (0,external_react_.useState)(0);
    const prev = async (media)=>{
        console.log("prev", prevBtn);
        prevBtn?.current?.focus();
        const isFirstMedia = mediaIndex === 0;
        setMediaIndex(isFirstMedia ? media.length - 1 : mediaIndex - 1);
    };
    const next = async (media)=>{
        nextBtn?.current?.focus();
        const isNextMedia = mediaIndex === media.length - 1;
        setMediaIndex(isNextMedia ? 0 : mediaIndex + 1);
    };
    return {
        mediaIndex,
        setMediaIndex,
        prev,
        next
    };
}
function Lightbox() {
    const router = (0,router_.useRouter)();
    const photographerId = router.query.id;
    const mediaId = router.query.media;
    const [media, setMedia] = (0,external_react_.useState)([]);
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const prevBtn = (0,external_react_.useRef)(null);
    const nextBtn = (0,external_react_.useRef)(null);
    const { mediaIndex , setMediaIndex , prev , next  } = useLightboxNavigation(prevBtn, nextBtn);
    const fetchMedia = async ()=>{
        setIsLoading(true);
        const photographerId = parseInt(router.query.id);
        const defaultFilter = "title";
        const currentFilterName = localStorage.getItem("name") ? localStorage.getItem("name") : defaultFilter;
        const response = await fetch(`/api/photographer/${photographerId}/media?filter=${currentFilterName}`);
        const data = await response.json();
        const mediaData = data.map(MediaFactory.createMedia);
        setMedia(mediaData);
        setMediaIndex(mediaData.findIndex((media)=>media.id === parseInt(mediaId)));
        setIsLoading(false);
    };
    const [hasMounted, setHasMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    (0,external_react_.useEffect)(()=>{
        fetchMedia();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const mediaId = media[mediaIndex]?.id;
        if (mediaId === undefined) {
            return;
        }
        router.push(`/photographer/${photographerId}/?media=${mediaId}`).then();
    }, [
        media,
        mediaIndex
    ]);
    const onDocumentKeyup = (0,external_react_.useCallback)(async (event)=>{
        if (event.key === "ArrowLeft") {
            await prev(media);
        }
        if (event.key === "ArrowRight") {
            await next(media);
        }
    }, [
        media,
        next,
        prev
    ]);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("keyup", onDocumentKeyup);
        return ()=>{
            document.removeEventListener("keyup", onDocumentKeyup);
        };
    }, [
        onDocumentKeyup
    ]);
    if (!hasMounted) {
        return null;
    }
    if (isLoading) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_focus_on_namespaceObject.FocusOn, {
        onEscapeKey: async ()=>await router.push(`/photographer/${photographerId}`),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Lightbox_module_default()).overlay,
            role: "dialog",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (Lightbox_module_default()).closeBtn,
                    href: `/photographer/${photographerId}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTimes, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Lightbox_module_default()).previousBtn,
                    onClick: ()=>prev(media).then(),
                    ref: prevBtn,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaChevronLeft, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Lightbox_module_default()).content,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LightboxMedia, {
                        media: media,
                        mediaIndex: mediaIndex
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (Lightbox_module_default()).nextBtn,
                    onClick: ()=>next(media).then(),
                    ref: nextBtn,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaChevronRight, {})
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/components/LikeByPhotographer.module.scss
var LikeByPhotographer_module = __webpack_require__(8315);
var LikeByPhotographer_module_default = /*#__PURE__*/__webpack_require__.n(LikeByPhotographer_module);
;// CONCATENATED MODULE: ./components/LikesByPhotographer.tsx






function LikesByPhotographer({ totalLike  }) {
    const [photographerPrice, setPhotographerPrice] = (0,external_react_.useState)(0);
    const router = (0,router_.useRouter)();
    const getPhotographerPrice = async ()=>{
        const photographerId = router.query.id;
        const response = await fetch(`/api/photographer/${photographerId}`);
        const data = await response.json();
        setPhotographerPrice(PhotographerFactory/* PhotographerFactory.createPhotographer */.D.createPhotographer(data).price);
    };
    (0,external_react_.useEffect)(()=>{
        getPhotographerPrice();
    }, [
        getPhotographerPrice()
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (LikeByPhotographer_module_default()).LikeBox,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    totalLike,
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaHeart, {
                        size: 18
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    photographerPrice,
                    "€/jour"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/MediaGrid.tsx












function MediaGrid() {
    const [open, setOpen] = (0,external_react_.useState)(false);
    const filters = [
        {
            name: "popularity",
            fr: "Popularit\xe9"
        },
        {
            name: "title",
            fr: "Titre"
        },
        {
            name: "date",
            fr: "Date"
        }
    ];
    const [sortedMedia, setSortedMedia] = (0,external_react_.useState)([]);
    const [currentFilterName, setCurrentFilterName] = (0,external_react_use_namespaceObject.useLocalStorage)("name", "date");
    const [currentFilterFr, setCurrentFilterFr] = (0,external_react_use_namespaceObject.useLocalStorage)("fr", "Date");
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        filteringMedia();
    }, [
        currentFilterName
    ]);
    const filteringMedia = async ()=>{
        const photographerId = parseInt(router.query.id);
        const response = await fetch(`/api/photographer/${photographerId}/media?filter=${currentFilterName}`);
        const data = await response.json();
        const sortedMedia = data.map(MediaFactory.createMedia);
        setSortedMedia(sortedMedia);
    };
    const totalMediaLike = (0,external_react_.useMemo)(()=>sortedMedia.reduce((acc, curr)=>acc + curr.like, 0), [
        sortedMedia
    ]);
    const handleLikeChange = (media)=>{
        setSortedMedia(sortedMedia.map((m)=>m.id === media.id ? {
                ...m,
                ...media
            } : m));
    };
    const [hasMounted, setHasMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    if (router.query.media) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Lightbox, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Photographer_module_default()).mediaSection,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Photographer_module_default()).filterSection,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Photographer_module_default()).label,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (Photographer_module_default()).title,
                            children: "Trier par"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                tabIndex: 0,
                                role: "menu",
                                className: (Button_module_default()).dropdownButton,
                                onClick: ()=>setOpen(!open),
                                onKeyUp: (event)=>{
                                    if (event.key === "Escape") {
                                        setOpen(false);
                                    }
                                },
                                children: [
                                    currentFilterFr,
                                    open ? /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaAngleUp, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaAngleDown, {})
                                ]
                            }),
                            open && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Dropdown_module_default()).menu,
                                children: filters.filter((filter)=>filter.fr !== currentFilterFr).map((filter)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        role: "menuitem",
                                        tabIndex: 0,
                                        onClick: ()=>{
                                            setCurrentFilterName(filter.name);
                                            setCurrentFilterFr(filter.fr);
                                            router.push(`${router.query.id}?filter=${filter.name}`);
                                            setOpen(false);
                                        },
                                        onKeyUp: (event)=>{
                                            if (event.key === "Escape") {
                                                setOpen(false);
                                                const dropdownBtn = document.querySelector(`.${(Button_module_default()).dropdownButton}`);
                                                dropdownBtn.focus();
                                            }
                                            if (event.key === "Enter") {
                                                setCurrentFilterName(filter.name);
                                                setCurrentFilterFr(filter.fr);
                                                router.push(`${router.query.id}?filter=${filter.name}`);
                                                const dropdownBtn1 = document.querySelector(`.${(Button_module_default()).dropdownButton}`);
                                                dropdownBtn1.focus();
                                                setOpen(false);
                                            }
                                        },
                                        children: filter.fr
                                    }, filter.name))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Photographer_module_default()).mediaGrid,
                children: sortedMedia ? sortedMedia.map((media)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MediaCard, {
                            onLikeChange: handleLikeChange,
                            media: media
                        })
                    }, media.id)) : ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LikesByPhotographer, {
                totalLike: totalMediaLike
            })
        ]
    });
}

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/api/photographer/[id].ts



async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(jsonDirectory + "/photographers.json", "utf8");
    const data = JSON.parse(fileContents);
    const photographer = data.photographers.find((photographer)=>photographer.id === parseInt(req.query.id));
    res.status(200).json(photographer);
}
async function getPhotographer(id) {
    const response = await fetch(`${process.env.API_URL}/api/photographer/${id}`);
    const data = await response.json();
    return PhotographerFactory/* PhotographerFactory.createPhotographer */.D.createPhotographer(data);
}

;// CONCATENATED MODULE: ./pages/photographer/[id].tsx






function Photographer({ photographer  }) {
    const photographerProfileView = PhotographerFactory/* PhotographerFactory.createPhotographerProfileView */.D.createPhotographerProfileView(photographer);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Fisheye - photographe"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PhotographerHeader, {
                photographerProfileView: photographerProfileView
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MediaGrid, {})
        ]
    });
}
async function getStaticPaths() {
    const response = await fetch(`${process.env.API_URL}/api/photographer`);
    const data = await response.json();
    const photographersData = data.photographers;
    const paths = photographersData.map((data)=>({
            params: {
                id: data.id.toString()
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const id = params.id;
    const photographer = await getPhotographer(id);
    return {
        props: {
            photographer
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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [651,821,530], () => (__webpack_exec__(9632)));
module.exports = __webpack_exports__;

})();