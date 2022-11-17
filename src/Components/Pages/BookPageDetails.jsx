import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../Redux/slices/cartSlice";
import { setClearDetais } from "../../Redux/slices/detailsPageSlice";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton";
import "../../styles/BookpageDetails.css";

const BookPageDetails = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bookDetails = useSelector((state) => state.details.items);
  const onClickClearDetails = () => {
    dispatch(setClearDetais());
  };
  const items = useSelector((state) => state.cart.items);
  const isBookInCart = items.some((obj) => obj.id === bookDetails.id);

  const onClickAddToCart = () => {
    if (isBookInCart) {
      dispatch(removeItemFromCart(bookDetails.book.id));
    } else {
      dispatch(addItemToCart(bookDetails));
    }
  };
  return (
    <div className="wraper">
      <div>
        <img className="photo" src={bookDetails.book.photo} alt=""></img>
      </div>
      <div className="titleBook">
        "{bookDetails.book.title}"
        <div className="description">{bookDetails.book.description}</div>
        <div className="buttons">
          <Link to={"/"}>
            <MyButton
              onClick={onClickClearDetails}
              style={{ backgroundColor: "gray" }}
            >
              Назад
            </MyButton>
          </Link>
          <div>
            <MyButton
              style={
                isBookInCart
                  ? { backgroundColor: "black", padding: "5px" }
                  : { backgroundColor: "#fe5f1e", padding: "5px" }
              }
              type={isBookInCart ? "secondary" : "primary"}
              onClick={onClickAddToCart}
            >
              {isBookInCart ? "Удалить" : "Добавить"}
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPageDetails;
