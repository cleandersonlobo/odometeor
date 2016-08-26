Package.describe({
  name: 'cleandersonlobo:odometeor',
  summary: 'A wrapper for odometer by HubSpot',
  // Brief, one-line summary of the package.
    version: '0.0.5',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cleandersonlobo/odometeor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

api.addFiles('lib/odometer.js', 'client');
api.addFiles('lib/textroller.js', 'client');
api.addFiles('lib/themes/odometer-theme-car.css', 'client');
api.addFiles('lib/themes/odometer-theme-default.css', 'client');
api.addFiles('lib/themes/odometer-theme-digital.css', 'client');
api.addFiles('lib/themes/odometer-theme-minimal.css', 'client');
api.addFiles('lib/themes/odometer-theme-plaza.css', 'client');
api.addFiles('lib/themes/odometer-theme-slot-machine.css', 'client');
api.addFiles('lib/themes/odometer-theme-train-station.css', 'client');

});
