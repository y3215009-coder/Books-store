import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Book } from "./compenanats/Book";

function App() {
  const books = [
    {
      title: "point blank",
      auther: "yona sapir",
      likes: "12",
      isAvilable: "true",
    },
    {
      title: "ari poter",
      auther: "onestuped american",
      likes: "7",
      isAvilable: "false",
    },
    {
      title: "ugli dakli",
      auther: "someDuck",
      likes: "150",
      isAvilable: "true",
    },
  ];
  const recomendBooks = books.filter((book) => book.likes > 100);

  return (
    <>
      <h1>book store</h1>
      <ul>
        {books.map((b, index) => (
          <Book
            title={b.title}
            author={b.auther}
            likes={b.likes}
            isAvilable={b.isAvilable}
            idNum={index}
          ></Book>
        ))}
      </ul>
      <h2>RECOMMEND BOOKS</h2>
      {recomendBooks.length > 0 ? (
        <ul>
          {recomendBooks.map((b, index) => (
            <Book
              title={b.title}
              author={b.auther}
              likes={b.likes}
              isAvilable={b.isAvilable}
              idNum={index}
            ></Book>
          ))}
        </ul>
      ) : (
        <h5>no books</h5>
      )}
    </>
  );
}

export default App;
