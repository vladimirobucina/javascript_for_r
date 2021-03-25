HTMLWidgets.widget({

  name: 'peity',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // insert data
        el.innerText = x.data;

        // run peity
        $(el).peity(x.type, x.options, {
          fill: ["red", "green", "blue"]
        })

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
