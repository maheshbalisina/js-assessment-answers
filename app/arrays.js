exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function (arr, item) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function (arr) {
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove: function (arr, item) {
        var returnArray = [];
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if (arr[i] !== item) {
                returnArray.push(arr[i]);
            }
        }

        return returnArray;
    },

    removeWithoutCopy: function (arr, item) {
        var i;
        var len = arr.length;
        for (i = 0; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }

        return arr;
    },

    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        arr.shift(arr);
        return arr;
    },

    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        var count = 0;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }

        return count;
    },

    duplicates: function (arr) {
        var visited = {};
        var duplicatesArray = [];

        for (var i = 0; i < arr.length; i++) {
            visited[arr[i]] = visited[arr[i]] ? visited[arr[i]] + 1 : 1;
        }

        for (var item in visited) {
            if (visited.hasOwnProperty(item) && visited[item] > 1) {
                duplicatesArray.push(parseInt(item, 10));
            }
        }

        return duplicatesArray;
    },

    square: function (arr) {
        var returnArray = [];

        for (var i = 0; i < arr.length; i++) {
            returnArray.push(arr[i] * arr[i]);
        }

        return returnArray;
    },

    findAllOccurrences: function (arr, target) {
        var returnArray = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                returnArray.push(i);
            }
        }

        return returnArray;
    }
};