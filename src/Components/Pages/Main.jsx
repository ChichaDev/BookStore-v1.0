import React from "react";
import { fetchBooks } from "../../Redux/slices/booksApiSlice";
import { useSelector, useDispatch } from "react-redux";
import BookList from "../Body/BookList";
import Header from "../HeaderApp/Header";
import Categories from "../HeaderApp/Categories";
import SortPopUp from "../HeaderApp/SortPopUp";
import SkeletonLoader from "../Body/SkeletonLoader";
import "../../styles/HeaderApp.css";

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksApi.items);
  const status = useSelector((state) => state.booksApi.status);
  const searchValue = useSelector((state) => state.search.search);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.sort.sort.sortProperty);
  const search = searchValue ? `search=${searchValue}` : "";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const sortBy = sortType;
  const order = sortType.includes("-") ? "asc" : "desc";

  React.useEffect(() => {
    dispatch(
      fetchBooks({
        sortBy,
        order,
        category,
        search,
      })
    );
    window.scrollTo(0, 0);
  }, [search, category, sortBy, order]);

  if (status === "error") {
    return (
      <p style={{ fontSize: "50px", marginTop: "100px", textAlign: "center" }}>
        Произошла ошибка, перезагрузите страницу!
      </p>
    );
  }
  return (
    <div className="Main">
      <Header />
      <Categories />
      <SortPopUp />
      {status === "loading" ? <SkeletonLoader /> : <BookList list={books} />}
    </div>
  );
};

export default Main;
