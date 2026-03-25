(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/horeca-b2b/src/app/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLangOpen, setIsLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const langRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { lang, setLang: setCurrentLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const currentLang = mounted ? lang || 'KA' : 'KA';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (langRef.current && !langRef.current.contains(event.target)) {
                        setIsLangOpen(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            window.addEventListener("scroll", handleScroll);
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const content = {
        KA: {
            products: "პროდუქტები",
            partners: "პარტნიორები",
            about: "ჩვენს შესახებ",
            contact: "საკონტაქტო"
        },
        EN: {
            products: "Products",
            partners: "Partners",
            about: "About Us",
            contact: "Contact"
        },
        RU: {
            products: "Продукты",
            partners: "Партнеры",
            about: "О нас",
            contact: "Контакт"
        }
    };
    const safeLang = content[currentLang] ? currentLang : 'KA';
    const navLinks = [
        {
            name: content[safeLang].products,
            href: "#products"
        },
        {
            name: content[safeLang].partners,
            href: "#partners"
        },
        {
            name: content[safeLang].about,
            href: "#about"
        },
        {
            name: content[safeLang].contact,
            href: "#contact"
        }
    ];
    const languages = [
        {
            code: 'KA',
            label: 'GEORGIAN'
        },
        {
            code: 'EN',
            label: 'ENGLISH'
        },
        {
            code: 'RU',
            label: 'RUSSIAN'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 w-full z-[60] px-6 md:px-12 lg:px-20 flex items-center justify-between transition-all duration-500 text-white ${isScrolled ? "bg-black/40 backdrop-blur-lg py-4 shadow-xl" : "bg-transparent py-10 md:py-14"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden p-2 text-white",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 70,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-1 gap-10 lg:gap-14 justify-start items-center font-bold text-[13px] lg:text-[14px] tracking-[0.25em] uppercase whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#products",
                                className: "group relative py-2.5 px-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: content[safeLang].products
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#partners",
                                className: "group relative py-2.5 px-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: content[safeLang].partners
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-none px-4 md:px-8 lg:px-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo-white.png",
                                alt: "HORECA Distribution",
                                width: isScrolled ? 160 : 250,
                                height: 70,
                                className: "object-contain transition-all duration-500",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-1 gap-10 lg:gap-14 justify-end items-center font-bold text-[13px] lg:text-[14px] tracking-[0.25em] uppercase whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#about",
                                className: "group relative py-2.5 px-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: content[safeLang].about
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#contact",
                                className: "group relative py-2.5 px-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: content[safeLang].contact
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 border border-white/40 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative ml-6 pl-8 border-l border-white/10",
                                ref: langRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsLangOpen(!isLangOpen),
                                        className: "group flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-black tracking-[0.15em]",
                                                children: currentLang
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 12,
                                                className: `opacity-40 transition-transform duration-500 ${isLangOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: isLangOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 15,
                                                scale: 0.95
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 10,
                                                scale: 0.95
                                            },
                                            className: "absolute right-0 mt-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl py-3 min-w-[150px] shadow-2xl overflow-hidden",
                                            children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setCurrentLang(l.code);
                                                        setIsLangOpen(false);
                                                    },
                                                    className: `w-full flex items-center justify-between px-6 py-3 text-[10px] font-black tracking-[0.15em] transition-all duration-300
                        ${currentLang === l.code ? 'text-[#C8A75E] bg-white/5' : 'text-white/40 hover:text-white hover:bg-white/10'}`,
                                                    children: [
                                                        l.label,
                                                        currentLang === l.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-1 rounded-full bg-[#C8A75E]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 50
                                                        }, this)
                                                    ]
                                                }, l.code, true, {
                                                    fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: "-100%"
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: "-100%"
                    },
                    className: "fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-8",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-white text-2xl tracking-[0.2em] uppercase hover:text-[#C8A75E] transition-colors",
                                    children: link.name
                                }, link.href, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 pt-10 border-t border-white/10 w-64 flex flex-col items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/30 text-[10px] tracking-[0.3em] uppercase",
                                    children: "Select Language"
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6",
                                    children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCurrentLang(l.code);
                                                setIsOpen(false);
                                            },
                                            className: `text-[12px] font-black tracking-[0.15em] py-2 px-4 rounded-full border transition-all duration-300
                      ${currentLang === l.code ? 'border-[#C8A75E] text-[#C8A75E] bg-[#C8A75E]/5' : 'border-white/10 text-white/40'}`,
                                            children: l.code
                                        }, l.code, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-10 left-6 text-white",
                            onClick: ()=>setIsOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/navbar.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "IJ+Da/vPZVGJBz3YPkCRCxCQfzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/components/about-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AboutSection() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const content = {
        KA: {
            title: "ჩვენს შესახებ",
            desc1: "HORECA DISTRIBUTION არის პროფესიონალური სადისტრიბუციო კომპანია, რომელიც ემსახურება რესტორნებს, სასტუმროებს, კაფეებსა და კვების ობიექტებს და სთავაზობს სტაბილურ, სწრაფ და მასშტაბირებად მიწოდებას.",
            desc2: "კომპანია უკვე ფარავს ბაზრის დაახლოებით 80%-ს, რაც მას აქცევს ერთ-ერთ ყველაზე ძლიერ მოთამაშედ სექტორში. სტრატეგიული მიზანია პოზიციების გაძლიერება არა მხოლოდ მოცულობით, არამედ ბრენდის აღქმით, როგორც სანდო, სისტემური და გრძელვადიანი პარტნიორი.",
            stat1: "ბაზრის წილი",
            stat2: "ლოჯისტიკა"
        },
        EN: {
            title: "ABOUT US",
            desc1: "HORECA DISTRIBUTION is a professional distribution company serving restaurants, hotels, cafes, and catering facilities, offering stable, fast, and scalable delivery.",
            desc2: "The company already covers about 80% of the market, making it one of the strongest players in the sector. Strategic goal is to strengthen positions not only in volume but also in brand perception as a reliable, systemic, and long-term partner.",
            stat1: "Market Share",
            stat2: "Logistics"
        },
        RU: {
            title: "О НАС",
            desc1: "HORECA DISTRIBUTION — это профессиональная дистрибьюторская компания, обслуживающая рестораны, отели, кафе и предприятия общественного питания, предлагая стабильные, быстрые и масштабируемые поставки.",
            desc2: "Компания уже охватывает около 80% рынка, что делает ее одним из самых сильных игроков в секторе. Стратегическая цель — укрепление позиций не только в объемах, но и в восприятии бренда как надежного, системного и долгосрочного партнера.",
            stat1: "Доля рынка",
            stat2: "Логистика"
        }
    };
    const t = content[lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative bg-[#0a0a0a] py-32 overflow-hidden border-t border-white/5 font-['MyCustomFont']",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none grayscale opacity-[0.07] z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/topo-map.png",
                    alt: "Topographic Map Background",
                    fill: true,
                    className: "object-cover object-left"
                }, void 0, false, {
                    fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/symbol.png",
                    alt: "Large Background Logo",
                    fill: true,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-10 md:px-24 relative z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 border-b border-white/5 pb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 relative opacity-40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/symbol.png",
                                        alt: "Logo Icon",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white text-5xl md:text-6xl font-black tracking-tighter uppercase italic",
                                    children: t.title
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-20 items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-2/3 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-xl md:text-2xl leading-[1.6] font-medium tracking-tight uppercase",
                                        children: t.desc1
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/50 text-lg leading-[1.8] font-light tracking-wide max-w-3xl uppercase",
                                        children: t.desc2
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-20 pt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#c4a962] text-6xl font-black mb-2 italic",
                                                        children: "80%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold",
                                                        children: t.stat1
                                                    }, void 0, false, {
                                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#c4a962] text-6xl font-black mb-2 italic",
                                                        children: "24/7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold",
                                                        children: t.stat2
                                                    }, void 0, false, {
                                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/components/about-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/components/partners-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnersSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/swiper/modules/free-mode.mjs [app-client] (ecmascript) <export default as FreeMode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)"); // 1. შემოვიტანოთ ჰუკი
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function PartnersSection() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])(); // 2. გამოვიყენოთ ენა
    // 3. ტექსტების ობიექტი
    const content = {
        KA: {
            title: "პარტნიორები",
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "ჩვენი პარტნიორები იზიარებენ ერთ პრინციპს, სტაბილურ ხარისხს. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 22,
                        columnNumber: 77
                    }, this),
                    " ეს არის ჩვენი საერთო შედეგის საფუძველი."
                ]
            }, void 0, true)
        },
        EN: {
            title: "Partners",
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Our partners share one principle: stable quality. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 26,
                        columnNumber: 67
                    }, this),
                    " This is the foundation of our common success."
                ]
            }, void 0, true)
        },
        RU: {
            title: "Партнеры",
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Наши партнеры разделяют один принцип — стабильное качество. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                        className: "hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 30,
                        columnNumber: 77
                    }, this),
                    " Это основа нашего общего результата."
                ]
            }, void 0, true)
        }
    };
    const partners = [
        {
            logo: "/agrohub-logo.png",
            img: "/agrohub.jpg",
            name: "Agrohub"
        },
        {
            logo: "/ska-logo.png",
            img: "/ska.jpg",
            name: "Ska"
        },
        {
            logo: "/madart-logo.png",
            img: "/madart.jpg",
            name: "Madart"
        },
        {
            logo: "/gurme-logo.png",
            img: "/gurme.jpg",
            name: "Gourmet"
        },
        {
            logo: "/maron-logo.png",
            img: "/maron.jpg",
            name: "Maron"
        },
        {
            logo: "/asorti-logo.png",
            img: "/asorti.jpg",
            name: "Asorti"
        }
    ];
    const duplicatedLogos = [
        ...partners,
        ...partners
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "partners",
        className: "jsx-8eb266f708384db3" + " " + "relative bg-[#C8A75E] py-16 md:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8eb266f708384db3" + " " + "max-w-[1750px] mx-auto px-4 md:px-10 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eb266f708384db3" + " " + "flex flex-col md:flex-row items-center gap-4 md:gap-5 mb-10 md:mb-14 ml-0 md:ml-4 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eb266f708384db3" + " " + "w-12 h-12 md:w-16 md:h-16 relative brightness-0 opacity-60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/symbol.png",
                                    alt: "Icon",
                                    fill: true,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-8eb266f708384db3" + " " + "border-[1.5px] border-white/50 rounded-2xl px-6 md:px-10 py-2 md:py-3 bg-white/10 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-8eb266f708384db3" + " " + "text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold",
                                    children: [
                                        content[lang].title,
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eb266f708384db3" + " " + "w-full bg-black rounded-[30px] md:rounded-[50px] py-1 md:py-2 mb-12 md:mb-20 overflow-hidden relative shadow-2xl border border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex gap-8 md:gap-12 items-center whitespace-nowrap px-5",
                            animate: {
                                x: [
                                    "0%",
                                    "-50%"
                                ]
                            },
                            transition: {
                                ease: "linear",
                                duration: 25,
                                repeat: Infinity
                            },
                            children: duplicatedLogos.map((partner, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8eb266f708384db3" + " " + "relative h-16 w-32 md:h-24 md:w-60 flex-shrink-0 grayscale brightness-[100] opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: partner.logo,
                                        alt: partner.name,
                                        fill: true,
                                        className: "object-contain scale-110 md:scale-125"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eb266f708384db3" + " " + "mb-16 md:mb-24 cursor-grab active:cursor-grabbing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                            ],
                            spaceBetween: 20,
                            slidesPerView: 1.2,
                            freeMode: true,
                            pagination: {
                                clickable: true,
                                dynamicBullets: true
                            },
                            breakpoints: {
                                640: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 3.2
                                },
                                1440: {
                                    slidesPerView: 4.2
                                }
                            },
                            className: "partners-swiper",
                            children: partners.map((partner, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-8eb266f708384db3" + " " + "relative h-[350px] md:h-[500px] lg:h-[550px] w-full overflow-hidden rounded-[35px] md:rounded-[45px] shadow-2xl mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: partner.img,
                                                alt: partner.name,
                                                fill: true,
                                                className: "object-cover transition-transform duration-500 hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-8eb266f708384db3" + " " + "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8eb266f708384db3" + " " + "max-w-4xl mx-auto text-center border-t border-white/20 pt-10 md:pt-16 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-8eb266f708384db3" + " " + "text-white text-base md:text-xl lg:text-2xl font-light leading-relaxed tracking-[0.1em] uppercase",
                            children: [
                                content[lang].footer,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8eb266f708384db3",
                children: ".partners-swiper .swiper-pagination-bullet{width:8px;height:8px;background:#fff!important}@media (width>=768px){.partners-swiper .swiper-pagination-bullet{width:12px;height:12px}}.partners-swiper{overflow:visible!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/components/partners-section.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(PartnersSection, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PartnersSection;
var _c;
__turbopack_context__.k.register(_c, "PartnersSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/components/products-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsSection,
    "productsData",
    ()=>productsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)"); // დარწმუნდი რომ წერტილები სწორია (../ ნიშნავს ერთით ზემოთ გასვლას)
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const productsData = {
    KA: [
        {
            id: 1,
            name: "მარწყვი სუპერი (უცხოური)",
            price: "22₾",
            category: "ხილი",
            img: "/products/strawberry.jpg"
        },
        {
            id: 2,
            name: "მოცვი",
            price: "65₾",
            category: "ხილი",
            img: "/products/blueberry.jpg"
        },
        {
            id: 3,
            name: "ავოკადო",
            price: "20₾",
            category: "ხილი",
            img: "/products/avocado.jpg"
        },
        {
            id: 4,
            name: "ბანანი",
            price: "5₾",
            category: "ხილი",
            img: "/products/banana.jpg"
        },
        {
            id: 5,
            name: "კუმკვატი",
            price: "18₾",
            category: "ხილი",
            img: "/products/kumquat.jpg"
        },
        {
            id: 6,
            name: "ანანასი",
            price: "8.5₾",
            category: "ხილი",
            img: "/products/pineapple.jpg"
        },
        {
            id: 7,
            name: "მანგო",
            price: "15₾",
            category: "ხილი",
            img: "/products/mango.jpg"
        },
        {
            id: 8,
            name: "მანდარინი",
            price: "6₾",
            category: "ხილი",
            img: "/products/mandarin.jpg"
        },
        {
            id: 9,
            name: "პომელო",
            price: "7.5₾",
            category: "ხილი",
            img: "/products/pomelo.jpg"
        },
        {
            id: 10,
            name: "გრეიფრუტი",
            price: "6₾",
            category: "ხილი",
            img: "/products/grapefruit.jpg"
        },
        {
            id: 11,
            name: "ლაიმი",
            price: "21₾",
            category: "ხილი",
            img: "/products/lime.jpg"
        },
        {
            id: 12,
            name: "ფორთოხალი",
            price: "4₾",
            category: "ხილი",
            img: "/products/orange.jpg"
        },
        {
            id: 13,
            name: "ლიმონი",
            price: "3.5₾",
            category: "ხილი",
            img: "/products/lemon.jpg"
        },
        {
            id: 14,
            name: "ვაშლი სუპერი",
            price: "5₾",
            category: "ხილი",
            img: "/products/apple.png"
        },
        {
            id: 15,
            name: "ყურძენი (ტაიფუნი, ვანი, ერებუნი, თითა)",
            price: "6.5₾",
            category: "ხილი",
            img: "/products/grapes.jpg"
        },
        {
            id: 16,
            name: "მსხალი სუპერი",
            price: "13₾",
            category: "ხილი",
            img: "/products/pear.jpg"
        },
        {
            id: 17,
            name: "ხურმა",
            price: "4.5₾",
            category: "ხილი",
            img: "/products/persimmonkaralyok.jpg"
        },
        {
            id: 18,
            name: "კივი",
            price: "8₾",
            category: "ხილი",
            img: "/products/kiwi.jpg"
        },
        {
            id: 19,
            name: "კარტოფილი",
            price: "1.5₾",
            category: "ბოსტნეული",
            img: "/products/potatoes.jpg"
        },
        {
            id: 20,
            name: "ბატატი",
            price: "10₾",
            category: "ბოსტნეული",
            img: "/products/sweetpotato.jpg"
        },
        {
            id: 21,
            name: "ჭარხალი",
            price: "1.3₾",
            category: "ბოსტნეული",
            img: "/products/beetroot.jpg"
        },
        {
            id: 22,
            name: "სტაფილო",
            price: "2₾",
            category: "ბოსტნეული",
            img: "/products/carrot.jpg"
        },
        {
            id: 23,
            name: "ბადრიჯანი",
            price: "7.5₾",
            category: "ბოსტნეული",
            img: "/products/eggplant.jpg"
        },
        {
            id: 24,
            name: "ყაბაყი",
            price: "8₾",
            category: "ბოსტნეული",
            img: "/products/zucchini.jpg"
        },
        {
            id: 25,
            name: "პომიდორი (აზერბაიჯანული, პლანტა, ჩერი, ტიტიანი, ფერადი)",
            price: "7₾",
            category: "ბოსტნეული",
            img: "/products/tomatoes.jpg"
        },
        {
            id: 26,
            name: "კიტრი (შუშის - 15ლ)",
            price: "7₾",
            category: "ბოსტნეული",
            img: "/products/cucumber.jpg"
        },
        {
            id: 27,
            name: "კომბოსტო (ჩვეულებრივი, წითელი, ყვავილოვანი)",
            price: "2₾",
            category: "ბოსტნეული",
            img: "/products/cabbage.jpg"
        },
        {
            id: 28,
            name: "ბულგარული (ფერადი - 10ლ)",
            price: "8₾",
            category: "ბოსტნეული",
            img: "/products/bellpepper.jpg"
        },
        {
            id: 29,
            name: "მწვანე წიწაკა",
            price: "9₾",
            category: "ბოსტნეული",
            img: "/products/greenpepper.jpg"
        },
        {
            id: 30,
            name: "მწვანილი (ჩვეულებრივი, მარნეულის)",
            price: "10₾",
            category: "მწვანილი",
            img: "/products/herbs.jpg"
        },
        {
            id: 31,
            name: "ტარხუნა",
            price: "130₾",
            category: "მწვანილი",
            img: "/products/tarragon.jpg"
        },
        {
            id: 32,
            name: "პიტნა",
            price: "55₾",
            category: "მწვანილი",
            img: "/products/mint.jpg"
        },
        {
            id: 33,
            name: "ხახვი",
            price: "1.5₾",
            category: "ბოსტნეული",
            img: "/products/onion.jpg"
        },
        {
            id: 34,
            name: "ნიორი",
            price: "6₾",
            category: "ბოსტნეული",
            img: "/products/garlic.jpg"
        },
        {
            id: 35,
            name: "სალათის ფურცელი",
            price: "7₾",
            category: "მწვანილი",
            img: "/products/lettuce leaf.jpg"
        },
        {
            id: 36,
            name: "მწვანე ლობიო",
            price: "13.5₾",
            category: "ბოსტნეული",
            img: "/products/greenbeans.jpg"
        },
        {
            id: 37,
            name: "ლობიო (ბათუმელა, მერცხალა, სხვა)",
            price: "8₾",
            category: "ბოსტნეული",
            img: "/products/bean field.jpeg"
        },
        {
            id: 38,
            name: "გოგრა სუპერი",
            price: "1₾",
            category: "ბოსტნეული",
            img: "/products/pumpkin.jpg"
        },
        {
            id: 39,
            name: "ბროწეული (სუპერი - 12ლ)",
            price: "8₾",
            category: "ხილი",
            img: "/products/pomegranate.jpg"
        },
        {
            id: 40,
            name: "ბოლოკი",
            price: "4.5₾",
            category: "ბოსტნეული",
            img: "/products/radish.jpg"
        },
        {
            id: 41,
            name: "შავი ბოლოკი",
            price: "6.5₾",
            category: "ბოსტნეული",
            img: "/products/blackradish.jpg"
        },
        {
            id: 42,
            name: "სოკო (ქამა)",
            price: "12₾",
            category: "ბოსტნეული",
            img: "/products/champignon.jpg"
        },
        {
            id: 43,
            name: "ნესვი",
            price: "10₾",
            category: "ხილი",
            img: "/products/melon.jpg"
        },
        {
            id: 44,
            name: "ჯანჯაფილი",
            price: "14.5₾",
            category: "ბოსტნეული",
            img: "/products/ginger.jpg"
        },
        {
            id: 45,
            name: "ქლიავი",
            price: "14₾",
            category: "ხილი",
            img: "/products/plum.jpg"
        },
        {
            id: 46,
            name: "ტყემალი (წითელი და მწვანე) 5 ლიტრი",
            price: "30₾",
            category: "სხვა",
            img: "/products/tkemali.jpg"
        },
        {
            id: 47,
            name: "ღერღილი",
            price: "6₾",
            category: "მარცვლეული",
            img: "/products/gergili.jpg"
        },
        {
            id: 48,
            name: "მჭადის ფქვილი",
            price: "5₾",
            category: "მარცვლეული",
            img: "/products/cornmeal.jpg"
        },
        {
            id: 49,
            name: "ნიგოზი სუპერი (38ლ) / უცხოური (30ლ)",
            price: "30-38₾",
            category: "თხილეული",
            img: "/products/walnut.jpg"
        },
        {
            id: 50,
            name: "ნუში",
            price: "29.5₾",
            category: "თხილეული",
            img: "/products/almond.jpg"
        },
        {
            id: 51,
            name: "გარჩეული თხილი",
            price: "40₾",
            category: "თხილეული",
            img: "/products/selectednuts.jpg"
        },
        {
            id: 52,
            name: "გარჩეული მზესუმზირა",
            price: "7.5₾",
            category: "თხილეული",
            img: "/products/sunflower.jpg"
        },
        {
            id: 53,
            name: "გოგრის მარცვალი (ქართული - 45ლ)",
            price: "23₾",
            category: "თხილეული",
            img: "/products/pumpkinseeds.jpg"
        },
        {
            id: 54,
            name: "წანდილი (საკორკოტე)",
            price: "3.5₾",
            category: "მარცვლეული",
            img: "/products/tsandili.jpeg"
        },
        {
            id: 55,
            name: "ქიშმიში სხვადასხვა კატეგორია) – 16, 19, 21, 24 ლარი",
            price: "16₾",
            category: "ჩირი",
            img: "/products/raisins.jpg"
        },
        {
            id: 56,
            name: "ფისტაშკა ამერიკული",
            price: "47₾",
            category: "თხილეული",
            img: "/products/pistachio.jpg"
        },
        {
            id: 57,
            name: "ხურმის ჩირი (15ლ), ატმის სველი ჩირი (27ლ)",
            price: "15₾",
            category: "ჩირი",
            img: "/products/driedfruitfromKaralyok.jpg"
        },
        {
            id: 58,
            name: "ჩირი ნატურალური მანგო, შაქარმოყრილი (30ლ)",
            price: "3₾",
            category: "ჩირი",
            img: "/products/dried mango.jpg"
        },
        {
            id: 59,
            name: "ქეშიუ",
            price: "37₾",
            category: "თხილეული",
            img: "/products/cashew.jpg"
        },
        {
            id: 60,
            name: "სომხური კურაგა",
            price: "45₾",
            category: "ჩირი",
            img: "/products/kuraga.jpg"
        },
        {
            id: 61,
            name: "სომხური ქლიავის ჩირი",
            price: "35₾",
            category: "ჩირი",
            img: "/products/armeniandriedplums.jpg"
        },
        {
            id: 62,
            name: "ფინიკი სუპერი",
            price: "45₾",
            category: "ჩირი",
            img: "/products/date.jpg"
        },
        {
            id: 63,
            name: "ოსპი",
            price: "5₾",
            category: "მარცვლეული",
            img: "/products/lentils.jpg"
        },
        {
            id: 64,
            name: "მიწის თხილი მოხალული ნაჭუჭიანი",
            price: "12₾",
            category: "თხილეული",
            img: "/products/roastedpeanuts.jpg"
        },
        {
            id: 65,
            name: "ნუშის ფანტელი",
            price: "50₾",
            category: "თხილეული",
            img: "/products/almondflakes.jpg"
        },
        {
            id: 66,
            name: "სეზამის მარცვალი",
            price: "14₾",
            category: "თხილეული",
            img: "/products/sesameseeds.jpg"
        },
        {
            id: 67,
            name: "თეთრი კინუა",
            price: "18₾",
            category: "მარცვლეული",
            img: "/products/quinoa.jpg"
        },
        {
            id: 70,
            name: "ჩია",
            price: "19₾",
            category: "მარცვლეული",
            img: "/products/chia.jpg"
        },
        {
            id: 71,
            name: "სელის თესლი",
            price: "7.5₾",
            category: "მარცვლეული",
            img: "/products/flax seeds.jpg"
        },
        {
            id: 72,
            name: "წიწილა და ქათამი – 13-12 ლარი",
            price: "12-13₾",
            category: "ხორცი",
            img: "/products/chicken.png"
        },
        {
            id: 73,
            name: "ქარხნის ყველი",
            price: "25₾",
            category: "ყველი",
            img: "/products/factorycheese.jpg"
        },
        {
            id: 74,
            name: "სულგუნი საუკეთესო",
            price: "28₾",
            category: "ყველი",
            img: "/products/sulguni.jpeg"
        },
        {
            id: 75,
            name: "სულგუნი შებოლილი",
            price: "26₾",
            category: "ყველი",
            img: "/products/shebolilisulguni.jpg"
        },
        {
            id: 76,
            name: "იმერული ყველი",
            price: "21₾",
            category: "ყველი",
            img: "/products/imeruliyveli.jpeg"
        },
        {
            id: 77,
            name: "სომხური ყველი",
            price: "27₾",
            category: "ყველი",
            img: "/products/armenian cheese.jpg"
        },
        {
            id: 78,
            name: "თაფლი",
            price: "21₾",
            category: "სხვა",
            img: "/products/honey.jpg"
        },
        {
            id: 79,
            name: "თევზი – ფასი შეთანხმებით",
            price: "შეთანხმებით",
            category: "ხორცი",
            img: "/products/fish.jpg"
        }
    ],
    EN: [
        {
            id: 1,
            name: "Super Strawberry (Imported)",
            price: "22₾",
            category: "Fruit",
            img: "/products/strawberry.jpg"
        },
        {
            id: 2,
            name: "Blueberry",
            price: "65₾",
            category: "Fruit",
            img: "/products/blueberry.jpg"
        },
        {
            id: 3,
            name: "Avocado",
            price: "20₾",
            category: "Fruit",
            img: "/products/avocado.jpg"
        },
        {
            id: 4,
            name: "Banana",
            price: "5₾",
            category: "Fruit",
            img: "/products/banana.jpg"
        },
        {
            id: 5,
            name: "Kumquat",
            price: "18₾",
            category: "Fruit",
            img: "/products/kumquat.jpg"
        },
        {
            id: 6,
            name: "Pineapple",
            price: "8.5₾",
            category: "Fruit",
            img: "/products/pineapple.jpg"
        },
        {
            id: 7,
            name: "Mango",
            price: "15₾",
            category: "Fruit",
            img: "/products/mango.jpg"
        },
        {
            id: 8,
            name: "Mandarin",
            price: "6₾",
            category: "Fruit",
            img: "/products/mandarin.jpg"
        },
        {
            id: 9,
            name: "Pomelo",
            price: "7.5₾",
            category: "Fruit",
            img: "/products/pomelo.jpg"
        },
        {
            id: 10,
            name: "Grapefruit",
            price: "6₾",
            category: "Fruit",
            img: "/products/grapefruit.jpg"
        },
        {
            id: 11,
            name: "Lime",
            price: "21₾",
            category: "Fruit",
            img: "/products/lime.jpg"
        },
        {
            id: 12,
            name: "Orange",
            price: "4₾",
            category: "Fruit",
            img: "/products/orange.jpg"
        },
        {
            id: 13,
            name: "Lemon",
            price: "3.5₾",
            category: "Fruit",
            img: "/products/lemon.jpg"
        },
        {
            id: 14,
            name: "Super Apple",
            price: "5₾",
            category: "Fruit",
            img: "/products/apple.png"
        },
        {
            id: 15,
            name: "Grapes (Typhoon, Vani, Erebuni, Tita)",
            price: "6.5₾",
            category: "Fruit",
            img: "/products/grapes.jpg"
        },
        {
            id: 16,
            name: "Super Pear",
            price: "13₾",
            category: "Fruit",
            img: "/products/pear.jpg"
        },
        {
            id: 17,
            name: "Persimmon",
            price: "4.5₾",
            category: "Fruit",
            img: "/products/persimmon karalyok.jpg"
        },
        {
            id: 18,
            name: "Kiwi",
            price: "8₾",
            category: "Fruit",
            img: "/products/kiwi.jpg"
        },
        {
            id: 19,
            name: "Potato",
            price: "1.5₾",
            category: "Vegetable",
            img: "/products/potatoes.jpg"
        },
        {
            id: 20,
            name: "Sweet Potato",
            price: "10₾",
            category: "Vegetable",
            img: "/products/sweetpotato.jpg"
        },
        {
            id: 21,
            name: "Beetroot",
            price: "1.3₾",
            category: "Vegetable",
            img: "/products/beetroot.jpg"
        },
        {
            id: 22,
            name: "Carrot",
            price: "2₾",
            category: "Vegetable",
            img: "/products/carrot.jpg"
        },
        {
            id: 23,
            name: "Eggplant",
            price: "7.5₾",
            category: "Vegetable",
            img: "/products/eggplant.jpg"
        },
        {
            id: 24,
            name: "Zucchini",
            price: "8₾",
            category: "Vegetable",
            img: "/products/zucchini.jpg"
        },
        {
            id: 25,
            name: "Tomato (Azerbaijani, Planta, Cherry, Titian, Mixed)",
            price: "7₾",
            category: "Vegetable",
            img: "/products/tomatoes.jpg"
        },
        {
            id: 26,
            name: "Cucumber (Greenhouse - 15L)",
            price: "7₾",
            category: "Vegetable",
            img: "/products/cucumber.jpg"
        },
        {
            id: 27,
            name: "Cabbage (Plain, Red, Cauliflower)",
            price: "2₾",
            category: "Vegetable",
            img: "/products/cabbage.jpg"
        },
        {
            id: 28,
            name: "Bell Pepper (Mixed - 10L)",
            price: "8₾",
            category: "Vegetable",
            img: "/products/bellpepper.jpg"
        },
        {
            id: 29,
            name: "Green Pepper",
            price: "9₾",
            category: "Vegetable",
            img: "/products/greenpepper.jpg"
        },
        {
            id: 30,
            name: "Greens (Plain, Marneuli)",
            price: "10₾",
            category: "Herbs",
            img: "/products/herbs.jpg"
        },
        {
            id: 31,
            name: "Tarragon",
            price: "130₾",
            category: "Herbs",
            img: "/products/tarragon.jpg"
        },
        {
            id: 32,
            name: "Mint",
            price: "55₾",
            category: "Herbs",
            img: "/products/mint.jpg"
        },
        {
            id: 33,
            name: "Onion",
            price: "1.5₾",
            category: "Vegetable",
            img: "/products/onion.jpg"
        },
        {
            id: 34,
            name: "Garlic",
            price: "6₾",
            category: "Vegetable",
            img: "/products/garlic.jpg"
        },
        {
            id: 35,
            name: "Lettuce Leaf",
            price: "7₾",
            category: "Herbs",
            img: "/products/lettuce leaf.jpg"
        },
        {
            id: 36,
            name: "Green Beans",
            price: "13.5₾",
            category: "Vegetable",
            img: "/products/greenbeans.jpg"
        },
        {
            id: 37,
            name: "Beans (Batumela, Mertskhala, etc.)",
            price: "8₾",
            category: "Vegetable",
            img: "/products/bean field.jpeg"
        },
        {
            id: 38,
            name: "Super Pumpkin",
            price: "1₾",
            category: "Vegetable",
            img: "/products/pumpkin.jpg"
        },
        {
            id: 39,
            name: "Pomegranate (Super - 12L)",
            price: "8₾",
            category: "Fruit",
            img: "/products/pomegranate.jpg"
        },
        {
            id: 40,
            name: "Radish",
            price: "4.5₾",
            category: "Vegetable",
            img: "/products/radish.jpg"
        },
        {
            id: 41,
            name: "Black Radish",
            price: "6.5₾",
            category: "Vegetable",
            img: "/products/blackradish.jpg"
        },
        {
            id: 42,
            name: "Mushroom (Champignon)",
            price: "12₾",
            category: "Vegetable",
            img: "/products/champignon.jpg"
        },
        {
            id: 43,
            name: "Melon",
            price: "10₾",
            category: "Fruit",
            img: "/products/melon.jpg"
        },
        {
            id: 44,
            name: "Ginger",
            price: "14.5₾",
            category: "Vegetable",
            img: "/products/ginger.jpg"
        },
        {
            id: 45,
            name: "Plum",
            price: "14₾",
            category: "Fruit",
            img: "/products/plum.jpg"
        },
        {
            id: 46,
            name: "Tkemali (Red and Green) 5 Liters",
            price: "30₾",
            category: "Other",
            img: "/products/tkemali.jpg"
        },
        {
            id: 47,
            name: "Gergili (Crushed Corn)",
            price: "6₾",
            category: "Grains",
            img: "/products/gergili.jpg"
        },
        {
            id: 48,
            name: "Cornmeal",
            price: "5₾",
            category: "Grains",
            img: "/products/cornmeal.jpg"
        },
        {
            id: 49,
            name: "Walnut Super (38L) / Imported (30L)",
            price: "30-38₾",
            category: "Nuts",
            img: "/products/walnut.jpg"
        },
        {
            id: 50,
            name: "Almond",
            price: "29.5₾",
            category: "Nuts",
            img: "/products/almond.jpg"
        },
        {
            id: 51,
            name: "Selected Hazelnut",
            price: "40₾",
            category: "Nuts",
            img: "/products/selectednuts.jpg"
        },
        {
            id: 52,
            name: "Shelled Sunflower Seeds",
            price: "7.5₾",
            category: "Nuts",
            img: "/products/sunflower.jpg"
        },
        {
            id: 53,
            name: "Pumpkin Seeds (Georgian - 45L)",
            price: "23₾",
            category: "Nuts",
            img: "/products/pumpkinseeds.jpg"
        },
        {
            id: 54,
            name: "Tsandili (Wheat Mix)",
            price: "3.5₾",
            category: "Grains",
            img: "/products/tsandili.jpeg"
        },
        {
            id: 55,
            name: "Raisins (Various Categories) – 16, 19, 21, 24 GEL",
            price: "16₾",
            category: "Dried Fruit",
            img: "/products/raisins.jpg"
        },
        {
            id: 56,
            name: "American Pistachio",
            price: "47₾",
            category: "Nuts",
            img: "/products/pistachio.jpg"
        },
        {
            id: 57,
            name: "Dried Persimmon (15L), Soft Dried Peach (27L)",
            price: "15₾",
            category: "Dried Fruit",
            img: "/products/driedfruitfromKaralyok.jpg"
        },
        {
            id: 58,
            name: "Natural Dried Mango, Candied (30L)",
            price: "3₾",
            category: "Dried Fruit",
            img: "/products/dried mango.jpg"
        },
        {
            id: 59,
            name: "Cashew",
            price: "37₾",
            category: "Nuts",
            img: "/products/cashew.jpg"
        },
        {
            id: 60,
            name: "Armenian Dried Apricots",
            price: "45₾",
            category: "Dried Fruit",
            img: "/products/kuraga.jpg"
        },
        {
            id: 61,
            name: "Armenian Dried Plums",
            price: "35₾",
            category: "Dried Fruit",
            img: "/products/armeniandriedplums.jpg"
        },
        {
            id: 62,
            name: "Date Super",
            price: "45₾",
            category: "Dried Fruit",
            img: "/products/date.jpg"
        },
        {
            id: 63,
            name: "Lentils",
            price: "5₾",
            category: "Grains",
            img: "/products/lentils.jpg"
        },
        {
            id: 64,
            name: "Roasted Shelled Peanuts",
            price: "12₾",
            category: "Nuts",
            img: "/products/roastedpeanuts.jpg"
        },
        {
            id: 65,
            name: "Almond Flakes",
            price: "50₾",
            category: "Nuts",
            img: "/products/almondflakes.jpg"
        },
        {
            id: 66,
            name: "Sesame Seeds",
            price: "14₾",
            category: "Nuts",
            img: "/products/sesameseeds.jpg"
        },
        {
            id: 67,
            name: "White Quinoa",
            price: "18₾",
            category: "Grains",
            img: "/products/quinoa.jpg"
        },
        {
            id: 70,
            name: "Chia",
            price: "19₾",
            category: "Grains",
            img: "/products/chia.jpg"
        },
        {
            id: 71,
            name: "Flax Seeds",
            price: "7.5₾",
            category: "Grains",
            img: "/products/flax seeds.jpg"
        },
        {
            id: 72,
            name: "Chicken and Young Chicken – 13-12 GEL",
            price: "12-13₾",
            category: "Meat",
            img: "/products/chicken.png"
        },
        {
            id: 73,
            name: "Factory Cheese",
            price: "25₾",
            category: "Cheese",
            img: "/products/factorycheese.jpg"
        },
        {
            id: 74,
            name: "Sulguni Best",
            price: "28₾",
            category: "Cheese",
            img: "/products/sulguni.jpeg"
        },
        {
            id: 75,
            name: "Smoked Sulguni",
            price: "26₾",
            category: "Cheese",
            img: "/products/shebolilisulguni.jpg"
        },
        {
            id: 76,
            name: "Imereti Cheese",
            price: "21₾",
            category: "Cheese",
            img: "/products/imeruliyveli.jpeg"
        },
        {
            id: 77,
            name: "Armenian Cheese",
            price: "27₾",
            category: "Cheese",
            img: "/products/armenian cheese.jpg"
        },
        {
            id: 78,
            name: "Honey",
            price: "21₾",
            category: "Other",
            img: "/products/honey.jpg"
        },
        {
            id: 79,
            name: "Fish – Negotiable",
            price: "Negotiable",
            category: "Meat",
            img: "/products/fish.jpg"
        }
    ],
    RU: [
        {
            id: 1,
            name: "Клубника супер (импортная)",
            price: "22₾",
            category: "Фрукты",
            img: "/products/strawberry.jpg"
        },
        {
            id: 2,
            name: "Черника",
            price: "65₾",
            category: "Фрукты",
            img: "/products/blueberry.jpg"
        },
        {
            id: 3,
            name: "Авокадо",
            price: "20₾",
            category: "Фрукты",
            img: "/products/avocado.jpg"
        },
        {
            id: 4,
            name: "Банан",
            price: "5₾",
            category: "Фрукты",
            img: "/products/banana.jpg"
        },
        {
            id: 5,
            name: "Кумкват",
            price: "18₾",
            category: "Фрукты",
            img: "/products/kumquat.jpg"
        },
        {
            id: 6,
            name: "Ананас",
            price: "8.5₾",
            category: "Фрукты",
            img: "/products/pineapple.jpg"
        },
        {
            id: 7,
            name: "Манго",
            price: "15₾",
            category: "Фрукты",
            img: "/products/mango.jpg"
        },
        {
            id: 8,
            name: "Мандарин",
            price: "6₾",
            category: "Фрукты",
            img: "/products/mandarin.jpg"
        },
        {
            id: 9,
            name: "Помело",
            price: "7.5₾",
            category: "Фрукты",
            img: "/products/pomelo.jpg"
        },
        {
            id: 10,
            name: "Грейпфрут",
            price: "6₾",
            category: "Фрукты",
            img: "/products/grapefruit.jpg"
        },
        {
            id: 11,
            name: "Лайм",
            price: "21₾",
            category: "Фрукты",
            img: "/products/lime.jpg"
        },
        {
            id: 12,
            name: "Апельсин",
            price: "4₾",
            category: "Фрукты",
            img: "/products/orange.jpg"
        },
        {
            id: 13,
            name: "Лимон",
            price: "3.5₾",
            category: "Фрукты",
            img: "/products/lemon.jpg"
        },
        {
            id: 14,
            name: "Яблоко супер",
            price: "5₾",
            category: "Фрукты",
            img: "/products/apple.png"
        },
        {
            id: 15,
            name: "Виноград (Тайфун, Вани, Эребуни, Тита)",
            price: "6.5₾",
            category: "Фрукты",
            img: "/products/grapes.jpg"
        },
        {
            id: 16,
            name: "Груша супер",
            price: "13₾",
            category: "Фрукты",
            img: "/products/pear.jpg"
        },
        {
            id: 17,
            name: "Хурма Королек",
            price: "4.5₾",
            category: "Фрукты",
            img: "/products/persimmon karalyok.jpg"
        },
        {
            id: 18,
            name: "Киви",
            price: "8₾",
            category: "Фрукты",
            img: "/products/kiwi.jpg"
        },
        {
            id: 19,
            name: "Картофель",
            price: "1.5₾",
            category: "Овощи",
            img: "/products/potatoes.jpg"
        },
        {
            id: 20,
            name: "Батат",
            price: "10₾",
            category: "Овощи",
            img: "/products/sweetpotato.jpg"
        },
        {
            id: 21,
            name: "Свекла",
            price: "1.3₾",
            category: "Овощи",
            img: "/products/beetroot.jpg"
        },
        {
            id: 22,
            name: "Морковь",
            price: "2₾",
            category: "Овощи",
            img: "/products/carrot.jpg"
        },
        {
            id: 23,
            name: "Баклажан",
            price: "7.5₾",
            category: "Овощи",
            img: "/products/eggplant.jpg"
        },
        {
            id: 24,
            name: "Кабачок",
            price: "8₾",
            category: "Овощи",
            img: "/products/zucchini.jpg"
        },
        {
            id: 25,
            name: "Помидоры (Азерб., Планта, Черри, Тициан, Цветные)",
            price: "7₾",
            category: "Овощи",
            img: "/products/tomatoes.jpg"
        },
        {
            id: 26,
            name: "Огурцы (Парниковые - 15л)",
            price: "7₾",
            category: "Овощи",
            img: "/products/cucumber.jpg"
        },
        {
            id: 27,
            name: "Капуста (обычн., красная, цветная)",
            price: "2₾",
            category: "Овощи",
            img: "/products/cabbage.jpg"
        },
        {
            id: 28,
            name: "Болгарский перец (цветной - 10л)",
            price: "8₾",
            category: "Овощи",
            img: "/products/bellpepper.jpg"
        },
        {
            id: 29,
            name: "Зеленый перец чили",
            price: "9₾",
            category: "Овощи",
            img: "/products/greenpepper.jpg"
        },
        {
            id: 30,
            name: "Зелень (Обычная, Марнеульская)",
            price: "10₾",
            category: "Зелень",
            img: "/products/herbs.jpg"
        },
        {
            id: 31,
            name: "Тархун",
            price: "130₾",
            category: "Зეлень",
            img: "/products/tarragon.jpg"
        },
        {
            id: 32,
            name: "Мята",
            price: "55₾",
            category: "Зелень",
            img: "/products/mint.jpg"
        },
        {
            id: 33,
            name: "Лук",
            price: "1.5₾",
            category: "Овощи",
            img: "/products/onion.jpg"
        },
        {
            id: 34,
            name: "Чеснок",
            price: "6₾",
            category: "Овощи",
            img: "/products/garlic.jpg"
        },
        {
            id: 35,
            name: "Лист салата",
            price: "7₾",
            category: "Зелень",
            img: "/products/lettuce leaf.jpg"
        },
        {
            id: 36,
            name: "Зеленая фасоль",
            price: "13.5₾",
            category: "Овощи",
            img: "/products/greenbeans.jpg"
        },
        {
            id: 37,
            name: "Фасоль (Батумела, Мерцхала, др.)",
            price: "8₾",
            category: "Овощи",
            img: "/products/bean field.jpeg"
        },
        {
            id: 38,
            name: "Тыква супер",
            price: "1₾",
            category: "Овощи",
            img: "/products/pumpkin.jpg"
        },
        {
            id: 39,
            name: "Гранат (супер - 12л)",
            price: "8₾",
            category: "Фрукты",
            img: "/products/pomegranate.jpg"
        },
        {
            id: 40,
            name: "Редис",
            price: "4.5₾",
            category: "Овощи",
            img: "/products/radish.jpg"
        },
        {
            id: 41,
            name: "Черная редька",
            price: "6.5₾",
            category: "Овощи",
            img: "/products/blackradish.jpg"
        },
        {
            id: 42,
            name: "Грибы (Шампиньоны)",
            price: "12₾",
            category: "Овощи",
            img: "/products/champignon.jpg"
        },
        {
            id: 43,
            name: "Дыня",
            price: "10₾",
            category: "Фрукты",
            img: "/products/melon.jpg"
        },
        {
            id: 44,
            name: "Имбирь",
            price: "14.5₾",
            category: "Овощи",
            img: "/products/ginger.jpg"
        },
        {
            id: 45,
            name: "Слива",
            price: "14₾",
            category: "Фрукты",
            img: "/products/plum.jpg"
        },
        {
            id: 46,
            name: "Ткемали (красный и зеленый) 5 литров",
            price: "30₾",
            category: "Другое",
            img: "/products/tkemali.jpg"
        },
        {
            id: 47,
            name: "Гергили (дробленая кукуруза)",
            price: "6₾",
            category: "Злаки",
            img: "/products/gergili.jpg"
        },
        {
            id: 48,
            name: "Кукурузная мука",
            price: "5₾",
            category: "Злаки",
            img: "/products/cornmeal.jpg"
        },
        {
            id: 49,
            name: "Грецкий орех супер (38л) / импорт. (30л)",
            price: "30-38₾",
            category: "Орехи",
            img: "/products/walnut.jpg"
        },
        {
            id: 50,
            name: "Миндаль",
            price: "29.5₾",
            category: "Орехи",
            img: "/products/almond.jpg"
        },
        {
            id: 51,
            name: "Очищенный фундук",
            price: "40₾",
            category: "Орехи",
            img: "/products/selectednuts.jpg"
        },
        {
            id: 52,
            name: "Очищенные семечки подсолнуха",
            price: "7.5₾",
            category: "Орехи",
            img: "/products/sunflower.jpg"
        },
        {
            id: 53,
            name: "Семена тыквы (Грузинские - 45л)",
            price: "23₾",
            category: "Орехи",
            img: "/products/pumpkinseeds.jpg"
        },
        {
            id: 54,
            name: "Цандили (пшеничная смесь)",
            price: "3.5₾",
            category: "Злаки",
            img: "/products/tsandili.jpeg"
        },
        {
            id: 55,
            name: "Изюм (разные категории) – 16, 19, 21, 24 лари",
            price: "16₾",
            category: "Сухофрукты",
            img: "/products/raisins.jpg"
        },
        {
            id: 56,
            name: "Фисташки американские",
            price: "47₾",
            category: "Орехи",
            img: "/products/pistachio.jpg"
        },
        {
            id: 57,
            name: "Сушеная хурма (15л), вяленый персик (27л)",
            price: "15₾",
            category: "Сухофрукты",
            img: "/products/driedfruitfromKaralyok.jpg"
        },
        {
            id: 58,
            name: "Манго натуральное сушеное, в сахаре (30л)",
            price: "3₾",
            category: "Сухофрукты",
            img: "/products/dried mango.jpg"
        },
        {
            id: 59,
            name: "Кешью",
            price: "37₾",
            category: "Орехи",
            img: "/products/cashew.jpg"
        },
        {
            id: 60,
            name: "Армянская курага",
            price: "45₾",
            category: "Сухофрукты",
            img: "/products/kuraga.jpg"
        },
        {
            id: 61,
            name: "Армянский чернослив",
            price: "35₾",
            category: "Сухофрукты",
            img: "/products/armeniandriedplums.jpg"
        },
        {
            id: 62,
            name: "Финик супер",
            price: "45₾",
            category: "Сухофрукты",
            img: "/products/date.jpg"
        },
        {
            id: 63,
            name: "Чечевица",
            price: "5₾",
            category: "Злаки",
            img: "/products/lentils.jpg"
        },
        {
            id: 64,
            name: "Арахис жареный в скорлупе",
            price: "12₾",
            category: "Орехи",
            img: "/products/roastedpeanuts.jpg"
        },
        {
            id: 65,
            name: "Миндальные лепестки",
            price: "50₾",
            category: "Орехи",
            img: "/products/almondflakes.jpg"
        },
        {
            id: 66,
            name: "Кунжут",
            price: "14₾",
            category: "Орехи",
            img: "/products/sesameseeds.jpg"
        },
        {
            id: 67,
            name: "Белая киноа",
            price: "18₾",
            category: "Злаки",
            img: "/products/quinoa.jpg"
        },
        {
            id: 70,
            name: "Чиа",
            price: "19₾",
            category: "Злаки",
            img: "/products/chia.jpg"
        },
        {
            id: 71,
            name: "Семена льна",
            price: "7.5₾",
            category: "Злаки",
            img: "/products/flax seeds.jpg"
        },
        {
            id: 72,
            name: "Цыпленок и курица – 13-12 лари",
            price: "12-13₾",
            category: "Мясо",
            img: "/products/chicken.png"
        },
        {
            id: 73,
            name: "Сыр заводской",
            price: "25₾",
            category: "Сыр",
            img: "/products/factorycheese.jpg"
        },
        {
            id: 74,
            name: "Сулугуни лучший",
            price: "28₾",
            category: "Сыр",
            img: "/products/sulguni.jpeg"
        },
        {
            id: 75,
            name: "Сулугуни копченый",
            price: "26₾",
            category: "Сыр",
            img: "/products/shebolilisulguni.jpg"
        },
        {
            id: 76,
            name: "Имеретинский сыр",
            price: "21₾",
            category: "Сыр",
            img: "/products/imeruliyveli.jpeg"
        },
        {
            id: 77,
            name: "Армянский сыр",
            price: "27₾",
            category: "Сыр",
            img: "/products/armenian cheese.jpg"
        },
        {
            id: 78,
            name: "Мед",
            price: "21₾",
            category: "Другое",
            img: "/products/honey.jpg"
        },
        {
            id: 79,
            name: "Рыба – цена по договоренности",
            price: "По договоренности",
            category: "Мясо",
            img: "/products/fish.jpg"
        }
    ]
};
// 2. კატეგორიების თარგმანი
const categoryTranslations = {
    KA: [
        "ყველა",
        "ხილი",
        "ბოსტნეული",
        "ყველი",
        "თხილეული",
        "ჩირი",
        "მარცვლეული",
        "ხორცი",
        "მწვანილი",
        "სხვა"
    ],
    EN: [
        "All",
        "Fruits",
        "Vegetables",
        "Cheese",
        "Nuts",
        "Dried Fruits",
        "Grains",
        "Meat",
        "Herbs",
        "Other"
    ],
    RU: [
        "Все",
        "Фрукты",
        "Овощи",
        "Сыр",
        "Орехи",
        "Сухофрукты",
        "Злаки",
        "Мясо",
        "Зелень",
        "Другое"
    ]
};
const uiTranslations = {
    KA: {
        title: "პროდუქტები",
        searchPlaceholder: "მოძებნე პროდუქტი...",
        priceLabel: "ფასი",
        moreBtn: "ნახე ყველა",
        lessBtn: "ნაკლები პროდუქტი"
    },
    EN: {
        title: "Products",
        searchPlaceholder: "Search product...",
        priceLabel: "Price",
        moreBtn: "View All",
        lessBtn: "Show Less"
    },
    RU: {
        title: "Продукты",
        searchPlaceholder: "Поиск продукта...",
        priceLabel: "Цена",
        moreBtn: "Показать все",
        lessBtn: "Показать меньше"
    }
};
function ProductsSection() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [activeCategoryIndex, setActiveCategoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = categoryTranslations[lang] || categoryTranslations.KA;
    const t = uiTranslations[lang] || uiTranslations.KA;
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductsSection.useMemo[filteredProducts]": ()=>{
            const currentData = productsData[lang] || productsData.KA;
            const kaCategory = categoryTranslations.KA[activeCategoryIndex];
            return currentData.filter({
                "ProductsSection.useMemo[filteredProducts]": (p)=>{
                    const matchesCategory = activeCategoryIndex === 0 || p.category === kaCategory;
                    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                }
            }["ProductsSection.useMemo[filteredProducts]"]);
        }
    }["ProductsSection.useMemo[filteredProducts]"], [
        lang,
        activeCategoryIndex,
        searchQuery
    ]);
    const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 16);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "products",
        className: "relative py-16 min-h-screen font-sans overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/bg.png",
                        alt: "Background",
                        fill: true,
                        priority: true,
                        quality: 75,
                        sizes: "100vw",
                        className: "object-cover opacity-30 brightness-[1.1]"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1850px] mx-auto px-4 md:px-10 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-10 h-10 md:w-12 md:h-12 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/symbol.png",
                                            alt: "Symbol",
                                            fill: true,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 md:px-10 py-2 md:py-3 border-[1.5px] border-white/50 rounded-2xl bg-white/10 backdrop-blur-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-base md:text-lg tracking-[0.2em] uppercase font-semibold",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full lg:w-[400px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400",
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: t.searchPlaceholder,
                                        className: "w-full pl-12 pr-6 py-4 bg-white/95 rounded-2xl outline-none text-black font-semibold text-sm focus:ring-2 focus:ring-[#b89e5d]",
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar",
                        children: categories.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveCategoryIndex(index);
                                    setShowAll(false);
                                },
                                className: `px-6 py-2.5 rounded-xl font-bold uppercase text-[9px] tracking-widest transition-all ${activeCategoryIndex === index ? 'bg-[#b89e5d] text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                children: cat
                            }, index, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "popLayout",
                            children: visibleProducts.map((product, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    className: "group bg-white/95 rounded-[24px] overflow-hidden shadow-xl border border-white/20 flex flex-col h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-44 w-full overflow-hidden bg-gray-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: product.img,
                                                    alt: product.name,
                                                    fill: true,
                                                    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw",
                                                    priority: idx < 8,
                                                    loading: idx < 8 ? "eager" : "lazy",
                                                    className: "object-cover transition-transform duration-700 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-3 left-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-black/70 px-3 py-1 rounded-full text-[8px] font-black text-white border border-white/10",
                                                        children: product.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 flex flex-col flex-grow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-[13px] font-black text-black mb-auto leading-tight min-h-[32px]",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-5 flex justify-between items-center border-t border-gray-100 pt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-[8px] uppercase font-black",
                                                                    children: t.priceLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-black text-black",
                                                                    children: product.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                            lineNumber: 375,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "bg-black text-white w-9 h-9 rounded-xl hover:bg-[#b89e5d] transition-all",
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                            lineNumber: 379,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                            lineNumber: 343,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    filteredProducts.length > 16 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAll(!showAll),
                            className: "px-12 py-5 rounded-2xl bg-white text-black font-black uppercase text-[10px] hover:bg-[#b89e5d] hover:text-white transition-all shadow-2xl",
                            children: showAll ? t.lessBtn : `${t.moreBtn} (${filteredProducts.length})`
                        }, void 0, false, {
                            fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/components/products-section.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_s(ProductsSection, "4V7FuGnvG0Ru78fOB7ZvEE2n+mw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ProductsSection;
var _c;
__turbopack_context__.k.register(_c, "ProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/components/stats-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// 1. მონაცემების თარგმანი
const content = {
    KA: {
        stats: [
            {
                label: "წელი",
                value: "15+"
            },
            {
                label: "მომხმარებელი",
                value: "200+"
            },
            {
                label: "მიწოდება",
                value: "24/7"
            }
        ],
        description: "თქვენი საქმიანობის შეუფერხებელი მუშაობისთვის ვუზრუნველყოფთ ხარისხიანი პროდუქტების სტაბილურ მიწოდებას და ოპერატიულ სერვისს,"
    },
    EN: {
        stats: [
            {
                label: "Years",
                value: "15+"
            },
            {
                label: "Customers",
                value: "200+"
            },
            {
                label: "Delivery",
                value: "24/7"
            }
        ],
        description: "To ensure the smooth operation of your business, we provide stable supply of quality products and prompt service,"
    },
    RU: {
        stats: [
            {
                label: "Лет",
                value: "15+"
            },
            {
                label: "Клиентов",
                value: "200+"
            },
            {
                label: "Доставка",
                value: "24/7"
            }
        ],
        description: "Для обеспечения бесперебойной работы вашего бизнеса мы обеспечиваем стабильные поставки качественной продукции и оперативный сервис,"
    }
};
function StatsSection() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = content[lang] || content.KA;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#0a0a0a] py-24 px-4 overflow-hidden min-h-[650px] flex flex-col justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/stats-bg.png",
                        alt: "Horeca Stats Background",
                        fill: true,
                        className: "object-cover object-left filter brightness-[1.25] contrast-[1.20] opacity-50",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/30 to-[#0a0a0a] w-full"
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto flex flex-col relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end mb-16 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-72 h-32 md:w-[400px] md:h-36 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo-white.png",
                                    alt: "Horeca Distribution Logo",
                                    fill: true,
                                    className: "object-contain object-right",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-white text-xl md:text-2xl font-medium leading-[1.5] tracking-wider opacity-90 uppercase italic",
                                    children: t.description
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        viewport: {
                            once: true
                        },
                        className: "bg-[#b89e5d] rounded-[35px] py-10 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center shadow-2xl w-full gap-8 md:gap-0",
                        children: t.stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center relative flex-1 w-full group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                        initial: {
                                            scale: 0.8,
                                            opacity: 0
                                        },
                                        whileInView: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: index * 0.1,
                                            duration: 0.5
                                        },
                                        className: "text-white text-5xl md:text-6xl font-black mb-1 tracking-tighter",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/90 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap",
                                        children: stat.label
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    index !== t.stats.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block absolute -right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/components/stats-section.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(StatsSection, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const footerContent = {
    KA: {
        menuTitle: "მენიუ",
        about: "ჩვენს შესახებ",
        partners: "პარტნიორები",
        productsTitle: "პროდუქტები",
        catalog: "კატალოგი",
        contactTitle: "კონტაქტი"
    },
    EN: {
        menuTitle: "Menu",
        about: "About Us",
        partners: "Partners",
        productsTitle: "Products",
        catalog: "Catalog",
        contactTitle: "Contact"
    },
    RU: {
        menuTitle: "Меню",
        about: "О нас",
        partners: "Партнеры",
        productsTitle: "Продукты",
        catalog: "Каталог",
        contactTitle: "Контакт"
    }
};
function Footer() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const currentLang = lang || 'KA';
    const t = footerContent[currentLang];
    const scrollToSection = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full bg-[#f2f0eb] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1400px] mx-auto px-10 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 text-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black mb-6 uppercase tracking-wider",
                                    children: t.menuTitle
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-lg font-medium opacity-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#about",
                                                onClick: (e)=>scrollToSection(e, 'about'),
                                                className: "hover:text-[#b8a26a] cursor-pointer transition-colors",
                                                children: t.about
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#partners",
                                                onClick: (e)=>scrollToSection(e, 'partners'),
                                                className: "hover:text-[#b8a26a] cursor-pointer transition-colors",
                                                children: t.partners
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black mb-6 uppercase tracking-wider",
                                    children: t.productsTitle
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-lg font-medium opacity-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#products",
                                            onClick: (e)=>scrollToSection(e, 'products'),
                                            className: "hover:text-[#b8a26a] cursor-pointer transition-colors",
                                            children: t.catalog
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black mb-6 uppercase tracking-wider",
                                    children: t.contactTitle
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-lg font-medium opacity-80 uppercase",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:INFO@HORECADISTRIBUTION.COM",
                                                className: "hover:text-[#b8a26a] break-all",
                                                children: "INFO@HORECADISTRIBUTION.COM"
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+995123456789",
                                                className: "hover:text-[#b8a26a]",
                                                children: "+995 123 45 67 89"
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-8 md:absolute md:bottom-0 md:right-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#b8a26a] transition-colors border border-gray-300 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-black py-6 px-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1400px] mx-auto flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "POWERED BY ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold",
                                children: "HORECA DISTRIBUTION"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this),
                            " 2026"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Footer, "GXyK8e6a44mVG57X3BP71uFgqGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/horeca-b2b/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/about-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$partners$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/partners-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$products$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/products-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/stats-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/horeca-b2b/src/app/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/horeca-b2b/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
"use client";
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative h-screen w-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/hero-bg.png",
                                alt: "Hero Background",
                                fill: true,
                                /* აქ მოვუმატეთ brightness და opacity მკვეთრი ფერებისთვის */ className: "object-cover filter brightness-[1.0] contrast-[1.0] opacity-100",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent h-1/3"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1px] h-48 bg-gradient-to-b from-transparent via-[#b89e5d]/50 to-[#b89e5d]"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-black tracking-[0.6em] text-white/70 uppercase whitespace-nowrap drop-shadow-lg",
                                    style: {
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(180deg)'
                                    },
                                    children: "© HORECA DISTRIBUTION"
                                }, void 0, false, {
                                    fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-8 items-center text-white/50 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://facebook.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-[#b89e5d] hover:scale-125 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            size: 20,
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/horecadistribution_/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-[#b89e5d] hover:scale-125 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                            size: 20,
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://linkedin.com",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-[#b89e5d] hover:scale-125 transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 20,
                                            strokeWidth: 2
                                        }, void 0, false, {
                                            fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                15,
                                0
                            ],
                            opacity: [
                                0.4,
                                1,
                                0.4
                            ]
                        },
                        transition: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-white/40 tracking-[0.3em] uppercase mb-4 [writing-mode:vertical-rl]",
                                children: "Scroll"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[1.5px] h-24 bg-gradient-to-b from-[#b89e5d] via-white/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/horeca-b2b/src/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$partners$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$products$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$stats$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$horeca$2d$b2b$2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/horeca-b2b/src/app/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/horeca-b2b/src/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/horeca-b2b/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=horeca-b2b_src_app_befbc215._.js.map