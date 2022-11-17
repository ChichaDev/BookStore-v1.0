import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../Redux/slices/filterSlice";
import "../../styles/Categories.css";

const Categories = () => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const onClickCategory = (i) => {
    dispatch(setCategoryId(i));
    setActiveIndex(i);
  };
  const categoriesList = [
    "Все",
    "Приключения",
    "Фантастика",
    "Драмма",
    "Ужасы",
    "Детектив",
  ];
  return (
    <div className="Categories">
      <ul>
        {categoriesList.map((item, i) => (
          <li onClick={() => onClickCategory(i)} key={i}>
            <a href="#" className={activeIndex === i ? "active" : ""}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
