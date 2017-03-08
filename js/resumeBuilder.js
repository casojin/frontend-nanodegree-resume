/*
This is empty on purpose! Your code to build the resume will go here.
 */

 
// $("#main").append("Matti");


/*
var awesomeThoughts="I am Matti and I am awesome!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("awesome","fun");

$("#main").append(funThoughts);
*/
var mySkills = ["programming", "novel writing", "shooting"];

var bio = {
	"name" : "Matti",
	"role" : "GIS Developer",
	"contacts" : {
		"mobile" : "0895280081",
		"email" : "kongler@hotmail.com",
		"location" : "Hive City of Bangkok"
		},
	"photo" : "images/me.jpg",
	"skills" : mySkills,
	"welcome" : "Courage and Honour!"
	};

var education = {
	"schools": [
			{
			"name": "Saint Dominic",
			"type": "Primary School"
			},
			{
			"name": "Bodindecha",
			"type": "High School"
			},
			{
			"name": "Chulalongkorn University",
			"type": "Bachlor Degree",
			"faculty": "Engineering",
			"major": "Survey Engineer"
			}
		]
	};
	
var work = {
	"jobs":
	[	{
		"employer" : "PTTEP",
		"title"    : "Data Management",
		"date"     : "2008-present",
		"location" : "Bangkok"
		},
		{
		"employer" : "Aomkod",
		"title"    : "Fianancial Supporter",
		"date"     : "2016-present",
		"location" : "Anywhere with internet"
		}
	]
	};

	
var project = {
		"assignment" :[
				{
				"name": "GIS Portal"
				},
				{
				"name": "Exploration Insight"
				},
				{
				"name": "Geodetic database"
				}
			]
	};
	
	
	
	
	
	

var formattedBio = [];

formattedBio.push(HTMLheaderName.replace("%data%",bio.name));
formattedBio.push(HTMLheaderRole.replace("%data%",bio.role));
formattedBio.push(HTMLwelcomeMsg.replace("%data%",bio.welcome));
formattedBio.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
formattedBio.push(HTMLemail.replace("%data%",bio.contacts.email));
formattedBio.push(HTMLlocation.replace("%data%",bio.contacts.location));
formattedBio.push(HTMLbioPic.replace("%data%",bio.photo));



for (i=formattedBio.length; i>=0;i--) {
//for (i=0; i<formattedBio.length;i++) {
	$("#header").prepend(formattedBio[i]);
};

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills="";
	
	for (i=0; i<bio.skills.length;i++){
		formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
};


for (item in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[item].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
};

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



