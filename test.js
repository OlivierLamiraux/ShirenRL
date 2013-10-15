require.config({
  baseUrl: "src",
  paths: {
      "spec": "../spec"
  }
});
require([
  "spec/BagSpec",
  "spec/ManagerSpec",
  "spec/HeroSpec",
  "spec/ItemSpec",
  "spec/EventsSpec",
  "spec/GameLoopSpec",
  "spec/GameSpec",
  "spec/MapSpec",
], function() {

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };

    jasmineEnv.execute();
});