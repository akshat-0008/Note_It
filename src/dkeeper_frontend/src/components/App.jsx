import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper_backend} from "../../../declarations/dkeeper_backend";

function App() {
  const [items, setItems] = useState([]);

  function addItem(title, content) {
    const item = {
      title: title,
      content: content
    };
    setItems((prevItems) => {
      dkeeper_backend.createNote(title,content);
      return [item,...prevItems];
    });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(){
    const notesArray = await dkeeper_backend.readNote();
    setItems(notesArray);
  }

  function deleteItems(id) {
    dkeeper_backend.removeNote(id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteItems}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;