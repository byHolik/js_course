"use strict";

const students = ["Peter", "Andrew", "Ann", "Mark", "Josh", "Sandra", "Cris", "Bernard", "Takesi", "Sam", "Zlatan"];

function sortStudentsByGroups(arr) {
	const sortedArr = arr.slice().sort(),
		  teamQty = 3,
		  teamMemberQty = 3;
	let result = [];
	let counter = 0;
	let noTeamStudents = [];

	for (let team = 0; team < teamQty; team++) {
		result.push([]);
		for (let teamMember = 0; teamMember < teamMemberQty; teamMember++, counter++) {
			result[team].push(sortedArr[counter]);
		}
	}
	noTeamStudents.push([]);
	noTeamStudents[0] = "-";    
	for (let i = 0; i < arr.length - counter; i++) {
		noTeamStudents[i] = sortedArr[counter + i];
	} 
	result.push(`Оставшиеся студенты: ${noTeamStudents.join(", ")}`);
	return result;
}

console.log(sortStudentsByGroups(students));