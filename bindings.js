window.onload = function () {
  var eduSubmit = document.getElementById("eduSubmit");
  eduSubmit.onclick = updateEduTime;
  document
    .getElementById("timeYearEdu")
    .addEventListener("change", updateEduTime);
};
function updateEduTime() {
  var eduTime = document.getElementById("timeYearEdu").value;
  var eduTimeOutput = document.getElementById("newDateEdu");
  eduTimeOutput.innerHTML = eduTime.value;
}
