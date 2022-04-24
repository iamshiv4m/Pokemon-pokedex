import axios from "axios";

export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(
      (response) => {
        // console.log(response);
        resolve(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
  });
}

export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(
      (response) => {
        console.log(response);
        resolve(response.data);
      },
      (err) => {
        console.log(err);
      }
    );
  });
}
