import jQuery from 'jquery';

export function join(array, delimiter) {
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
}

export function streak(array, value) {
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
}

export function toTitleCase(string) {
    return string.replace(/\b\w+/g, s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase());
}

export function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}