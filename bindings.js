window.onload = function () {
  var eduSubmit = document.getElementById("eduSubmit");
  eduSubmit.onclick = updateEduTime;
};
function updateEduTime() {
  var eduDiv = document.getElementById("eduContainer");

  //------------------------------------------------------------

  var eduTime = document.getElementById("timeYearEdu").value;
  var newEduText = document.createTextNode(eduTime);
  var newButton = document.createElement("button");
  newButton.className = "btn btn-primary border-radius mt-5";

  newButton.appendChild(newEduText);
  eduDiv.appendChild(newButton);

  //------------------------------------------------------------

  var degree = document.getElementById("degree").value;
  var newEduDegree = document.createTextNode(degree);
  var heading = document.createElement("h5");
  heading.className = "font-weight-bold mt-2";

  heading.appendChild(newEduDegree);
  eduDiv.appendChild(heading);

  //------------------------------------------------------------

  var institute = document.getElementById("institute").value;
  var newEduInstitute = document.createTextNode(institute);
  var subEduInstitute = document.createElement("sub");

  subEduInstitute.appendChild(newEduInstitute);
  eduDiv.appendChild(subEduInstitute);

  //------------------------------------------------------------

  var eduDescription = document.getElementById("eduDescription").value;
  var newEduDescription = document.createTextNode(eduDescription);
  var pEduDescription = document.createElement("p");
  pEduDescription.className = "mt-4";

  pEduDescription.appendChild(newEduDescription);
  eduDiv.appendChild(pEduDescription);

  //-------------------------------------------------------------------------------------------------------

  var deleteButton = document.createElement("button");

  deleteButton.innerHTML = "Delete";
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger border-radius mt-1";
  deleteButton.onclick = handleDelete;

  eduDiv.appendChild(deleteButton);
}

function handleDelete(e) {
  var tag = e.target;
  var container = tag.parentNode;
  container.tag.removeChild();
}
