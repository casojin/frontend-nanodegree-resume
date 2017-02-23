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
		"location" : "Calth"
		},
	"photo" : "images/me.jpg",
	"skills" : mySkills,
	"welcome" : "Courage and Honour!"
	};

var formattedBio = [];
formattedBio.push(HTMLheaderName.replace("%data%",bio.name));
formattedBio[1]=HTMLheaderRole.replace("%data%",bio.role);
formattedBio[2]=HTMLmobile.replace("%data%",bio.contacts.mobile);
formattedBio[3]=HTMLemail.replace("%data%",bio.contacts.email);
formattedBio[4]=HTMLlocation.replace("%data%",bio.contacts.location);
formattedBio[5]=HTMLskills.replace("%data%",bio.skills);
formattedBio[6]=HTMLbioPic.replace("%data%",bio.photo);

for (i=formattedBio.length; i>-1;i--) {
//for (i=0; i<formattedBio.length;i++) {
	$("#header").prepend(formattedBio[i]);
};

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);



