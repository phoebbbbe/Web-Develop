import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const targets = event.target;
    const value = targets.type === "text" ? targets.value : null;
    const name = targets.name;

    navigate("/search");
  };

  return (
    <div>
      <h2>Your search term: {searchParams.get("q")}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input name="q" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
