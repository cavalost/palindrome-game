const _isPalindrome = cleanWord => {
	const cleanWordLength = cleanWord.length;
	for (let i = 0; i < cleanWordLength / 2; i++) {
		if (cleanWord[i] !== cleanWord[cleanWordLength - 1 - i]) {
			return false;
		}
	}
	return true;
};

const score = (word = '') => {
	const cleanWord = word.toLowerCase().replace(/[\W_]/g, '');
	return _isPalindrome(cleanWord) ? word.length : 0;
};

module.exports = {
	score
};
