import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/slices/cartSlice";
import { setItems } from "../../Redux/slices/detailsPageSlice";
import MyButton from "../UI/MyButton";
import "../../styles/Bookitem.css";
import "../../styles/HeaderApp.css";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isBookInCart = items.some((obj) => obj.book.id === book.id);

  const onClickAddToCart = () => {
    if (isBookInCart) {
      dispatch(removeItemFromCart(book.id));
    } else {
      dispatch(addItemToCart({ book }));
    }
  };

  const onClickDetailsBook = () => {
    dispatch(setItems({ book }));
  };
  return (
    <div className="contentPlace">
      <div className="bookContent">
        <div>
          <Link to={"/bookpage"}>
            <img
              onClick={onClickDetailsBook}
              className="bookPhoto"
              src={book.photo}
              alt=""
            ></img>
          </Link>
        </div>
        <div className="bookDescripton">
          <div className="bookTitle">"{book.title}"</div>
          <div className="bookAuthor">Автор: {book.author}</div>
          <div className="bookJenre">Жанр: {book.jenre}</div>
          <div className="bookPrice">Цена: {book.price} грн</div>
        </div>

        <div className="AddToCart">
          <MyButton
            style={
              isBookInCart
                ? { backgroundColor: "black" }
                : { backgroundColor: "#fe5f1e" }
            }
            type={isBookInCart ? "secondary" : "primary"}
            onClick={onClickAddToCart}
          >
            {isBookInCart ? "Удалить" : "Добавить"}
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
