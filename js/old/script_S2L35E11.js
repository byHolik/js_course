const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	if (arr.length > 0) {
		let result = "Семья состоит из:";
		for (let name of family) {
			result += ` ${name}`;
		}
		return result;
	} else {
		return "Семья пуста";
	}
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	for (let value of arr) {
		console.log(value.toLowerCase());
	}
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);