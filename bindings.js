window.onload = function () {
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

function handleDelete(e) {
  var tag = e.target;
  var divCreated = tag.parentNode;
  divCreated.remove();
}
