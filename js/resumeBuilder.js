var bio = {
    "name": "Mikhak Misaghian",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "1234567890",
        "email": "contactmikhak@gmail.com",
        "github": "MikhakMisaghian",
        "twitter": "@MikhakM",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "Twitter Bootstrap", "Javascript", "Jquery", "Ajax", "Php", "Mysql", "Node.js", "C++/C", "Java", "Git"
    ],
    "bioPic": "images/bioPic.jpg",
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);        

        var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPicture);

        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        // Code to display the skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(skill in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
        }

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLocation);        

    }
}

var education = {
    "schools": [
        {
            "name": "University of Nevada, Las Vegas",
            "location": "Las Vegas, NV",
            "degree": "B.S.",
            "majors": ["Computer Science", "Minor: Mathematics"],
            "dates": "2012"
        },
        {
            "name": "College of Southern Nevada, Las Vegas",
            "location": "Las Vegas, NV",
            "degree": "Some college",
            "majors": ["General Education"],
            "dates": "2010"
        }       

    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nano Degree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/nd001"
        }
    ],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        for (school in education.schools) {
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
            var majors = "";
            for (var i = 0; i < education.schools[school].majors.length; i++) {
                majors += " " + education.schools[school].majors[i];
                console.log(majors);
            }
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));

        }

        for (onlineCourse in education.onlineCourses) {
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
        }       
    }
};

var work = {
    "jobs": [
        {
            "employer": "Biggerpan, Inc",
            "title": "Software Engineer",
            "location": "San Francisco, CA",
            "dates": "June 2014 - present",
            "description": "LAMP, HTML, CSS, Java Script, Jquery, Ajax, Asana"
        },
        {
            "employer": "Bally Technologies",
            "title": "Software Engineer",
            "dates": "May 2013 - March 2014",
            "location": "Las Vegas, NV",
            "description": "Developed tools for Unity: Languages Used: C#, Improved company's internal tools: Languages/frameworks Used: C++, Python, bash scripting, C#, .NET, OS improvements: Languages Used: C, C++, shell scripting"

        }
    ],
    "display": function () {
        if (work.jobs.length > 0) {
            for (job in work.jobs) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmploer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmploerTitle = formattedEmploer + formattedTitle;
                $(".work-entry:last").append(formattedEmploerTitle);

                var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDate);        
                $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);     
            }
        }   
    }    
}

var projects = {
    "projects": [
        {
            "title": "Flappy Pets", 
            "dates": "2014",
            "description": "Unity Game Engine, C#, NGUI",
            "images": ["images/flappyPets.jpeg"],
            "url": "https://itunes.apple.com/us/app/flappy-pets-for-cat-puppy/id824655920?mt=8"
        },
        {
            "title": "Flappy Thrones", 
            "dates": "2014",
            "description": "Unity Game Engine, C#, NGUI",
            "images": ["images/flappyThrones.jpeg"],
            "url": "https://itunes.apple.com/us/app/flappy-thrones-game-ice-bird/id848009103?mt=8"
        },
                        {
            "title": "MSP(Mobile Spray Painting)", 
            "dates": "2012",
            "description": "Won 1st Place of Computer Science at UNLV Engineering Senior Design, Fall 2012",
            "images": ["http://placehold.it/350x150"],
            "url": "http://www.unlv.edu/news-story/winners-fall-2012-senior-design-competition"
        },
        {
            "title": "PriceDora’s Box application", 
            "dates": "2011",
            "description": "won best use of Mashery.com API in Zappos Recommerce HackDay (recommerceday.com)",
            "images": ["http://placehold.it/350x150"],
            "url": ""
        }   

    ],
    "display": function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            $(".project-entry:last").append(HTMLprojectUrl.replace("%data%", projects.projects[project].url));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));     
        }
    }    
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
// function to internationalize the name
function inName (name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
