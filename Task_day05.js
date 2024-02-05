var res = [{
"Name":"Deephan Chakravarthy",
"Age":"24",
"e-mailId":"deephan221099@gmail.com",
"DOB":"22/10/1999",
"Educational Qualification":{
"UG":
{"Institute":"Sri Krishna College of Technology",
"CGPA or percentage":"8.45",
"Year of passing":"2021"
},
"HSC":
{
"Institute":"Bharathi Vidhya Bhavan",
"CGPA or percentage":"92.33%",
"Year of passing":"2017"
},
"SSLC":
{
"Institute":"Bharathi Vidhya Bhavan",
"CGPA or percentage":"92.33%",
"Year of passing":"2017"
} },

"Professional Qualification":{
"Site Engineer":{
 "Organsation":"Annai Infratech pvt,ltd",
 "Roles":
 " Responsible for the work carrying out in the construction site with all the safety protocols & with the atmost quality assurance",
  "Responsible for the problem solving of the technical issues in the client side with proper communication skills,Responsible for the tasks to be completed within the bounded time",
  "Responsible for the quality of the materials purchased and used in the site after checking the field tests in the construction site"   
},
"Graduated Apprentice Training":{
"Organisation":"Ashok Leyland",
"Roles":
" Responsible for complete project management by involving in planning, scheduling and control of multi-disciplinary teams",
 "Responsible for complete estate maintenance which includes 5S implementations house-keeping gardening and horticulture drive",
 "Responsible for grievance handling of civil complaints",
 "Arriving the monthly planning based on budgetary and time-bound schedule",
 "Cost estimation of different civil processes through creating of BOQ",
 "Ensuring purchase orders are raised distributed and expedited on time as per Ashok Leyland's policies and procedures",
 "Managing supplier relationship monitoring service levels providing feedback and resolving internal customer queries",
 "Monitoring of workmen engaged through different contractors",
 "Certification of service provider's bills after manual verification of the work through measurement checking on site"
}
}
}
}
];
//For-in loop
for(var key in res){
    console.log(res);
  }

//For loop
for(var i=0; i<res.length; i++){
    console.log(res[i]);
}

//For of loop
for(var key of res){
    console.log(res);
}

//For each loop
res.forEach((ele)=>console.log(ele));