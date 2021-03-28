HTMLWidgets.widget({

  name: 'gio',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var controller;

    return {

      renderValue: function(x) {

        controller = new GIO.Controller(el); // declared outside

        // add data
        controller.addData(x.data);

        // define style
        controller.setStyle(x.style);

        if(x.stats)
          controller.enableStats();

        // render
        controller.init();

      },

      resize: function(width, height) {

        controller.resizeUpdate();

      },



    };
  }
});
