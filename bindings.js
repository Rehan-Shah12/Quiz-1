window.onload = function () {
  var expSubmit = document.getElementById("expSubmit");
  expSubmit.onclick = updateExpTime;
  var eduSubmit = document.getElementById("eduSubmit");
  eduSubmit.onclick = updateEduTime;
};
function updateEduTime() {
  var eduDiv = document.getElementById("eduContainer");

  var newEduDivCreated = document.createElement("div");

  //------------------------------------------------------------

  var eduTime = document.getElementById("timeYearEdu").value;
  var newEduText = document.createTextNode(eduTime);
  var newButton = document.createElement("button");
  newButton.className = "btn btn-primary border-radius mt-5";

  newButton.appendChild(newEduText);
  newEduDivCreated.appendChild(newButton);
  eduDiv.appendChild(newEduDivCreated);

  //------------------------------------------------------------

  var degree = document.getElementById("degree").value;
  var newEduDegree = document.createTextNode(degree);
  var heading = document.createElement("h5");
  heading.className = "font-weight-bold mt-2";

  heading.appendChild(newEduDegree);
  newEduDivCreated.appendChild(heading);
  eduDiv.appendChild(newEduDivCreated);

  //------------------------------------------------------------

  var institute = document.getElementById("institute").value;
  var newEduInstitute = document.createTextNode(institute);
  var subEduInstitute = document.createElement("sub");

  subEduInstitute.appendChild(newEduInstitute);
  newEduDivCreated.appendChild(subEduInstitute);
  eduDiv.appendChild(newEduDivCreated);

  //------------------------------------------------------------

  var eduDescription = document.getElementById("eduDescription").value;
  var newEduDescription = document.createTextNode(eduDescription);
  var pEduDescription = document.createElement("p");
  pEduDescription.className = "mt-4";

  pEduDescription.appendChild(newEduDescription);
  newEduDivCreated.appendChild(pEduDescription);
  eduDiv.appendChild(newEduDivCreated);

  //-------------------------------------------------------------------------------------------------------

  var deleteButton = document.createElement("button");

  deleteButton.innerHTML = "Delete";
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger border-radius mt-1";
  deleteButton.onclick = handleDelete;

  newEduDivCreated.appendChild(deleteButton);
  eduDiv.appendChild(newEduDivCreated);
}
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
function updateExpTime() {
  var expDiv = document.getElementById("expContainer");
  var newExpDivCreated = document.createElement("div");

  var expTime = document.getElementById("timeYearExp").value;
  var newExpText = document.createTextNode(expTime);
  var newExpButton = document.createElement("button");
  newExpButton.className = "btn btn-primary border-radius mt-5";

  newExpButton.appendChild(newExpText);
  newExpDivCreated.appendChild(newExpButton);
  expDiv.appendChild(newExpDivCreated);

  //-------------------------------------------------------------------------------------------------------
  var job = document.getElementById("job").value;
  var newExpJob = document.createTextNode(job);
  var heading = document.createElement("h5");
  heading.className = "font-weight-bold mt-2";

  heading.appendChild(newExpJob);
  newExpDivCreated.appendChild(heading);
  expDiv.appendChild(newExpDivCreated);
  //-------------------------------------------------------------------------------------------------------
  var company = document.getElementById("company").value;
  var newEduCompany = document.createTextNode(company);
  var subEduCompany = document.createElement("sub");

  subEduCompany.appendChild(newEduCompany);
  newExpDivCreated.appendChild(subEduCompany);
  expDiv.appendChild(newExpDivCreated);

  //-------------------------------------------------------------------------------------------------------
  var expDescription = document.getElementById("expDescription").value;
  var newExpDescription = document.createTextNode(expDescription);
  var pExpDescription = document.createElement("p");
  pExpDescription.className = "mt-4";

  pExpDescription.appendChild(newExpDescription);
  newExpDivCreated.appendChild(pExpDescription);
  expDiv.appendChild(newExpDivCreated);
  //-------------------------------------------------------------------------------------------------------
  var deleteButton = document.createElement("button");

  deleteButton.innerHTML = "Delete";
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger border-radius mt-1";
  deleteButton.onclick = handleDelete;

  newExpDivCreated.appendChild(deleteButton);
  expDiv.appendChild(newExpDivCreated);

  //-------------------------------------------------------------------------------------------------------
}
//-------------------------------------------------------------------------------------------------------

function handleDelete(e) {
  var tag = e.target;
  var divCreated = tag.parentNode;
  divCreated.remove();

  // function eduDelete() {
  //   var div = getElementById("eduBlock");
  //   div.remove();
  // }
}
