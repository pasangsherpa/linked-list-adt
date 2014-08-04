/*!
 * linked-list-adt - Linked List ADT for browser and nodejs
 * @version v0.0.0 - Mon Aug 04 2014
 * @link https://github.com/pasangsherpa/linked-list-adt
 * @author Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
 * @license MIT
 */
(function() {
    'use strict';
    var LinkedList = {};

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return LinkedList;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = LinkedList;
    } else {
        window.LinkedList = LinkedList;
    }
})();
