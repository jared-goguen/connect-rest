module.exports = {
    join: function(array, delimiter) {
        if (delimiter === undefined) {
            delimiter = ' ';
        }

        if (array.length === 0) {
            return ''
        }

        var string = array[0];
        
        for (let i=0; i < array.length; i++) {
            string += delimiter + array[i];
        }

        return string;
    },

    streak: function(array, value) {
        var maxCount = 0;
        var count = 0;

        for (let i=0; i < array.length; i++) {
            if (array[i] === value) {
                count += 1;
            } else {
                maxCount = Math.max(count, maxCount);
                count = 0;
            }
        }

        return Math.max(count, maxCount);
    },

    toTitleCase: function(string) {
        return string.replace(/\b\w+/g, s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase());
    },

    basePath: function(string) {
        var m = string.match('/?([^/]*)/?.*');
        var base = m.length > 1 ? m[1] : '';
        return base ? base : 'home'
    },

    isEmptyObject: function(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
};