import React from "react";

export default function SearchForm() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search 🔎"
              className="btn btn-secondary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
