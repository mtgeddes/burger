// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(".devour").on("click", function(event) {
  let id = $(this).data("id");

  let devouredState = {
    devoured: true
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState
  }).then(
    function() {
      console.log("changed devoured to", devoured);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".submit").on("click", function(event) {
  console.log("how many hits?")
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  if ($('#newBurger').val() == '') {
    $('#newBurger').attr('placeholder', 'Blank Burger?');
  } else {
    let newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: $("[burger=false]:checked").val()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }
});

