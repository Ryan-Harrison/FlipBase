Class(function Cookie() {
	
	var _self = this;

	// get the value of a cookie
	// @param sKey string  the name of the cookie to get
	this.get = function (sKey){
		if (!sKey) { return null; }
		return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	};

	// set the value of a cookie
	// @param sKey string  the name of the new cookie
	// @param sValue string  the value of the new cookie
	// @param vEnd integer  the maximum age of the cookie in seconds
	// @param sPath string  the path the cookie is readable from
	// @param sDomain string  the domain the cookie is readable from
	// @param bSecure boolean  whether to use https
	this.set = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
		if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }

		var sExpires = "";
		if (vEnd) {
			switch (vEnd.constructor) {
				case Number:
				sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
				break;

				case String:
				sExpires = "; expires=" + vEnd;
				break;

				case Date:
				sExpires = "; expires=" + vEnd.toUTCString();
				break;
			}
		}

		document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
		return true;
	};

	// remove/delete a cookie
	// @param sKey string  the name of the cookie
	// @param sPath string  the path the cookie is readable from
	// @param sDomain string  the domain the cookie is readable from
	this.remove = function (sKey, sPath, sDomain) {
		if (!this.exists(sKey)) { return false; }

		document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
		return true;
	};

	// check if a cookie exists
	// @param sKey string  the name of the cookie
	this.exists = function (sKey) {
		if (!sKey) { return false; }
		return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	};

	// get a list of all set cookies as an array
	this.list = function () {
		var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
		for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
		return aKeys;
	};

}, 'static');