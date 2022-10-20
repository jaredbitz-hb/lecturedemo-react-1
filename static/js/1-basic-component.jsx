
/*
 * A function whose name starts with a capital letter
 * is interpreted by React as a component - you can use
 * it like a custom HTML tag, as in the last line of this
 * file.
 */
function Hello() {
    return (
        <ul>
            <li>Hello, Jared!</li>
            <li>Hello, Sean! </li>
        </ul>
    );
}

//Render our Hello component inside the div with id "root"
ReactDOM.render(<Hello />, document.querySelector("#root"));