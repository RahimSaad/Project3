var bio = {
    "name": "Rahim Saad",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "+2 01017134416",
        "email": "abdelrhimsaad138@gmail.com",
        "github": "RahimSaad",
        "location": "Cairo, Egypt"
    },
    "welcomeMessage": "Education is the most powerful weapon which you can use to change the world.",
  "skills": ["Software Development", "JavaScript", ".Net Core", "NodeJS", "C#", "C++", "HTML", "CSS", "Unity"],
  "biopic": "images/me.jpg"
};
var education = {
  "schools": [
    {"name": "Luxor University",
     "location": "Luxor",
     "degree": "Computer Science",
     "majors": ["Computer Science"],
     "dates": "2022",
     "url": "http://www.luxor.edu.eg/"

    }
  ],
  "onlineCourses": [
    {"title": "Data Structure And Algorithms",
     "school": "Udacity",
     "date": 2022,
     "url": "https://www.youtube.com/playlist?list=PLoK2Lr1miEm-5zCzKE8siQezj9rvQlnca"
    }
  ]
};

var projects = {
    "projects": [
        
        {
            "title": "Questionnaire",
            "dates": "2015",
            "description": "xxxxxxxxxxxxxxxxxx",
            "images": ["images/Capture3.png"]
            
        },
        {
            "title": "Regulator",
            "dates": "2022",
            "description": "xxxxxxxxxxxxxxxx",
            "images": ["images/Capture1.png"]
            
        },
        {
            "title": "#Hashtag",
            "dates": "2022",
            "description": "xxxxxxxxxxxxxxxxxxxxxxxxxx",
            "images": ["images/Capture2.png"]
            
        }
    ]
};
var work = {
  "jobs": [
    {"employer": "Hassan",
     "title": "CEO",
     "location": "Cairo",
     "dates": "2015 onwards",
     "description": "xxxxxxxxxxxxxxxxxx"
    },
    {"employer": "Ali",
     "title": "Web Master",
     "location": "Cairo",
     "dates": "2022",
     "description": "xxxxxxxxxxxxxxxxxxx"
    }
  ]
};

function appendObjects(placeHolder,valuePlaceHolder,object,position,formatter){
    for(var key in object){
        var data = formatter.replace(placeHolder,key).replace(valuePlaceHolder,object[key]);
        $(position).append(data);
    }
}
function appendObjectList(list,valuePlaceHolder,postion,formatter){
    for(var key in list){
        var data = formatter.replace(valuePlaceHolder,list[key]);
        $(postion).append(data);
    }
}
function replaceValue(value,formatter,placeHolder){
    placeHolder = placeHolder || "%data%";
    return formatter.replace("%data%",value);
}
/*Object Display Functions*/
bio.display = function(name,role){
    name = replaceValue(bio.name,HTMLheaderName);
    role = replaceValue(bio.role,HTMLheaderRole);
    $("#header").prepend(HTMLskillsStart)
                .prepend(replaceValue(bio.biopic, HTMLbioPic))
                .prepend(role)
                .prepend(name)
                .append(replaceValue(bio.welcomeMessage, HTMLWelcomeMsg));
                
    appendObjects("%contact%","%data%",bio.contacts,"#topContacts",HTMLcontactGeneric);
    appendObjectList(bio.skills,"%data%","#skills",HTMLskills);
    $("#topContacts").children().clone().appendTo("#footerContacts");
};
education.display = function(){
    $("#education").append(HTMLschoolClasses);
    for (var i in education.schools) {
      $("#education").append(replaceValue(i, HTMLschoolStart));
      var id = "#school-entry-" + i;
      var school = education.schools[i];
      $(id).append((replaceValue(school.name, HTMLschoolName) + replaceValue(school.degree, HTMLschoolDegree))
           .replace("#", school.url))
           .append(replaceValue(school.dates, HTMLschoolDates))
           .append(replaceValue(school.location, HTMLschoolLocation))
           .append(replaceValue(school.majors, HTMLschoolMajor));
    }

    $("#education").append(HTMLonlineClasses);
    for (var j in education.onlineCourses) {
      $("#education").append(replaceValue(j, HTMLonlineStart));
      var id = "#online-entry-" + j;
      var online = education.onlineCourses[j];
      $(id).append(replaceValue(online.title, HTMLonlineTitle) + replaceValue(online.school, HTMLonlineSchool))
           .append(replaceValue(online.date, HTMLonlineDates))
           .append(replaceValue(online.url, HTMLonlineURL).replace("#", online.url));
    }
  };
projects.display = function(){
    for(var i in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var project = projects.projects[i];
        $(".project-entry:last").append(replaceValue(project.title,HTMLprojectTitle))
           .append(replaceValue(project.dates, HTMLprojectDates))
           .append(replaceValue(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(".project-entry:last").append(replaceValue(project.images[j], HTMLprojectImage));
      }
    }
};

work.display = function(){
     for(var i in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var works = work.jobs[i];
        $(".work-entry:last").append(replaceValue(works.employer,HTMLworkEmployer))
           .append(replaceValue(works.title,HTMLprojectTitle))
           .append(replaceValue(works.dates, HTMLprojectDates))
           .append(replaceValue(works.location,HTMLworkLocation))
           .append(replaceValue(works.description, HTMLprojectDescription))
           .append("</hr>");
           
     }
}
bio.display();

education.display();

projects.display();

work.display();

$("#mapDiv").append(googleMap);
