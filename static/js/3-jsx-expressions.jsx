function Hello() {
    return (
        <ul>
            <GreetJared />
            <GreetSean />
            <RandomNumber />
        </ul>
    );
}

/*
 * Within your component, you can also substitute in
 * arbitrary JavaScript expressions. Here, we plug in
 * the value of a variable which we set to a random number.
 * 
 * It is also possible to write
 * return <li> { Math.random() } </li>;
 */
function RandomNumber() {
    let randomNumber = Math.random();

    return <li> { randomNumber }</li>
}

function GreetJared() {
    return <li>Hi, Jared!</li>;
}

function GreetSean() {
    return <li>Hi, Sean!</li>;
}

//Render our Greet component inside the div with id "root"
ReactDOM.render(<Hello />, document.querySelector("#root"));