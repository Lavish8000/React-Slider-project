import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt3bRN-k4mlv31oFLXyHusO6-wekWJ5Wtv7NY7lTC6g&s=10",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YPsv--Ai8VcNIPd3eFhZgyiVXDCUfVz3jj0aEvCQYQ&s=10",
      intro: "",
      tag: "Genious",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPb7_AXJugqKkXY8OZLlup9QSfmCf1Rz8Z9wii1Uw7g&s=10",
      intro: "",
      tag: "Nature",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeF0db_8fJrHccB-2HxywsJfOskoE8aJ97xlxbikHcw&s=10",
      intro: "",
      tag: "Holiday",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLENkWOrI59V68ZbbUlu1O5fyEoLl-FVFQqv8XLKTYA&s=10",
      intro: "",
      tag: "Sunset",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8g006i1fALufbNGynOvMTxkokpoQ1S-JokMgUmokX2A&s=10",
      intro: "",
      tag: "Nature",
    },
  ];

  const items = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4a3WASDQNyHR8OpRPYWpZQQAh6JKYVm_6fBlbyCNIw&s=10",
      tag: "Curtains",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIqndqT-njxAI1B_cLk-26nqJPogCIhjpS4xLwMHvbA&s=10",
      tag: "Living Room",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEl7SkeL2QZ3qhZ6uENE754nZw6Sr48y_MOYWuzo7oiw&s=10",
      tag: "Bedroom",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9FT1NzT6NZzqgR9EAD5GwLlQV8l_YsHDMix13AJ5Nw&s=10",
      tag: "Kitchen",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi6U7inIoK4mXNw6kzjm7qQ0JxZX-Iv0gS2kMquceJQ&s=10",
      tag: "Dining Area",
    },
  ];
  return (
    <div>
      <Section1   users={users} />
      <Section2 items={items} />
      <Section1   users={users} />
      <Section2 items={items} />
      <Section1   users={users} />
      <Section2 items={items} />
      <Section1   users={users} />
      <Section2 items={items} />
    </div>
  );
};

export default App;
