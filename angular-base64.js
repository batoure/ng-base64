
(function(){
  'use strict';

  // Prepare the 'ngBase64' module for subsequent registration of controllers and delegates
   angular.module('ngBase64', []);


})();
(function(){
  'use strict';

  angular.module('ngBase64')
         .service('base64', [base64]);

  /**
   * Base64 encode decode Service
   * 
   *
   * @returns {{base64: object}
   * @constructor
   */
  function base64(){
      self = this
     //private modal prevents duplicate calls from instantiating multiples of the modal
         self._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

         self.encode = function (e) {
             var t = "";
             var n, r, i, s, o, u, a;
             var f = 0;
             e = self._utf8_encode(e);
             while (f < e.length) {
                 n = e.charCodeAt(f++);
                 r = e.charCodeAt(f++);
                 i = e.charCodeAt(f++);
                 s = n >> 2;
                 o = (n & 3) << 4 | r >> 4;
                 u = (r & 15) << 2 | i >> 6;
                 a = i & 63;
                 if (isNaN(r)) {
                     u = a = 64
                 } else if (isNaN(i)) {
                     a = 64
                 }
                 t = t + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(u) + _keyStr.charAt(a)
             }
             return t
         };
         self.decode = function (e) {
             var t = "";
             var n, r, i;
             var s, o, u, a;
             var f = 0;
             e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
             while (f < e.length) {
                 s = _keyStr.indexOf(e.charAt(f++));
                 o = _keyStr.indexOf(e.charAt(f++));
                 u = _keyStr.indexOf(e.charAt(f++));
                 a = _keyStr.indexOf(e.charAt(f++));
                 n = s << 2 | o >> 4;
                 r = (o & 15) << 4 | u >> 2;
                 i = (u & 3) << 6 | a;
                 t = t + String.fromCharCode(n);
                 if (u != 64) {
                     t = t + String.fromCharCode(r)
                 }
                 if (a != 64) {
                     t = t + String.fromCharCode(i)
                 }
             }
             t = self._utf8_decode(t);
             return t
         };
         self._utf8_encode = function (e) {
             e = e.replace(/\r\n/g, "\n");
             var t = "";
             for (var n = 0; n < e.length; n++) {
                 var r = e.charCodeAt(n);
                 if (r < 128) {
                     t += String.fromCharCode(r)
                 } else if (r > 127 && r < 2048) {
                     t += String.fromCharCode(r >> 6 | 192);
                     t += String.fromCharCode(r & 63 | 128)
                 } else {
                     t += String.fromCharCode(r >> 12 | 224);
                     t += String.fromCharCode(r >> 6 & 63 | 128);
                     t += String.fromCharCode(r & 63 | 128)
                 }
             }
             return t
         };
        self._utf8_decode = function (e) {
             var t = "";
             var n = 0;
             var r = 0,c1 = 0, c2 = 0;
             while (n < e.length) {
                 r = e.charCodeAt(n);
                 if (r < 128) {
                     t += String.fromCharCode(r);
                     n++
                 } else if (r > 191 && r < 224) {
                     c2 = e.charCodeAt(n + 1);
                     t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                     n += 2
                 } else {
                     c2 = e.charCodeAt(n + 1);
                     c3 = e.charCodeAt(n + 2);
                     t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                     n += 3
                 }
             }
             return t
         };
        self.$onInit = function(){};
     }

})();