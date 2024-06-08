import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Form(props) {

    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [text, setText] = useState("Start your blog ... ");
    const [bold, setBold] = useState(false);

    const handleChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setHistory([...history.slice(0, currentIndex + 1), newText]);
        setCurrentIndex(currentIndex + 1);
    };

    // Function to undo changes
    const undo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setText(history[currentIndex - 1]);
        }
    };

    // Function to redo changes
    const redo = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setText(history[currentIndex + 1]);
        }
    };

    const Bold_text = () => {
        setBold(!bold);
    };

    const clear_text = () => {
        setText("");
        setTimeout(() => {
            alert("Cleared !")
        }, 200);
    }

    const text_copy = () => {
        navigator.clipboard.writeText(text);
        alert('Text has been copied !')
    }

    return (
        <>
            <div className="container my-3">
                <div className="mb-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>

                    <h3>Chronicals: Your Voice, Your Platform</h3>

                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={clear_text}>
                        Clear
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={text_copy}>
                        Copy
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={Bold_text}>
                        {bold ? "Unbold" : "Bold"}
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={undo}>
                        undo
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={redo}>
                        redo
                    </button>

                    <button disabled={text.length === 0} id="my_box" className=" submit_btn btn btn-success mx-2 my-2" >
                        Submit
                    </button>

                    <textarea
                        className="form-control" value={text}
                        id="my_box"
                        rows="8"
                        onChange={handleChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#3a5fa9" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                            border: "3.5px solid white",
                            fontWeight: bold ? "bold" : "normal" // Apply bold style conditionally
                        }}
                    ></textarea>
                </div>

            </div>

            <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>Your blog summary</h1>
                <p>
                    There are total <b>{text.length} characters</b> or <b>{text.split(/\s+/).filter((element) => element.length !== 0).length} words</b>
                </p>
                <p>
                    It will take <b>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length * 60} seconds</b> to read
                </p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}

function Main() {
    return (
        <div>
            <Form showalert={(msg, type) => console.log(msg, type)} mode="light" />
        </div>
    );
}

export default Form;
