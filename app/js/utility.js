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
			count = 0;
			maxCount = Math.max(count, maxCount);
		}
	}

	return Math.max(count, maxCount);
}
