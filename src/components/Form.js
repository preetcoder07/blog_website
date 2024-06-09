import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Form(props) {
    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [bold, setBold] = useState(false);
    const [applyNewFontSize, setApplyNewFontSize] = useState(false);

    const handleChange = (event) => {
        const newText = event.target.value;
        const cursorPosition = event.target.selectionStart;

        let updatedText;

        if (applyNewFontSize) {
            updatedText = text.substring(0, cursorPosition) + newText.substring(cursorPosition - 1).fontSize(200) + text.substring(cursorPosition);
            setApplyNewFontSize(false);
        } else {
            updatedText = newText;
        }

        setText(updatedText);
        setHistory([...history.slice(0, currentIndex + 1), updatedText]);
        setCurrentIndex(currentIndex + 1);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const undo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setText(history[currentIndex - 1]);
        }
    };

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
        setTitle("");
        setTimeout(() => {
            alert("Cleared!");
        }, 200);
    };

    const text_copy = () => {
        navigator.clipboard.writeText(text);
        alert('Text has been copied!');
    };

    const saveToFile = () => {
        const blob = new Blob([`Title: ${title}\n\n${text}`], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${title || 'Untitled'}-blog.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
    };



    return (
        <>
            <div className="container my-3" >
                <div className="mb-4" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                    <h3>Chronicle: Embrace the Past, Envision the Future</h3>

                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-2" onClick={clear_text}>
                        Clear
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={text_copy}>
                        Copy
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={Bold_text}>
                        {bold ? "Unbold" : "Bold"}
                    </button>

                    <button id="my_box" disabled={text.length === 0} className="btn btn-info mx-2 my-2" onClick={undo}>
                        Undo
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-info mx-2 my-2" onClick={redo}>
                        Redo
                    </button>

                    <button disabled={text.length === 0} id="my_box" className="btn btn-warning mx-2 my-2" onClick={saveToFile}>
                        Save as File
                    </button>


                    <input
                        className="form-control my-3"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Add title"
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: props.mode === "dark" ? "white" : "black",
                            backgroundColor: props.mode === "dark" ? "#3a5fa9" : "white",
                            border: "3.5px solid white",
                        }}
                    />

                    <textarea
                        className="form-control"
                        value={text}
                        id="my_box"
                        rows="8"
                        placeholder="Start your blog ..."
                        onChange={handleChange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#3a5fa9" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                            border: "3.5px solid white",
                            fontWeight: bold ? "bold" : "normal",
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
                <h3 style={{ fontSize: "50px" }}>{title}</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}

Form.propTypes = {
    mode: PropTypes.string.isRequired,
};

export default Form;
