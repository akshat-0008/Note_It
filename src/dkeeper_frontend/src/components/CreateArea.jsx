import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleChangeTitle(event) {
    setTitle(event.target.value);
  }

  function handleChangeContent(event) {
    setContent(event.target.value);
  }

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? (
          <input
            onChange={handleChangeTitle}
            name="title"
            placeholder="Title"
            value={title}
          />
        ) : null}
        <textarea
          onClick={handleClick}
          onChange={handleChangeContent}
          name="content"
          placeholder="Take a note..."
          value={content}
          rows={!clicked ? "1" : "3"}
        />
        <Zoom in={clicked}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.onAdd(title, content);
              setTitle("");
              setContent("");
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;