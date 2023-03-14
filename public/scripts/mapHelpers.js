const renderMapsList = (maps) => {
  $(".mapListContainer").remove();
  for (let map of maps) {
    const newDiv = $(`
    <section class="mapListContainer">
      <div id = '${map.id}' class="mapList">
        <img class="mapListPic"
          src=${map.map_url}
          alt="map image">
        <div class="mapListDetails">
          <div>${map.map_title}</div>
          <div>Created by: Jenny!</div>
          <div class="mapListIcons">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
      </div>
      <div>${map.map_description}</div>
    </section>
    `);
    $(".discoverMapsArea").append(newDiv);
    // populateMapArea();
  }
};

const renderMapArea = () => {
  const $mapDiv = `
        <div id="googleMap4" style="width:100%;height:100%;"></div>
        <script>
        function initMap() {
          let mapProp = {
            center:new google.maps.LatLng(49.281059, -123.119019),
            zoom:20,
          };
          let map = new google.maps.Map(document.getElementById("googleMap4"),mapProp);
          }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvCCsFn9dt3dc9kHCrRJvp0D44pNnikvg&callback=initMap"></script>
        `;
  $(".mapArea").empty();
  $(".mapArea").append($mapDiv);
};

//renders nav area when a user is logged in
const renderNavArea = () => {
  $(".login").remove();
  const $newButtons = `
  <button class="discover reset button">Discover maps</button>
  <button class="create reset button">Create a map</button>
  <button class="myMaps reset button">My maps</button>
  <button class="logout reset button">Logout</button>`;
  $(".buttons").append($newButtons);
};

//resets the nav area when logged out
const resetNavArea = () => {
  $(".mainContainer").empty();
  $(".reset").remove();
  const $login = `<button class="login button">Login</button>`;
  $(".buttons").append($login);
  const $nonMemberArea = `<div class="discoverMapsArea">
    <div class="discoverMapsTitle">Discover Maps!
    </div>
    </section>
    <section class="mapListContainer">
    </section>
  </div>
  <div class="mapArea">
    No potatoes here
  </div>`;
  $(".mainContainer").append($nonMemberArea);
  renderMapArea();
};

//renders the member area
const renderMemberArea = (user) => {
  $(".mainContainer").empty();
  const $memberArea = `
  <div class="myMapsContainer"><div class="myMapsArea">
  <div class="discoverMapsTitle">My Maps</div>
  <section class="myMapsAreaContainer">
  </section></div></div>
  <div class="myFavMapsContainer"><div class="myMapsArea">
<div class="myFavMapsTitle">My fav maps</div>
<section class="myFavMapsAreaContainer">
</section></div></div>
<div class="myFavPinsContainer">
<div class="myMapsArea">
  <div class="myFavPinsTitle">My fav pins</div>
  <section class="myFavPinsAreaContainer"></section>
</div>
</div>`;
  $(".mainContainer").append($memberArea);
  $.ajax({
    //2
    type: "GET",
    url: "/users-api/myinfo",
  }).then((data) => {
    console.log("data:", data);
    //6this is where the data is ending up and I can create all my new divs
    $(".myFavPinsTitle").text(`You have ${data.pins.length} pins`);
    $(".myMapsAreaContainer").append();
    $(".myFavMapsAreaContainer").append();
    $(".myFavPinsAreaContainer").append();
  });
};
