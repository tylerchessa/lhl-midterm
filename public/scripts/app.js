// Client facing scripts here
$(document).ready(() => {
  // addNewDiv();  // This is a sample function for SPA. In the future move all functions into their own helper function files.
<<<<<<< HEAD
  populateMapsList(); // This function establishes all initial event listeners around the page. See below.
  populateMapArea();

=======
  eventListeners(); // This function establishes all initial event listeners around the page. See below.
>>>>>>> login
});

//Jasons demo:
// const addNewDiv = () => {
//   $('.discoverMapsTitle').on('click', () => {
//     $.ajax({
//       type: 'GET',
//       url: '/maps',
//     })
//       .then((names) => {
//         console.log(names);
//         for (let entry of names) {
//           const newDiv = $('<div>').text(entry.name);
//           $('.discoverMapsArea').append(newDiv);
//         };
//       })
//       .catch(function (xhr, status, error) {
//         console.log("Error: " + error);
//       })
//   })
// }

<<<<<<< HEAD
const populateMapsList = () => {
  $('.logo').on('click', () => {
=======
const eventListeners = () => {
  $(".logo").on("click", () => {
>>>>>>> login
    $.ajax({
      type: "GET",
      url: "/maps",
    })
<<<<<<< HEAD
    .then((maps) => renderMapsList(maps))
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    })
  })
}

const populateMapArea = () => {
  $('#4').on('click', () => {
    $.ajax({
      type: 'GET',
      url: '/maps/:id',
    })
    .then((map) => renderMapArea(map))
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    })
  })
}
=======
      .then((maps) => renderMapsList(maps))
      .catch(function (xhr, status, error) {
        console.log("Error: " + error);
      });
  });
  //login event listener
  $(".login").on("click", () => {
    console.log("event listener:");
    $.ajax({
      type: "GET",
      //we can hard code this here and/or enter the id as a parameter in the url
      url: "/login/1",
    });
  });
};
>>>>>>> login
