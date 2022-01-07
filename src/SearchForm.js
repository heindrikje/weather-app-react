import React from "react";
import "./searchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control search-bar"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search 🔎"
              className="btn btn-secondary w-100 search-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
