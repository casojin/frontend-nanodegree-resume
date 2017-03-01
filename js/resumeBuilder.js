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
		"name" : "PTTEP",
		"title": "Data Management"
		},
		{
		"name" : "Aomkod",
		"title": "Fianancial Supporter"
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
	
	
	
	
	
	
/*
var formattedBio = [];

formattedBio.push(HTMLheaderName.replace("%data%",bio.name));
formattedBio.push(HTMLheaderRole.replace("%data%",bio.role));
formattedBio.push(HTMLwelcomeMsg.replace("%data%",bio.welcome));
formattedBio.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
formattedBio.push(HTMLemail.replace("%data%",bio.contacts.email));
formattedBio.push(HTMLlocation.replace("%data%",bio.contacts.location));
formattedBio.push(HTMLbioPic.replace("%data%",bio.photo));
formattedBio.push(HTMLskillsStart);
formattedBio.push(HTMLskills.replace("%data%",bio.skills));


for (i=formattedBio.length; i>-1;i--) {
//for (i=0; i<formattedBio.length;i++) {
	$("#header").prepend(formattedBio[i]);
};

*/

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



