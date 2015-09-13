/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Adi Li",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1234-5678",
		"email": "ctlihk@live.hk",
		"github": "adi-li",
		"twitter": "@ctlihk",
		"location": "Hong Kong"
	},
	"welcomeMessage": "Hello world!",
	"skills": [
		"HTML", "CSS", "JavaScript"
	],
	"biopic": "https://avatars1.githubusercontent.com/u/1830367?v=3&s=460",
	display: function() {
		var headerDOM = $('#header');
		var topContactsDOM = $('#topContacts');
		var footerContactsDOM = $('#footerContacts');

		headerDOM.prepend(HTMLheaderRole.replace('%data%', bio.role));
		headerDOM.prepend(HTMLheaderName.replace('%data%', bio.name));

		for (var contactType in bio.contacts) {
			var contact = HTMLcontactGeneric.replace(
				'%contact%', contactType
			).replace(
				'%data%', bio.contacts[contactType]
			);
			topContactsDOM.append(contact);
			footerContactsDOM.append(contact);
		}

		headerDOM.append(HTMLbioPic.replace('%data%', bio.biopic));
		headerDOM.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

		if (bio.skills.length > 0) {
			headerDOM.append(HTMLskillsStart);
		}
		for (var i = 0; i < bio.skills.length; i++) {
			headerDOM.append(HTMLskills.replace('%data%', bio.skills[i]));
		}
	}
};

var work = {
	"jobs": [
		{
			"employer": "Snaptee Ltd.",
			"title": "Software Engineer",
			"location": "Lai Chi Kok, Hong Kong",
			"dates": "Jan, 2013 - present",
			"description": "Design your personalized t-shirts with Snaptee. Get it from AppStore and Google Play. Create your t-shirt collection with Instagram photos or your favorite snapshot pictures. Snaptee realize your creativity!",
			"url": "https://snaptee.co"
		},
		{
			"employer": "GoBuya",
			"title": "Web 2.0 and Mobile Website Developer",
			"location": "Kwai Chung, Hong Kong",
			"dates": "2011 - Jan, 2013",
			"description": "GoBuya《夠買》團購提供香港最新最Hit團購優惠，包括餐飲團購、美食團購、紅酒團購、戲票團購、優惠券團購、美容團購、化妝品團購、課程團購，團購力量全港最大！",
			"url": "http://www.gobuya.com"
		},
	],
	display: function() {
		var workExperienceDOM = $('#workExperience');
		for (var i = 0; i < work.jobs.length; i++) {
			var job = work.jobs[i];
			var entry = $(HTMLworkStart);
			entry.append(
				HTMLworkEmployer.replace('%data%', job.employer).replace('#', job.url) + 
				HTMLworkTitle.replace('%data%', job.title)
			);
			entry.append(HTMLworkDates.replace('%data%', job.dates));
			entry.append(HTMLworkLocation.replace('%data%', job.location));
			entry.append(HTMLworkDescription.replace('%data%', job.description));
			workExperienceDOM.append(entry);
		};
	}
};

var education = {
	"schools": [
		{
			"name": "The Chinese University of Hong Kong",
			"location": "The Chinese University of Hong Kong",
			"degree": "Bachelor of Engineering",
			"majors": ["Information Engineering"],
			"dates": 2013,
			"url": "http://www.ie.cuhk.edu.hk/main/index.shtml"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title": "iOS Developer Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
		}
	],
	display: function() {
		var educationDOM = $('#education');
		for (var i = 0; i < education.schools.length; i++) {
			var school = education.schools[i];
			var entry = $(HTMLschoolStart);
			entry.append(
				HTMLschoolName.replace('%data%', school.name).replace('#', school.url) +
				HTMLschoolDegree.replace('%data%', school.degree)
			);
			entry.append(HTMLschoolDates.replace('%data%', school.dates));
			entry.append(HTMLschoolLocation.replace('%data%', school.location));
			entry.append(HTMLschoolMajor.replace('%data%', school.majors.join(',')));
			educationDOM.append(entry);
		}

		if (education.onlineCourses.length > 0) {
			educationDOM.append(HTMLonlineClasses);
		}

		for (var i = 0; i < education.onlineCourses.length; i++) {
			var course = education.onlineCourses[i];
			var entry = $(HTMLschoolStart);
			entry.append(
				HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url) +
				HTMLonlineSchool.replace('%data%', course.school)
			);
			entry.append(HTMLonlineDates.replace('%data%', course.date))
			entry.append(
				HTMLonlineURL.replace('%data%', course.url).replace('#', course.url)
			)
			educationDOM.append(entry);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Pitch Perfect",
			"dates": "2015 - 2015",
			"description": "iOS Developer Nanodegree - Project 1",
			"images": [
				"./images/project-1-1.png",
				"./images/project-1-2.png"
			]
		}
	],
	display: function() {
		var projectsDOM = $('#projects');
		for (var i = 0; i < projects.projects.length; i++) {
			var project = projects.projects[i];
			var entry = $(HTMLprojectStart);
			entry.append(
				HTMLprojectTitle.replace('%data%', project.title)
			);
			entry.append(HTMLprojectDates.replace('%data%', project.dates));
			entry.append(HTMLprojectDescription.replace('%data%', project.description));
			for (var j = 0; j < project.images.length; j++) {
				entry.append(HTMLprojectImage.replace('%data%', project.images[j]));
			}
			projectsDOM.append(entry);
		}
	}
}

$(function(){
	bio.display();
	work.display();
	education.display();
	projects.display();

	$('#mapDiv').append(googleMap);
});
