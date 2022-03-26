$(function () {
  //This function will be called on page load
  $("#eduSubmit").click(handleEduButtonClick);
  $("#expSubmit").click(handleExpButtonClick);

  $("eduContainer #newEduBlock").on("click", "button.btn-danger", handleDelete);
});

function handleEduButtonClick() {
  var eduTime = $("#timeYearEdu").val();
  var degree = $("#degree").val();
  var institute = $("#institute").val();
  var eduDescription = $("#eduDescription").val();

  $("#eduContainer").append(`<div id="eduBlock">
 <button class="btn btn-primary border-radius mt-5">
   ${eduTime}
 </button>
 <h5 class="font-weight-bold mt-2">
   ${degree}
 </h5>
 <sub>${institute}</sub>
 <p class="mt-4">
   ${eduDescription}
 </p>
 <button
    type="button"
    class="btn btn-danger border-radius ">
    Delete
 </button>
</div>`);
}
function handleExpButtonClick() {
  var expTime = $("#timeYearExp").val();
  var job = $("#job").val();
  var company = $("#company").val();
  var expDescription = $("#expDescription").val();

  $("#expContainer").append(`<div id = newEduBlock">
   <button class="btn btn-primary border-radius mt-5">
     ${expTime}
   </button>
   <h5 class="font-weight-bold mt-2">
     ${job}
   </h5>
   <sub>${company}</sub>
   <p class="mt-4">
     ${expDescription}
   </p>
  </div>`);
}
function handleDelete() {
  $(this).remove();
}
