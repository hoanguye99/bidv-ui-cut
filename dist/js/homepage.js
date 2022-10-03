const allHomepageStepsContentDropdown = document.querySelectorAll(
  '#homepage-steps-content-dropdown'
);

for (var i = 0; i < allHomepageStepsContentDropdown.length; i++)
  (function (i) {
    allHomepageStepsContentDropdown[i].onclick = function (event) {
      var parent = allHomepageStepsContentDropdown[i].parentNode;
      parent.classList.toggle("open");
    };
  })(i);
