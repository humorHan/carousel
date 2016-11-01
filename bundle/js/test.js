webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/10/31.
	 */
	__webpack_require__(1);
	var testCarousel = __webpack_require__(3);
	
	testCarousel("dom1", 3, true, {
	    "width": 100,
	    "height": 80
	}, 30000, 500);
	
	testCarousel("dom2", 3, true, {
	    "width": 100,
	    "height": 80
	}, 2000, 500);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 16/10/31.
	 */
	__webpack_require__(4);
	var $ = __webpack_require__(5);
	var carouselTpl = __webpack_require__(6);
	
	function Carousel(dom, carouselSum, hasCarouselNav, style, changeTime, animationTime) {
	    this.dom = $("." + dom);
	    this.carouselSum = carouselSum;
	    this.hasOwnProperty = hasCarouselNav;
	    this.style = style;
	    this.changeTime = changeTime || 3000;
	    this.animationTime = animationTime || 500;
	    this.index = 0; //显示图片的索引
	    this.timer = null; //定时器
	    this.initDom();
	    this.initBtns();
	}
	
	Carousel.prototype = {
	    //不参与逻辑点
	    initStatic: function () {
	        this.dom.find(".carousel-img").css({
	            'width': this.carouselSum * this.style.width
	        });
	    },
	    initDom: function () {
	        this.dom.html(carouselTpl([1, 2, 3]));
	        this.dom.find(".carousel-wrapper").css(this.style);
	        this.initStatic();
	        this.initTimer();
	    },
	    initTimer: function () {
	        var tThis = this;
	        tThis.timer = setInterval(function () {
	            tThis.next();
	            tThis.changeNav();
	        }, tThis.changeTime)
	    },
	    /**
	     * 下一页
	     * @param isClick 是否是通过点击下一页按钮触发
	     */
	    next: function (isClick) {
	        this.index++;
	        if (isClick){
	            clearInterval(this.timer);
	            this.initTimer();
	        }
	        if (this.index == this.carouselSum) {
	            this.index = 0;
	            //无缝处理
	            this.dom.find(".carousel-wrapper").css({
	                background: 'url(/test/bundle/img/' + (this.carouselSum) + '.jpeg)'
	            });
	            this.dom.find(".carousel-img").css("left", this.style.width);
	        }
	        this.changeNav();
	        this.dom.find(".carousel-img").stop().animate({
	            'left': -this.style.width * this.index
	        }, this.animationTime);
	    },
	    previous: function () {
	        this.index--;
	        clearInterval(this.timer);
	        this.initTimer();
	        if (this.index == -1) {
	            this.index = this.carouselSum - 1;
	            //无缝处理
	            this.dom.find(".carousel-wrapper").css({
	                background: 'url(/test/bundle/img/' + 1 + '.jpeg)'
	            });
	            this.dom.find(".carousel-img").css("left", -this.style.width * (this.index + 1));
	        }
	        this.changeNav();
	        this.dom.find(".carousel-img").stop().animate({
	            'left': -this.style.width * this.index
	        }, this.animationTime);
	    },
	    //显示要显示的nav
	    changeNav: function () {
	        var temp = this.dom.find(".carousel-nav");
	        temp.find(".active").removeClass("active");
	        temp.find("li").eq(this.index).addClass("active");
	    },
	    // 点击carousel-nav li
	    goTo: function () {
	        clearInterval(this.timer);
	        this.dom.find(".carousel-img").stop().animate({
	            'left': -this.style.width * this.index
	        }, this.animationTime, this.initTimer());
	    },
	    initBtns: function () {
	        var tThis = this;
	        // previous + next + 划过img + 轮播nav
	        tThis.dom.delegate(".previous", "click", function () {
	            tThis.previous();
	        }).delegate(".next", "click", function () {
	            tThis.next(true);
	        }).delegate(".carousel-img", "mouseover", function () {
	            clearInterval(tThis.timer);
	        }).delegate(".carousel-img", "mouseout", function () {
	            tThis.initTimer();
	        }).delegate(".carousel-nav li", "click", function () {
	            tThis.index = $(this).index();
	            tThis.changeNav();
	            tThis.goTo();
	        });
	    }
	};
	
	/**
	 * 轮播图
	 * @param dom               轮播图节点
	 * @param carouselSum       轮播图有几张
	 * @param hasCarouselNav    轮播图是否存在下面的---焦点切换
	 * @param style             轮播图宽高 (obj)
	 * @param changeTime        轮播图切换时间间隔 (默认3000 ms)
	 * @param animationTime     轮播图切换动画时间 (默认300 ms)
	 */
	
	//TODO 传参data 赋值图片地址到tpl内li上 无缝处理取值赋值
	//TODO 甚至传参data后 轮播图的张数已经确定 所以传data替代张数参数也可以
	module.exports = function (dom, carouselSum, hasCarouselNav, style, changeTime, animationTime) {
	    return new Carousel(dom, carouselSum, hasCarouselNav, style, changeTime, animationTime);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */
	
	(function( global, factory ) {
	
	    if ( typeof module === "object" && typeof module.exports === "object" ) {
	        // For CommonJS and CommonJS-like environments where a proper `window`
	        // is present, execute the factory and get jQuery.
	        // For environments that do not have a `window` with a `document`
	        // (such as Node.js), expose a factory as module.exports.
	        // This accentuates the need for the creation of a real `window`.
	        // e.g. var jQuery = require("jquery")(window);
	        // See ticket #14549 for more info.
	        module.exports = global.document ?
	            factory( global, true ) :
	            function( w ) {
	                if ( !w.document ) {
	                    throw new Error( "jQuery requires a window with a document" );
	                }
	                return factory( w );
	            };
	    } else {
	        factory( global );
	    }
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	    var arr = [];
	
	    var document = window.document;
	
	    var slice = arr.slice;
	
	    var concat = arr.concat;
	
	    var push = arr.push;
	
	    var indexOf = arr.indexOf;
	
	    var class2type = {};
	
	    var toString = class2type.toString;
	
	    var hasOwn = class2type.hasOwnProperty;
	
	    var support = {};
	
	
	
	    var
	        version = "2.2.4",
	
	    // Define a local copy of jQuery
	        jQuery = function( selector, context ) {
	
	            // The jQuery object is actually just the init constructor 'enhanced'
	            // Need init if jQuery is called (just allow error to be thrown if not included)
	            return new jQuery.fn.init( selector, context );
	        },
	
	    // Support: Android<4.1
	    // Make sure we trim BOM and NBSP
	        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
	    // Matches dashed string for camelizing
	        rmsPrefix = /^-ms-/,
	        rdashAlpha = /-([\da-z])/gi,
	
	    // Used by jQuery.camelCase as callback to replace()
	        fcamelCase = function( all, letter ) {
	            return letter.toUpperCase();
	        };
	
	    jQuery.fn = jQuery.prototype = {
	
	        // The current version of jQuery being used
	        jquery: version,
	
	        constructor: jQuery,
	
	        // Start with an empty selector
	        selector: "",
	
	        // The default length of a jQuery object is 0
	        length: 0,
	
	        toArray: function() {
	            return slice.call( this );
	        },
	
	        // Get the Nth element in the matched element set OR
	        // Get the whole matched element set as a clean array
	        get: function( num ) {
	            return num != null ?
	
	                // Return just the one element from the set
	                ( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
	                // Return all the elements in a clean array
	                slice.call( this );
	        },
	
	        // Take an array of elements and push it onto the stack
	        // (returning the new matched element set)
	        pushStack: function( elems ) {
	
	            // Build a new jQuery matched element set
	            var ret = jQuery.merge( this.constructor(), elems );
	
	            // Add the old object onto the stack (as a reference)
	            ret.prevObject = this;
	            ret.context = this.context;
	
	            // Return the newly-formed element set
	            return ret;
	        },
	
	        // Execute a callback for every element in the matched set.
	        each: function( callback ) {
	            return jQuery.each( this, callback );
	        },
	
	        map: function( callback ) {
	            return this.pushStack( jQuery.map( this, function( elem, i ) {
	                return callback.call( elem, i, elem );
	            } ) );
	        },
	
	        slice: function() {
	            return this.pushStack( slice.apply( this, arguments ) );
	        },
	
	        first: function() {
	            return this.eq( 0 );
	        },
	
	        last: function() {
	            return this.eq( -1 );
	        },
	
	        eq: function( i ) {
	            var len = this.length,
	                j = +i + ( i < 0 ? len : 0 );
	            return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	        },
	
	        end: function() {
	            return this.prevObject || this.constructor();
	        },
	
	        // For internal use only.
	        // Behaves like an Array's method, not like a jQuery method.
	        push: push,
	        sort: arr.sort,
	        splice: arr.splice
	    };
	
	    jQuery.extend = jQuery.fn.extend = function() {
	        var options, name, src, copy, copyIsArray, clone,
	            target = arguments[ 0 ] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;
	
	        // Handle a deep copy situation
	        if ( typeof target === "boolean" ) {
	            deep = target;
	
	            // Skip the boolean and the target
	            target = arguments[ i ] || {};
	            i++;
	        }
	
	        // Handle case when target is a string or something (possible in deep copy)
	        if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
	            target = {};
	        }
	
	        // Extend jQuery itself if only one argument is passed
	        if ( i === length ) {
	            target = this;
	            i--;
	        }
	
	        for ( ; i < length; i++ ) {
	
	            // Only deal with non-null/undefined values
	            if ( ( options = arguments[ i ] ) != null ) {
	
	                // Extend the base object
	                for ( name in options ) {
	                    src = target[ name ];
	                    copy = options[ name ];
	
	                    // Prevent never-ending loop
	                    if ( target === copy ) {
	                        continue;
	                    }
	
	                    // Recurse if we're merging plain objects or arrays
	                    if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
	                        ( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
	                        if ( copyIsArray ) {
	                            copyIsArray = false;
	                            clone = src && jQuery.isArray( src ) ? src : [];
	
	                        } else {
	                            clone = src && jQuery.isPlainObject( src ) ? src : {};
	                        }
	
	                        // Never move original objects, clone them
	                        target[ name ] = jQuery.extend( deep, clone, copy );
	
	                        // Don't bring in undefined values
	                    } else if ( copy !== undefined ) {
	                        target[ name ] = copy;
	                    }
	                }
	            }
	        }
	
	        // Return the modified object
	        return target;
	    };
	
	    jQuery.extend( {
	
	        // Unique for each copy of jQuery on the page
	        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
	        // Assume jQuery is ready without the ready module
	        isReady: true,
	
	        error: function( msg ) {
	            throw new Error( msg );
	        },
	
	        noop: function() {},
	
	        isFunction: function( obj ) {
	            return jQuery.type( obj ) === "function";
	        },
	
	        isArray: Array.isArray,
	
	        isWindow: function( obj ) {
	            return obj != null && obj === obj.window;
	        },
	
	        isNumeric: function( obj ) {
	
	            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	            // subtraction forces infinities to NaN
	            // adding 1 corrects loss of precision from parseFloat (#15100)
	            var realStringObj = obj && obj.toString();
	            return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	        },
	
	        isPlainObject: function( obj ) {
	            var key;
	
	            // Not plain objects:
	            // - Any object or value whose internal [[Class]] property is not "[object Object]"
	            // - DOM nodes
	            // - window
	            if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
	                return false;
	            }
	
	            // Not own constructor property must be Object
	            if ( obj.constructor &&
	                !hasOwn.call( obj, "constructor" ) &&
	                !hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
	                return false;
	            }
	
	            // Own properties are enumerated firstly, so to speed up,
	            // if last one is own, then all properties are own
	            for ( key in obj ) {}
	
	            return key === undefined || hasOwn.call( obj, key );
	        },
	
	        isEmptyObject: function( obj ) {
	            var name;
	            for ( name in obj ) {
	                return false;
	            }
	            return true;
	        },
	
	        type: function( obj ) {
	            if ( obj == null ) {
	                return obj + "";
	            }
	
	            // Support: Android<4.0, iOS<6 (functionish RegExp)
	            return typeof obj === "object" || typeof obj === "function" ?
	            class2type[ toString.call( obj ) ] || "object" :
	                typeof obj;
	        },
	
	        // Evaluates a script in a global context
	        globalEval: function( code ) {
	            var script,
	                indirect = eval;
	
	            code = jQuery.trim( code );
	
	            if ( code ) {
	
	                // If the code includes a valid, prologue position
	                // strict mode pragma, execute code by injecting a
	                // script tag into the document.
	                if ( code.indexOf( "use strict" ) === 1 ) {
	                    script = document.createElement( "script" );
	                    script.text = code;
	                    document.head.appendChild( script ).parentNode.removeChild( script );
	                } else {
	
	                    // Otherwise, avoid the DOM node creation, insertion
	                    // and removal by using an indirect global eval
	
	                    indirect( code );
	                }
	            }
	        },
	
	        // Convert dashed to camelCase; used by the css and data modules
	        // Support: IE9-11+
	        // Microsoft forgot to hump their vendor prefix (#9572)
	        camelCase: function( string ) {
	            return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	        },
	
	        nodeName: function( elem, name ) {
	            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	        },
	
	        each: function( obj, callback ) {
	            var length, i = 0;
	
	            if ( isArrayLike( obj ) ) {
	                length = obj.length;
	                for ( ; i < length; i++ ) {
	                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
	                        break;
	                    }
	                }
	            } else {
	                for ( i in obj ) {
	                    if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
	                        break;
	                    }
	                }
	            }
	
	            return obj;
	        },
	
	        // Support: Android<4.1
	        trim: function( text ) {
	            return text == null ?
	                "" :
	                ( text + "" ).replace( rtrim, "" );
	        },
	
	        // results is for internal usage only
	        makeArray: function( arr, results ) {
	            var ret = results || [];
	
	            if ( arr != null ) {
	                if ( isArrayLike( Object( arr ) ) ) {
	                    jQuery.merge( ret,
	                        typeof arr === "string" ?
	                            [ arr ] : arr
	                    );
	                } else {
	                    push.call( ret, arr );
	                }
	            }
	
	            return ret;
	        },
	
	        inArray: function( elem, arr, i ) {
	            return arr == null ? -1 : indexOf.call( arr, elem, i );
	        },
	
	        merge: function( first, second ) {
	            var len = +second.length,
	                j = 0,
	                i = first.length;
	
	            for ( ; j < len; j++ ) {
	                first[ i++ ] = second[ j ];
	            }
	
	            first.length = i;
	
	            return first;
	        },
	
	        grep: function( elems, callback, invert ) {
	            var callbackInverse,
	                matches = [],
	                i = 0,
	                length = elems.length,
	                callbackExpect = !invert;
	
	            // Go through the array, only saving the items
	            // that pass the validator function
	            for ( ; i < length; i++ ) {
	                callbackInverse = !callback( elems[ i ], i );
	                if ( callbackInverse !== callbackExpect ) {
	                    matches.push( elems[ i ] );
	                }
	            }
	
	            return matches;
	        },
	
	        // arg is for internal usage only
	        map: function( elems, callback, arg ) {
	            var length, value,
	                i = 0,
	                ret = [];
	
	            // Go through the array, translating each of the items to their new values
	            if ( isArrayLike( elems ) ) {
	                length = elems.length;
	                for ( ; i < length; i++ ) {
	                    value = callback( elems[ i ], i, arg );
	
	                    if ( value != null ) {
	                        ret.push( value );
	                    }
	                }
	
	                // Go through every key on the object,
	            } else {
	                for ( i in elems ) {
	                    value = callback( elems[ i ], i, arg );
	
	                    if ( value != null ) {
	                        ret.push( value );
	                    }
	                }
	            }
	
	            // Flatten any nested arrays
	            return concat.apply( [], ret );
	        },
	
	        // A global GUID counter for objects
	        guid: 1,
	
	        // Bind a function to a context, optionally partially applying any
	        // arguments.
	        proxy: function( fn, context ) {
	            var tmp, args, proxy;
	
	            if ( typeof context === "string" ) {
	                tmp = fn[ context ];
	                context = fn;
	                fn = tmp;
	            }
	
	            // Quick check to determine if target is callable, in the spec
	            // this throws a TypeError, but we will just return undefined.
	            if ( !jQuery.isFunction( fn ) ) {
	                return undefined;
	            }
	
	            // Simulated bind
	            args = slice.call( arguments, 2 );
	            proxy = function() {
	                return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	            };
	
	            // Set the guid of unique handler to the same of original handler, so it can be removed
	            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
	            return proxy;
	        },
	
	        now: Date.now,
	
	        // jQuery.support is not used in Core but other projects attach their
	        // properties to it so it needs to exist.
	        support: support
	    } );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	    /* jshint ignore: start */
	    if ( typeof Symbol === "function" ) {
	        jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	    }
	    /* jshint ignore: end */
	
	// Populate the class2type map
	    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	        function( i, name ) {
	            class2type[ "[object " + name + "]" ] = name.toLowerCase();
	        } );
	
	    function isArrayLike( obj ) {
	
	        // Support: iOS 8.2 (not reproducible in simulator)
	        // `in` check used to prevent JIT error (gh-2145)
	        // hasOwn isn't used here due to false negatives
	        // regarding Nodelist length in IE
	        var length = !!obj && "length" in obj && obj.length,
	            type = jQuery.type( obj );
	
	        if ( type === "function" || jQuery.isWindow( obj ) ) {
	            return false;
	        }
	
	        return type === "array" || length === 0 ||
	            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	    }
	    var Sizzle =
	        /*!
	         * Sizzle CSS Selector Engine v2.2.1
	         * http://sizzlejs.com/
	         *
	         * Copyright jQuery Foundation and other contributors
	         * Released under the MIT license
	         * http://jquery.org/license
	         *
	         * Date: 2015-10-17
	         */
	        (function( window ) {
	
	            var i,
	                support,
	                Expr,
	                getText,
	                isXML,
	                tokenize,
	                compile,
	                select,
	                outermostContext,
	                sortInput,
	                hasDuplicate,
	
	            // Local document vars
	                setDocument,
	                document,
	                docElem,
	                documentIsHTML,
	                rbuggyQSA,
	                rbuggyMatches,
	                matches,
	                contains,
	
	            // Instance-specific data
	                expando = "sizzle" + 1 * new Date(),
	                preferredDoc = window.document,
	                dirruns = 0,
	                done = 0,
	                classCache = createCache(),
	                tokenCache = createCache(),
	                compilerCache = createCache(),
	                sortOrder = function( a, b ) {
	                    if ( a === b ) {
	                        hasDuplicate = true;
	                    }
	                    return 0;
	                },
	
	            // General-purpose constants
	                MAX_NEGATIVE = 1 << 31,
	
	            // Instance methods
	                hasOwn = ({}).hasOwnProperty,
	                arr = [],
	                pop = arr.pop,
	                push_native = arr.push,
	                push = arr.push,
	                slice = arr.slice,
	            // Use a stripped-down indexOf as it's faster than native
	            // http://jsperf.com/thor-indexof-vs-for/5
	                indexOf = function( list, elem ) {
	                    var i = 0,
	                        len = list.length;
	                    for ( ; i < len; i++ ) {
	                        if ( list[i] === elem ) {
	                            return i;
	                        }
	                    }
	                    return -1;
	                },
	
	                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
	            // Regular expressions
	
	            // http://www.w3.org/TR/css3-selectors/#whitespace
	                whitespace = "[\\x20\\t\\r\\n\\f]",
	
	            // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	                identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
	            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
	                        // Operator (capture 2)
	                    "*([*^$|!~]?=)" + whitespace +
	                        // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
	                    "*\\]",
	
	                pseudos = ":(" + identifier + ")(?:\\((" +
	                        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	                        // 1. quoted (capture 3; capture 4 or capture 5)
	                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
	                        // 2. simple (capture 6)
	                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
	                        // 3. anything else (capture 2)
	                    ".*" +
	                    ")\\)|)",
	
	            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	                rwhitespace = new RegExp( whitespace + "+", "g" ),
	                rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
	                rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	                rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
	                rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
	                rpseudo = new RegExp( pseudos ),
	                ridentifier = new RegExp( "^" + identifier + "$" ),
	
	                matchExpr = {
	                    "ID": new RegExp( "^#(" + identifier + ")" ),
	                    "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
	                    "TAG": new RegExp( "^(" + identifier + "|[*])" ),
	                    "ATTR": new RegExp( "^" + attributes ),
	                    "PSEUDO": new RegExp( "^" + pseudos ),
	                    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
	                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
	                        "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
	                    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
	                    // For use in libraries implementing .is()
	                    // We use this for POS matching in `select`
	                    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
	                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	                },
	
	                rinputs = /^(?:input|select|textarea|button)$/i,
	                rheader = /^h\d$/i,
	
	                rnative = /^[^{]+\{\s*\[native \w/,
	
	            // Easily-parseable/retrievable ID or TAG or CLASS selectors
	                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
	                rsibling = /[+~]/,
	                rescape = /'|\\/g,
	
	            // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	                runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	                funescape = function( _, escaped, escapedWhitespace ) {
	                    var high = "0x" + escaped - 0x10000;
	                    // NaN means non-codepoint
	                    // Support: Firefox<24
	                    // Workaround erroneous numeric interpretation of +"0x"
	                    return high !== high || escapedWhitespace ?
	                        escaped :
	                        high < 0 ?
	                            // BMP codepoint
	                            String.fromCharCode( high + 0x10000 ) :
	                            // Supplemental Plane codepoint (surrogate pair)
	                            String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	                },
	
	            // Used for iframes
	            // See setDocument()
	            // Removing the function wrapper causes a "Permission Denied"
	            // error in IE
	                unloadHandler = function() {
	                    setDocument();
	                };
	
	// Optimize for push.apply( _, NodeList )
	            try {
	                push.apply(
	                    (arr = slice.call( preferredDoc.childNodes )),
	                    preferredDoc.childNodes
	                );
	                // Support: Android<4.0
	                // Detect silently failing push.apply
	                arr[ preferredDoc.childNodes.length ].nodeType;
	            } catch ( e ) {
	                push = { apply: arr.length ?
	
	                    // Leverage slice if possible
	                    function( target, els ) {
	                        push_native.apply( target, slice.call(els) );
	                    } :
	
	                    // Support: IE<9
	                    // Otherwise append directly
	                    function( target, els ) {
	                        var j = target.length,
	                            i = 0;
	                        // Can't trust NodeList.length
	                        while ( (target[j++] = els[i++]) ) {}
	                        target.length = j - 1;
	                    }
	                };
	            }
	
	            function Sizzle( selector, context, results, seed ) {
	                var m, i, elem, nid, nidselect, match, groups, newSelector,
	                    newContext = context && context.ownerDocument,
	
	                // nodeType defaults to 9, since context defaults to document
	                    nodeType = context ? context.nodeType : 9;
	
	                results = results || [];
	
	                // Return early from calls with invalid selector or context
	                if ( typeof selector !== "string" || !selector ||
	                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
	                    return results;
	                }
	
	                // Try to shortcut find operations (as opposed to filters) in HTML documents
	                if ( !seed ) {
	
	                    if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
	                        setDocument( context );
	                    }
	                    context = context || document;
	
	                    if ( documentIsHTML ) {
	
	                        // If the selector is sufficiently simple, try using a "get*By*" DOM method
	                        // (excepting DocumentFragment context, where the methods don't exist)
	                        if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
	                            // ID selector
	                            if ( (m = match[1]) ) {
	
	                                // Document context
	                                if ( nodeType === 9 ) {
	                                    if ( (elem = context.getElementById( m )) ) {
	
	                                        // Support: IE, Opera, Webkit
	                                        // TODO: identify versions
	                                        // getElementById can match elements by name instead of ID
	                                        if ( elem.id === m ) {
	                                            results.push( elem );
	                                            return results;
	                                        }
	                                    } else {
	                                        return results;
	                                    }
	
	                                    // Element context
	                                } else {
	
	                                    // Support: IE, Opera, Webkit
	                                    // TODO: identify versions
	                                    // getElementById can match elements by name instead of ID
	                                    if ( newContext && (elem = newContext.getElementById( m )) &&
	                                        contains( context, elem ) &&
	                                        elem.id === m ) {
	
	                                        results.push( elem );
	                                        return results;
	                                    }
	                                }
	
	                                // Type selector
	                            } else if ( match[2] ) {
	                                push.apply( results, context.getElementsByTagName( selector ) );
	                                return results;
	
	                                // Class selector
	                            } else if ( (m = match[3]) && support.getElementsByClassName &&
	                                context.getElementsByClassName ) {
	
	                                push.apply( results, context.getElementsByClassName( m ) );
	                                return results;
	                            }
	                        }
	
	                        // Take advantage of querySelectorAll
	                        if ( support.qsa &&
	                            !compilerCache[ selector + " " ] &&
	                            (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
	                            if ( nodeType !== 1 ) {
	                                newContext = context;
	                                newSelector = selector;
	
	                                // qSA looks outside Element context, which is not what we want
	                                // Thanks to Andrew Dupont for this workaround technique
	                                // Support: IE <=8
	                                // Exclude object elements
	                            } else if ( context.nodeName.toLowerCase() !== "object" ) {
	
	                                // Capture the context ID, setting it first if necessary
	                                if ( (nid = context.getAttribute( "id" )) ) {
	                                    nid = nid.replace( rescape, "\\$&" );
	                                } else {
	                                    context.setAttribute( "id", (nid = expando) );
	                                }
	
	                                // Prefix every selector in the list
	                                groups = tokenize( selector );
	                                i = groups.length;
	                                nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
	                                while ( i-- ) {
	                                    groups[i] = nidselect + " " + toSelector( groups[i] );
	                                }
	                                newSelector = groups.join( "," );
	
	                                // Expand context for sibling selectors
	                                newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
	                                    context;
	                            }
	
	                            if ( newSelector ) {
	                                try {
	                                    push.apply( results,
	                                        newContext.querySelectorAll( newSelector )
	                                    );
	                                    return results;
	                                } catch ( qsaError ) {
	                                } finally {
	                                    if ( nid === expando ) {
	                                        context.removeAttribute( "id" );
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	
	                // All others
	                return select( selector.replace( rtrim, "$1" ), context, results, seed );
	            }
	
	            /**
	             * Create key-value caches of limited size
	             * @returns {function(string, object)} Returns the Object data after storing it on itself with
	             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	             *	deleting the oldest entry
	             */
	            function createCache() {
	                var keys = [];
	
	                function cache( key, value ) {
	                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	                    if ( keys.push( key + " " ) > Expr.cacheLength ) {
	                        // Only keep the most recent entries
	                        delete cache[ keys.shift() ];
	                    }
	                    return (cache[ key + " " ] = value);
	                }
	                return cache;
	            }
	
	            /**
	             * Mark a function for special use by Sizzle
	             * @param {Function} fn The function to mark
	             */
	            function markFunction( fn ) {
	                fn[ expando ] = true;
	                return fn;
	            }
	
	            /**
	             * Support testing using an element
	             * @param {Function} fn Passed the created div and expects a boolean result
	             */
	            function assert( fn ) {
	                var div = document.createElement("div");
	
	                try {
	                    return !!fn( div );
	                } catch (e) {
	                    return false;
	                } finally {
	                    // Remove from its parent by default
	                    if ( div.parentNode ) {
	                        div.parentNode.removeChild( div );
	                    }
	                    // release memory in IE
	                    div = null;
	                }
	            }
	
	            /**
	             * Adds the same handler for all of the specified attrs
	             * @param {String} attrs Pipe-separated list of attributes
	             * @param {Function} handler The method that will be applied
	             */
	            function addHandle( attrs, handler ) {
	                var arr = attrs.split("|"),
	                    i = arr.length;
	
	                while ( i-- ) {
	                    Expr.attrHandle[ arr[i] ] = handler;
	                }
	            }
	
	            /**
	             * Checks document order of two siblings
	             * @param {Element} a
	             * @param {Element} b
	             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	             */
	            function siblingCheck( a, b ) {
	                var cur = b && a,
	                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
	                        ( ~b.sourceIndex || MAX_NEGATIVE ) -
	                        ( ~a.sourceIndex || MAX_NEGATIVE );
	
	                // Use IE sourceIndex if available on both nodes
	                if ( diff ) {
	                    return diff;
	                }
	
	                // Check if b follows a
	                if ( cur ) {
	                    while ( (cur = cur.nextSibling) ) {
	                        if ( cur === b ) {
	                            return -1;
	                        }
	                    }
	                }
	
	                return a ? 1 : -1;
	            }
	
	            /**
	             * Returns a function to use in pseudos for input types
	             * @param {String} type
	             */
	            function createInputPseudo( type ) {
	                return function( elem ) {
	                    var name = elem.nodeName.toLowerCase();
	                    return name === "input" && elem.type === type;
	                };
	            }
	
	            /**
	             * Returns a function to use in pseudos for buttons
	             * @param {String} type
	             */
	            function createButtonPseudo( type ) {
	                return function( elem ) {
	                    var name = elem.nodeName.toLowerCase();
	                    return (name === "input" || name === "button") && elem.type === type;
	                };
	            }
	
	            /**
	             * Returns a function to use in pseudos for positionals
	             * @param {Function} fn
	             */
	            function createPositionalPseudo( fn ) {
	                return markFunction(function( argument ) {
	                    argument = +argument;
	                    return markFunction(function( seed, matches ) {
	                        var j,
	                            matchIndexes = fn( [], seed.length, argument ),
	                            i = matchIndexes.length;
	
	                        // Match elements found at the specified indexes
	                        while ( i-- ) {
	                            if ( seed[ (j = matchIndexes[i]) ] ) {
	                                seed[j] = !(matches[j] = seed[j]);
	                            }
	                        }
	                    });
	                });
	            }
	
	            /**
	             * Checks a node for validity as a Sizzle context
	             * @param {Element|Object=} context
	             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	             */
	            function testContext( context ) {
	                return context && typeof context.getElementsByTagName !== "undefined" && context;
	            }
	
	// Expose support vars for convenience
	            support = Sizzle.support = {};
	
	            /**
	             * Detects XML nodes
	             * @param {Element|Object} elem An element or a document
	             * @returns {Boolean} True iff elem is a non-HTML XML node
	             */
	            isXML = Sizzle.isXML = function( elem ) {
	                // documentElement is verified for cases where it doesn't yet exist
	                // (such as loading iframes in IE - #4833)
	                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	                return documentElement ? documentElement.nodeName !== "HTML" : false;
	            };
	
	            /**
	             * Sets document-related variables once based on the current document
	             * @param {Element|Object} [doc] An element or document object to use to set the document
	             * @returns {Object} Returns the current document
	             */
	            setDocument = Sizzle.setDocument = function( node ) {
	                var hasCompare, parent,
	                    doc = node ? node.ownerDocument || node : preferredDoc;
	
	                // Return early if doc is invalid or already selected
	                if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
	                    return document;
	                }
	
	                // Update global variables
	                document = doc;
	                docElem = document.documentElement;
	                documentIsHTML = !isXML( document );
	
	                // Support: IE 9-11, Edge
	                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	                if ( (parent = document.defaultView) && parent.top !== parent ) {
	                    // Support: IE 11
	                    if ( parent.addEventListener ) {
	                        parent.addEventListener( "unload", unloadHandler, false );
	
	                        // Support: IE 9 - 10 only
	                    } else if ( parent.attachEvent ) {
	                        parent.attachEvent( "onunload", unloadHandler );
	                    }
	                }
	
	                /* Attributes
	                 ---------------------------------------------------------------------- */
	
	                // Support: IE<8
	                // Verify that getAttribute really returns attributes and not properties
	                // (excepting IE8 booleans)
	                support.attributes = assert(function( div ) {
	                    div.className = "i";
	                    return !div.getAttribute("className");
	                });
	
	                /* getElement(s)By*
	                 ---------------------------------------------------------------------- */
	
	                // Check if getElementsByTagName("*") returns only elements
	                support.getElementsByTagName = assert(function( div ) {
	                    div.appendChild( document.createComment("") );
	                    return !div.getElementsByTagName("*").length;
	                });
	
	                // Support: IE<9
	                support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
	                // Support: IE<10
	                // Check if getElementById returns elements by name
	                // The broken getElementById methods don't pick up programatically-set names,
	                // so use a roundabout getElementsByName test
	                support.getById = assert(function( div ) {
	                    docElem.appendChild( div ).id = expando;
	                    return !document.getElementsByName || !document.getElementsByName( expando ).length;
	                });
	
	                // ID find and filter
	                if ( support.getById ) {
	                    Expr.find["ID"] = function( id, context ) {
	                        if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
	                            var m = context.getElementById( id );
	                            return m ? [ m ] : [];
	                        }
	                    };
	                    Expr.filter["ID"] = function( id ) {
	                        var attrId = id.replace( runescape, funescape );
	                        return function( elem ) {
	                            return elem.getAttribute("id") === attrId;
	                        };
	                    };
	                } else {
	                    // Support: IE6/7
	                    // getElementById is not reliable as a find shortcut
	                    delete Expr.find["ID"];
	
	                    Expr.filter["ID"] =  function( id ) {
	                        var attrId = id.replace( runescape, funescape );
	                        return function( elem ) {
	                            var node = typeof elem.getAttributeNode !== "undefined" &&
	                                elem.getAttributeNode("id");
	                            return node && node.value === attrId;
	                        };
	                    };
	                }
	
	                // Tag
	                Expr.find["TAG"] = support.getElementsByTagName ?
	                    function( tag, context ) {
	                        if ( typeof context.getElementsByTagName !== "undefined" ) {
	                            return context.getElementsByTagName( tag );
	
	                            // DocumentFragment nodes don't have gEBTN
	                        } else if ( support.qsa ) {
	                            return context.querySelectorAll( tag );
	                        }
	                    } :
	
	                    function( tag, context ) {
	                        var elem,
	                            tmp = [],
	                            i = 0,
	                        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	                            results = context.getElementsByTagName( tag );
	
	                        // Filter out possible comments
	                        if ( tag === "*" ) {
	                            while ( (elem = results[i++]) ) {
	                                if ( elem.nodeType === 1 ) {
	                                    tmp.push( elem );
	                                }
	                            }
	
	                            return tmp;
	                        }
	                        return results;
	                    };
	
	                // Class
	                Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
	                        if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
	                            return context.getElementsByClassName( className );
	                        }
	                    };
	
	                /* QSA/matchesSelector
	                 ---------------------------------------------------------------------- */
	
	                // QSA and matchesSelector support
	
	                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	                rbuggyMatches = [];
	
	                // qSa(:focus) reports false when true (Chrome 21)
	                // We allow this because of a bug in IE8/9 that throws an error
	                // whenever `document.activeElement` is accessed on an iframe
	                // So, we allow :focus to pass through QSA all the time to avoid the IE error
	                // See http://bugs.jquery.com/ticket/13378
	                rbuggyQSA = [];
	
	                if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
	                    // Build QSA regex
	                    // Regex strategy adopted from Diego Perini
	                    assert(function( div ) {
	                        // Select is set to empty string on purpose
	                        // This is to test IE's treatment of not explicitly
	                        // setting a boolean content attribute,
	                        // since its presence should be enough
	                        // http://bugs.jquery.com/ticket/12359
	                        docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
	                            "<select id='" + expando + "-\r\\' msallowcapture=''>" +
	                            "<option selected=''></option></select>";
	
	                        // Support: IE8, Opera 11-12.16
	                        // Nothing should be selected when empty strings follow ^= or $= or *=
	                        // The test attribute must be unknown in Opera but "safe" for WinRT
	                        // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	                        if ( div.querySelectorAll("[msallowcapture^='']").length ) {
	                            rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
	                        }
	
	                        // Support: IE8
	                        // Boolean attributes and "value" are not treated correctly
	                        if ( !div.querySelectorAll("[selected]").length ) {
	                            rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
	                        }
	
	                        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	                        if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
	                            rbuggyQSA.push("~=");
	                        }
	
	                        // Webkit/Opera - :checked should return selected option elements
	                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	                        // IE8 throws error here and will not see later tests
	                        if ( !div.querySelectorAll(":checked").length ) {
	                            rbuggyQSA.push(":checked");
	                        }
	
	                        // Support: Safari 8+, iOS 8+
	                        // https://bugs.webkit.org/show_bug.cgi?id=136851
	                        // In-page `selector#id sibing-combinator selector` fails
	                        if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
	                            rbuggyQSA.push(".#.+[+~]");
	                        }
	                    });
	
	                    assert(function( div ) {
	                        // Support: Windows 8 Native Apps
	                        // The type and name attributes are restricted during .innerHTML assignment
	                        var input = document.createElement("input");
	                        input.setAttribute( "type", "hidden" );
	                        div.appendChild( input ).setAttribute( "name", "D" );
	
	                        // Support: IE8
	                        // Enforce case-sensitivity of name attribute
	                        if ( div.querySelectorAll("[name=d]").length ) {
	                            rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
	                        }
	
	                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	                        // IE8 throws error here and will not see later tests
	                        if ( !div.querySelectorAll(":enabled").length ) {
	                            rbuggyQSA.push( ":enabled", ":disabled" );
	                        }
	
	                        // Opera 10-11 does not throw on post-comma invalid pseudos
	                        div.querySelectorAll("*,:x");
	                        rbuggyQSA.push(",.*:");
	                    });
	                }
	
	                if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
	                        docElem.webkitMatchesSelector ||
	                        docElem.mozMatchesSelector ||
	                        docElem.oMatchesSelector ||
	                        docElem.msMatchesSelector) )) ) {
	
	                    assert(function( div ) {
	                        // Check to see if it's possible to do matchesSelector
	                        // on a disconnected node (IE 9)
	                        support.disconnectedMatch = matches.call( div, "div" );
	
	                        // This should fail with an exception
	                        // Gecko does not error, returns false instead
	                        matches.call( div, "[s!='']:x" );
	                        rbuggyMatches.push( "!=", pseudos );
	                    });
	                }
	
	                rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	                rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
	                /* Contains
	                 ---------------------------------------------------------------------- */
	                hasCompare = rnative.test( docElem.compareDocumentPosition );
	
	                // Element contains another
	                // Purposefully self-exclusive
	                // As in, an element does not contain itself
	                contains = hasCompare || rnative.test( docElem.contains ) ?
	                    function( a, b ) {
	                        var adown = a.nodeType === 9 ? a.documentElement : a,
	                            bup = b && b.parentNode;
	                        return a === bup || !!( bup && bup.nodeType === 1 && (
	                                adown.contains ?
	                                    adown.contains( bup ) :
	                                a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	                            ));
	                    } :
	                    function( a, b ) {
	                        if ( b ) {
	                            while ( (b = b.parentNode) ) {
	                                if ( b === a ) {
	                                    return true;
	                                }
	                            }
	                        }
	                        return false;
	                    };
	
	                /* Sorting
	                 ---------------------------------------------------------------------- */
	
	                // Document order sorting
	                sortOrder = hasCompare ?
	                    function( a, b ) {
	
	                        // Flag for duplicate removal
	                        if ( a === b ) {
	                            hasDuplicate = true;
	                            return 0;
	                        }
	
	                        // Sort on method existence if only one input has compareDocumentPosition
	                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
	                        if ( compare ) {
	                            return compare;
	                        }
	
	                        // Calculate position if both inputs belong to the same document
	                        compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
	                            a.compareDocumentPosition( b ) :
	
	                            // Otherwise we know they are disconnected
	                            1;
	
	                        // Disconnected nodes
	                        if ( compare & 1 ||
	                            (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
	                            // Choose the first element that is related to our preferred document
	                            if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
	                                return -1;
	                            }
	                            if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
	                                return 1;
	                            }
	
	                            // Maintain original order
	                            return sortInput ?
	                                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
	                                0;
	                        }
	
	                        return compare & 4 ? -1 : 1;
	                    } :
	                    function( a, b ) {
	                        // Exit early if the nodes are identical
	                        if ( a === b ) {
	                            hasDuplicate = true;
	                            return 0;
	                        }
	
	                        var cur,
	                            i = 0,
	                            aup = a.parentNode,
	                            bup = b.parentNode,
	                            ap = [ a ],
	                            bp = [ b ];
	
	                        // Parentless nodes are either documents or disconnected
	                        if ( !aup || !bup ) {
	                            return a === document ? -1 :
	                                b === document ? 1 :
	                                    aup ? -1 :
	                                        bup ? 1 :
	                                            sortInput ?
	                                                ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
	                                                0;
	
	                            // If the nodes are siblings, we can do a quick check
	                        } else if ( aup === bup ) {
	                            return siblingCheck( a, b );
	                        }
	
	                        // Otherwise we need full lists of their ancestors for comparison
	                        cur = a;
	                        while ( (cur = cur.parentNode) ) {
	                            ap.unshift( cur );
	                        }
	                        cur = b;
	                        while ( (cur = cur.parentNode) ) {
	                            bp.unshift( cur );
	                        }
	
	                        // Walk down the tree looking for a discrepancy
	                        while ( ap[i] === bp[i] ) {
	                            i++;
	                        }
	
	                        return i ?
	                            // Do a sibling check if the nodes have a common ancestor
	                            siblingCheck( ap[i], bp[i] ) :
	
	                            // Otherwise nodes in our document sort first
	                            ap[i] === preferredDoc ? -1 :
	                                bp[i] === preferredDoc ? 1 :
	                                    0;
	                    };
	
	                return document;
	            };
	
	            Sizzle.matches = function( expr, elements ) {
	                return Sizzle( expr, null, null, elements );
	            };
	
	            Sizzle.matchesSelector = function( elem, expr ) {
	                // Set document vars if needed
	                if ( ( elem.ownerDocument || elem ) !== document ) {
	                    setDocument( elem );
	                }
	
	                // Make sure that attribute selectors are quoted
	                expr = expr.replace( rattributeQuotes, "='$1']" );
	
	                if ( support.matchesSelector && documentIsHTML &&
	                    !compilerCache[ expr + " " ] &&
	                    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
	                    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
	                    try {
	                        var ret = matches.call( elem, expr );
	
	                        // IE 9's matchesSelector returns false on disconnected nodes
	                        if ( ret || support.disconnectedMatch ||
	                                // As well, disconnected nodes are said to be in a document
	                                // fragment in IE 9
	                            elem.document && elem.document.nodeType !== 11 ) {
	                            return ret;
	                        }
	                    } catch (e) {}
	                }
	
	                return Sizzle( expr, document, null, [ elem ] ).length > 0;
	            };
	
	            Sizzle.contains = function( context, elem ) {
	                // Set document vars if needed
	                if ( ( context.ownerDocument || context ) !== document ) {
	                    setDocument( context );
	                }
	                return contains( context, elem );
	            };
	
	            Sizzle.attr = function( elem, name ) {
	                // Set document vars if needed
	                if ( ( elem.ownerDocument || elem ) !== document ) {
	                    setDocument( elem );
	                }
	
	                var fn = Expr.attrHandle[ name.toLowerCase() ],
	                // Don't get fooled by Object.prototype properties (jQuery #13807)
	                    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
	                        fn( elem, name, !documentIsHTML ) :
	                        undefined;
	
	                return val !== undefined ?
	                    val :
	                    support.attributes || !documentIsHTML ?
	                        elem.getAttribute( name ) :
	                        (val = elem.getAttributeNode(name)) && val.specified ?
	                            val.value :
	                            null;
	            };
	
	            Sizzle.error = function( msg ) {
	                throw new Error( "Syntax error, unrecognized expression: " + msg );
	            };
	
	            /**
	             * Document sorting and removing duplicates
	             * @param {ArrayLike} results
	             */
	            Sizzle.uniqueSort = function( results ) {
	                var elem,
	                    duplicates = [],
	                    j = 0,
	                    i = 0;
	
	                // Unless we *know* we can detect duplicates, assume their presence
	                hasDuplicate = !support.detectDuplicates;
	                sortInput = !support.sortStable && results.slice( 0 );
	                results.sort( sortOrder );
	
	                if ( hasDuplicate ) {
	                    while ( (elem = results[i++]) ) {
	                        if ( elem === results[ i ] ) {
	                            j = duplicates.push( i );
	                        }
	                    }
	                    while ( j-- ) {
	                        results.splice( duplicates[ j ], 1 );
	                    }
	                }
	
	                // Clear input after sorting to release objects
	                // See https://github.com/jquery/sizzle/pull/225
	                sortInput = null;
	
	                return results;
	            };
	
	            /**
	             * Utility function for retrieving the text value of an array of DOM nodes
	             * @param {Array|Element} elem
	             */
	            getText = Sizzle.getText = function( elem ) {
	                var node,
	                    ret = "",
	                    i = 0,
	                    nodeType = elem.nodeType;
	
	                if ( !nodeType ) {
	                    // If no nodeType, this is expected to be an array
	                    while ( (node = elem[i++]) ) {
	                        // Do not traverse comment nodes
	                        ret += getText( node );
	                    }
	                } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
	                    // Use textContent for elements
	                    // innerText usage removed for consistency of new lines (jQuery #11153)
	                    if ( typeof elem.textContent === "string" ) {
	                        return elem.textContent;
	                    } else {
	                        // Traverse its children
	                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
	                            ret += getText( elem );
	                        }
	                    }
	                } else if ( nodeType === 3 || nodeType === 4 ) {
	                    return elem.nodeValue;
	                }
	                // Do not include comment or processing instruction nodes
	
	                return ret;
	            };
	
	            Expr = Sizzle.selectors = {
	
	                // Can be adjusted by the user
	                cacheLength: 50,
	
	                createPseudo: markFunction,
	
	                match: matchExpr,
	
	                attrHandle: {},
	
	                find: {},
	
	                relative: {
	                    ">": { dir: "parentNode", first: true },
	                    " ": { dir: "parentNode" },
	                    "+": { dir: "previousSibling", first: true },
	                    "~": { dir: "previousSibling" }
	                },
	
	                preFilter: {
	                    "ATTR": function( match ) {
	                        match[1] = match[1].replace( runescape, funescape );
	
	                        // Move the given value to match[3] whether quoted or unquoted
	                        match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
	                        if ( match[2] === "~=" ) {
	                            match[3] = " " + match[3] + " ";
	                        }
	
	                        return match.slice( 0, 4 );
	                    },
	
	                    "CHILD": function( match ) {
	                        /* matches from matchExpr["CHILD"]
	                         1 type (only|nth|...)
	                         2 what (child|of-type)
	                         3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
	                         4 xn-component of xn+y argument ([+-]?\d*n|)
	                         5 sign of xn-component
	                         6 x of xn-component
	                         7 sign of y-component
	                         8 y of y-component
	                         */
	                        match[1] = match[1].toLowerCase();
	
	                        if ( match[1].slice( 0, 3 ) === "nth" ) {
	                            // nth-* requires argument
	                            if ( !match[3] ) {
	                                Sizzle.error( match[0] );
	                            }
	
	                            // numeric x and y parameters for Expr.filter.CHILD
	                            // remember that false/true cast respectively to 0/1
	                            match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
	                            match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
	                            // other types prohibit arguments
	                        } else if ( match[3] ) {
	                            Sizzle.error( match[0] );
	                        }
	
	                        return match;
	                    },
	
	                    "PSEUDO": function( match ) {
	                        var excess,
	                            unquoted = !match[6] && match[2];
	
	                        if ( matchExpr["CHILD"].test( match[0] ) ) {
	                            return null;
	                        }
	
	                        // Accept quoted arguments as-is
	                        if ( match[3] ) {
	                            match[2] = match[4] || match[5] || "";
	
	                            // Strip excess characters from unquoted arguments
	                        } else if ( unquoted && rpseudo.test( unquoted ) &&
	                                // Get excess from tokenize (recursively)
	                            (excess = tokenize( unquoted, true )) &&
	                                // advance to the next closing parenthesis
	                            (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
	                            // excess is a negative index
	                            match[0] = match[0].slice( 0, excess );
	                            match[2] = unquoted.slice( 0, excess );
	                        }
	
	                        // Return only captures needed by the pseudo filter method (type and argument)
	                        return match.slice( 0, 3 );
	                    }
	                },
	
	                filter: {
	
	                    "TAG": function( nodeNameSelector ) {
	                        var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
	                        return nodeNameSelector === "*" ?
	                            function() { return true; } :
	                            function( elem ) {
	                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
	                            };
	                    },
	
	                    "CLASS": function( className ) {
	                        var pattern = classCache[ className + " " ];
	
	                        return pattern ||
	                            (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
	                            classCache( className, function( elem ) {
	                                return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
	                            });
	                    },
	
	                    "ATTR": function( name, operator, check ) {
	                        return function( elem ) {
	                            var result = Sizzle.attr( elem, name );
	
	                            if ( result == null ) {
	                                return operator === "!=";
	                            }
	                            if ( !operator ) {
	                                return true;
	                            }
	
	                            result += "";
	
	                            return operator === "=" ? result === check :
	                                operator === "!=" ? result !== check :
	                                    operator === "^=" ? check && result.indexOf( check ) === 0 :
	                                        operator === "*=" ? check && result.indexOf( check ) > -1 :
	                                            operator === "$=" ? check && result.slice( -check.length ) === check :
	                                                operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
	                                                    operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
	                                                        false;
	                        };
	                    },
	
	                    "CHILD": function( type, what, argument, first, last ) {
	                        var simple = type.slice( 0, 3 ) !== "nth",
	                            forward = type.slice( -4 ) !== "last",
	                            ofType = what === "of-type";
	
	                        return first === 1 && last === 0 ?
	
	                            // Shortcut for :nth-*(n)
	                            function( elem ) {
	                                return !!elem.parentNode;
	                            } :
	
	                            function( elem, context, xml ) {
	                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
	                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
	                                    parent = elem.parentNode,
	                                    name = ofType && elem.nodeName.toLowerCase(),
	                                    useCache = !xml && !ofType,
	                                    diff = false;
	
	                                if ( parent ) {
	
	                                    // :(first|last|only)-(child|of-type)
	                                    if ( simple ) {
	                                        while ( dir ) {
	                                            node = elem;
	                                            while ( (node = node[ dir ]) ) {
	                                                if ( ofType ?
	                                                    node.nodeName.toLowerCase() === name :
	                                                    node.nodeType === 1 ) {
	
	                                                    return false;
	                                                }
	                                            }
	                                            // Reverse direction for :only-* (if we haven't yet done so)
	                                            start = dir = type === "only" && !start && "nextSibling";
	                                        }
	                                        return true;
	                                    }
	
	                                    start = [ forward ? parent.firstChild : parent.lastChild ];
	
	                                    // non-xml :nth-child(...) stores cache data on `parent`
	                                    if ( forward && useCache ) {
	
	                                        // Seek `elem` from a previously-cached index
	
	                                        // ...in a gzip-friendly way
	                                        node = parent;
	                                        outerCache = node[ expando ] || (node[ expando ] = {});
	
	                                        // Support: IE <9 only
	                                        // Defend against cloned attroperties (jQuery gh-1709)
	                                        uniqueCache = outerCache[ node.uniqueID ] ||
	                                            (outerCache[ node.uniqueID ] = {});
	
	                                        cache = uniqueCache[ type ] || [];
	                                        nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
	                                        diff = nodeIndex && cache[ 2 ];
	                                        node = nodeIndex && parent.childNodes[ nodeIndex ];
	
	                                        while ( (node = ++nodeIndex && node && node[ dir ] ||
	
	                                                // Fallback to seeking `elem` from the start
	                                            (diff = nodeIndex = 0) || start.pop()) ) {
	
	                                            // When found, cache indexes on `parent` and break
	                                            if ( node.nodeType === 1 && ++diff && node === elem ) {
	                                                uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
	                                                break;
	                                            }
	                                        }
	
	                                    } else {
	                                        // Use previously-cached element index if available
	                                        if ( useCache ) {
	                                            // ...in a gzip-friendly way
	                                            node = elem;
	                                            outerCache = node[ expando ] || (node[ expando ] = {});
	
	                                            // Support: IE <9 only
	                                            // Defend against cloned attroperties (jQuery gh-1709)
	                                            uniqueCache = outerCache[ node.uniqueID ] ||
	                                                (outerCache[ node.uniqueID ] = {});
	
	                                            cache = uniqueCache[ type ] || [];
	                                            nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
	                                            diff = nodeIndex;
	                                        }
	
	                                        // xml :nth-child(...)
	                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
	                                        if ( diff === false ) {
	                                            // Use the same loop as above to seek `elem` from the start
	                                            while ( (node = ++nodeIndex && node && node[ dir ] ||
	                                                (diff = nodeIndex = 0) || start.pop()) ) {
	
	                                                if ( ( ofType ?
	                                                    node.nodeName.toLowerCase() === name :
	                                                    node.nodeType === 1 ) &&
	                                                    ++diff ) {
	
	                                                    // Cache the index of each encountered element
	                                                    if ( useCache ) {
	                                                        outerCache = node[ expando ] || (node[ expando ] = {});
	
	                                                        // Support: IE <9 only
	                                                        // Defend against cloned attroperties (jQuery gh-1709)
	                                                        uniqueCache = outerCache[ node.uniqueID ] ||
	                                                            (outerCache[ node.uniqueID ] = {});
	
	                                                        uniqueCache[ type ] = [ dirruns, diff ];
	                                                    }
	
	                                                    if ( node === elem ) {
	                                                        break;
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	
	                                    // Incorporate the offset, then check against cycle size
	                                    diff -= last;
	                                    return diff === first || ( diff % first === 0 && diff / first >= 0 );
	                                }
	                            };
	                    },
	
	                    "PSEUDO": function( pseudo, argument ) {
	                        // pseudo-class names are case-insensitive
	                        // http://www.w3.org/TR/selectors/#pseudo-classes
	                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	                        // Remember that setFilters inherits from pseudos
	                        var args,
	                            fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
	                                Sizzle.error( "unsupported pseudo: " + pseudo );
	
	                        // The user may use createPseudo to indicate that
	                        // arguments are needed to create the filter function
	                        // just as Sizzle does
	                        if ( fn[ expando ] ) {
	                            return fn( argument );
	                        }
	
	                        // But maintain support for old signatures
	                        if ( fn.length > 1 ) {
	                            args = [ pseudo, pseudo, "", argument ];
	                            return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
	                                markFunction(function( seed, matches ) {
	                                    var idx,
	                                        matched = fn( seed, argument ),
	                                        i = matched.length;
	                                    while ( i-- ) {
	                                        idx = indexOf( seed, matched[i] );
	                                        seed[ idx ] = !( matches[ idx ] = matched[i] );
	                                    }
	                                }) :
	                                function( elem ) {
	                                    return fn( elem, 0, args );
	                                };
	                        }
	
	                        return fn;
	                    }
	                },
	
	                pseudos: {
	                    // Potentially complex pseudos
	                    "not": markFunction(function( selector ) {
	                        // Trim the selector passed to compile
	                        // to avoid treating leading and trailing
	                        // spaces as combinators
	                        var input = [],
	                            results = [],
	                            matcher = compile( selector.replace( rtrim, "$1" ) );
	
	                        return matcher[ expando ] ?
	                            markFunction(function( seed, matches, context, xml ) {
	                                var elem,
	                                    unmatched = matcher( seed, null, xml, [] ),
	                                    i = seed.length;
	
	                                // Match elements unmatched by `matcher`
	                                while ( i-- ) {
	                                    if ( (elem = unmatched[i]) ) {
	                                        seed[i] = !(matches[i] = elem);
	                                    }
	                                }
	                            }) :
	                            function( elem, context, xml ) {
	                                input[0] = elem;
	                                matcher( input, null, xml, results );
	                                // Don't keep the element (issue #299)
	                                input[0] = null;
	                                return !results.pop();
	                            };
	                    }),
	
	                    "has": markFunction(function( selector ) {
	                        return function( elem ) {
	                            return Sizzle( selector, elem ).length > 0;
	                        };
	                    }),
	
	                    "contains": markFunction(function( text ) {
	                        text = text.replace( runescape, funescape );
	                        return function( elem ) {
	                            return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
	                        };
	                    }),
	
	                    // "Whether an element is represented by a :lang() selector
	                    // is based solely on the element's language value
	                    // being equal to the identifier C,
	                    // or beginning with the identifier C immediately followed by "-".
	                    // The matching of C against the element's language value is performed case-insensitively.
	                    // The identifier C does not have to be a valid language name."
	                    // http://www.w3.org/TR/selectors/#lang-pseudo
	                    "lang": markFunction( function( lang ) {
	                        // lang value must be a valid identifier
	                        if ( !ridentifier.test(lang || "") ) {
	                            Sizzle.error( "unsupported lang: " + lang );
	                        }
	                        lang = lang.replace( runescape, funescape ).toLowerCase();
	                        return function( elem ) {
	                            var elemLang;
	                            do {
	                                if ( (elemLang = documentIsHTML ?
	                                        elem.lang :
	                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
	                                    elemLang = elemLang.toLowerCase();
	                                    return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
	                                }
	                            } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
	                            return false;
	                        };
	                    }),
	
	                    // Miscellaneous
	                    "target": function( elem ) {
	                        var hash = window.location && window.location.hash;
	                        return hash && hash.slice( 1 ) === elem.id;
	                    },
	
	                    "root": function( elem ) {
	                        return elem === docElem;
	                    },
	
	                    "focus": function( elem ) {
	                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
	                    },
	
	                    // Boolean properties
	                    "enabled": function( elem ) {
	                        return elem.disabled === false;
	                    },
	
	                    "disabled": function( elem ) {
	                        return elem.disabled === true;
	                    },
	
	                    "checked": function( elem ) {
	                        // In CSS3, :checked should return both checked and selected elements
	                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	                        var nodeName = elem.nodeName.toLowerCase();
	                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
	                    },
	
	                    "selected": function( elem ) {
	                        // Accessing this property makes selected-by-default
	                        // options in Safari work properly
	                        if ( elem.parentNode ) {
	                            elem.parentNode.selectedIndex;
	                        }
	
	                        return elem.selected === true;
	                    },
	
	                    // Contents
	                    "empty": function( elem ) {
	                        // http://www.w3.org/TR/selectors/#empty-pseudo
	                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	                        //   but not by others (comment: 8; processing instruction: 7; etc.)
	                        // nodeType < 6 works because attributes (2) do not appear as children
	                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
	                            if ( elem.nodeType < 6 ) {
	                                return false;
	                            }
	                        }
	                        return true;
	                    },
	
	                    "parent": function( elem ) {
	                        return !Expr.pseudos["empty"]( elem );
	                    },
	
	                    // Element/input types
	                    "header": function( elem ) {
	                        return rheader.test( elem.nodeName );
	                    },
	
	                    "input": function( elem ) {
	                        return rinputs.test( elem.nodeName );
	                    },
	
	                    "button": function( elem ) {
	                        var name = elem.nodeName.toLowerCase();
	                        return name === "input" && elem.type === "button" || name === "button";
	                    },
	
	                    "text": function( elem ) {
	                        var attr;
	                        return elem.nodeName.toLowerCase() === "input" &&
	                            elem.type === "text" &&
	
	                                // Support: IE<8
	                                // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	                            ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
	                    },
	
	                    // Position-in-collection
	                    "first": createPositionalPseudo(function() {
	                        return [ 0 ];
	                    }),
	
	                    "last": createPositionalPseudo(function( matchIndexes, length ) {
	                        return [ length - 1 ];
	                    }),
	
	                    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
	                        return [ argument < 0 ? argument + length : argument ];
	                    }),
	
	                    "even": createPositionalPseudo(function( matchIndexes, length ) {
	                        var i = 0;
	                        for ( ; i < length; i += 2 ) {
	                            matchIndexes.push( i );
	                        }
	                        return matchIndexes;
	                    }),
	
	                    "odd": createPositionalPseudo(function( matchIndexes, length ) {
	                        var i = 1;
	                        for ( ; i < length; i += 2 ) {
	                            matchIndexes.push( i );
	                        }
	                        return matchIndexes;
	                    }),
	
	                    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
	                        var i = argument < 0 ? argument + length : argument;
	                        for ( ; --i >= 0; ) {
	                            matchIndexes.push( i );
	                        }
	                        return matchIndexes;
	                    }),
	
	                    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
	                        var i = argument < 0 ? argument + length : argument;
	                        for ( ; ++i < length; ) {
	                            matchIndexes.push( i );
	                        }
	                        return matchIndexes;
	                    })
	                }
	            };
	
	            Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	            for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	                Expr.pseudos[ i ] = createInputPseudo( i );
	            }
	            for ( i in { submit: true, reset: true } ) {
	                Expr.pseudos[ i ] = createButtonPseudo( i );
	            }
	
	// Easy API for creating new setFilters
	            function setFilters() {}
	            setFilters.prototype = Expr.filters = Expr.pseudos;
	            Expr.setFilters = new setFilters();
	
	            tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	                var matched, match, tokens, type,
	                    soFar, groups, preFilters,
	                    cached = tokenCache[ selector + " " ];
	
	                if ( cached ) {
	                    return parseOnly ? 0 : cached.slice( 0 );
	                }
	
	                soFar = selector;
	                groups = [];
	                preFilters = Expr.preFilter;
	
	                while ( soFar ) {
	
	                    // Comma and first run
	                    if ( !matched || (match = rcomma.exec( soFar )) ) {
	                        if ( match ) {
	                            // Don't consume trailing commas as valid
	                            soFar = soFar.slice( match[0].length ) || soFar;
	                        }
	                        groups.push( (tokens = []) );
	                    }
	
	                    matched = false;
	
	                    // Combinators
	                    if ( (match = rcombinators.exec( soFar )) ) {
	                        matched = match.shift();
	                        tokens.push({
	                            value: matched,
	                            // Cast descendant combinators to space
	                            type: match[0].replace( rtrim, " " )
	                        });
	                        soFar = soFar.slice( matched.length );
	                    }
	
	                    // Filters
	                    for ( type in Expr.filter ) {
	                        if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
	                            (match = preFilters[ type ]( match ))) ) {
	                            matched = match.shift();
	                            tokens.push({
	                                value: matched,
	                                type: type,
	                                matches: match
	                            });
	                            soFar = soFar.slice( matched.length );
	                        }
	                    }
	
	                    if ( !matched ) {
	                        break;
	                    }
	                }
	
	                // Return the length of the invalid excess
	                // if we're just parsing
	                // Otherwise, throw an error or return tokens
	                return parseOnly ?
	                    soFar.length :
	                    soFar ?
	                        Sizzle.error( selector ) :
	                        // Cache the tokens
	                        tokenCache( selector, groups ).slice( 0 );
	            };
	
	            function toSelector( tokens ) {
	                var i = 0,
	                    len = tokens.length,
	                    selector = "";
	                for ( ; i < len; i++ ) {
	                    selector += tokens[i].value;
	                }
	                return selector;
	            }
	
	            function addCombinator( matcher, combinator, base ) {
	                var dir = combinator.dir,
	                    checkNonElements = base && dir === "parentNode",
	                    doneName = done++;
	
	                return combinator.first ?
	                    // Check against closest ancestor/preceding element
	                    function( elem, context, xml ) {
	                        while ( (elem = elem[ dir ]) ) {
	                            if ( elem.nodeType === 1 || checkNonElements ) {
	                                return matcher( elem, context, xml );
	                            }
	                        }
	                    } :
	
	                    // Check against all ancestor/preceding elements
	                    function( elem, context, xml ) {
	                        var oldCache, uniqueCache, outerCache,
	                            newCache = [ dirruns, doneName ];
	
	                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	                        if ( xml ) {
	                            while ( (elem = elem[ dir ]) ) {
	                                if ( elem.nodeType === 1 || checkNonElements ) {
	                                    if ( matcher( elem, context, xml ) ) {
	                                        return true;
	                                    }
	                                }
	                            }
	                        } else {
	                            while ( (elem = elem[ dir ]) ) {
	                                if ( elem.nodeType === 1 || checkNonElements ) {
	                                    outerCache = elem[ expando ] || (elem[ expando ] = {});
	
	                                    // Support: IE <9 only
	                                    // Defend against cloned attroperties (jQuery gh-1709)
	                                    uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
	                                    if ( (oldCache = uniqueCache[ dir ]) &&
	                                        oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
	                                        // Assign to newCache so results back-propagate to previous elements
	                                        return (newCache[ 2 ] = oldCache[ 2 ]);
	                                    } else {
	                                        // Reuse newcache so results back-propagate to previous elements
	                                        uniqueCache[ dir ] = newCache;
	
	                                        // A match means we're done; a fail means we have to keep checking
	                                        if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
	                                            return true;
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    };
	            }
	
	            function elementMatcher( matchers ) {
	                return matchers.length > 1 ?
	                    function( elem, context, xml ) {
	                        var i = matchers.length;
	                        while ( i-- ) {
	                            if ( !matchers[i]( elem, context, xml ) ) {
	                                return false;
	                            }
	                        }
	                        return true;
	                    } :
	                    matchers[0];
	            }
	
	            function multipleContexts( selector, contexts, results ) {
	                var i = 0,
	                    len = contexts.length;
	                for ( ; i < len; i++ ) {
	                    Sizzle( selector, contexts[i], results );
	                }
	                return results;
	            }
	
	            function condense( unmatched, map, filter, context, xml ) {
	                var elem,
	                    newUnmatched = [],
	                    i = 0,
	                    len = unmatched.length,
	                    mapped = map != null;
	
	                for ( ; i < len; i++ ) {
	                    if ( (elem = unmatched[i]) ) {
	                        if ( !filter || filter( elem, context, xml ) ) {
	                            newUnmatched.push( elem );
	                            if ( mapped ) {
	                                map.push( i );
	                            }
	                        }
	                    }
	                }
	
	                return newUnmatched;
	            }
	
	            function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	                if ( postFilter && !postFilter[ expando ] ) {
	                    postFilter = setMatcher( postFilter );
	                }
	                if ( postFinder && !postFinder[ expando ] ) {
	                    postFinder = setMatcher( postFinder, postSelector );
	                }
	                return markFunction(function( seed, results, context, xml ) {
	                    var temp, i, elem,
	                        preMap = [],
	                        postMap = [],
	                        preexisting = results.length,
	
	                    // Get initial elements from seed or context
	                        elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
	                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
	                        matcherIn = preFilter && ( seed || !selector ) ?
	                            condense( elems, preMap, preFilter, context, xml ) :
	                            elems,
	
	                        matcherOut = matcher ?
	                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	                            postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
	                                // ...intermediate processing is necessary
	                                [] :
	
	                                // ...otherwise use results directly
	                                results :
	                            matcherIn;
	
	                    // Find primary matches
	                    if ( matcher ) {
	                        matcher( matcherIn, matcherOut, context, xml );
	                    }
	
	                    // Apply postFilter
	                    if ( postFilter ) {
	                        temp = condense( matcherOut, postMap );
	                        postFilter( temp, [], context, xml );
	
	                        // Un-match failing elements by moving them back to matcherIn
	                        i = temp.length;
	                        while ( i-- ) {
	                            if ( (elem = temp[i]) ) {
	                                matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
	                            }
	                        }
	                    }
	
	                    if ( seed ) {
	                        if ( postFinder || preFilter ) {
	                            if ( postFinder ) {
	                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
	                                temp = [];
	                                i = matcherOut.length;
	                                while ( i-- ) {
	                                    if ( (elem = matcherOut[i]) ) {
	                                        // Restore matcherIn since elem is not yet a final match
	                                        temp.push( (matcherIn[i] = elem) );
	                                    }
	                                }
	                                postFinder( null, (matcherOut = []), temp, xml );
	                            }
	
	                            // Move matched elements from seed to results to keep them synchronized
	                            i = matcherOut.length;
	                            while ( i-- ) {
	                                if ( (elem = matcherOut[i]) &&
	                                    (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
	                                    seed[temp] = !(results[temp] = elem);
	                                }
	                            }
	                        }
	
	                        // Add elements to results, through postFinder if defined
	                    } else {
	                        matcherOut = condense(
	                            matcherOut === results ?
	                                matcherOut.splice( preexisting, matcherOut.length ) :
	                                matcherOut
	                        );
	                        if ( postFinder ) {
	                            postFinder( null, results, matcherOut, xml );
	                        } else {
	                            push.apply( results, matcherOut );
	                        }
	                    }
	                });
	            }
	
	            function matcherFromTokens( tokens ) {
	                var checkContext, matcher, j,
	                    len = tokens.length,
	                    leadingRelative = Expr.relative[ tokens[0].type ],
	                    implicitRelative = leadingRelative || Expr.relative[" "],
	                    i = leadingRelative ? 1 : 0,
	
	                // The foundational matcher ensures that elements are reachable from top-level context(s)
	                    matchContext = addCombinator( function( elem ) {
	                        return elem === checkContext;
	                    }, implicitRelative, true ),
	                    matchAnyContext = addCombinator( function( elem ) {
	                        return indexOf( checkContext, elem ) > -1;
	                    }, implicitRelative, true ),
	                    matchers = [ function( elem, context, xml ) {
	                        var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
	                                (checkContext = context).nodeType ?
	                                    matchContext( elem, context, xml ) :
	                                    matchAnyContext( elem, context, xml ) );
	                        // Avoid hanging onto element (issue #299)
	                        checkContext = null;
	                        return ret;
	                    } ];
	
	                for ( ; i < len; i++ ) {
	                    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
	                        matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
	                    } else {
	                        matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
	                        // Return special upon seeing a positional matcher
	                        if ( matcher[ expando ] ) {
	                            // Find the next relative operator (if any) for proper handling
	                            j = ++i;
	                            for ( ; j < len; j++ ) {
	                                if ( Expr.relative[ tokens[j].type ] ) {
	                                    break;
	                                }
	                            }
	                            return setMatcher(
	                                i > 1 && elementMatcher( matchers ),
	                                i > 1 && toSelector(
	                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
	                                    tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
	                                ).replace( rtrim, "$1" ),
	                                matcher,
	                                i < j && matcherFromTokens( tokens.slice( i, j ) ),
	                                j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
	                                j < len && toSelector( tokens )
	                            );
	                        }
	                        matchers.push( matcher );
	                    }
	                }
	
	                return elementMatcher( matchers );
	            }
	
	            function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	                var bySet = setMatchers.length > 0,
	                    byElement = elementMatchers.length > 0,
	                    superMatcher = function( seed, context, xml, results, outermost ) {
	                        var elem, j, matcher,
	                            matchedCount = 0,
	                            i = "0",
	                            unmatched = seed && [],
	                            setMatched = [],
	                            contextBackup = outermostContext,
	                        // We must always have either seed elements or outermost context
	                            elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
	                        // Use integer dirruns iff this is the outermost matcher
	                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
	                            len = elems.length;
	
	                        if ( outermost ) {
	                            outermostContext = context === document || context || outermost;
	                        }
	
	                        // Add elements passing elementMatchers directly to results
	                        // Support: IE<9, Safari
	                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	                        for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
	                            if ( byElement && elem ) {
	                                j = 0;
	                                if ( !context && elem.ownerDocument !== document ) {
	                                    setDocument( elem );
	                                    xml = !documentIsHTML;
	                                }
	                                while ( (matcher = elementMatchers[j++]) ) {
	                                    if ( matcher( elem, context || document, xml) ) {
	                                        results.push( elem );
	                                        break;
	                                    }
	                                }
	                                if ( outermost ) {
	                                    dirruns = dirrunsUnique;
	                                }
	                            }
	
	                            // Track unmatched elements for set filters
	                            if ( bySet ) {
	                                // They will have gone through all possible matchers
	                                if ( (elem = !matcher && elem) ) {
	                                    matchedCount--;
	                                }
	
	                                // Lengthen the array for every element, matched or not
	                                if ( seed ) {
	                                    unmatched.push( elem );
	                                }
	                            }
	                        }
	
	                        // `i` is now the count of elements visited above, and adding it to `matchedCount`
	                        // makes the latter nonnegative.
	                        matchedCount += i;
	
	                        // Apply set filters to unmatched elements
	                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	                        // no element matchers and no seed.
	                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
	                        // numerically zero.
	                        if ( bySet && i !== matchedCount ) {
	                            j = 0;
	                            while ( (matcher = setMatchers[j++]) ) {
	                                matcher( unmatched, setMatched, context, xml );
	                            }
	
	                            if ( seed ) {
	                                // Reintegrate element matches to eliminate the need for sorting
	                                if ( matchedCount > 0 ) {
	                                    while ( i-- ) {
	                                        if ( !(unmatched[i] || setMatched[i]) ) {
	                                            setMatched[i] = pop.call( results );
	                                        }
	                                    }
	                                }
	
	                                // Discard index placeholder values to get only actual matches
	                                setMatched = condense( setMatched );
	                            }
	
	                            // Add matches to results
	                            push.apply( results, setMatched );
	
	                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
	                            if ( outermost && !seed && setMatched.length > 0 &&
	                                ( matchedCount + setMatchers.length ) > 1 ) {
	
	                                Sizzle.uniqueSort( results );
	                            }
	                        }
	
	                        // Override manipulation of globals by nested matchers
	                        if ( outermost ) {
	                            dirruns = dirrunsUnique;
	                            outermostContext = contextBackup;
	                        }
	
	                        return unmatched;
	                    };
	
	                return bySet ?
	                    markFunction( superMatcher ) :
	                    superMatcher;
	            }
	
	            compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	                var i,
	                    setMatchers = [],
	                    elementMatchers = [],
	                    cached = compilerCache[ selector + " " ];
	
	                if ( !cached ) {
	                    // Generate a function of recursive functions that can be used to check each element
	                    if ( !match ) {
	                        match = tokenize( selector );
	                    }
	                    i = match.length;
	                    while ( i-- ) {
	                        cached = matcherFromTokens( match[i] );
	                        if ( cached[ expando ] ) {
	                            setMatchers.push( cached );
	                        } else {
	                            elementMatchers.push( cached );
	                        }
	                    }
	
	                    // Cache the compiled function
	                    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
	                    // Save selector and tokenization
	                    cached.selector = selector;
	                }
	                return cached;
	            };
	
	            /**
	             * A low-level selection function that works with Sizzle's compiled
	             *  selector functions
	             * @param {String|Function} selector A selector or a pre-compiled
	             *  selector function built with Sizzle.compile
	             * @param {Element} context
	             * @param {Array} [results]
	             * @param {Array} [seed] A set of elements to match against
	             */
	            select = Sizzle.select = function( selector, context, results, seed ) {
	                var i, tokens, token, type, find,
	                    compiled = typeof selector === "function" && selector,
	                    match = !seed && tokenize( (selector = compiled.selector || selector) );
	
	                results = results || [];
	
	                // Try to minimize operations if there is only one selector in the list and no seed
	                // (the latter of which guarantees us context)
	                if ( match.length === 1 ) {
	
	                    // Reduce context if the leading compound selector is an ID
	                    tokens = match[0] = match[0].slice( 0 );
	                    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
	                        support.getById && context.nodeType === 9 && documentIsHTML &&
	                        Expr.relative[ tokens[1].type ] ) {
	
	                        context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
	                        if ( !context ) {
	                            return results;
	
	                            // Precompiled matchers will still verify ancestry, so step up a level
	                        } else if ( compiled ) {
	                            context = context.parentNode;
	                        }
	
	                        selector = selector.slice( tokens.shift().value.length );
	                    }
	
	                    // Fetch a seed set for right-to-left matching
	                    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
	                    while ( i-- ) {
	                        token = tokens[i];
	
	                        // Abort if we hit a combinator
	                        if ( Expr.relative[ (type = token.type) ] ) {
	                            break;
	                        }
	                        if ( (find = Expr.find[ type ]) ) {
	                            // Search, expanding context for leading sibling combinators
	                            if ( (seed = find(
	                                    token.matches[0].replace( runescape, funescape ),
	                                    rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
	                                )) ) {
	
	                                // If seed is empty or no tokens remain, we can return early
	                                tokens.splice( i, 1 );
	                                selector = seed.length && toSelector( tokens );
	                                if ( !selector ) {
	                                    push.apply( results, seed );
	                                    return results;
	                                }
	
	                                break;
	                            }
	                        }
	                    }
	                }
	
	                // Compile and execute a filtering function if one is not provided
	                // Provide `match` to avoid retokenization if we modified the selector above
	                ( compiled || compile( selector, match ) )(
	                    seed,
	                    context,
	                    !documentIsHTML,
	                    results,
	                    !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	                );
	                return results;
	            };
	
	// One-time assignments
	
	// Sort stability
	            support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	            support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	            setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	            support.sortDetached = assert(function( div1 ) {
	                // Should return 1, but returns 4 (following)
	                return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	            });
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	            if ( !assert(function( div ) {
	                    div.innerHTML = "<a href='#'></a>";
	                    return div.firstChild.getAttribute("href") === "#" ;
	                }) ) {
	                addHandle( "type|href|height|width", function( elem, name, isXML ) {
	                    if ( !isXML ) {
	                        return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
	                    }
	                });
	            }
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	            if ( !support.attributes || !assert(function( div ) {
	                    div.innerHTML = "<input/>";
	                    div.firstChild.setAttribute( "value", "" );
	                    return div.firstChild.getAttribute( "value" ) === "";
	                }) ) {
	                addHandle( "value", function( elem, name, isXML ) {
	                    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
	                        return elem.defaultValue;
	                    }
	                });
	            }
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	            if ( !assert(function( div ) {
	                    return div.getAttribute("disabled") == null;
	                }) ) {
	                addHandle( booleans, function( elem, name, isXML ) {
	                    var val;
	                    if ( !isXML ) {
	                        return elem[ name ] === true ? name.toLowerCase() :
	                            (val = elem.getAttributeNode( name )) && val.specified ?
	                                val.value :
	                                null;
	                    }
	                });
	            }
	
	            return Sizzle;
	
	        })( window );
	
	
	
	    jQuery.find = Sizzle;
	    jQuery.expr = Sizzle.selectors;
	    jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	    jQuery.text = Sizzle.getText;
	    jQuery.isXMLDoc = Sizzle.isXML;
	    jQuery.contains = Sizzle.contains;
	
	
	
	    var dir = function( elem, dir, until ) {
	        var matched = [],
	            truncate = until !== undefined;
	
	        while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
	            if ( elem.nodeType === 1 ) {
	                if ( truncate && jQuery( elem ).is( until ) ) {
	                    break;
	                }
	                matched.push( elem );
	            }
	        }
	        return matched;
	    };
	
	
	    var siblings = function( n, elem ) {
	        var matched = [];
	
	        for ( ; n; n = n.nextSibling ) {
	            if ( n.nodeType === 1 && n !== elem ) {
	                matched.push( n );
	            }
	        }
	
	        return matched;
	    };
	
	
	    var rneedsContext = jQuery.expr.match.needsContext;
	
	    var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	    var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	    function winnow( elements, qualifier, not ) {
	        if ( jQuery.isFunction( qualifier ) ) {
	            return jQuery.grep( elements, function( elem, i ) {
	                /* jshint -W018 */
	                return !!qualifier.call( elem, i, elem ) !== not;
	            } );
	
	        }
	
	        if ( qualifier.nodeType ) {
	            return jQuery.grep( elements, function( elem ) {
	                return ( elem === qualifier ) !== not;
	            } );
	
	        }
	
	        if ( typeof qualifier === "string" ) {
	            if ( risSimple.test( qualifier ) ) {
	                return jQuery.filter( qualifier, elements, not );
	            }
	
	            qualifier = jQuery.filter( qualifier, elements );
	        }
	
	        return jQuery.grep( elements, function( elem ) {
	            return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	        } );
	    }
	
	    jQuery.filter = function( expr, elems, not ) {
	        var elem = elems[ 0 ];
	
	        if ( not ) {
	            expr = ":not(" + expr + ")";
	        }
	
	        return elems.length === 1 && elem.nodeType === 1 ?
	            jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
	            jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
	                return elem.nodeType === 1;
	            } ) );
	    };
	
	    jQuery.fn.extend( {
	        find: function( selector ) {
	            var i,
	                len = this.length,
	                ret = [],
	                self = this;
	
	            if ( typeof selector !== "string" ) {
	                return this.pushStack( jQuery( selector ).filter( function() {
	                    for ( i = 0; i < len; i++ ) {
	                        if ( jQuery.contains( self[ i ], this ) ) {
	                            return true;
	                        }
	                    }
	                } ) );
	            }
	
	            for ( i = 0; i < len; i++ ) {
	                jQuery.find( selector, self[ i ], ret );
	            }
	
	            // Needed because $( selector, context ) becomes $( context ).find( selector )
	            ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
	            ret.selector = this.selector ? this.selector + " " + selector : selector;
	            return ret;
	        },
	        filter: function( selector ) {
	            return this.pushStack( winnow( this, selector || [], false ) );
	        },
	        not: function( selector ) {
	            return this.pushStack( winnow( this, selector || [], true ) );
	        },
	        is: function( selector ) {
	            return !!winnow(
	                this,
	
	                // If this is a positional/relative selector, check membership in the returned set
	                // so $("p:first").is("p:last") won't return true for a doc with two "p".
	                typeof selector === "string" && rneedsContext.test( selector ) ?
	                    jQuery( selector ) :
	                selector || [],
	                false
	            ).length;
	        }
	    } );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	    var rootjQuery,
	
	    // A simple way to check for HTML strings
	    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	    // Strict HTML recognition (#11290: must start with <)
	        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
	        init = jQuery.fn.init = function( selector, context, root ) {
	            var match, elem;
	
	            // HANDLE: $(""), $(null), $(undefined), $(false)
	            if ( !selector ) {
	                return this;
	            }
	
	            // Method init() accepts an alternate rootjQuery
	            // so migrate can support jQuery.sub (gh-2101)
	            root = root || rootjQuery;
	
	            // Handle HTML strings
	            if ( typeof selector === "string" ) {
	                if ( selector[ 0 ] === "<" &&
	                    selector[ selector.length - 1 ] === ">" &&
	                    selector.length >= 3 ) {
	
	                    // Assume that strings that start and end with <> are HTML and skip the regex check
	                    match = [ null, selector, null ];
	
	                } else {
	                    match = rquickExpr.exec( selector );
	                }
	
	                // Match html or make sure no context is specified for #id
	                if ( match && ( match[ 1 ] || !context ) ) {
	
	                    // HANDLE: $(html) -> $(array)
	                    if ( match[ 1 ] ) {
	                        context = context instanceof jQuery ? context[ 0 ] : context;
	
	                        // Option to run scripts is true for back-compat
	                        // Intentionally let the error be thrown if parseHTML is not present
	                        jQuery.merge( this, jQuery.parseHTML(
	                            match[ 1 ],
	                            context && context.nodeType ? context.ownerDocument || context : document,
	                            true
	                        ) );
	
	                        // HANDLE: $(html, props)
	                        if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
	                            for ( match in context ) {
	
	                                // Properties of context are called as methods if possible
	                                if ( jQuery.isFunction( this[ match ] ) ) {
	                                    this[ match ]( context[ match ] );
	
	                                    // ...and otherwise set as attributes
	                                } else {
	                                    this.attr( match, context[ match ] );
	                                }
	                            }
	                        }
	
	                        return this;
	
	                        // HANDLE: $(#id)
	                    } else {
	                        elem = document.getElementById( match[ 2 ] );
	
	                        // Support: Blackberry 4.6
	                        // gEBID returns nodes no longer in the document (#6963)
	                        if ( elem && elem.parentNode ) {
	
	                            // Inject the element directly into the jQuery object
	                            this.length = 1;
	                            this[ 0 ] = elem;
	                        }
	
	                        this.context = document;
	                        this.selector = selector;
	                        return this;
	                    }
	
	                    // HANDLE: $(expr, $(...))
	                } else if ( !context || context.jquery ) {
	                    return ( context || root ).find( selector );
	
	                    // HANDLE: $(expr, context)
	                    // (which is just equivalent to: $(context).find(expr)
	                } else {
	                    return this.constructor( context ).find( selector );
	                }
	
	                // HANDLE: $(DOMElement)
	            } else if ( selector.nodeType ) {
	                this.context = this[ 0 ] = selector;
	                this.length = 1;
	                return this;
	
	                // HANDLE: $(function)
	                // Shortcut for document ready
	            } else if ( jQuery.isFunction( selector ) ) {
	                return root.ready !== undefined ?
	                    root.ready( selector ) :
	
	                    // Execute immediately if ready is not present
	                    selector( jQuery );
	            }
	
	            if ( selector.selector !== undefined ) {
	                this.selector = selector.selector;
	                this.context = selector.context;
	            }
	
	            return jQuery.makeArray( selector, this );
	        };
	
	// Give the init function the jQuery prototype for later instantiation
	    init.prototype = jQuery.fn;
	
	// Initialize central reference
	    rootjQuery = jQuery( document );
	
	
	    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
	    // Methods guaranteed to produce a unique set when starting from a unique set
	        guaranteedUnique = {
	            children: true,
	            contents: true,
	            next: true,
	            prev: true
	        };
	
	    jQuery.fn.extend( {
	        has: function( target ) {
	            var targets = jQuery( target, this ),
	                l = targets.length;
	
	            return this.filter( function() {
	                var i = 0;
	                for ( ; i < l; i++ ) {
	                    if ( jQuery.contains( this, targets[ i ] ) ) {
	                        return true;
	                    }
	                }
	            } );
	        },
	
	        closest: function( selectors, context ) {
	            var cur,
	                i = 0,
	                l = this.length,
	                matched = [],
	                pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
	                    jQuery( selectors, context || this.context ) :
	                    0;
	
	            for ( ; i < l; i++ ) {
	                for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
	                    // Always skip document fragments
	                    if ( cur.nodeType < 11 && ( pos ?
	                        pos.index( cur ) > -1 :
	
	                            // Don't pass non-elements to Sizzle
	                        cur.nodeType === 1 &&
	                        jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
	                        matched.push( cur );
	                        break;
	                    }
	                }
	            }
	
	            return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	        },
	
	        // Determine the position of an element within the set
	        index: function( elem ) {
	
	            // No argument, return index in parent
	            if ( !elem ) {
	                return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
	            }
	
	            // Index in selector
	            if ( typeof elem === "string" ) {
	                return indexOf.call( jQuery( elem ), this[ 0 ] );
	            }
	
	            // Locate the position of the desired element
	            return indexOf.call( this,
	
	                // If it receives a jQuery object, the first element is used
	                elem.jquery ? elem[ 0 ] : elem
	            );
	        },
	
	        add: function( selector, context ) {
	            return this.pushStack(
	                jQuery.uniqueSort(
	                    jQuery.merge( this.get(), jQuery( selector, context ) )
	                )
	            );
	        },
	
	        addBack: function( selector ) {
	            return this.add( selector == null ?
	                    this.prevObject : this.prevObject.filter( selector )
	            );
	        }
	    } );
	
	    function sibling( cur, dir ) {
	        while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	        return cur;
	    }
	
	    jQuery.each( {
	        parent: function( elem ) {
	            var parent = elem.parentNode;
	            return parent && parent.nodeType !== 11 ? parent : null;
	        },
	        parents: function( elem ) {
	            return dir( elem, "parentNode" );
	        },
	        parentsUntil: function( elem, i, until ) {
	            return dir( elem, "parentNode", until );
	        },
	        next: function( elem ) {
	            return sibling( elem, "nextSibling" );
	        },
	        prev: function( elem ) {
	            return sibling( elem, "previousSibling" );
	        },
	        nextAll: function( elem ) {
	            return dir( elem, "nextSibling" );
	        },
	        prevAll: function( elem ) {
	            return dir( elem, "previousSibling" );
	        },
	        nextUntil: function( elem, i, until ) {
	            return dir( elem, "nextSibling", until );
	        },
	        prevUntil: function( elem, i, until ) {
	            return dir( elem, "previousSibling", until );
	        },
	        siblings: function( elem ) {
	            return siblings( ( elem.parentNode || {} ).firstChild, elem );
	        },
	        children: function( elem ) {
	            return siblings( elem.firstChild );
	        },
	        contents: function( elem ) {
	            return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	        }
	    }, function( name, fn ) {
	        jQuery.fn[ name ] = function( until, selector ) {
	            var matched = jQuery.map( this, fn, until );
	
	            if ( name.slice( -5 ) !== "Until" ) {
	                selector = until;
	            }
	
	            if ( selector && typeof selector === "string" ) {
	                matched = jQuery.filter( selector, matched );
	            }
	
	            if ( this.length > 1 ) {
	
	                // Remove duplicates
	                if ( !guaranteedUnique[ name ] ) {
	                    jQuery.uniqueSort( matched );
	                }
	
	                // Reverse order for parents* and prev-derivatives
	                if ( rparentsprev.test( name ) ) {
	                    matched.reverse();
	                }
	            }
	
	            return this.pushStack( matched );
	        };
	    } );
	    var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	    function createOptions( options ) {
	        var object = {};
	        jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
	            object[ flag ] = true;
	        } );
	        return object;
	    }
	
	    /*
	     * Create a callback list using the following parameters:
	     *
	     *	options: an optional list of space-separated options that will change how
	     *			the callback list behaves or a more traditional option object
	     *
	     * By default a callback list will act like an event callback list and can be
	     * "fired" multiple times.
	     *
	     * Possible options:
	     *
	     *	once:			will ensure the callback list can only be fired once (like a Deferred)
	     *
	     *	memory:			will keep track of previous values and will call any callback added
	     *					after the list has been fired right away with the latest "memorized"
	     *					values (like a Deferred)
	     *
	     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	     *
	     *	stopOnFalse:	interrupt callings when a callback returns false
	     *
	     */
	    jQuery.Callbacks = function( options ) {
	
	        // Convert options from String-formatted to Object-formatted if needed
	        // (we check in cache first)
	        options = typeof options === "string" ?
	            createOptions( options ) :
	            jQuery.extend( {}, options );
	
	        var // Flag to know if list is currently firing
	            firing,
	
	        // Last fire value for non-forgettable lists
	            memory,
	
	        // Flag to know if list was already fired
	            fired,
	
	        // Flag to prevent firing
	            locked,
	
	        // Actual callback list
	            list = [],
	
	        // Queue of execution data for repeatable lists
	            queue = [],
	
	        // Index of currently firing callback (modified by add/remove as needed)
	            firingIndex = -1,
	
	        // Fire callbacks
	            fire = function() {
	
	                // Enforce single-firing
	                locked = options.once;
	
	                // Execute callbacks for all pending executions,
	                // respecting firingIndex overrides and runtime changes
	                fired = firing = true;
	                for ( ; queue.length; firingIndex = -1 ) {
	                    memory = queue.shift();
	                    while ( ++firingIndex < list.length ) {
	
	                        // Run callback and check for early termination
	                        if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
	                            options.stopOnFalse ) {
	
	                            // Jump to end and forget the data so .add doesn't re-fire
	                            firingIndex = list.length;
	                            memory = false;
	                        }
	                    }
	                }
	
	                // Forget the data if we're done with it
	                if ( !options.memory ) {
	                    memory = false;
	                }
	
	                firing = false;
	
	                // Clean up if we're done firing for good
	                if ( locked ) {
	
	                    // Keep an empty list if we have data for future add calls
	                    if ( memory ) {
	                        list = [];
	
	                        // Otherwise, this object is spent
	                    } else {
	                        list = "";
	                    }
	                }
	            },
	
	        // Actual Callbacks object
	            self = {
	
	                // Add a callback or a collection of callbacks to the list
	                add: function() {
	                    if ( list ) {
	
	                        // If we have memory from a past run, we should fire after adding
	                        if ( memory && !firing ) {
	                            firingIndex = list.length - 1;
	                            queue.push( memory );
	                        }
	
	                        ( function add( args ) {
	                            jQuery.each( args, function( _, arg ) {
	                                if ( jQuery.isFunction( arg ) ) {
	                                    if ( !options.unique || !self.has( arg ) ) {
	                                        list.push( arg );
	                                    }
	                                } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
	                                    // Inspect recursively
	                                    add( arg );
	                                }
	                            } );
	                        } )( arguments );
	
	                        if ( memory && !firing ) {
	                            fire();
	                        }
	                    }
	                    return this;
	                },
	
	                // Remove a callback from the list
	                remove: function() {
	                    jQuery.each( arguments, function( _, arg ) {
	                        var index;
	                        while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
	                            list.splice( index, 1 );
	
	                            // Handle firing indexes
	                            if ( index <= firingIndex ) {
	                                firingIndex--;
	                            }
	                        }
	                    } );
	                    return this;
	                },
	
	                // Check if a given callback is in the list.
	                // If no argument is given, return whether or not list has callbacks attached.
	                has: function( fn ) {
	                    return fn ?
	                    jQuery.inArray( fn, list ) > -1 :
	                    list.length > 0;
	                },
	
	                // Remove all callbacks from the list
	                empty: function() {
	                    if ( list ) {
	                        list = [];
	                    }
	                    return this;
	                },
	
	                // Disable .fire and .add
	                // Abort any current/pending executions
	                // Clear all callbacks and values
	                disable: function() {
	                    locked = queue = [];
	                    list = memory = "";
	                    return this;
	                },
	                disabled: function() {
	                    return !list;
	                },
	
	                // Disable .fire
	                // Also disable .add unless we have memory (since it would have no effect)
	                // Abort any pending executions
	                lock: function() {
	                    locked = queue = [];
	                    if ( !memory ) {
	                        list = memory = "";
	                    }
	                    return this;
	                },
	                locked: function() {
	                    return !!locked;
	                },
	
	                // Call all callbacks with the given context and arguments
	                fireWith: function( context, args ) {
	                    if ( !locked ) {
	                        args = args || [];
	                        args = [ context, args.slice ? args.slice() : args ];
	                        queue.push( args );
	                        if ( !firing ) {
	                            fire();
	                        }
	                    }
	                    return this;
	                },
	
	                // Call all the callbacks with the given arguments
	                fire: function() {
	                    self.fireWith( this, arguments );
	                    return this;
	                },
	
	                // To know if the callbacks have already been called at least once
	                fired: function() {
	                    return !!fired;
	                }
	            };
	
	        return self;
	    };
	
	
	    jQuery.extend( {
	
	        Deferred: function( func ) {
	            var tuples = [
	
	                    // action, add listener, listener list, final state
	                    [ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
	                    [ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
	                    [ "notify", "progress", jQuery.Callbacks( "memory" ) ]
	                ],
	                state = "pending",
	                promise = {
	                    state: function() {
	                        return state;
	                    },
	                    always: function() {
	                        deferred.done( arguments ).fail( arguments );
	                        return this;
	                    },
	                    then: function( /* fnDone, fnFail, fnProgress */ ) {
	                        var fns = arguments;
	                        return jQuery.Deferred( function( newDefer ) {
	                            jQuery.each( tuples, function( i, tuple ) {
	                                var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
	                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
	                                deferred[ tuple[ 1 ] ]( function() {
	                                    var returned = fn && fn.apply( this, arguments );
	                                    if ( returned && jQuery.isFunction( returned.promise ) ) {
	                                        returned.promise()
	                                            .progress( newDefer.notify )
	                                            .done( newDefer.resolve )
	                                            .fail( newDefer.reject );
	                                    } else {
	                                        newDefer[ tuple[ 0 ] + "With" ](
	                                            this === promise ? newDefer.promise() : this,
	                                            fn ? [ returned ] : arguments
	                                        );
	                                    }
	                                } );
	                            } );
	                            fns = null;
	                        } ).promise();
	                    },
	
	                    // Get a promise for this deferred
	                    // If obj is provided, the promise aspect is added to the object
	                    promise: function( obj ) {
	                        return obj != null ? jQuery.extend( obj, promise ) : promise;
	                    }
	                },
	                deferred = {};
	
	            // Keep pipe for back-compat
	            promise.pipe = promise.then;
	
	            // Add list-specific methods
	            jQuery.each( tuples, function( i, tuple ) {
	                var list = tuple[ 2 ],
	                    stateString = tuple[ 3 ];
	
	                // promise[ done | fail | progress ] = list.add
	                promise[ tuple[ 1 ] ] = list.add;
	
	                // Handle state
	                if ( stateString ) {
	                    list.add( function() {
	
	                        // state = [ resolved | rejected ]
	                        state = stateString;
	
	                        // [ reject_list | resolve_list ].disable; progress_list.lock
	                    }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
	                }
	
	                // deferred[ resolve | reject | notify ]
	                deferred[ tuple[ 0 ] ] = function() {
	                    deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
	                    return this;
	                };
	                deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
	            } );
	
	            // Make the deferred a promise
	            promise.promise( deferred );
	
	            // Call given func if any
	            if ( func ) {
	                func.call( deferred, deferred );
	            }
	
	            // All done!
	            return deferred;
	        },
	
	        // Deferred helper
	        when: function( subordinate /* , ..., subordinateN */ ) {
	            var i = 0,
	                resolveValues = slice.call( arguments ),
	                length = resolveValues.length,
	
	            // the count of uncompleted subordinates
	                remaining = length !== 1 ||
	                ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
	            // the master Deferred.
	            // If resolveValues consist of only a single Deferred, just use that.
	                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
	            // Update function for both resolve and progress values
	                updateFunc = function( i, contexts, values ) {
	                    return function( value ) {
	                        contexts[ i ] = this;
	                        values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
	                        if ( values === progressValues ) {
	                            deferred.notifyWith( contexts, values );
	                        } else if ( !( --remaining ) ) {
	                            deferred.resolveWith( contexts, values );
	                        }
	                    };
	                },
	
	                progressValues, progressContexts, resolveContexts;
	
	            // Add listeners to Deferred subordinates; treat others as resolved
	            if ( length > 1 ) {
	                progressValues = new Array( length );
	                progressContexts = new Array( length );
	                resolveContexts = new Array( length );
	                for ( ; i < length; i++ ) {
	                    if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
	                        resolveValues[ i ].promise()
	                            .progress( updateFunc( i, progressContexts, progressValues ) )
	                            .done( updateFunc( i, resolveContexts, resolveValues ) )
	                            .fail( deferred.reject );
	                    } else {
	                        --remaining;
	                    }
	                }
	            }
	
	            // If we're not waiting on anything, resolve the master
	            if ( !remaining ) {
	                deferred.resolveWith( resolveContexts, resolveValues );
	            }
	
	            return deferred.promise();
	        }
	    } );
	
	
	// The deferred used on DOM ready
	    var readyList;
	
	    jQuery.fn.ready = function( fn ) {
	
	        // Add the callback
	        jQuery.ready.promise().done( fn );
	
	        return this;
	    };
	
	    jQuery.extend( {
	
	        // Is the DOM ready to be used? Set to true once it occurs.
	        isReady: false,
	
	        // A counter to track how many items to wait for before
	        // the ready event fires. See #6781
	        readyWait: 1,
	
	        // Hold (or release) the ready event
	        holdReady: function( hold ) {
	            if ( hold ) {
	                jQuery.readyWait++;
	            } else {
	                jQuery.ready( true );
	            }
	        },
	
	        // Handle when the DOM is ready
	        ready: function( wait ) {
	
	            // Abort if there are pending holds or we're already ready
	            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
	                return;
	            }
	
	            // Remember that the DOM is ready
	            jQuery.isReady = true;
	
	            // If a normal DOM Ready event fired, decrement, and wait if need be
	            if ( wait !== true && --jQuery.readyWait > 0 ) {
	                return;
	            }
	
	            // If there are functions bound, to execute
	            readyList.resolveWith( document, [ jQuery ] );
	
	            // Trigger any bound ready events
	            if ( jQuery.fn.triggerHandler ) {
	                jQuery( document ).triggerHandler( "ready" );
	                jQuery( document ).off( "ready" );
	            }
	        }
	    } );
	
	    /**
	     * The ready event handler and self cleanup method
	     */
	    function completed() {
	        document.removeEventListener( "DOMContentLoaded", completed );
	        window.removeEventListener( "load", completed );
	        jQuery.ready();
	    }
	
	    jQuery.ready.promise = function( obj ) {
	        if ( !readyList ) {
	
	            readyList = jQuery.Deferred();
	
	            // Catch cases where $(document).ready() is called
	            // after the browser event has already occurred.
	            // Support: IE9-10 only
	            // Older IE sometimes signals "interactive" too soon
	            if ( document.readyState === "complete" ||
	                ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
	                // Handle it asynchronously to allow scripts the opportunity to delay ready
	                window.setTimeout( jQuery.ready );
	
	            } else {
	
	                // Use the handy event callback
	                document.addEventListener( "DOMContentLoaded", completed );
	
	                // A fallback to window.onload, that will always work
	                window.addEventListener( "load", completed );
	            }
	        }
	        return readyList.promise( obj );
	    };
	
	// Kick off the DOM ready check even if the user does not
	    jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	    var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	        var i = 0,
	            len = elems.length,
	            bulk = key == null;
	
	        // Sets many values
	        if ( jQuery.type( key ) === "object" ) {
	            chainable = true;
	            for ( i in key ) {
	                access( elems, fn, i, key[ i ], true, emptyGet, raw );
	            }
	
	            // Sets one value
	        } else if ( value !== undefined ) {
	            chainable = true;
	
	            if ( !jQuery.isFunction( value ) ) {
	                raw = true;
	            }
	
	            if ( bulk ) {
	
	                // Bulk operations run against the entire set
	                if ( raw ) {
	                    fn.call( elems, value );
	                    fn = null;
	
	                    // ...except when executing function values
	                } else {
	                    bulk = fn;
	                    fn = function( elem, key, value ) {
	                        return bulk.call( jQuery( elem ), value );
	                    };
	                }
	            }
	
	            if ( fn ) {
	                for ( ; i < len; i++ ) {
	                    fn(
	                        elems[ i ], key, raw ?
	                            value :
	                            value.call( elems[ i ], i, fn( elems[ i ], key ) )
	                    );
	                }
	            }
	        }
	
	        return chainable ?
	            elems :
	
	            // Gets
	            bulk ?
	                fn.call( elems ) :
	                len ? fn( elems[ 0 ], key ) : emptyGet;
	    };
	    var acceptData = function( owner ) {
	
	        // Accepts only:
	        //  - Node
	        //    - Node.ELEMENT_NODE
	        //    - Node.DOCUMENT_NODE
	        //  - Object
	        //    - Any
	        /* jshint -W018 */
	        return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	    };
	
	
	
	
	    function Data() {
	        this.expando = jQuery.expando + Data.uid++;
	    }
	
	    Data.uid = 1;
	
	    Data.prototype = {
	
	        register: function( owner, initial ) {
	            var value = initial || {};
	
	            // If it is a node unlikely to be stringify-ed or looped over
	            // use plain assignment
	            if ( owner.nodeType ) {
	                owner[ this.expando ] = value;
	
	                // Otherwise secure it in a non-enumerable, non-writable property
	                // configurability must be true to allow the property to be
	                // deleted with the delete operator
	            } else {
	                Object.defineProperty( owner, this.expando, {
	                    value: value,
	                    writable: true,
	                    configurable: true
	                } );
	            }
	            return owner[ this.expando ];
	        },
	        cache: function( owner ) {
	
	            // We can accept data for non-element nodes in modern browsers,
	            // but we should not, see #8335.
	            // Always return an empty object.
	            if ( !acceptData( owner ) ) {
	                return {};
	            }
	
	            // Check if the owner object already has a cache
	            var value = owner[ this.expando ];
	
	            // If not, create one
	            if ( !value ) {
	                value = {};
	
	                // We can accept data for non-element nodes in modern browsers,
	                // but we should not, see #8335.
	                // Always return an empty object.
	                if ( acceptData( owner ) ) {
	
	                    // If it is a node unlikely to be stringify-ed or looped over
	                    // use plain assignment
	                    if ( owner.nodeType ) {
	                        owner[ this.expando ] = value;
	
	                        // Otherwise secure it in a non-enumerable property
	                        // configurable must be true to allow the property to be
	                        // deleted when data is removed
	                    } else {
	                        Object.defineProperty( owner, this.expando, {
	                            value: value,
	                            configurable: true
	                        } );
	                    }
	                }
	            }
	
	            return value;
	        },
	        set: function( owner, data, value ) {
	            var prop,
	                cache = this.cache( owner );
	
	            // Handle: [ owner, key, value ] args
	            if ( typeof data === "string" ) {
	                cache[ data ] = value;
	
	                // Handle: [ owner, { properties } ] args
	            } else {
	
	                // Copy the properties one-by-one to the cache object
	                for ( prop in data ) {
	                    cache[ prop ] = data[ prop ];
	                }
	            }
	            return cache;
	        },
	        get: function( owner, key ) {
	            return key === undefined ?
	                this.cache( owner ) :
	            owner[ this.expando ] && owner[ this.expando ][ key ];
	        },
	        access: function( owner, key, value ) {
	            var stored;
	
	            // In cases where either:
	            //
	            //   1. No key was specified
	            //   2. A string key was specified, but no value provided
	            //
	            // Take the "read" path and allow the get method to determine
	            // which value to return, respectively either:
	            //
	            //   1. The entire cache object
	            //   2. The data stored at the key
	            //
	            if ( key === undefined ||
	                ( ( key && typeof key === "string" ) && value === undefined ) ) {
	
	                stored = this.get( owner, key );
	
	                return stored !== undefined ?
	                    stored : this.get( owner, jQuery.camelCase( key ) );
	            }
	
	            // When the key is not a string, or both a key and value
	            // are specified, set or extend (existing objects) with either:
	            //
	            //   1. An object of properties
	            //   2. A key and value
	            //
	            this.set( owner, key, value );
	
	            // Since the "set" path can have two possible entry points
	            // return the expected data based on which path was taken[*]
	            return value !== undefined ? value : key;
	        },
	        remove: function( owner, key ) {
	            var i, name, camel,
	                cache = owner[ this.expando ];
	
	            if ( cache === undefined ) {
	                return;
	            }
	
	            if ( key === undefined ) {
	                this.register( owner );
	
	            } else {
	
	                // Support array or space separated string of keys
	                if ( jQuery.isArray( key ) ) {
	
	                    // If "name" is an array of keys...
	                    // When data is initially created, via ("key", "val") signature,
	                    // keys will be converted to camelCase.
	                    // Since there is no way to tell _how_ a key was added, remove
	                    // both plain key and camelCase key. #12786
	                    // This will only penalize the array argument path.
	                    name = key.concat( key.map( jQuery.camelCase ) );
	                } else {
	                    camel = jQuery.camelCase( key );
	
	                    // Try the string as a key before any manipulation
	                    if ( key in cache ) {
	                        name = [ key, camel ];
	                    } else {
	
	                        // If a key with the spaces exists, use it.
	                        // Otherwise, create an array by matching non-whitespace
	                        name = camel;
	                        name = name in cache ?
	                            [ name ] : ( name.match( rnotwhite ) || [] );
	                    }
	                }
	
	                i = name.length;
	
	                while ( i-- ) {
	                    delete cache[ name[ i ] ];
	                }
	            }
	
	            // Remove the expando if there's no more data
	            if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
	                // Support: Chrome <= 35-45+
	                // Webkit & Blink performance suffers when deleting properties
	                // from DOM nodes, so set to undefined instead
	                // https://code.google.com/p/chromium/issues/detail?id=378607
	                if ( owner.nodeType ) {
	                    owner[ this.expando ] = undefined;
	                } else {
	                    delete owner[ this.expando ];
	                }
	            }
	        },
	        hasData: function( owner ) {
	            var cache = owner[ this.expando ];
	            return cache !== undefined && !jQuery.isEmptyObject( cache );
	        }
	    };
	    var dataPriv = new Data();
	
	    var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	        rmultiDash = /[A-Z]/g;
	
	    function dataAttr( elem, key, data ) {
	        var name;
	
	        // If nothing was found internally, try to fetch any
	        // data from the HTML5 data-* attribute
	        if ( data === undefined && elem.nodeType === 1 ) {
	            name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
	            data = elem.getAttribute( name );
	
	            if ( typeof data === "string" ) {
	                try {
	                    data = data === "true" ? true :
	                        data === "false" ? false :
	                            data === "null" ? null :
	
	                                // Only convert to a number if it doesn't change the string
	                                +data + "" === data ? +data :
	                                    rbrace.test( data ) ? jQuery.parseJSON( data ) :
	                                        data;
	                } catch ( e ) {}
	
	                // Make sure we set the data so it isn't changed later
	                dataUser.set( elem, key, data );
	            } else {
	                data = undefined;
	            }
	        }
	        return data;
	    }
	
	    jQuery.extend( {
	        hasData: function( elem ) {
	            return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	        },
	
	        data: function( elem, name, data ) {
	            return dataUser.access( elem, name, data );
	        },
	
	        removeData: function( elem, name ) {
	            dataUser.remove( elem, name );
	        },
	
	        // TODO: Now that all calls to _data and _removeData have been replaced
	        // with direct calls to dataPriv methods, these can be deprecated.
	        _data: function( elem, name, data ) {
	            return dataPriv.access( elem, name, data );
	        },
	
	        _removeData: function( elem, name ) {
	            dataPriv.remove( elem, name );
	        }
	    } );
	
	    jQuery.fn.extend( {
	        data: function( key, value ) {
	            var i, name, data,
	                elem = this[ 0 ],
	                attrs = elem && elem.attributes;
	
	            // Gets all values
	            if ( key === undefined ) {
	                if ( this.length ) {
	                    data = dataUser.get( elem );
	
	                    if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
	                        i = attrs.length;
	                        while ( i-- ) {
	
	                            // Support: IE11+
	                            // The attrs elements can be null (#14894)
	                            if ( attrs[ i ] ) {
	                                name = attrs[ i ].name;
	                                if ( name.indexOf( "data-" ) === 0 ) {
	                                    name = jQuery.camelCase( name.slice( 5 ) );
	                                    dataAttr( elem, name, data[ name ] );
	                                }
	                            }
	                        }
	                        dataPriv.set( elem, "hasDataAttrs", true );
	                    }
	                }
	
	                return data;
	            }
	
	            // Sets multiple values
	            if ( typeof key === "object" ) {
	                return this.each( function() {
	                    dataUser.set( this, key );
	                } );
	            }
	
	            return access( this, function( value ) {
	                var data, camelKey;
	
	                // The calling jQuery object (element matches) is not empty
	                // (and therefore has an element appears at this[ 0 ]) and the
	                // `value` parameter was not undefined. An empty jQuery object
	                // will result in `undefined` for elem = this[ 0 ] which will
	                // throw an exception if an attempt to read a data cache is made.
	                if ( elem && value === undefined ) {
	
	                    // Attempt to get data from the cache
	                    // with the key as-is
	                    data = dataUser.get( elem, key ) ||
	
	                            // Try to find dashed key if it exists (gh-2779)
	                            // This is for 2.2.x only
	                        dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
	                    if ( data !== undefined ) {
	                        return data;
	                    }
	
	                    camelKey = jQuery.camelCase( key );
	
	                    // Attempt to get data from the cache
	                    // with the key camelized
	                    data = dataUser.get( elem, camelKey );
	                    if ( data !== undefined ) {
	                        return data;
	                    }
	
	                    // Attempt to "discover" the data in
	                    // HTML5 custom data-* attrs
	                    data = dataAttr( elem, camelKey, undefined );
	                    if ( data !== undefined ) {
	                        return data;
	                    }
	
	                    // We tried really hard, but the data doesn't exist.
	                    return;
	                }
	
	                // Set the data...
	                camelKey = jQuery.camelCase( key );
	                this.each( function() {
	
	                    // First, attempt to store a copy or reference of any
	                    // data that might've been store with a camelCased key.
	                    var data = dataUser.get( this, camelKey );
	
	                    // For HTML5 data-* attribute interop, we have to
	                    // store property names with dashes in a camelCase form.
	                    // This might not apply to all properties...*
	                    dataUser.set( this, camelKey, value );
	
	                    // *... In the case of properties that might _actually_
	                    // have dashes, we need to also store a copy of that
	                    // unchanged property.
	                    if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
	                        dataUser.set( this, key, value );
	                    }
	                } );
	            }, null, value, arguments.length > 1, null, true );
	        },
	
	        removeData: function( key ) {
	            return this.each( function() {
	                dataUser.remove( this, key );
	            } );
	        }
	    } );
	
	
	    jQuery.extend( {
	        queue: function( elem, type, data ) {
	            var queue;
	
	            if ( elem ) {
	                type = ( type || "fx" ) + "queue";
	                queue = dataPriv.get( elem, type );
	
	                // Speed up dequeue by getting out quickly if this is just a lookup
	                if ( data ) {
	                    if ( !queue || jQuery.isArray( data ) ) {
	                        queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
	                    } else {
	                        queue.push( data );
	                    }
	                }
	                return queue || [];
	            }
	        },
	
	        dequeue: function( elem, type ) {
	            type = type || "fx";
	
	            var queue = jQuery.queue( elem, type ),
	                startLength = queue.length,
	                fn = queue.shift(),
	                hooks = jQuery._queueHooks( elem, type ),
	                next = function() {
	                    jQuery.dequeue( elem, type );
	                };
	
	            // If the fx queue is dequeued, always remove the progress sentinel
	            if ( fn === "inprogress" ) {
	                fn = queue.shift();
	                startLength--;
	            }
	
	            if ( fn ) {
	
	                // Add a progress sentinel to prevent the fx queue from being
	                // automatically dequeued
	                if ( type === "fx" ) {
	                    queue.unshift( "inprogress" );
	                }
	
	                // Clear up the last queue stop function
	                delete hooks.stop;
	                fn.call( elem, next, hooks );
	            }
	
	            if ( !startLength && hooks ) {
	                hooks.empty.fire();
	            }
	        },
	
	        // Not public - generate a queueHooks object, or return the current one
	        _queueHooks: function( elem, type ) {
	            var key = type + "queueHooks";
	            return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
	                    empty: jQuery.Callbacks( "once memory" ).add( function() {
	                        dataPriv.remove( elem, [ type + "queue", key ] );
	                    } )
	                } );
	        }
	    } );
	
	    jQuery.fn.extend( {
	        queue: function( type, data ) {
	            var setter = 2;
	
	            if ( typeof type !== "string" ) {
	                data = type;
	                type = "fx";
	                setter--;
	            }
	
	            if ( arguments.length < setter ) {
	                return jQuery.queue( this[ 0 ], type );
	            }
	
	            return data === undefined ?
	                this :
	                this.each( function() {
	                    var queue = jQuery.queue( this, type, data );
	
	                    // Ensure a hooks for this queue
	                    jQuery._queueHooks( this, type );
	
	                    if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
	                        jQuery.dequeue( this, type );
	                    }
	                } );
	        },
	        dequeue: function( type ) {
	            return this.each( function() {
	                jQuery.dequeue( this, type );
	            } );
	        },
	        clearQueue: function( type ) {
	            return this.queue( type || "fx", [] );
	        },
	
	        // Get a promise resolved when queues of a certain type
	        // are emptied (fx is the type by default)
	        promise: function( type, obj ) {
	            var tmp,
	                count = 1,
	                defer = jQuery.Deferred(),
	                elements = this,
	                i = this.length,
	                resolve = function() {
	                    if ( !( --count ) ) {
	                        defer.resolveWith( elements, [ elements ] );
	                    }
	                };
	
	            if ( typeof type !== "string" ) {
	                obj = type;
	                type = undefined;
	            }
	            type = type || "fx";
	
	            while ( i-- ) {
	                tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
	                if ( tmp && tmp.empty ) {
	                    count++;
	                    tmp.empty.add( resolve );
	                }
	            }
	            resolve();
	            return defer.promise( obj );
	        }
	    } );
	    var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	    var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	    var isHidden = function( elem, el ) {
	
	        // isHidden might be called from jQuery#filter function;
	        // in that case, element will be second argument
	        elem = el || elem;
	        return jQuery.css( elem, "display" ) === "none" ||
	            !jQuery.contains( elem.ownerDocument, elem );
	    };
	
	
	
	    function adjustCSS( elem, prop, valueParts, tween ) {
	        var adjusted,
	            scale = 1,
	            maxIterations = 20,
	            currentValue = tween ?
	                function() { return tween.cur(); } :
	                function() { return jQuery.css( elem, prop, "" ); },
	            initial = currentValue(),
	            unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
	        // Starting value computation is required for potential unit mismatches
	            initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
	                rcssNum.exec( jQuery.css( elem, prop ) );
	
	        if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
	            // Trust units reported by jQuery.css
	            unit = unit || initialInUnit[ 3 ];
	
	            // Make sure we update the tween properties later on
	            valueParts = valueParts || [];
	
	            // Iteratively approximate from a nonzero starting point
	            initialInUnit = +initial || 1;
	
	            do {
	
	                // If previous iteration zeroed out, double until we get *something*.
	                // Use string for doubling so we don't accidentally see scale as unchanged below
	                scale = scale || ".5";
	
	                // Adjust and apply
	                initialInUnit = initialInUnit / scale;
	                jQuery.style( elem, prop, initialInUnit + unit );
	
	                // Update scale, tolerating zero or NaN from tween.cur()
	                // Break the loop if scale is unchanged or perfect, or if we've just had enough.
	            } while (
	            scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
	                );
	        }
	
	        if ( valueParts ) {
	            initialInUnit = +initialInUnit || +initial || 0;
	
	            // Apply relative offset (+=/-=) if specified
	            adjusted = valueParts[ 1 ] ?
	            initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
	                +valueParts[ 2 ];
	            if ( tween ) {
	                tween.unit = unit;
	                tween.start = initialInUnit;
	                tween.end = adjusted;
	            }
	        }
	        return adjusted;
	    }
	    var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	    var rtagName = ( /<([\w:-]+)/ );
	
	    var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	    var wrapMap = {
	
	        // Support: IE9
	        option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
	        // XHTML parsers do not magically insert elements in the
	        // same way that tag soup parsers do. So we cannot shorten
	        // this by omitting <tbody> or other required elements.
	        thead: [ 1, "<table>", "</table>" ],
	        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
	        _default: [ 0, "", "" ]
	    };
	
	// Support: IE9
	    wrapMap.optgroup = wrapMap.option;
	
	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;
	
	
	    function getAll( context, tag ) {
	
	        // Support: IE9-11+
	        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
	        var ret = typeof context.getElementsByTagName !== "undefined" ?
	            context.getElementsByTagName( tag || "*" ) :
	            typeof context.querySelectorAll !== "undefined" ?
	                context.querySelectorAll( tag || "*" ) :
	                [];
	
	        return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
	            jQuery.merge( [ context ], ret ) :
	            ret;
	    }
	
	
	// Mark scripts as having already been evaluated
	    function setGlobalEval( elems, refElements ) {
	        var i = 0,
	            l = elems.length;
	
	        for ( ; i < l; i++ ) {
	            dataPriv.set(
	                elems[ i ],
	                "globalEval",
	                !refElements || dataPriv.get( refElements[ i ], "globalEval" )
	            );
	        }
	    }
	
	
	    var rhtml = /<|&#?\w+;/;
	
	    function buildFragment( elems, context, scripts, selection, ignored ) {
	        var elem, tmp, tag, wrap, contains, j,
	            fragment = context.createDocumentFragment(),
	            nodes = [],
	            i = 0,
	            l = elems.length;
	
	        for ( ; i < l; i++ ) {
	            elem = elems[ i ];
	
	            if ( elem || elem === 0 ) {
	
	                // Add nodes directly
	                if ( jQuery.type( elem ) === "object" ) {
	
	                    // Support: Android<4.1, PhantomJS<2
	                    // push.apply(_, arraylike) throws on ancient WebKit
	                    jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
	                    // Convert non-html into a text node
	                } else if ( !rhtml.test( elem ) ) {
	                    nodes.push( context.createTextNode( elem ) );
	
	                    // Convert html into DOM nodes
	                } else {
	                    tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
	                    // Deserialize a standard representation
	                    tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
	                    wrap = wrapMap[ tag ] || wrapMap._default;
	                    tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
	                    // Descend through wrappers to the right content
	                    j = wrap[ 0 ];
	                    while ( j-- ) {
	                        tmp = tmp.lastChild;
	                    }
	
	                    // Support: Android<4.1, PhantomJS<2
	                    // push.apply(_, arraylike) throws on ancient WebKit
	                    jQuery.merge( nodes, tmp.childNodes );
	
	                    // Remember the top-level container
	                    tmp = fragment.firstChild;
	
	                    // Ensure the created nodes are orphaned (#12392)
	                    tmp.textContent = "";
	                }
	            }
	        }
	
	        // Remove wrapper from fragment
	        fragment.textContent = "";
	
	        i = 0;
	        while ( ( elem = nodes[ i++ ] ) ) {
	
	            // Skip elements already in the context collection (trac-4087)
	            if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
	                if ( ignored ) {
	                    ignored.push( elem );
	                }
	                continue;
	            }
	
	            contains = jQuery.contains( elem.ownerDocument, elem );
	
	            // Append to fragment
	            tmp = getAll( fragment.appendChild( elem ), "script" );
	
	            // Preserve script evaluation history
	            if ( contains ) {
	                setGlobalEval( tmp );
	            }
	
	            // Capture executables
	            if ( scripts ) {
	                j = 0;
	                while ( ( elem = tmp[ j++ ] ) ) {
	                    if ( rscriptType.test( elem.type || "" ) ) {
	                        scripts.push( elem );
	                    }
	                }
	            }
	        }
	
	        return fragment;
	    }
	
	
	    ( function() {
	        var fragment = document.createDocumentFragment(),
	            div = fragment.appendChild( document.createElement( "div" ) ),
	            input = document.createElement( "input" );
	
	        // Support: Android 4.0-4.3, Safari<=5.1
	        // Check state lost if the name is set (#11217)
	        // Support: Windows Web Apps (WWA)
	        // `name` and `type` must use .setAttribute for WWA (#14901)
	        input.setAttribute( "type", "radio" );
	        input.setAttribute( "checked", "checked" );
	        input.setAttribute( "name", "t" );
	
	        div.appendChild( input );
	
	        // Support: Safari<=5.1, Android<4.2
	        // Older WebKit doesn't clone checked state correctly in fragments
	        support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
	        // Support: IE<=11+
	        // Make sure textarea (and checkbox) defaultValue is properly cloned
	        div.innerHTML = "<textarea>x</textarea>";
	        support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	    } )();
	
	
	    var
	        rkeyEvent = /^key/,
	        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	    function returnTrue() {
	        return true;
	    }
	
	    function returnFalse() {
	        return false;
	    }
	
	// Support: IE9
	// See #13393 for more info
	    function safeActiveElement() {
	        try {
	            return document.activeElement;
	        } catch ( err ) { }
	    }
	
	    function on( elem, types, selector, data, fn, one ) {
	        var origFn, type;
	
	        // Types can be a map of types/handlers
	        if ( typeof types === "object" ) {
	
	            // ( types-Object, selector, data )
	            if ( typeof selector !== "string" ) {
	
	                // ( types-Object, data )
	                data = data || selector;
	                selector = undefined;
	            }
	            for ( type in types ) {
	                on( elem, type, selector, data, types[ type ], one );
	            }
	            return elem;
	        }
	
	        if ( data == null && fn == null ) {
	
	            // ( types, fn )
	            fn = selector;
	            data = selector = undefined;
	        } else if ( fn == null ) {
	            if ( typeof selector === "string" ) {
	
	                // ( types, selector, fn )
	                fn = data;
	                data = undefined;
	            } else {
	
	                // ( types, data, fn )
	                fn = data;
	                data = selector;
	                selector = undefined;
	            }
	        }
	        if ( fn === false ) {
	            fn = returnFalse;
	        } else if ( !fn ) {
	            return elem;
	        }
	
	        if ( one === 1 ) {
	            origFn = fn;
	            fn = function( event ) {
	
	                // Can use an empty set, since event contains the info
	                jQuery().off( event );
	                return origFn.apply( this, arguments );
	            };
	
	            // Use same guid so caller can remove using origFn
	            fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	        }
	        return elem.each( function() {
	            jQuery.event.add( this, types, fn, data, selector );
	        } );
	    }
	
	    /*
	     * Helper functions for managing events -- not part of the public interface.
	     * Props to Dean Edwards' addEvent library for many of the ideas.
	     */
	    jQuery.event = {
	
	        global: {},
	
	        add: function( elem, types, handler, data, selector ) {
	
	            var handleObjIn, eventHandle, tmp,
	                events, t, handleObj,
	                special, handlers, type, namespaces, origType,
	                elemData = dataPriv.get( elem );
	
	            // Don't attach events to noData or text/comment nodes (but allow plain objects)
	            if ( !elemData ) {
	                return;
	            }
	
	            // Caller can pass in an object of custom data in lieu of the handler
	            if ( handler.handler ) {
	                handleObjIn = handler;
	                handler = handleObjIn.handler;
	                selector = handleObjIn.selector;
	            }
	
	            // Make sure that the handler has a unique ID, used to find/remove it later
	            if ( !handler.guid ) {
	                handler.guid = jQuery.guid++;
	            }
	
	            // Init the element's event structure and main handler, if this is the first
	            if ( !( events = elemData.events ) ) {
	                events = elemData.events = {};
	            }
	            if ( !( eventHandle = elemData.handle ) ) {
	                eventHandle = elemData.handle = function( e ) {
	
	                    // Discard the second event of a jQuery.event.trigger() and
	                    // when an event is called after a page has unloaded
	                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
	                        jQuery.event.dispatch.apply( elem, arguments ) : undefined;
	                };
	            }
	
	            // Handle multiple events separated by a space
	            types = ( types || "" ).match( rnotwhite ) || [ "" ];
	            t = types.length;
	            while ( t-- ) {
	                tmp = rtypenamespace.exec( types[ t ] ) || [];
	                type = origType = tmp[ 1 ];
	                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
	                // There *must* be a type, no attaching namespace-only handlers
	                if ( !type ) {
	                    continue;
	                }
	
	                // If event changes its type, use the special event handlers for the changed type
	                special = jQuery.event.special[ type ] || {};
	
	                // If selector defined, determine special event api type, otherwise given type
	                type = ( selector ? special.delegateType : special.bindType ) || type;
	
	                // Update special based on newly reset type
	                special = jQuery.event.special[ type ] || {};
	
	                // handleObj is passed to all event handlers
	                handleObj = jQuery.extend( {
	                    type: type,
	                    origType: origType,
	                    data: data,
	                    handler: handler,
	                    guid: handler.guid,
	                    selector: selector,
	                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
	                    namespace: namespaces.join( "." )
	                }, handleObjIn );
	
	                // Init the event handler queue if we're the first
	                if ( !( handlers = events[ type ] ) ) {
	                    handlers = events[ type ] = [];
	                    handlers.delegateCount = 0;
	
	                    // Only use addEventListener if the special events handler returns false
	                    if ( !special.setup ||
	                        special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
	                        if ( elem.addEventListener ) {
	                            elem.addEventListener( type, eventHandle );
	                        }
	                    }
	                }
	
	                if ( special.add ) {
	                    special.add.call( elem, handleObj );
	
	                    if ( !handleObj.handler.guid ) {
	                        handleObj.handler.guid = handler.guid;
	                    }
	                }
	
	                // Add to the element's handler list, delegates in front
	                if ( selector ) {
	                    handlers.splice( handlers.delegateCount++, 0, handleObj );
	                } else {
	                    handlers.push( handleObj );
	                }
	
	                // Keep track of which events have ever been used, for event optimization
	                jQuery.event.global[ type ] = true;
	            }
	
	        },
	
	        // Detach an event or set of events from an element
	        remove: function( elem, types, handler, selector, mappedTypes ) {
	
	            var j, origCount, tmp,
	                events, t, handleObj,
	                special, handlers, type, namespaces, origType,
	                elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
	            if ( !elemData || !( events = elemData.events ) ) {
	                return;
	            }
	
	            // Once for each type.namespace in types; type may be omitted
	            types = ( types || "" ).match( rnotwhite ) || [ "" ];
	            t = types.length;
	            while ( t-- ) {
	                tmp = rtypenamespace.exec( types[ t ] ) || [];
	                type = origType = tmp[ 1 ];
	                namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
	                // Unbind all events (on this namespace, if provided) for the element
	                if ( !type ) {
	                    for ( type in events ) {
	                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
	                    }
	                    continue;
	                }
	
	                special = jQuery.event.special[ type ] || {};
	                type = ( selector ? special.delegateType : special.bindType ) || type;
	                handlers = events[ type ] || [];
	                tmp = tmp[ 2 ] &&
	                    new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
	                // Remove matching events
	                origCount = j = handlers.length;
	                while ( j-- ) {
	                    handleObj = handlers[ j ];
	
	                    if ( ( mappedTypes || origType === handleObj.origType ) &&
	                        ( !handler || handler.guid === handleObj.guid ) &&
	                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
	                        ( !selector || selector === handleObj.selector ||
	                        selector === "**" && handleObj.selector ) ) {
	                        handlers.splice( j, 1 );
	
	                        if ( handleObj.selector ) {
	                            handlers.delegateCount--;
	                        }
	                        if ( special.remove ) {
	                            special.remove.call( elem, handleObj );
	                        }
	                    }
	                }
	
	                // Remove generic event handler if we removed something and no more handlers exist
	                // (avoids potential for endless recursion during removal of special event handlers)
	                if ( origCount && !handlers.length ) {
	                    if ( !special.teardown ||
	                        special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
	                        jQuery.removeEvent( elem, type, elemData.handle );
	                    }
	
	                    delete events[ type ];
	                }
	            }
	
	            // Remove data and the expando if it's no longer used
	            if ( jQuery.isEmptyObject( events ) ) {
	                dataPriv.remove( elem, "handle events" );
	            }
	        },
	
	        dispatch: function( event ) {
	
	            // Make a writable jQuery.Event from the native event object
	            event = jQuery.event.fix( event );
	
	            var i, j, ret, matched, handleObj,
	                handlerQueue = [],
	                args = slice.call( arguments ),
	                handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
	                special = jQuery.event.special[ event.type ] || {};
	
	            // Use the fix-ed jQuery.Event rather than the (read-only) native event
	            args[ 0 ] = event;
	            event.delegateTarget = this;
	
	            // Call the preDispatch hook for the mapped type, and let it bail if desired
	            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
	                return;
	            }
	
	            // Determine handlers
	            handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
	            // Run delegates first; they may want to stop propagation beneath us
	            i = 0;
	            while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
	                event.currentTarget = matched.elem;
	
	                j = 0;
	                while ( ( handleObj = matched.handlers[ j++ ] ) &&
	                !event.isImmediatePropagationStopped() ) {
	
	                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
	                    // a subset or equal to those in the bound event (both can have no namespace).
	                    if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
	                        event.handleObj = handleObj;
	                        event.data = handleObj.data;
	
	                        ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
	                        handleObj.handler ).apply( matched.elem, args );
	
	                        if ( ret !== undefined ) {
	                            if ( ( event.result = ret ) === false ) {
	                                event.preventDefault();
	                                event.stopPropagation();
	                            }
	                        }
	                    }
	                }
	            }
	
	            // Call the postDispatch hook for the mapped type
	            if ( special.postDispatch ) {
	                special.postDispatch.call( this, event );
	            }
	
	            return event.result;
	        },
	
	        handlers: function( event, handlers ) {
	            var i, matches, sel, handleObj,
	                handlerQueue = [],
	                delegateCount = handlers.delegateCount,
	                cur = event.target;
	
	            // Support (at least): Chrome, IE9
	            // Find delegate handlers
	            // Black-hole SVG <use> instance trees (#13180)
	            //
	            // Support: Firefox<=42+
	            // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	            if ( delegateCount && cur.nodeType &&
	                ( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
	                for ( ; cur !== this; cur = cur.parentNode || this ) {
	
	                    // Don't check non-elements (#13208)
	                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	                    if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
	                        matches = [];
	                        for ( i = 0; i < delegateCount; i++ ) {
	                            handleObj = handlers[ i ];
	
	                            // Don't conflict with Object.prototype properties (#13203)
	                            sel = handleObj.selector + " ";
	
	                            if ( matches[ sel ] === undefined ) {
	                                matches[ sel ] = handleObj.needsContext ?
	                                jQuery( sel, this ).index( cur ) > -1 :
	                                    jQuery.find( sel, this, null, [ cur ] ).length;
	                            }
	                            if ( matches[ sel ] ) {
	                                matches.push( handleObj );
	                            }
	                        }
	                        if ( matches.length ) {
	                            handlerQueue.push( { elem: cur, handlers: matches } );
	                        }
	                    }
	                }
	            }
	
	            // Add the remaining (directly-bound) handlers
	            if ( delegateCount < handlers.length ) {
	                handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
	            }
	
	            return handlerQueue;
	        },
	
	        // Includes some event props shared by KeyEvent and MouseEvent
	        props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
	        "metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
	        fixHooks: {},
	
	        keyHooks: {
	            props: "char charCode key keyCode".split( " " ),
	            filter: function( event, original ) {
	
	                // Add which for key events
	                if ( event.which == null ) {
	                    event.which = original.charCode != null ? original.charCode : original.keyCode;
	                }
	
	                return event;
	            }
	        },
	
	        mouseHooks: {
	            props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
	            "screenX screenY toElement" ).split( " " ),
	            filter: function( event, original ) {
	                var eventDoc, doc, body,
	                    button = original.button;
	
	                // Calculate pageX/Y if missing and clientX/Y available
	                if ( event.pageX == null && original.clientX != null ) {
	                    eventDoc = event.target.ownerDocument || document;
	                    doc = eventDoc.documentElement;
	                    body = eventDoc.body;
	
	                    event.pageX = original.clientX +
	                        ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
	                        ( doc && doc.clientLeft || body && body.clientLeft || 0 );
	                    event.pageY = original.clientY +
	                        ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
	                        ( doc && doc.clientTop  || body && body.clientTop  || 0 );
	                }
	
	                // Add which for click: 1 === left; 2 === middle; 3 === right
	                // Note: button is not normalized, so don't use it
	                if ( !event.which && button !== undefined ) {
	                    event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
	                }
	
	                return event;
	            }
	        },
	
	        fix: function( event ) {
	            if ( event[ jQuery.expando ] ) {
	                return event;
	            }
	
	            // Create a writable copy of the event object and normalize some properties
	            var i, prop, copy,
	                type = event.type,
	                originalEvent = event,
	                fixHook = this.fixHooks[ type ];
	
	            if ( !fixHook ) {
	                this.fixHooks[ type ] = fixHook =
	                    rmouseEvent.test( type ) ? this.mouseHooks :
	                        rkeyEvent.test( type ) ? this.keyHooks :
	                        {};
	            }
	            copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
	            event = new jQuery.Event( originalEvent );
	
	            i = copy.length;
	            while ( i-- ) {
	                prop = copy[ i ];
	                event[ prop ] = originalEvent[ prop ];
	            }
	
	            // Support: Cordova 2.5 (WebKit) (#13255)
	            // All events should have a target; Cordova deviceready doesn't
	            if ( !event.target ) {
	                event.target = document;
	            }
	
	            // Support: Safari 6.0+, Chrome<28
	            // Target should not be a text node (#504, #13143)
	            if ( event.target.nodeType === 3 ) {
	                event.target = event.target.parentNode;
	            }
	
	            return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	        },
	
	        special: {
	            load: {
	
	                // Prevent triggered image.load events from bubbling to window.load
	                noBubble: true
	            },
	            focus: {
	
	                // Fire native event if possible so blur/focus sequence is correct
	                trigger: function() {
	                    if ( this !== safeActiveElement() && this.focus ) {
	                        this.focus();
	                        return false;
	                    }
	                },
	                delegateType: "focusin"
	            },
	            blur: {
	                trigger: function() {
	                    if ( this === safeActiveElement() && this.blur ) {
	                        this.blur();
	                        return false;
	                    }
	                },
	                delegateType: "focusout"
	            },
	            click: {
	
	                // For checkbox, fire native event so checked state will be right
	                trigger: function() {
	                    if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
	                        this.click();
	                        return false;
	                    }
	                },
	
	                // For cross-browser consistency, don't fire native .click() on links
	                _default: function( event ) {
	                    return jQuery.nodeName( event.target, "a" );
	                }
	            },
	
	            beforeunload: {
	                postDispatch: function( event ) {
	
	                    // Support: Firefox 20+
	                    // Firefox doesn't alert if the returnValue field is not set.
	                    if ( event.result !== undefined && event.originalEvent ) {
	                        event.originalEvent.returnValue = event.result;
	                    }
	                }
	            }
	        }
	    };
	
	    jQuery.removeEvent = function( elem, type, handle ) {
	
	        // This "if" is needed for plain objects
	        if ( elem.removeEventListener ) {
	            elem.removeEventListener( type, handle );
	        }
	    };
	
	    jQuery.Event = function( src, props ) {
	
	        // Allow instantiation without the 'new' keyword
	        if ( !( this instanceof jQuery.Event ) ) {
	            return new jQuery.Event( src, props );
	        }
	
	        // Event object
	        if ( src && src.type ) {
	            this.originalEvent = src;
	            this.type = src.type;
	
	            // Events bubbling up the document may have been marked as prevented
	            // by a handler lower down the tree; reflect the correct value.
	            this.isDefaultPrevented = src.defaultPrevented ||
	            src.defaultPrevented === undefined &&
	
	                // Support: Android<4.0
	            src.returnValue === false ?
	                returnTrue :
	                returnFalse;
	
	            // Event type
	        } else {
	            this.type = src;
	        }
	
	        // Put explicitly provided properties onto the event object
	        if ( props ) {
	            jQuery.extend( this, props );
	        }
	
	        // Create a timestamp if incoming event doesn't have one
	        this.timeStamp = src && src.timeStamp || jQuery.now();
	
	        // Mark it as fixed
	        this[ jQuery.expando ] = true;
	    };
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	    jQuery.Event.prototype = {
	        constructor: jQuery.Event,
	        isDefaultPrevented: returnFalse,
	        isPropagationStopped: returnFalse,
	        isImmediatePropagationStopped: returnFalse,
	        isSimulated: false,
	
	        preventDefault: function() {
	            var e = this.originalEvent;
	
	            this.isDefaultPrevented = returnTrue;
	
	            if ( e && !this.isSimulated ) {
	                e.preventDefault();
	            }
	        },
	        stopPropagation: function() {
	            var e = this.originalEvent;
	
	            this.isPropagationStopped = returnTrue;
	
	            if ( e && !this.isSimulated ) {
	                e.stopPropagation();
	            }
	        },
	        stopImmediatePropagation: function() {
	            var e = this.originalEvent;
	
	            this.isImmediatePropagationStopped = returnTrue;
	
	            if ( e && !this.isSimulated ) {
	                e.stopImmediatePropagation();
	            }
	
	            this.stopPropagation();
	        }
	    };
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	    jQuery.each( {
	        mouseenter: "mouseover",
	        mouseleave: "mouseout",
	        pointerenter: "pointerover",
	        pointerleave: "pointerout"
	    }, function( orig, fix ) {
	        jQuery.event.special[ orig ] = {
	            delegateType: fix,
	            bindType: fix,
	
	            handle: function( event ) {
	                var ret,
	                    target = this,
	                    related = event.relatedTarget,
	                    handleObj = event.handleObj;
	
	                // For mouseenter/leave call the handler if related is outside the target.
	                // NB: No relatedTarget if the mouse left/entered the browser window
	                if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
	                    event.type = handleObj.origType;
	                    ret = handleObj.handler.apply( this, arguments );
	                    event.type = fix;
	                }
	                return ret;
	            }
	        };
	    } );
	
	    jQuery.fn.extend( {
	        on: function( types, selector, data, fn ) {
	            return on( this, types, selector, data, fn );
	        },
	        one: function( types, selector, data, fn ) {
	            return on( this, types, selector, data, fn, 1 );
	        },
	        off: function( types, selector, fn ) {
	            var handleObj, type;
	            if ( types && types.preventDefault && types.handleObj ) {
	
	                // ( event )  dispatched jQuery.Event
	                handleObj = types.handleObj;
	                jQuery( types.delegateTarget ).off(
	                    handleObj.namespace ?
	                    handleObj.origType + "." + handleObj.namespace :
	                        handleObj.origType,
	                    handleObj.selector,
	                    handleObj.handler
	                );
	                return this;
	            }
	            if ( typeof types === "object" ) {
	
	                // ( types-object [, selector] )
	                for ( type in types ) {
	                    this.off( type, selector, types[ type ] );
	                }
	                return this;
	            }
	            if ( selector === false || typeof selector === "function" ) {
	
	                // ( types [, fn] )
	                fn = selector;
	                selector = undefined;
	            }
	            if ( fn === false ) {
	                fn = returnFalse;
	            }
	            return this.each( function() {
	                jQuery.event.remove( this, types, fn, selector );
	            } );
	        }
	    } );
	
	
	    var
	        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
	    // Support: IE 10-11, Edge 10240+
	    // In IE/Edge using regex groups here causes severe slowdowns.
	    // See https://connect.microsoft.com/IE/feedback/details/1736512/
	        rnoInnerhtml = /<script|<style|<link/i,
	
	    // checked="checked" or checked
	        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	        rscriptTypeMasked = /^true\/(.*)/,
	        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	    function manipulationTarget( elem, content ) {
	        return jQuery.nodeName( elem, "table" ) &&
	        jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
	        elem.getElementsByTagName( "tbody" )[ 0 ] ||
	        elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
	            elem;
	    }
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	    function disableScript( elem ) {
	        elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	        return elem;
	    }
	    function restoreScript( elem ) {
	        var match = rscriptTypeMasked.exec( elem.type );
	
	        if ( match ) {
	            elem.type = match[ 1 ];
	        } else {
	            elem.removeAttribute( "type" );
	        }
	
	        return elem;
	    }
	
	    function cloneCopyEvent( src, dest ) {
	        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
	        if ( dest.nodeType !== 1 ) {
	            return;
	        }
	
	        // 1. Copy private data: events, handlers, etc.
	        if ( dataPriv.hasData( src ) ) {
	            pdataOld = dataPriv.access( src );
	            pdataCur = dataPriv.set( dest, pdataOld );
	            events = pdataOld.events;
	
	            if ( events ) {
	                delete pdataCur.handle;
	                pdataCur.events = {};
	
	                for ( type in events ) {
	                    for ( i = 0, l = events[ type ].length; i < l; i++ ) {
	                        jQuery.event.add( dest, type, events[ type ][ i ] );
	                    }
	                }
	            }
	        }
	
	        // 2. Copy user data
	        if ( dataUser.hasData( src ) ) {
	            udataOld = dataUser.access( src );
	            udataCur = jQuery.extend( {}, udataOld );
	
	            dataUser.set( dest, udataCur );
	        }
	    }
	
	// Fix IE bugs, see support tests
	    function fixInput( src, dest ) {
	        var nodeName = dest.nodeName.toLowerCase();
	
	        // Fails to persist the checked state of a cloned checkbox or radio button.
	        if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
	            dest.checked = src.checked;
	
	            // Fails to return the selected option to the default selected state when cloning options
	        } else if ( nodeName === "input" || nodeName === "textarea" ) {
	            dest.defaultValue = src.defaultValue;
	        }
	    }
	
	    function domManip( collection, args, callback, ignored ) {
	
	        // Flatten any nested arrays
	        args = concat.apply( [], args );
	
	        var fragment, first, scripts, hasScripts, node, doc,
	            i = 0,
	            l = collection.length,
	            iNoClone = l - 1,
	            value = args[ 0 ],
	            isFunction = jQuery.isFunction( value );
	
	        // We can't cloneNode fragments that contain checked, in WebKit
	        if ( isFunction ||
	            ( l > 1 && typeof value === "string" &&
	            !support.checkClone && rchecked.test( value ) ) ) {
	            return collection.each( function( index ) {
	                var self = collection.eq( index );
	                if ( isFunction ) {
	                    args[ 0 ] = value.call( this, index, self.html() );
	                }
	                domManip( self, args, callback, ignored );
	            } );
	        }
	
	        if ( l ) {
	            fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
	            first = fragment.firstChild;
	
	            if ( fragment.childNodes.length === 1 ) {
	                fragment = first;
	            }
	
	            // Require either new content or an interest in ignored elements to invoke the callback
	            if ( first || ignored ) {
	                scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
	                hasScripts = scripts.length;
	
	                // Use the original fragment for the last item
	                // instead of the first because it can end up
	                // being emptied incorrectly in certain situations (#8070).
	                for ( ; i < l; i++ ) {
	                    node = fragment;
	
	                    if ( i !== iNoClone ) {
	                        node = jQuery.clone( node, true, true );
	
	                        // Keep references to cloned scripts for later restoration
	                        if ( hasScripts ) {
	
	                            // Support: Android<4.1, PhantomJS<2
	                            // push.apply(_, arraylike) throws on ancient WebKit
	                            jQuery.merge( scripts, getAll( node, "script" ) );
	                        }
	                    }
	
	                    callback.call( collection[ i ], node, i );
	                }
	
	                if ( hasScripts ) {
	                    doc = scripts[ scripts.length - 1 ].ownerDocument;
	
	                    // Reenable scripts
	                    jQuery.map( scripts, restoreScript );
	
	                    // Evaluate executable scripts on first document insertion
	                    for ( i = 0; i < hasScripts; i++ ) {
	                        node = scripts[ i ];
	                        if ( rscriptType.test( node.type || "" ) &&
	                            !dataPriv.access( node, "globalEval" ) &&
	                            jQuery.contains( doc, node ) ) {
	
	                            if ( node.src ) {
	
	                                // Optional AJAX dependency, but won't run scripts if not present
	                                if ( jQuery._evalUrl ) {
	                                    jQuery._evalUrl( node.src );
	                                }
	                            } else {
	                                jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        return collection;
	    }
	
	    function remove( elem, selector, keepData ) {
	        var node,
	            nodes = selector ? jQuery.filter( selector, elem ) : elem,
	            i = 0;
	
	        for ( ; ( node = nodes[ i ] ) != null; i++ ) {
	            if ( !keepData && node.nodeType === 1 ) {
	                jQuery.cleanData( getAll( node ) );
	            }
	
	            if ( node.parentNode ) {
	                if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
	                    setGlobalEval( getAll( node, "script" ) );
	                }
	                node.parentNode.removeChild( node );
	            }
	        }
	
	        return elem;
	    }
	
	    jQuery.extend( {
	        htmlPrefilter: function( html ) {
	            return html.replace( rxhtmlTag, "<$1></$2>" );
	        },
	
	        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
	            var i, l, srcElements, destElements,
	                clone = elem.cloneNode( true ),
	                inPage = jQuery.contains( elem.ownerDocument, elem );
	
	            // Fix IE cloning issues
	            if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
	                !jQuery.isXMLDoc( elem ) ) {
	
	                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	                destElements = getAll( clone );
	                srcElements = getAll( elem );
	
	                for ( i = 0, l = srcElements.length; i < l; i++ ) {
	                    fixInput( srcElements[ i ], destElements[ i ] );
	                }
	            }
	
	            // Copy the events from the original to the clone
	            if ( dataAndEvents ) {
	                if ( deepDataAndEvents ) {
	                    srcElements = srcElements || getAll( elem );
	                    destElements = destElements || getAll( clone );
	
	                    for ( i = 0, l = srcElements.length; i < l; i++ ) {
	                        cloneCopyEvent( srcElements[ i ], destElements[ i ] );
	                    }
	                } else {
	                    cloneCopyEvent( elem, clone );
	                }
	            }
	
	            // Preserve script evaluation history
	            destElements = getAll( clone, "script" );
	            if ( destElements.length > 0 ) {
	                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
	            }
	
	            // Return the cloned set
	            return clone;
	        },
	
	        cleanData: function( elems ) {
	            var data, elem, type,
	                special = jQuery.event.special,
	                i = 0;
	
	            for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
	                if ( acceptData( elem ) ) {
	                    if ( ( data = elem[ dataPriv.expando ] ) ) {
	                        if ( data.events ) {
	                            for ( type in data.events ) {
	                                if ( special[ type ] ) {
	                                    jQuery.event.remove( elem, type );
	
	                                    // This is a shortcut to avoid jQuery.event.remove's overhead
	                                } else {
	                                    jQuery.removeEvent( elem, type, data.handle );
	                                }
	                            }
	                        }
	
	                        // Support: Chrome <= 35-45+
	                        // Assign undefined instead of using delete, see Data#remove
	                        elem[ dataPriv.expando ] = undefined;
	                    }
	                    if ( elem[ dataUser.expando ] ) {
	
	                        // Support: Chrome <= 35-45+
	                        // Assign undefined instead of using delete, see Data#remove
	                        elem[ dataUser.expando ] = undefined;
	                    }
	                }
	            }
	        }
	    } );
	
	    jQuery.fn.extend( {
	
	        // Keep domManip exposed until 3.0 (gh-2225)
	        domManip: domManip,
	
	        detach: function( selector ) {
	            return remove( this, selector, true );
	        },
	
	        remove: function( selector ) {
	            return remove( this, selector );
	        },
	
	        text: function( value ) {
	            return access( this, function( value ) {
	                return value === undefined ?
	                    jQuery.text( this ) :
	                    this.empty().each( function() {
	                        if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
	                            this.textContent = value;
	                        }
	                    } );
	            }, null, value, arguments.length );
	        },
	
	        append: function() {
	            return domManip( this, arguments, function( elem ) {
	                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
	                    var target = manipulationTarget( this, elem );
	                    target.appendChild( elem );
	                }
	            } );
	        },
	
	        prepend: function() {
	            return domManip( this, arguments, function( elem ) {
	                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
	                    var target = manipulationTarget( this, elem );
	                    target.insertBefore( elem, target.firstChild );
	                }
	            } );
	        },
	
	        before: function() {
	            return domManip( this, arguments, function( elem ) {
	                if ( this.parentNode ) {
	                    this.parentNode.insertBefore( elem, this );
	                }
	            } );
	        },
	
	        after: function() {
	            return domManip( this, arguments, function( elem ) {
	                if ( this.parentNode ) {
	                    this.parentNode.insertBefore( elem, this.nextSibling );
	                }
	            } );
	        },
	
	        empty: function() {
	            var elem,
	                i = 0;
	
	            for ( ; ( elem = this[ i ] ) != null; i++ ) {
	                if ( elem.nodeType === 1 ) {
	
	                    // Prevent memory leaks
	                    jQuery.cleanData( getAll( elem, false ) );
	
	                    // Remove any remaining nodes
	                    elem.textContent = "";
	                }
	            }
	
	            return this;
	        },
	
	        clone: function( dataAndEvents, deepDataAndEvents ) {
	            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
	            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
	            return this.map( function() {
	                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
	            } );
	        },
	
	        html: function( value ) {
	            return access( this, function( value ) {
	                var elem = this[ 0 ] || {},
	                    i = 0,
	                    l = this.length;
	
	                if ( value === undefined && elem.nodeType === 1 ) {
	                    return elem.innerHTML;
	                }
	
	                // See if we can take a shortcut and just use innerHTML
	                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
	                    !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
	                    value = jQuery.htmlPrefilter( value );
	
	                    try {
	                        for ( ; i < l; i++ ) {
	                            elem = this[ i ] || {};
	
	                            // Remove element nodes and prevent memory leaks
	                            if ( elem.nodeType === 1 ) {
	                                jQuery.cleanData( getAll( elem, false ) );
	                                elem.innerHTML = value;
	                            }
	                        }
	
	                        elem = 0;
	
	                        // If using innerHTML throws an exception, use the fallback method
	                    } catch ( e ) {}
	                }
	
	                if ( elem ) {
	                    this.empty().append( value );
	                }
	            }, null, value, arguments.length );
	        },
	
	        replaceWith: function() {
	            var ignored = [];
	
	            // Make the changes, replacing each non-ignored context element with the new content
	            return domManip( this, arguments, function( elem ) {
	                var parent = this.parentNode;
	
	                if ( jQuery.inArray( this, ignored ) < 0 ) {
	                    jQuery.cleanData( getAll( this ) );
	                    if ( parent ) {
	                        parent.replaceChild( elem, this );
	                    }
	                }
	
	                // Force callback invocation
	            }, ignored );
	        }
	    } );
	
	    jQuery.each( {
	        appendTo: "append",
	        prependTo: "prepend",
	        insertBefore: "before",
	        insertAfter: "after",
	        replaceAll: "replaceWith"
	    }, function( name, original ) {
	        jQuery.fn[ name ] = function( selector ) {
	            var elems,
	                ret = [],
	                insert = jQuery( selector ),
	                last = insert.length - 1,
	                i = 0;
	
	            for ( ; i <= last; i++ ) {
	                elems = i === last ? this : this.clone( true );
	                jQuery( insert[ i ] )[ original ]( elems );
	
	                // Support: QtWebKit
	                // .get() because push.apply(_, arraylike) throws
	                push.apply( ret, elems.get() );
	            }
	
	            return this.pushStack( ret );
	        };
	    } );
	
	
	    var iframe,
	        elemdisplay = {
	
	            // Support: Firefox
	            // We have to pre-define these values for FF (#10227)
	            HTML: "block",
	            BODY: "block"
	        };
	
	    /**
	     * Retrieve the actual display of a element
	     * @param {String} name nodeName of the element
	     * @param {Object} doc Document object
	     */
	
	// Called only from within defaultDisplay
	    function actualDisplay( name, doc ) {
	        var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
	            display = jQuery.css( elem[ 0 ], "display" );
	
	        // We don't have any data stored on the element,
	        // so use "detach" method as fast way to get rid of the element
	        elem.detach();
	
	        return display;
	    }
	
	    /**
	     * Try to determine the default display value of an element
	     * @param {String} nodeName
	     */
	    function defaultDisplay( nodeName ) {
	        var doc = document,
	            display = elemdisplay[ nodeName ];
	
	        if ( !display ) {
	            display = actualDisplay( nodeName, doc );
	
	            // If the simple way fails, read from inside an iframe
	            if ( display === "none" || !display ) {
	
	                // Use the already-created iframe if possible
	                iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
	                    .appendTo( doc.documentElement );
	
	                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	                doc = iframe[ 0 ].contentDocument;
	
	                // Support: IE
	                doc.write();
	                doc.close();
	
	                display = actualDisplay( nodeName, doc );
	                iframe.detach();
	            }
	
	            // Store the correct default display
	            elemdisplay[ nodeName ] = display;
	        }
	
	        return display;
	    }
	    var rmargin = ( /^margin/ );
	
	    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	    var getStyles = function( elem ) {
	
	        // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	        // IE throws on elements created in popups
	        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	        var view = elem.ownerDocument.defaultView;
	
	        if ( !view || !view.opener ) {
	            view = window;
	        }
	
	        return view.getComputedStyle( elem );
	    };
	
	    var swap = function( elem, options, callback, args ) {
	        var ret, name,
	            old = {};
	
	        // Remember the old values, and insert the new ones
	        for ( name in options ) {
	            old[ name ] = elem.style[ name ];
	            elem.style[ name ] = options[ name ];
	        }
	
	        ret = callback.apply( elem, args || [] );
	
	        // Revert the old values
	        for ( name in options ) {
	            elem.style[ name ] = old[ name ];
	        }
	
	        return ret;
	    };
	
	
	    var documentElement = document.documentElement;
	
	
	
	    ( function() {
	        var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
	            container = document.createElement( "div" ),
	            div = document.createElement( "div" );
	
	        // Finish early in limited (non-browser) environments
	        if ( !div.style ) {
	            return;
	        }
	
	        // Support: IE9-11+
	        // Style of cloned element affects source element cloned (#8908)
	        div.style.backgroundClip = "content-box";
	        div.cloneNode( true ).style.backgroundClip = "";
	        support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
	        container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
	            "padding:0;margin-top:1px;position:absolute";
	        container.appendChild( div );
	
	        // Executing both pixelPosition & boxSizingReliable tests require only one layout
	        // so they're executed at the same time to save the second computation.
	        function computeStyleTests() {
	            div.style.cssText =
	
	                // Support: Firefox<29, Android 2.3
	                // Vendor-prefix box-sizing
	                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
	                "position:relative;display:block;" +
	                "margin:auto;border:1px;padding:1px;" +
	                "top:1%;width:50%";
	            div.innerHTML = "";
	            documentElement.appendChild( container );
	
	            var divStyle = window.getComputedStyle( div );
	            pixelPositionVal = divStyle.top !== "1%";
	            reliableMarginLeftVal = divStyle.marginLeft === "2px";
	            boxSizingReliableVal = divStyle.width === "4px";
	
	            // Support: Android 4.0 - 4.3 only
	            // Some styles come back with percentage values, even though they shouldn't
	            div.style.marginRight = "50%";
	            pixelMarginRightVal = divStyle.marginRight === "4px";
	
	            documentElement.removeChild( container );
	        }
	
	        jQuery.extend( support, {
	            pixelPosition: function() {
	
	                // This test is executed only once but we still do memoizing
	                // since we can use the boxSizingReliable pre-computing.
	                // No need to check if the test was already performed, though.
	                computeStyleTests();
	                return pixelPositionVal;
	            },
	            boxSizingReliable: function() {
	                if ( boxSizingReliableVal == null ) {
	                    computeStyleTests();
	                }
	                return boxSizingReliableVal;
	            },
	            pixelMarginRight: function() {
	
	                // Support: Android 4.0-4.3
	                // We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	                // since that compresses better and they're computed together anyway.
	                if ( boxSizingReliableVal == null ) {
	                    computeStyleTests();
	                }
	                return pixelMarginRightVal;
	            },
	            reliableMarginLeft: function() {
	
	                // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	                if ( boxSizingReliableVal == null ) {
	                    computeStyleTests();
	                }
	                return reliableMarginLeftVal;
	            },
	            reliableMarginRight: function() {
	
	                // Support: Android 2.3
	                // Check if div with explicit width and no margin-right incorrectly
	                // gets computed margin-right based on width of container. (#3333)
	                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	                // This support function is only executed once so no memoizing is needed.
	                var ret,
	                    marginDiv = div.appendChild( document.createElement( "div" ) );
	
	                // Reset CSS: box-sizing; display; margin; border; padding
	                marginDiv.style.cssText = div.style.cssText =
	
	                    // Support: Android 2.3
	                    // Vendor-prefix box-sizing
	                    "-webkit-box-sizing:content-box;box-sizing:content-box;" +
	                    "display:block;margin:0;border:0;padding:0";
	                marginDiv.style.marginRight = marginDiv.style.width = "0";
	                div.style.width = "1px";
	                documentElement.appendChild( container );
	
	                ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
	                documentElement.removeChild( container );
	                div.removeChild( marginDiv );
	
	                return ret;
	            }
	        } );
	    } )();
	
	
	    function curCSS( elem, name, computed ) {
	        var width, minWidth, maxWidth, ret,
	            style = elem.style;
	
	        computed = computed || getStyles( elem );
	        ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
	        // Support: Opera 12.1x only
	        // Fall back to style even without computed
	        // computed is undefined for elems on document fragments
	        if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
	            ret = jQuery.style( elem, name );
	        }
	
	        // Support: IE9
	        // getPropertyValue is only needed for .css('filter') (#12537)
	        if ( computed ) {
	
	            // A tribute to the "awesome hack by Dean Edwards"
	            // Android Browser returns percentage for some values,
	            // but width seems to be reliably pixels.
	            // This is against the CSSOM draft spec:
	            // http://dev.w3.org/csswg/cssom/#resolved-values
	            if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
	                // Remember the original values
	                width = style.width;
	                minWidth = style.minWidth;
	                maxWidth = style.maxWidth;
	
	                // Put in the new values to get a computed value out
	                style.minWidth = style.maxWidth = style.width = ret;
	                ret = computed.width;
	
	                // Revert the changed values
	                style.width = width;
	                style.minWidth = minWidth;
	                style.maxWidth = maxWidth;
	            }
	        }
	
	        return ret !== undefined ?
	
	            // Support: IE9-11+
	            // IE returns zIndex value as an integer.
	        ret + "" :
	            ret;
	    }
	
	
	    function addGetHookIf( conditionFn, hookFn ) {
	
	        // Define the hook, we'll check on the first run if it's really needed.
	        return {
	            get: function() {
	                if ( conditionFn() ) {
	
	                    // Hook not needed (or it's not possible to use it due
	                    // to missing dependency), remove it.
	                    delete this.get;
	                    return;
	                }
	
	                // Hook needed; redefine it so that the support test is not executed again.
	                return ( this.get = hookFn ).apply( this, arguments );
	            }
	        };
	    }
	
	
	    var
	
	    // Swappable if display is none or starts with table
	    // except "table", "table-cell", or "table-caption"
	    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
	        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	        cssNormalTransform = {
	            letterSpacing: "0",
	            fontWeight: "400"
	        },
	
	        cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	        emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	    function vendorPropName( name ) {
	
	        // Shortcut for names that are not vendor prefixed
	        if ( name in emptyStyle ) {
	            return name;
	        }
	
	        // Check for vendor prefixed names
	        var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
	            i = cssPrefixes.length;
	
	        while ( i-- ) {
	            name = cssPrefixes[ i ] + capName;
	            if ( name in emptyStyle ) {
	                return name;
	            }
	        }
	    }
	
	    function setPositiveNumber( elem, value, subtract ) {
	
	        // Any relative (+/-) values have already been
	        // normalized at this point
	        var matches = rcssNum.exec( value );
	        return matches ?
	
	            // Guard against undefined "subtract", e.g., when used as in cssHooks
	        Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
	            value;
	    }
	
	    function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	        var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
	                // If we already have the right measurement, avoid augmentation
	                4 :
	
	                // Otherwise initialize for horizontal or vertical properties
	                name === "width" ? 1 : 0,
	
	            val = 0;
	
	        for ( ; i < 4; i += 2 ) {
	
	            // Both box models exclude margin, so add it if we want it
	            if ( extra === "margin" ) {
	                val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
	            }
	
	            if ( isBorderBox ) {
	
	                // border-box includes padding, so remove it if we want content
	                if ( extra === "content" ) {
	                    val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	                }
	
	                // At this point, extra isn't border nor margin, so remove border
	                if ( extra !== "margin" ) {
	                    val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
	                }
	            } else {
	
	                // At this point, extra isn't content, so add padding
	                val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
	                // At this point, extra isn't content nor padding, so add border
	                if ( extra !== "padding" ) {
	                    val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
	                }
	            }
	        }
	
	        return val;
	    }
	
	    function getWidthOrHeight( elem, name, extra ) {
	
	        // Start with offset property, which is equivalent to the border-box value
	        var valueIsBorderBox = true,
	            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
	            styles = getStyles( elem ),
	            isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
	        // Some non-html elements return undefined for offsetWidth, so check for null/undefined
	        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	        if ( val <= 0 || val == null ) {
	
	            // Fall back to computed then uncomputed css if necessary
	            val = curCSS( elem, name, styles );
	            if ( val < 0 || val == null ) {
	                val = elem.style[ name ];
	            }
	
	            // Computed unit is not pixels. Stop here and return.
	            if ( rnumnonpx.test( val ) ) {
	                return val;
	            }
	
	            // Check for style in case a browser which returns unreliable values
	            // for getComputedStyle silently falls back to the reliable elem.style
	            valueIsBorderBox = isBorderBox &&
	                ( support.boxSizingReliable() || val === elem.style[ name ] );
	
	            // Normalize "", auto, and prepare for extra
	            val = parseFloat( val ) || 0;
	        }
	
	        // Use the active box-sizing model to add/subtract irrelevant styles
	        return ( val +
	                augmentWidthOrHeight(
	                    elem,
	                    name,
	                    extra || ( isBorderBox ? "border" : "content" ),
	                    valueIsBorderBox,
	                    styles
	                )
	            ) + "px";
	    }
	
	    function showHide( elements, show ) {
	        var display, elem, hidden,
	            values = [],
	            index = 0,
	            length = elements.length;
	
	        for ( ; index < length; index++ ) {
	            elem = elements[ index ];
	            if ( !elem.style ) {
	                continue;
	            }
	
	            values[ index ] = dataPriv.get( elem, "olddisplay" );
	            display = elem.style.display;
	            if ( show ) {
	
	                // Reset the inline display of this element to learn if it is
	                // being hidden by cascaded rules or not
	                if ( !values[ index ] && display === "none" ) {
	                    elem.style.display = "";
	                }
	
	                // Set elements which have been overridden with display: none
	                // in a stylesheet to whatever the default browser style is
	                // for such an element
	                if ( elem.style.display === "" && isHidden( elem ) ) {
	                    values[ index ] = dataPriv.access(
	                        elem,
	                        "olddisplay",
	                        defaultDisplay( elem.nodeName )
	                    );
	                }
	            } else {
	                hidden = isHidden( elem );
	
	                if ( display !== "none" || !hidden ) {
	                    dataPriv.set(
	                        elem,
	                        "olddisplay",
	                        hidden ? display : jQuery.css( elem, "display" )
	                    );
	                }
	            }
	        }
	
	        // Set the display of most of the elements in a second loop
	        // to avoid the constant reflow
	        for ( index = 0; index < length; index++ ) {
	            elem = elements[ index ];
	            if ( !elem.style ) {
	                continue;
	            }
	            if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
	                elem.style.display = show ? values[ index ] || "" : "none";
	            }
	        }
	
	        return elements;
	    }
	
	    jQuery.extend( {
	
	        // Add in style property hooks for overriding the default
	        // behavior of getting and setting a style property
	        cssHooks: {
	            opacity: {
	                get: function( elem, computed ) {
	                    if ( computed ) {
	
	                        // We should always get a number back from opacity
	                        var ret = curCSS( elem, "opacity" );
	                        return ret === "" ? "1" : ret;
	                    }
	                }
	            }
	        },
	
	        // Don't automatically add "px" to these possibly-unitless properties
	        cssNumber: {
	            "animationIterationCount": true,
	            "columnCount": true,
	            "fillOpacity": true,
	            "flexGrow": true,
	            "flexShrink": true,
	            "fontWeight": true,
	            "lineHeight": true,
	            "opacity": true,
	            "order": true,
	            "orphans": true,
	            "widows": true,
	            "zIndex": true,
	            "zoom": true
	        },
	
	        // Add in properties whose names you wish to fix before
	        // setting or getting the value
	        cssProps: {
	            "float": "cssFloat"
	        },
	
	        // Get and set the style property on a DOM Node
	        style: function( elem, name, value, extra ) {
	
	            // Don't set styles on text and comment nodes
	            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
	                return;
	            }
	
	            // Make sure that we're working with the right name
	            var ret, type, hooks,
	                origName = jQuery.camelCase( name ),
	                style = elem.style;
	
	            name = jQuery.cssProps[ origName ] ||
	                ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
	            // Gets hook for the prefixed version, then unprefixed version
	            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
	            // Check if we're setting a value
	            if ( value !== undefined ) {
	                type = typeof value;
	
	                // Convert "+=" or "-=" to relative numbers (#7345)
	                if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
	                    value = adjustCSS( elem, name, ret );
	
	                    // Fixes bug #9237
	                    type = "number";
	                }
	
	                // Make sure that null and NaN values aren't set (#7116)
	                if ( value == null || value !== value ) {
	                    return;
	                }
	
	                // If a number was passed in, add the unit (except for certain CSS properties)
	                if ( type === "number" ) {
	                    value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
	                }
	
	                // Support: IE9-11+
	                // background-* props affect original clone's values
	                if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
	                    style[ name ] = "inherit";
	                }
	
	                // If a hook was provided, use that value, otherwise just set the specified value
	                if ( !hooks || !( "set" in hooks ) ||
	                    ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
	                    style[ name ] = value;
	                }
	
	            } else {
	
	                // If a hook was provided get the non-computed value from there
	                if ( hooks && "get" in hooks &&
	                    ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
	                    return ret;
	                }
	
	                // Otherwise just get the value from the style object
	                return style[ name ];
	            }
	        },
	
	        css: function( elem, name, extra, styles ) {
	            var val, num, hooks,
	                origName = jQuery.camelCase( name );
	
	            // Make sure that we're working with the right name
	            name = jQuery.cssProps[ origName ] ||
	                ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
	            // Try prefixed name followed by the unprefixed name
	            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
	            // If a hook was provided get the computed value from there
	            if ( hooks && "get" in hooks ) {
	                val = hooks.get( elem, true, extra );
	            }
	
	            // Otherwise, if a way to get the computed value exists, use that
	            if ( val === undefined ) {
	                val = curCSS( elem, name, styles );
	            }
	
	            // Convert "normal" to computed value
	            if ( val === "normal" && name in cssNormalTransform ) {
	                val = cssNormalTransform[ name ];
	            }
	
	            // Make numeric if forced or a qualifier was provided and val looks numeric
	            if ( extra === "" || extra ) {
	                num = parseFloat( val );
	                return extra === true || isFinite( num ) ? num || 0 : val;
	            }
	            return val;
	        }
	    } );
	
	    jQuery.each( [ "height", "width" ], function( i, name ) {
	        jQuery.cssHooks[ name ] = {
	            get: function( elem, computed, extra ) {
	                if ( computed ) {
	
	                    // Certain elements can have dimension info if we invisibly show them
	                    // but it must have a current display style that would benefit
	                    return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	                    elem.offsetWidth === 0 ?
	                        swap( elem, cssShow, function() {
	                            return getWidthOrHeight( elem, name, extra );
	                        } ) :
	                        getWidthOrHeight( elem, name, extra );
	                }
	            },
	
	            set: function( elem, value, extra ) {
	                var matches,
	                    styles = extra && getStyles( elem ),
	                    subtract = extra && augmentWidthOrHeight(
	                            elem,
	                            name,
	                            extra,
	                            jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
	                            styles
	                        );
	
	                // Convert to pixels if value adjustment is needed
	                if ( subtract && ( matches = rcssNum.exec( value ) ) &&
	                    ( matches[ 3 ] || "px" ) !== "px" ) {
	
	                    elem.style[ name ] = value;
	                    value = jQuery.css( elem, name );
	                }
	
	                return setPositiveNumber( elem, value, subtract );
	            }
	        };
	    } );
	
	    jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	        function( elem, computed ) {
	            if ( computed ) {
	                return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
	                        elem.getBoundingClientRect().left -
	                        swap( elem, { marginLeft: 0 }, function() {
	                            return elem.getBoundingClientRect().left;
	                        } )
	                    ) + "px";
	            }
	        }
	    );
	
	// Support: Android 2.3
	    jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	        function( elem, computed ) {
	            if ( computed ) {
	                return swap( elem, { "display": "inline-block" },
	                    curCSS, [ elem, "marginRight" ] );
	            }
	        }
	    );
	
	// These hooks are used by animate to expand properties
	    jQuery.each( {
	        margin: "",
	        padding: "",
	        border: "Width"
	    }, function( prefix, suffix ) {
	        jQuery.cssHooks[ prefix + suffix ] = {
	            expand: function( value ) {
	                var i = 0,
	                    expanded = {},
	
	                // Assumes a single number if not a string
	                    parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
	                for ( ; i < 4; i++ ) {
	                    expanded[ prefix + cssExpand[ i ] + suffix ] =
	                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
	                }
	
	                return expanded;
	            }
	        };
	
	        if ( !rmargin.test( prefix ) ) {
	            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	        }
	    } );
	
	    jQuery.fn.extend( {
	        css: function( name, value ) {
	            return access( this, function( elem, name, value ) {
	                var styles, len,
	                    map = {},
	                    i = 0;
	
	                if ( jQuery.isArray( name ) ) {
	                    styles = getStyles( elem );
	                    len = name.length;
	
	                    for ( ; i < len; i++ ) {
	                        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
	                    }
	
	                    return map;
	                }
	
	                return value !== undefined ?
	                    jQuery.style( elem, name, value ) :
	                    jQuery.css( elem, name );
	            }, name, value, arguments.length > 1 );
	        },
	        show: function() {
	            return showHide( this, true );
	        },
	        hide: function() {
	            return showHide( this );
	        },
	        toggle: function( state ) {
	            if ( typeof state === "boolean" ) {
	                return state ? this.show() : this.hide();
	            }
	
	            return this.each( function() {
	                if ( isHidden( this ) ) {
	                    jQuery( this ).show();
	                } else {
	                    jQuery( this ).hide();
	                }
	            } );
	        }
	    } );
	
	
	    function Tween( elem, options, prop, end, easing ) {
	        return new Tween.prototype.init( elem, options, prop, end, easing );
	    }
	    jQuery.Tween = Tween;
	
	    Tween.prototype = {
	        constructor: Tween,
	        init: function( elem, options, prop, end, easing, unit ) {
	            this.elem = elem;
	            this.prop = prop;
	            this.easing = easing || jQuery.easing._default;
	            this.options = options;
	            this.start = this.now = this.cur();
	            this.end = end;
	            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	        },
	        cur: function() {
	            var hooks = Tween.propHooks[ this.prop ];
	
	            return hooks && hooks.get ?
	                hooks.get( this ) :
	                Tween.propHooks._default.get( this );
	        },
	        run: function( percent ) {
	            var eased,
	                hooks = Tween.propHooks[ this.prop ];
	
	            if ( this.options.duration ) {
	                this.pos = eased = jQuery.easing[ this.easing ](
	                    percent, this.options.duration * percent, 0, 1, this.options.duration
	                );
	            } else {
	                this.pos = eased = percent;
	            }
	            this.now = ( this.end - this.start ) * eased + this.start;
	
	            if ( this.options.step ) {
	                this.options.step.call( this.elem, this.now, this );
	            }
	
	            if ( hooks && hooks.set ) {
	                hooks.set( this );
	            } else {
	                Tween.propHooks._default.set( this );
	            }
	            return this;
	        }
	    };
	
	    Tween.prototype.init.prototype = Tween.prototype;
	
	    Tween.propHooks = {
	        _default: {
	            get: function( tween ) {
	                var result;
	
	                // Use a property on the element directly when it is not a DOM element,
	                // or when there is no matching style property that exists.
	                if ( tween.elem.nodeType !== 1 ||
	                    tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
	                    return tween.elem[ tween.prop ];
	                }
	
	                // Passing an empty string as a 3rd parameter to .css will automatically
	                // attempt a parseFloat and fallback to a string if the parse fails.
	                // Simple values such as "10px" are parsed to Float;
	                // complex values such as "rotate(1rad)" are returned as-is.
	                result = jQuery.css( tween.elem, tween.prop, "" );
	
	                // Empty strings, null, undefined and "auto" are converted to 0.
	                return !result || result === "auto" ? 0 : result;
	            },
	            set: function( tween ) {
	
	                // Use step hook for back compat.
	                // Use cssHook if its there.
	                // Use .style if available and use plain properties where available.
	                if ( jQuery.fx.step[ tween.prop ] ) {
	                    jQuery.fx.step[ tween.prop ]( tween );
	                } else if ( tween.elem.nodeType === 1 &&
	                    ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
	                    jQuery.cssHooks[ tween.prop ] ) ) {
	                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
	                } else {
	                    tween.elem[ tween.prop ] = tween.now;
	                }
	            }
	        }
	    };
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	        set: function( tween ) {
	            if ( tween.elem.nodeType && tween.elem.parentNode ) {
	                tween.elem[ tween.prop ] = tween.now;
	            }
	        }
	    };
	
	    jQuery.easing = {
	        linear: function( p ) {
	            return p;
	        },
	        swing: function( p ) {
	            return 0.5 - Math.cos( p * Math.PI ) / 2;
	        },
	        _default: "swing"
	    };
	
	    jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	    jQuery.fx.step = {};
	
	
	
	
	    var
	        fxNow, timerId,
	        rfxtypes = /^(?:toggle|show|hide)$/,
	        rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	    function createFxNow() {
	        window.setTimeout( function() {
	            fxNow = undefined;
	        } );
	        return ( fxNow = jQuery.now() );
	    }
	
	// Generate parameters to create a standard animation
	    function genFx( type, includeWidth ) {
	        var which,
	            i = 0,
	            attrs = { height: type };
	
	        // If we include width, step value is 1 to do all cssExpand values,
	        // otherwise step value is 2 to skip over Left and Right
	        includeWidth = includeWidth ? 1 : 0;
	        for ( ; i < 4 ; i += 2 - includeWidth ) {
	            which = cssExpand[ i ];
	            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	        }
	
	        if ( includeWidth ) {
	            attrs.opacity = attrs.width = type;
	        }
	
	        return attrs;
	    }
	
	    function createTween( value, prop, animation ) {
	        var tween,
	            collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
	            index = 0,
	            length = collection.length;
	        for ( ; index < length; index++ ) {
	            if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
	                // We're done with this property
	                return tween;
	            }
	        }
	    }
	
	    function defaultPrefilter( elem, props, opts ) {
	        /* jshint validthis: true */
	        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
	            anim = this,
	            orig = {},
	            style = elem.style,
	            hidden = elem.nodeType && isHidden( elem ),
	            dataShow = dataPriv.get( elem, "fxshow" );
	
	        // Handle queue: false promises
	        if ( !opts.queue ) {
	            hooks = jQuery._queueHooks( elem, "fx" );
	            if ( hooks.unqueued == null ) {
	                hooks.unqueued = 0;
	                oldfire = hooks.empty.fire;
	                hooks.empty.fire = function() {
	                    if ( !hooks.unqueued ) {
	                        oldfire();
	                    }
	                };
	            }
	            hooks.unqueued++;
	
	            anim.always( function() {
	
	                // Ensure the complete handler is called before this completes
	                anim.always( function() {
	                    hooks.unqueued--;
	                    if ( !jQuery.queue( elem, "fx" ).length ) {
	                        hooks.empty.fire();
	                    }
	                } );
	            } );
	        }
	
	        // Height/width overflow pass
	        if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
	            // Make sure that nothing sneaks out
	            // Record all 3 overflow attributes because IE9-10 do not
	            // change the overflow attribute when overflowX and
	            // overflowY are set to the same value
	            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
	            // Set display property to inline-block for height/width
	            // animations on inline elements that are having width/height animated
	            display = jQuery.css( elem, "display" );
	
	            // Test default display if display is currently "none"
	            checkDisplay = display === "none" ?
	            dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
	            if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	                style.display = "inline-block";
	            }
	        }
	
	        if ( opts.overflow ) {
	            style.overflow = "hidden";
	            anim.always( function() {
	                style.overflow = opts.overflow[ 0 ];
	                style.overflowX = opts.overflow[ 1 ];
	                style.overflowY = opts.overflow[ 2 ];
	            } );
	        }
	
	        // show/hide pass
	        for ( prop in props ) {
	            value = props[ prop ];
	            if ( rfxtypes.exec( value ) ) {
	                delete props[ prop ];
	                toggle = toggle || value === "toggle";
	                if ( value === ( hidden ? "hide" : "show" ) ) {
	
	                    // If there is dataShow left over from a stopped hide or show
	                    // and we are going to proceed with show, we should pretend to be hidden
	                    if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
	                        hidden = true;
	                    } else {
	                        continue;
	                    }
	                }
	                orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
	                // Any non-fx value stops us from restoring the original display value
	            } else {
	                display = undefined;
	            }
	        }
	
	        if ( !jQuery.isEmptyObject( orig ) ) {
	            if ( dataShow ) {
	                if ( "hidden" in dataShow ) {
	                    hidden = dataShow.hidden;
	                }
	            } else {
	                dataShow = dataPriv.access( elem, "fxshow", {} );
	            }
	
	            // Store state if its toggle - enables .stop().toggle() to "reverse"
	            if ( toggle ) {
	                dataShow.hidden = !hidden;
	            }
	            if ( hidden ) {
	                jQuery( elem ).show();
	            } else {
	                anim.done( function() {
	                    jQuery( elem ).hide();
	                } );
	            }
	            anim.done( function() {
	                var prop;
	
	                dataPriv.remove( elem, "fxshow" );
	                for ( prop in orig ) {
	                    jQuery.style( elem, prop, orig[ prop ] );
	                }
	            } );
	            for ( prop in orig ) {
	                tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
	                if ( !( prop in dataShow ) ) {
	                    dataShow[ prop ] = tween.start;
	                    if ( hidden ) {
	                        tween.end = tween.start;
	                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
	                    }
	                }
	            }
	
	            // If this is a noop like .hide().hide(), restore an overwritten display value
	        } else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
	            style.display = display;
	        }
	    }
	
	    function propFilter( props, specialEasing ) {
	        var index, name, easing, value, hooks;
	
	        // camelCase, specialEasing and expand cssHook pass
	        for ( index in props ) {
	            name = jQuery.camelCase( index );
	            easing = specialEasing[ name ];
	            value = props[ index ];
	            if ( jQuery.isArray( value ) ) {
	                easing = value[ 1 ];
	                value = props[ index ] = value[ 0 ];
	            }
	
	            if ( index !== name ) {
	                props[ name ] = value;
	                delete props[ index ];
	            }
	
	            hooks = jQuery.cssHooks[ name ];
	            if ( hooks && "expand" in hooks ) {
	                value = hooks.expand( value );
	                delete props[ name ];
	
	                // Not quite $.extend, this won't overwrite existing keys.
	                // Reusing 'index' because we have the correct "name"
	                for ( index in value ) {
	                    if ( !( index in props ) ) {
	                        props[ index ] = value[ index ];
	                        specialEasing[ index ] = easing;
	                    }
	                }
	            } else {
	                specialEasing[ name ] = easing;
	            }
	        }
	    }
	
	    function Animation( elem, properties, options ) {
	        var result,
	            stopped,
	            index = 0,
	            length = Animation.prefilters.length,
	            deferred = jQuery.Deferred().always( function() {
	
	                // Don't match elem in the :animated selector
	                delete tick.elem;
	            } ),
	            tick = function() {
	                if ( stopped ) {
	                    return false;
	                }
	                var currentTime = fxNow || createFxNow(),
	                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
	                // Support: Android 2.3
	                // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	                    temp = remaining / animation.duration || 0,
	                    percent = 1 - temp,
	                    index = 0,
	                    length = animation.tweens.length;
	
	                for ( ; index < length ; index++ ) {
	                    animation.tweens[ index ].run( percent );
	                }
	
	                deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
	                if ( percent < 1 && length ) {
	                    return remaining;
	                } else {
	                    deferred.resolveWith( elem, [ animation ] );
	                    return false;
	                }
	            },
	            animation = deferred.promise( {
	                elem: elem,
	                props: jQuery.extend( {}, properties ),
	                opts: jQuery.extend( true, {
	                    specialEasing: {},
	                    easing: jQuery.easing._default
	                }, options ),
	                originalProperties: properties,
	                originalOptions: options,
	                startTime: fxNow || createFxNow(),
	                duration: options.duration,
	                tweens: [],
	                createTween: function( prop, end ) {
	                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
	                        animation.opts.specialEasing[ prop ] || animation.opts.easing );
	                    animation.tweens.push( tween );
	                    return tween;
	                },
	                stop: function( gotoEnd ) {
	                    var index = 0,
	
	                    // If we are going to the end, we want to run all the tweens
	                    // otherwise we skip this part
	                        length = gotoEnd ? animation.tweens.length : 0;
	                    if ( stopped ) {
	                        return this;
	                    }
	                    stopped = true;
	                    for ( ; index < length ; index++ ) {
	                        animation.tweens[ index ].run( 1 );
	                    }
	
	                    // Resolve when we played the last frame; otherwise, reject
	                    if ( gotoEnd ) {
	                        deferred.notifyWith( elem, [ animation, 1, 0 ] );
	                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
	                    } else {
	                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
	                    }
	                    return this;
	                }
	            } ),
	            props = animation.props;
	
	        propFilter( props, animation.opts.specialEasing );
	
	        for ( ; index < length ; index++ ) {
	            result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
	            if ( result ) {
	                if ( jQuery.isFunction( result.stop ) ) {
	                    jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
	                        jQuery.proxy( result.stop, result );
	                }
	                return result;
	            }
	        }
	
	        jQuery.map( props, createTween, animation );
	
	        if ( jQuery.isFunction( animation.opts.start ) ) {
	            animation.opts.start.call( elem, animation );
	        }
	
	        jQuery.fx.timer(
	            jQuery.extend( tick, {
	                elem: elem,
	                anim: animation,
	                queue: animation.opts.queue
	            } )
	        );
	
	        // attach callbacks from options
	        return animation.progress( animation.opts.progress )
	            .done( animation.opts.done, animation.opts.complete )
	            .fail( animation.opts.fail )
	            .always( animation.opts.always );
	    }
	
	    jQuery.Animation = jQuery.extend( Animation, {
	        tweeners: {
	            "*": [ function( prop, value ) {
	                var tween = this.createTween( prop, value );
	                adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
	                return tween;
	            } ]
	        },
	
	        tweener: function( props, callback ) {
	            if ( jQuery.isFunction( props ) ) {
	                callback = props;
	                props = [ "*" ];
	            } else {
	                props = props.match( rnotwhite );
	            }
	
	            var prop,
	                index = 0,
	                length = props.length;
	
	            for ( ; index < length ; index++ ) {
	                prop = props[ index ];
	                Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
	                Animation.tweeners[ prop ].unshift( callback );
	            }
	        },
	
	        prefilters: [ defaultPrefilter ],
	
	        prefilter: function( callback, prepend ) {
	            if ( prepend ) {
	                Animation.prefilters.unshift( callback );
	            } else {
	                Animation.prefilters.push( callback );
	            }
	        }
	    } );
	
	    jQuery.speed = function( speed, easing, fn ) {
	        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
	            complete: fn || !fn && easing ||
	            jQuery.isFunction( speed ) && speed,
	            duration: speed,
	            easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	        };
	
	        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
	            opt.duration : opt.duration in jQuery.fx.speeds ?
	            jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
	        // Normalize opt.queue - true/undefined/null -> "fx"
	        if ( opt.queue == null || opt.queue === true ) {
	            opt.queue = "fx";
	        }
	
	        // Queueing
	        opt.old = opt.complete;
	
	        opt.complete = function() {
	            if ( jQuery.isFunction( opt.old ) ) {
	                opt.old.call( this );
	            }
	
	            if ( opt.queue ) {
	                jQuery.dequeue( this, opt.queue );
	            }
	        };
	
	        return opt;
	    };
	
	    jQuery.fn.extend( {
	        fadeTo: function( speed, to, easing, callback ) {
	
	            // Show any hidden elements after setting opacity to 0
	            return this.filter( isHidden ).css( "opacity", 0 ).show()
	
	                // Animate to the value specified
	                .end().animate( { opacity: to }, speed, easing, callback );
	        },
	        animate: function( prop, speed, easing, callback ) {
	            var empty = jQuery.isEmptyObject( prop ),
	                optall = jQuery.speed( speed, easing, callback ),
	                doAnimation = function() {
	
	                    // Operate on a copy of prop so per-property easing won't be lost
	                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
	                    // Empty animations, or finishing resolves immediately
	                    if ( empty || dataPriv.get( this, "finish" ) ) {
	                        anim.stop( true );
	                    }
	                };
	            doAnimation.finish = doAnimation;
	
	            return empty || optall.queue === false ?
	                this.each( doAnimation ) :
	                this.queue( optall.queue, doAnimation );
	        },
	        stop: function( type, clearQueue, gotoEnd ) {
	            var stopQueue = function( hooks ) {
	                var stop = hooks.stop;
	                delete hooks.stop;
	                stop( gotoEnd );
	            };
	
	            if ( typeof type !== "string" ) {
	                gotoEnd = clearQueue;
	                clearQueue = type;
	                type = undefined;
	            }
	            if ( clearQueue && type !== false ) {
	                this.queue( type || "fx", [] );
	            }
	
	            return this.each( function() {
	                var dequeue = true,
	                    index = type != null && type + "queueHooks",
	                    timers = jQuery.timers,
	                    data = dataPriv.get( this );
	
	                if ( index ) {
	                    if ( data[ index ] && data[ index ].stop ) {
	                        stopQueue( data[ index ] );
	                    }
	                } else {
	                    for ( index in data ) {
	                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
	                            stopQueue( data[ index ] );
	                        }
	                    }
	                }
	
	                for ( index = timers.length; index--; ) {
	                    if ( timers[ index ].elem === this &&
	                        ( type == null || timers[ index ].queue === type ) ) {
	
	                        timers[ index ].anim.stop( gotoEnd );
	                        dequeue = false;
	                        timers.splice( index, 1 );
	                    }
	                }
	
	                // Start the next in the queue if the last step wasn't forced.
	                // Timers currently will call their complete callbacks, which
	                // will dequeue but only if they were gotoEnd.
	                if ( dequeue || !gotoEnd ) {
	                    jQuery.dequeue( this, type );
	                }
	            } );
	        },
	        finish: function( type ) {
	            if ( type !== false ) {
	                type = type || "fx";
	            }
	            return this.each( function() {
	                var index,
	                    data = dataPriv.get( this ),
	                    queue = data[ type + "queue" ],
	                    hooks = data[ type + "queueHooks" ],
	                    timers = jQuery.timers,
	                    length = queue ? queue.length : 0;
	
	                // Enable finishing flag on private data
	                data.finish = true;
	
	                // Empty the queue first
	                jQuery.queue( this, type, [] );
	
	                if ( hooks && hooks.stop ) {
	                    hooks.stop.call( this, true );
	                }
	
	                // Look for any active animations, and finish them
	                for ( index = timers.length; index--; ) {
	                    if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
	                        timers[ index ].anim.stop( true );
	                        timers.splice( index, 1 );
	                    }
	                }
	
	                // Look for any animations in the old queue and finish them
	                for ( index = 0; index < length; index++ ) {
	                    if ( queue[ index ] && queue[ index ].finish ) {
	                        queue[ index ].finish.call( this );
	                    }
	                }
	
	                // Turn off finishing flag
	                delete data.finish;
	            } );
	        }
	    } );
	
	    jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	        var cssFn = jQuery.fn[ name ];
	        jQuery.fn[ name ] = function( speed, easing, callback ) {
	            return speed == null || typeof speed === "boolean" ?
	                cssFn.apply( this, arguments ) :
	                this.animate( genFx( name, true ), speed, easing, callback );
	        };
	    } );
	
	// Generate shortcuts for custom animations
	    jQuery.each( {
	        slideDown: genFx( "show" ),
	        slideUp: genFx( "hide" ),
	        slideToggle: genFx( "toggle" ),
	        fadeIn: { opacity: "show" },
	        fadeOut: { opacity: "hide" },
	        fadeToggle: { opacity: "toggle" }
	    }, function( name, props ) {
	        jQuery.fn[ name ] = function( speed, easing, callback ) {
	            return this.animate( props, speed, easing, callback );
	        };
	    } );
	
	    jQuery.timers = [];
	    jQuery.fx.tick = function() {
	        var timer,
	            i = 0,
	            timers = jQuery.timers;
	
	        fxNow = jQuery.now();
	
	        for ( ; i < timers.length; i++ ) {
	            timer = timers[ i ];
	
	            // Checks the timer has not already been removed
	            if ( !timer() && timers[ i ] === timer ) {
	                timers.splice( i--, 1 );
	            }
	        }
	
	        if ( !timers.length ) {
	            jQuery.fx.stop();
	        }
	        fxNow = undefined;
	    };
	
	    jQuery.fx.timer = function( timer ) {
	        jQuery.timers.push( timer );
	        if ( timer() ) {
	            jQuery.fx.start();
	        } else {
	            jQuery.timers.pop();
	        }
	    };
	
	    jQuery.fx.interval = 13;
	    jQuery.fx.start = function() {
	        if ( !timerId ) {
	            timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	        }
	    };
	
	    jQuery.fx.stop = function() {
	        window.clearInterval( timerId );
	
	        timerId = null;
	    };
	
	    jQuery.fx.speeds = {
	        slow: 600,
	        fast: 200,
	
	        // Default speed
	        _default: 400
	    };
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	    jQuery.fn.delay = function( time, type ) {
	        time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	        type = type || "fx";
	
	        return this.queue( type, function( next, hooks ) {
	            var timeout = window.setTimeout( next, time );
	            hooks.stop = function() {
	                window.clearTimeout( timeout );
	            };
	        } );
	    };
	
	
	    ( function() {
	        var input = document.createElement( "input" ),
	            select = document.createElement( "select" ),
	            opt = select.appendChild( document.createElement( "option" ) );
	
	        input.type = "checkbox";
	
	        // Support: iOS<=5.1, Android<=4.2+
	        // Default value for a checkbox should be "on"
	        support.checkOn = input.value !== "";
	
	        // Support: IE<=11+
	        // Must access selectedIndex to make default options select
	        support.optSelected = opt.selected;
	
	        // Support: Android<=2.3
	        // Options inside disabled selects are incorrectly marked as disabled
	        select.disabled = true;
	        support.optDisabled = !opt.disabled;
	
	        // Support: IE<=11+
	        // An input loses its value after becoming a radio
	        input = document.createElement( "input" );
	        input.value = "t";
	        input.type = "radio";
	        support.radioValue = input.value === "t";
	    } )();
	
	
	    var boolHook,
	        attrHandle = jQuery.expr.attrHandle;
	
	    jQuery.fn.extend( {
	        attr: function( name, value ) {
	            return access( this, jQuery.attr, name, value, arguments.length > 1 );
	        },
	
	        removeAttr: function( name ) {
	            return this.each( function() {
	                jQuery.removeAttr( this, name );
	            } );
	        }
	    } );
	
	    jQuery.extend( {
	        attr: function( elem, name, value ) {
	            var ret, hooks,
	                nType = elem.nodeType;
	
	            // Don't get/set attributes on text, comment and attribute nodes
	            if ( nType === 3 || nType === 8 || nType === 2 ) {
	                return;
	            }
	
	            // Fallback to prop when attributes are not supported
	            if ( typeof elem.getAttribute === "undefined" ) {
	                return jQuery.prop( elem, name, value );
	            }
	
	            // All attributes are lowercase
	            // Grab necessary hook if one is defined
	            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	                name = name.toLowerCase();
	                hooks = jQuery.attrHooks[ name ] ||
	                    ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
	            }
	
	            if ( value !== undefined ) {
	                if ( value === null ) {
	                    jQuery.removeAttr( elem, name );
	                    return;
	                }
	
	                if ( hooks && "set" in hooks &&
	                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
	                    return ret;
	                }
	
	                elem.setAttribute( name, value + "" );
	                return value;
	            }
	
	            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
	                return ret;
	            }
	
	            ret = jQuery.find.attr( elem, name );
	
	            // Non-existent attributes return null, we normalize to undefined
	            return ret == null ? undefined : ret;
	        },
	
	        attrHooks: {
	            type: {
	                set: function( elem, value ) {
	                    if ( !support.radioValue && value === "radio" &&
	                        jQuery.nodeName( elem, "input" ) ) {
	                        var val = elem.value;
	                        elem.setAttribute( "type", value );
	                        if ( val ) {
	                            elem.value = val;
	                        }
	                        return value;
	                    }
	                }
	            }
	        },
	
	        removeAttr: function( elem, value ) {
	            var name, propName,
	                i = 0,
	                attrNames = value && value.match( rnotwhite );
	
	            if ( attrNames && elem.nodeType === 1 ) {
	                while ( ( name = attrNames[ i++ ] ) ) {
	                    propName = jQuery.propFix[ name ] || name;
	
	                    // Boolean attributes get special treatment (#10870)
	                    if ( jQuery.expr.match.bool.test( name ) ) {
	
	                        // Set corresponding property to false
	                        elem[ propName ] = false;
	                    }
	
	                    elem.removeAttribute( name );
	                }
	            }
	        }
	    } );
	
	// Hooks for boolean attributes
	    boolHook = {
	        set: function( elem, value, name ) {
	            if ( value === false ) {
	
	                // Remove boolean attributes when set to false
	                jQuery.removeAttr( elem, name );
	            } else {
	                elem.setAttribute( name, name );
	            }
	            return name;
	        }
	    };
	    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	        var getter = attrHandle[ name ] || jQuery.find.attr;
	
	        attrHandle[ name ] = function( elem, name, isXML ) {
	            var ret, handle;
	            if ( !isXML ) {
	
	                // Avoid an infinite loop by temporarily removing this function from the getter
	                handle = attrHandle[ name ];
	                attrHandle[ name ] = ret;
	                ret = getter( elem, name, isXML ) != null ?
	                    name.toLowerCase() :
	                    null;
	                attrHandle[ name ] = handle;
	            }
	            return ret;
	        };
	    } );
	
	
	
	
	    var rfocusable = /^(?:input|select|textarea|button)$/i,
	        rclickable = /^(?:a|area)$/i;
	
	    jQuery.fn.extend( {
	        prop: function( name, value ) {
	            return access( this, jQuery.prop, name, value, arguments.length > 1 );
	        },
	
	        removeProp: function( name ) {
	            return this.each( function() {
	                delete this[ jQuery.propFix[ name ] || name ];
	            } );
	        }
	    } );
	
	    jQuery.extend( {
	        prop: function( elem, name, value ) {
	            var ret, hooks,
	                nType = elem.nodeType;
	
	            // Don't get/set properties on text, comment and attribute nodes
	            if ( nType === 3 || nType === 8 || nType === 2 ) {
	                return;
	            }
	
	            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
	                // Fix name and attach hooks
	                name = jQuery.propFix[ name ] || name;
	                hooks = jQuery.propHooks[ name ];
	            }
	
	            if ( value !== undefined ) {
	                if ( hooks && "set" in hooks &&
	                    ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
	                    return ret;
	                }
	
	                return ( elem[ name ] = value );
	            }
	
	            if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
	                return ret;
	            }
	
	            return elem[ name ];
	        },
	
	        propHooks: {
	            tabIndex: {
	                get: function( elem ) {
	
	                    // elem.tabIndex doesn't always return the
	                    // correct value when it hasn't been explicitly set
	                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	                    // Use proper attribute retrieval(#12072)
	                    var tabindex = jQuery.find.attr( elem, "tabindex" );
	
	                    return tabindex ?
	                        parseInt( tabindex, 10 ) :
	                        rfocusable.test( elem.nodeName ) ||
	                        rclickable.test( elem.nodeName ) && elem.href ?
	                            0 :
	                            -1;
	                }
	            }
	        },
	
	        propFix: {
	            "for": "htmlFor",
	            "class": "className"
	        }
	    } );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	    if ( !support.optSelected ) {
	        jQuery.propHooks.selected = {
	            get: function( elem ) {
	                var parent = elem.parentNode;
	                if ( parent && parent.parentNode ) {
	                    parent.parentNode.selectedIndex;
	                }
	                return null;
	            },
	            set: function( elem ) {
	                var parent = elem.parentNode;
	                if ( parent ) {
	                    parent.selectedIndex;
	
	                    if ( parent.parentNode ) {
	                        parent.parentNode.selectedIndex;
	                    }
	                }
	            }
	        };
	    }
	
	    jQuery.each( [
	        "tabIndex",
	        "readOnly",
	        "maxLength",
	        "cellSpacing",
	        "cellPadding",
	        "rowSpan",
	        "colSpan",
	        "useMap",
	        "frameBorder",
	        "contentEditable"
	    ], function() {
	        jQuery.propFix[ this.toLowerCase() ] = this;
	    } );
	
	
	
	
	    var rclass = /[\t\r\n\f]/g;
	
	    function getClass( elem ) {
	        return elem.getAttribute && elem.getAttribute( "class" ) || "";
	    }
	
	    jQuery.fn.extend( {
	        addClass: function( value ) {
	            var classes, elem, cur, curValue, clazz, j, finalValue,
	                i = 0;
	
	            if ( jQuery.isFunction( value ) ) {
	                return this.each( function( j ) {
	                    jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
	                } );
	            }
	
	            if ( typeof value === "string" && value ) {
	                classes = value.match( rnotwhite ) || [];
	
	                while ( ( elem = this[ i++ ] ) ) {
	                    curValue = getClass( elem );
	                    cur = elem.nodeType === 1 &&
	                        ( " " + curValue + " " ).replace( rclass, " " );
	
	                    if ( cur ) {
	                        j = 0;
	                        while ( ( clazz = classes[ j++ ] ) ) {
	                            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
	                                cur += clazz + " ";
	                            }
	                        }
	
	                        // Only assign if different to avoid unneeded rendering.
	                        finalValue = jQuery.trim( cur );
	                        if ( curValue !== finalValue ) {
	                            elem.setAttribute( "class", finalValue );
	                        }
	                    }
	                }
	            }
	
	            return this;
	        },
	
	        removeClass: function( value ) {
	            var classes, elem, cur, curValue, clazz, j, finalValue,
	                i = 0;
	
	            if ( jQuery.isFunction( value ) ) {
	                return this.each( function( j ) {
	                    jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
	                } );
	            }
	
	            if ( !arguments.length ) {
	                return this.attr( "class", "" );
	            }
	
	            if ( typeof value === "string" && value ) {
	                classes = value.match( rnotwhite ) || [];
	
	                while ( ( elem = this[ i++ ] ) ) {
	                    curValue = getClass( elem );
	
	                    // This expression is here for better compressibility (see addClass)
	                    cur = elem.nodeType === 1 &&
	                        ( " " + curValue + " " ).replace( rclass, " " );
	
	                    if ( cur ) {
	                        j = 0;
	                        while ( ( clazz = classes[ j++ ] ) ) {
	
	                            // Remove *all* instances
	                            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
	                                cur = cur.replace( " " + clazz + " ", " " );
	                            }
	                        }
	
	                        // Only assign if different to avoid unneeded rendering.
	                        finalValue = jQuery.trim( cur );
	                        if ( curValue !== finalValue ) {
	                            elem.setAttribute( "class", finalValue );
	                        }
	                    }
	                }
	            }
	
	            return this;
	        },
	
	        toggleClass: function( value, stateVal ) {
	            var type = typeof value;
	
	            if ( typeof stateVal === "boolean" && type === "string" ) {
	                return stateVal ? this.addClass( value ) : this.removeClass( value );
	            }
	
	            if ( jQuery.isFunction( value ) ) {
	                return this.each( function( i ) {
	                    jQuery( this ).toggleClass(
	                        value.call( this, i, getClass( this ), stateVal ),
	                        stateVal
	                    );
	                } );
	            }
	
	            return this.each( function() {
	                var className, i, self, classNames;
	
	                if ( type === "string" ) {
	
	                    // Toggle individual class names
	                    i = 0;
	                    self = jQuery( this );
	                    classNames = value.match( rnotwhite ) || [];
	
	                    while ( ( className = classNames[ i++ ] ) ) {
	
	                        // Check each className given, space separated list
	                        if ( self.hasClass( className ) ) {
	                            self.removeClass( className );
	                        } else {
	                            self.addClass( className );
	                        }
	                    }
	
	                    // Toggle whole class name
	                } else if ( value === undefined || type === "boolean" ) {
	                    className = getClass( this );
	                    if ( className ) {
	
	                        // Store className if set
	                        dataPriv.set( this, "__className__", className );
	                    }
	
	                    // If the element has a class name or if we're passed `false`,
	                    // then remove the whole classname (if there was one, the above saved it).
	                    // Otherwise bring back whatever was previously saved (if anything),
	                    // falling back to the empty string if nothing was stored.
	                    if ( this.setAttribute ) {
	                        this.setAttribute( "class",
	                            className || value === false ?
	                                "" :
	                            dataPriv.get( this, "__className__" ) || ""
	                        );
	                    }
	                }
	            } );
	        },
	
	        hasClass: function( selector ) {
	            var className, elem,
	                i = 0;
	
	            className = " " + selector + " ";
	            while ( ( elem = this[ i++ ] ) ) {
	                if ( elem.nodeType === 1 &&
	                    ( " " + getClass( elem ) + " " ).replace( rclass, " " )
	                        .indexOf( className ) > -1
	                ) {
	                    return true;
	                }
	            }
	
	            return false;
	        }
	    } );
	
	
	
	
	    var rreturn = /\r/g,
	        rspaces = /[\x20\t\r\n\f]+/g;
	
	    jQuery.fn.extend( {
	        val: function( value ) {
	            var hooks, ret, isFunction,
	                elem = this[ 0 ];
	
	            if ( !arguments.length ) {
	                if ( elem ) {
	                    hooks = jQuery.valHooks[ elem.type ] ||
	                        jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
	                    if ( hooks &&
	                        "get" in hooks &&
	                        ( ret = hooks.get( elem, "value" ) ) !== undefined
	                    ) {
	                        return ret;
	                    }
	
	                    ret = elem.value;
	
	                    return typeof ret === "string" ?
	
	                        // Handle most common string cases
	                        ret.replace( rreturn, "" ) :
	
	                        // Handle cases where value is null/undef or number
	                        ret == null ? "" : ret;
	                }
	
	                return;
	            }
	
	            isFunction = jQuery.isFunction( value );
	
	            return this.each( function( i ) {
	                var val;
	
	                if ( this.nodeType !== 1 ) {
	                    return;
	                }
	
	                if ( isFunction ) {
	                    val = value.call( this, i, jQuery( this ).val() );
	                } else {
	                    val = value;
	                }
	
	                // Treat null/undefined as ""; convert numbers to string
	                if ( val == null ) {
	                    val = "";
	
	                } else if ( typeof val === "number" ) {
	                    val += "";
	
	                } else if ( jQuery.isArray( val ) ) {
	                    val = jQuery.map( val, function( value ) {
	                        return value == null ? "" : value + "";
	                    } );
	                }
	
	                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
	                // If set returns undefined, fall back to normal setting
	                if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
	                    this.value = val;
	                }
	            } );
	        }
	    } );
	
	    jQuery.extend( {
	        valHooks: {
	            option: {
	                get: function( elem ) {
	
	                    var val = jQuery.find.attr( elem, "value" );
	                    return val != null ?
	                        val :
	
	                        // Support: IE10-11+
	                        // option.text throws exceptions (#14686, #14858)
	                        // Strip and collapse whitespace
	                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	                        jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
	                }
	            },
	            select: {
	                get: function( elem ) {
	                    var value, option,
	                        options = elem.options,
	                        index = elem.selectedIndex,
	                        one = elem.type === "select-one" || index < 0,
	                        values = one ? null : [],
	                        max = one ? index + 1 : options.length,
	                        i = index < 0 ?
	                            max :
	                            one ? index : 0;
	
	                    // Loop through all the selected options
	                    for ( ; i < max; i++ ) {
	                        option = options[ i ];
	
	                        // IE8-9 doesn't update selected after form reset (#2551)
	                        if ( ( option.selected || i === index ) &&
	
	                                // Don't return options that are disabled or in a disabled optgroup
	                            ( support.optDisabled ?
	                                !option.disabled : option.getAttribute( "disabled" ) === null ) &&
	                            ( !option.parentNode.disabled ||
	                            !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
	                            // Get the specific value for the option
	                            value = jQuery( option ).val();
	
	                            // We don't need an array for one selects
	                            if ( one ) {
	                                return value;
	                            }
	
	                            // Multi-Selects return an array
	                            values.push( value );
	                        }
	                    }
	
	                    return values;
	                },
	
	                set: function( elem, value ) {
	                    var optionSet, option,
	                        options = elem.options,
	                        values = jQuery.makeArray( value ),
	                        i = options.length;
	
	                    while ( i-- ) {
	                        option = options[ i ];
	                        if ( option.selected =
	                                jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
	                        ) {
	                            optionSet = true;
	                        }
	                    }
	
	                    // Force browsers to behave consistently when non-matching value is set
	                    if ( !optionSet ) {
	                        elem.selectedIndex = -1;
	                    }
	                    return values;
	                }
	            }
	        }
	    } );
	
	// Radios and checkboxes getter/setter
	    jQuery.each( [ "radio", "checkbox" ], function() {
	        jQuery.valHooks[ this ] = {
	            set: function( elem, value ) {
	                if ( jQuery.isArray( value ) ) {
	                    return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
	                }
	            }
	        };
	        if ( !support.checkOn ) {
	            jQuery.valHooks[ this ].get = function( elem ) {
	                return elem.getAttribute( "value" ) === null ? "on" : elem.value;
	            };
	        }
	    } );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	    jQuery.extend( jQuery.event, {
	
	        trigger: function( event, data, elem, onlyHandlers ) {
	
	            var i, cur, tmp, bubbleType, ontype, handle, special,
	                eventPath = [ elem || document ],
	                type = hasOwn.call( event, "type" ) ? event.type : event,
	                namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
	            cur = tmp = elem = elem || document;
	
	            // Don't do events on text and comment nodes
	            if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
	                return;
	            }
	
	            // focus/blur morphs to focusin/out; ensure we're not firing them right now
	            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
	                return;
	            }
	
	            if ( type.indexOf( "." ) > -1 ) {
	
	                // Namespaced trigger; create a regexp to match event type in handle()
	                namespaces = type.split( "." );
	                type = namespaces.shift();
	                namespaces.sort();
	            }
	            ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
	            // Caller can pass in a jQuery.Event object, Object, or just an event type string
	            event = event[ jQuery.expando ] ?
	                event :
	                new jQuery.Event( type, typeof event === "object" && event );
	
	            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	            event.isTrigger = onlyHandlers ? 2 : 3;
	            event.namespace = namespaces.join( "." );
	            event.rnamespace = event.namespace ?
	                new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
	                null;
	
	            // Clean up the event in case it is being reused
	            event.result = undefined;
	            if ( !event.target ) {
	                event.target = elem;
	            }
	
	            // Clone any incoming data and prepend the event, creating the handler arg list
	            data = data == null ?
	                [ event ] :
	                jQuery.makeArray( data, [ event ] );
	
	            // Allow special events to draw outside the lines
	            special = jQuery.event.special[ type ] || {};
	            if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
	                return;
	            }
	
	            // Determine event propagation path in advance, per W3C events spec (#9951)
	            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	            if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
	                bubbleType = special.delegateType || type;
	                if ( !rfocusMorph.test( bubbleType + type ) ) {
	                    cur = cur.parentNode;
	                }
	                for ( ; cur; cur = cur.parentNode ) {
	                    eventPath.push( cur );
	                    tmp = cur;
	                }
	
	                // Only add window if we got to document (e.g., not plain obj or detached DOM)
	                if ( tmp === ( elem.ownerDocument || document ) ) {
	                    eventPath.push( tmp.defaultView || tmp.parentWindow || window );
	                }
	            }
	
	            // Fire handlers on the event path
	            i = 0;
	            while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
	                event.type = i > 1 ?
	                    bubbleType :
	                special.bindType || type;
	
	                // jQuery handler
	                handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
	                    dataPriv.get( cur, "handle" );
	                if ( handle ) {
	                    handle.apply( cur, data );
	                }
	
	                // Native handler
	                handle = ontype && cur[ ontype ];
	                if ( handle && handle.apply && acceptData( cur ) ) {
	                    event.result = handle.apply( cur, data );
	                    if ( event.result === false ) {
	                        event.preventDefault();
	                    }
	                }
	            }
	            event.type = type;
	
	            // If nobody prevented the default action, do it now
	            if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
	                if ( ( !special._default ||
	                    special._default.apply( eventPath.pop(), data ) === false ) &&
	                    acceptData( elem ) ) {
	
	                    // Call a native DOM method on the target with the same name name as the event.
	                    // Don't do default actions on window, that's where global variables be (#6170)
	                    if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
	                        // Don't re-trigger an onFOO event when we call its FOO() method
	                        tmp = elem[ ontype ];
	
	                        if ( tmp ) {
	                            elem[ ontype ] = null;
	                        }
	
	                        // Prevent re-triggering of the same event, since we already bubbled it above
	                        jQuery.event.triggered = type;
	                        elem[ type ]();
	                        jQuery.event.triggered = undefined;
	
	                        if ( tmp ) {
	                            elem[ ontype ] = tmp;
	                        }
	                    }
	                }
	            }
	
	            return event.result;
	        },
	
	        // Piggyback on a donor event to simulate a different one
	        // Used only for `focus(in | out)` events
	        simulate: function( type, elem, event ) {
	            var e = jQuery.extend(
	                new jQuery.Event(),
	                event,
	                {
	                    type: type,
	                    isSimulated: true
	                }
	            );
	
	            jQuery.event.trigger( e, null, elem );
	        }
	
	    } );
	
	    jQuery.fn.extend( {
	
	        trigger: function( type, data ) {
	            return this.each( function() {
	                jQuery.event.trigger( type, data, this );
	            } );
	        },
	        triggerHandler: function( type, data ) {
	            var elem = this[ 0 ];
	            if ( elem ) {
	                return jQuery.event.trigger( type, data, elem, true );
	            }
	        }
	    } );
	
	
	    jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	        "change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	        function( i, name ) {
	
	            // Handle event binding
	            jQuery.fn[ name ] = function( data, fn ) {
	                return arguments.length > 0 ?
	                    this.on( name, null, data, fn ) :
	                    this.trigger( name );
	            };
	        } );
	
	    jQuery.fn.extend( {
	        hover: function( fnOver, fnOut ) {
	            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	        }
	    } );
	
	
	
	
	    support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	    if ( !support.focusin ) {
	        jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
	            // Attach a single capturing handler on the document while someone wants focusin/focusout
	            var handler = function( event ) {
	                jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
	            };
	
	            jQuery.event.special[ fix ] = {
	                setup: function() {
	                    var doc = this.ownerDocument || this,
	                        attaches = dataPriv.access( doc, fix );
	
	                    if ( !attaches ) {
	                        doc.addEventListener( orig, handler, true );
	                    }
	                    dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
	                },
	                teardown: function() {
	                    var doc = this.ownerDocument || this,
	                        attaches = dataPriv.access( doc, fix ) - 1;
	
	                    if ( !attaches ) {
	                        doc.removeEventListener( orig, handler, true );
	                        dataPriv.remove( doc, fix );
	
	                    } else {
	                        dataPriv.access( doc, fix, attaches );
	                    }
	                }
	            };
	        } );
	    }
	    var location = window.location;
	
	    var nonce = jQuery.now();
	
	    var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	    jQuery.parseJSON = function( data ) {
	        return JSON.parse( data + "" );
	    };
	
	
	// Cross-browser xml parsing
	    jQuery.parseXML = function( data ) {
	        var xml;
	        if ( !data || typeof data !== "string" ) {
	            return null;
	        }
	
	        // Support: IE9
	        try {
	            xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	        } catch ( e ) {
	            xml = undefined;
	        }
	
	        if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
	            jQuery.error( "Invalid XML: " + data );
	        }
	        return xml;
	    };
	
	
	    var
	        rhash = /#.*$/,
	        rts = /([?&])_=[^&]*/,
	        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
	    // #7653, #8125, #8152: local protocol detection
	        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	        rnoContent = /^(?:GET|HEAD)$/,
	        rprotocol = /^\/\//,
	
	    /* Prefilters
	     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	     * 2) These are called:
	     *    - BEFORE asking for a transport
	     *    - AFTER param serialization (s.data is a string if s.processData is true)
	     * 3) key is the dataType
	     * 4) the catchall symbol "*" can be used
	     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	     */
	        prefilters = {},
	
	    /* Transports bindings
	     * 1) key is the dataType
	     * 2) the catchall symbol "*" can be used
	     * 3) selection will start with transport dataType and THEN go to "*" if needed
	     */
	        transports = {},
	
	    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	        allTypes = "*/".concat( "*" ),
	
	    // Anchor tag for parsing the document origin
	        originAnchor = document.createElement( "a" );
	    originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	    function addToPrefiltersOrTransports( structure ) {
	
	        // dataTypeExpression is optional and defaults to "*"
	        return function( dataTypeExpression, func ) {
	
	            if ( typeof dataTypeExpression !== "string" ) {
	                func = dataTypeExpression;
	                dataTypeExpression = "*";
	            }
	
	            var dataType,
	                i = 0,
	                dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
	            if ( jQuery.isFunction( func ) ) {
	
	                // For each dataType in the dataTypeExpression
	                while ( ( dataType = dataTypes[ i++ ] ) ) {
	
	                    // Prepend if requested
	                    if ( dataType[ 0 ] === "+" ) {
	                        dataType = dataType.slice( 1 ) || "*";
	                        ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
	                        // Otherwise append
	                    } else {
	                        ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
	                    }
	                }
	            }
	        };
	    }
	
	// Base inspection function for prefilters and transports
	    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
	        var inspected = {},
	            seekingTransport = ( structure === transports );
	
	        function inspect( dataType ) {
	            var selected;
	            inspected[ dataType ] = true;
	            jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
	                var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
	                if ( typeof dataTypeOrTransport === "string" &&
	                    !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
	                    options.dataTypes.unshift( dataTypeOrTransport );
	                    inspect( dataTypeOrTransport );
	                    return false;
	                } else if ( seekingTransport ) {
	                    return !( selected = dataTypeOrTransport );
	                }
	            } );
	            return selected;
	        }
	
	        return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	    }
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	    function ajaxExtend( target, src ) {
	        var key, deep,
	            flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
	        for ( key in src ) {
	            if ( src[ key ] !== undefined ) {
	                ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
	            }
	        }
	        if ( deep ) {
	            jQuery.extend( true, target, deep );
	        }
	
	        return target;
	    }
	
	    /* Handles responses to an ajax request:
	     * - finds the right dataType (mediates between content-type and expected dataType)
	     * - returns the corresponding response
	     */
	    function ajaxHandleResponses( s, jqXHR, responses ) {
	
	        var ct, type, finalDataType, firstDataType,
	            contents = s.contents,
	            dataTypes = s.dataTypes;
	
	        // Remove auto dataType and get content-type in the process
	        while ( dataTypes[ 0 ] === "*" ) {
	            dataTypes.shift();
	            if ( ct === undefined ) {
	                ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
	            }
	        }
	
	        // Check if we're dealing with a known content-type
	        if ( ct ) {
	            for ( type in contents ) {
	                if ( contents[ type ] && contents[ type ].test( ct ) ) {
	                    dataTypes.unshift( type );
	                    break;
	                }
	            }
	        }
	
	        // Check to see if we have a response for the expected dataType
	        if ( dataTypes[ 0 ] in responses ) {
	            finalDataType = dataTypes[ 0 ];
	        } else {
	
	            // Try convertible dataTypes
	            for ( type in responses ) {
	                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
	                    finalDataType = type;
	                    break;
	                }
	                if ( !firstDataType ) {
	                    firstDataType = type;
	                }
	            }
	
	            // Or just use first one
	            finalDataType = finalDataType || firstDataType;
	        }
	
	        // If we found a dataType
	        // We add the dataType to the list if needed
	        // and return the corresponding response
	        if ( finalDataType ) {
	            if ( finalDataType !== dataTypes[ 0 ] ) {
	                dataTypes.unshift( finalDataType );
	            }
	            return responses[ finalDataType ];
	        }
	    }
	
	    /* Chain conversions given the request and the original response
	     * Also sets the responseXXX fields on the jqXHR instance
	     */
	    function ajaxConvert( s, response, jqXHR, isSuccess ) {
	        var conv2, current, conv, tmp, prev,
	            converters = {},
	
	        // Work with a copy of dataTypes in case we need to modify it for conversion
	            dataTypes = s.dataTypes.slice();
	
	        // Create converters map with lowercased keys
	        if ( dataTypes[ 1 ] ) {
	            for ( conv in s.converters ) {
	                converters[ conv.toLowerCase() ] = s.converters[ conv ];
	            }
	        }
	
	        current = dataTypes.shift();
	
	        // Convert to each sequential dataType
	        while ( current ) {
	
	            if ( s.responseFields[ current ] ) {
	                jqXHR[ s.responseFields[ current ] ] = response;
	            }
	
	            // Apply the dataFilter if provided
	            if ( !prev && isSuccess && s.dataFilter ) {
	                response = s.dataFilter( response, s.dataType );
	            }
	
	            prev = current;
	            current = dataTypes.shift();
	
	            if ( current ) {
	
	                // There's only work to do if current dataType is non-auto
	                if ( current === "*" ) {
	
	                    current = prev;
	
	                    // Convert response if prev dataType is non-auto and differs from current
	                } else if ( prev !== "*" && prev !== current ) {
	
	                    // Seek a direct converter
	                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
	                    // If none found, seek a pair
	                    if ( !conv ) {
	                        for ( conv2 in converters ) {
	
	                            // If conv2 outputs current
	                            tmp = conv2.split( " " );
	                            if ( tmp[ 1 ] === current ) {
	
	                                // If prev can be converted to accepted input
	                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
	                                    converters[ "* " + tmp[ 0 ] ];
	                                if ( conv ) {
	
	                                    // Condense equivalence converters
	                                    if ( conv === true ) {
	                                        conv = converters[ conv2 ];
	
	                                        // Otherwise, insert the intermediate dataType
	                                    } else if ( converters[ conv2 ] !== true ) {
	                                        current = tmp[ 0 ];
	                                        dataTypes.unshift( tmp[ 1 ] );
	                                    }
	                                    break;
	                                }
	                            }
	                        }
	                    }
	
	                    // Apply converter (if not an equivalence)
	                    if ( conv !== true ) {
	
	                        // Unless errors are allowed to bubble, catch and return them
	                        if ( conv && s.throws ) {
	                            response = conv( response );
	                        } else {
	                            try {
	                                response = conv( response );
	                            } catch ( e ) {
	                                return {
	                                    state: "parsererror",
	                                    error: conv ? e : "No conversion from " + prev + " to " + current
	                                };
	                            }
	                        }
	                    }
	                }
	            }
	        }
	
	        return { state: "success", data: response };
	    }
	
	    jQuery.extend( {
	
	        // Counter for holding the number of active queries
	        active: 0,
	
	        // Last-Modified header cache for next request
	        lastModified: {},
	        etag: {},
	
	        ajaxSettings: {
	            url: location.href,
	            type: "GET",
	            isLocal: rlocalProtocol.test( location.protocol ),
	            global: true,
	            processData: true,
	            async: true,
	            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	            /*
	             timeout: 0,
	             data: null,
	             dataType: null,
	             username: null,
	             password: null,
	             cache: null,
	             throws: false,
	             traditional: false,
	             headers: {},
	             */
	
	            accepts: {
	                "*": allTypes,
	                text: "text/plain",
	                html: "text/html",
	                xml: "application/xml, text/xml",
	                json: "application/json, text/javascript"
	            },
	
	            contents: {
	                xml: /\bxml\b/,
	                html: /\bhtml/,
	                json: /\bjson\b/
	            },
	
	            responseFields: {
	                xml: "responseXML",
	                text: "responseText",
	                json: "responseJSON"
	            },
	
	            // Data converters
	            // Keys separate source (or catchall "*") and destination types with a single space
	            converters: {
	
	                // Convert anything to text
	                "* text": String,
	
	                // Text to html (true = no transformation)
	                "text html": true,
	
	                // Evaluate text as a json expression
	                "text json": jQuery.parseJSON,
	
	                // Parse text as xml
	                "text xml": jQuery.parseXML
	            },
	
	            // For options that shouldn't be deep extended:
	            // you can add your own custom options here if
	            // and when you create one that shouldn't be
	            // deep extended (see ajaxExtend)
	            flatOptions: {
	                url: true,
	                context: true
	            }
	        },
	
	        // Creates a full fledged settings object into target
	        // with both ajaxSettings and settings fields.
	        // If target is omitted, writes into ajaxSettings.
	        ajaxSetup: function( target, settings ) {
	            return settings ?
	
	                // Building a settings object
	                ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
	                // Extending ajaxSettings
	                ajaxExtend( jQuery.ajaxSettings, target );
	        },
	
	        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	        ajaxTransport: addToPrefiltersOrTransports( transports ),
	
	        // Main method
	        ajax: function( url, options ) {
	
	            // If url is an object, simulate pre-1.5 signature
	            if ( typeof url === "object" ) {
	                options = url;
	                url = undefined;
	            }
	
	            // Force options to be an object
	            options = options || {};
	
	            var transport,
	
	            // URL without anti-cache param
	                cacheURL,
	
	            // Response headers
	                responseHeadersString,
	                responseHeaders,
	
	            // timeout handle
	                timeoutTimer,
	
	            // Url cleanup var
	                urlAnchor,
	
	            // To know if global events are to be dispatched
	                fireGlobals,
	
	            // Loop variable
	                i,
	
	            // Create the final options object
	                s = jQuery.ajaxSetup( {}, options ),
	
	            // Callbacks context
	                callbackContext = s.context || s,
	
	            // Context for global events is callbackContext if it is a DOM node or jQuery collection
	                globalEventContext = s.context &&
	                ( callbackContext.nodeType || callbackContext.jquery ) ?
	                    jQuery( callbackContext ) :
	                    jQuery.event,
	
	            // Deferreds
	                deferred = jQuery.Deferred(),
	                completeDeferred = jQuery.Callbacks( "once memory" ),
	
	            // Status-dependent callbacks
	                statusCode = s.statusCode || {},
	
	            // Headers (they are sent all at once)
	                requestHeaders = {},
	                requestHeadersNames = {},
	
	            // The jqXHR state
	                state = 0,
	
	            // Default abort message
	                strAbort = "canceled",
	
	            // Fake xhr
	                jqXHR = {
	                    readyState: 0,
	
	                    // Builds headers hashtable if needed
	                    getResponseHeader: function( key ) {
	                        var match;
	                        if ( state === 2 ) {
	                            if ( !responseHeaders ) {
	                                responseHeaders = {};
	                                while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
	                                    responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
	                                }
	                            }
	                            match = responseHeaders[ key.toLowerCase() ];
	                        }
	                        return match == null ? null : match;
	                    },
	
	                    // Raw string
	                    getAllResponseHeaders: function() {
	                        return state === 2 ? responseHeadersString : null;
	                    },
	
	                    // Caches the header
	                    setRequestHeader: function( name, value ) {
	                        var lname = name.toLowerCase();
	                        if ( !state ) {
	                            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
	                            requestHeaders[ name ] = value;
	                        }
	                        return this;
	                    },
	
	                    // Overrides response content-type header
	                    overrideMimeType: function( type ) {
	                        if ( !state ) {
	                            s.mimeType = type;
	                        }
	                        return this;
	                    },
	
	                    // Status-dependent callbacks
	                    statusCode: function( map ) {
	                        var code;
	                        if ( map ) {
	                            if ( state < 2 ) {
	                                for ( code in map ) {
	
	                                    // Lazy-add the new callback in a way that preserves old ones
	                                    statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
	                                }
	                            } else {
	
	                                // Execute the appropriate callbacks
	                                jqXHR.always( map[ jqXHR.status ] );
	                            }
	                        }
	                        return this;
	                    },
	
	                    // Cancel the request
	                    abort: function( statusText ) {
	                        var finalText = statusText || strAbort;
	                        if ( transport ) {
	                            transport.abort( finalText );
	                        }
	                        done( 0, finalText );
	                        return this;
	                    }
	                };
	
	            // Attach deferreds
	            deferred.promise( jqXHR ).complete = completeDeferred.add;
	            jqXHR.success = jqXHR.done;
	            jqXHR.error = jqXHR.fail;
	
	            // Remove hash character (#7531: and string promotion)
	            // Add protocol if not provided (prefilters might expect it)
	            // Handle falsy url in the settings object (#10093: consistency with old signature)
	            // We also use the url parameter if available
	            s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
	                .replace( rprotocol, location.protocol + "//" );
	
	            // Alias method option to type as per ticket #12004
	            s.type = options.method || options.type || s.method || s.type;
	
	            // Extract dataTypes list
	            s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
	            // A cross-domain request is in order when the origin doesn't match the current origin.
	            if ( s.crossDomain == null ) {
	                urlAnchor = document.createElement( "a" );
	
	                // Support: IE8-11+
	                // IE throws exception if url is malformed, e.g. http://example.com:80x/
	                try {
	                    urlAnchor.href = s.url;
	
	                    // Support: IE8-11+
	                    // Anchor's host property isn't correctly set when s.url is relative
	                    urlAnchor.href = urlAnchor.href;
	                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
	                        urlAnchor.protocol + "//" + urlAnchor.host;
	                } catch ( e ) {
	
	                    // If there is an error parsing the URL, assume it is crossDomain,
	                    // it can be rejected by the transport if it is invalid
	                    s.crossDomain = true;
	                }
	            }
	
	            // Convert data if not already a string
	            if ( s.data && s.processData && typeof s.data !== "string" ) {
	                s.data = jQuery.param( s.data, s.traditional );
	            }
	
	            // Apply prefilters
	            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
	            // If request was aborted inside a prefilter, stop there
	            if ( state === 2 ) {
	                return jqXHR;
	            }
	
	            // We can fire global events as of now if asked to
	            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	            fireGlobals = jQuery.event && s.global;
	
	            // Watch for a new set of requests
	            if ( fireGlobals && jQuery.active++ === 0 ) {
	                jQuery.event.trigger( "ajaxStart" );
	            }
	
	            // Uppercase the type
	            s.type = s.type.toUpperCase();
	
	            // Determine if request has content
	            s.hasContent = !rnoContent.test( s.type );
	
	            // Save the URL in case we're toying with the If-Modified-Since
	            // and/or If-None-Match header later on
	            cacheURL = s.url;
	
	            // More options handling for requests with no content
	            if ( !s.hasContent ) {
	
	                // If data is available, append data to url
	                if ( s.data ) {
	                    cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
	                    // #9682: remove data so that it's not used in an eventual retry
	                    delete s.data;
	                }
	
	                // Add anti-cache in url if needed
	                if ( s.cache === false ) {
	                    s.url = rts.test( cacheURL ) ?
	
	                        // If there is already a '_' parameter, set its value
	                        cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
	                        // Otherwise add one to the end
	                    cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
	                }
	            }
	
	            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	            if ( s.ifModified ) {
	                if ( jQuery.lastModified[ cacheURL ] ) {
	                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
	                }
	                if ( jQuery.etag[ cacheURL ] ) {
	                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
	                }
	            }
	
	            // Set the correct header, if data is being sent
	            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
	                jqXHR.setRequestHeader( "Content-Type", s.contentType );
	            }
	
	            // Set the Accepts header for the server, depending on the dataType
	            jqXHR.setRequestHeader(
	                "Accept",
	                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
	                s.accepts[ s.dataTypes[ 0 ] ] +
	                ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
	                    s.accepts[ "*" ]
	            );
	
	            // Check for headers option
	            for ( i in s.headers ) {
	                jqXHR.setRequestHeader( i, s.headers[ i ] );
	            }
	
	            // Allow custom headers/mimetypes and early abort
	            if ( s.beforeSend &&
	                ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
	                // Abort if not done already and return
	                return jqXHR.abort();
	            }
	
	            // Aborting is no longer a cancellation
	            strAbort = "abort";
	
	            // Install callbacks on deferreds
	            for ( i in { success: 1, error: 1, complete: 1 } ) {
	                jqXHR[ i ]( s[ i ] );
	            }
	
	            // Get transport
	            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
	            // If no transport, we auto-abort
	            if ( !transport ) {
	                done( -1, "No Transport" );
	            } else {
	                jqXHR.readyState = 1;
	
	                // Send global event
	                if ( fireGlobals ) {
	                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
	                }
	
	                // If request was aborted inside ajaxSend, stop there
	                if ( state === 2 ) {
	                    return jqXHR;
	                }
	
	                // Timeout
	                if ( s.async && s.timeout > 0 ) {
	                    timeoutTimer = window.setTimeout( function() {
	                        jqXHR.abort( "timeout" );
	                    }, s.timeout );
	                }
	
	                try {
	                    state = 1;
	                    transport.send( requestHeaders, done );
	                } catch ( e ) {
	
	                    // Propagate exception as error if not done
	                    if ( state < 2 ) {
	                        done( -1, e );
	
	                        // Simply rethrow otherwise
	                    } else {
	                        throw e;
	                    }
	                }
	            }
	
	            // Callback for when everything is done
	            function done( status, nativeStatusText, responses, headers ) {
	                var isSuccess, success, error, response, modified,
	                    statusText = nativeStatusText;
	
	                // Called once
	                if ( state === 2 ) {
	                    return;
	                }
	
	                // State is "done" now
	                state = 2;
	
	                // Clear timeout if it exists
	                if ( timeoutTimer ) {
	                    window.clearTimeout( timeoutTimer );
	                }
	
	                // Dereference transport for early garbage collection
	                // (no matter how long the jqXHR object will be used)
	                transport = undefined;
	
	                // Cache response headers
	                responseHeadersString = headers || "";
	
	                // Set readyState
	                jqXHR.readyState = status > 0 ? 4 : 0;
	
	                // Determine if successful
	                isSuccess = status >= 200 && status < 300 || status === 304;
	
	                // Get response data
	                if ( responses ) {
	                    response = ajaxHandleResponses( s, jqXHR, responses );
	                }
	
	                // Convert no matter what (that way responseXXX fields are always set)
	                response = ajaxConvert( s, response, jqXHR, isSuccess );
	
	                // If successful, handle type chaining
	                if ( isSuccess ) {
	
	                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	                    if ( s.ifModified ) {
	                        modified = jqXHR.getResponseHeader( "Last-Modified" );
	                        if ( modified ) {
	                            jQuery.lastModified[ cacheURL ] = modified;
	                        }
	                        modified = jqXHR.getResponseHeader( "etag" );
	                        if ( modified ) {
	                            jQuery.etag[ cacheURL ] = modified;
	                        }
	                    }
	
	                    // if no content
	                    if ( status === 204 || s.type === "HEAD" ) {
	                        statusText = "nocontent";
	
	                        // if not modified
	                    } else if ( status === 304 ) {
	                        statusText = "notmodified";
	
	                        // If we have data, let's convert it
	                    } else {
	                        statusText = response.state;
	                        success = response.data;
	                        error = response.error;
	                        isSuccess = !error;
	                    }
	                } else {
	
	                    // Extract error from statusText and normalize for non-aborts
	                    error = statusText;
	                    if ( status || !statusText ) {
	                        statusText = "error";
	                        if ( status < 0 ) {
	                            status = 0;
	                        }
	                    }
	                }
	
	                // Set data for the fake xhr object
	                jqXHR.status = status;
	                jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
	                // Success/Error
	                if ( isSuccess ) {
	                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
	                } else {
	                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
	                }
	
	                // Status-dependent callbacks
	                jqXHR.statusCode( statusCode );
	                statusCode = undefined;
	
	                if ( fireGlobals ) {
	                    globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
	                        [ jqXHR, s, isSuccess ? success : error ] );
	                }
	
	                // Complete
	                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
	                if ( fireGlobals ) {
	                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
	                    // Handle the global AJAX counter
	                    if ( !( --jQuery.active ) ) {
	                        jQuery.event.trigger( "ajaxStop" );
	                    }
	                }
	            }
	
	            return jqXHR;
	        },
	
	        getJSON: function( url, data, callback ) {
	            return jQuery.get( url, data, callback, "json" );
	        },
	
	        getScript: function( url, callback ) {
	            return jQuery.get( url, undefined, callback, "script" );
	        }
	    } );
	
	    jQuery.each( [ "get", "post" ], function( i, method ) {
	        jQuery[ method ] = function( url, data, callback, type ) {
	
	            // Shift arguments if data argument was omitted
	            if ( jQuery.isFunction( data ) ) {
	                type = type || callback;
	                callback = data;
	                data = undefined;
	            }
	
	            // The url can be an options object (which then must have .url)
	            return jQuery.ajax( jQuery.extend( {
	                url: url,
	                type: method,
	                dataType: type,
	                data: data,
	                success: callback
	            }, jQuery.isPlainObject( url ) && url ) );
	        };
	    } );
	
	
	    jQuery._evalUrl = function( url ) {
	        return jQuery.ajax( {
	            url: url,
	
	            // Make this explicit, since user can override this through ajaxSetup (#11264)
	            type: "GET",
	            dataType: "script",
	            async: false,
	            global: false,
	            "throws": true
	        } );
	    };
	
	
	    jQuery.fn.extend( {
	        wrapAll: function( html ) {
	            var wrap;
	
	            if ( jQuery.isFunction( html ) ) {
	                return this.each( function( i ) {
	                    jQuery( this ).wrapAll( html.call( this, i ) );
	                } );
	            }
	
	            if ( this[ 0 ] ) {
	
	                // The elements to wrap the target around
	                wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
	                if ( this[ 0 ].parentNode ) {
	                    wrap.insertBefore( this[ 0 ] );
	                }
	
	                wrap.map( function() {
	                    var elem = this;
	
	                    while ( elem.firstElementChild ) {
	                        elem = elem.firstElementChild;
	                    }
	
	                    return elem;
	                } ).append( this );
	            }
	
	            return this;
	        },
	
	        wrapInner: function( html ) {
	            if ( jQuery.isFunction( html ) ) {
	                return this.each( function( i ) {
	                    jQuery( this ).wrapInner( html.call( this, i ) );
	                } );
	            }
	
	            return this.each( function() {
	                var self = jQuery( this ),
	                    contents = self.contents();
	
	                if ( contents.length ) {
	                    contents.wrapAll( html );
	
	                } else {
	                    self.append( html );
	                }
	            } );
	        },
	
	        wrap: function( html ) {
	            var isFunction = jQuery.isFunction( html );
	
	            return this.each( function( i ) {
	                jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
	            } );
	        },
	
	        unwrap: function() {
	            return this.parent().each( function() {
	                if ( !jQuery.nodeName( this, "body" ) ) {
	                    jQuery( this ).replaceWith( this.childNodes );
	                }
	            } ).end();
	        }
	    } );
	
	
	    jQuery.expr.filters.hidden = function( elem ) {
	        return !jQuery.expr.filters.visible( elem );
	    };
	    jQuery.expr.filters.visible = function( elem ) {
	
	        // Support: Opera <= 12.12
	        // Opera reports offsetWidths and offsetHeights less than zero on some elements
	        // Use OR instead of AND as the element is not visible if either is true
	        // See tickets #10406 and #13132
	        return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	    };
	
	
	
	
	    var r20 = /%20/g,
	        rbracket = /\[\]$/,
	        rCRLF = /\r?\n/g,
	        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	        rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	    function buildParams( prefix, obj, traditional, add ) {
	        var name;
	
	        if ( jQuery.isArray( obj ) ) {
	
	            // Serialize array item.
	            jQuery.each( obj, function( i, v ) {
	                if ( traditional || rbracket.test( prefix ) ) {
	
	                    // Treat each array item as a scalar.
	                    add( prefix, v );
	
	                } else {
	
	                    // Item is non-scalar (array or object), encode its numeric index.
	                    buildParams(
	                        prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
	                        v,
	                        traditional,
	                        add
	                    );
	                }
	            } );
	
	        } else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
	            // Serialize object item.
	            for ( name in obj ) {
	                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
	            }
	
	        } else {
	
	            // Serialize scalar item.
	            add( prefix, obj );
	        }
	    }
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	    jQuery.param = function( a, traditional ) {
	        var prefix,
	            s = [],
	            add = function( key, value ) {
	
	                // If value is a function, invoke it and return its value
	                value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
	                s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
	            };
	
	        // Set traditional to true for jQuery <= 1.3.2 behavior.
	        if ( traditional === undefined ) {
	            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	        }
	
	        // If an array was passed in, assume that it is an array of form elements.
	        if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
	            // Serialize the form elements
	            jQuery.each( a, function() {
	                add( this.name, this.value );
	            } );
	
	        } else {
	
	            // If traditional, encode the "old" way (the way 1.3.2 or older
	            // did it), otherwise encode params recursively.
	            for ( prefix in a ) {
	                buildParams( prefix, a[ prefix ], traditional, add );
	            }
	        }
	
	        // Return the resulting serialization
	        return s.join( "&" ).replace( r20, "+" );
	    };
	
	    jQuery.fn.extend( {
	        serialize: function() {
	            return jQuery.param( this.serializeArray() );
	        },
	        serializeArray: function() {
	            return this.map( function() {
	
	                // Can add propHook for "elements" to filter or add form elements
	                var elements = jQuery.prop( this, "elements" );
	                return elements ? jQuery.makeArray( elements ) : this;
	            } )
	                .filter( function() {
	                    var type = this.type;
	
	                    // Use .is( ":disabled" ) so that fieldset[disabled] works
	                    return this.name && !jQuery( this ).is( ":disabled" ) &&
	                        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
	                        ( this.checked || !rcheckableType.test( type ) );
	                } )
	                .map( function( i, elem ) {
	                    var val = jQuery( this ).val();
	
	                    return val == null ?
	                        null :
	                        jQuery.isArray( val ) ?
	                            jQuery.map( val, function( val ) {
	                                return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
	                            } ) :
	                        { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
	                } ).get();
	        }
	    } );
	
	
	    jQuery.ajaxSettings.xhr = function() {
	        try {
	            return new window.XMLHttpRequest();
	        } catch ( e ) {}
	    };
	
	    var xhrSuccessStatus = {
	
	            // File protocol always yields status code 0, assume 200
	            0: 200,
	
	            // Support: IE9
	            // #1450: sometimes IE returns 1223 when it should be 204
	            1223: 204
	        },
	        xhrSupported = jQuery.ajaxSettings.xhr();
	
	    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	    support.ajax = xhrSupported = !!xhrSupported;
	
	    jQuery.ajaxTransport( function( options ) {
	        var callback, errorCallback;
	
	        // Cross domain only allowed if supported through XMLHttpRequest
	        if ( support.cors || xhrSupported && !options.crossDomain ) {
	            return {
	                send: function( headers, complete ) {
	                    var i,
	                        xhr = options.xhr();
	
	                    xhr.open(
	                        options.type,
	                        options.url,
	                        options.async,
	                        options.username,
	                        options.password
	                    );
	
	                    // Apply custom fields if provided
	                    if ( options.xhrFields ) {
	                        for ( i in options.xhrFields ) {
	                            xhr[ i ] = options.xhrFields[ i ];
	                        }
	                    }
	
	                    // Override mime type if needed
	                    if ( options.mimeType && xhr.overrideMimeType ) {
	                        xhr.overrideMimeType( options.mimeType );
	                    }
	
	                    // X-Requested-With header
	                    // For cross-domain requests, seeing as conditions for a preflight are
	                    // akin to a jigsaw puzzle, we simply never set it to be sure.
	                    // (it can always be set on a per-request basis or even using ajaxSetup)
	                    // For same-domain requests, won't change header if already provided.
	                    if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
	                        headers[ "X-Requested-With" ] = "XMLHttpRequest";
	                    }
	
	                    // Set headers
	                    for ( i in headers ) {
	                        xhr.setRequestHeader( i, headers[ i ] );
	                    }
	
	                    // Callback
	                    callback = function( type ) {
	                        return function() {
	                            if ( callback ) {
	                                callback = errorCallback = xhr.onload =
	                                    xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
	                                if ( type === "abort" ) {
	                                    xhr.abort();
	                                } else if ( type === "error" ) {
	
	                                    // Support: IE9
	                                    // On a manual native abort, IE9 throws
	                                    // errors on any property access that is not readyState
	                                    if ( typeof xhr.status !== "number" ) {
	                                        complete( 0, "error" );
	                                    } else {
	                                        complete(
	
	                                            // File: protocol always yields status 0; see #8605, #14207
	                                            xhr.status,
	                                            xhr.statusText
	                                        );
	                                    }
	                                } else {
	                                    complete(
	                                        xhrSuccessStatus[ xhr.status ] || xhr.status,
	                                        xhr.statusText,
	
	                                        // Support: IE9 only
	                                        // IE9 has no XHR2 but throws on binary (trac-11426)
	                                        // For XHR2 non-text, let the caller handle it (gh-2498)
	                                        ( xhr.responseType || "text" ) !== "text"  ||
	                                        typeof xhr.responseText !== "string" ?
	                                        { binary: xhr.response } :
	                                        { text: xhr.responseText },
	                                        xhr.getAllResponseHeaders()
	                                    );
	                                }
	                            }
	                        };
	                    };
	
	                    // Listen to events
	                    xhr.onload = callback();
	                    errorCallback = xhr.onerror = callback( "error" );
	
	                    // Support: IE9
	                    // Use onreadystatechange to replace onabort
	                    // to handle uncaught aborts
	                    if ( xhr.onabort !== undefined ) {
	                        xhr.onabort = errorCallback;
	                    } else {
	                        xhr.onreadystatechange = function() {
	
	                            // Check readyState before timeout as it changes
	                            if ( xhr.readyState === 4 ) {
	
	                                // Allow onerror to be called first,
	                                // but that will not handle a native abort
	                                // Also, save errorCallback to a variable
	                                // as xhr.onerror cannot be accessed
	                                window.setTimeout( function() {
	                                    if ( callback ) {
	                                        errorCallback();
	                                    }
	                                } );
	                            }
	                        };
	                    }
	
	                    // Create the abort callback
	                    callback = callback( "abort" );
	
	                    try {
	
	                        // Do send the request (this may raise an exception)
	                        xhr.send( options.hasContent && options.data || null );
	                    } catch ( e ) {
	
	                        // #14683: Only rethrow if this hasn't been notified as an error yet
	                        if ( callback ) {
	                            throw e;
	                        }
	                    }
	                },
	
	                abort: function() {
	                    if ( callback ) {
	                        callback();
	                    }
	                }
	            };
	        }
	    } );
	
	
	
	
	// Install script dataType
	    jQuery.ajaxSetup( {
	        accepts: {
	            script: "text/javascript, application/javascript, " +
	            "application/ecmascript, application/x-ecmascript"
	        },
	        contents: {
	            script: /\b(?:java|ecma)script\b/
	        },
	        converters: {
	            "text script": function( text ) {
	                jQuery.globalEval( text );
	                return text;
	            }
	        }
	    } );
	
	// Handle cache's special case and crossDomain
	    jQuery.ajaxPrefilter( "script", function( s ) {
	        if ( s.cache === undefined ) {
	            s.cache = false;
	        }
	        if ( s.crossDomain ) {
	            s.type = "GET";
	        }
	    } );
	
	// Bind script tag hack transport
	    jQuery.ajaxTransport( "script", function( s ) {
	
	        // This transport only deals with cross domain requests
	        if ( s.crossDomain ) {
	            var script, callback;
	            return {
	                send: function( _, complete ) {
	                    script = jQuery( "<script>" ).prop( {
	                        charset: s.scriptCharset,
	                        src: s.url
	                    } ).on(
	                        "load error",
	                        callback = function( evt ) {
	                            script.remove();
	                            callback = null;
	                            if ( evt ) {
	                                complete( evt.type === "error" ? 404 : 200, evt.type );
	                            }
	                        }
	                    );
	
	                    // Use native DOM manipulation to avoid our domManip AJAX trickery
	                    document.head.appendChild( script[ 0 ] );
	                },
	                abort: function() {
	                    if ( callback ) {
	                        callback();
	                    }
	                }
	            };
	        }
	    } );
	
	
	
	
	    var oldCallbacks = [],
	        rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	    jQuery.ajaxSetup( {
	        jsonp: "callback",
	        jsonpCallback: function() {
	            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
	            this[ callback ] = true;
	            return callback;
	        }
	    } );
	
	// Detect, normalize options and install callbacks for jsonp requests
	    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
	        var callbackName, overwritten, responseContainer,
	            jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
	                        "url" :
	                    typeof s.data === "string" &&
	                    ( s.contentType || "" )
	                        .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
	                    rjsonp.test( s.data ) && "data"
	                );
	
	        // Handle iff the expected data type is "jsonp" or we have a parameter to set
	        if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
	            // Get callback name, remembering preexisting value associated with it
	            callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
	                s.jsonpCallback() :
	                s.jsonpCallback;
	
	            // Insert callback into url or form data
	            if ( jsonProp ) {
	                s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
	            } else if ( s.jsonp !== false ) {
	                s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
	            }
	
	            // Use data converter to retrieve json after script execution
	            s.converters[ "script json" ] = function() {
	                if ( !responseContainer ) {
	                    jQuery.error( callbackName + " was not called" );
	                }
	                return responseContainer[ 0 ];
	            };
	
	            // Force json dataType
	            s.dataTypes[ 0 ] = "json";
	
	            // Install callback
	            overwritten = window[ callbackName ];
	            window[ callbackName ] = function() {
	                responseContainer = arguments;
	            };
	
	            // Clean-up function (fires after converters)
	            jqXHR.always( function() {
	
	                // If previous value didn't exist - remove it
	                if ( overwritten === undefined ) {
	                    jQuery( window ).removeProp( callbackName );
	
	                    // Otherwise restore preexisting value
	                } else {
	                    window[ callbackName ] = overwritten;
	                }
	
	                // Save back as free
	                if ( s[ callbackName ] ) {
	
	                    // Make sure that re-using the options doesn't screw things around
	                    s.jsonpCallback = originalSettings.jsonpCallback;
	
	                    // Save the callback name for future use
	                    oldCallbacks.push( callbackName );
	                }
	
	                // Call if it was a function and we have a response
	                if ( responseContainer && jQuery.isFunction( overwritten ) ) {
	                    overwritten( responseContainer[ 0 ] );
	                }
	
	                responseContainer = overwritten = undefined;
	            } );
	
	            // Delegate to script
	            return "script";
	        }
	    } );
	
	
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	    jQuery.parseHTML = function( data, context, keepScripts ) {
	        if ( !data || typeof data !== "string" ) {
	            return null;
	        }
	        if ( typeof context === "boolean" ) {
	            keepScripts = context;
	            context = false;
	        }
	        context = context || document;
	
	        var parsed = rsingleTag.exec( data ),
	            scripts = !keepScripts && [];
	
	        // Single tag
	        if ( parsed ) {
	            return [ context.createElement( parsed[ 1 ] ) ];
	        }
	
	        parsed = buildFragment( [ data ], context, scripts );
	
	        if ( scripts && scripts.length ) {
	            jQuery( scripts ).remove();
	        }
	
	        return jQuery.merge( [], parsed.childNodes );
	    };
	
	
	// Keep a copy of the old load method
	    var _load = jQuery.fn.load;
	
	    /**
	     * Load a url into a page
	     */
	    jQuery.fn.load = function( url, params, callback ) {
	        if ( typeof url !== "string" && _load ) {
	            return _load.apply( this, arguments );
	        }
	
	        var selector, type, response,
	            self = this,
	            off = url.indexOf( " " );
	
	        if ( off > -1 ) {
	            selector = jQuery.trim( url.slice( off ) );
	            url = url.slice( 0, off );
	        }
	
	        // If it's a function
	        if ( jQuery.isFunction( params ) ) {
	
	            // We assume that it's the callback
	            callback = params;
	            params = undefined;
	
	            // Otherwise, build a param string
	        } else if ( params && typeof params === "object" ) {
	            type = "POST";
	        }
	
	        // If we have elements to modify, make the request
	        if ( self.length > 0 ) {
	            jQuery.ajax( {
	                url: url,
	
	                // If "type" variable is undefined, then "GET" method will be used.
	                // Make value of this field explicit since
	                // user can override it through ajaxSetup method
	                type: type || "GET",
	                dataType: "html",
	                data: params
	            } ).done( function( responseText ) {
	
	                // Save response for use in complete callback
	                response = arguments;
	
	                self.html( selector ?
	
	                    // If a selector was specified, locate the right elements in a dummy div
	                    // Exclude scripts to avoid IE 'Permission Denied' errors
	                    jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
	                    // Otherwise use the full result
	                    responseText );
	
	                // If the request succeeds, this function gets "data", "status", "jqXHR"
	                // but they are ignored because response was set above.
	                // If it fails, this function gets "jqXHR", "status", "error"
	            } ).always( callback && function( jqXHR, status ) {
	                    self.each( function() {
	                        callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
	                    } );
	                } );
	        }
	
	        return this;
	    };
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	    jQuery.each( [
	        "ajaxStart",
	        "ajaxStop",
	        "ajaxComplete",
	        "ajaxError",
	        "ajaxSuccess",
	        "ajaxSend"
	    ], function( i, type ) {
	        jQuery.fn[ type ] = function( fn ) {
	            return this.on( type, fn );
	        };
	    } );
	
	
	
	
	    jQuery.expr.filters.animated = function( elem ) {
	        return jQuery.grep( jQuery.timers, function( fn ) {
	            return elem === fn.elem;
	        } ).length;
	    };
	
	
	
	
	    /**
	     * Gets a window from an element
	     */
	    function getWindow( elem ) {
	        return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	    }
	
	    jQuery.offset = {
	        setOffset: function( elem, options, i ) {
	            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
	                position = jQuery.css( elem, "position" ),
	                curElem = jQuery( elem ),
	                props = {};
	
	            // Set position first, in-case top/left are set even on static elem
	            if ( position === "static" ) {
	                elem.style.position = "relative";
	            }
	
	            curOffset = curElem.offset();
	            curCSSTop = jQuery.css( elem, "top" );
	            curCSSLeft = jQuery.css( elem, "left" );
	            calculatePosition = ( position === "absolute" || position === "fixed" ) &&
	                ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
	            // Need to be able to calculate position if either
	            // top or left is auto and position is either absolute or fixed
	            if ( calculatePosition ) {
	                curPosition = curElem.position();
	                curTop = curPosition.top;
	                curLeft = curPosition.left;
	
	            } else {
	                curTop = parseFloat( curCSSTop ) || 0;
	                curLeft = parseFloat( curCSSLeft ) || 0;
	            }
	
	            if ( jQuery.isFunction( options ) ) {
	
	                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	                options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
	            }
	
	            if ( options.top != null ) {
	                props.top = ( options.top - curOffset.top ) + curTop;
	            }
	            if ( options.left != null ) {
	                props.left = ( options.left - curOffset.left ) + curLeft;
	            }
	
	            if ( "using" in options ) {
	                options.using.call( elem, props );
	
	            } else {
	                curElem.css( props );
	            }
	        }
	    };
	
	    jQuery.fn.extend( {
	        offset: function( options ) {
	            if ( arguments.length ) {
	                return options === undefined ?
	                    this :
	                    this.each( function( i ) {
	                        jQuery.offset.setOffset( this, options, i );
	                    } );
	            }
	
	            var docElem, win,
	                elem = this[ 0 ],
	                box = { top: 0, left: 0 },
	                doc = elem && elem.ownerDocument;
	
	            if ( !doc ) {
	                return;
	            }
	
	            docElem = doc.documentElement;
	
	            // Make sure it's not a disconnected DOM node
	            if ( !jQuery.contains( docElem, elem ) ) {
	                return box;
	            }
	
	            box = elem.getBoundingClientRect();
	            win = getWindow( doc );
	            return {
	                top: box.top + win.pageYOffset - docElem.clientTop,
	                left: box.left + win.pageXOffset - docElem.clientLeft
	            };
	        },
	
	        position: function() {
	            if ( !this[ 0 ] ) {
	                return;
	            }
	
	            var offsetParent, offset,
	                elem = this[ 0 ],
	                parentOffset = { top: 0, left: 0 };
	
	            // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	            // because it is its only offset parent
	            if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
	                // Assume getBoundingClientRect is there when computed position is fixed
	                offset = elem.getBoundingClientRect();
	
	            } else {
	
	                // Get *real* offsetParent
	                offsetParent = this.offsetParent();
	
	                // Get correct offsets
	                offset = this.offset();
	                if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
	                    parentOffset = offsetParent.offset();
	                }
	
	                // Add offsetParent borders
	                parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
	                parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
	            }
	
	            // Subtract parent offsets and element margins
	            return {
	                top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
	                left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
	            };
	        },
	
	        // This method will return documentElement in the following cases:
	        // 1) For the element inside the iframe without offsetParent, this method will return
	        //    documentElement of the parent window
	        // 2) For the hidden or detached element
	        // 3) For body or html element, i.e. in case of the html node - it will return itself
	        //
	        // but those exceptions were never presented as a real life use-cases
	        // and might be considered as more preferable results.
	        //
	        // This logic, however, is not guaranteed and can change at any point in the future
	        offsetParent: function() {
	            return this.map( function() {
	                var offsetParent = this.offsetParent;
	
	                while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
	                    offsetParent = offsetParent.offsetParent;
	                }
	
	                return offsetParent || documentElement;
	            } );
	        }
	    } );
	
	// Create scrollLeft and scrollTop methods
	    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	        var top = "pageYOffset" === prop;
	
	        jQuery.fn[ method ] = function( val ) {
	            return access( this, function( elem, method, val ) {
	                var win = getWindow( elem );
	
	                if ( val === undefined ) {
	                    return win ? win[ prop ] : elem[ method ];
	                }
	
	                if ( win ) {
	                    win.scrollTo(
	                        !top ? val : win.pageXOffset,
	                        top ? val : win.pageYOffset
	                    );
	
	                } else {
	                    elem[ method ] = val;
	                }
	            }, method, val, arguments.length );
	        };
	    } );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	    jQuery.each( [ "top", "left" ], function( i, prop ) {
	        jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
	            function( elem, computed ) {
	                if ( computed ) {
	                    computed = curCSS( elem, prop );
	
	                    // If curCSS returns percentage, fallback to offset
	                    return rnumnonpx.test( computed ) ?
	                    jQuery( elem ).position()[ prop ] + "px" :
	                        computed;
	                }
	            }
	        );
	    } );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	            function( defaultExtra, funcName ) {
	
	                // Margin is only for outerHeight, outerWidth
	                jQuery.fn[ funcName ] = function( margin, value ) {
	                    var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
	                        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
	                    return access( this, function( elem, type, value ) {
	                        var doc;
	
	                        if ( jQuery.isWindow( elem ) ) {
	
	                            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	                            // isn't a whole lot we can do. See pull request at this URL for discussion:
	                            // https://github.com/jquery/jquery/pull/764
	                            return elem.document.documentElement[ "client" + name ];
	                        }
	
	                        // Get document width or height
	                        if ( elem.nodeType === 9 ) {
	                            doc = elem.documentElement;
	
	                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	                            // whichever is greatest
	                            return Math.max(
	                                elem.body[ "scroll" + name ], doc[ "scroll" + name ],
	                                elem.body[ "offset" + name ], doc[ "offset" + name ],
	                                doc[ "client" + name ]
	                            );
	                        }
	
	                        return value === undefined ?
	
	                            // Get width or height on the element, requesting but not forcing parseFloat
	                            jQuery.css( elem, type, extra ) :
	
	                            // Set width or height on the element
	                            jQuery.style( elem, type, value, extra );
	                    }, type, chainable ? margin : undefined, chainable, null );
	                };
	            } );
	    } );
	
	
	    jQuery.fn.extend( {
	
	        bind: function( types, data, fn ) {
	            return this.on( types, null, data, fn );
	        },
	        unbind: function( types, fn ) {
	            return this.off( types, null, fn );
	        },
	
	        delegate: function( selector, types, data, fn ) {
	            return this.on( types, selector, data, fn );
	        },
	        undelegate: function( selector, types, fn ) {
	
	            // ( namespace ) or ( selector, types [, fn] )
	            return arguments.length === 1 ?
	                this.off( selector, "**" ) :
	                this.off( types, selector || "**", fn );
	        },
	        size: function() {
	            return this.length;
	        }
	    } );
	
	    jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	    if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return jQuery;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	
	
	
	    var
	
	    // Map over jQuery in case of overwrite
	        _jQuery = window.jQuery,
	
	    // Map over the $ in case of overwrite
	        _$ = window.$;
	
	    jQuery.noConflict = function( deep ) {
	        if ( window.$ === jQuery ) {
	            window.$ = _$;
	        }
	
	        if ( deep && window.jQuery === jQuery ) {
	            window.jQuery = _jQuery;
	        }
	
	        return jQuery;
	    };
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	    if ( !noGlobal ) {
	        window.jQuery = window.$ = jQuery;
	    }
	
	    return jQuery;
	}));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(7);
	module.exports=template('dep/component/carousel/tpl/carousel',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<div class="carousel-wrapper"> <ul class="carousel-img"> ';
	$each($data,function($value,$index){
	$out+=' <li> <a href="javascript:;"> <img src="/test/bundle/img/';
	$out+=$escape($value);
	$out+='.jpeg"> </a> </li> ';
	});
	$out+=' </ul> <div class="previous-next"> <span class="previous"> < </span> <span class="next"> > </span> </div> <ul class="carousel-nav"> ';
	$each($data,function($value,$index){
	$out+=' ';
	if($index == 0){
	$out+=' <li class="active">';
	$out+=$escape($value);
	$out+='</li> ';
	}else{
	$out+=' <li>';
	$out+=$escape($value);
	$out+='</li> ';
	}
	$out+=' ';
	});
	$out+=' </ul> </div>';
	return new String($out);
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy90ZXN0LmpzIiwid2VicGFjazovLy8uL2xlc3MvY29tbW9uL2Jhc2UubGVzcyIsIndlYnBhY2s6Ly8vLi9kZXAvY29tcG9uZW50L2Nhcm91c2VsL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2RlcC9jb21wb25lbnQvY2Fyb3VzZWwvY2Fyb3VzZWwubGVzcyIsIndlYnBhY2s6Ly8vLi9kZXAvanF1ZXJ5LTIuMi40LmpzIiwid2VicGFjazovLy8uL2RlcC9jb21wb25lbnQvY2Fyb3VzZWwvdHBsL2Nhcm91c2VsLnRwbCIsIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUMsYTs7Ozs7O0FDZEQsMEM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkIsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzlIQSwwQzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWUsWUFBWTs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVULDRCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RDtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVCx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsWUFBWTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBOztBQUVBLGdDQUErQixJQUFJOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3REFBdUQsSUFBSTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYix5QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0Esa0NBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLHlCQUF5QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsT0FBTztBQUM5Qix3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLFFBQVE7QUFDL0Isd0JBQXVCLFFBQVE7QUFDL0IsMEJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixnQkFBZ0I7QUFDdkMsMEJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsZUFBZTtBQUN0QywwQkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLGVBQWU7QUFDdEMsMEJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0Esc0RBQXFELE1BQU07QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsK0JBQThCOztBQUU5Qix5QkFBd0I7O0FBRXhCO0FBQ0EsMkJBQTBCLGlDQUFpQztBQUMzRCwyQkFBMEIsb0JBQW9CO0FBQzlDLDJCQUEwQixzQ0FBc0M7QUFDaEUsMkJBQTBCO0FBQzFCLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QyxhQUFhLEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE2Rjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0EsOEVBQTZFOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBaUc7O0FBRWpHO0FBQ0E7QUFDQTtBQUNBLGtGQUFpRjs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4R0FBNkc7O0FBRTdHO0FBQ0E7QUFDQTtBQUNBLDhGQUE2Rjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EsdUZBQXNGLFVBQVU7QUFDaEcsNERBQTJELDJCQUEyQjtBQUN0RjtBQUNBLHNEQUFxRCxNQUFNO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGdDQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGdDQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGdDQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXdCLHVFQUF1RTtBQUMvRjtBQUNBO0FBQ0EseUJBQXdCLDRCQUE0QjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLDBGQUF5Rjs7QUFFekY7QUFDQTtBQUNBLG1IQUFrSDs7QUFFbEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7O0FBRUEscUVBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQix3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFxRSxpREFBaUQ7QUFDdEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBc0U7QUFDdEUsZ0NBQStCLHdDQUF3QztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0Esd0JBQXVCLFFBQVE7QUFDL0Isd0JBQXVCLE1BQU07QUFDN0Isd0JBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQSxVQUFTOzs7O0FBSVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsZ0JBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBZ0MsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQSx5QkFBd0IsU0FBUztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLE9BQU87QUFDMUIsdUNBQXNDLHdCQUF3Qjs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLHFEQUFvRDtBQUNwRCxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLDBCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLDhCQUE2QjtBQUM3QjtBQUNBLDBCQUF5QjtBQUN6QixzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFrRTtBQUNsRSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCOztBQUVBLHVEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBcUMsYUFBYTtBQUNsRCxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCLFNBQVM7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQixrQkFBaUI7QUFDakI7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLG9CQUFvQixFQUFFO0FBQ2xELDZCQUE0QixxQ0FBcUMsRUFBRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwyQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZSxPQUFPO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLGdCQUFnQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUU7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUZBQWtGO0FBQ2xGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QixjQUFjOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxtQkFBbUI7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRCwrQkFBK0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFvQyx3REFBd0Q7QUFDNUY7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxxQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBbUQsY0FBYztBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUEyRCxPQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXdDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsT0FBTztBQUM5Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZSwrQkFBK0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFEQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF3RCxPQUFPO0FBQy9EO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLG9CQUFtQiw4QkFBOEI7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUErQixPQUFPO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCLGdCQUFlLE9BQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QyxVQUFVLFNBQVMsTUFBTSxhQUFhO0FBQ2xGLHdCQUF1QixlQUFlO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBK0MsMkJBQTJCLHNCQUFzQjtBQUNoRyxvQ0FBbUMsY0FBYztBQUNqRCw4QkFBNkIsV0FBVyxZQUFZO0FBQ3BELHlCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBeUMsU0FBUyxRQUFRLFFBQVE7QUFDbEU7O0FBRUE7QUFDQTtBQUNBLHFEQUFvRCx1QkFBdUI7QUFDM0Usb0NBQW1DLFNBQVMsU0FBUztBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQiwrREFBK0Q7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFlLE9BQU87O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLGdCQUFnQjtBQUNyRDtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyw0QkFBNEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUEsd0JBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkIsU0FBUztBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGdCQUFnQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYiwrREFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7O0FBRUEsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjs7QUFFQTs7QUFFQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLHlFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWlDLGNBQWM7QUFDL0MsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLGtCQUFrQjtBQUNuQyxtQkFBa0Isa0JBQWtCO0FBQ3BDLHNCQUFxQjtBQUNyQixNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFlLG1CQUFtQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7Ozs7QUFLTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7Ozs7O0FBS0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOzs7OztBQUtMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBLCtDQUE4QztBQUM5QztBQUNBOztBQUVBLGtCQUFpQjtBQUNqQjs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCLFNBQVM7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7Ozs7QUFLTDs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7Ozs7O0FBS0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixxQ0FBcUM7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCOztBQUV2QixvREFBbUQ7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF3QjtBQUN4QixpQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBd0M7O0FBRXhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBK0M7O0FBRS9DO0FBQ0Esb0NBQW1DO0FBQ25DLHlDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUU7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBd0Isb0NBQW9DO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYixVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWIsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWIsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7QUFDeEMsOEJBQTZCO0FBQzdCLDBCQUF5QjtBQUN6QixrQkFBaUI7QUFDakI7QUFDQSxNQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQzs7QUFFQSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUMsdUJBQXVCO0FBQ2hFLDBDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7Ozs7O0FBS0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7Ozs7QUFLTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLE1BQUs7Ozs7O0FBS0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7Ozs7QUFLTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUVBQWtFO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLGtCQUFrQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWdDOztBQUVoQyx1RUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLG1CQUFrQixzREFBc0Q7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQSxtQkFBa0IsbUNBQW1DO0FBQ3JELHVCQUFzQiw2REFBNkQ7QUFDbkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBLGNBQWE7QUFDYixNQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQyxHOzs7Ozs7QUNybFREO0FBQ0E7QUFDQTtBQUNBLGNBQWEsbUlBQW1JO0FBQ2hKO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUN6QkQsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0EsSUFBRztBQUNILEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGLEVBQUMsRyIsImZpbGUiOiJqcy90ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzEwLzMxLlxuICovXG5yZXF1aXJlKFwiY29tbW9uL2Jhc2UubGVzc1wiKTtcbnZhciB0ZXN0Q2Fyb3VzZWwgPSByZXF1aXJlKFwiY29tcG9uZW50L2Nhcm91c2VsL2Nhcm91c2VsLmpzXCIpO1xuXG50ZXN0Q2Fyb3VzZWwoXCJkb20xXCIsIDMsIHRydWUsIHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiA4MFxufSwgMzAwMDAsIDUwMCk7XG5cbnRlc3RDYXJvdXNlbChcImRvbTJcIiwgMywgdHJ1ZSwge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiaGVpZ2h0XCI6IDgwXG59LCAyMDAwLCA1MDApO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9qcy90ZXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vbGVzcy9jb21tb24vYmFzZS5sZXNzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDE2LzEwLzMxLlxuICovXG5yZXF1aXJlKFwiLi9jYXJvdXNlbC5sZXNzXCIpO1xudmFyICQgPSByZXF1aXJlKFwianF1ZXJ5LTIuMi40LmpzXCIpO1xudmFyIGNhcm91c2VsVHBsID0gcmVxdWlyZSgnLi90cGwvY2Fyb3VzZWwudHBsJyk7XG5cbmZ1bmN0aW9uIENhcm91c2VsKGRvbSwgY2Fyb3VzZWxTdW0sIGhhc0Nhcm91c2VsTmF2LCBzdHlsZSwgY2hhbmdlVGltZSwgYW5pbWF0aW9uVGltZSkge1xuICAgIHRoaXMuZG9tID0gJChcIi5cIiArIGRvbSk7XG4gICAgdGhpcy5jYXJvdXNlbFN1bSA9IGNhcm91c2VsU3VtO1xuICAgIHRoaXMuaGFzT3duUHJvcGVydHkgPSBoYXNDYXJvdXNlbE5hdjtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5jaGFuZ2VUaW1lID0gY2hhbmdlVGltZSB8fCAzMDAwO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IGFuaW1hdGlvblRpbWUgfHwgNTAwO1xuICAgIHRoaXMuaW5kZXggPSAwOyAvL+aYvuekuuWbvueJh+eahOe0ouW8lVxuICAgIHRoaXMudGltZXIgPSBudWxsOyAvL+WumuaXtuWZqFxuICAgIHRoaXMuaW5pdERvbSgpO1xuICAgIHRoaXMuaW5pdEJ0bnMoKTtcbn1cblxuQ2Fyb3VzZWwucHJvdG90eXBlID0ge1xuICAgIC8v5LiN5Y+C5LiO6YC76L6R54K5XG4gICAgaW5pdFN0YXRpYzogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5jc3Moe1xuICAgICAgICAgICAgJ3dpZHRoJzogdGhpcy5jYXJvdXNlbFN1bSAqIHRoaXMuc3R5bGUud2lkdGhcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0RG9tOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZG9tLmh0bWwoY2Fyb3VzZWxUcGwoWzEsIDIsIDNdKSk7XG4gICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3ModGhpcy5zdHlsZSk7XG4gICAgICAgIHRoaXMuaW5pdFN0YXRpYygpO1xuICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgIH0sXG4gICAgaW5pdFRpbWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0VGhpcyA9IHRoaXM7XG4gICAgICAgIHRUaGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdFRoaXMuY2hhbmdlTmF2KCk7XG4gICAgICAgIH0sIHRUaGlzLmNoYW5nZVRpbWUpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDkuIvkuIDpobVcbiAgICAgKiBAcGFyYW0gaXNDbGljayDmmK/lkKbmmK/pgJrov4fngrnlh7vkuIvkuIDpobXmjInpkq7op6blj5FcbiAgICAgKi9cbiAgICBuZXh0OiBmdW5jdGlvbiAoaXNDbGljaykge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIGlmIChpc0NsaWNrKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMuY2Fyb3VzZWxTdW0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgLy/ml6DnvJ3lpITnkIZcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoL3Rlc3QvYnVuZGxlL2ltZy8nICsgKHRoaXMuY2Fyb3VzZWxTdW0pICsgJy5qcGVnKSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kb20uZmluZChcIi5jYXJvdXNlbC1pbWdcIikuY3NzKFwibGVmdFwiLCB0aGlzLnN0eWxlLndpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZU5hdigpO1xuICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnbGVmdCc6IC10aGlzLnN0eWxlLndpZHRoICogdGhpcy5pbmRleFxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgIH0sXG4gICAgcHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbmRleC0tO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmluaXRUaW1lcigpO1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY2Fyb3VzZWxTdW0gLSAxO1xuICAgICAgICAgICAgLy/ml6DnvJ3lpITnkIZcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtd3JhcHBlclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd1cmwoL3Rlc3QvYnVuZGxlL2ltZy8nICsgMSArICcuanBlZyknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtaW1nXCIpLmNzcyhcImxlZnRcIiwgLXRoaXMuc3R5bGUud2lkdGggKiAodGhpcy5pbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZU5hdigpO1xuICAgICAgICB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLWltZ1wiKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAnbGVmdCc6IC10aGlzLnN0eWxlLndpZHRoICogdGhpcy5pbmRleFxuICAgICAgICB9LCB0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgIH0sXG4gICAgLy/mmL7npLropoHmmL7npLrnmoRuYXZcbiAgICBjaGFuZ2VOYXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLmRvbS5maW5kKFwiLmNhcm91c2VsLW5hdlwiKTtcbiAgICAgICAgdGVtcC5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgdGVtcC5maW5kKFwibGlcIikuZXEodGhpcy5pbmRleCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSxcbiAgICAvLyDngrnlh7tjYXJvdXNlbC1uYXYgbGlcbiAgICBnb1RvOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuZG9tLmZpbmQoXCIuY2Fyb3VzZWwtaW1nXCIpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICdsZWZ0JzogLXRoaXMuc3R5bGUud2lkdGggKiB0aGlzLmluZGV4XG4gICAgICAgIH0sIHRoaXMuYW5pbWF0aW9uVGltZSwgdGhpcy5pbml0VGltZXIoKSk7XG4gICAgfSxcbiAgICBpbml0QnRuczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdFRoaXMgPSB0aGlzO1xuICAgICAgICAvLyBwcmV2aW91cyArIG5leHQgKyDliJLov4dpbWcgKyDova7mkq1uYXZcbiAgICAgICAgdFRoaXMuZG9tLmRlbGVnYXRlKFwiLnByZXZpb3VzXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMucHJldmlvdXMoKTtcbiAgICAgICAgfSkuZGVsZWdhdGUoXCIubmV4dFwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRUaGlzLm5leHQodHJ1ZSk7XG4gICAgICAgIH0pLmRlbGVnYXRlKFwiLmNhcm91c2VsLWltZ1wiLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRUaGlzLnRpbWVyKTtcbiAgICAgICAgfSkuZGVsZWdhdGUoXCIuY2Fyb3VzZWwtaW1nXCIsIFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdFRoaXMuaW5pdFRpbWVyKCk7XG4gICAgICAgIH0pLmRlbGVnYXRlKFwiLmNhcm91c2VsLW5hdiBsaVwiLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRUaGlzLmluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICAgICAgdFRoaXMuY2hhbmdlTmF2KCk7XG4gICAgICAgICAgICB0VGhpcy5nb1RvKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICog6L2u5pKt5Zu+XG4gKiBAcGFyYW0gZG9tICAgICAgICAgICAgICAg6L2u5pKt5Zu+6IqC54K5XG4gKiBAcGFyYW0gY2Fyb3VzZWxTdW0gICAgICAg6L2u5pKt5Zu+5pyJ5Yeg5bygXG4gKiBAcGFyYW0gaGFzQ2Fyb3VzZWxOYXYgICAg6L2u5pKt5Zu+5piv5ZCm5a2Y5Zyo5LiL6Z2i55qELS0t54Sm54K55YiH5o2iXG4gKiBAcGFyYW0gc3R5bGUgICAgICAgICAgICAg6L2u5pKt5Zu+5a696auYIChvYmopXG4gKiBAcGFyYW0gY2hhbmdlVGltZSAgICAgICAg6L2u5pKt5Zu+5YiH5o2i5pe26Ze06Ze06ZqUICjpu5jorqQzMDAwIG1zKVxuICogQHBhcmFtIGFuaW1hdGlvblRpbWUgICAgIOi9ruaSreWbvuWIh+aNouWKqOeUu+aXtumXtCAo6buY6K6kMzAwIG1zKVxuICovXG5cbi8vVE9ETyDkvKDlj4JkYXRhIOi1i+WAvOWbvueJh+WcsOWdgOWIsHRwbOWGhWxp5LiKIOaXoOe8neWkhOeQhuWPluWAvOi1i+WAvFxuLy9UT0RPIOeUmuiHs+S8oOWPgmRhdGHlkI4g6L2u5pKt5Zu+55qE5byg5pWw5bey57uP56Gu5a6aIOaJgOS7peS8oGRhdGHmm7/ku6PlvKDmlbDlj4LmlbDkuZ/lj6/ku6Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbSwgY2Fyb3VzZWxTdW0sIGhhc0Nhcm91c2VsTmF2LCBzdHlsZSwgY2hhbmdlVGltZSwgYW5pbWF0aW9uVGltZSkge1xuICAgIHJldHVybiBuZXcgQ2Fyb3VzZWwoZG9tLCBjYXJvdXNlbFN1bSwgaGFzQ2Fyb3VzZWxOYXYsIHN0eWxlLCBjaGFuZ2VUaW1lLCBhbmltYXRpb25UaW1lKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RlcC9jb21wb25lbnQvY2Fyb3VzZWwvY2Fyb3VzZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kZXAvY29tcG9uZW50L2Nhcm91c2VsL2Nhcm91c2VsLmxlc3NcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjIuMi40XG4gKiBodHRwOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBJbmNsdWRlcyBTaXp6bGUuanNcbiAqIGh0dHA6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTYtMDUtMjBUMTc6MjNaXG4gKi9cblxuKGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG5cbiAgICBpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuICAgICAgICAvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG4gICAgICAgIC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG4gICAgICAgIC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG4gICAgICAgIC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBmYWN0b3J5IGFzIG1vZHVsZS5leHBvcnRzLlxuICAgICAgICAvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuICAgICAgICAvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG4gICAgICAgIC8vIFNlZSB0aWNrZXQgIzE0NTQ5IGZvciBtb3JlIGluZm8uXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmRvY3VtZW50ID9cbiAgICAgICAgICAgIGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcbiAgICAgICAgICAgIGZ1bmN0aW9uKCB3ICkge1xuICAgICAgICAgICAgICAgIGlmICggIXcuZG9jdW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkoIHcgKTtcbiAgICAgICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeSggZ2xvYmFsICk7XG4gICAgfVxuXG4vLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxufSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XG5cbi8vIFN1cHBvcnQ6IEZpcmVmb3ggMTgrXG4vLyBDYW4ndCBiZSBpbiBzdHJpY3QgbW9kZSwgc2V2ZXJhbCBsaWJzIGluY2x1ZGluZyBBU1AuTkVUIHRyYWNlXG4vLyB0aGUgc3RhY2sgdmlhIGFyZ3VtZW50cy5jYWxsZXIuY2FsbGVlIGFuZCBGaXJlZm94IGRpZXMgaWZcbi8vIHlvdSB0cnkgdG8gdHJhY2UgdGhyb3VnaCBcInVzZSBzdHJpY3RcIiBjYWxsIGNoYWlucy4gKCMxMzMzNSlcbi8vXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIHNsaWNlID0gYXJyLnNsaWNlO1xuXG4gICAgdmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cbiAgICB2YXIgcHVzaCA9IGFyci5wdXNoO1xuXG4gICAgdmFyIGluZGV4T2YgPSBhcnIuaW5kZXhPZjtcblxuICAgIHZhciBjbGFzczJ0eXBlID0ge307XG5cbiAgICB2YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG4gICAgdmFyIGhhc093biA9IGNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgICB2YXIgc3VwcG9ydCA9IHt9O1xuXG5cblxuICAgIHZhclxuICAgICAgICB2ZXJzaW9uID0gXCIyLjIuNFwiLFxuXG4gICAgLy8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcbiAgICAgICAgalF1ZXJ5ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXG4gICAgICAgICAgICAvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcbiAgICAgICAgICAgIC8vIE5lZWQgaW5pdCBpZiBqUXVlcnkgaXMgY2FsbGVkIChqdXN0IGFsbG93IGVycm9yIHRvIGJlIHRocm93biBpZiBub3QgaW5jbHVkZWQpXG4gICAgICAgICAgICByZXR1cm4gbmV3IGpRdWVyeS5mbi5pbml0KCBzZWxlY3RvciwgY29udGV4dCApO1xuICAgICAgICB9LFxuXG4gICAgLy8gU3VwcG9ydDogQW5kcm9pZDw0LjFcbiAgICAvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1BcbiAgICAgICAgcnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXG5cbiAgICAvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcbiAgICAgICAgcm1zUHJlZml4ID0gL14tbXMtLyxcbiAgICAgICAgcmRhc2hBbHBoYSA9IC8tKFtcXGRhLXpdKS9naSxcblxuICAgIC8vIFVzZWQgYnkgalF1ZXJ5LmNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcbiAgICAgICAgZmNhbWVsQ2FzZSA9IGZ1bmN0aW9uKCBhbGwsIGxldHRlciApIHtcbiAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfTtcblxuICAgIGpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLy8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuICAgICAgICBqcXVlcnk6IHZlcnNpb24sXG5cbiAgICAgICAgY29uc3RydWN0b3I6IGpRdWVyeSxcblxuICAgICAgICAvLyBTdGFydCB3aXRoIGFuIGVtcHR5IHNlbGVjdG9yXG4gICAgICAgIHNlbGVjdG9yOiBcIlwiLFxuXG4gICAgICAgIC8vIFRoZSBkZWZhdWx0IGxlbmd0aCBvZiBhIGpRdWVyeSBvYmplY3QgaXMgMFxuICAgICAgICBsZW5ndGg6IDAsXG5cbiAgICAgICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEdldCB0aGUgTnRoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXQgT1JcbiAgICAgICAgLy8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiggbnVtICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bSAhPSBudWxsID9cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcbiAgICAgICAgICAgICAgICAoIG51bSA8IDAgPyB0aGlzWyBudW0gKyB0aGlzLmxlbmd0aCBdIDogdGhpc1sgbnVtIF0gKSA6XG5cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbCggdGhpcyApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcbiAgICAgICAgLy8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG4gICAgICAgIHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuICAgICAgICAgICAgdmFyIHJldCA9IGpRdWVyeS5tZXJnZSggdGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyApO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuICAgICAgICAgICAgcmV0LnByZXZPYmplY3QgPSB0aGlzO1xuICAgICAgICAgICAgcmV0LmNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjYWxsYmFjayBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuXG4gICAgICAgIGVhY2g6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZWFjaCggdGhpcywgY2FsbGJhY2sgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXA6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoIGVsZW0sIGksIGVsZW0gKTtcbiAgICAgICAgICAgIH0gKSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggc2xpY2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXEoIDAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxKCAtMSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVxOiBmdW5jdGlvbiggaSApIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqID49IDAgJiYgaiA8IGxlbiA/IFsgdGhpc1sgaiBdIF0gOiBbXSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmV2T2JqZWN0IHx8IHRoaXMuY29uc3RydWN0b3IoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAgICAgIC8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxuICAgICAgICBwdXNoOiBwdXNoLFxuICAgICAgICBzb3J0OiBhcnIuc29ydCxcbiAgICAgICAgc3BsaWNlOiBhcnIuc3BsaWNlXG4gICAgfTtcblxuICAgIGpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcbiAgICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1sgMCBdIHx8IHt9LFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgZGVlcCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cbiAgICAgICAgaWYgKCB0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIiApIHtcbiAgICAgICAgICAgIGRlZXAgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgIC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1sgaSBdIHx8IHt9O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG4gICAgICAgIGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiAhalF1ZXJ5LmlzRnVuY3Rpb24oIHRhcmdldCApICkge1xuICAgICAgICAgICAgdGFyZ2V0ID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcbiAgICAgICAgaWYgKCBpID09PSBsZW5ndGggKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjID0gdGFyZ2V0WyBuYW1lIF07XG4gICAgICAgICAgICAgICAgICAgIGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldCA9PT0gY29weSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG4gICAgICAgICAgICAgICAgICAgIGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvcHkgKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKCBjb3B5SXNBcnJheSA9IGpRdWVyeS5pc0FycmF5KCBjb3B5ICkgKSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvcHlJc0FycmF5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzQXJyYXkoIHNyYyApID8gc3JjIDogW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHNyYyApID8gc3JjIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WyBuYW1lIF0gPSBqUXVlcnkuZXh0ZW5kKCBkZWVwLCBjbG9uZSwgY29weSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFsgbmFtZSBdID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIGpRdWVyeS5leHRlbmQoIHtcblxuICAgICAgICAvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2VcbiAgICAgICAgZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuICAgICAgICAvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuICAgICAgICBpc1JlYWR5OiB0cnVlLFxuXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBub29wOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAgIGlzRnVuY3Rpb246IGZ1bmN0aW9uKCBvYmogKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LnR5cGUoIG9iaiApID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcblxuICAgICAgICBpc1dpbmRvdzogZnVuY3Rpb24oIG9iaiApIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNOdW1lcmljOiBmdW5jdGlvbiggb2JqICkge1xuXG4gICAgICAgICAgICAvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAobnVsbHx0cnVlfGZhbHNlfFwiXCIpXG4gICAgICAgICAgICAvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG4gICAgICAgICAgICAvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cbiAgICAgICAgICAgIC8vIGFkZGluZyAxIGNvcnJlY3RzIGxvc3Mgb2YgcHJlY2lzaW9uIGZyb20gcGFyc2VGbG9hdCAoIzE1MTAwKVxuICAgICAgICAgICAgdmFyIHJlYWxTdHJpbmdPYmogPSBvYmogJiYgb2JqLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gIWpRdWVyeS5pc0FycmF5KCBvYmogKSAmJiAoIHJlYWxTdHJpbmdPYmogLSBwYXJzZUZsb2F0KCByZWFsU3RyaW5nT2JqICkgKyAxICkgPj0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuICAgICAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAgICAgLy8gTm90IHBsYWluIG9iamVjdHM6XG4gICAgICAgICAgICAvLyAtIEFueSBvYmplY3Qgb3IgdmFsdWUgd2hvc2UgaW50ZXJuYWwgW1tDbGFzc11dIHByb3BlcnR5IGlzIG5vdCBcIltvYmplY3QgT2JqZWN0XVwiXG4gICAgICAgICAgICAvLyAtIERPTSBub2Rlc1xuICAgICAgICAgICAgLy8gLSB3aW5kb3dcbiAgICAgICAgICAgIGlmICggalF1ZXJ5LnR5cGUoIG9iaiApICE9PSBcIm9iamVjdFwiIHx8IG9iai5ub2RlVHlwZSB8fCBqUXVlcnkuaXNXaW5kb3coIG9iaiApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuICAgICAgICAgICAgaWYgKCBvYmouY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duLmNhbGwoIG9iaiwgXCJjb25zdHJ1Y3RvclwiICkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duLmNhbGwoIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgfHwge30sIFwiaXNQcm90b3R5cGVPZlwiICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcbiAgICAgICAgICAgIC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duXG4gICAgICAgICAgICBmb3IgKCBrZXkgaW4gb2JqICkge31cblxuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkIHx8IGhhc093bi5jYWxsKCBvYmosIGtleSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG4gICAgICAgICAgICB2YXIgbmFtZTtcbiAgICAgICAgICAgIGZvciAoIG5hbWUgaW4gb2JqICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHR5cGU6IGZ1bmN0aW9uKCBvYmogKSB7XG4gICAgICAgICAgICBpZiAoIG9iaiA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogKyBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMCwgaU9TPDYgKGZ1bmN0aW9uaXNoIFJlZ0V4cClcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG4gICAgICAgICAgICBjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBvYmo7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZhbHVhdGVzIGEgc2NyaXB0IGluIGEgZ2xvYmFsIGNvbnRleHRcbiAgICAgICAgZ2xvYmFsRXZhbDogZnVuY3Rpb24oIGNvZGUgKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0LFxuICAgICAgICAgICAgICAgIGluZGlyZWN0ID0gZXZhbDtcblxuICAgICAgICAgICAgY29kZSA9IGpRdWVyeS50cmltKCBjb2RlICk7XG5cbiAgICAgICAgICAgIGlmICggY29kZSApIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBjb2RlIGluY2x1ZGVzIGEgdmFsaWQsIHByb2xvZ3VlIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgLy8gc3RyaWN0IG1vZGUgcHJhZ21hLCBleGVjdXRlIGNvZGUgYnkgaW5qZWN0aW5nIGFcbiAgICAgICAgICAgICAgICAvLyBzY3JpcHQgdGFnIGludG8gdGhlIGRvY3VtZW50LlxuICAgICAgICAgICAgICAgIGlmICggY29kZS5pbmRleE9mKCBcInVzZSBzdHJpY3RcIiApID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0ID0gY29kZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGF2b2lkIHRoZSBET00gbm9kZSBjcmVhdGlvbiwgaW5zZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCByZW1vdmFsIGJ5IHVzaW5nIGFuIGluZGlyZWN0IGdsb2JhbCBldmFsXG5cbiAgICAgICAgICAgICAgICAgICAgaW5kaXJlY3QoIGNvZGUgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuICAgICAgICAvLyBTdXBwb3J0OiBJRTktMTErXG4gICAgICAgIC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3MilcbiAgICAgICAgY2FtZWxDYXNlOiBmdW5jdGlvbiggc3RyaW5nICkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKCBybXNQcmVmaXgsIFwibXMtXCIgKS5yZXBsYWNlKCByZGFzaEFscGhhLCBmY2FtZWxDYXNlICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbm9kZU5hbWU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZWFjaDogZnVuY3Rpb24oIG9iaiwgY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoLCBpID0gMDtcblxuICAgICAgICAgICAgaWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICggaSBpbiBvYmogKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZDw0LjFcbiAgICAgICAgdHJpbTogZnVuY3Rpb24oIHRleHQgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dCA9PSBudWxsID9cbiAgICAgICAgICAgICAgICBcIlwiIDpcbiAgICAgICAgICAgICAgICAoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG4gICAgICAgIG1ha2VBcnJheTogZnVuY3Rpb24oIGFyciwgcmVzdWx0cyApIHtcbiAgICAgICAgICAgIHZhciByZXQgPSByZXN1bHRzIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoIGFyciAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgIGlmICggaXNBcnJheUxpa2UoIE9iamVjdCggYXJyICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKCByZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIGFyciBdIDogYXJyXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaC5jYWxsKCByZXQsIGFyciApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbkFycmF5OiBmdW5jdGlvbiggZWxlbSwgYXJyLCBpICkge1xuICAgICAgICAgICAgcmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgICAgICBpID0gZmlyc3QubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKCA7IGogPCBsZW47IGorKyApIHtcbiAgICAgICAgICAgICAgICBmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3QubGVuZ3RoID0gaTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja0ludmVyc2UsXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IFtdLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcbiAgICAgICAgICAgIC8vIHRoYXQgcGFzcyB0aGUgdmFsaWRhdG9yIGZ1bmN0aW9uXG4gICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG4gICAgICAgIG1hcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgYXJnICkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCwgdmFsdWUsXG4gICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgcmV0ID0gW107XG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG4gICAgICAgICAgICBpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goIHZhbHVlICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKCBpIGluIGVsZW1zICkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHZhbHVlICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaCggdmFsdWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseSggW10sIHJldCApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuICAgICAgICBndWlkOiAxLFxuXG4gICAgICAgIC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuICAgICAgICAvLyBhcmd1bWVudHMuXG4gICAgICAgIHByb3h5OiBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG4gICAgICAgICAgICB2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBmblsgY29udGV4dCBdO1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBmbjtcbiAgICAgICAgICAgICAgICBmbiA9IHRtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcbiAgICAgICAgICAgIC8vIHRoaXMgdGhyb3dzIGEgVHlwZUVycm9yLCBidXQgd2Ugd2lsbCBqdXN0IHJldHVybiB1bmRlZmluZWQuXG4gICAgICAgICAgICBpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggZm4gKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTaW11bGF0ZWQgYmluZFxuICAgICAgICAgICAgYXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuICAgICAgICAgICAgcHJveHkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoIGNvbnRleHQgfHwgdGhpcywgYXJncy5jb25jYXQoIHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApICkgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgcHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcblxuICAgICAgICBub3c6IERhdGUubm93LFxuXG4gICAgICAgIC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0XG4gICAgfSApO1xuXG4vLyBKU0hpbnQgd291bGQgZXJyb3Igb24gdGhpcyBjb2RlIGR1ZSB0byB0aGUgU3ltYm9sIG5vdCBiZWluZyBkZWZpbmVkIGluIEVTNS5cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5qc2hpbnRyYyB3b3VsZCBjcmVhdGUgYSBkYW5nZXIgb2YgdXNpbmcgdGhlIGdsb2JhbFxuLy8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGp1c3QgZGlzYWJsZSBKU0hpbnQgZm9yIHRoZXNlXG4vLyB0aHJlZSBsaW5lcy5cbiAgICAvKiBqc2hpbnQgaWdub3JlOiBzdGFydCAqL1xuICAgIGlmICggdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICkge1xuICAgICAgICBqUXVlcnkuZm5bIFN5bWJvbC5pdGVyYXRvciBdID0gYXJyWyBTeW1ib2wuaXRlcmF0b3IgXTtcbiAgICB9XG4gICAgLyoganNoaW50IGlnbm9yZTogZW5kICovXG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxuICAgIGpRdWVyeS5lYWNoKCBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoIFwiIFwiICksXG4gICAgICAgIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuICAgICAgICAgICAgY2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gKTtcblxuICAgIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKCBvYmogKSB7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogaU9TIDguMiAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG4gICAgICAgIC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcbiAgICAgICAgLy8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG4gICAgICAgIC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcbiAgICAgICAgdmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG4gICAgICAgICAgICB0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXG4gICAgICAgIGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgdHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmICggbGVuZ3RoIC0gMSApIGluIG9iajtcbiAgICB9XG4gICAgdmFyIFNpenpsZSA9XG4gICAgICAgIC8qIVxuICAgICAgICAgKiBTaXp6bGUgQ1NTIFNlbGVjdG9yIEVuZ2luZSB2Mi4yLjFcbiAgICAgICAgICogaHR0cDovL3NpenpsZWpzLmNvbS9cbiAgICAgICAgICpcbiAgICAgICAgICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAgICAgICAgICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gICAgICAgICAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAgICAgICAgICpcbiAgICAgICAgICogRGF0ZTogMjAxNS0xMC0xN1xuICAgICAgICAgKi9cbiAgICAgICAgKGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbiAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgIHN1cHBvcnQsXG4gICAgICAgICAgICAgICAgRXhwcixcbiAgICAgICAgICAgICAgICBnZXRUZXh0LFxuICAgICAgICAgICAgICAgIGlzWE1MLFxuICAgICAgICAgICAgICAgIHRva2VuaXplLFxuICAgICAgICAgICAgICAgIGNvbXBpbGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgICAgIG91dGVybW9zdENvbnRleHQsXG4gICAgICAgICAgICAgICAgc29ydElucHV0LFxuICAgICAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSxcblxuICAgICAgICAgICAgLy8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuICAgICAgICAgICAgICAgIHNldERvY3VtZW50LFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgICAgIGRvY0VsZW0sXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRJc0hUTUwsXG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLFxuICAgICAgICAgICAgICAgIHJidWdneU1hdGNoZXMsXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICAgICAgICBjb250YWlucyxcblxuICAgICAgICAgICAgLy8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxuICAgICAgICAgICAgICAgIGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkRG9jID0gd2luZG93LmRvY3VtZW50LFxuICAgICAgICAgICAgICAgIGRpcnJ1bnMgPSAwLFxuICAgICAgICAgICAgICAgIGRvbmUgPSAwLFxuICAgICAgICAgICAgICAgIGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICAgICAgICAgIHRva2VuQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICAgICAgICAgIGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGEgPT09IGIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYWwtcHVycG9zZSBjb25zdGFudHNcbiAgICAgICAgICAgICAgICBNQVhfTkVHQVRJVkUgPSAxIDw8IDMxLFxuXG4gICAgICAgICAgICAvLyBJbnN0YW5jZSBtZXRob2RzXG4gICAgICAgICAgICAgICAgaGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICBhcnIgPSBbXSxcbiAgICAgICAgICAgICAgICBwb3AgPSBhcnIucG9wLFxuICAgICAgICAgICAgICAgIHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG4gICAgICAgICAgICAgICAgcHVzaCA9IGFyci5wdXNoLFxuICAgICAgICAgICAgICAgIHNsaWNlID0gYXJyLnNsaWNlLFxuICAgICAgICAgICAgLy8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG4gICAgICAgICAgICAvLyBodHRwOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcbiAgICAgICAgICAgICAgICBpbmRleE9mID0gZnVuY3Rpb24oIGxpc3QsIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbGlzdFtpXSA9PT0gZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGJvb2xlYW5zID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxuXG4gICAgICAgICAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcblxuICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsXG5cbiAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuICAgICAgICAgICAgICAgICAgICBcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgK1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcbiAgICAgICAgICAgICAgICAgICAgXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIiArIGlkZW50aWZpZXIgKyBcIikpfClcIiArIHdoaXRlc3BhY2UgK1xuICAgICAgICAgICAgICAgICAgICBcIipcXFxcXVwiLFxuXG4gICAgICAgICAgICAgICAgcHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG4gICAgICAgICAgICAgICAgICAgIFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4gc2ltcGxlIChjYXB0dXJlIDYpXG4gICAgICAgICAgICAgICAgICAgIFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcbiAgICAgICAgICAgICAgICAgICAgXCIuKlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCIpXFxcXCl8KVwiLFxuXG4gICAgICAgICAgICAvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG4gICAgICAgICAgICAgICAgcndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiICksXG4gICAgICAgICAgICAgICAgcnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiApLFxuXG4gICAgICAgICAgICAgICAgcmNvbW1hID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG4gICAgICAgICAgICAgICAgcmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cbiAgICAgICAgICAgICAgICByYXR0cmlidXRlUXVvdGVzID0gbmV3IFJlZ0V4cCggXCI9XCIgKyB3aGl0ZXNwYWNlICsgXCIqKFteXFxcXF0nXFxcIl0qPylcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLCBcImdcIiApLFxuXG4gICAgICAgICAgICAgICAgcnBzZXVkbyA9IG5ldyBSZWdFeHAoIHBzZXVkb3MgKSxcbiAgICAgICAgICAgICAgICByaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cbiAgICAgICAgICAgICAgICBtYXRjaEV4cHIgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiSURcIjogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuICAgICAgICAgICAgICAgICAgICBcIkNMQVNTXCI6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG4gICAgICAgICAgICAgICAgICAgIFwiVEFHXCI6IG5ldyBSZWdFeHAoIFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIgKSxcbiAgICAgICAgICAgICAgICAgICAgXCJBVFRSXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuICAgICAgICAgICAgICAgICAgICBcIlBTRVVET1wiOiBuZXcgUmVnRXhwKCBcIl5cIiArIHBzZXVkb3MgKSxcbiAgICAgICAgICAgICAgICAgICAgXCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcbiAgICAgICAgICAgICAgICAgICAgXCJib29sXCI6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxuICAgICAgICAgICAgICAgICAgICAvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG4gICAgICAgICAgICAgICAgICAgIFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcmlucHV0cyA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG4gICAgICAgICAgICAgICAgcmhlYWRlciA9IC9eaFxcZCQvaSxcblxuICAgICAgICAgICAgICAgIHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG4gICAgICAgICAgICAvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgICBycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cbiAgICAgICAgICAgICAgICByc2libGluZyA9IC9bK35dLyxcbiAgICAgICAgICAgICAgICByZXNjYXBlID0gLyd8XFxcXC9nLFxuXG4gICAgICAgICAgICAvLyBDU1MgZXNjYXBlcyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgcnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIgKSxcbiAgICAgICAgICAgICAgICBmdW5lc2NhcGUgPSBmdW5jdGlvbiggXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5hTiBtZWFucyBub24tY29kZXBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaWdoICE9PSBoaWdoIHx8IGVzY2FwZWRXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaCA8IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJNUCBjb2RlcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwbGVtZW50YWwgUGxhbmUgY29kZXBvaW50IChzdXJyb2dhdGUgcGFpcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBVc2VkIGZvciBpZnJhbWVzXG4gICAgICAgICAgICAvLyBTZWUgc2V0RG9jdW1lbnQoKVxuICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG4gICAgICAgICAgICAvLyBlcnJvciBpbiBJRVxuICAgICAgICAgICAgICAgIHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4vLyBPcHRpbWl6ZSBmb3IgcHVzaC5hcHBseSggXywgTm9kZUxpc3QgKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICAoYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSksXG4gICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxuICAgICAgICAgICAgICAgIC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcbiAgICAgICAgICAgICAgICBhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xuICAgICAgICAgICAgfSBjYXRjaCAoIGUgKSB7XG4gICAgICAgICAgICAgICAgcHVzaCA9IHsgYXBwbHk6IGFyci5sZW5ndGggP1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hfbmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSApO1xuICAgICAgICAgICAgICAgICAgICB9IDpcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTw5XG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSB0YXJnZXQubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoICh0YXJnZXRbaisrXSA9IGVsc1tpKytdKSApIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuICAgICAgICAgICAgICAgIHZhciBtLCBpLCBlbGVtLCBuaWQsIG5pZHNlbGVjdCwgbWF0Y2gsIGdyb3VwcywgbmV3U2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuICAgICAgICAgICAgICAgIC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbm9kZVR5cGUgPSBjb250ZXh0ID8gY29udGV4dC5ub2RlVHlwZSA6IDk7XG5cbiAgICAgICAgICAgICAgICByZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBmcm9tIGNhbGxzIHdpdGggaW52YWxpZCBzZWxlY3RvciBvciBjb250ZXh0XG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUeXBlICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ICYmIG5vZGVUeXBlICE9PSAxMSApIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCAhc2VlZCApIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoICggY29udGV4dCA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogcHJlZmVycmVkRG9jICkgIT09IGRvY3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50SXNIVE1MICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub2RlVHlwZSAhPT0gMTEgJiYgKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElEIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAobSA9IG1hdGNoWzFdKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEb2N1bWVudCBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIChlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtLmlkID09PSBtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudCBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmlkID09PSBtICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUeXBlIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggbWF0Y2hbMl0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xhc3Mgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCAobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggbSApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGFrZSBhZHZhbnRhZ2Ugb2YgcXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdXBwb3J0LnFzYSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoIHNlbGVjdG9yICkpICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub2RlVHlwZSAhPT0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcVNBIGxvb2tzIG91dHNpZGUgRWxlbWVudCBjb250ZXh0LCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHdvcmthcm91bmQgdGVjaG5pcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIChuaWQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZSggXCJpZFwiICkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlkID0gbmlkLnJlcGxhY2UoIHJlc2NhcGUsIFwiXFxcXCQmXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIChuaWQgPSBleHBhbmRvKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJlZml4IGV2ZXJ5IHNlbGVjdG9yIGluIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZ3JvdXBzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlkc2VsZWN0ID0gcmlkZW50aWZpZXIudGVzdCggbmlkICkgPyBcIiNcIiArIG5pZCA6IFwiW2lkPSdcIiArIG5pZCArIFwiJ11cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHNbaV0gPSBuaWRzZWxlY3QgKyBcIiBcIiArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gZ3JvdXBzLmpvaW4oIFwiLFwiICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG5ld1NlbGVjdG9yICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaC5hcHBseSggcmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIG5ld1NlbGVjdG9yIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoIHFzYUVycm9yICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBuaWQgPT09IGV4cGFuZG8gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWxsIG90aGVyc1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICAgICAgICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICAgICAgICAgICAgICpcdHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gICAgICAgICAgICAgKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2FjaGUoIGtleSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhY2hlWyBrZXlzLnNoaWZ0KCkgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hcmtGdW5jdGlvbiggZm4gKSB7XG4gICAgICAgICAgICAgICAgZm5bIGV4cGFuZG8gXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFN1cHBvcnQgdGVzdGluZyB1c2luZyBhbiBlbGVtZW50XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZGl2IGFuZCBleHBlY3RzIGEgYm9vbGVhbiByZXN1bHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWZuKCBkaXYgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkaXYucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBkaXYgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuICAgICAgICAgICAgICAgICAgICBkaXYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBzYW1lIGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgc3BlY2lmaWVkIGF0dHJzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSGFuZGxlKCBhdHRycywgaGFuZGxlciApIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuICAgICAgICAgICAgICAgICAgICBpID0gYXJyLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgICAgICBFeHByLmF0dHJIYW5kbGVbIGFycltpXSBdID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBhXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzaWJsaW5nQ2hlY2soIGEsIGIgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1ciA9IGIgJiYgYSxcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGN1ciAmJiBhLm5vZGVUeXBlID09PSAxICYmIGIubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICggfmIuc291cmNlSW5kZXggfHwgTUFYX05FR0FUSVZFICkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKCB+YS5zb3VyY2VJbmRleCB8fCBNQVhfTkVHQVRJVkUgKTtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuICAgICAgICAgICAgICAgIGlmICggZGlmZiApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcbiAgICAgICAgICAgICAgICBpZiAoIGN1ciApIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoY3VyID0gY3VyLm5leHRTaWJsaW5nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY3VyID09PSBiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBhID8gMSA6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0UHNldWRvKCB0eXBlICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBidXR0b25zXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25Qc2V1ZG8oIHR5cGUgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggYXJndW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hJbmRleGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggZWxlbWVudHMgZm91bmQgYXQgdGhlIHNwZWNpZmllZCBpbmRleGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGktLSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVkW2pdID0gIShtYXRjaGVzW2pdID0gc2VlZFtqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICAgICAgICAgICAgICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG4gICAgICAgICAgICB9XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG4gICAgICAgICAgICBzdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlY3RzIFhNTCBub2Rlc1xuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudEVsZW1lbnQgaXMgdmVyaWZpZWQgZm9yIGNhc2VzIHdoZXJlIGl0IGRvZXNuJ3QgeWV0IGV4aXN0XG4gICAgICAgICAgICAgICAgLy8gKHN1Y2ggYXMgbG9hZGluZyBpZnJhbWVzIGluIElFIC0gIzQ4MzMpXG4gICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGVsZW0gJiYgKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50RWxlbWVudC5ub2RlTmFtZSAhPT0gXCJIVE1MXCIgOiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU2V0cyBkb2N1bWVudC1yZWxhdGVkIHZhcmlhYmxlcyBvbmNlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbZG9jXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZXREb2N1bWVudCA9IFNpenpsZS5zZXREb2N1bWVudCA9IGZ1bmN0aW9uKCBub2RlICkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNDb21wYXJlLCBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYztcblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQgPSBkb2M7XG4gICAgICAgICAgICAgICAgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudElzSFRNTCA9ICFpc1hNTCggZG9jdW1lbnQgKTtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDktMTEsIEVkZ2VcbiAgICAgICAgICAgICAgICAvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG4gICAgICAgICAgICAgICAgaWYgKCAocGFyZW50ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcpICYmIHBhcmVudC50b3AgIT09IHBhcmVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgMTFcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCBcInVubG9hZFwiLCB1bmxvYWRIYW5kbGVyLCBmYWxzZSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBwYXJlbnQuYXR0YWNoRXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXR0YWNoRXZlbnQoIFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlciApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogQXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTw4XG4gICAgICAgICAgICAgICAgLy8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gKGV4Y2VwdGluZyBJRTggYm9vbGVhbnMpXG4gICAgICAgICAgICAgICAgc3VwcG9ydC5hdHRyaWJ1dGVzID0gYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcImlcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFkaXYuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLyogZ2V0RWxlbWVudChzKUJ5KlxuICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFPDlcbiAgICAgICAgICAgICAgICBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKTtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFPDEwXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG4gICAgICAgICAgICAgICAgLy8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbWF0aWNhbGx5LXNldCBuYW1lcyxcbiAgICAgICAgICAgICAgICAvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3RcbiAgICAgICAgICAgICAgICBzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jRWxlbS5hcHBlbmRDaGlsZCggZGl2ICkuaWQgPSBleHBhbmRvO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIElEIGZpbmQgYW5kIGZpbHRlclxuICAgICAgICAgICAgICAgIGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuICAgICAgICAgICAgICAgICAgICBFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtID8gWyBtIF0gOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgRXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFNi83XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIEV4cHIuZmluZFtcIklEXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgIEV4cHIuZmlsdGVyW1wiSURcIl0gPSAgZnVuY3Rpb24oIGlkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGFnXG4gICAgICAgICAgICAgICAgRXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggc3VwcG9ydC5xc2EgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gOlxuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ5IGhhcHB5IGNvaW5jaWRlbmNlLCBhIChicm9rZW4pIGdFQlROIGFwcGVhcnMgb24gRG9jdW1lbnRGcmFnbWVudCBub2RlcyB0b29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGFnID09PSBcIipcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIENsYXNzXG4gICAgICAgICAgICAgICAgRXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24oIGNsYXNzTmFtZSwgY29udGV4dCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qIFFTQS9tYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICAgICAgICAgICAgLy8gUVNBIGFuZCBtYXRjaGVzU2VsZWN0b3Igc3VwcG9ydFxuXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2hlc1NlbGVjdG9yKDphY3RpdmUpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChJRTkvT3BlcmEgMTEuNSlcbiAgICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcbiAgICAgICAgICAgICAgICAvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuICAgICAgICAgICAgICAgIHJidWdneVFTQSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIFFTQSByZWdleFxuICAgICAgICAgICAgICAgICAgICAvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0IGlzIHNldCB0byBlbXB0eSBzdHJpbmcgb24gcHVycG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0byB0ZXN0IElFJ3MgdHJlYXRtZW50IG9mIG5vdCBleHBsaWNpdGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIGEgYm9vbGVhbiBjb250ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0cyBwcmVzZW5jZSBzaG91bGQgYmUgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM1OVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jRWxlbS5hcHBlbmRDaGlsZCggZGl2ICkuaW5uZXJIVE1MID0gXCI8YSBpZD0nXCIgKyBleHBhbmRvICsgXCInPjwvYT5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKCBcIlsqXiRdPVwiICsgd2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQm9vbGVhbiBhdHRyaWJ1dGVzIGFuZCBcInZhbHVlXCIgYXJlIG5vdCB0cmVhdGVkIGNvcnJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWU8MjksIEFuZHJvaWQ8NC40LCBTYWZhcmk8Ny4wKywgaU9TPDcuMCssIFBoYW50b21KUzwxLjkuOCtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwifj1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlYmtpdC9PcGVyYSAtIDpjaGVja2VkIHNob3VsZCByZXR1cm4gc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiOmNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IFNhZmFyaSA4KywgaU9TIDgrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKCBcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiICkubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRThcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBkaXYucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goIFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYSAxMC0xMSBkb2VzIG5vdCB0aHJvdyBvbiBwb3N0LWNvbW1hIGludmFsaWQgcHNldWRvc1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCIsLio6XCIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciA9IHJuYXRpdmUudGVzdCggKG1hdGNoZXMgPSBkb2NFbGVtLm1hdGNoZXMgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY0VsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jRWxlbS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKSApKSApIHtcblxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoIGRpdiwgXCJkaXZcIiApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLmNhbGwoIGRpdiwgXCJbcyE9JyddOnhcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcbiAgICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzID0gcmJ1Z2d5TWF0Y2hlcy5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5TWF0Y2hlcy5qb2luKFwifFwiKSApO1xuXG4gICAgICAgICAgICAgICAgLyogQ29udGFpbnNcbiAgICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgICAgICAgICAgICAgIGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgY29udGFpbnMgYW5vdGhlclxuICAgICAgICAgICAgICAgIC8vIFB1cnBvc2VmdWxseSBzZWxmLWV4Y2x1c2l2ZVxuICAgICAgICAgICAgICAgIC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSBoYXNDb21wYXJlIHx8IHJuYXRpdmUudGVzdCggZG9jRWxlbS5jb250YWlucyApID9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGEsIGIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cCA9IGIgJiYgYi5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3duLmNvbnRhaW5zID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3duLmNvbnRhaW5zKCBidXAgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYnVwICkgJiAxNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGEsIGIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoYiA9IGIucGFyZW50Tm9kZSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYiA9PT0gYSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLyogU29ydGluZ1xuICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAgICAgICAgICAgICAvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gaGFzQ29tcGFyZSA/XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBhLCBiICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhID09PSBiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY29tcGFyZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbXBhcmUgJiAxIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUpICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhID09PSBkb2N1bWVudCB8fCBhLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGEpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydElucHV0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggYSwgYiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYSA9PT0gYiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNEdXBsaWNhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1cCA9IGEucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXAgPSBiLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXAgPSBbIGEgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicCA9IFsgYiBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhYXVwIHx8ICFidXAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IGRvY3VtZW50ID8gLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiID09PSBkb2N1bWVudCA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVwID8gLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1cCA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5wdXQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBhdXAgPT09IGJ1cCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2libGluZ0NoZWNrKCBhLCBiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwLnVuc2hpZnQoIGN1ciApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggKGN1ciA9IGN1ci5wYXJlbnROb2RlKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicC51bnNoaWZ0KCBjdXIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBkb3duIHRoZSB0cmVlIGxvb2tpbmcgZm9yIGEgZGlzY3JlcGFuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggYXBbaV0gPT09IGJwW2ldICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmdDaGVjayggYXBbaV0sIGJwW2ldICkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBbaV0gPT09IHByZWZlcnJlZERvYyA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNpenpsZS5tYXRjaGVzID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1lbnRzICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTaXp6bGUoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudCggZWxlbSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGF0dHJpYnV0ZSBzZWxlY3RvcnMgYXJlIHF1b3RlZFxuICAgICAgICAgICAgICAgIGV4cHIgPSBleHByLnJlcGxhY2UoIHJhdHRyaWJ1dGVRdW90ZXMsIFwiPSckMSddXCIgKTtcblxuICAgICAgICAgICAgICAgIGlmICggc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiZcbiAgICAgICAgICAgICAgICAgICAgIWNvbXBpbGVyQ2FjaGVbIGV4cHIgKyBcIiBcIiBdICYmXG4gICAgICAgICAgICAgICAgICAgICggIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdCggZXhwciApICkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCAhcmJ1Z2d5UVNBICAgICB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gbWF0Y2hlcy5jYWxsKCBlbGVtLCBleHByICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmV0IHx8IHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJhZ21lbnQgaW4gSUUgOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gU2l6emxlKCBleHByLCBkb2N1bWVudCwgbnVsbCwgWyBlbGVtIF0gKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU2l6emxlLmNvbnRhaW5zID0gZnVuY3Rpb24oIGNvbnRleHQsIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudCggY29udGV4dCApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbnMoIGNvbnRleHQsIGVsZW0gKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNpenpsZS5hdHRyID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudCggZWxlbSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVsgbmFtZS50b0xvd2VyQ2FzZSgpIF0sXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKGpRdWVyeSAjMTM4MDcpXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICB2YWwgOlxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU2l6emxlLmVycm9yID0gZnVuY3Rpb24oIG1zZyApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgZHVwbGljYXRlcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBVbmxlc3Mgd2UgKmtub3cqIHdlIGNhbiBkZXRlY3QgZHVwbGljYXRlcywgYXNzdW1lIHRoZWlyIHByZXNlbmNlXG4gICAgICAgICAgICAgICAgaGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcbiAgICAgICAgICAgICAgICBzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoIDAgKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnNvcnQoIHNvcnRPcmRlciApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBoYXNEdXBsaWNhdGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggKGVsZW0gPSByZXN1bHRzW2krK10pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtID09PSByZXN1bHRzWyBpIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggai0tICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zcGxpY2UoIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgaW5wdXQgYWZ0ZXIgc29ydGluZyB0byByZWxlYXNlIG9iamVjdHNcbiAgICAgICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcbiAgICAgICAgICAgICAgICBzb3J0SW5wdXQgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gZm9yIHJldHJpZXZpbmcgdGhlIHRleHQgdmFsdWUgb2YgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fEVsZW1lbnR9IGVsZW1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0VGV4dCA9IFNpenpsZS5nZXRUZXh0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoICFub2RlVHlwZSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAobm9kZSA9IGVsZW1baSsrXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IGdldFRleHQoIG5vZGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIG5vZGVUeXBlID09PSAxIHx8IG5vZGVUeXBlID09PSA5IHx8IG5vZGVUeXBlID09PSAxMSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiBlbGVtLnRleHRDb250ZW50ID09PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldCArPSBnZXRUZXh0KCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBFeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuICAgICAgICAgICAgICAgIC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuICAgICAgICAgICAgICAgIGNhY2hlTGVuZ3RoOiA1MCxcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG4gICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoRXhwcixcblxuICAgICAgICAgICAgICAgIGF0dHJIYW5kbGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgZmluZDoge30sXG5cbiAgICAgICAgICAgICAgICByZWxhdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiK1wiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiwgZmlyc3Q6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgcHJlRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IG1hdGNoWzFdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdGhlIGdpdmVuIHZhbHVlIHRvIG1hdGNoWzNdIHdoZXRoZXIgcXVvdGVkIG9yIHVucXVvdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFszXSA9ICggbWF0Y2hbM10gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIiApLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbWF0Y2hbMl0gPT09IFwifj1cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJDSElMRFwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAxIHR5cGUgKG9ubHl8bnRofC4uLilcbiAgICAgICAgICAgICAgICAgICAgICAgICAyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgMyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcbiAgICAgICAgICAgICAgICAgICAgICAgICA0IHhuLWNvbXBvbmVudCBvZiB4bit5IGFyZ3VtZW50IChbKy1dP1xcZCpufClcbiAgICAgICAgICAgICAgICAgICAgICAgICA1IHNpZ24gb2YgeG4tY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgNiB4IG9mIHhuLWNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgIDcgc2lnbiBvZiB5LWNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgIDggeSBvZiB5LWNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbWF0Y2hbMV0uc2xpY2UoIDAsIDMgKSA9PT0gXCJudGhcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIW1hdGNoWzNdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtZXJpYyB4IGFuZCB5IHBhcmFtZXRlcnMgZm9yIEV4cHIuZmlsdGVyLkNISUxEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzRdID0gKyggbWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAoIG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbNV0gPSArKCAoIG1hdGNoWzddICsgbWF0Y2hbOF0gKSB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBtYXRjaFszXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhjZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1hdGNoRXhwcltcIkNISUxEXCJdLnRlc3QoIG1hdGNoWzBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY2VwdCBxdW90ZWQgYXJndW1lbnRzIGFzLWlzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1hdGNoWzNdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB1bnF1b3RlZCAmJiBycHNldWRvLnRlc3QoIHVucXVvdGVkICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGV4Y2VzcyBmcm9tIHRva2VuaXplIChyZWN1cnNpdmVseSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGgpICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcblxuICAgICAgICAgICAgICAgICAgICBcIlRBR1wiOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJDTEFTU1wiOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXR0ZXJuID0gbmV3IFJlZ0V4cCggXCIoXnxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIGNsYXNzTmFtZSArIFwiKFwiICsgd2hpdGVzcGFjZSArIFwifCQpXCIgKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KCB0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHwgdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmIGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBTaXp6bGUuYXR0ciggZWxlbSwgbmFtZSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHQgPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhdG9yID09PSBcIiE9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIW9wZXJhdG9yICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPT09IFwiIT1cIiA/IHJlc3VsdCAhPT0gY2hlY2sgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvciA9PT0gXCIqPVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIiQ9XCIgPyBjaGVjayAmJiByZXN1bHQuc2xpY2UoIC1jaGVjay5sZW5ndGggKSA9PT0gY2hlY2sgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPT09IFwifj1cIiA/ICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApLmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJDSElMRFwiOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZUeXBlID0gd2hhdCA9PT0gXCJvZi10eXBlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdCA9PT0gMSAmJiBsYXN0ID09PSAwID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNpbXBsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGRpciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggKG5vZGUgPSBub2RlWyBkaXIgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG9mVHlwZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGRpciA9IHR5cGUgPT09IFwib25seVwiICYmICFzdGFydCAmJiBcIm5leHRTaWJsaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlID0gdW5pcXVlQ2FjaGVbIHR5cGUgXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsgMiBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbIG5vZGVJbmRleCBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgbm9kZUluZGV4LCBkaWZmIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcHJldmlvdXNseS1jYWNoZWQgZWxlbWVudCBpbmRleCBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVzZUNhY2hlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSB1bmlxdWVDYWNoZVsgdHlwZSBdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geG1sIDpudGgtY2hpbGQoLi4uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRpZmYgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKCBvZlR5cGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytkaWZmICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdXNlQ2FjaGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBkaWZmIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub2RlID09PSBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZmIC09IGxhc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJQU0VVRE9cIjogZnVuY3Rpb24oIHBzZXVkbywgYXJndW1lbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvciggXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFyZ3VtZW50cyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgZmlsdGVyIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGFzIFNpenpsZSBkb2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGZuWyBleHBhbmRvIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKCBhcmd1bWVudCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZm4ubGVuZ3RoID4gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KCBwc2V1ZG8udG9Mb3dlckNhc2UoKSApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gZm4oIHNlZWQsIGFyZ3VtZW50ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaW5kZXhPZiggc2VlZCwgbWF0Y2hlZFtpXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkW2ldICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBzZXVkb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUG90ZW50aWFsbHkgY29tcGxleCBwc2V1ZG9zXG4gICAgICAgICAgICAgICAgICAgIFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHNlZWQubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVkW2ldID0gIShtYXRjaGVzW2ldID0gZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbMF0gPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyKCBpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0WzBdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNpenpsZSggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHRleHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZWxlbS5pbm5lclRleHQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBcIldoZXRoZXIgYW4gZWxlbWVudCBpcyByZXByZXNlbnRlZCBieSBhIDpsYW5nKCkgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcbiAgICAgICAgICAgICAgICAgICAgLy8gb3IgYmVnaW5uaW5nIHdpdGggdGhlIGlkZW50aWZpZXIgQyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBcIi1cIi5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuICAgICAgICAgICAgICAgICAgICBcImxhbmdcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1MYW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAoZWxlbUxhbmcgPSBkb2N1bWVudElzSFRNTCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5sYW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWlzY2VsbGFuZW91c1xuICAgICAgICAgICAgICAgICAgICBcInRhcmdldFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSggMSApID09PSBlbGVtLmlkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwicm9vdFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJvb2xlYW4gcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJkaXNhYmxlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCkgfHwgKG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb250ZW50c1xuICAgICAgICAgICAgICAgICAgICBcImVtcHR5XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudC9pbnB1dCB0eXBlc1xuICAgICAgICAgICAgICAgICAgICBcImhlYWRlclwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJpbnB1dHMudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS50eXBlID09PSBcInRleHRcIiAmJlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFPDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhciB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbIDAgXTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgbGVuZ3RoIC0gMSBdO1xuICAgICAgICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICAgICAgICBcImVxXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbIGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQgXTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggOyAtLWkgPj0gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleGVzO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIEV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuICAgICAgICAgICAgZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG4gICAgICAgICAgICAgICAgRXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVJbnB1dFBzZXVkbyggaSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICggaSBpbiB7IHN1Ym1pdDogdHJ1ZSwgcmVzZXQ6IHRydWUgfSApIHtcbiAgICAgICAgICAgICAgICBFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xuICAgICAgICAgICAgfVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuICAgICAgICAgICAgc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG4gICAgICAgICAgICBFeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG4gICAgICAgICAgICB0b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkLCBtYXRjaCwgdG9rZW5zLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZWQgPSB0b2tlbkNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNhY2hlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoIDAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzb0ZhciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIGdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgICAgIHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuICAgICAgICAgICAgICAgIHdoaWxlICggc29GYXIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuICAgICAgICAgICAgICAgICAgICBpZiAoICFtYXRjaGVkIHx8IChtYXRjaCA9IHJjb21tYS5leGVjKCBzb0ZhciApKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbWF0Y2ggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFswXS5sZW5ndGggKSB8fCBzb0ZhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKCAodG9rZW5zID0gW10pICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tYmluYXRvcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyggc29GYXIgKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWF0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAobWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApKSAmJiAoIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXRjaCA9IHByZUZpbHRlcnNbIHR5cGUgXSggbWF0Y2ggKSkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggIW1hdGNoZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZU9ubHkgP1xuICAgICAgICAgICAgICAgICAgICBzb0Zhci5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBzb0ZhciA/XG4gICAgICAgICAgICAgICAgICAgICAgICBTaXp6bGUuZXJyb3IoIHNlbGVjdG9yICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIHRva2Vuc1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB0b1NlbGVjdG9yKCB0b2tlbnMgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuICAgICAgICAgICAgICAgIHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYgZGlyID09PSBcInBhcmVudE5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZG9uZU5hbWUgPSBkb25lKys7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluYXRvci5maXJzdCA/XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkQ2FjaGUsIHVuaXF1ZUNhY2hlLCBvdXRlckNhY2hlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NhY2hlID0gWyBkaXJydW5zLCBkb25lTmFtZSBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBjb21iaW5hdG9yIGNhY2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggeG1sICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gfHwgKG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVsgZGlyIF0pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZVsgZGlyIF0gPSBuZXdDYWNoZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhbWF0Y2hlcnNbaV0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gOlxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVyc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IsIGNvbnRleHRzLCByZXN1bHRzICkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gY29udGV4dHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0c1tpXSwgcmVzdWx0cyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VW5tYXRjaGVkID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB1bm1hdGNoZWQubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1VubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXBwZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5wdXNoKCBpICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1VubWF0Y2hlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuICAgICAgICAgICAgICAgIGlmICggcG9zdEZpbHRlciAmJiAhcG9zdEZpbHRlclsgZXhwYW5kbyBdICkge1xuICAgICAgICAgICAgICAgICAgICBwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdEZpbmRlciA9IHNldE1hdGNoZXIoIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wLCBpLCBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlTWFwID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWFwID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVySW4gPSBwcmVGaWx0ZXIgJiYgKCBzZWVkIHx8ICFzZWxlY3RvciApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXMsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXJPdXQgPSBtYXRjaGVyID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlciBvciBwcmVleGlzdGluZyByZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbnRlcm1lZGlhdGUgcHJvY2Vzc2luZyBpcyBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVySW47XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCBwcmltYXJ5IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXRjaGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IHBvc3RGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBwb3N0RmlsdGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSB0ZW1wLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKGVsZW0gPSB0ZW1wW2ldKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlck91dFsgcG9zdE1hcFtpXSBdID0gIShtYXRjaGVySW5bIHBvc3RNYXBbaV0gXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2VlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwb3N0RmluZGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlck91dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKCAobWF0Y2hlckluW2ldID0gZWxlbSkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmluZGVyKCBudWxsLCAobWF0Y2hlck91dCA9IFtdKSwgdGVtcCwgeG1sICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBtYXRjaGVkIGVsZW1lbnRzIGZyb20gc2VlZCB0byByZXN1bHRzIHRvIGtlZXAgdGhlbSBzeW5jaHJvbml6ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlck91dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZiggc2VlZCwgZWxlbSApIDogcHJlTWFwW2ldKSA+IC0xICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyT3V0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwb3N0RmluZGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tDb250ZXh0LCBtYXRjaGVyLCBqLFxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxuICAgICAgICAgICAgICAgICAgICBpbXBsaWNpdFJlbGF0aXZlID0gbGVhZGluZ1JlbGF0aXZlIHx8IEV4cHIucmVsYXRpdmVbXCIgXCJdLFxuICAgICAgICAgICAgICAgICAgICBpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuICAgICAgICAgICAgICAgICAgICBtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPZiggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVycyA9IFsgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSAoICFsZWFkaW5nUmVsYXRpdmUgJiYgKCB4bWwgfHwgY29udGV4dCAhPT0gb3V0ZXJtb3N0Q29udGV4dCApICkgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hlY2tDb250ZXh0ID0gY29udGV4dCkubm9kZVR5cGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQ29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgICAgICB9IF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIpIF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyID0gRXhwci5maWx0ZXJbIHRva2Vuc1tpXS50eXBlIF0uYXBwbHkoIG51bGwsIHRva2Vuc1tpXS5tYXRjaGVzICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHVybiBzcGVjaWFsIHVwb24gc2VlaW5nIGEgcG9zaXRpb25hbCBtYXRjaGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1hdGNoZXJbIGV4cGFuZG8gXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gKytpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0TWF0Y2hlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPiAxICYmIHRvU2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqIDwgbGVuICYmIG1hdGNoZXJGcm9tVG9rZW5zKCAodG9rZW5zID0gdG9rZW5zLnNsaWNlKCBqICkpICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcnMucHVzaCggbWF0Y2hlciApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgYnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uKCBzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtLCBqLCBtYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRDb3VudCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBvdXRlcm1vc3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbCA9ICFkb2N1bWVudElzSFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3V0ZXJtb3N0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBieVNldCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzZWVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRDb3VudCArPSBpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtZXJpY2FsbHkgemVyby5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggKG1hdGNoZXIgPSBzZXRNYXRjaGVyc1tqKytdKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhKHVubWF0Y2hlZFtpXSB8fCBzZXRNYXRjaGVkW2ldKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZCA9IGNvbmRlbnNlKCBzZXRNYXRjaGVkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkoIHJlc3VsdHMsIHNldE1hdGNoZWQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXp6bGUudW5pcXVlU29ydCggcmVzdWx0cyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG91dGVybW9zdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVubWF0Y2hlZDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBieVNldCA/XG4gICAgICAgICAgICAgICAgICAgIG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuICAgICAgICAgICAgICAgICAgICBzdXBlck1hdGNoZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBpbGUgPSBTaXp6bGUuY29tcGlsZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgbWF0Y2ggLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNoZXJzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cbiAgICAgICAgICAgICAgICBpZiAoICFjYWNoZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBpZiAoICFtYXRjaCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbaV0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICBjYWNoZWQgPSBjb21waWxlckNhY2hlKCBzZWxlY3RvciwgbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcbiAgICAgICAgICAgICAqICBzZWxlY3RvciBmdW5jdGlvbnNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gICAgICAgICAgICAgKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCA9IFNpenpsZS5zZWxlY3QgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuICAgICAgICAgICAgICAgIC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcbiAgICAgICAgICAgICAgICBpZiAoIG1hdGNoLmxlbmd0aCA9PT0gMSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuICAgICAgICAgICAgICAgICAgICB0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdG9rZW5zLmxlbmd0aCA+IDIgJiYgKHRva2VuID0gdG9rZW5zWzBdKS50eXBlID09PSBcIklEXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnQuZ2V0QnlJZCAmJiBjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMV0udHlwZSBdICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0ID0gKCBFeHByLmZpbmRbXCJJRFwiXSggdG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgY29udGV4dCApIHx8IFtdIClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFjb250ZXh0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggY29tcGlsZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGktLSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIEV4cHIucmVsYXRpdmVbICh0eXBlID0gdG9rZW4udHlwZSkgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAoc2VlZCA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByc2libGluZy50ZXN0KCB0b2tlbnNbMF0udHlwZSApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlKCBpLCAxICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIXNlbGVjdG9yICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG4gICAgICAgICAgICAgICAgKCBjb21waWxlZCB8fCBjb21waWxlKCBzZWxlY3RvciwgbWF0Y2ggKSApKFxuICAgICAgICAgICAgICAgICAgICBzZWVkLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAhZG9jdW1lbnRJc0hUTUwsXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfTtcblxuLy8gT25lLXRpbWUgYXNzaWdubWVudHNcblxuLy8gU29ydCBzdGFiaWxpdHlcbiAgICAgICAgICAgIHN1cHBvcnQuc29ydFN0YWJsZSA9IGV4cGFuZG8uc3BsaXQoXCJcIikuc29ydCggc29ydE9yZGVyICkuam9pbihcIlwiKSA9PT0gZXhwYW5kbztcblxuLy8gU3VwcG9ydDogQ2hyb21lIDE0LTM1K1xuLy8gQWx3YXlzIGFzc3VtZSBkdXBsaWNhdGVzIGlmIHRoZXkgYXJlbid0IHBhc3NlZCB0byB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuICAgICAgICAgICAgc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzID0gISFoYXNEdXBsaWNhdGU7XG5cbi8vIEluaXRpYWxpemUgYWdhaW5zdCB0aGUgZGVmYXVsdCBkb2N1bWVudFxuICAgICAgICAgICAgc2V0RG9jdW1lbnQoKTtcblxuLy8gU3VwcG9ydDogV2Via2l0PDUzNy4zMiAtIFNhZmFyaSA2LjAuMy9DaHJvbWUgMjUgKGZpeGVkIGluIENocm9tZSAyNylcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuICAgICAgICAgICAgc3VwcG9ydC5zb3J0RGV0YWNoZWQgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdjEgKSB7XG4gICAgICAgICAgICAgICAgLy8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdjEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKSAmIDE7XG4gICAgICAgICAgICB9KTtcblxuLy8gU3VwcG9ydDogSUU8OFxuLy8gUHJldmVudCBhdHRyaWJ1dGUvcHJvcGVydHkgXCJpbnRlcnBvbGF0aW9uXCJcbi8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcbiAgICAgICAgICAgIGlmICggIWFzc2VydChmdW5jdGlvbiggZGl2ICkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiA7XG4gICAgICAgICAgICAgICAgfSkgKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlKCBcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFpc1hNTCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInR5cGVcIiA/IDEgOiAyICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGRlZmF1bHRWYWx1ZSBpbiBwbGFjZSBvZiBnZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgaWYgKCAhc3VwcG9ydC5hdHRyaWJ1dGVzIHx8ICFhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCBcInZhbHVlXCIsIFwiXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpdi5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XG4gICAgICAgICAgICAgICAgfSkgKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlKCBcInZhbHVlXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuICAgICAgICAgICAgaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXYuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KSApIHtcbiAgICAgICAgICAgICAgICBhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWw7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWlzWE1MICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1bIG5hbWUgXSA9PT0gdHJ1ZSA/IG5hbWUudG9Mb3dlckNhc2UoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggbmFtZSApKSAmJiB2YWwuc3BlY2lmaWVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gU2l6emxlO1xuXG4gICAgICAgIH0pKCB3aW5kb3cgKTtcblxuXG5cbiAgICBqUXVlcnkuZmluZCA9IFNpenpsZTtcbiAgICBqUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7XG4gICAgalF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xuICAgIGpRdWVyeS51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xuICAgIGpRdWVyeS50ZXh0ID0gU2l6emxlLmdldFRleHQ7XG4gICAgalF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xuICAgIGpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcblxuXG5cbiAgICB2YXIgZGlyID0gZnVuY3Rpb24oIGVsZW0sIGRpciwgdW50aWwgKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW10sXG4gICAgICAgICAgICB0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgd2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG4gICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZWQucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH07XG5cblxuICAgIHZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuXG4gICAgICAgIGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG4gICAgICAgICAgICBpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2goIG4gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgIH07XG5cblxuICAgIHZhciBybmVlZHNDb250ZXh0ID0galF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuXG4gICAgdmFyIHJzaW5nbGVUYWcgPSAoIC9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyApO1xuXG5cblxuICAgIHZhciByaXNTaW1wbGUgPSAvXi5bXjojXFxbXFwuLF0qJC87XG5cbi8vIEltcGxlbWVudCB0aGUgaWRlbnRpY2FsIGZ1bmN0aW9uYWxpdHkgZm9yIGZpbHRlciBhbmQgbm90XG4gICAgZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG4gICAgICAgIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG4gICAgICAgICAgICAgICAgLyoganNoaW50IC1XMDE4ICovXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZW9mIHF1YWxpZmllciA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgIGlmICggcmlzU2ltcGxlLnRlc3QoIHF1YWxpZmllciApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXVhbGlmaWVyID0galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cyApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICByZXR1cm4gKCBpbmRleE9mLmNhbGwoIHF1YWxpZmllciwgZWxlbSApID4gLTEgKSAhPT0gbm90O1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmZpbHRlciA9IGZ1bmN0aW9uKCBleHByLCBlbGVtcywgbm90ICkge1xuICAgICAgICB2YXIgZWxlbSA9IGVsZW1zWyAwIF07XG5cbiAgICAgICAgaWYgKCBub3QgKSB7XG4gICAgICAgICAgICBleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxID9cbiAgICAgICAgICAgIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZWxlbSwgZXhwciApID8gWyBlbGVtIF0gOiBbXSA6XG4gICAgICAgICAgICBqUXVlcnkuZmluZC5tYXRjaGVzKCBleHByLCBqUXVlcnkuZ3JlcCggZWxlbXMsIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xuICAgICAgICAgICAgfSApICk7XG4gICAgfTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgbGVuID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcmV0ID0gW10sXG4gICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlciggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICkgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE5lZWRlZCBiZWNhdXNlICQoIHNlbGVjdG9yLCBjb250ZXh0ICkgYmVjb21lcyAkKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKVxuICAgICAgICAgICAgcmV0ID0gdGhpcy5wdXNoU3RhY2soIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlKCByZXQgKSA6IHJldCApO1xuICAgICAgICAgICAgcmV0LnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciA/IHRoaXMuc2VsZWN0b3IgKyBcIiBcIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UgKSApO1xuICAgICAgICB9LFxuICAgICAgICBub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gICAgICAgICAgICByZXR1cm4gISF3aW5ub3coXG4gICAgICAgICAgICAgICAgdGhpcyxcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcbiAgICAgICAgICAgICAgICAvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggc2VsZWN0b3IgKSA6XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgfHwgW10sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSApO1xuXG5cbi8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG5cblxuLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG4gICAgdmFyIHJvb3RqUXVlcnksXG5cbiAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgIC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICgjOTUyMSlcbiAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgcnF1aWNrRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLFxuXG4gICAgICAgIGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcm9vdCApIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCwgZWxlbTtcblxuICAgICAgICAgICAgLy8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG4gICAgICAgICAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG4gICAgICAgICAgICAvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG4gICAgICAgICAgICByb290ID0gcm9vdCB8fCByb290alF1ZXJ5O1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuICAgICAgICAgICAgICAgIGlmICggbWF0Y2ggJiYgKCBtYXRjaFsgMSBdIHx8ICFjb250ZXh0ICkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWF0Y2hbIDEgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnRlbnRpb25hbGx5IGxldCB0aGUgZXJyb3IgYmUgdGhyb3duIGlmIHBhcnNlSFRNTCBpcyBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWyAxIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICApICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBtYXRjaCBpbiBjb250ZXh0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdGhpc1sgbWF0Y2ggXSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoI2lkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEJsYWNrYmVycnkgNC42XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnRUJJRCByZXR1cm5zIG5vZGVzIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnQgKCM2OTYzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbIDAgXSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoICFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBjb250ZXh0IHx8IHJvb3QgKS5maW5kKCBzZWxlY3RvciApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSEFORExFOiAkKERPTUVsZW1lbnQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzWyAwIF0gPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgLy8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgcm9vdC5yZWFkeSggc2VsZWN0b3IgKSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciggalF1ZXJ5ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2VsZWN0b3Iuc2VsZWN0b3IgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3Iuc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gc2VsZWN0b3IuY29udGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG4gICAgICAgIH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbiAgICBpbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxuICAgIHJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XG5cblxuICAgIHZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuICAgIC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG4gICAgICAgIGd1YXJhbnRlZWRVbmlxdWUgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRzOiB0cnVlLFxuICAgICAgICAgICAgbmV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXY6IHRydWVcbiAgICAgICAgfTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgaGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuICAgICAgICAgICAgICAgIGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1sgaSBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9zZXN0OiBmdW5jdGlvbiggc2VsZWN0b3JzLCBjb250ZXh0ICkge1xuICAgICAgICAgICAgdmFyIGN1cixcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBsID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IFtdLFxuICAgICAgICAgICAgICAgIHBvcyA9IHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3JzICkgfHwgdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggc2VsZWN0b3JzLCBjb250ZXh0IHx8IHRoaXMuY29udGV4dCApIDpcbiAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgICAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGZvciAoIGN1ciA9IHRoaXNbIGkgXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKCBwb3MgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLmluZGV4KCBjdXIgKSA+IC0xIDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGN1ciwgc2VsZWN0b3JzICkgKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZC5wdXNoKCBjdXIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG4gICAgICAgIGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcblxuICAgICAgICAgICAgLy8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcbiAgICAgICAgICAgIGlmICggIWVsZW0gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggdGhpc1sgMCBdICYmIHRoaXNbIDAgXS5wYXJlbnROb2RlICkgPyB0aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aCA6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbmRleCBpbiBzZWxlY3RvclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPZi5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdGhpc1sgMCBdICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuICAgICAgICAgICAgcmV0dXJuIGluZGV4T2YuY2FsbCggdGhpcyxcblxuICAgICAgICAgICAgICAgIC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuICAgICAgICAgICAgICAgIGVsZW0uanF1ZXJ5ID8gZWxlbVsgMCBdIDogZWxlbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhcbiAgICAgICAgICAgICAgICBqUXVlcnkudW5pcXVlU29ydChcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlciggc2VsZWN0b3IgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIGZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuICAgICAgICB3aGlsZSAoICggY3VyID0gY3VyWyBkaXIgXSApICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG4gICAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmVhY2goIHtcbiAgICAgICAgcGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBwYXJlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgIHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiICk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmVudHNVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuICAgICAgICAgICAgcmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsICk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgIHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgcmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgcmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcbiAgICAgICAgICAgIHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiwgdW50aWwgKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldlVudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuICAgICAgICB9LFxuICAgICAgICBzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICByZXR1cm4gc2libGluZ3MoICggZWxlbS5wYXJlbnROb2RlIHx8IHt9ICkuZmlyc3RDaGlsZCwgZWxlbSApO1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICByZXR1cm4gc2libGluZ3MoIGVsZW0uZmlyc3RDaGlsZCApO1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQgfHwgalF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG4gICAgICAgIGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cbiAgICAgICAgICAgIGlmICggbmFtZS5zbGljZSggLTUgKSAhPT0gXCJVbnRpbFwiICkge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gdW50aWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgbWF0Y2hlZCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgaWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG4gICAgICAgICAgICAgICAgaWYgKCBycGFyZW50c3ByZXYudGVzdCggbmFtZSApICkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkLnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuICAgICAgICB9O1xuICAgIH0gKTtcbiAgICB2YXIgcm5vdHdoaXRlID0gKCAvXFxTKy9nICk7XG5cblxuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG4gICAgICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICAgICAgalF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcbiAgICAgICAgICAgIG9iamVjdFsgZmxhZyBdID0gdHJ1ZTtcbiAgICAgICAgfSApO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ3JlYXRlIGEgY2FsbGJhY2sgbGlzdCB1c2luZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gICAgICpcbiAgICAgKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICAgICAqXHRcdFx0dGhlIGNhbGxiYWNrIGxpc3QgYmVoYXZlcyBvciBhIG1vcmUgdHJhZGl0aW9uYWwgb3B0aW9uIG9iamVjdFxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAgICAgKiBcImZpcmVkXCIgbXVsdGlwbGUgdGltZXMuXG4gICAgICpcbiAgICAgKiBQb3NzaWJsZSBvcHRpb25zOlxuICAgICAqXG4gICAgICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICAgICAqXG4gICAgICpcdG1lbW9yeTpcdFx0XHR3aWxsIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgdmFsdWVzIGFuZCB3aWxsIGNhbGwgYW55IGNhbGxiYWNrIGFkZGVkXG4gICAgICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICAgICAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICAgICAqXG4gICAgICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAgICAgKlxuICAgICAqXHRzdG9wT25GYWxzZTpcdGludGVycnVwdCBjYWxsaW5ncyB3aGVuIGEgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICAgICAqXG4gICAgICovXG4gICAgalF1ZXJ5LkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICAgIC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcbiAgICAgICAgLy8gKHdlIGNoZWNrIGluIGNhY2hlIGZpcnN0KVxuICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgP1xuICAgICAgICAgICAgY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoIHt9LCBvcHRpb25zICk7XG5cbiAgICAgICAgdmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcbiAgICAgICAgICAgIGZpcmluZyxcblxuICAgICAgICAvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuICAgICAgICAgICAgbWVtb3J5LFxuXG4gICAgICAgIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG4gICAgICAgICAgICBmaXJlZCxcblxuICAgICAgICAvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG4gICAgICAgICAgICBsb2NrZWQsXG5cbiAgICAgICAgLy8gQWN0dWFsIGNhbGxiYWNrIGxpc3RcbiAgICAgICAgICAgIGxpc3QgPSBbXSxcblxuICAgICAgICAvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuICAgICAgICAgICAgcXVldWUgPSBbXSxcblxuICAgICAgICAvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcbiAgICAgICAgICAgIGZpcmluZ0luZGV4ID0gLTEsXG5cbiAgICAgICAgLy8gRmlyZSBjYWxsYmFja3NcbiAgICAgICAgICAgIGZpcmUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuICAgICAgICAgICAgICAgIGxvY2tlZCA9IG9wdGlvbnMub25jZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuICAgICAgICAgICAgICAgIC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBmaXJlZCA9IGZpcmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSdW4gY2FsbGJhY2sgYW5kIGNoZWNrIGZvciBlYXJseSB0ZXJtaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0WyBmaXJpbmdJbmRleCBdLmFwcGx5KCBtZW1vcnlbIDAgXSwgbWVtb3J5WyAxIF0gKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnN0b3BPbkZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG4gICAgICAgICAgICAgICAgaWYgKCAhb3B0aW9ucy5tZW1vcnkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbW9yeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZpcmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYW4gdXAgaWYgd2UncmUgZG9uZSBmaXJpbmcgZm9yIGdvb2RcbiAgICAgICAgICAgICAgICBpZiAoIGxvY2tlZCApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWVtb3J5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgb2JqZWN0IGlzIHNwZW50XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWN0dWFsIENhbGxiYWNrcyBvYmplY3RcbiAgICAgICAgICAgIHNlbGYgPSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBjYWxsYmFjayBvciBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgYWRkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1lbW9yeSBmcm9tIGEgcGFzdCBydW4sIHdlIHNob3VsZCBmaXJlIGFmdGVyIGFkZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgKCBmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goIGFyZ3MsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGFyZyApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goIGFyZyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiBqUXVlcnkudHlwZSggYXJnICkgIT09IFwic3RyaW5nXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCggYXJnICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICkoIGFyZ3VtZW50cyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoICggaW5kZXggPSBqUXVlcnkuaW5BcnJheSggYXJnLCBsaXN0LCBpbmRleCApICkgPiAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaW5kZXggPD0gZmlyaW5nSW5kZXggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmluZ0luZGV4LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuICAgICAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24oIGZuICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm4gP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaW5BcnJheSggZm4sIGxpc3QgKSA+IC0xIDpcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBkaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ja2VkID0gcXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IG1lbW9yeSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWxpc3Q7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgLmZpcmVcbiAgICAgICAgICAgICAgICAvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuICAgICAgICAgICAgICAgIC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcbiAgICAgICAgICAgICAgICBsb2NrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ja2VkID0gcXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhbWVtb3J5ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IG1lbW9yeSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFsb2NrZWQ7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICBmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIWxvY2tlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goIGFyZ3MgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIWZpcmluZyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZVdpdGgoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG4gICAgICAgICAgICAgICAgZmlyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFmaXJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cblxuICAgIGpRdWVyeS5leHRlbmQoIHtcblxuICAgICAgICBEZWZlcnJlZDogZnVuY3Rpb24oIGZ1bmMgKSB7XG4gICAgICAgICAgICB2YXIgdHVwbGVzID0gW1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBsaXN0ZW5lciBsaXN0LCBmaW5hbCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICBbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIFwicmVzb2x2ZWRcIiBdLFxuICAgICAgICAgICAgICAgICAgICBbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgXCJyZWplY3RlZFwiIF0sXG4gICAgICAgICAgICAgICAgICAgIFsgXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICkgXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBcInBlbmRpbmdcIixcbiAgICAgICAgICAgICAgICBwcm9taXNlID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5czogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGVuOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm5zID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0galF1ZXJ5LmlzRnVuY3Rpb24oIGZuc1sgaSBdICkgJiYgZm5zWyBpIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmZXJyZWRbIGRvbmUgfCBmYWlsIHwgcHJvZ3Jlc3MgXSBmb3IgZm9yd2FyZGluZyBhY3Rpb25zIHRvIG5ld0RlZmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXR1cm5lZCAmJiBqUXVlcnkuaXNGdW5jdGlvbiggcmV0dXJuZWQucHJvbWlzZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkLnByb21pc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvZ3Jlc3MoIG5ld0RlZmVyLm5vdGlmeSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb25lKCBuZXdEZWZlci5yZXNvbHZlIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhaWwoIG5ld0RlZmVyLnJlamVjdCApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdEZWZlclsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgPT09IHByb21pc2UgPyBuZXdEZWZlci5wcm9taXNlKCkgOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5zID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKS5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKCBvYmosIHByb21pc2UgKSA6IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmVycmVkID0ge307XG5cbiAgICAgICAgICAgIC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcbiAgICAgICAgICAgIHByb21pc2UucGlwZSA9IHByb21pc2UudGhlbjtcblxuICAgICAgICAgICAgLy8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gdHVwbGVbIDIgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVTdHJpbmcgPSB0dXBsZVsgMyBdO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZVsgZG9uZSB8IGZhaWwgfCBwcm9ncmVzcyBdID0gbGlzdC5hZGRcbiAgICAgICAgICAgICAgICBwcm9taXNlWyB0dXBsZVsgMSBdIF0gPSBsaXN0LmFkZDtcblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzdGF0ZVxuICAgICAgICAgICAgICAgIGlmICggc3RhdGVTdHJpbmcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYWRkKCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUgPSBbIHJlc29sdmVkIHwgcmVqZWN0ZWQgXVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdGF0ZVN0cmluZztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWyByZWplY3RfbGlzdCB8IHJlc29sdmVfbGlzdCBdLmRpc2FibGU7IHByb2dyZXNzX2xpc3QubG9ja1xuICAgICAgICAgICAgICAgICAgICB9LCB0dXBsZXNbIGkgXiAxIF1bIDIgXS5kaXNhYmxlLCB0dXBsZXNbIDIgXVsgMiBdLmxvY2sgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBkZWZlcnJlZFsgcmVzb2x2ZSB8IHJlamVjdCB8IG5vdGlmeSBdXG4gICAgICAgICAgICAgICAgZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gcHJvbWlzZSA6IHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuICAgICAgICAgICAgcHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG4gICAgICAgICAgICBpZiAoIGZ1bmMgKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5jYWxsKCBkZWZlcnJlZCwgZGVmZXJyZWQgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWxsIGRvbmUhXG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRGVmZXJyZWQgaGVscGVyXG4gICAgICAgIHdoZW46IGZ1bmN0aW9uKCBzdWJvcmRpbmF0ZSAvKiAsIC4uLiwgc3Vib3JkaW5hdGVOICovICkge1xuICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgIHJlc29sdmVWYWx1ZXMgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXNvbHZlVmFsdWVzLmxlbmd0aCxcblxuICAgICAgICAgICAgLy8gdGhlIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZyA9IGxlbmd0aCAhPT0gMSB8fFxuICAgICAgICAgICAgICAgICggc3Vib3JkaW5hdGUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIHN1Ym9yZGluYXRlLnByb21pc2UgKSApID8gbGVuZ3RoIDogMCxcblxuICAgICAgICAgICAgLy8gdGhlIG1hc3RlciBEZWZlcnJlZC5cbiAgICAgICAgICAgIC8vIElmIHJlc29sdmVWYWx1ZXMgY29uc2lzdCBvZiBvbmx5IGEgc2luZ2xlIERlZmVycmVkLCBqdXN0IHVzZSB0aGF0LlxuICAgICAgICAgICAgICAgIGRlZmVycmVkID0gcmVtYWluaW5nID09PSAxID8gc3Vib3JkaW5hdGUgOiBqUXVlcnkuRGVmZXJyZWQoKSxcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZ1bmN0aW9uIGZvciBib3RoIHJlc29sdmUgYW5kIHByb2dyZXNzIHZhbHVlc1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiggaSwgY29udGV4dHMsIHZhbHVlcyApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRzWyBpIF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHZhbHVlcyA9PT0gcHJvZ3Jlc3NWYWx1ZXMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aCggY29udGV4dHMsIHZhbHVlcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICggISggLS1yZW1haW5pbmcgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aCggY29udGV4dHMsIHZhbHVlcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBwcm9ncmVzc1ZhbHVlcywgcHJvZ3Jlc3NDb250ZXh0cywgcmVzb2x2ZUNvbnRleHRzO1xuXG4gICAgICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIERlZmVycmVkIHN1Ym9yZGluYXRlczsgdHJlYXQgb3RoZXJzIGFzIHJlc29sdmVkXG4gICAgICAgICAgICBpZiAoIGxlbmd0aCA+IDEgKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NWYWx1ZXMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzQ29udGV4dHMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xuICAgICAgICAgICAgICAgIHJlc29sdmVDb250ZXh0cyA9IG5ldyBBcnJheSggbGVuZ3RoICk7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0ucHJvbWlzZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlc1sgaSBdLnByb21pc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9ncmVzcyggdXBkYXRlRnVuYyggaSwgcHJvZ3Jlc3NDb250ZXh0cywgcHJvZ3Jlc3NWYWx1ZXMgKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbmUoIHVwZGF0ZUZ1bmMoIGksIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmFpbCggZGVmZXJyZWQucmVqZWN0ICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXJlbWFpbmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IHdhaXRpbmcgb24gYW55dGhpbmcsIHJlc29sdmUgdGhlIG1hc3RlclxuICAgICAgICAgICAgaWYgKCAhcmVtYWluaW5nICkge1xuICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbiAgICB2YXIgcmVhZHlMaXN0O1xuXG4gICAgalF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXG4gICAgICAgIC8vIEFkZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgalF1ZXJ5LnJlYWR5LnByb21pc2UoKS5kb25lKCBmbiApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBqUXVlcnkuZXh0ZW5kKCB7XG5cbiAgICAgICAgLy8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cbiAgICAgICAgaXNSZWFkeTogZmFsc2UsXG5cbiAgICAgICAgLy8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuICAgICAgICAvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuICAgICAgICByZWFkeVdhaXQ6IDEsXG5cbiAgICAgICAgLy8gSG9sZCAob3IgcmVsZWFzZSkgdGhlIHJlYWR5IGV2ZW50XG4gICAgICAgIGhvbGRSZWFkeTogZnVuY3Rpb24oIGhvbGQgKSB7XG4gICAgICAgICAgICBpZiAoIGhvbGQgKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LnJlYWR5V2FpdCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkucmVhZHkoIHRydWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG4gICAgICAgIHJlYWR5OiBmdW5jdGlvbiggd2FpdCApIHtcblxuICAgICAgICAgICAgLy8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuICAgICAgICAgICAgaWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1lbWJlciB0aGF0IHRoZSBET00gaXMgcmVhZHlcbiAgICAgICAgICAgIGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcbiAgICAgICAgICAgIGlmICggd2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuICAgICAgICAgICAgcmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGFueSBib3VuZCByZWFkeSBldmVudHNcbiAgICAgICAgICAgIGlmICggalF1ZXJ5LmZuLnRyaWdnZXJIYW5kbGVyICkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VySGFuZGxlciggXCJyZWFkeVwiICk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCBkb2N1bWVudCApLm9mZiggXCJyZWFkeVwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xuICAgICAgICBqUXVlcnkucmVhZHkoKTtcbiAgICB9XG5cbiAgICBqUXVlcnkucmVhZHkucHJvbWlzZSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gICAgICAgIGlmICggIXJlYWR5TGlzdCApIHtcblxuICAgICAgICAgICAgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbiAgICAgICAgICAgIC8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4gICAgICAgICAgICAvLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOS0xMCBvbmx5XG4gICAgICAgICAgICAvLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG4gICAgICAgICAgICAgICAgKCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaXQgYXN5bmNocm9ub3VzbHkgdG8gYWxsb3cgc2NyaXB0cyB0aGUgb3Bwb3J0dW5pdHkgdG8gZGVsYXkgcmVhZHlcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXG4gICAgICAgICAgICAgICAgLy8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFkeUxpc3QucHJvbWlzZSggb2JqICk7XG4gICAgfTtcblxuLy8gS2ljayBvZmYgdGhlIERPTSByZWFkeSBjaGVjayBldmVuIGlmIHRoZSB1c2VyIGRvZXMgbm90XG4gICAgalF1ZXJ5LnJlYWR5LnByb21pc2UoKTtcblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbiAgICB2YXIgYWNjZXNzID0gZnVuY3Rpb24oIGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3ICkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsZW4gPSBlbGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBidWxrID0ga2V5ID09IG51bGw7XG5cbiAgICAgICAgLy8gU2V0cyBtYW55IHZhbHVlc1xuICAgICAgICBpZiAoIGpRdWVyeS50eXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcbiAgICAgICAgICAgIGNoYWluYWJsZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKCBpIGluIGtleSApIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3MoIGVsZW1zLCBmbiwgaSwga2V5WyBpIF0sIHRydWUsIGVtcHR5R2V0LCByYXcgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0cyBvbmUgdmFsdWVcbiAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGNoYWluYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICggIWpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuICAgICAgICAgICAgICAgIHJhdyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggYnVsayApIHtcblxuICAgICAgICAgICAgICAgIC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuICAgICAgICAgICAgICAgIGlmICggcmF3ICkge1xuICAgICAgICAgICAgICAgICAgICBmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidWxrID0gZm47XG4gICAgICAgICAgICAgICAgICAgIGZuID0gZnVuY3Rpb24oIGVsZW0sIGtleSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggZm4gKSB7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXNbIGkgXSwga2V5LCByYXcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jYWxsKCBlbGVtc1sgaSBdLCBpLCBmbiggZWxlbXNbIGkgXSwga2V5ICkgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGFpbmFibGUgP1xuICAgICAgICAgICAgZWxlbXMgOlxuXG4gICAgICAgICAgICAvLyBHZXRzXG4gICAgICAgICAgICBidWxrID9cbiAgICAgICAgICAgICAgICBmbi5jYWxsKCBlbGVtcyApIDpcbiAgICAgICAgICAgICAgICBsZW4gPyBmbiggZWxlbXNbIDAgXSwga2V5ICkgOiBlbXB0eUdldDtcbiAgICB9O1xuICAgIHZhciBhY2NlcHREYXRhID0gZnVuY3Rpb24oIG93bmVyICkge1xuXG4gICAgICAgIC8vIEFjY2VwdHMgb25seTpcbiAgICAgICAgLy8gIC0gTm9kZVxuICAgICAgICAvLyAgICAtIE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgICAgIC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG4gICAgICAgIC8vICAtIE9iamVjdFxuICAgICAgICAvLyAgICAtIEFueVxuICAgICAgICAvKiBqc2hpbnQgLVcwMTggKi9cbiAgICAgICAgcmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xuICAgIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBEYXRhKCkge1xuICAgICAgICB0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG4gICAgfVxuXG4gICAgRGF0YS51aWQgPSAxO1xuXG4gICAgRGF0YS5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCBvd25lciwgaW5pdGlhbCApIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluaXRpYWwgfHwge307XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcbiAgICAgICAgICAgIC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG4gICAgICAgICAgICBpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuICAgICAgICAgICAgICAgIG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlLCBub24td3JpdGFibGUgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAvLyBjb25maWd1cmFiaWxpdHkgbXVzdCBiZSB0cnVlIHRvIGFsbG93IHRoZSBwcm9wZXJ0eSB0byBiZVxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZWQgd2l0aCB0aGUgZGVsZXRlIG9wZXJhdG9yXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb3duZXIsIHRoaXMuZXhwYW5kbywge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuICAgICAgICB9LFxuICAgICAgICBjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG4gICAgICAgICAgICAvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2VycyxcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG4gICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgICAgICAgIGlmICggIWFjY2VwdERhdGEoIG93bmVyICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgb3duZXIgb2JqZWN0IGFscmVhZHkgaGFzIGEgY2FjaGVcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuICAgICAgICAgICAgLy8gSWYgbm90LCBjcmVhdGUgb25lXG4gICAgICAgICAgICBpZiAoICF2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAoIGFjY2VwdERhdGEoIG93bmVyICkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgaXMgYSBub2RlIHVubGlrZWx5IHRvIGJlIHN0cmluZ2lmeS1lZCBvciBsb29wZWQgb3ZlclxuICAgICAgICAgICAgICAgICAgICAvLyB1c2UgcGxhaW4gYXNzaWdubWVudFxuICAgICAgICAgICAgICAgICAgICBpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBzZWN1cmUgaXQgaW4gYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb3duZXIsIHRoaXMuZXhwYW5kbywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKCBvd25lciwgZGF0YSwgdmFsdWUgKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCxcbiAgICAgICAgICAgICAgICBjYWNoZSA9IHRoaXMuY2FjaGUoIG93bmVyICk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3NcbiAgICAgICAgICAgIGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVbIGRhdGEgXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3NcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvciAoIHByb3AgaW4gZGF0YSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVbIHByb3AgXSA9IGRhdGFbIHByb3AgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUoIG93bmVyICkgOlxuICAgICAgICAgICAgb3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsga2V5IF07XG4gICAgICAgIH0sXG4gICAgICAgIGFjY2VzczogZnVuY3Rpb24oIG93bmVyLCBrZXksIHZhbHVlICkge1xuICAgICAgICAgICAgdmFyIHN0b3JlZDtcblxuICAgICAgICAgICAgLy8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcbiAgICAgICAgICAgIC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3RcbiAgICAgICAgICAgIC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgKCAoIGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiICkgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApICkge1xuXG4gICAgICAgICAgICAgICAgc3RvcmVkID0gdGhpcy5nZXQoIG93bmVyLCBrZXkgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZWQgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZCA6IHRoaXMuZ2V0KCBvd25lciwgalF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICkgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcbiAgICAgICAgICAgIC8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdGhpcy5zZXQoIG93bmVyLCBrZXksIHZhbHVlICk7XG5cbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBcInNldFwiIHBhdGggY2FuIGhhdmUgdHdvIHBvc3NpYmxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuICAgICAgICAgICAgdmFyIGksIG5hbWUsIGNhbWVsLFxuICAgICAgICAgICAgICAgIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG4gICAgICAgICAgICBpZiAoIGNhY2hlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIoIG93bmVyICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuICAgICAgICAgICAgICAgIGlmICggalF1ZXJ5LmlzQXJyYXkoIGtleSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIFwibmFtZVwiIGlzIGFuIGFycmF5IG9mIGtleXMuLi5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkYXRhIGlzIGluaXRpYWxseSBjcmVhdGVkLCB2aWEgKFwia2V5XCIsIFwidmFsXCIpIHNpZ25hdHVyZSxcbiAgICAgICAgICAgICAgICAgICAgLy8ga2V5cyB3aWxsIGJlIGNvbnZlcnRlZCB0byBjYW1lbENhc2UuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIF9ob3dfIGEga2V5IHdhcyBhZGRlZCwgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvdGggcGxhaW4ga2V5IGFuZCBjYW1lbENhc2Uga2V5LiAjMTI3ODZcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIG9ubHkgcGVuYWxpemUgdGhlIGFycmF5IGFyZ3VtZW50IHBhdGguXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBrZXkuY29uY2F0KCBrZXkubWFwKCBqUXVlcnkuY2FtZWxDYXNlICkgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYW1lbCA9IGpRdWVyeS5jYW1lbENhc2UoIGtleSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0aGUgc3RyaW5nIGFzIGEga2V5IGJlZm9yZSBhbnkgbWFuaXB1bGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmICgga2V5IGluIGNhY2hlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFsga2V5LCBjYW1lbCBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IGNhbWVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUgaW4gY2FjaGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgbmFtZSBdIDogKCBuYW1lLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSA9IG5hbWUubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKCBpLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVsgbmFtZVsgaSBdIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcbiAgICAgICAgICAgIGlmICgga2V5ID09PSB1bmRlZmluZWQgfHwgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICkgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0gMzUtNDUrXG4gICAgICAgICAgICAgICAgLy8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwN1xuICAgICAgICAgICAgICAgIGlmICggb3duZXIubm9kZVR5cGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG4gICAgdmFyIGRhdGFVc2VyID0gbmV3IERhdGEoKTtcblxuXG5cbi8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4vL1xuLy9cdDEuIEVuZm9yY2UgQVBJIHN1cmZhY2UgYW5kIHNlbWFudGljIGNvbXBhdGliaWxpdHkgd2l0aCAxLjkueCBicmFuY2hcbi8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2Vcbi8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbi8vXHQzLiBVc2UgdGhlIHNhbWUgc2luZ2xlIG1lY2hhbmlzbSB0byBzdXBwb3J0IFwicHJpdmF0ZVwiIGFuZCBcInVzZXJcIiBkYXRhLlxuLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbi8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbi8vXHQ2LiBQcm92aWRlIGEgY2xlYXIgcGF0aCBmb3IgaW1wbGVtZW50YXRpb24gdXBncmFkZSB0byBXZWFrTWFwIGluIDIwMTRcblxuICAgIHZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG4gICAgICAgIHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuICAgIGZ1bmN0aW9uIGRhdGFBdHRyKCBlbGVtLCBrZXksIGRhdGEgKSB7XG4gICAgICAgIHZhciBuYW1lO1xuXG4gICAgICAgIC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kIGludGVybmFsbHksIHRyeSB0byBmZXRjaCBhbnlcbiAgICAgICAgLy8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG4gICAgICAgIGlmICggZGF0YSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG4gICAgICAgICAgICBuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cbiAgICAgICAgICAgIGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgPT09IFwidHJ1ZVwiID8gdHJ1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID09PSBcImZhbHNlXCIgPyBmYWxzZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PT0gXCJudWxsXCIgPyBudWxsIDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArZGF0YSArIFwiXCIgPT09IGRhdGEgPyArZGF0YSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYnJhY2UudGVzdCggZGF0YSApID8galF1ZXJ5LnBhcnNlSlNPTiggZGF0YSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKCBlICkge31cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldCggZWxlbSwga2V5LCBkYXRhICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICBoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhVXNlci5oYXNEYXRhKCBlbGVtICkgfHwgZGF0YVByaXYuaGFzRGF0YSggZWxlbSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuICAgICAgICAgICAgZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcbiAgICAgICAgLy8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG4gICAgICAgIF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIG5hbWUsIGRhdGEgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfcmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG4gICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG4gICAgICAgICAgICB2YXIgaSwgbmFtZSwgZGF0YSxcbiAgICAgICAgICAgICAgICBlbGVtID0gdGhpc1sgMCBdLFxuICAgICAgICAgICAgICAgIGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cbiAgICAgICAgICAgIC8vIEdldHMgYWxsIHZhbHVlc1xuICAgICAgICAgICAgaWYgKCBrZXkgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBhdHRycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIGktLSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFMTErXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBhdHRyc1sgaSBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYXR0cnNbIGkgXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG5hbWUuaW5kZXhPZiggXCJkYXRhLVwiICkgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVXNlci5zZXQoIHRoaXMsIGtleSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhLCBjYW1lbEtleTtcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG4gICAgICAgICAgICAgICAgLy8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuICAgICAgICAgICAgICAgIC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcbiAgICAgICAgICAgICAgICAvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuICAgICAgICAgICAgICAgIGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUga2V5IGFzLWlzXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApIHx8XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gZmluZCBkYXNoZWQga2V5IGlmIGl0IGV4aXN0cyAoZ2gtMjc3OSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGZvciAyLjIueCBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVXNlci5nZXQoIGVsZW0sIGtleS5yZXBsYWNlKCBybXVsdGlEYXNoLCBcIi0kJlwiICkudG9Mb3dlckNhc2UoKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYW1lbEtleSA9IGpRdWVyeS5jYW1lbENhc2UoIGtleSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCB0aGUga2V5IGNhbWVsaXplZFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtLCBjYW1lbEtleSApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBcImRpc2NvdmVyXCIgdGhlIGRhdGEgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YUF0dHIoIGVsZW0sIGNhbWVsS2V5LCB1bmRlZmluZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgZGF0YS4uLlxuICAgICAgICAgICAgICAgIGNhbWVsS2V5ID0galF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICk7XG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCwgYXR0ZW1wdCB0byBzdG9yZSBhIGNvcHkgb3IgcmVmZXJlbmNlIG9mIGFueVxuICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIHRoYXQgbWlnaHQndmUgYmVlbiBzdG9yZSB3aXRoIGEgY2FtZWxDYXNlZCBrZXkuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gZGF0YVVzZXIuZ2V0KCB0aGlzLCBjYW1lbEtleSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBIVE1MNSBkYXRhLSogYXR0cmlidXRlIGludGVyb3AsIHdlIGhhdmUgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgcHJvcGVydHkgbmFtZXMgd2l0aCBkYXNoZXMgaW4gYSBjYW1lbENhc2UgZm9ybS5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtaWdodCBub3QgYXBwbHkgdG8gYWxsIHByb3BlcnRpZXMuLi4qXG4gICAgICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldCggdGhpcywgY2FtZWxLZXksIHZhbHVlICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKi4uLiBJbiB0aGUgY2FzZSBvZiBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgX2FjdHVhbGx5X1xuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIGRhc2hlcywgd2UgbmVlZCB0byBhbHNvIHN0b3JlIGEgY29weSBvZiB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHVuY2hhbmdlZCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXkuaW5kZXhPZiggXCItXCIgKSA+IC0xICYmIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldCggdGhpcywga2V5LCB2YWx1ZSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cblxuICAgIGpRdWVyeS5leHRlbmQoIHtcbiAgICAgICAgcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBkYXRhICkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlO1xuXG4gICAgICAgICAgICBpZiAoIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcbiAgICAgICAgICAgICAgICBxdWV1ZSA9IGRhdGFQcml2LmdldCggZWxlbSwgdHlwZSApO1xuXG4gICAgICAgICAgICAgICAgLy8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuICAgICAgICAgICAgICAgIGlmICggZGF0YSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhcXVldWUgfHwgalF1ZXJ5LmlzQXJyYXkoIGRhdGEgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KCBkYXRhICkgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goIGRhdGEgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcXVldWUgfHwgW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG4gICAgICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuICAgICAgICAgICAgICAgIHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGZuID0gcXVldWUuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuICAgICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG4gICAgICAgICAgICBpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcbiAgICAgICAgICAgICAgICBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgc3RhcnRMZW5ndGgtLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBmbiApIHtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcbiAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIXN0YXJ0TGVuZ3RoICYmIGhvb2tzICkge1xuICAgICAgICAgICAgICAgIGhvb2tzLmVtcHR5LmZpcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICBfcXVldWVIb29rczogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFQcml2LmdldCggZWxlbSwga2V5ICkgfHwgZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLmFkZCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcbiAgICAgICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCgge1xuICAgICAgICBxdWV1ZTogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG4gICAgICAgICAgICB2YXIgc2V0dGVyID0gMjtcblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdHlwZTtcbiAgICAgICAgICAgICAgICB0eXBlID0gXCJmeFwiO1xuICAgICAgICAgICAgICAgIHNldHRlci0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1sgMCBdLCB0eXBlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgIHRoaXMgOlxuICAgICAgICAgICAgICAgIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWyAwIF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVxdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG4gICAgICAgIC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuICAgICAgICBwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuICAgICAgICAgICAgdmFyIHRtcCxcbiAgICAgICAgICAgICAgICBjb3VudCA9IDEsXG4gICAgICAgICAgICAgICAgZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhKCAtLWNvdW50ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICBvYmogPSB0eXBlO1xuICAgICAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgIHRtcCA9IGRhdGFQcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG4gICAgICAgICAgICAgICAgaWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVyLnByb21pc2UoIG9iaiApO1xuICAgICAgICB9XG4gICAgfSApO1xuICAgIHZhciBwbnVtID0gKCAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLyApLnNvdXJjZTtcblxuICAgIHZhciByY3NzTnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKTtcblxuXG4gICAgdmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG4gICAgdmFyIGlzSGlkZGVuID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xuXG4gICAgICAgIC8vIGlzSGlkZGVuIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG4gICAgICAgIC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuICAgICAgICBlbGVtID0gZWwgfHwgZWxlbTtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgPT09IFwibm9uZVwiIHx8XG4gICAgICAgICAgICAhalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcbiAgICB9O1xuXG5cblxuICAgIGZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG4gICAgICAgIHZhciBhZGp1c3RlZCxcbiAgICAgICAgICAgIHNjYWxlID0gMSxcbiAgICAgICAgICAgIG1heEl0ZXJhdGlvbnMgPSAyMCxcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHR3ZWVuLmN1cigpOyB9IDpcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AsIFwiXCIgKTsgfSxcbiAgICAgICAgICAgIGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcbiAgICAgICAgICAgIHVuaXQgPSB2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHNbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKSxcblxuICAgICAgICAvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuICAgICAgICAgICAgaW5pdGlhbEluVW5pdCA9ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCApICYmXG4gICAgICAgICAgICAgICAgcmNzc051bS5leGVjKCBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wICkgKTtcblxuICAgICAgICBpZiAoIGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFsgMyBdICE9PSB1bml0ICkge1xuXG4gICAgICAgICAgICAvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG4gICAgICAgICAgICB1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cbiAgICAgICAgICAgIHZhbHVlUGFydHMgPSB2YWx1ZVBhcnRzIHx8IFtdO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cbiAgICAgICAgICAgIGRvIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHByZXZpb3VzIGl0ZXJhdGlvbiB6ZXJvZWQgb3V0LCBkb3VibGUgdW50aWwgd2UgZ2V0ICpzb21ldGhpbmcqLlxuICAgICAgICAgICAgICAgIC8vIFVzZSBzdHJpbmcgZm9yIGRvdWJsaW5nIHNvIHdlIGRvbid0IGFjY2lkZW50YWxseSBzZWUgc2NhbGUgYXMgdW5jaGFuZ2VkIGJlbG93XG4gICAgICAgICAgICAgICAgc2NhbGUgPSBzY2FsZSB8fCBcIi41XCI7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgYW5kIGFwcGx5XG4gICAgICAgICAgICAgICAgaW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcbiAgICAgICAgICAgICAgICBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2NhbGUsIHRvbGVyYXRpbmcgemVybyBvciBOYU4gZnJvbSB0d2Vlbi5jdXIoKVxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIHRoZSBsb29wIGlmIHNjYWxlIGlzIHVuY2hhbmdlZCBvciBwZXJmZWN0LCBvciBpZiB3ZSd2ZSBqdXN0IGhhZCBlbm91Z2guXG4gICAgICAgICAgICB9IHdoaWxlIChcbiAgICAgICAgICAgIHNjYWxlICE9PSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsICkgJiYgc2NhbGUgIT09IDEgJiYgLS1tYXhJdGVyYXRpb25zXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdmFsdWVQYXJ0cyApIHtcbiAgICAgICAgICAgIGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwO1xuXG4gICAgICAgICAgICAvLyBBcHBseSByZWxhdGl2ZSBvZmZzZXQgKCs9Ly09KSBpZiBzcGVjaWZpZWRcbiAgICAgICAgICAgIGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cbiAgICAgICAgICAgIGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG4gICAgICAgICAgICAgICAgK3ZhbHVlUGFydHNbIDIgXTtcbiAgICAgICAgICAgIGlmICggdHdlZW4gKSB7XG4gICAgICAgICAgICAgICAgdHdlZW4udW5pdCA9IHVuaXQ7XG4gICAgICAgICAgICAgICAgdHdlZW4uc3RhcnQgPSBpbml0aWFsSW5Vbml0O1xuICAgICAgICAgICAgICAgIHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGp1c3RlZDtcbiAgICB9XG4gICAgdmFyIHJjaGVja2FibGVUeXBlID0gKCAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSApO1xuXG4gICAgdmFyIHJ0YWdOYW1lID0gKCAvPChbXFx3Oi1dKykvICk7XG5cbiAgICB2YXIgcnNjcmlwdFR5cGUgPSAoIC9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kgKTtcblxuXG5cbi8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXG4gICAgdmFyIHdyYXBNYXAgPSB7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUU5XG4gICAgICAgIG9wdGlvbjogWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdLFxuXG4gICAgICAgIC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG4gICAgICAgIC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cbiAgICAgICAgLy8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuICAgICAgICB0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG4gICAgICAgIGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG4gICAgICAgIHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcbiAgICAgICAgdGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG4gICAgICAgIF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxuICAgIH07XG5cbi8vIFN1cHBvcnQ6IElFOVxuICAgIHdyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbjtcblxuICAgIHdyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG4gICAgd3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cblxuICAgIGZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFOS0xMStcbiAgICAgICAgLy8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAoIzE1MTUxKVxuICAgICAgICB2YXIgcmV0ID0gdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgP1xuICAgICAgICAgICAgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICkgOlxuICAgICAgICAgICAgdHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIiA/XG4gICAgICAgICAgICAgICAgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgfHwgXCIqXCIgKSA6XG4gICAgICAgICAgICAgICAgW107XG5cbiAgICAgICAgcmV0dXJuIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBqUXVlcnkubm9kZU5hbWUoIGNvbnRleHQsIHRhZyApID9cbiAgICAgICAgICAgIGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIHJldCApIDpcbiAgICAgICAgICAgIHJldDtcbiAgICB9XG5cblxuLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG4gICAgZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICBsID0gZWxlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoIDsgaSA8IGw7IGkrKyApIHtcbiAgICAgICAgICAgIGRhdGFQcml2LnNldChcbiAgICAgICAgICAgICAgICBlbGVtc1sgaSBdLFxuICAgICAgICAgICAgICAgIFwiZ2xvYmFsRXZhbFwiLFxuICAgICAgICAgICAgICAgICFyZWZFbGVtZW50cyB8fCBkYXRhUHJpdi5nZXQoIHJlZkVsZW1lbnRzWyBpIF0sIFwiZ2xvYmFsRXZhbFwiIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHZhciByaHRtbCA9IC88fCYjP1xcdys7LztcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG4gICAgICAgIHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgY29udGFpbnMsIGosXG4gICAgICAgICAgICBmcmFnbWVudCA9IGNvbnRleHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgbm9kZXMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgbCA9IGVsZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbXNbIGkgXTtcblxuICAgICAgICAgICAgaWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgbm9kZXMgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS50eXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZDw0LjEsIFBoYW50b21KUzwyXG4gICAgICAgICAgICAgICAgICAgIC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Lm1lcmdlKCBub2RlcywgZWxlbS5ub2RlVHlwZSA/IFsgZWxlbSBdIDogZWxlbSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goIGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoIGVsZW0gKSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZCggY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRhZyA9ICggcnRhZ05hbWUuZXhlYyggZWxlbSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IHdyYXBbIDEgXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKCBlbGVtICkgKyB3cmFwWyAyIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGogPSB3cmFwWyAwIF07XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggai0tICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gdG1wLmxhc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4xLCBQaGFudG9tSlM8MlxuICAgICAgICAgICAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICgjMTIzOTIpXG4gICAgICAgICAgICAgICAgICAgIHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuICAgICAgICBmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgaSA9IDA7XG4gICAgICAgIHdoaWxlICggKCBlbGVtID0gbm9kZXNbIGkrKyBdICkgKSB7XG5cbiAgICAgICAgICAgIC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG4gICAgICAgICAgICBpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGlnbm9yZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWQucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdG8gZnJhZ21lbnRcbiAgICAgICAgICAgIHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG4gICAgICAgICAgICAvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG4gICAgICAgICAgICBpZiAoIGNvbnRhaW5zICkge1xuICAgICAgICAgICAgICAgIHNldEdsb2JhbEV2YWwoIHRtcCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG4gICAgICAgICAgICBpZiAoIHNjcmlwdHMgKSB7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCAoIGVsZW0gPSB0bXBbIGorKyBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcnNjcmlwdFR5cGUudGVzdCggZWxlbS50eXBlIHx8IFwiXCIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuXG4gICAgKCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgZGl2ID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApLFxuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblxuICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMC00LjMsIFNhZmFyaTw9NS4xXG4gICAgICAgIC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG4gICAgICAgIC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcbiAgICAgICAgLy8gYG5hbWVgIGFuZCBgdHlwZWAgbXVzdCB1c2UgLnNldEF0dHJpYnV0ZSBmb3IgV1dBICgjMTQ5MDEpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwicmFkaW9cIiApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoIFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiApO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcInRcIiApO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcblxuICAgICAgICAvLyBTdXBwb3J0OiBTYWZhcmk8PTUuMSwgQW5kcm9pZDw0LjJcbiAgICAgICAgLy8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG4gICAgICAgIHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUoIHRydWUgKS5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuY2hlY2tlZDtcblxuICAgICAgICAvLyBTdXBwb3J0OiBJRTw9MTErXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcbiAgICAgICAgc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG4gICAgfSApKCk7XG5cblxuICAgIHZhclxuICAgICAgICBya2V5RXZlbnQgPSAvXmtleS8sXG4gICAgICAgIHJtb3VzZUV2ZW50ID0gL14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFxuICAgICAgICBydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbiAgICBmdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuLy8gU3VwcG9ydDogSUU5XG4vLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cbiAgICBmdW5jdGlvbiBzYWZlQWN0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9IGNhdGNoICggZXJyICkgeyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb24oIGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSApIHtcbiAgICAgICAgdmFyIG9yaWdGbiwgdHlwZTtcblxuICAgICAgICAvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcbiAgICAgICAgaWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cbiAgICAgICAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuICAgICAgICAgICAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBkYXRhIClcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YSB8fCBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG4gICAgICAgICAgICAgICAgb24oIGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuICAgICAgICAgICAgLy8gKCB0eXBlcywgZm4gKVxuICAgICAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXG4gICAgICAgICAgICAgICAgLy8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcbiAgICAgICAgICAgICAgICBmbiA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG4gICAgICAgICAgICAgICAgZm4gPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIGZuID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIGZuID0gcmV0dXJuRmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoICFmbiApIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBvbmUgPT09IDEgKSB7XG4gICAgICAgICAgICBvcmlnRm4gPSBmbjtcbiAgICAgICAgICAgIGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCkub2ZmKCBldmVudCApO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cbiAgICAgICAgICAgIGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gICAgICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAgICAgKi9cbiAgICBqUXVlcnkuZXZlbnQgPSB7XG5cbiAgICAgICAgZ2xvYmFsOiB7fSxcblxuICAgICAgICBhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVPYmpJbiwgZXZlbnRIYW5kbGUsIHRtcCxcbiAgICAgICAgICAgICAgICBldmVudHMsIHQsIGhhbmRsZU9iaixcbiAgICAgICAgICAgICAgICBzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG4gICAgICAgICAgICAgICAgZWxlbURhdGEgPSBkYXRhUHJpdi5nZXQoIGVsZW0gKTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcbiAgICAgICAgICAgIGlmICggIWVsZW1EYXRhICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICBpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3RvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgICBpZiAoICFoYW5kbGVyLmd1aWQgKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuICAgICAgICAgICAgaWYgKCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcbiAgICAgICAgICAgICAgICBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggISggZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgKSApIHtcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseSggZWxlbSwgYXJndW1lbnRzICkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuICAgICAgICAgICAgdHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XG4gICAgICAgICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCB0LS0gKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsgMSBdO1xuICAgICAgICAgICAgICAgIG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICBpZiAoICF0eXBlICkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuICAgICAgICAgICAgICAgIHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgaGFuZGxlT2JqID0galF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnVHlwZTogb3JpZ1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgIGd1aWQ6IGhhbmRsZXIuZ3VpZCxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICBuZWVkc0NvbnRleHQ6IHNlbGVjdG9yICYmIGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApLFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKVxuICAgICAgICAgICAgICAgIH0sIGhhbmRsZU9iakluICk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIGlmICggISggaGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSApICkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoICFzcGVjaWFsLnNldHVwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNwZWNpYWwuYWRkICkge1xuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsLmFkZC5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoICFoYW5kbGVPYmouaGFuZGxlci5ndWlkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG4gICAgICAgICAgICAgICAgaWYgKCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQuZ2xvYmFsWyB0eXBlIF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cbiAgICAgICAgICAgIHZhciBqLCBvcmlnQ291bnQsIHRtcCxcbiAgICAgICAgICAgICAgICBldmVudHMsIHQsIGhhbmRsZU9iaixcbiAgICAgICAgICAgICAgICBzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG4gICAgICAgICAgICAgICAgZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cbiAgICAgICAgICAgIGlmICggIWVsZW1EYXRhIHx8ICEoIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyApICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuICAgICAgICAgICAgdHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XG4gICAgICAgICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCB0LS0gKSB7XG4gICAgICAgICAgICAgICAgdG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsgMSBdO1xuICAgICAgICAgICAgICAgIG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoICF0eXBlICkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuICAgICAgICAgICAgICAgIHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcbiAgICAgICAgICAgICAgICBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdIHx8IFtdO1xuICAgICAgICAgICAgICAgIHRtcCA9IHRtcFsgMiBdICYmXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuICAgICAgICAgICAgICAgIG9yaWdDb3VudCA9IGogPSBoYW5kbGVycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCBqLS0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCAhaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoIGosIDEgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMuZGVsZWdhdGVDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3RcbiAgICAgICAgICAgICAgICAvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcbiAgICAgICAgICAgICAgICBpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBlbGVtRGF0YS5oYW5kbGUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbIHR5cGUgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG4gICAgICAgICAgICBpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcbiAgICAgICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICAgICAgLy8gTWFrZSBhIHdyaXRhYmxlIGpRdWVyeS5FdmVudCBmcm9tIHRoZSBuYXRpdmUgZXZlbnQgb2JqZWN0XG4gICAgICAgICAgICBldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICk7XG5cbiAgICAgICAgICAgIHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaixcbiAgICAgICAgICAgICAgICBoYW5kbGVyUXVldWUgPSBbXSxcbiAgICAgICAgICAgICAgICBhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMgPSAoIGRhdGFQcml2LmdldCggdGhpcywgXCJldmVudHNcIiApIHx8IHt9IClbIGV2ZW50LnR5cGUgXSB8fCBbXSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcblxuICAgICAgICAgICAgLy8gVXNlIHRoZSBmaXgtZWQgalF1ZXJ5LkV2ZW50IHJhdGhlciB0aGFuIHRoZSAocmVhZC1vbmx5KSBuYXRpdmUgZXZlbnRcbiAgICAgICAgICAgIGFyZ3NbIDAgXSA9IGV2ZW50O1xuICAgICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG4gICAgICAgICAgICBpZiAoIHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBoYW5kbGVyc1xuICAgICAgICAgICAgaGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG4gICAgICAgICAgICAvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuXG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyZWQgZXZlbnQgbXVzdCBlaXRoZXIgMSkgaGF2ZSBubyBuYW1lc3BhY2UsIG9yIDIpIGhhdmUgbmFtZXNwYWNlKHMpXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgc3Vic2V0IG9yIGVxdWFsIHRvIHRob3NlIGluIHRoZSBib3VuZCBldmVudCAoYm90aCBjYW4gaGF2ZSBubyBuYW1lc3BhY2UpLlxuICAgICAgICAgICAgICAgICAgICBpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGV2ZW50LnJuYW1lc3BhY2UudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9ICggKCBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30gKS5oYW5kbGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyICkuYXBwbHkoIG1hdGNoZWQuZWxlbSwgYXJncyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggKCBldmVudC5yZXN1bHQgPSByZXQgKSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuICAgICAgICAgICAgaWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xuICAgICAgICAgICAgdmFyIGksIG1hdGNoZXMsIHNlbCwgaGFuZGxlT2JqLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZSA9IFtdLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuICAgICAgICAgICAgICAgIGN1ciA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCAoYXQgbGVhc3QpOiBDaHJvbWUsIElFOVxuICAgICAgICAgICAgLy8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuICAgICAgICAgICAgLy8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKCMxMzE4MClcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94PD00MitcbiAgICAgICAgICAgIC8vIEF2b2lkIG5vbi1sZWZ0LWNsaWNrIGluIEZGIGJ1dCBkb24ndCBibG9jayBJRSByYWRpbyBldmVudHMgKCMzODYxLCBnaC0yMzQzKVxuICAgICAgICAgICAgaWYgKCBkZWxlZ2F0ZUNvdW50ICYmIGN1ci5ub2RlVHlwZSAmJlxuICAgICAgICAgICAgICAgICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiIHx8IGlzTmFOKCBldmVudC5idXR0b24gKSB8fCBldmVudC5idXR0b24gPCAxICkgKSB7XG5cbiAgICAgICAgICAgICAgICBmb3IgKCA7IGN1ciAhPT0gdGhpczsgY3VyID0gY3VyLnBhcmVudE5vZGUgfHwgdGhpcyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjaGVjayBub24tZWxlbWVudHMgKCMxMzIwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXG4gICAgICAgICAgICAgICAgICAgIGlmICggY3VyLm5vZGVUeXBlID09PSAxICYmICggY3VyLmRpc2FibGVkICE9PSB0cnVlIHx8IGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzICgjMTMyMDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1hdGNoZXNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSggc2VsLCB0aGlzICkuaW5kZXgoIGN1ciApID4gLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXRjaGVzWyBzZWwgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKCBoYW5kbGVPYmogKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG1hdGNoZXMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZXMgfSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG4gICAgICAgICAgICBpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogdGhpcywgaGFuZGxlcnM6IGhhbmRsZXJzLnNsaWNlKCBkZWxlZ2F0ZUNvdW50ICkgfSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclF1ZXVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEluY2x1ZGVzIHNvbWUgZXZlbnQgcHJvcHMgc2hhcmVkIGJ5IEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50XG4gICAgICAgIHByb3BzOiAoIFwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgXCIgK1xuICAgICAgICBcIm1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIiApLnNwbGl0KCBcIiBcIiApLFxuXG4gICAgICAgIGZpeEhvb2tzOiB7fSxcblxuICAgICAgICBrZXlIb29rczoge1xuICAgICAgICAgICAgcHJvcHM6IFwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KCBcIiBcIiApLFxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiggZXZlbnQsIG9yaWdpbmFsICkge1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgaWYgKCBldmVudC53aGljaCA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC53aGljaCA9IG9yaWdpbmFsLmNoYXJDb2RlICE9IG51bGwgPyBvcmlnaW5hbC5jaGFyQ29kZSA6IG9yaWdpbmFsLmtleUNvZGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdXNlSG9va3M6IHtcbiAgICAgICAgICAgIHByb3BzOiAoIFwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBcIiArXG4gICAgICAgICAgICBcInNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIiApLnNwbGl0KCBcIiBcIiApLFxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiggZXZlbnQsIG9yaWdpbmFsICkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudERvYywgZG9jLCBib2R5LFxuICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBvcmlnaW5hbC5idXR0b247XG5cbiAgICAgICAgICAgICAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKCBldmVudC5wYWdlWCA9PSBudWxsICYmIG9yaWdpbmFsLmNsaWVudFggIT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREb2MgPSBldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gZXZlbnREb2MuYm9keTtcblxuICAgICAgICAgICAgICAgICAgICBldmVudC5wYWdlWCA9IG9yaWdpbmFsLmNsaWVudFggK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCApIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICggZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDAgKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucGFnZVkgPSBvcmlnaW5hbC5jbGllbnRZICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggZG9jICYmIGRvYy5zY3JvbGxUb3AgIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgIHx8IDAgKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGRvYyAmJiBkb2MuY2xpZW50VG9wICB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wICB8fCAwICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ1dHRvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28gZG9uJ3QgdXNlIGl0XG4gICAgICAgICAgICAgICAgaWYgKCAhZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LndoaWNoID0gKCBidXR0b24gJiAxID8gMSA6ICggYnV0dG9uICYgMiA/IDMgOiAoIGJ1dHRvbiAmIDQgPyAyIDogMCApICkgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZml4OiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICBpZiAoIGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgd3JpdGFibGUgY29weSBvZiB0aGUgZXZlbnQgb2JqZWN0IGFuZCBub3JtYWxpemUgc29tZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICB2YXIgaSwgcHJvcCwgY29weSxcbiAgICAgICAgICAgICAgICB0eXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50ID0gZXZlbnQsXG4gICAgICAgICAgICAgICAgZml4SG9vayA9IHRoaXMuZml4SG9va3NbIHR5cGUgXTtcblxuICAgICAgICAgICAgaWYgKCAhZml4SG9vayApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpeEhvb2tzWyB0eXBlIF0gPSBmaXhIb29rID1cbiAgICAgICAgICAgICAgICAgICAgcm1vdXNlRXZlbnQudGVzdCggdHlwZSApID8gdGhpcy5tb3VzZUhvb2tzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJrZXlFdmVudC50ZXN0KCB0eXBlICkgPyB0aGlzLmtleUhvb2tzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29weSA9IGZpeEhvb2sucHJvcHMgPyB0aGlzLnByb3BzLmNvbmNhdCggZml4SG9vay5wcm9wcyApIDogdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgZXZlbnQgPSBuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cbiAgICAgICAgICAgIGkgPSBjb3B5Lmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgIHByb3AgPSBjb3B5WyBpIF07XG4gICAgICAgICAgICAgICAgZXZlbnRbIHByb3AgXSA9IG9yaWdpbmFsRXZlbnRbIHByb3AgXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3VwcG9ydDogQ29yZG92YSAyLjUgKFdlYktpdCkgKCMxMzI1NSlcbiAgICAgICAgICAgIC8vIEFsbCBldmVudHMgc2hvdWxkIGhhdmUgYSB0YXJnZXQ7IENvcmRvdmEgZGV2aWNlcmVhZHkgZG9lc24ndFxuICAgICAgICAgICAgaWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IGRvY3VtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBTYWZhcmkgNi4wKywgQ2hyb21lPDI4XG4gICAgICAgICAgICAvLyBUYXJnZXQgc2hvdWxkIG5vdCBiZSBhIHRleHQgbm9kZSAoIzUwNCwgIzEzMTQzKVxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQubm9kZVR5cGUgPT09IDMgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaXhIb29rLmZpbHRlciA/IGZpeEhvb2suZmlsdGVyKCBldmVudCwgb3JpZ2luYWxFdmVudCApIDogZXZlbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BlY2lhbDoge1xuICAgICAgICAgICAgbG9hZDoge1xuXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuICAgICAgICAgICAgICAgIG5vQnViYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXM6IHtcblxuICAgICAgICAgICAgICAgIC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMgIT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiYgdGhpcy5mb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsZWdhdGVUeXBlOiBcImZvY3VzaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1ciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsaWNrOiB7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgY2hlY2tib3gsIGZpcmUgbmF0aXZlIGV2ZW50IHNvIGNoZWNrZWQgc3RhdGUgd2lsbCBiZSByaWdodFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIHRoaXMuY2xpY2sgJiYgalF1ZXJ5Lm5vZGVOYW1lKCB0aGlzLCBcImlucHV0XCIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgZG9uJ3QgZmlyZSBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3NcbiAgICAgICAgICAgICAgICBfZGVmYXVsdDogZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5Lm5vZGVOYW1lKCBldmVudC50YXJnZXQsIFwiYVwiICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmVmb3JldW5sb2FkOiB7XG4gICAgICAgICAgICAgICAgcG9zdERpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCAyMCtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cbiAgICAgICAgLy8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG4gICAgICAgIGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBoYW5kbGUgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBqUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuICAgICAgICAvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcbiAgICAgICAgaWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXZlbnQgb2JqZWN0XG4gICAgICAgIGlmICggc3JjICYmIHNyYy50eXBlICkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gc3JjO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gc3JjLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG4gICAgICAgICAgICAvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cbiAgICAgICAgICAgIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcbiAgICAgICAgICAgIHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiZcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG4gICAgICAgICAgICBzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cbiAgICAgICAgICAgICAgICByZXR1cm5UcnVlIDpcbiAgICAgICAgICAgICAgICByZXR1cm5GYWxzZTtcblxuICAgICAgICAgICAgLy8gRXZlbnQgdHlwZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gc3JjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3RcbiAgICAgICAgaWYgKCBwcm9wcyApIHtcbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoIHRoaXMsIHByb3BzICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IGpRdWVyeS5ub3coKTtcblxuICAgICAgICAvLyBNYXJrIGl0IGFzIGZpeGVkXG4gICAgICAgIHRoaXNbIGpRdWVyeS5leHBhbmRvIF0gPSB0cnVlO1xuICAgIH07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwMzAzMzEvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG4gICAgalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcbiAgICAgICAgaXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcbiAgICAgICAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuICAgICAgICBpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG4gICAgICAgIGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuICAgICAgICAgICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG4gICAgICAgICAgICBpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cbiAgICAgICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG4gICAgICAgICAgICBpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4vLyBEbyB0aGUgc2FtZSBmb3IgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBhbmQgcG9pbnRlcm92ZXIvcG9pbnRlcm91dFxuLy9cbi8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbi8vIFNhZmFyaSBzZW5kcyBtb3VzZWVudGVyIHRvbyBvZnRlbjsgc2VlOlxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cbiAgICBqUXVlcnkuZWFjaCgge1xuICAgICAgICBtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuICAgICAgICBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG4gICAgICAgIHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuICAgICAgICBwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG4gICAgfSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcbiAgICAgICAgalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcbiAgICAgICAgICAgIGRlbGVnYXRlVHlwZTogZml4LFxuICAgICAgICAgICAgYmluZFR5cGU6IGZpeCxcblxuICAgICAgICAgICAgaGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAgICAgLy8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcbiAgICAgICAgICAgICAgICBpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9IGZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9ICk7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKCB7XG4gICAgICAgIG9uOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcbiAgICAgICAgICAgIHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuICAgICAgICB9LFxuICAgICAgICBvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuICAgICAgICAgICAgcmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlT2JqLCB0eXBlO1xuICAgICAgICAgICAgaWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG4gICAgICAgICAgICAgICAgaGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuICAgICAgICAgICAgICAgIGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPYmoub3JpZ1R5cGUgKyBcIi5cIiArIGhhbmRsZU9iai5uYW1lc3BhY2UgOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT2JqLm9yaWdUeXBlLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPYmouc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG4gICAgICAgICAgICAgICAgLy8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcbiAgICAgICAgICAgICAgICBmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuICAgICAgICAgICAgICAgIC8vICggdHlwZXMgWywgZm5dIClcbiAgICAgICAgICAgICAgICBmbiA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBmbiA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgZm4gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG4gICAgdmFyXG4gICAgICAgIHJ4aHRtbFRhZyA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6LV0rKVtePl0qKVxcLz4vZ2ksXG5cbiAgICAvLyBTdXBwb3J0OiBJRSAxMC0xMSwgRWRnZSAxMDI0MCtcbiAgICAvLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuICAgIC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG4gICAgICAgIHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG4gICAgLy8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG4gICAgICAgIHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcbiAgICAgICAgcnNjcmlwdFR5cGVNYXNrZWQgPSAvXnRydWVcXC8oLiopLyxcbiAgICAgICAgcmNsZWFuU2NyaXB0ID0gL15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO1xuXG4vLyBNYW5pcHVsYXRpbmcgdGFibGVzIHJlcXVpcmVzIGEgdGJvZHlcbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXG4gICAgICAgIGpRdWVyeS5ub2RlTmFtZSggY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIgKSA/XG5cbiAgICAgICAgZWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJ0Ym9keVwiIClbIDAgXSB8fFxuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKCBlbGVtLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJ0Ym9keVwiICkgKSA6XG4gICAgICAgICAgICBlbGVtO1xuICAgIH1cblxuLy8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG4gICAgICAgIGVsZW0udHlwZSA9ICggZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgIT09IG51bGwgKSArIFwiL1wiICsgZWxlbS50eXBlO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdG9yZVNjcmlwdCggZWxlbSApIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcnNjcmlwdFR5cGVNYXNrZWQuZXhlYyggZWxlbS50eXBlICk7XG5cbiAgICAgICAgaWYgKCBtYXRjaCApIHtcbiAgICAgICAgICAgIGVsZW0udHlwZSA9IG1hdGNoWyAxIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSggXCJ0eXBlXCIgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KCBzcmMsIGRlc3QgKSB7XG4gICAgICAgIHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG4gICAgICAgIGlmICggZGVzdC5ub2RlVHlwZSAhPT0gMSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG4gICAgICAgIGlmICggZGF0YVByaXYuaGFzRGF0YSggc3JjICkgKSB7XG4gICAgICAgICAgICBwZGF0YU9sZCA9IGRhdGFQcml2LmFjY2Vzcyggc3JjICk7XG4gICAgICAgICAgICBwZGF0YUN1ciA9IGRhdGFQcml2LnNldCggZGVzdCwgcGRhdGFPbGQgKTtcbiAgICAgICAgICAgIGV2ZW50cyA9IHBkYXRhT2xkLmV2ZW50cztcblxuICAgICAgICAgICAgaWYgKCBldmVudHMgKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBkYXRhQ3VyLmhhbmRsZTtcbiAgICAgICAgICAgICAgICBwZGF0YUN1ci5ldmVudHMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIuIENvcHkgdXNlciBkYXRhXG4gICAgICAgIGlmICggZGF0YVVzZXIuaGFzRGF0YSggc3JjICkgKSB7XG4gICAgICAgICAgICB1ZGF0YU9sZCA9IGRhdGFVc2VyLmFjY2Vzcyggc3JjICk7XG4gICAgICAgICAgICB1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG4gICAgICAgICAgICBkYXRhVXNlci5zZXQoIGRlc3QsIHVkYXRhQ3VyICk7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuICAgIGZ1bmN0aW9uIGZpeElucHV0KCBzcmMsIGRlc3QgKSB7XG4gICAgICAgIHZhciBub2RlTmFtZSA9IGRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBGYWlscyB0byBwZXJzaXN0IHRoZSBjaGVja2VkIHN0YXRlIG9mIGEgY2xvbmVkIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbi5cbiAgICAgICAgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmIHJjaGVja2FibGVUeXBlLnRlc3QoIHNyYy50eXBlICkgKSB7XG4gICAgICAgICAgICBkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuICAgICAgICAgICAgLy8gRmFpbHMgdG8gcmV0dXJuIHRoZSBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGRlZmF1bHQgc2VsZWN0ZWQgc3RhdGUgd2hlbiBjbG9uaW5nIG9wdGlvbnNcbiAgICAgICAgfSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICkge1xuICAgICAgICAgICAgZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9tTWFuaXAoIGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICkge1xuXG4gICAgICAgIC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcbiAgICAgICAgYXJncyA9IGNvbmNhdC5hcHBseSggW10sIGFyZ3MgKTtcblxuICAgICAgICB2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIGlOb0Nsb25lID0gbCAtIDEsXG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3NbIDAgXSxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuICAgICAgICAvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcbiAgICAgICAgaWYgKCBpc0Z1bmN0aW9uIHx8XG4gICAgICAgICAgICAoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgIXN1cHBvcnQuY2hlY2tDbG9uZSAmJiByY2hlY2tlZC50ZXN0KCB2YWx1ZSApICkgKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKCBpbmRleCApO1xuICAgICAgICAgICAgICAgIGlmICggaXNGdW5jdGlvbiApIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbU1hbmlwKCBzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBsICkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcbiAgICAgICAgICAgIGZpcnN0ID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuICAgICAgICAgICAgaWYgKCBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGZpcnN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICggZmlyc3QgfHwgaWdub3JlZCApIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG4gICAgICAgICAgICAgICAgaGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuICAgICAgICAgICAgICAgIC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZnJhZ21lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpICE9PSBpTm9DbG9uZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBoYXNTY3JpcHRzICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZDw0LjEsIFBoYW50b21KUzwyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5tZXJnZSggc2NyaXB0cywgZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoIGNvbGxlY3Rpb25bIGkgXSwgbm9kZSwgaSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggaGFzU2NyaXB0cyApIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWVuYWJsZSBzY3JpcHRzXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5tYXAoIHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG4gICAgICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHNjcmlwdHNbIGkgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBub2RlLnNyYyApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS5fZXZhbFVybCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKCBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoIHJjbGVhblNjcmlwdCwgXCJcIiApICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCBlbGVtLCBzZWxlY3Rvciwga2VlcERhdGEgKSB7XG4gICAgICAgIHZhciBub2RlLFxuICAgICAgICAgICAgbm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBlbGVtICkgOiBlbGVtLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuICAgICAgICAgICAgaWYgKCAha2VlcERhdGEgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG5vZGUucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGtlZXBEYXRhICYmIGpRdWVyeS5jb250YWlucyggbm9kZS5vd25lckRvY3VtZW50LCBub2RlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuXG4gICAgalF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICBodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoIHJ4aHRtbFRhZywgXCI8JDE+PC8kMj5cIiApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsb25lOiBmdW5jdGlvbiggZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG4gICAgICAgICAgICB2YXIgaSwgbCwgc3JjRWxlbWVudHMsIGRlc3RFbGVtZW50cyxcbiAgICAgICAgICAgICAgICBjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKCB0cnVlICksXG4gICAgICAgICAgICAgICAgaW5QYWdlID0galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblxuICAgICAgICAgICAgLy8gRml4IElFIGNsb25pbmcgaXNzdWVzXG4gICAgICAgICAgICBpZiAoICFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkICYmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSApICYmXG4gICAgICAgICAgICAgICAgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG4gICAgICAgICAgICAgICAgLy8gV2UgZXNjaGV3IFNpenpsZSBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOiBodHRwOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcbiAgICAgICAgICAgICAgICBkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lICk7XG4gICAgICAgICAgICAgICAgc3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICBmaXhJbnB1dCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcbiAgICAgICAgICAgIGlmICggZGF0YUFuZEV2ZW50cyApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuICAgICAgICAgICAgICAgICAgICBzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgICBkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVDb3B5RXZlbnQoIHNyY0VsZW1lbnRzWyBpIF0sIGRlc3RFbGVtZW50c1sgaSBdICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3RvcnlcbiAgICAgICAgICAgIGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcbiAgICAgICAgICAgIGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAgICAgc2V0R2xvYmFsRXZhbCggZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2xvbmVkIHNldFxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsZWFuRGF0YTogZnVuY3Rpb24oIGVsZW1zICkge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGVsZW0sIHR5cGUsXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKCA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPT0gdW5kZWZpbmVkOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBhY2NlcHREYXRhKCBlbGVtICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggKCBkYXRhID0gZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGEuZXZlbnRzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIHR5cGUgaW4gZGF0YS5ldmVudHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3BlY2lhbFsgdHlwZSBdICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZSA8PSAzNS00NStcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0gMzUtNDUrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gKTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcblxuICAgICAgICAvLyBLZWVwIGRvbU1hbmlwIGV4cG9zZWQgdW50aWwgMy4wIChnaC0yMjI1KVxuICAgICAgICBkb21NYW5pcDogZG9tTWFuaXAsXG5cbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IgKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkudGV4dCggdGhpcyApIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbXB0eSgpLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWZ0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKCA7ICggZWxlbSA9IHRoaXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZTogZnVuY3Rpb24oIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuICAgICAgICAgICAgZGF0YUFuZEV2ZW50cyA9IGRhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGZhbHNlIDogZGF0YUFuZEV2ZW50cztcbiAgICAgICAgICAgIGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGh0bWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IHRoaXNbIDAgXSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGwgPSB0aGlzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2VlIGlmIHdlIGNhbiB0YWtlIGEgc2hvcnRjdXQgYW5kIGp1c3QgdXNlIGlubmVySFRNTFxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuICAgICAgICAgICAgICAgICAgICAhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHVzaW5nIGlubmVySFRNTCB0aHJvd3MgYW4gZXhjZXB0aW9uLCB1c2UgdGhlIGZhbGxiYWNrIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICggZSApIHt9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5KCkuYXBwZW5kKCB2YWx1ZSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVwbGFjZVdpdGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGlnbm9yZWQgPSBbXTtcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcGFyZW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCggZWxlbSwgdGhpcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuICAgICAgICAgICAgfSwgaWdub3JlZCApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmVhY2goIHtcbiAgICAgICAgYXBwZW5kVG86IFwiYXBwZW5kXCIsXG4gICAgICAgIHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG4gICAgICAgIGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcbiAgICAgICAgcmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG4gICAgfSwgZnVuY3Rpb24oIG5hbWUsIG9yaWdpbmFsICkge1xuICAgICAgICBqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgIHZhciBlbGVtcyxcbiAgICAgICAgICAgICAgICByZXQgPSBbXSxcbiAgICAgICAgICAgICAgICBpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG4gICAgICAgICAgICAgICAgbGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKCA7IGkgPD0gbGFzdDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKCB0cnVlICk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogUXRXZWJLaXRcbiAgICAgICAgICAgICAgICAvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzXG4gICAgICAgICAgICAgICAgcHVzaC5hcHBseSggcmV0LCBlbGVtcy5nZXQoKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuICAgICAgICB9O1xuICAgIH0gKTtcblxuXG4gICAgdmFyIGlmcmFtZSxcbiAgICAgICAgZWxlbWRpc3BsYXkgPSB7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3hcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcHJlLWRlZmluZSB0aGVzZSB2YWx1ZXMgZm9yIEZGICgjMTAyMjcpXG4gICAgICAgICAgICBIVE1MOiBcImJsb2NrXCIsXG4gICAgICAgICAgICBCT0RZOiBcImJsb2NrXCJcbiAgICAgICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBhY3R1YWwgZGlzcGxheSBvZiBhIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBub2RlTmFtZSBvZiB0aGUgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkb2MgRG9jdW1lbnQgb2JqZWN0XG4gICAgICovXG5cbi8vIENhbGxlZCBvbmx5IGZyb20gd2l0aGluIGRlZmF1bHREaXNwbGF5XG4gICAgZnVuY3Rpb24gYWN0dWFsRGlzcGxheSggbmFtZSwgZG9jICkge1xuICAgICAgICB2YXIgZWxlbSA9IGpRdWVyeSggZG9jLmNyZWF0ZUVsZW1lbnQoIG5hbWUgKSApLmFwcGVuZFRvKCBkb2MuYm9keSApLFxuXG4gICAgICAgICAgICBkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbVsgMCBdLCBcImRpc3BsYXlcIiApO1xuXG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgYW55IGRhdGEgc3RvcmVkIG9uIHRoZSBlbGVtZW50LFxuICAgICAgICAvLyBzbyB1c2UgXCJkZXRhY2hcIiBtZXRob2QgYXMgZmFzdCB3YXkgdG8gZ2V0IHJpZCBvZiB0aGUgZWxlbWVudFxuICAgICAgICBlbGVtLmRldGFjaCgpO1xuXG4gICAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyeSB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgZGlzcGxheSB2YWx1ZSBvZiBhbiBlbGVtZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkoIG5vZGVOYW1lICkge1xuICAgICAgICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICAgICAgICBkaXNwbGF5ID0gZWxlbWRpc3BsYXlbIG5vZGVOYW1lIF07XG5cbiAgICAgICAgaWYgKCAhZGlzcGxheSApIHtcbiAgICAgICAgICAgIGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaW1wbGUgd2F5IGZhaWxzLCByZWFkIGZyb20gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAgICAgICAgaWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiB8fCAhZGlzcGxheSApIHtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgYWxyZWFkeS1jcmVhdGVkIGlmcmFtZSBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIGlmcmFtZSA9ICggaWZyYW1lIHx8IGpRdWVyeSggXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIgKSApXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyggZG9jLmRvY3VtZW50RWxlbWVudCApO1xuXG4gICAgICAgICAgICAgICAgLy8gQWx3YXlzIHdyaXRlIGEgbmV3IEhUTUwgc2tlbGV0b24gc28gV2Via2l0IGFuZCBGaXJlZm94IGRvbid0IGNob2tlIG9uIHJldXNlXG4gICAgICAgICAgICAgICAgZG9jID0gaWZyYW1lWyAwIF0uY29udGVudERvY3VtZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUVcbiAgICAgICAgICAgICAgICBkb2Mud3JpdGUoKTtcbiAgICAgICAgICAgICAgICBkb2MuY2xvc2UoKTtcblxuICAgICAgICAgICAgICAgIGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XG4gICAgICAgICAgICAgICAgaWZyYW1lLmRldGFjaCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgY29ycmVjdCBkZWZhdWx0IGRpc3BsYXlcbiAgICAgICAgICAgIGVsZW1kaXNwbGF5WyBub2RlTmFtZSBdID0gZGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwbGF5O1xuICAgIH1cbiAgICB2YXIgcm1hcmdpbiA9ICggL15tYXJnaW4vICk7XG5cbiAgICB2YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbiAgICB2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUU8PTExKywgRmlyZWZveDw9MzArICgjMTUwOTgsICMxNDE1MClcbiAgICAgICAgLy8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG4gICAgICAgIC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuICAgICAgICB2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuICAgICAgICBpZiAoICF2aWV3IHx8ICF2aWV3Lm9wZW5lciApIHtcbiAgICAgICAgICAgIHZpZXcgPSB3aW5kb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gICAgfTtcblxuICAgIHZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzICkge1xuICAgICAgICB2YXIgcmV0LCBuYW1lLFxuICAgICAgICAgICAgb2xkID0ge307XG5cbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG4gICAgICAgIGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcbiAgICAgICAgICAgIG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcblxuICAgICAgICAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcbiAgICAgICAgZm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuICAgICAgICAgICAgZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cblxuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4gICAgKCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBwaXhlbE1hcmdpblJpZ2h0VmFsLCByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cbiAgICAgICAgLy8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcbiAgICAgICAgaWYgKCAhZGl2LnN0eWxlICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUU5LTExK1xuICAgICAgICAvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG4gICAgICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcbiAgICAgICAgZGl2LmNsb25lTm9kZSggdHJ1ZSApLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcbiAgICAgICAgc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtcIiArXG4gICAgICAgICAgICBcInBhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXG4gICAgICAgIC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuICAgICAgICAvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuICAgICAgICBmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID1cblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjksIEFuZHJvaWQgMi4zXG4gICAgICAgICAgICAgICAgLy8gVmVuZG9yLXByZWZpeCBib3gtc2l6aW5nXG4gICAgICAgICAgICAgICAgXCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7XCIgK1xuICAgICAgICAgICAgICAgIFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztcIiArXG4gICAgICAgICAgICAgICAgXCJtYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O1wiICtcbiAgICAgICAgICAgICAgICBcInRvcDoxJTt3aWR0aDo1MCVcIjtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuICAgICAgICAgICAgdmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiApO1xuICAgICAgICAgICAgcGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiO1xuICAgICAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gZGl2U3R5bGUubWFyZ2luTGVmdCA9PT0gXCIycHhcIjtcbiAgICAgICAgICAgIGJveFNpemluZ1JlbGlhYmxlVmFsID0gZGl2U3R5bGUud2lkdGggPT09IFwiNHB4XCI7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcbiAgICAgICAgICAgIC8vIFNvbWUgc3R5bGVzIGNvbWUgYmFjayB3aXRoIHBlcmNlbnRhZ2UgdmFsdWVzLCBldmVuIHRob3VnaCB0aGV5IHNob3VsZG4ndFxuICAgICAgICAgICAgZGl2LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1MCVcIjtcbiAgICAgICAgICAgIHBpeGVsTWFyZ2luUmlnaHRWYWwgPSBkaXZTdHlsZS5tYXJnaW5SaWdodCA9PT0gXCI0cHhcIjtcblxuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCBjb250YWluZXIgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcbiAgICAgICAgICAgIHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB0ZXN0IGlzIGV4ZWN1dGVkIG9ubHkgb25jZSBidXQgd2Ugc3RpbGwgZG8gbWVtb2l6aW5nXG4gICAgICAgICAgICAgICAgLy8gc2luY2Ugd2UgY2FuIHVzZSB0aGUgYm94U2l6aW5nUmVsaWFibGUgcHJlLWNvbXB1dGluZy5cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0ZXN0IHdhcyBhbHJlYWR5IHBlcmZvcm1lZCwgdGhvdWdoLlxuICAgICAgICAgICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICggYm94U2l6aW5nUmVsaWFibGVWYWwgPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpeGVsTWFyZ2luUmlnaHQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAtNC4zXG4gICAgICAgICAgICAgICAgLy8gV2UncmUgY2hlY2tpbmcgZm9yIGJveFNpemluZ1JlbGlhYmxlVmFsIGhlcmUgaW5zdGVhZCBvZiBwaXhlbE1hcmdpblJpZ2h0VmFsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgdGhhdCBjb21wcmVzc2VzIGJldHRlciBhbmQgdGhleSdyZSBjb21wdXRlZCB0b2dldGhlciBhbnl3YXkuXG4gICAgICAgICAgICAgICAgaWYgKCBib3hTaXppbmdSZWxpYWJsZVZhbCA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcGl4ZWxNYXJnaW5SaWdodFZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD04IG9ubHksIEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIEZpcmVmb3ggPD0zIC0gMzdcbiAgICAgICAgICAgICAgICBpZiAoIGJveFNpemluZ1JlbGlhYmxlVmFsID09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVsaWFibGVNYXJnaW5SaWdodDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGRpdiB3aXRoIGV4cGxpY2l0IHdpZHRoIGFuZCBubyBtYXJnaW4tcmlnaHQgaW5jb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAvLyBnZXRzIGNvbXB1dGVkIG1hcmdpbi1yaWdodCBiYXNlZCBvbiB3aWR0aCBvZiBjb250YWluZXIuICgjMzMzMylcbiAgICAgICAgICAgICAgICAvLyBXZWJLaXQgQnVnIDEzMzQzIC0gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHdyb25nIHZhbHVlIGZvciBtYXJnaW4tcmlnaHRcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHN1cHBvcnQgZnVuY3Rpb24gaXMgb25seSBleGVjdXRlZCBvbmNlIHNvIG5vIG1lbW9pemluZyBpcyBuZWVkZWQuXG4gICAgICAgICAgICAgICAgdmFyIHJldCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luRGl2ID0gZGl2LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IENTUzogYm94LXNpemluZzsgZGlzcGxheTsgbWFyZ2luOyBib3JkZXI7IHBhZGRpbmdcbiAgICAgICAgICAgICAgICBtYXJnaW5EaXYuc3R5bGUuY3NzVGV4dCA9IGRpdi5zdHlsZS5jc3NUZXh0ID1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xuICAgICAgICAgICAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4IGJveC1zaXppbmdcbiAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIjtcbiAgICAgICAgICAgICAgICBtYXJnaW5EaXYuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW5EaXYuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cbiAgICAgICAgICAgICAgICByZXQgPSAhcGFyc2VGbG9hdCggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIG1hcmdpbkRpdiApLm1hcmdpblJpZ2h0ICk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuICAgICAgICAgICAgICAgIGRpdi5yZW1vdmVDaGlsZCggbWFyZ2luRGl2ICk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgfSApKCk7XG5cblxuICAgIGZ1bmN0aW9uIGN1ckNTUyggZWxlbSwgbmFtZSwgY29tcHV0ZWQgKSB7XG4gICAgICAgIHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXG4gICAgICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGU7XG5cbiAgICAgICAgY29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcbiAgICAgICAgcmV0ID0gY29tcHV0ZWQgPyBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBTdXBwb3J0OiBPcGVyYSAxMi4xeCBvbmx5XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBzdHlsZSBldmVuIHdpdGhvdXQgY29tcHV0ZWRcbiAgICAgICAgLy8gY29tcHV0ZWQgaXMgdW5kZWZpbmVkIGZvciBlbGVtcyBvbiBkb2N1bWVudCBmcmFnbWVudHNcbiAgICAgICAgaWYgKCAoIHJldCA9PT0gXCJcIiB8fCByZXQgPT09IHVuZGVmaW5lZCApICYmICFqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApICkge1xuICAgICAgICAgICAgcmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0OiBJRTlcbiAgICAgICAgLy8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBvbmx5IG5lZWRlZCBmb3IgLmNzcygnZmlsdGVyJykgKCMxMjUzNylcbiAgICAgICAgaWYgKCBjb21wdXRlZCApIHtcblxuICAgICAgICAgICAgLy8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuICAgICAgICAgICAgLy8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG4gICAgICAgICAgICAvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuICAgICAgICAgICAgLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuICAgICAgICAgICAgaWYgKCAhc3VwcG9ydC5waXhlbE1hcmdpblJpZ2h0KCkgJiYgcm51bW5vbnB4LnRlc3QoIHJldCApICYmIHJtYXJnaW4udGVzdCggbmFtZSApICkge1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICAgICAgICAgIHdpZHRoID0gc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgbWluV2lkdGggPSBzdHlsZS5taW5XaWR0aDtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgICAgICAgICAgICAgIHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcbiAgICAgICAgICAgICAgICByZXQgPSBjb21wdXRlZC53aWR0aDtcblxuICAgICAgICAgICAgICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG4gICAgICAgICAgICAgICAgc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOS0xMStcbiAgICAgICAgICAgIC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG4gICAgICAgIHJldCArIFwiXCIgOlxuICAgICAgICAgICAgcmV0O1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nZXQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICByZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIHZhclxuXG4gICAgLy8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuICAgIC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuICAgIC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuICAgICAgICByZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cbiAgICAgICAgY3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG4gICAgICAgIGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk9cIiwgXCJNb3pcIiwgXCJtc1wiIF0sXG4gICAgICAgIGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkuc3R5bGU7XG5cbi8vIFJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbiAgICBmdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHtcblxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgbmFtZXMgdGhhdCBhcmUgbm90IHZlbmRvciBwcmVmaXhlZFxuICAgICAgICBpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuICAgICAgICB2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuICAgICAgICAgICAgaSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoIGktLSApIHtcbiAgICAgICAgICAgIG5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcbiAgICAgICAgICAgIGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblxuICAgICAgICAvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG4gICAgICAgIC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgP1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuICAgICAgICBNYXRoLm1heCggMCwgbWF0Y2hlc1sgMiBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApIDpcbiAgICAgICAgICAgIHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF1Z21lbnRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSwgaXNCb3JkZXJCb3gsIHN0eWxlcyApIHtcbiAgICAgICAgdmFyIGkgPSBleHRyYSA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApID9cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgcmlnaHQgbWVhc3VyZW1lbnQsIGF2b2lkIGF1Z21lbnRhdGlvblxuICAgICAgICAgICAgICAgIDQgOlxuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGluaXRpYWxpemUgZm9yIGhvcml6b250YWwgb3IgdmVydGljYWwgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIG5hbWUgPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuXG4gICAgICAgICAgICB2YWwgPSAwO1xuXG4gICAgICAgIGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuICAgICAgICAgICAgLy8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luLCBzbyBhZGQgaXQgaWYgd2Ugd2FudCBpdFxuICAgICAgICAgICAgaWYgKCBleHRyYSA9PT0gXCJtYXJnaW5cIiApIHtcbiAgICAgICAgICAgICAgICB2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgZXh0cmEgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggaXNCb3JkZXJCb3ggKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm94IGluY2x1ZGVzIHBhZGRpbmcsIHNvIHJlbW92ZSBpdCBpZiB3ZSB3YW50IGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAoIGV4dHJhID09PSBcImNvbnRlbnRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGJvcmRlciBub3IgbWFyZ2luLCBzbyByZW1vdmUgYm9yZGVyXG4gICAgICAgICAgICAgICAgaWYgKCBleHRyYSAhPT0gXCJtYXJnaW5cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGNvbnRlbnQsIHNvIGFkZCBwYWRkaW5nXG4gICAgICAgICAgICAgICAgdmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCBub3IgcGFkZGluZywgc28gYWRkIGJvcmRlclxuICAgICAgICAgICAgICAgIGlmICggZXh0cmEgIT09IFwicGFkZGluZ1wiICkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICkge1xuXG4gICAgICAgIC8vIFN0YXJ0IHdpdGggb2Zmc2V0IHByb3BlcnR5LCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIHRoZSBib3JkZXItYm94IHZhbHVlXG4gICAgICAgIHZhciB2YWx1ZUlzQm9yZGVyQm94ID0gdHJ1ZSxcbiAgICAgICAgICAgIHZhbCA9IG5hbWUgPT09IFwid2lkdGhcIiA/IGVsZW0ub2Zmc2V0V2lkdGggOiBlbGVtLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuICAgICAgICAgICAgaXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG4gICAgICAgIC8vIFNvbWUgbm9uLWh0bWwgZWxlbWVudHMgcmV0dXJuIHVuZGVmaW5lZCBmb3Igb2Zmc2V0V2lkdGgsIHNvIGNoZWNrIGZvciBudWxsL3VuZGVmaW5lZFxuICAgICAgICAvLyBzdmcgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02NDkyODVcbiAgICAgICAgLy8gTWF0aE1MIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDkxNjY4XG4gICAgICAgIGlmICggdmFsIDw9IDAgfHwgdmFsID09IG51bGwgKSB7XG5cbiAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgdmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcbiAgICAgICAgICAgIGlmICggdmFsIDwgMCB8fCB2YWwgPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBlbGVtLnN0eWxlWyBuYW1lIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbXB1dGVkIHVuaXQgaXMgbm90IHBpeGVscy4gU3RvcCBoZXJlIGFuZCByZXR1cm4uXG4gICAgICAgICAgICBpZiAoIHJudW1ub25weC50ZXN0KCB2YWwgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3Igc3R5bGUgaW4gY2FzZSBhIGJyb3dzZXIgd2hpY2ggcmV0dXJucyB1bnJlbGlhYmxlIHZhbHVlc1xuICAgICAgICAgICAgLy8gZm9yIGdldENvbXB1dGVkU3R5bGUgc2lsZW50bHkgZmFsbHMgYmFjayB0byB0aGUgcmVsaWFibGUgZWxlbS5zdHlsZVxuICAgICAgICAgICAgdmFsdWVJc0JvcmRlckJveCA9IGlzQm9yZGVyQm94ICYmXG4gICAgICAgICAgICAgICAgKCBzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgdmFsID09PSBlbGVtLnN0eWxlWyBuYW1lIF0gKTtcblxuICAgICAgICAgICAgLy8gTm9ybWFsaXplIFwiXCIsIGF1dG8sIGFuZCBwcmVwYXJlIGZvciBleHRyYVxuICAgICAgICAgICAgdmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgYWN0aXZlIGJveC1zaXppbmcgbW9kZWwgdG8gYWRkL3N1YnRyYWN0IGlycmVsZXZhbnQgc3R5bGVzXG4gICAgICAgIHJldHVybiAoIHZhbCArXG4gICAgICAgICAgICAgICAgYXVnbWVudFdpZHRoT3JIZWlnaHQoXG4gICAgICAgICAgICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJc0JvcmRlckJveCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSArIFwicHhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SGlkZSggZWxlbWVudHMsIHNob3cgKSB7XG4gICAgICAgIHZhciBkaXNwbGF5LCBlbGVtLCBoaWRkZW4sXG4gICAgICAgICAgICB2YWx1ZXMgPSBbXSxcbiAgICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuICAgICAgICAgICAgZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuICAgICAgICAgICAgaWYgKCAhZWxlbS5zdHlsZSApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWVzWyBpbmRleCBdID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcIm9sZGRpc3BsYXlcIiApO1xuICAgICAgICAgICAgZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGlmICggc2hvdyApIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpbmxpbmUgZGlzcGxheSBvZiB0aGlzIGVsZW1lbnQgdG8gbGVhcm4gaWYgaXQgaXNcbiAgICAgICAgICAgICAgICAvLyBiZWluZyBoaWRkZW4gYnkgY2FzY2FkZWQgcnVsZXMgb3Igbm90XG4gICAgICAgICAgICAgICAgaWYgKCAhdmFsdWVzWyBpbmRleCBdICYmIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNldCBlbGVtZW50cyB3aGljaCBoYXZlIGJlZW4gb3ZlcnJpZGRlbiB3aXRoIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgICAgICAvLyBpbiBhIHN0eWxlc2hlZXQgdG8gd2hhdGV2ZXIgdGhlIGRlZmF1bHQgYnJvd3NlciBzdHlsZSBpc1xuICAgICAgICAgICAgICAgIC8vIGZvciBzdWNoIGFuIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbiggZWxlbSApICkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbIGluZGV4IF0gPSBkYXRhUHJpdi5hY2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbGRkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RGlzcGxheSggZWxlbS5ub2RlTmFtZSApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoaWRkZW4gPSBpc0hpZGRlbiggZWxlbSApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBkaXNwbGF5ICE9PSBcIm5vbmVcIiB8fCAhaGlkZGVuICkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvbGRkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gPyBkaXNwbGF5IDogalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgZGlzcGxheSBvZiBtb3N0IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wXG4gICAgICAgIC8vIHRvIGF2b2lkIHRoZSBjb25zdGFudCByZWZsb3dcbiAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtZW50c1sgaW5kZXggXTtcbiAgICAgICAgICAgIGlmICggIWVsZW0uc3R5bGUgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoICFzaG93IHx8IGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHwgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IHNob3cgPyB2YWx1ZXNbIGluZGV4IF0gfHwgXCJcIiA6IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgIH1cblxuICAgIGpRdWVyeS5leHRlbmQoIHtcblxuICAgICAgICAvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcbiAgICAgICAgLy8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG4gICAgICAgIGNzc0hvb2tzOiB7XG4gICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY29tcHV0ZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG4gICAgICAgIGNzc051bWJlcjoge1xuICAgICAgICAgICAgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJmbGV4R3Jvd1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJmbGV4U2hyaW5rXCI6IHRydWUsXG4gICAgICAgICAgICBcImZvbnRXZWlnaHRcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibGluZUhlaWdodFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IHRydWUsXG4gICAgICAgICAgICBcIm9yZGVyXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9ycGhhbnNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwid2lkb3dzXCI6IHRydWUsXG4gICAgICAgICAgICBcInpJbmRleFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJ6b29tXCI6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG4gICAgICAgIC8vIHNldHRpbmcgb3IgZ2V0dGluZyB0aGUgdmFsdWVcbiAgICAgICAgY3NzUHJvcHM6IHtcbiAgICAgICAgICAgIFwiZmxvYXRcIjogXCJjc3NGbG9hdFwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcbiAgICAgICAgc3R5bGU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEgKSB7XG5cbiAgICAgICAgICAgIC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuICAgICAgICAgICAgaWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcbiAgICAgICAgICAgIHZhciByZXQsIHR5cGUsIGhvb2tzLFxuICAgICAgICAgICAgICAgIG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gZWxlbS5zdHlsZTtcblxuICAgICAgICAgICAgbmFtZSA9IGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSB8fFxuICAgICAgICAgICAgICAgICggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG9yaWdOYW1lICkgfHwgb3JpZ05hbWUgKTtcblxuICAgICAgICAgICAgLy8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cbiAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcbiAgICAgICAgICAgIGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuICAgICAgICAgICAgICAgIGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4ZXMgYnVnICM5MjM3XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlICE9PSB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gcmV0ICYmIHJldFsgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgb3JpZ05hbWUgXSA/IFwiXCIgOiBcInB4XCIgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTktMTErXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuICAgICAgICAgICAgICAgIGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fFxuICAgICAgICAgICAgICAgICAgICAoIHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgZmFsc2UsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3RcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVbIG5hbWUgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuICAgICAgICAgICAgdmFyIHZhbCwgbnVtLCBob29rcyxcbiAgICAgICAgICAgICAgICBvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKTtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG4gICAgICAgICAgICBuYW1lID0galF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdIHx8XG4gICAgICAgICAgICAgICAgKCBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggb3JpZ05hbWUgKSB8fCBvcmlnTmFtZSApO1xuXG4gICAgICAgICAgICAvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG4gICAgICAgICAgICBob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuICAgICAgICAgICAgLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcbiAgICAgICAgICAgIGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyApIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG4gICAgICAgICAgICBpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgXCJub3JtYWxcIiB0byBjb21wdXRlZCB2YWx1ZVxuICAgICAgICAgICAgaWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gY3NzTm9ybWFsVHJhbnNmb3JtWyBuYW1lIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuICAgICAgICAgICAgaWYgKCBleHRyYSA9PT0gXCJcIiB8fCBleHRyYSApIHtcbiAgICAgICAgICAgICAgICBudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmVhY2goIFsgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXB1dGVkICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuICAgICAgICAgICAgICAgICAgICBlbGVtLm9mZnNldFdpZHRoID09PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSBleHRyYSAmJiBnZXRTdHlsZXMoIGVsZW0gKSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJhY3QgPSBleHRyYSAmJiBhdWdtZW50V2lkdGhPckhlaWdodChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmICggc3VidHJhY3QgJiYgKCBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgIT09IFwicHhcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtLnN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9ICk7XG5cbiAgICBqUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5yZWxpYWJsZU1hcmdpbkxlZnQsXG4gICAgICAgIGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcbiAgICAgICAgICAgIGlmICggY29tcHV0ZWQgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggcGFyc2VGbG9hdCggY3VyQ1NTKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiApICkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FwKCBlbGVtLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgICAgICApICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuLy8gU3VwcG9ydDogQW5kcm9pZCAyLjNcbiAgICBqUXVlcnkuY3NzSG9va3MubWFyZ2luUmlnaHQgPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucmVsaWFibGVNYXJnaW5SaWdodCxcbiAgICAgICAgZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuICAgICAgICAgICAgaWYgKCBjb21wdXRlZCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhcCggZWxlbSwgeyBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjdXJDU1MsIFsgZWxlbSwgXCJtYXJnaW5SaWdodFwiIF0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbiAgICBqUXVlcnkuZWFjaCgge1xuICAgICAgICBtYXJnaW46IFwiXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiXCIsXG4gICAgICAgIGJvcmRlcjogXCJXaWR0aFwiXG4gICAgfSwgZnVuY3Rpb24oIHByZWZpeCwgc3VmZml4ICkge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdID0ge1xuICAgICAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA9IHt9LFxuXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoIFwiIFwiICkgOiBbIHZhbHVlIF07XG5cbiAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCA0OyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkWyBwcmVmaXggKyBjc3NFeHBhbmRbIGkgXSArIHN1ZmZpeCBdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzWyBpIF0gfHwgcGFydHNbIGkgLSAyIF0gfHwgcGFydHNbIDAgXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCAhcm1hcmdpbi50ZXN0KCBwcmVmaXggKSApIHtcbiAgICAgICAgICAgIGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKCB7XG4gICAgICAgIGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZXMsIGxlbixcbiAgICAgICAgICAgICAgICAgICAgbWFwID0ge30sXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNBcnJheSggbmFtZSApICkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKTtcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gbmFtZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lLCB2YWx1ZSApIDpcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuICAgICAgICAgICAgfSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dIaWRlKCB0aGlzICk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oIHN0YXRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICggaXNIaWRkZW4oIHRoaXMgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggdGhpcyApLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cblxuICAgIGZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbiAgICB9XG4gICAgalF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBUd2VlbixcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuICAgICAgICAgICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICAgICAgICAgIHRoaXMucHJvcCA9IHByb3A7XG4gICAgICAgICAgICB0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG4gICAgICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICAgICAgICAgIHRoaXMudW5pdCA9IHVuaXQgfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICk7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG4gICAgICAgICAgICByZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cbiAgICAgICAgICAgICAgICBob29rcy5nZXQoIHRoaXMgKSA6XG4gICAgICAgICAgICAgICAgVHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xuICAgICAgICB9LFxuICAgICAgICBydW46IGZ1bmN0aW9uKCBwZXJjZW50ICkge1xuICAgICAgICAgICAgdmFyIGVhc2VkLFxuICAgICAgICAgICAgICAgIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbIHRoaXMuZWFzaW5nIF0oXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3cgPSAoIHRoaXMuZW5kIC0gdGhpcy5zdGFydCApICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdGVwLmNhbGwoIHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBob29rcyAmJiBob29rcy5zZXQgKSB7XG4gICAgICAgICAgICAgICAgaG9va3Muc2V0KCB0aGlzICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICAgIFR3ZWVuLnByb3BIb29rcyA9IHtcbiAgICAgICAgX2RlZmF1bHQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuICAgICAgICAgICAgICAgIC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG4gICAgICAgICAgICAgICAgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlICE9PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbIHR3ZWVuLnByb3AgXSA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAgICAgICAgIC8vIGF0dGVtcHQgYSBwYXJzZUZsb2F0IGFuZCBmYWxsYmFjayB0byBhIHN0cmluZyBpZiB0aGUgcGFyc2UgZmFpbHMuXG4gICAgICAgICAgICAgICAgLy8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG4gICAgICAgICAgICAgICAgLy8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCBcIlwiICk7XG5cbiAgICAgICAgICAgICAgICAvLyBFbXB0eSBzdHJpbmdzLCBudWxsLCB1bmRlZmluZWQgYW5kIFwiYXV0b1wiIGFyZSBjb252ZXJ0ZWQgdG8gMC5cbiAgICAgICAgICAgICAgICByZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuICAgICAgICAgICAgICAgIC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cbiAgICAgICAgICAgICAgICAvLyBVc2UgLnN0eWxlIGlmIGF2YWlsYWJsZSBhbmQgdXNlIHBsYWluIHByb3BlcnRpZXMgd2hlcmUgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgIGlmICggalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICggdHdlZW4uZWxlbS5zdHlsZVsgalF1ZXJ5LmNzc1Byb3BzWyB0d2Vlbi5wcm9wIF0gXSAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jc3NIb29rc1sgdHdlZW4ucHJvcCBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBTdXBwb3J0OiBJRTlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuICAgIFR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG4gICAgICAgICAgICBpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBqUXVlcnkuZWFzaW5nID0ge1xuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aW5nOiBmdW5jdGlvbiggcCApIHtcbiAgICAgICAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG4gICAgICAgIH0sXG4gICAgICAgIF9kZWZhdWx0OiBcInN3aW5nXCJcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgQ29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG4gICAgalF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG5cblxuICAgIHZhclxuICAgICAgICBmeE5vdywgdGltZXJJZCxcbiAgICAgICAgcmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXG4gICAgICAgIHJydW4gPSAvcXVldWVIb29rcyQvO1xuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG4gICAgZnVuY3Rpb24gY3JlYXRlRnhOb3coKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICAgICAgICB9ICk7XG4gICAgICAgIHJldHVybiAoIGZ4Tm93ID0galF1ZXJ5Lm5vdygpICk7XG4gICAgfVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuICAgIGZ1bmN0aW9uIGdlbkZ4KCB0eXBlLCBpbmNsdWRlV2lkdGggKSB7XG4gICAgICAgIHZhciB3aGljaCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgYXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG4gICAgICAgIC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcbiAgICAgICAgaW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG4gICAgICAgIGZvciAoIDsgaSA8IDQgOyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XG4gICAgICAgICAgICB3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuICAgICAgICAgICAgYXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGluY2x1ZGVXaWR0aCApIHtcbiAgICAgICAgICAgIGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG4gICAgICAgIHZhciB0d2VlbixcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSAoIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdICkuY29uY2F0KCBBbmltYXRpb24udHdlZW5lcnNbIFwiKlwiIF0gKSxcbiAgICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgICAgICBmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuICAgICAgICAgICAgaWYgKCAoIHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkgKSApIHtcblxuICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlciggZWxlbSwgcHJvcHMsIG9wdHMgKSB7XG4gICAgICAgIC8qIGpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cbiAgICAgICAgdmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIHR3ZWVuLCBob29rcywgb2xkZmlyZSwgZGlzcGxheSwgY2hlY2tEaXNwbGF5LFxuICAgICAgICAgICAgYW5pbSA9IHRoaXMsXG4gICAgICAgICAgICBvcmlnID0ge30sXG4gICAgICAgICAgICBzdHlsZSA9IGVsZW0uc3R5bGUsXG4gICAgICAgICAgICBoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuKCBlbGVtICksXG4gICAgICAgICAgICBkYXRhU2hvdyA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJmeHNob3dcIiApO1xuXG4gICAgICAgIC8vIEhhbmRsZSBxdWV1ZTogZmFsc2UgcHJvbWlzZXNcbiAgICAgICAgaWYgKCAhb3B0cy5xdWV1ZSApIHtcbiAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcbiAgICAgICAgICAgIGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICBob29rcy51bnF1ZXVlZCA9IDA7XG4gICAgICAgICAgICAgICAgb2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG4gICAgICAgICAgICAgICAgaG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoICFob29rcy51bnF1ZXVlZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZGZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBob29rcy51bnF1ZXVlZCsrO1xuXG4gICAgICAgICAgICBhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuICAgICAgICAgICAgICAgIGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MudW5xdWV1ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob29rcy5lbXB0eS5maXJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWlnaHQvd2lkdGggb3ZlcmZsb3cgcGFzc1xuICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcImhlaWdodFwiIGluIHByb3BzIHx8IFwid2lkdGhcIiBpbiBwcm9wcyApICkge1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBub3RoaW5nIHNuZWFrcyBvdXRcbiAgICAgICAgICAgIC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUU5LTEwIGRvIG5vdFxuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSBvdmVyZmxvdyBhdHRyaWJ1dGUgd2hlbiBvdmVyZmxvd1ggYW5kXG4gICAgICAgICAgICAvLyBvdmVyZmxvd1kgYXJlIHNldCB0byB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICAgICAgb3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cbiAgICAgICAgICAgIC8vIFNldCBkaXNwbGF5IHByb3BlcnR5IHRvIGlubGluZS1ibG9jayBmb3IgaGVpZ2h0L3dpZHRoXG4gICAgICAgICAgICAvLyBhbmltYXRpb25zIG9uIGlubGluZSBlbGVtZW50cyB0aGF0IGFyZSBoYXZpbmcgd2lkdGgvaGVpZ2h0IGFuaW1hdGVkXG4gICAgICAgICAgICBkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblxuICAgICAgICAgICAgLy8gVGVzdCBkZWZhdWx0IGRpc3BsYXkgaWYgZGlzcGxheSBpcyBjdXJyZW50bHkgXCJub25lXCJcbiAgICAgICAgICAgIGNoZWNrRGlzcGxheSA9IGRpc3BsYXkgPT09IFwibm9uZVwiID9cbiAgICAgICAgICAgIGRhdGFQcml2LmdldCggZWxlbSwgXCJvbGRkaXNwbGF5XCIgKSB8fCBkZWZhdWx0RGlzcGxheSggZWxlbS5ub2RlTmFtZSApIDogZGlzcGxheTtcblxuICAgICAgICAgICAgaWYgKCBjaGVja0Rpc3BsYXkgPT09IFwiaW5saW5lXCIgJiYgalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBvcHRzLm92ZXJmbG93ICkge1xuICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgYW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuICAgICAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcbiAgICAgICAgICAgICAgICBzdHlsZS5vdmVyZmxvd1kgPSBvcHRzLm92ZXJmbG93WyAyIF07XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93L2hpZGUgcGFzc1xuICAgICAgICBmb3IgKCBwcm9wIGluIHByb3BzICkge1xuICAgICAgICAgICAgdmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuICAgICAgICAgICAgaWYgKCByZnh0eXBlcy5leGVjKCB2YWx1ZSApICkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuICAgICAgICAgICAgICAgIHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcbiAgICAgICAgICAgICAgICBpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBkYXRhU2hvdyBsZWZ0IG92ZXIgZnJvbSBhIHN0b3BwZWQgaGlkZSBvciBzaG93XG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBhcmUgZ29pbmcgdG8gcHJvY2VlZCB3aXRoIHNob3csIHdlIHNob3VsZCBwcmV0ZW5kIHRvIGJlIGhpZGRlblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblxuICAgICAgICAgICAgICAgIC8vIEFueSBub24tZnggdmFsdWUgc3RvcHMgdXMgZnJvbSByZXN0b3JpbmcgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvcmlnICkgKSB7XG4gICAgICAgICAgICBpZiAoIGRhdGFTaG93ICkge1xuICAgICAgICAgICAgICAgIGlmICggXCJoaWRkZW5cIiBpbiBkYXRhU2hvdyApIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIFwiZnhzaG93XCIsIHt9ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHN0YXRlIGlmIGl0cyB0b2dnbGUgLSBlbmFibGVzIC5zdG9wKCkudG9nZ2xlKCkgdG8gXCJyZXZlcnNlXCJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlICkge1xuICAgICAgICAgICAgICAgIGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIGhpZGRlbiApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoIGVsZW0gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggZWxlbSApLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wO1xuXG4gICAgICAgICAgICAgICAgZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImZ4c2hvd1wiICk7XG4gICAgICAgICAgICAgICAgZm9yICggcHJvcCBpbiBvcmlnICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIGZvciAoIHByb3AgaW4gb3JpZyApIHtcbiAgICAgICAgICAgICAgICB0d2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhKCBwcm9wIGluIGRhdGFTaG93ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTaG93WyBwcm9wIF0gPSB0d2Vlbi5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBoaWRkZW4gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuLnN0YXJ0ID0gcHJvcCA9PT0gXCJ3aWR0aFwiIHx8IHByb3AgPT09IFwiaGVpZ2h0XCIgPyAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5vb3AgbGlrZSAuaGlkZSgpLmhpZGUoKSwgcmVzdG9yZSBhbiBvdmVyd3JpdHRlbiBkaXNwbGF5IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoICggZGlzcGxheSA9PT0gXCJub25lXCIgPyBkZWZhdWx0RGlzcGxheSggZWxlbS5ub2RlTmFtZSApIDogZGlzcGxheSApID09PSBcImlubGluZVwiICkge1xuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcbiAgICAgICAgdmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuICAgICAgICAvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3NcbiAgICAgICAgZm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG4gICAgICAgICAgICBuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggaW5kZXggKTtcbiAgICAgICAgICAgIGVhc2luZyA9IHNwZWNpYWxFYXNpbmdbIG5hbWUgXTtcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG4gICAgICAgICAgICBpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuICAgICAgICAgICAgICAgIGVhc2luZyA9IHZhbHVlWyAxIF07XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyAwIF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggaW5kZXggIT09IG5hbWUgKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1sgaW5kZXggXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcbiAgICAgICAgICAgIGlmICggaG9va3MgJiYgXCJleHBhbmRcIiBpbiBob29rcyApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuICAgICAgICAgICAgICAgIC8vIE5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b24ndCBvdmVyd3JpdGUgZXhpc3Rpbmcga2V5cy5cbiAgICAgICAgICAgICAgICAvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgZm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nWyBpbmRleCBdID0gZWFzaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG4gICAgICAgIHZhciByZXN1bHQsXG4gICAgICAgICAgICBzdG9wcGVkLFxuICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRpY2suZWxlbTtcbiAgICAgICAgICAgIH0gKSxcbiAgICAgICAgICAgIHRpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIHN0b3BwZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCAyLjNcbiAgICAgICAgICAgICAgICAvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICgjMTI0OTcpXG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSByZW1haW5pbmcgLyBhbmltYXRpb24uZHVyYXRpb24gfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IDEgLSB0ZW1wLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICggOyBpbmRleCA8IGxlbmd0aCA7IGluZGV4KysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24gXSApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcbiAgICAgICAgICAgICAgICBlbGVtOiBlbGVtLFxuICAgICAgICAgICAgICAgIHByb3BzOiBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcGVydGllcyApLFxuICAgICAgICAgICAgICAgIG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbEVhc2luZzoge30sXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMgKSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICB0d2VlbnM6IFtdLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiggcHJvcCwgZW5kICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nWyBwcm9wIF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nICk7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50d2VlbnMucHVzaCggdHdlZW4gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDAsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdG9wcGVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgIGlmICggZ290b0VuZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSApLFxuICAgICAgICAgICAgcHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cbiAgICAgICAgcHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuICAgICAgICBmb3IgKCA7IGluZGV4IDwgbGVuZ3RoIDsgaW5kZXgrKyApIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG4gICAgICAgICAgICBpZiAoIHJlc3VsdCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXN1bHQuc3RvcCApICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuX3F1ZXVlSG9va3MoIGFuaW1hdGlvbi5lbGVtLCBhbmltYXRpb24ub3B0cy5xdWV1ZSApLnN0b3AgPVxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnByb3h5KCByZXN1bHQuc3RvcCwgcmVzdWx0ICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkubWFwKCBwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbiApO1xuXG4gICAgICAgIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG4gICAgICAgICAgICBhbmltYXRpb24ub3B0cy5zdGFydC5jYWxsKCBlbGVtLCBhbmltYXRpb24gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeS5meC50aW1lcihcbiAgICAgICAgICAgIGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcbiAgICAgICAgICAgICAgICBlbGVtOiBlbGVtLFxuICAgICAgICAgICAgICAgIGFuaW06IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICBxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcbiAgICAgICAgICAgIH0gKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXG4gICAgICAgIHJldHVybiBhbmltYXRpb24ucHJvZ3Jlc3MoIGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzIClcbiAgICAgICAgICAgIC5kb25lKCBhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSApXG4gICAgICAgICAgICAuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG4gICAgICAgICAgICAuYWx3YXlzKCBhbmltYXRpb24ub3B0cy5hbHdheXMgKTtcbiAgICB9XG5cbiAgICBqUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG4gICAgICAgIHR3ZWVuZXJzOiB7XG4gICAgICAgICAgICBcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2VlbiggcHJvcCwgdmFsdWUgKTtcbiAgICAgICAgICAgICAgICBhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgICAgICAgICB9IF1cbiAgICAgICAgfSxcblxuICAgICAgICB0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcHJvcHMgKSApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHByb3BzID0gWyBcIipcIiBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHByb3BzLm1hdGNoKCBybm90d2hpdGUgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByb3AsXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICggOyBpbmRleCA8IGxlbmd0aCA7IGluZGV4KysgKSB7XG4gICAgICAgICAgICAgICAgcHJvcCA9IHByb3BzWyBpbmRleCBdO1xuICAgICAgICAgICAgICAgIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG4gICAgICAgICAgICAgICAgQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuICAgICAgICBwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcbiAgICAgICAgICAgIGlmICggcHJlcGVuZCApIHtcbiAgICAgICAgICAgICAgICBBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuICAgICAgICB2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG4gICAgICAgICAgICBjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuICAgICAgICAgICAgalF1ZXJ5LmlzRnVuY3Rpb24oIHNwZWVkICkgJiYgc3BlZWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQsXG4gICAgICAgICAgICBlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcbiAgICAgICAgfTtcblxuICAgICAgICBvcHQuZHVyYXRpb24gPSBqUXVlcnkuZngub2ZmID8gMCA6IHR5cGVvZiBvcHQuZHVyYXRpb24gPT09IFwibnVtYmVyXCIgP1xuICAgICAgICAgICAgb3B0LmR1cmF0aW9uIDogb3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMgP1xuICAgICAgICAgICAgalF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF0gOiBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuICAgICAgICBpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIG9wdC5xdWV1ZSA9IFwiZnhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFF1ZXVlaW5nXG4gICAgICAgIG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cbiAgICAgICAgb3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XG4gICAgICAgICAgICAgICAgb3B0Lm9sZC5jYWxsKCB0aGlzICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggb3B0LnF1ZXVlICkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3B0O1xuICAgIH07XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKCB7XG4gICAgICAgIGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcblxuICAgICAgICAgICAgLy8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuICkuY3NzKCBcIm9wYWNpdHlcIiwgMCApLnNob3coKVxuXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgLmVuZCgpLmFuaW1hdGUoIHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgdmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcbiAgICAgICAgICAgICAgICBvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG4gICAgICAgICAgICAgICAgZG9BbmltYXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5pbSA9IEFuaW1hdGlvbiggdGhpcywgalF1ZXJ5LmV4dGVuZCgge30sIHByb3AgKSwgb3B0YWxsICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIGlmICggZW1wdHkgfHwgZGF0YVByaXYuZ2V0KCB0aGlzLCBcImZpbmlzaFwiICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltLnN0b3AoIHRydWUgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuICAgICAgICAgICAgICAgIHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcbiAgICAgICAgICAgIHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiggaG9va3MgKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3AgPSBob29rcy5zdG9wO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICAgICAgICAgIHN0b3AoIGdvdG9FbmQgKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICAgICAgZ290b0VuZCA9IGNsZWFyUXVldWU7XG4gICAgICAgICAgICAgICAgY2xlYXJRdWV1ZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggY2xlYXJRdWV1ZSAmJiB0eXBlICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlcXVldWUgPSB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKTtcblxuICAgICAgICAgICAgICAgIGlmICggaW5kZXggKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIGluZGV4IGluIGRhdGEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICYmIHJydW4udGVzdCggaW5kZXggKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICggdHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXF1ZXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cbiAgICAgICAgICAgICAgICAvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuICAgICAgICAgICAgICAgIGlmICggZGVxdWV1ZSB8fCAhZ290b0VuZCApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuICAgICAgICAgICAgICAgICAgICBxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgaG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG4gICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuICAgICAgICAgICAgICAgIGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuICAgICAgICAgICAgICAgIGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuICAgICAgICAgICAgICAgIGlmICggaG9va3MgJiYgaG9va3Muc3RvcCApIHtcbiAgICAgICAgICAgICAgICAgICAgaG9va3Muc3RvcC5jYWxsKCB0aGlzLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cbiAgICAgICAgICAgICAgICBmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuICAgICAgICAgICAgICAgIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVbIGluZGV4IF0uZmluaXNoLmNhbGwoIHRoaXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG4gICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEuZmluaXNoO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuICAgICAgICB2YXIgY3NzRm4gPSBqUXVlcnkuZm5bIG5hbWUgXTtcbiAgICAgICAgalF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cbiAgICAgICAgICAgICAgICBjc3NGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICkgOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSggZ2VuRngoIG5hbWUsIHRydWUgKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcbiAgICAgICAgfTtcbiAgICB9ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbiAgICBqUXVlcnkuZWFjaCgge1xuICAgICAgICBzbGlkZURvd246IGdlbkZ4KCBcInNob3dcIiApLFxuICAgICAgICBzbGlkZVVwOiBnZW5GeCggXCJoaWRlXCIgKSxcbiAgICAgICAgc2xpZGVUb2dnbGU6IGdlbkZ4KCBcInRvZ2dsZVwiICksXG4gICAgICAgIGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuICAgICAgICBmYWRlT3V0OiB7IG9wYWNpdHk6IFwiaGlkZVwiIH0sXG4gICAgICAgIGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XG4gICAgfSwgZnVuY3Rpb24oIG5hbWUsIHByb3BzICkge1xuICAgICAgICBqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuICAgICAgICB9O1xuICAgIH0gKTtcblxuICAgIGpRdWVyeS50aW1lcnMgPSBbXTtcbiAgICBqUXVlcnkuZngudGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGltZXIsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cbiAgICAgICAgZnhOb3cgPSBqUXVlcnkubm93KCk7XG5cbiAgICAgICAgZm9yICggOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgdGltZXIgPSB0aW1lcnNbIGkgXTtcblxuICAgICAgICAgICAgLy8gQ2hlY2tzIHRoZSB0aW1lciBoYXMgbm90IGFscmVhZHkgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICBpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcbiAgICAgICAgICAgICAgICB0aW1lcnMuc3BsaWNlKCBpLS0sIDEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIXRpbWVycy5sZW5ndGggKSB7XG4gICAgICAgICAgICBqUXVlcnkuZnguc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ4Tm93ID0gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBqUXVlcnkuZngudGltZXIgPSBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgIGpRdWVyeS50aW1lcnMucHVzaCggdGltZXIgKTtcbiAgICAgICAgaWYgKCB0aW1lcigpICkge1xuICAgICAgICAgICAgalF1ZXJ5LmZ4LnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkudGltZXJzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xuICAgIGpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoICF0aW1lcklkICkge1xuICAgICAgICAgICAgdGltZXJJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCggalF1ZXJ5LmZ4LnRpY2ssIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKCB0aW1lcklkICk7XG5cbiAgICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgfTtcblxuICAgIGpRdWVyeS5meC5zcGVlZHMgPSB7XG4gICAgICAgIHNsb3c6IDYwMCxcbiAgICAgICAgZmFzdDogMjAwLFxuXG4gICAgICAgIC8vIERlZmF1bHQgc3BlZWRcbiAgICAgICAgX2RlZmF1bHQ6IDQwMFxuICAgIH07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuLy8gaHR0cDovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMDAzMjQwMTQ3NDcvaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xuICAgIGpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuICAgICAgICB0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcbiAgICAgICAgICAgIGhvb2tzLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9ICk7XG4gICAgfTtcblxuXG4gICAgKCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG4gICAgICAgICAgICBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG4gICAgICAgICAgICBvcHQgPSBzZWxlY3QuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib3B0aW9uXCIgKSApO1xuXG4gICAgICAgIGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogaU9TPD01LjEsIEFuZHJvaWQ8PTQuMitcbiAgICAgICAgLy8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG4gICAgICAgIHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFPD0xMStcbiAgICAgICAgLy8gTXVzdCBhY2Nlc3Mgc2VsZWN0ZWRJbmRleCB0byBtYWtlIGRlZmF1bHQgb3B0aW9ucyBzZWxlY3RcbiAgICAgICAgc3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDtcblxuICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkPD0yLjNcbiAgICAgICAgLy8gT3B0aW9ucyBpbnNpZGUgZGlzYWJsZWQgc2VsZWN0cyBhcmUgaW5jb3JyZWN0bHkgbWFya2VkIGFzIGRpc2FibGVkXG4gICAgICAgIHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHN1cHBvcnQub3B0RGlzYWJsZWQgPSAhb3B0LmRpc2FibGVkO1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFPD0xMStcbiAgICAgICAgLy8gQW4gaW5wdXQgbG9zZXMgaXRzIHZhbHVlIGFmdGVyIGJlY29taW5nIGEgcmFkaW9cbiAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcInRcIjtcbiAgICAgICAgaW5wdXQudHlwZSA9IFwicmFkaW9cIjtcbiAgICAgICAgc3VwcG9ydC5yYWRpb1ZhbHVlID0gaW5wdXQudmFsdWUgPT09IFwidFwiO1xuICAgIH0gKSgpO1xuXG5cbiAgICB2YXIgYm9vbEhvb2ssXG4gICAgICAgIGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCgge1xuICAgICAgICBhdHRyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICBhdHRyOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG4gICAgICAgICAgICB2YXIgcmV0LCBob29rcyxcbiAgICAgICAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcbiAgICAgICAgICAgIGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBbGwgYXR0cmlidXRlcyBhcmUgbG93ZXJjYXNlXG4gICAgICAgICAgICAvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG4gICAgICAgICAgICBpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZSBdIHx8XG4gICAgICAgICAgICAgICAgICAgICggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgPyBib29sSG9vayA6IHVuZGVmaW5lZCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICsgXCJcIiApO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cbiAgICAgICAgICAgIC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXR0ckhvb2tzOiB7XG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHZhbCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHZhciBuYW1lLCBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdHdoaXRlICk7XG5cbiAgICAgICAgICAgIGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCAoIG5hbWUgPSBhdHRyTmFtZXNbIGkrKyBdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BOYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJvb2xlYW4gYXR0cmlidXRlcyBnZXQgc3BlY2lhbCB0cmVhdG1lbnQgKCMxMDg3MClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgdG8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIHByb3BOYW1lIF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBuYW1lICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAgYm9vbEhvb2sgPSB7XG4gICAgICAgIHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuICAgICAgICAgICAgaWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBqUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuICAgICAgICBhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG4gICAgICAgICAgICB2YXIgcmV0LCBoYW5kbGU7XG4gICAgICAgICAgICBpZiAoICFpc1hNTCApIHtcblxuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBhdHRySGFuZGxlWyBuYW1lIF07XG4gICAgICAgICAgICAgICAgYXR0ckhhbmRsZVsgbmFtZSBdID0gcmV0O1xuICAgICAgICAgICAgICAgIHJldCA9IGdldHRlciggZWxlbSwgbmFtZSwgaXNYTUwgKSAhPSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgbmFtZS50b0xvd2VyQ2FzZSgpIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgICAgICAgICBhdHRySGFuZGxlWyBuYW1lIF0gPSBoYW5kbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH0gKTtcblxuXG5cblxuICAgIHZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgICAgcmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgcHJvcDogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVByb3A6IGZ1bmN0aW9uKCBuYW1lICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbIGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZSBdO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICBwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG4gICAgICAgICAgICB2YXIgcmV0LCBob29rcyxcbiAgICAgICAgICAgICAgICBuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cbiAgICAgICAgICAgIC8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcbiAgICAgICAgICAgIGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuICAgICAgICAgICAgICAgIC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3NcbiAgICAgICAgICAgICAgICBuYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuICAgICAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG4gICAgICAgICAgICAgICAgICAgICggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtWyBuYW1lIF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcEhvb2tzOiB7XG4gICAgICAgICAgICB0YWJJbmRleDoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbS50YWJJbmRleCBkb2Vzbid0IGFsd2F5cyByZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgdmFsdWUgd2hlbiBpdCBoYXNuJ3QgYmVlbiBleHBsaWNpdGx5IHNldFxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vZmx1aWRwcm9qZWN0Lm9yZy9ibG9nLzIwMDgvMDEvMDkvZ2V0dGluZy1zZXR0aW5nLWFuZC1yZW1vdmluZy10YWJpbmRleC12YWx1ZXMtd2l0aC1qYXZhc2NyaXB0L1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFiaW5kZXggP1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICByY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJiBlbGVtLmhyZWYgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wRml4OiB7XG4gICAgICAgICAgICBcImZvclwiOiBcImh0bWxGb3JcIixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuICAgICAgICB9XG4gICAgfSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbiAgICBpZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xuICAgICAgICBqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKCBwYXJlbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggcGFyZW50LnBhcmVudE5vZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGpRdWVyeS5lYWNoKCBbXG4gICAgICAgIFwidGFiSW5kZXhcIixcbiAgICAgICAgXCJyZWFkT25seVwiLFxuICAgICAgICBcIm1heExlbmd0aFwiLFxuICAgICAgICBcImNlbGxTcGFjaW5nXCIsXG4gICAgICAgIFwiY2VsbFBhZGRpbmdcIixcbiAgICAgICAgXCJyb3dTcGFuXCIsXG4gICAgICAgIFwiY29sU3BhblwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiY29udGVudEVkaXRhYmxlXCJcbiAgICBdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgalF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbiAgICB9ICk7XG5cblxuXG5cbiAgICB2YXIgcmNsYXNzID0gL1tcXHRcXHJcXG5cXGZdL2c7XG5cbiAgICBmdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xuICAgIH1cblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuICAgICAgICAgICAgICAgICAgICBjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIFwiIFwiICsgY3VyVmFsdWUgKyBcIiBcIiApLnJlcGxhY2UoIHJjbGFzcywgXCIgXCIgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIGN1ciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGN1ci5pbmRleE9mKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIgKSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ciArPSBjbGF6eiArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSBqUXVlcnkudHJpbSggY3VyICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCB0aGlzICkucmVtb3ZlQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyKCBcImNsYXNzXCIsIFwiXCIgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICggXCIgXCIgKyBjdXJWYWx1ZSArIFwiIFwiICkucmVwbGFjZSggcmNsYXNzLCBcIiBcIiApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggY3VyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoICggY2xhenogPSBjbGFzc2VzWyBqKysgXSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID4gLTEgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IGpRdWVyeS50cmltKCBjdXIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBzdGF0ZVZhbCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVWYWxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUsIGksIHNlbGYsIGNsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyA9IHZhbHVlLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoICggY2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSsrIF0gKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB3aG9sZSBjbGFzcyBuYW1lXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjbGFzc05hbWUgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2V0QXR0cmlidXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYuZ2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUsIGVsZW0sXG4gICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcbiAgICAgICAgICAgIHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgKCBcIiBcIiArIGdldENsYXNzKCBlbGVtICkgKyBcIiBcIiApLnJlcGxhY2UoIHJjbGFzcywgXCIgXCIgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV4T2YoIGNsYXNzTmFtZSApID4gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cblxuXG5cbiAgICB2YXIgcnJldHVybiA9IC9cXHIvZyxcbiAgICAgICAgcnNwYWNlcyA9IC9bXFx4MjBcXHRcXHJcXG5cXGZdKy9nO1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCgge1xuICAgICAgICB2YWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIHZhciBob29rcywgcmV0LCBpc0Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzWyAwIF07XG5cbiAgICAgICAgICAgIGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICBob29rcyA9IGpRdWVyeS52YWxIb29rc1sgZWxlbS50eXBlIF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRcIiBpbiBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIFwidmFsdWVcIiApICkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXQgPSBlbGVtLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnJlcGxhY2UoIHJyZXR1cm4sIFwiXCIgKSA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm5vZGVUeXBlICE9PSAxICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBpc0Z1bmN0aW9uICkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyZWF0IG51bGwvdW5kZWZpbmVkIGFzIFwiXCI7IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdcbiAgICAgICAgICAgICAgICBpZiAoIHZhbCA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsICs9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBqUXVlcnkuaXNBcnJheSggdmFsICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkudmFsSG9va3NbIHRoaXMudHlwZSBdIHx8IGpRdWVyeS52YWxIb29rc1sgdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuICAgICAgICAgICAgICAgIGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbiAgICBqUXVlcnkuZXh0ZW5kKCB7XG4gICAgICAgIHZhbEhvb2tzOiB7XG4gICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInZhbHVlXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCAhPSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFMTAtMTErXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3RyaXAtYW5kLWNvbGxhcHNlLXdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS50cmltKCBqUXVlcnkudGV4dCggZWxlbSApICkucmVwbGFjZSggcnNwYWNlcywgXCIgXCIgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlLCBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBlbGVtLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiIHx8IGluZGV4IDwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IGluZGV4IDwgMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmUgPyBpbmRleCA6IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUU4LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzdXBwb3J0Lm9wdERpc2FibGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW9wdGlvbi5kaXNhYmxlZCA6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoIFwiZGlzYWJsZWRcIiApID09PSBudWxsICkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFqUXVlcnkubm9kZU5hbWUoIG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIgKSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0galF1ZXJ5KCBvcHRpb24gKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBvbmUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25TZXQsIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KCB2YWx1ZSApLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG9wdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggaS0tICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBvcHRpb24uc2VsZWN0ZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaW5BcnJheSggalF1ZXJ5LnZhbEhvb2tzLm9wdGlvbi5nZXQoIG9wdGlvbiApLCB2YWx1ZXMgKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25TZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhb3B0aW9uU2V0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG4gICAgalF1ZXJ5LmVhY2goIFsgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIgXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGpRdWVyeS52YWxIb29rc1sgdGhpcyBdID0ge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNBcnJheSggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoIGpRdWVyeSggZWxlbSApLnZhbCgpLCB2YWx1ZSApID4gLTEgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICggIXN1cHBvcnQuY2hlY2tPbiApIHtcbiAgICAgICAgICAgIGpRdWVyeS52YWxIb29rc1sgdGhpcyBdLmdldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG5cblxuLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxuXG5cbiAgICB2YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87XG5cbiAgICBqUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZXZlbnQsIHtcblxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuICAgICAgICAgICAgdmFyIGksIGN1ciwgdG1wLCBidWJibGVUeXBlLCBvbnR5cGUsIGhhbmRsZSwgc3BlY2lhbCxcbiAgICAgICAgICAgICAgICBldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcbiAgICAgICAgICAgICAgICB0eXBlID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcInR5cGVcIiApID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG4gICAgICAgICAgICBjdXIgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgIGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4ICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG4gICAgICAgICAgICBpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIHR5cGUuaW5kZXhPZiggXCIuXCIgKSA+IC0xICkge1xuXG4gICAgICAgICAgICAgICAgLy8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuICAgICAgICAgICAgICAgIG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KCBcIi5cIiApO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlcy5zb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbnR5cGUgPSB0eXBlLmluZGV4T2YoIFwiOlwiICkgPCAwICYmIFwib25cIiArIHR5cGU7XG5cbiAgICAgICAgICAgIC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG4gICAgICAgICAgICAgICAgZXZlbnQgOlxuICAgICAgICAgICAgICAgIG5ldyBqUXVlcnkuRXZlbnQoIHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCApO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG4gICAgICAgICAgICBldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcbiAgICAgICAgICAgIGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKTtcbiAgICAgICAgICAgIGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcbiAgICAgICAgICAgIGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICggIWV2ZW50LnRhcmdldCApIHtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQgPSBlbGVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG4gICAgICAgICAgICBkYXRhID0gZGF0YSA9PSBudWxsID9cbiAgICAgICAgICAgICAgICBbIGV2ZW50IF0gOlxuICAgICAgICAgICAgICAgIGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEsIFsgZXZlbnQgXSApO1xuXG4gICAgICAgICAgICAvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG4gICAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcbiAgICAgICAgICAgIGlmICggIW9ubHlIYW5kbGVycyAmJiBzcGVjaWFsLnRyaWdnZXIgJiYgc3BlY2lhbC50cmlnZ2VyLmFwcGx5KCBlbGVtLCBkYXRhICkgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG4gICAgICAgICAgICAvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuICAgICAgICAgICAgaWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuICAgICAgICAgICAgICAgIGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuICAgICAgICAgICAgICAgIGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gY3VyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuICAgICAgICAgICAgICAgIGlmICggdG1wID09PSAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApICkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cbiAgICAgICAgICAgICAgICBldmVudC50eXBlID0gaSA+IDEgP1xuICAgICAgICAgICAgICAgICAgICBidWJibGVUeXBlIDpcbiAgICAgICAgICAgICAgICBzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkgaGFuZGxlclxuICAgICAgICAgICAgICAgIGhhbmRsZSA9ICggZGF0YVByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gJiZcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcbiAgICAgICAgICAgICAgICBpZiAoIGhhbmRsZSApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBOYXRpdmUgaGFuZGxlclxuICAgICAgICAgICAgICAgIGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuICAgICAgICAgICAgICAgIGlmICggaGFuZGxlICYmIGhhbmRsZS5hcHBseSAmJiBhY2NlcHREYXRhKCBjdXIgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnR5cGUgPSB0eXBlO1xuXG4gICAgICAgICAgICAvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG4gICAgICAgICAgICBpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCAoICFzcGVjaWFsLl9kZWZhdWx0IHx8XG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoIGV2ZW50UGF0aC5wb3AoKSwgZGF0YSApID09PSBmYWxzZSApICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBvbnR5cGUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gZWxlbVsgb250eXBlIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdG1wICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bIG9udHlwZSBdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVsgdHlwZSBdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRtcCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtWyBvbnR5cGUgXSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcbiAgICAgICAgLy8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcbiAgICAgICAgc2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcbiAgICAgICAgICAgIHZhciBlID0galF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICBuZXcgalF1ZXJ5LkV2ZW50KCksXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBpc1NpbXVsYXRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG4gICAgICAgIH1cblxuICAgIH0gKTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcblxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJIYW5kbGVyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcbiAgICAgICAgICAgIHZhciBlbGVtID0gdGhpc1sgMCBdO1xuICAgICAgICAgICAgaWYgKCBlbGVtICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSApO1xuXG5cbiAgICBqUXVlcnkuZWFjaCggKCBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIFwiICtcbiAgICAgICAgXCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArXG4gICAgICAgIFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiICkuc3BsaXQoIFwiIFwiICksXG4gICAgICAgIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuICAgICAgICAgICAgalF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggZGF0YSwgZm4gKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlciggbmFtZSApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSApO1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCgge1xuICAgICAgICBob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3VzZWVudGVyKCBmbk92ZXIgKS5tb3VzZWxlYXZlKCBmbk91dCB8fCBmbk92ZXIgKTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG5cblxuICAgIHN1cHBvcnQuZm9jdXNpbiA9IFwib25mb2N1c2luXCIgaW4gd2luZG93O1xuXG5cbi8vIFN1cHBvcnQ6IEZpcmVmb3hcbi8vIEZpcmVmb3ggZG9lc24ndCBoYXZlIGZvY3VzKGluIHwgb3V0KSBldmVudHNcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG4vL1xuLy8gU3VwcG9ydDogQ2hyb21lLCBTYWZhcmlcbi8vIGZvY3VzKGluIHwgb3V0KSBldmVudHMgZmlyZSBhZnRlciBmb2N1cyAmIGJsdXIgZXZlbnRzLFxuLy8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDk4NTdcbiAgICBpZiAoICFzdXBwb3J0LmZvY3VzaW4gKSB7XG4gICAgICAgIGpRdWVyeS5lYWNoKCB7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIGZpeCwgZXZlbnQudGFyZ2V0LCBqUXVlcnkuZXZlbnQuZml4KCBldmVudCApICk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZml4IF0gPSB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXggKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoICFhdHRhY2hlcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoICFhdHRhY2hlcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoIGRvYywgZml4ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9ICk7XG4gICAgfVxuICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxuICAgIHZhciBub25jZSA9IGpRdWVyeS5ub3coKTtcblxuICAgIHZhciBycXVlcnkgPSAoIC9cXD8vICk7XG5cblxuXG4vLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xuLy8gV29ya2Fyb3VuZCBmYWlsdXJlIHRvIHN0cmluZy1jYXN0IG51bGwgaW5wdXRcbiAgICBqUXVlcnkucGFyc2VKU09OID0gZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKCBkYXRhICsgXCJcIiApO1xuICAgIH07XG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xuICAgIGpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uKCBkYXRhICkge1xuICAgICAgICB2YXIgeG1sO1xuICAgICAgICBpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0OiBJRTlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHhtbCA9ICggbmV3IHdpbmRvdy5ET01QYXJzZXIoKSApLnBhcnNlRnJvbVN0cmluZyggZGF0YSwgXCJ0ZXh0L3htbFwiICk7XG4gICAgICAgIH0gY2F0Y2ggKCBlICkge1xuICAgICAgICAgICAgeG1sID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiICkubGVuZ3RoICkge1xuICAgICAgICAgICAgalF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geG1sO1xuICAgIH07XG5cblxuICAgIHZhclxuICAgICAgICByaGFzaCA9IC8jLiokLyxcbiAgICAgICAgcnRzID0gLyhbPyZdKV89W14mXSovLFxuICAgICAgICByaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cbiAgICAvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cbiAgICAgICAgcmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcbiAgICAgICAgcm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG4gICAgICAgIHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcblxuICAgIC8qIFByZWZpbHRlcnNcbiAgICAgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuICAgICAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XG4gICAgICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuICAgICAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcbiAgICAgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG4gICAgICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuICAgICAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG4gICAgICovXG4gICAgICAgIHByZWZpbHRlcnMgPSB7fSxcblxuICAgIC8qIFRyYW5zcG9ydHMgYmluZGluZ3NcbiAgICAgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG4gICAgICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuICAgICAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuICAgICAqL1xuICAgICAgICB0cmFuc3BvcnRzID0ge30sXG5cbiAgICAvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cbiAgICAgICAgYWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG4gICAgLy8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG4gICAgICAgIG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG4gICAgb3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXG4vLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG4gICAgZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XG5cbiAgICAgICAgLy8gZGF0YVR5cGVFeHByZXNzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIipcIlxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcblxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgICAgIGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG4gICAgICAgICAgICAgICAgZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkYXRhVHlwZSxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW107XG5cbiAgICAgICAgICAgIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICB3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoIDEgKSB8fCBcIipcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYXBwZW5kXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbi8vIEJhc2UgaW5zcGVjdGlvbiBmdW5jdGlvbiBmb3IgcHJlZmlsdGVycyBhbmQgdHJhbnNwb3J0c1xuICAgIGZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cbiAgICAgICAgdmFyIGluc3BlY3RlZCA9IHt9LFxuICAgICAgICAgICAgc2Vla2luZ1RyYW5zcG9ydCA9ICggc3RydWN0dXJlID09PSB0cmFuc3BvcnRzICk7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zcGVjdCggZGF0YVR5cGUgKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQ7XG4gICAgICAgICAgICBpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSwgZnVuY3Rpb24oIF8sIHByZWZpbHRlck9yRmFjdG9yeSApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgIXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggc2Vla2luZ1RyYW5zcG9ydCApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEoIHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xuICAgIH1cblxuLy8gQSBzcGVjaWFsIGV4dGVuZCBmb3IgYWpheCBvcHRpb25zXG4vLyB0aGF0IHRha2VzIFwiZmxhdFwiIG9wdGlvbnMgKG5vdCB0byBiZSBkZWVwIGV4dGVuZGVkKVxuLy8gRml4ZXMgIzk4ODdcbiAgICBmdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcbiAgICAgICAgdmFyIGtleSwgZGVlcCxcbiAgICAgICAgICAgIGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBmb3IgKCBrZXkgaW4gc3JjICkge1xuICAgICAgICAgICAgaWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgKCBmbGF0T3B0aW9uc1sga2V5IF0gPyB0YXJnZXQgOiAoIGRlZXAgfHwgKCBkZWVwID0ge30gKSApIClbIGtleSBdID0gc3JjWyBrZXkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIGRlZXAgKSB7XG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgLyogSGFuZGxlcyByZXNwb25zZXMgdG8gYW4gYWpheCByZXF1ZXN0OlxuICAgICAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gICAgICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuICAgICAgICB2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG4gICAgICAgICAgICBjb250ZW50cyA9IHMuY29udGVudHMsXG4gICAgICAgICAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuICAgICAgICAvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuICAgICAgICB3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcbiAgICAgICAgICAgIGRhdGFUeXBlcy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKCBjdCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG4gICAgICAgIGlmICggY3QgKSB7XG4gICAgICAgICAgICBmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuICAgICAgICAgICAgICAgIGlmICggY29udGVudHNbIHR5cGUgXSAmJiBjb250ZW50c1sgdHlwZSBdLnRlc3QoIGN0ICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KCB0eXBlICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxuICAgICAgICBpZiAoIGRhdGFUeXBlc1sgMCBdIGluIHJlc3BvbnNlcyApIHtcbiAgICAgICAgICAgIGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuICAgICAgICAgICAgZm9yICggdHlwZSBpbiByZXNwb25zZXMgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuICAgICAgICAgICAgICAgICAgICBmaW5hbERhdGFUeXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggIWZpcnN0RGF0YVR5cGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG4gICAgICAgICAgICBmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuICAgICAgICAvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuICAgICAgICAvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gICAgICAgIGlmICggZmluYWxEYXRhVHlwZSApIHtcbiAgICAgICAgICAgIGlmICggZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWyAwIF0gKSB7XG4gICAgICAgICAgICAgICAgZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAgICAgKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG4gICAgICAgIHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuICAgICAgICAgICAgY29udmVydGVycyA9IHt9LFxuXG4gICAgICAgIC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cbiAgICAgICAgICAgIGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzLnNsaWNlKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvbnZlcnRlcnMgbWFwIHdpdGggbG93ZXJjYXNlZCBrZXlzXG4gICAgICAgIGlmICggZGF0YVR5cGVzWyAxIF0gKSB7XG4gICAgICAgICAgICBmb3IgKCBjb252IGluIHMuY29udmVydGVycyApIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZXJzWyBjb252LnRvTG93ZXJDYXNlKCkgXSA9IHMuY29udmVydGVyc1sgY29udiBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG4gICAgICAgIHdoaWxlICggY3VycmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG4gICAgICAgICAgICAgICAganFYSFJbIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSBdID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoICFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIgKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIoIHJlc3BvbnNlLCBzLmRhdGFUeXBlICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgICAgICAgICAgY3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoIGN1cnJlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGVyZSdzIG9ubHkgd29yayB0byBkbyBpZiBjdXJyZW50IGRhdGFUeXBlIGlzIG5vbi1hdXRvXG4gICAgICAgICAgICAgICAgaWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcHJldjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHJlc3BvbnNlIGlmIHByZXYgZGF0YVR5cGUgaXMgbm9uLWF1dG8gYW5kIGRpZmZlcnMgZnJvbSBjdXJyZW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICBjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuICAgICAgICAgICAgICAgICAgICBpZiAoICFjb252ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggY29udjIgaW4gY29udmVydGVycyApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdG1wWyAxIF0gPT09IGN1cnJlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcHJldiBjYW4gYmUgY29udmVydGVkIHRvIGFjY2VwdGVkIGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyB0bXBbIDAgXSBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnYgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY29udiA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIGNvbnZlcnRlcnNbIGNvbnYyIF0gIT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHRtcFsgMCBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBjb252ZXJ0ZXIgKGlmIG5vdCBhbiBlcXVpdmFsZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjb252ICE9PSB0cnVlICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoIGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xuICAgIH1cblxuICAgIGpRdWVyeS5leHRlbmQoIHtcblxuICAgICAgICAvLyBDb3VudGVyIGZvciBob2xkaW5nIHRoZSBudW1iZXIgb2YgYWN0aXZlIHF1ZXJpZXNcbiAgICAgICAgYWN0aXZlOiAwLFxuXG4gICAgICAgIC8vIExhc3QtTW9kaWZpZWQgaGVhZGVyIGNhY2hlIGZvciBuZXh0IHJlcXVlc3RcbiAgICAgICAgbGFzdE1vZGlmaWVkOiB7fSxcbiAgICAgICAgZXRhZzoge30sXG5cbiAgICAgICAgYWpheFNldHRpbmdzOiB7XG4gICAgICAgICAgICB1cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgaXNMb2NhbDogcmxvY2FsUHJvdG9jb2wudGVzdCggbG9jYXRpb24ucHJvdG9jb2wgKSxcbiAgICAgICAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiB0cnVlLFxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgdGltZW91dDogMCxcbiAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgIGRhdGFUeXBlOiBudWxsLFxuICAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgICAgICAgIHBhc3N3b3JkOiBudWxsLFxuICAgICAgICAgICAgIGNhY2hlOiBudWxsLFxuICAgICAgICAgICAgIHRocm93czogZmFsc2UsXG4gICAgICAgICAgICAgdHJhZGl0aW9uYWw6IGZhbHNlLFxuICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGFjY2VwdHM6IHtcbiAgICAgICAgICAgICAgICBcIipcIjogYWxsVHlwZXMsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJ0ZXh0L3BsYWluXCIsXG4gICAgICAgICAgICAgICAgaHRtbDogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICB4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuICAgICAgICAgICAgICAgIGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgICAgICAgICAgeG1sOiAvXFxieG1sXFxiLyxcbiAgICAgICAgICAgICAgICBodG1sOiAvXFxiaHRtbC8sXG4gICAgICAgICAgICAgICAganNvbjogL1xcYmpzb25cXGIvXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNwb25zZUZpZWxkczoge1xuICAgICAgICAgICAgICAgIHhtbDogXCJyZXNwb25zZVhNTFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG4gICAgICAgICAgICAgICAganNvbjogXCJyZXNwb25zZUpTT05cIlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gRGF0YSBjb252ZXJ0ZXJzXG4gICAgICAgICAgICAvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb252ZXJ0ZXJzOiB7XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcbiAgICAgICAgICAgICAgICBcIiogdGV4dFwiOiBTdHJpbmcsXG5cbiAgICAgICAgICAgICAgICAvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcbiAgICAgICAgICAgICAgICBcInRleHQgaHRtbFwiOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGV4dCBhcyBhIGpzb24gZXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIFwidGV4dCBqc29uXCI6IGpRdWVyeS5wYXJzZUpTT04sXG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuICAgICAgICAgICAgICAgIFwidGV4dCB4bWxcIjogalF1ZXJ5LnBhcnNlWE1MXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuICAgICAgICAgICAgLy8geW91IGNhbiBhZGQgeW91ciBvd24gY3VzdG9tIG9wdGlvbnMgaGVyZSBpZlxuICAgICAgICAgICAgLy8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcbiAgICAgICAgICAgIC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuICAgICAgICAgICAgZmxhdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB1cmw6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGV4dDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG4gICAgICAgIC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cbiAgICAgICAgYWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncyA/XG5cbiAgICAgICAgICAgICAgICAvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgIGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuICAgICAgICAgICAgICAgIC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3NcbiAgICAgICAgICAgICAgICBhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcbiAgICAgICAgYWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cbiAgICAgICAgLy8gTWFpbiBtZXRob2RcbiAgICAgICAgYWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuICAgICAgICAgICAgLy8gSWYgdXJsIGlzIGFuIG9iamVjdCwgc2ltdWxhdGUgcHJlLTEuNSBzaWduYXR1cmVcbiAgICAgICAgICAgIGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdXJsO1xuICAgICAgICAgICAgICAgIHVybCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3RcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0LFxuXG4gICAgICAgICAgICAvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG4gICAgICAgICAgICAgICAgY2FjaGVVUkwsXG5cbiAgICAgICAgICAgIC8vIFJlc3BvbnNlIGhlYWRlcnNcbiAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnNTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzLFxuXG4gICAgICAgICAgICAvLyB0aW1lb3V0IGhhbmRsZVxuICAgICAgICAgICAgICAgIHRpbWVvdXRUaW1lcixcblxuICAgICAgICAgICAgLy8gVXJsIGNsZWFudXAgdmFyXG4gICAgICAgICAgICAgICAgdXJsQW5jaG9yLFxuXG4gICAgICAgICAgICAvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcbiAgICAgICAgICAgICAgICBmaXJlR2xvYmFscyxcblxuICAgICAgICAgICAgLy8gTG9vcCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIGksXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICAgICAgICBzID0galF1ZXJ5LmFqYXhTZXR1cCgge30sIG9wdGlvbnMgKSxcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2tzIGNvbnRleHRcbiAgICAgICAgICAgICAgICBjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuICAgICAgICAgICAgLy8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuICAgICAgICAgICAgICAgICggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQsXG5cbiAgICAgICAgICAgIC8vIERlZmVycmVkc1xuICAgICAgICAgICAgICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG4gICAgICAgICAgICAgICAgY29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG4gICAgICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG5cbiAgICAgICAgICAgIC8vIEhlYWRlcnMgKHRoZXkgYXJlIHNlbnQgYWxsIGF0IG9uY2UpXG4gICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnMgPSB7fSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cbiAgICAgICAgICAgIC8vIFRoZSBqcVhIUiBzdGF0ZVxuICAgICAgICAgICAgICAgIHN0YXRlID0gMCxcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgc3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cbiAgICAgICAgICAgIC8vIEZha2UgeGhyXG4gICAgICAgICAgICAgICAganFYSFIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGU6IDAsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oIGtleSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCAoIG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpIF0gPSBtYXRjaFsgMiBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gcmVzcG9uc2VIZWFkZXJzWyBrZXkudG9Mb3dlckNhc2UoKSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmF3IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlID09PSAyID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZXMgdGhlIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFzdGF0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbG5hbWUgXSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIGxuYW1lIF0gfHwgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1sgbmFtZSBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIXN0YXRlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMubWltZVR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBtYXAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSA8IDIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGNvZGUgaW4gbWFwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlWyBjb2RlIF0gPSBbIHN0YXR1c0NvZGVbIGNvZGUgXSwgbWFwWyBjb2RlIF0gXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHJhbnNwb3J0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5hYm9ydCggZmluYWxUZXh0ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCAwLCBmaW5hbFRleHQgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQXR0YWNoIGRlZmVycmVkc1xuICAgICAgICAgICAgZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKS5jb21wbGV0ZSA9IGNvbXBsZXRlRGVmZXJyZWQuYWRkO1xuICAgICAgICAgICAganFYSFIuc3VjY2VzcyA9IGpxWEhSLmRvbmU7XG4gICAgICAgICAgICBqcVhIUi5lcnJvciA9IGpxWEhSLmZhaWw7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBoYXNoIGNoYXJhY3RlciAoIzc1MzE6IGFuZCBzdHJpbmcgcHJvbW90aW9uKVxuICAgICAgICAgICAgLy8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG4gICAgICAgICAgICAvLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBzLnVybCA9ICggKCB1cmwgfHwgcy51cmwgfHwgbG9jYXRpb24uaHJlZiApICsgXCJcIiApLnJlcGxhY2UoIHJoYXNoLCBcIlwiIClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSggcnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiApO1xuXG4gICAgICAgICAgICAvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCAjMTIwMDRcbiAgICAgICAgICAgIHMudHlwZSA9IG9wdGlvbnMubWV0aG9kIHx8IG9wdGlvbnMudHlwZSB8fCBzLm1ldGhvZCB8fCBzLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3RcbiAgICAgICAgICAgIHMuZGF0YVR5cGVzID0galF1ZXJ5LnRyaW0oIHMuZGF0YVR5cGUgfHwgXCIqXCIgKS50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuICAgICAgICAgICAgLy8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG4gICAgICAgICAgICBpZiAoIHMuY3Jvc3NEb21haW4gPT0gbnVsbCApIHtcbiAgICAgICAgICAgICAgICB1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU4LTExK1xuICAgICAgICAgICAgICAgIC8vIElFIHRocm93cyBleGNlcHRpb24gaWYgdXJsIGlzIG1hbGZvcm1lZCwgZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU4LTExK1xuICAgICAgICAgICAgICAgICAgICAvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAgICB1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuICAgICAgICAgICAgICAgICAgICBzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICggZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuICAgICAgICAgICAgICAgICAgICBzLmNyb3NzRG9tYWluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuICAgICAgICAgICAgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgICAgIHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHByZWZpbHRlcnNcbiAgICAgICAgICAgIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG4gICAgICAgICAgICAvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuICAgICAgICAgICAgaWYgKCBzdGF0ZSA9PT0gMiApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG4gICAgICAgICAgICAvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuICAgICAgICAgICAgZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cbiAgICAgICAgICAgIC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcbiAgICAgICAgICAgIGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdGFydFwiICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuICAgICAgICAgICAgcy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG4gICAgICAgICAgICBzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KCBzLnR5cGUgKTtcblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG4gICAgICAgICAgICAvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cbiAgICAgICAgICAgIGNhY2hlVVJMID0gcy51cmw7XG5cbiAgICAgICAgICAgIC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG4gICAgICAgICAgICBpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSwgYXBwZW5kIGRhdGEgdG8gdXJsXG4gICAgICAgICAgICAgICAgaWYgKCBzLmRhdGEgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlVVJMID0gKCBzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcy5kYXRhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFkZCBhbnRpLWNhY2hlIGluIHVybCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoIHMuY2FjaGUgPT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgICAgICBzLnVybCA9IHJ0cy50ZXN0KCBjYWNoZVVSTCApID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhICdfJyBwYXJhbWV0ZXIsIHNldCBpdHMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlVVJMLnJlcGxhY2UoIHJ0cywgXCIkMV89XCIgKyBub25jZSsrICkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIG9uZSB0byB0aGUgZW5kXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlVVJMICsgKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIFwiXz1cIiArIG5vbmNlKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuICAgICAgICAgICAgaWYgKCBzLmlmTW9kaWZpZWQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICkge1xuICAgICAgICAgICAgICAgICAgICBqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcbiAgICAgICAgICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcbiAgICAgICAgICAgIGlmICggcy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlICkge1xuICAgICAgICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiLFxuICAgICAgICAgICAgICAgIHMuZGF0YVR5cGVzWyAwIF0gJiYgcy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gP1xuICAgICAgICAgICAgICAgIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcbiAgICAgICAgICAgICAgICAoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuICAgICAgICAgICAgICAgICAgICBzLmFjY2VwdHNbIFwiKlwiIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuICAgICAgICAgICAgZm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG4gICAgICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlciggaSwgcy5oZWFkZXJzWyBpIF0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuICAgICAgICAgICAgaWYgKCBzLmJlZm9yZVNlbmQgJiZcbiAgICAgICAgICAgICAgICAoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IHN0YXRlID09PSAyICkgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cbiAgICAgICAgICAgICAgICByZXR1cm4ganFYSFIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG4gICAgICAgICAgICBzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuICAgICAgICAgICAgLy8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG4gICAgICAgICAgICBmb3IgKCBpIGluIHsgc3VjY2VzczogMSwgZXJyb3I6IDEsIGNvbXBsZXRlOiAxIH0gKSB7XG4gICAgICAgICAgICAgICAganFYSFJbIGkgXSggc1sgaSBdICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCB0cmFuc3BvcnRcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG4gICAgICAgICAgICAvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcbiAgICAgICAgICAgIGlmICggIXRyYW5zcG9ydCApIHtcbiAgICAgICAgICAgICAgICBkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKCBmaXJlR2xvYmFscyApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheFNlbmRcIiwgWyBqcVhIUiwgcyBdICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlID09PSAyICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGltZW91dFxuICAgICAgICAgICAgICAgIGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgcy50aW1lb3V0ICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICggZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9wYWdhdGUgZXhjZXB0aW9uIGFzIGVycm9yIGlmIG5vdCBkb25lXG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgPCAyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSggLTEsIGUgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltcGx5IHJldGhyb3cgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuICAgICAgICAgICAgICAgIHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FsbGVkIG9uY2VcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXRlID09PSAyICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RhdGUgaXMgXCJkb25lXCIgbm93XG4gICAgICAgICAgICAgICAgc3RhdGUgPSAyO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAoIHRpbWVvdXRUaW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRGVyZWZlcmVuY2UgdHJhbnNwb3J0IGZvciBlYXJseSBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vIENhY2hlIHJlc3BvbnNlIGhlYWRlcnNcbiAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgcmVhZHlTdGF0ZVxuICAgICAgICAgICAgICAgIGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlcyApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuICAgICAgICAgICAgICAgIGlmICggaXNTdWNjZXNzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG4gICAgICAgICAgICAgICAgICAgIGlmICggcy5pZk1vZGlmaWVkICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJMYXN0LU1vZGlmaWVkXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbW9kaWZpZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbW9kaWZpZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0dXMgPT09IDIwNCB8fCBzLnR5cGUgPT09IFwiSEVBRFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDMwNCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNTdWNjZXNzID0gIWVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0dXMgfHwgIXN0YXR1c1RleHQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0dXMgPCAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuICAgICAgICAgICAgICAgIGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgICAgICBqcVhIUi5zdGF0dXNUZXh0ID0gKCBuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQgKSArIFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzL0Vycm9yXG4gICAgICAgICAgICAgICAgaWYgKCBpc1N1Y2Nlc3MgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdFdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCwgZXJyb3IgXSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAganFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGZpcmVHbG9iYWxzICkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29tcGxldGVcbiAgICAgICAgICAgICAgICBjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQgXSApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBmaXJlR2xvYmFscyApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0b3BcIiApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIiApO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmVhY2goIFsgXCJnZXRcIiwgXCJwb3N0XCIgXSwgZnVuY3Rpb24oIGksIG1ldGhvZCApIHtcbiAgICAgICAgalF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG4gICAgICAgICAgICAvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggZGF0YSApICkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuYWpheCggalF1ZXJ5LmV4dGVuZCgge1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG4gICAgICAgICAgICB9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcbiAgICAgICAgfTtcbiAgICB9ICk7XG5cblxuICAgIGpRdWVyeS5fZXZhbFVybCA9IGZ1bmN0aW9uKCB1cmwgKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuYWpheCgge1xuICAgICAgICAgICAgdXJsOiB1cmwsXG5cbiAgICAgICAgICAgIC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAoIzExMjY0KVxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgICAgICAgZ2xvYmFsOiBmYWxzZSxcbiAgICAgICAgICAgIFwidGhyb3dzXCI6IHRydWVcbiAgICAgICAgfSApO1xuICAgIH07XG5cblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgd3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG4gICAgICAgICAgICB2YXIgd3JhcDtcblxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBodG1sLmNhbGwoIHRoaXMsIGkgKSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCB0aGlzWyAwIF0gKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuICAgICAgICAgICAgICAgIHdyYXAgPSBqUXVlcnkoIGh0bWwsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50ICkuZXEoIDAgKS5jbG9uZSggdHJ1ZSApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdyYXAubWFwKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgfSApLmFwcGVuZCggdGhpcyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuICAgICAgICAgICAgaWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuICAgICAgICAgICAgICAgIGlmICggY29udGVudHMubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50cy53cmFwQWxsKCBodG1sICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGVuZCggaHRtbCApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gKTtcbiAgICAgICAgfSxcblxuICAgICAgICB3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcbiAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCB0aGlzICkud3JhcEFsbCggaXNGdW5jdGlvbiA/IGh0bWwuY2FsbCggdGhpcywgaSApIDogaHRtbCApO1xuICAgICAgICAgICAgfSApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVud3JhcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoICFqUXVlcnkubm9kZU5hbWUoIHRoaXMsIFwiYm9keVwiICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICkuZW5kKCk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cblxuICAgIGpRdWVyeS5leHByLmZpbHRlcnMuaGlkZGVuID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gICAgICAgIHJldHVybiAhalF1ZXJ5LmV4cHIuZmlsdGVycy52aXNpYmxlKCBlbGVtICk7XG4gICAgfTtcbiAgICBqUXVlcnkuZXhwci5maWx0ZXJzLnZpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcblxuICAgICAgICAvLyBTdXBwb3J0OiBPcGVyYSA8PSAxMi4xMlxuICAgICAgICAvLyBPcGVyYSByZXBvcnRzIG9mZnNldFdpZHRocyBhbmQgb2Zmc2V0SGVpZ2h0cyBsZXNzIHRoYW4gemVybyBvbiBzb21lIGVsZW1lbnRzXG4gICAgICAgIC8vIFVzZSBPUiBpbnN0ZWFkIG9mIEFORCBhcyB0aGUgZWxlbWVudCBpcyBub3QgdmlzaWJsZSBpZiBlaXRoZXIgaXMgdHJ1ZVxuICAgICAgICAvLyBTZWUgdGlja2V0cyAjMTA0MDYgYW5kICMxMzEzMlxuICAgICAgICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCA+IDAgfHwgZWxlbS5vZmZzZXRIZWlnaHQgPiAwIHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPiAwO1xuICAgIH07XG5cblxuXG5cbiAgICB2YXIgcjIwID0gLyUyMC9nLFxuICAgICAgICByYnJhY2tldCA9IC9cXFtcXF0kLyxcbiAgICAgICAgckNSTEYgPSAvXFxyP1xcbi9nLFxuICAgICAgICByc3VibWl0dGVyVHlwZXMgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXG4gICAgICAgIHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcbiAgICAgICAgdmFyIG5hbWU7XG5cbiAgICAgICAgaWYgKCBqUXVlcnkuaXNBcnJheSggb2JqICkgKSB7XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuICAgICAgICAgICAgalF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCB0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KCBwcmVmaXggKSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG4gICAgICAgICAgICAgICAgICAgIGFkZCggcHJlZml4LCB2ICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICBidWlsZFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCArIFwiW1wiICsgKCB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9IG51bGwgPyBpIDogXCJcIiApICsgXCJdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhZGl0aW9uYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICggIXRyYWRpdGlvbmFsICYmIGpRdWVyeS50eXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblxuICAgICAgICAgICAgLy8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuICAgICAgICAgICAgZm9yICggbmFtZSBpbiBvYmogKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cbiAgICAgICAgICAgIGFkZCggcHJlZml4LCBvYmogKTtcbiAgICAgICAgfVxuICAgIH1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICAgIGpRdWVyeS5wYXJhbSA9IGZ1bmN0aW9uKCBhLCB0cmFkaXRpb25hbCApIHtcbiAgICAgICAgdmFyIHByZWZpeCxcbiAgICAgICAgICAgIHMgPSBbXSxcbiAgICAgICAgICAgIGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCByZXR1cm4gaXRzIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSA/IHZhbHVlKCkgOiAoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcbiAgICAgICAgICAgICAgICBzWyBzLmxlbmd0aCBdID0gZW5jb2RlVVJJQ29tcG9uZW50KCBrZXkgKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KCB2YWx1ZSApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgdHJhZGl0aW9uYWwgdG8gdHJ1ZSBmb3IgalF1ZXJ5IDw9IDEuMy4yIGJlaGF2aW9yLlxuICAgICAgICBpZiAoIHRyYWRpdGlvbmFsID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICB0cmFkaXRpb25hbCA9IGpRdWVyeS5hamF4U2V0dGluZ3MgJiYgalF1ZXJ5LmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG4gICAgICAgIGlmICggalF1ZXJ5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xuICAgICAgICAgICAgalF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFkZCggdGhpcy5uYW1lLCB0aGlzLnZhbHVlICk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcbiAgICAgICAgICAgIC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuICAgICAgICAgICAgZm9yICggcHJlZml4IGluIGEgKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRQYXJhbXMoIHByZWZpeCwgYVsgcHJlZml4IF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cbiAgICAgICAgcmV0dXJuIHMuam9pbiggXCImXCIgKS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG4gICAgfTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuICAgICAgICB9LFxuICAgICAgICBzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KCBlbGVtZW50cyApIDogdGhpcztcbiAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgLmlzKCBcIjpkaXNhYmxlZFwiICkgc28gdGhhdCBmaWVsZHNldFtkaXNhYmxlZF0gd29ya3NcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KCB0aGlzICkuaXMoIFwiOmRpc2FibGVkXCIgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcnN1Ym1pdHRhYmxlLnRlc3QoIHRoaXMubm9kZU5hbWUgKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QoIHR5cGUgKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgICAgIC5tYXAoIGZ1bmN0aW9uKCBpLCBlbGVtICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCA9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmlzQXJyYXkoIHZhbCApID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcbiAgICAgICAgICAgICAgICB9ICkuZ2V0KCk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cblxuICAgIGpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB9IGNhdGNoICggZSApIHt9XG4gICAgfTtcblxuICAgIHZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG4gICAgICAgICAgICAvLyBGaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuICAgICAgICAgICAgMDogMjAwLFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTlcbiAgICAgICAgICAgIC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuICAgICAgICAgICAgMTIyMzogMjA0XG4gICAgICAgIH0sXG4gICAgICAgIHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cbiAgICBzdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG4gICAgc3VwcG9ydC5hamF4ID0geGhyU3VwcG9ydGVkID0gISF4aHJTdXBwb3J0ZWQ7XG5cbiAgICBqUXVlcnkuYWpheFRyYW5zcG9ydCggZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgICAgIHZhciBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaztcblxuICAgICAgICAvLyBDcm9zcyBkb21haW4gb25seSBhbGxvd2VkIGlmIHN1cHBvcnRlZCB0aHJvdWdoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICAgIGlmICggc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbiApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VuZDogZnVuY3Rpb24oIGhlYWRlcnMsIGNvbXBsZXRlICkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhociA9IG9wdGlvbnMueGhyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYXN5bmMsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBvcHRpb25zLnhockZpZWxkcyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoIG9wdGlvbnMubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuICAgICAgICAgICAgICAgICAgICAvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuICAgICAgICAgICAgICAgICAgICAvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGhlYWRlcnNcbiAgICAgICAgICAgICAgICAgICAgZm9yICggaSBpbiBoZWFkZXJzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoIGksIGhlYWRlcnNbIGkgXSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiggdHlwZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGUgPT09IFwiYWJvcnRcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSBcImVycm9yXCIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvcnMgb24gYW55IHByb3BlcnR5IGFjY2VzcyB0aGF0IGlzIG5vdCByZWFkeVN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCAwLCBcImVycm9yXCIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1c1RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnN0YXR1c1RleHQsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTkgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFOSBoYXMgbm8gWEhSMiBidXQgdGhyb3dzIG9uIGJpbmFyeSAodHJhYy0xMTQyNilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggeGhyLnJlc3BvbnNlVHlwZSB8fCBcInRleHRcIiApICE9PSBcInRleHRcIiAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBiaW5hcnk6IHhoci5yZXNwb25zZSB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExpc3RlbiB0byBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTlcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICggZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG5cblxuLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcbiAgICBqUXVlcnkuYWpheFNldHVwKCB7XG4gICAgICAgIGFjY2VwdHM6IHtcbiAgICAgICAgICAgIHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIFwiICtcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudHM6IHtcbiAgICAgICAgICAgIHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnZlcnRlcnM6IHtcbiAgICAgICAgICAgIFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oIHRleHQgKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gKTtcblxuLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBjcm9zc0RvbWFpblxuICAgIGpRdWVyeS5hamF4UHJlZmlsdGVyKCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcbiAgICAgICAgaWYgKCBzLmNhY2hlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBzLmNhY2hlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBzLmNyb3NzRG9tYWluICkge1xuICAgICAgICAgICAgcy50eXBlID0gXCJHRVRcIjtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG4gICAgalF1ZXJ5LmFqYXhUcmFuc3BvcnQoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXG4gICAgICAgIC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gcmVxdWVzdHNcbiAgICAgICAgaWYgKCBzLmNyb3NzRG9tYWluICkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdCwgY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uKCBfLCBjb21wbGV0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0ID0galF1ZXJ5KCBcIjxzY3JpcHQ+XCIgKS5wcm9wKCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHMudXJsXG4gICAgICAgICAgICAgICAgICAgIH0gKS5vbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZCBlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiggZXZ0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBldnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCBldnQudHlwZSA9PT0gXCJlcnJvclwiID8gNDA0IDogMjAwLCBldnQudHlwZSApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0WyAwIF0gKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSApO1xuXG5cblxuXG4gICAgdmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuICAgICAgICByanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG4gICAgalF1ZXJ5LmFqYXhTZXR1cCgge1xuICAgICAgICBqc29ucDogXCJjYWxsYmFja1wiLFxuICAgICAgICBqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCAoIGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyAoIG5vbmNlKysgKSApO1xuICAgICAgICAgICAgdGhpc1sgY2FsbGJhY2sgXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbi8vIERldGVjdCwgbm9ybWFsaXplIG9wdGlvbnMgYW5kIGluc3RhbGwgY2FsbGJhY2tzIGZvciBqc29ucCByZXF1ZXN0c1xuICAgIGpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb24ganNvbnBcIiwgZnVuY3Rpb24oIHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSICkge1xuXG4gICAgICAgIHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKCByanNvbnAudGVzdCggcy51cmwgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiIDpcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgICAgICAoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuICAgICAgICBpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuICAgICAgICAgICAgLy8gR2V0IGNhbGxiYWNrIG5hbWUsIHJlbWVtYmVyaW5nIHByZWV4aXN0aW5nIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBpdFxuICAgICAgICAgICAgY2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0galF1ZXJ5LmlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cbiAgICAgICAgICAgICAgICBzLmpzb25wQ2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgcy5qc29ucENhbGxiYWNrO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgY2FsbGJhY2sgaW50byB1cmwgb3IgZm9ybSBkYXRhXG4gICAgICAgICAgICBpZiAoIGpzb25Qcm9wICkge1xuICAgICAgICAgICAgICAgIHNbIGpzb25Qcm9wIF0gPSBzWyBqc29uUHJvcCBdLnJlcGxhY2UoIHJqc29ucCwgXCIkMVwiICsgY2FsbGJhY2tOYW1lICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBzLnVybCApID8gXCImXCIgOiBcIj9cIiApICsgcy5qc29ucCArIFwiPVwiICsgY2FsbGJhY2tOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG4gICAgICAgICAgICBzLmNvbnZlcnRlcnNbIFwic2NyaXB0IGpzb25cIiBdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VDb250YWluZXJbIDAgXTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcbiAgICAgICAgICAgIHMuZGF0YVR5cGVzWyAwIF0gPSBcImpzb25cIjtcblxuICAgICAgICAgICAgLy8gSW5zdGFsbCBjYWxsYmFja1xuICAgICAgICAgICAgb3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuICAgICAgICAgICAgd2luZG93WyBjYWxsYmFja05hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG4gICAgICAgICAgICBqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgcHJldmlvdXMgdmFsdWUgZGlkbid0IGV4aXN0IC0gcmVtb3ZlIGl0XG4gICAgICAgICAgICAgICAgaWYgKCBvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoIHdpbmRvdyApLnJlbW92ZVByb3AoIGNhbGxiYWNrTmFtZSApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXN0b3JlIHByZWV4aXN0aW5nIHZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WyBjYWxsYmFja05hbWUgXSA9IG92ZXJ3cml0dGVuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgYmFjayBhcyBmcmVlXG4gICAgICAgICAgICAgICAgaWYgKCBzWyBjYWxsYmFja05hbWUgXSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgcy5qc29ucENhbGxiYWNrID0gb3JpZ2luYWxTZXR0aW5ncy5qc29ucENhbGxiYWNrO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgdGhlIGNhbGxiYWNrIG5hbWUgZm9yIGZ1dHVyZSB1c2VcbiAgICAgICAgICAgICAgICAgICAgb2xkQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrTmFtZSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2VDb250YWluZXIgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIG92ZXJ3cml0dGVuICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgLy8gRGVsZWdhdGUgdG8gc2NyaXB0XG4gICAgICAgICAgICByZXR1cm4gXCJzY3JpcHRcIjtcbiAgICAgICAgfVxuICAgIH0gKTtcblxuXG5cblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4vLyBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xuICAgIGpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiggZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMgKSB7XG4gICAgICAgIGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcbiAgICAgICAgICAgIGtlZXBTY3JpcHRzID0gY29udGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuICAgICAgICB2YXIgcGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKCBkYXRhICksXG4gICAgICAgICAgICBzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG4gICAgICAgIC8vIFNpbmdsZSB0YWdcbiAgICAgICAgaWYgKCBwYXJzZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gWyBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIHBhcnNlZFsgMSBdICkgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XG5cbiAgICAgICAgaWYgKCBzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoICkge1xuICAgICAgICAgICAgalF1ZXJ5KCBzY3JpcHRzICkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgcGFyc2VkLmNoaWxkTm9kZXMgKTtcbiAgICB9O1xuXG5cbi8vIEtlZXAgYSBjb3B5IG9mIHRoZSBvbGQgbG9hZCBtZXRob2RcbiAgICB2YXIgX2xvYWQgPSBqUXVlcnkuZm4ubG9hZDtcblxuICAgIC8qKlxuICAgICAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAgICAgKi9cbiAgICBqUXVlcnkuZm4ubG9hZCA9IGZ1bmN0aW9uKCB1cmwsIHBhcmFtcywgY2FsbGJhY2sgKSB7XG4gICAgICAgIGlmICggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiAmJiBfbG9hZCApIHtcbiAgICAgICAgICAgIHJldHVybiBfbG9hZC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuICAgICAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuICAgICAgICBpZiAoIG9mZiA+IC0xICkge1xuICAgICAgICAgICAgc2VsZWN0b3IgPSBqUXVlcnkudHJpbSggdXJsLnNsaWNlKCBvZmYgKSApO1xuICAgICAgICAgICAgdXJsID0gdXJsLnNsaWNlKCAwLCBvZmYgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0J3MgYSBmdW5jdGlvblxuICAgICAgICBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuICAgICAgICAgICAgLy8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGNhbGxiYWNrID0gcGFyYW1zO1xuICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICkge1xuICAgICAgICAgICAgdHlwZSA9IFwiUE9TVFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3RcbiAgICAgICAgaWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCgge1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuXG4gICAgICAgICAgICAgICAgLy8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2VcbiAgICAgICAgICAgICAgICAvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2RcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIHx8IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgICAgICAgfSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZVRleHQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgIHNlbGYuaHRtbCggc2VsZWN0b3IgP1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCBcIjxkaXY+XCIgKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0ICk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcbiAgICAgICAgICAgICAgICAvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuICAgICAgICAgICAgfSApLmFsd2F5cyggY2FsbGJhY2sgJiYgZnVuY3Rpb24oIGpxWEhSLCBzdGF0dXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSggdGhpcywgcmVzcG9uc2UgfHwgWyBqcVhIUi5yZXNwb25zZVRleHQsIHN0YXR1cywganFYSFIgXSApO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG5cblxuLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcbiAgICBqUXVlcnkuZWFjaCggW1xuICAgICAgICBcImFqYXhTdGFydFwiLFxuICAgICAgICBcImFqYXhTdG9wXCIsXG4gICAgICAgIFwiYWpheENvbXBsZXRlXCIsXG4gICAgICAgIFwiYWpheEVycm9yXCIsXG4gICAgICAgIFwiYWpheFN1Y2Nlc3NcIixcbiAgICAgICAgXCJhamF4U2VuZFwiXG4gICAgXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XG4gICAgICAgIGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG4gICAgICAgIH07XG4gICAgfSApO1xuXG5cblxuXG4gICAgalF1ZXJ5LmV4cHIuZmlsdGVycy5hbmltYXRlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICAgICAgICByZXR1cm4galF1ZXJ5LmdyZXAoIGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uKCBmbiApIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuICAgICAgICB9ICkubGVuZ3RoO1xuICAgIH07XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgd2luZG93IGZyb20gYW4gZWxlbWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFdpbmRvdyggZWxlbSApIHtcbiAgICAgICAgcmV0dXJuIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcbiAgICB9XG5cbiAgICBqUXVlcnkub2Zmc2V0ID0ge1xuICAgICAgICBzZXRPZmZzZXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBpICkge1xuICAgICAgICAgICAgdmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApLFxuICAgICAgICAgICAgICAgIGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHt9O1xuXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG4gICAgICAgICAgICBpZiAoIHBvc2l0aW9uID09PSBcInN0YXRpY1wiICkge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG4gICAgICAgICAgICBjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG4gICAgICAgICAgICBjdXJDU1NMZWZ0ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJsZWZ0XCIgKTtcbiAgICAgICAgICAgIGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuICAgICAgICAgICAgICAgICggY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCApLmluZGV4T2YoIFwiYXV0b1wiICkgPiAtMTtcblxuICAgICAgICAgICAgLy8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcbiAgICAgICAgICAgIC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuICAgICAgICAgICAgaWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcbiAgICAgICAgICAgICAgICBjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG4gICAgICAgICAgICAgICAgY3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyVG9wID0gcGFyc2VGbG9hdCggY3VyQ1NTVG9wICkgfHwgMDtcbiAgICAgICAgICAgICAgICBjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoIGVsZW0sIGksIGpRdWVyeS5leHRlbmQoIHt9LCBjdXJPZmZzZXQgKSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICggb3B0aW9ucy5sZWZ0ICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51c2luZy5jYWxsKCBlbGVtLCBwcm9wcyApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1ckVsZW0uY3NzKCBwcm9wcyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcyA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkub2Zmc2V0LnNldE9mZnNldCggdGhpcywgb3B0aW9ucywgaSApO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBkb2NFbGVtLCB3aW4sXG4gICAgICAgICAgICAgICAgZWxlbSA9IHRoaXNbIDAgXSxcbiAgICAgICAgICAgICAgICBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9LFxuICAgICAgICAgICAgICAgIGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgICAgICAgICBpZiAoICFkb2MgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGl0J3Mgbm90IGEgZGlzY29ubmVjdGVkIERPTSBub2RlXG4gICAgICAgICAgICBpZiAoICFqUXVlcnkuY29udGFpbnMoIGRvY0VsZW0sIGVsZW0gKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgd2luID0gZ2V0V2luZG93KCBkb2MgKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCAhdGhpc1sgMCBdICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzWyAwIF0sXG4gICAgICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuICAgICAgICAgICAgLy8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSxcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuICAgICAgICAgICAgaWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiICkge1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyB0aGVyZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICAgICAgICAgICAgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQoKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuICAgICAgICAgICAgICAgIGlmICggIWpRdWVyeS5ub2RlTmFtZSggb2Zmc2V0UGFyZW50WyAwIF0sIFwiaHRtbFwiICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE9mZnNldCA9IG9mZnNldFBhcmVudC5vZmZzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudFsgMCBdLCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUgKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlICksXG4gICAgICAgICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlIClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gZG9jdW1lbnRFbGVtZW50IGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgIC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cbiAgICAgICAgLy8gICAgZG9jdW1lbnRFbGVtZW50IG9mIHRoZSBwYXJlbnQgd2luZG93XG4gICAgICAgIC8vIDIpIEZvciB0aGUgaGlkZGVuIG9yIGRldGFjaGVkIGVsZW1lbnRcbiAgICAgICAgLy8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuICAgICAgICAvL1xuICAgICAgICAvLyBidXQgdGhvc2UgZXhjZXB0aW9ucyB3ZXJlIG5ldmVyIHByZXNlbnRlZCBhcyBhIHJlYWwgbGlmZSB1c2UtY2FzZXNcbiAgICAgICAgLy8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoaXMgbG9naWMsIGhvd2V2ZXIsIGlzIG5vdCBndWFyYW50ZWVkIGFuZCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCBpbiB0aGUgZnV0dXJlXG4gICAgICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudDtcblxuICAgICAgICAgICAgICAgIHdoaWxlICggb2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9ICk7XG4gICAgICAgIH1cbiAgICB9ICk7XG5cbi8vIENyZWF0ZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AgbWV0aG9kc1xuICAgIGpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcbiAgICAgICAgdmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuICAgICAgICBqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBtZXRob2QsIHZhbCApIHtcbiAgICAgICAgICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KCBlbGVtICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIHdpbiApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luLnNjcm9sbFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgIXRvcCA/IHZhbCA6IHdpbi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbVsgbWV0aG9kIF0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGggKTtcbiAgICAgICAgfTtcbiAgICB9ICk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaTw3LTgrLCBDaHJvbWU8MzctNDQrXG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yMjkyODBcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxuICAgIGpRdWVyeS5lYWNoKCBbIFwidG9wXCIsIFwibGVmdFwiIF0sIGZ1bmN0aW9uKCBpLCBwcm9wICkge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbIHByb3AgXSA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5waXhlbFBvc2l0aW9uLFxuICAgICAgICAgICAgZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuICAgICAgICAgICAgICAgIGlmICggY29tcHV0ZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkID0gY3VyQ1NTKCBlbGVtLCBwcm9wICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBybnVtbm9ucHgudGVzdCggY29tcHV0ZWQgKSA/XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSggZWxlbSApLnBvc2l0aW9uKClbIHByb3AgXSArIFwicHhcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSApO1xuXG5cbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xuICAgIGpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oIGRlZmF1bHRFeHRyYSwgZnVuY05hbWUgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBNYXJnaW4gaXMgb25seSBmb3Igb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGhcbiAgICAgICAgICAgICAgICBqUXVlcnkuZm5bIGZ1bmNOYW1lIF0gPSBmdW5jdGlvbiggbWFyZ2luLCB2YWx1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhID0gZGVmYXVsdEV4dHJhIHx8ICggbWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9jO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXMgb2YgNS84LzIwMTIgdGhpcyB3aWxsIHlpZWxkIGluY29ycmVjdCByZXN1bHRzIGZvciBNb2JpbGUgU2FmYXJpLCBidXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpc24ndCBhIHdob2xlIGxvdCB3ZSBjYW4gZG8uIFNlZSBwdWxsIHJlcXVlc3QgYXQgdGhpcyBVUkwgZm9yIGRpc2N1c3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC83NjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIFwiY2xpZW50XCIgKyBuYW1lIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYm9keVsgXCJzY3JvbGxcIiArIG5hbWUgXSwgZG9jWyBcInNjcm9sbFwiICsgbmFtZSBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBcImNsaWVudFwiICsgbmFtZSBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jc3MoIGVsZW0sIHR5cGUsIGV4dHJhICkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5zdHlsZSggZWxlbSwgdHlwZSwgdmFsdWUsIGV4dHJhICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlLCBudWxsICk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gKTtcbiAgICB9ICk7XG5cblxuICAgIGpRdWVyeS5mbi5leHRlbmQoIHtcblxuICAgICAgICBiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub24oIHR5cGVzLCBudWxsLCBkYXRhLCBmbiApO1xuICAgICAgICB9LFxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG4gICAgICAgICAgICAvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6XG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSApO1xuXG4gICAgalF1ZXJ5LmZuLmFuZFNlbGYgPSBqUXVlcnkuZm4uYWRkQmFjaztcblxuXG5cblxuLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4vLyBmaWxlcyB0aGF0IG1heSB1c2UgZGVmaW5lLCBidXQgbm90IHZpYSBhIHByb3BlciBjb25jYXRlbmF0aW9uIHNjcmlwdCB0aGF0XG4vLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3Rcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbi8vIGRlcml2ZWQgZnJvbSBmaWxlIG5hbWVzLCBhbmQgalF1ZXJ5IGlzIG5vcm1hbGx5IGRlbGl2ZXJlZCBpbiBhIGxvd2VyY2FzZVxuLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG5cbi8vIE5vdGUgdGhhdCBmb3IgbWF4aW11bSBwb3J0YWJpbGl0eSwgbGlicmFyaWVzIHRoYXQgYXJlIG5vdCBqUXVlcnkgc2hvdWxkXG4vLyBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgYW5vbnltb3VzIG1vZHVsZXMsIGFuZCBhdm9pZCBzZXR0aW5nIGEgZ2xvYmFsIGlmIGFuXG4vLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pyYnVya2UvcmVxdWlyZWpzL3dpa2kvVXBkYXRpbmctZXhpc3RpbmctbGlicmFyaWVzI3dpa2ktYW5vblxuXG4gICAgaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAgICAgZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5O1xuICAgICAgICB9ICk7XG4gICAgfVxuXG5cblxuICAgIHZhclxuXG4gICAgLy8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgICAgIF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG4gICAgLy8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbiAgICAgICAgXyQgPSB3aW5kb3cuJDtcblxuICAgIGpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG4gICAgICAgIGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcbiAgICAgICAgICAgIHdpbmRvdy4kID0gXyQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuICAgICAgICAgICAgd2luZG93LmpRdWVyeSA9IF9qUXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4galF1ZXJ5O1xuICAgIH07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAoIzcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4vLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICgjMTM1NjYpXG4gICAgaWYgKCAhbm9HbG9iYWwgKSB7XG4gICAgICAgIHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbiAgICB9XG5cbiAgICByZXR1cm4galF1ZXJ5O1xufSkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kZXAvanF1ZXJ5LTIuMi40LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRlbXBsYXRlPXJlcXVpcmUoJ3Rtb2Rqcy1sb2FkZXIvcnVudGltZScpO1xubW9kdWxlLmV4cG9ydHM9dGVtcGxhdGUoJ2RlcC9jb21wb25lbnQvY2Fyb3VzZWwvdHBsL2Nhcm91c2VsJyxmdW5jdGlvbigkZGF0YSwkZmlsZW5hbWVcbi8qKi8pIHtcbid1c2Ugc3RyaWN0Jzt2YXIgJHV0aWxzPXRoaXMsJGhlbHBlcnM9JHV0aWxzLiRoZWxwZXJzLCRlYWNoPSR1dGlscy4kZWFjaCwkdmFsdWU9JGRhdGEuJHZhbHVlLCRpbmRleD0kZGF0YS4kaW5kZXgsJGVzY2FwZT0kdXRpbHMuJGVzY2FwZSwkb3V0PScnOyRvdXQrPSc8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtd3JhcHBlclwiPiA8dWwgY2xhc3M9XCJjYXJvdXNlbC1pbWdcIj4gJztcbiRlYWNoKCRkYXRhLGZ1bmN0aW9uKCR2YWx1ZSwkaW5kZXgpe1xuJG91dCs9JyA8bGk+IDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj4gPGltZyBzcmM9XCIvdGVzdC9idW5kbGUvaW1nLyc7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZSk7XG4kb3V0Kz0nLmpwZWdcIj4gPC9hPiA8L2xpPiAnO1xufSk7XG4kb3V0Kz0nIDwvdWw+IDxkaXYgY2xhc3M9XCJwcmV2aW91cy1uZXh0XCI+IDxzcGFuIGNsYXNzPVwicHJldmlvdXNcIj4gPCA8L3NwYW4+IDxzcGFuIGNsYXNzPVwibmV4dFwiPiA+IDwvc3Bhbj4gPC9kaXY+IDx1bCBjbGFzcz1cImNhcm91c2VsLW5hdlwiPiAnO1xuJGVhY2goJGRhdGEsZnVuY3Rpb24oJHZhbHVlLCRpbmRleCl7XG4kb3V0Kz0nICc7XG5pZigkaW5kZXggPT0gMCl7XG4kb3V0Kz0nIDxsaSBjbGFzcz1cImFjdGl2ZVwiPic7XG4kb3V0Kz0kZXNjYXBlKCR2YWx1ZSk7XG4kb3V0Kz0nPC9saT4gJztcbn1lbHNle1xuJG91dCs9JyA8bGk+JztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlKTtcbiRvdXQrPSc8L2xpPiAnO1xufVxuJG91dCs9JyAnO1xufSk7XG4kb3V0Kz0nIDwvdWw+IDwvZGl2Pic7XG5yZXR1cm4gbmV3IFN0cmluZygkb3V0KTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kZXAvY29tcG9uZW50L2Nhcm91c2VsL3RwbC9jYXJvdXNlbC50cGxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9