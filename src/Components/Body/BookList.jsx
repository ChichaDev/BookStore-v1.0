import React from "react";
import BookItem from "./BookItem";

const BookList = ({ list }) => {
  return (
    <div>
      {list.map((book) => (
        <BookItem book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BookList;
