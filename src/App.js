import React, { useState } from "react";
import "./styles.css";

const booksDatabase = {
  PersonalDevelopment: [
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
    { name: "21 lessons for the 21st Century", author: "Y.N.Harari" },
    { name: "The power of Now", author: "Eckhart Tolle" }
  ],
  Horror: [
    { name: "Stephen King", author: "CARRIE" },
    { name: "Drakula", author: "Bram Stoker" },
    { name: "The Woman in Black", author: "Susan Hill" }
  ],
  Biography: [
    { name: "Steve Jobs", author: "Walter Isaacson" },
    { name: "Mein Kampf", author: "Eugen Fischer" },
    { name: "Becoming", author: "Michelle Obama" }
  ]
};

const books = Object.keys(booksDatabase);

export default function App() {
  const [userGenre, setgenre] = useState("PersonalDevelopment");

  function onClickHandler(item) {
    setgenre(item);
  }

  return (
    <div className="App">
      <h1 className="header">
        <strong>Books Recommendation App</strong>
      </h1>
      <hr />

      <div className="one">
        <h3> Checkout my favourite books here </h3>
      </div>
      <hr />

      <div>
        {books.map((item) => (
          <button className="btn" onClick={() => onClickHandler(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="two">
        <div className="body">
          <ul style={{ paddingInlineStart: "0" }}>
            {booksDatabase[userGenre].map((books) => (
              <li className="list">
                <div className="div1" key={books.name}>
                  <b> {books.name}</b>
                </div>

                <div className="div2" key={books.author}>
                  <strong> Author:{books.author} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <footer className="footer">
        <h1 className="footer-header">About an App</h1>
        <p className="para">
          This app suggest some of my favourite books from three categories
        </p>
      </footer>
    </div>
  );
}
