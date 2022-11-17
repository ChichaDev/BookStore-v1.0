import React from "react";
import debounce from "lodash.debounce";
import { setSearch } from "../../Redux/slices/serachSlice";
import { useDispatch } from "react-redux";
import LupaImg from "../img/Lupa.png";
import "../../styles/HeaderApp.css";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();
  const onClearClick = () => {
    dispatch(setSearch(""));
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <img className="LupaIcon" src={LupaImg} alt=""></img>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="searchBarInput"
        type="text"
        placeholder="Search by Title, Author, Jenre"
      ></input>
      {value && (
        <button onClick={() => onClearClick()} className="searchBarButton">
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
