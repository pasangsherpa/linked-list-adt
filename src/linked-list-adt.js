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
