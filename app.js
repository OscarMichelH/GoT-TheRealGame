angular.module("App", ["main","teams"]);
angular.module("main", []);
angular.module("teams", []);

var junction_font = new FontFace('GoT', 'url(fonts/got.ttf)');
junction_font.load().then(function(loaded_face) {
    document.fonts.add(loaded_face);
}).catch(function(error) {
    // error occurred
});