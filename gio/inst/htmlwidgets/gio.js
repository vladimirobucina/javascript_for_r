HTMLWidgets.widget({

  name: 'gio',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var controller;

    var sel_handle = new crosstalk.SelectionHandle();

    return {

      renderValue: function(x) {

        controller = new GIO.Controller(el); // declared outside

        // add data
        controller.addData(x.data);

        // define style
        controller.setStyle(x.style);

        if(x.stats)
          controller.enableStats();

        sel_handle.setGroup(x.crosstalk.group)

        sel_handle.on("change", function(e) {
          // selection comes from another widget
          if (e.sender !== sel_handle) {
            // clear the selection
            // not possible with gio.js
          }
          controller.switchCountry(e.value[0]);
        });

        // render
        controller.init();

      },

      resize: function(width, height) {

        controller.resizeUpdate();

      },



    };
  }
});
