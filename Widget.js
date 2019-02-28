define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'sample-widget',
    // this property is set by the framework when widget is loaded.
    // name: 'SampleWidget',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('SampleWidget::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('SampleWidget::startup');
    // },

    // onOpen: function(){
    //   console.log('SampleWidget::onOpen');
    // },

    // onClose: function(){
    //   console.log('SampleWidget::onClose');
    // },

    // onMinimize: function(){
    //   console.log('SampleWidget::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('SampleWidget::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('SampleWidget::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('SampleWidget::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('SampleWidget::onPositionChange');
    // },

    // resize: function(){
    //   console.log('SampleWidget::resize');
    // }

    //methods to communication between widgets:

  });

});
