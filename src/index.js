module.exports = function check(str, bracketsConfig) {
    let arrayStr = str.split( '' );

    for (let i = 0; i < arrayStr.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (arrayStr[i] === bracketsConfig[j][0] && arrayStr[i + 1] === bracketsConfig[j][1]) {
                arrayStr.splice(i, 2);
                i = -1;
            }
		}
		if (arrayStr.length === 0){
            return true;
        }
	}

	return false;
}
