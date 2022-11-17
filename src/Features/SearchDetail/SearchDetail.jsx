import Logo from "../../Svg/Logo.svg";
import Search from "../../Svg/Search.svg";
import { useSelector } from "react-redux";
import { selectedSearch } from "../dataSlice";
import useSearchs from "../../Hooks/useSearchs";
import { Link } from "react-router-dom";

function SearchDetail() {
  const searchs = useSelector(selectedSearch);
  const { onChanges, lastSearch } = useSearchs();
  return (
    <div className="container search_detail">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <div className="search">
        <img className="search_svg" src={Search} alt="search-svg" />
        <input
          value={lastSearch}
          onChange={onChanges}
          className="search_input"
          type="text"
        />
        <button disabled={!searchs?.length} className="search_btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchDetail;