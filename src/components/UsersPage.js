import React, { useState } from "react";

const UsersPage = (props) => {
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  return (
    <div id="users" className="container">
      <div className="row">
        <div className="col col-3">
          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Filter + Sort</h4>
            </div>
            <div className="card-body">
              <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className="row" style={{ margin: "20px 0" }}>
                <div className="col col-12">
                  <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                    <label className="form-check-label">Sort Key</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortKey"
                      id="sortLastName"
                      checked={sortKey === "lastName"}
                      onChange={(e) => setSortKey("lastName")}
                    />
                    <label className="form-check-label" for="sortLastName">
                      Last Name
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortKey"
                      id="sortAge"
                      checked={sortKey === "age"}
                      onChange={(e) => setSortKey("age")}
                    />
                    <label className="form-check-label" for="sortAge">
                      Age
                    </label>
                  </div>
                </div>
              </div>
              <div className="row" style={{ margin: "20px 0" }}>
                <div className="col col-12">
                  <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
                    <label className="form-check-label">Sort Direction</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortDirection"
                      id="sortAsc"
                      checked={sortDirection === "ASCENDING"}
                      onChange={(e) => setSortDirection("ASCENDING")}
                    />
                    <label className="form-check-label" for="sortAsc">
                      Ascending
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sortDirection"
                      id="sortDesc"
                      checked={sortDirection === "DESCENDING"}
                      onChange={(e) => setSortDirection("DESCENDING")}
                    />
                    <label className="form-check-label" for="sortDesc">
                      Descending
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    style={{ width: "100%" }}
                    onClick={() =>
                      props.handleApply(
                        0,
                        lastName,
                        age,
                        sortKey,
                        sortDirection
                      )
                    }
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col col-12" style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    className="btn  btn-link"
                    onClick={() => {
                      setSortDirection("");
                      setSortKey("");
                      setLastName("");
                      setAge("");
                      props.handleApply(0, "", "", "", "");
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-9">
          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Users</h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {props.users.map((user) => {
                    return (
                      <tr key={user.userId}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="row">
                <div className="col col-2">
                  <button
                    disabled={!props?.sliceInfo?.hasPrevious}
                    type="button"
                    className="btn btn-link"
                    onClick={() =>
                      props.navigateToPage(
                        -1,
                        lastName,
                        age,
                        sortKey,
                        sortDirection
                      )
                    }
                  >
                    Previous
                  </button>
                </div>
                <div className="col col-8"></div>
                <div className="col col-2">
                  <button
                    disabled={!props?.sliceInfo?.hasNext}
                    type="button"
                    className="btn btn-link"
                    onClick={() =>
                      props.navigateToPage(
                        1,
                        lastName,
                        age,
                        sortKey,
                        sortDirection
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
