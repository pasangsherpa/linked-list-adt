(function() {
	'use strict';
	var LinkedList = function() {
		var root = null;
		var count = 0;

		function Node(element) {
			this.element = element || null;
			this.next = null;
		}

		function add(element) {
			var node = new Node(element),
				current = null;
			if (root === null) {
				root = node;
			} else {
				current = root;
				while (current.next !== null) {
					current = current.next;
				}
				current.next = node;
			}
			count++;
		}

		function remove(index) {
			var node = get(index? index : count - 1);
			if (typeof index !== 'undefined') {
				root = removeAt(index, root);
			} else {
				root = removeAt(count - 1, root);
			}
			count--;
			return node;
		}

		function removeAt(index, node) {
			if (node === null) {
				throw new Error('removeAt(): No such element found.');
			} else if (index === 0) {
				return node.next;
			} else {
				node.next = removeAt(index - 1, node.next);
			}
			return node;
		}

		function first() {
			if (isEmpty()) {
				throw new Error('first(): List is empty.');
			}
			return root;
		}

		function get(index) {
			if (index < 0 || index > count || root === null) {
				return null;
			}
			var current = root,
				i = 0;
			for (; i < index; i++) {
				current = current.next;
			}
			return current;
		}

		function isEmpty() {
			return count === 0;
		}

		function size() {
			return count;
		}

		return {
			add: add,
			remove: remove,
			first: first,
			get: get,
			isEmpty: isEmpty,
			size: size
		};
	};

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
