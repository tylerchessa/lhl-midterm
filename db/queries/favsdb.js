const getFavMaps = (user_id) => {
  return db
    .query(`SELECT maps.id FROM maps JOIN map_favourites ON map_id = maps.id WHERE map_favourites.user_id = ${user_id};`)
    .then((data) => {
      return data.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

const toggleMapFav = (user_id,map_id) => {
  return db
    .query(`
    INSERT INTO map_favourites (user_id, map_id)
    VALUES (${user_id},${map_id})
    ON CONFLICT ON CONSTRAINT unique_favourite DO
    UPDATE
    SET fav_status = NOT map_favourites.fav_status
    WHERE map_favourites.user_id = ${user_id} AND map_favourites.map_id = ${map_id}
    RETURNING *;
    `)
    .then((data) => {
      return data.rows;
    })
    .catch(function (xhr, status, error) {
      console.log("Error: " + error);
    });
};

module.exports = {
  getFavMaps,
  toggleMapFav
}
