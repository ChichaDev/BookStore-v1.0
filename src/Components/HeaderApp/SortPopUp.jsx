import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../Redux/slices/sortSlice";
import "../../styles/SortPopUp.css";

const SortPopUp = () => {
  const sortRef = React.useRef();
  React.useEffect(() => {
    const handleClickOutsidePlace = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpenPopUp(false);
      }
    };

    document.body.addEventListener("click", handleClickOutsidePlace);
    return () =>
      document.body.removeEventListener("click", handleClickOutsidePlace);
  }, []);

  const sort = useSelector((state) => state.sort.sort);
  const dispatch = useDispatch();

  const [openPopUp, setOpenPopUp] = React.useState(false);
  const onClickPopUp = () => {
    setOpenPopUp(!openPopUp);
  };

  const sortPopUpList = [
    { name: "Автору", sortProperty: "author" },
    { name: "Цене", sortProperty: "price" },
    { name: "Алфавиту", sortProperty: "title" },
  ];
  const [activeIndexPopUp, setActiveIndexPopUp] = React.useState(0);
  const onClickActiveSort = (obj) => {
    dispatch(setSort(obj));
    setOpenPopUp(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort_label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={onClickPopUp}>{sort.name}</span>
      </div>
      {openPopUp && (
        <div className="sort_popup">
          <ul>
            {sortPopUpList.map((obj, i) => (
              <li
                onClick={() => onClickActiveSort(obj)}
                key={i}
                className={
                  sort.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopUp;
