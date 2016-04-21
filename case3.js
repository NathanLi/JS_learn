var scope = "gloabl";
(function f() {
  console.log(scope);
  var scope = "local";
  console.log(scope);
})();
