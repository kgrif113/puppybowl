import react, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
const container = document.getElementById("example");

const PuppyBowl = () => {
  //set up puppy state
  const [puppyPlayers, setPuppyPlayers] = useState([]);

  //STEP 2 fetch data using useEffect hook
  // function exampleFunc() {
  //   console.log("I am an example func");
  // }

  useEffect(() => {
    async function fetchPuppyData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players"
        );

        const puppyData = await response.json();

        setPuppyPlayers(puppyData.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPuppyData();
  }, []);
  console.log(puppyPlayers);
  return (
    <div id="container">
      <div id="players">
        {puppyPlayers && puppyPlayers.length
          ? puppyPlayers.map((players, index) => {
              return (
                <div class="dogs">
                  <div class="names">{players.name}</div>
                  <div class="breeds">{players.breed}</div>
                  <img class="image" src={players.imageUrl} />
                </div>
              );
            })
          : "bruh"}
      </div>
    </div>
  );
};

ReactDOM.render(<PuppyBowl />, container);
