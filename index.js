var fs = require("fs");
var Handlebars = require("handlebars");

module.exports = {
  render: render
};

function render(resume) {
  var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
  var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
  return Handlebars.compile(template)({
    css: css,
    resume: resume
  });
}

Handlebars.registerHelper("formatDate", function(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en", {
    month: "short",
    year: "numeric"
  });
});

Handlebars.registerHelper("join", function(arr, separator) {
  separator = typeof separator === "string" ? separator : ", ";
  return arr.join(separator);
});

Handlebars.registerHelper("nl2br", function(value) {
  return (value || "").replace(/\n/g, "</p><p>");
});
