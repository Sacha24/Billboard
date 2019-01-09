function new_model() {
  var form = document.createElement("form");
  form.className = "model_inCreation";
  form.id = "submit_form";
  form.setAttribute("action", "/billboard/");
  form.setAttribute("method", "POST");

  var fieldset = document.createElement("fieldset");
  fieldset.className = "border_dashed";

  var legend = document.createElement("legend");
  legend.className = "date";
  legend.innerHTML = "09/01/2019";

  var title = document.createElement("input");
  title.className = "input_title";
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Title");
  title.setAttribute("name", "title");

  var para = document.createElement("textarea");
  para.className = "TA";
  para.setAttribute("placeholder", "Your message here ...");
  para.setAttribute("name", "message");

  var signature = document.createElement("input");
  signature.className = "input_author";
  signature.setAttribute("type", "text");
  signature.setAttribute("placeholder", "Author");
  signature.setAttribute("name", "author");

  form.appendChild(fieldset);
  fieldset.appendChild(legend);
  fieldset.appendChild(title);
  fieldset.appendChild(para);
  fieldset.appendChild(signature);
  $(".container").append(form);

  $(".add_model").css("display", "none");
  $(".cancel").css("display", "block");
  $(".validate").css("display", "block");
}
$(".add_model").on("click", new_model);

function cancel_model() {
  $(".add_model").css("display", "block");
  $(".cancel").css("display", "none");
  $(".validate").css("display", "none");
  $(".model_inCreation").remove();
}
$(".cancel").on("click", cancel_model);

function validate_model() {
  $(".add_model").css("display", "block");
  $(".cancel").css("display", "none");
  $(".validate").css("display", "none");
  $(".model_inCreation").removeClass();
}
$(".validate").on("click", validate_model);


$(".validate").click(function(e) {
  e.preventDefault();
  var data = {
    title: $(".input_title").val(),
    message: $(".TA").val(),
    author: $(".input_author").val()
  };
  $.ajax({
    type: "POST",
    data: data,
    dataType: "json",
  });
});
