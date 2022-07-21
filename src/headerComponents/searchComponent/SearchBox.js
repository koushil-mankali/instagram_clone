import searchCss from "./SearchBox.module.scss";

import SearchIcon from "@material-ui/icons/Search";

let SearchBox = () => {
  return (
    <form method="POST" className={searchCss.search_form}>
      <input
        type="text"
        name="search"
        id="search"
        className={searchCss.search_bar_inpt}
        placeholder="Search"
      />
      <SearchIcon className={searchCss.search_icon} />
    </form>
  );
};

export default SearchBox;
