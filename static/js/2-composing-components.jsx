/*
 * You can use components inside of other components!
 * Here, the GreetJared and GreetSean components are used
 * to build up the overall Greet component
 */
function Hello() {
    return (
        <ul>
            <GreetJared />
            <GreetSean />
        </ul>
    );
}

function GreetJared() {
    return <li>Hi, Jared!</li>;
}

function GreetSean() {
    return <li>Hi, Sean!</li>;
}

//Render our Greet component inside the div with id "root"
ReactDOM.render(<Hello />, document.querySelector("#root"));