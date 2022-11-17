import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton";
import "../../styles/CartEmpty.css";

const CartEmpty = () => {
  return (
    <div>
      <h1 className="warning">Корзина пустая</h1>
      <p className="description">
        Вероятней всего, вы не заказывали ещё кингу. Для того, чтобы заказать
        книгу, перейди на главную страницу
      </p>
      <div className="buttonPlace">
        <Link to={"/"}>
          <MyButton style={{ width: "200px", heigth: "150px" }}>
            Вернуться назад
          </MyButton>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
