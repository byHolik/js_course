"use strict";

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month",
	},
	showAgeAndLangs: function (plan) {
		const {age, skills: {languages}} = plan;
		let result = `Мне ${age} и я владею языками:`;
		for (let value of languages) {
			result += ` ${value.toUpperCase()}`;
		}
		return result;
	}
};

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

function showProgrammingLangs(plan) {
	let result = "";
	const {skills: {programmingLangs}} = plan;
	for (let key in programmingLangs) {
		result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return result;
}

console.log(personalPlanPeter.skills.exp);
console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

