import { React } from "react";

export default function PlayerScore(props) {
  //Sorting scores
  let sortScores = props.scores.sort((a, b) => {
    if (props.sorting) {
      return a.s < b.s ? 1 : -1;
    } else {
      return a.s > b.s ? 1 : -1;
    }
  });

  return (
    <div className="row mt-5 mx-2 mb-5">
      <div className="col">
        <button
          onClick={props.sortHandle}
          type="button"
          class="btn btn-warning btn-xl"
        >
          Sort Scores
        </button>
        <div className="card">
          <table className="table table-responsive table-hover table-danger border-primary">
            <thead>
              <tr class="table-primary">
                <th scope="col">
                  <h4>Rank</h4>
                </th>
                <th scope="col">
                  <h4>Name</h4>
                </th>
                <th scope="col">
                  <h4>Score</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortScores.map((country, index) => {
                return (
                  <tr>
                    <td>
                      <h5>{index + 1}</h5>
                    </td>
                    <td>{country.n.toUpperCase()}</td>
                    <td>{country.s}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
