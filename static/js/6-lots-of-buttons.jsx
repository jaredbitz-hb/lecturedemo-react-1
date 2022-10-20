/*
 * The handy thing about state is that React will automatically
 * take care of keeping it separate for each component, which lets
 * you easily use multiple components of the same type! Here,
 * each of these counters is completely independent.
 * 
 * (You could also create them using an array and a for loop,
 * this way is just more straightforward for the purpose of 
 * demonstartion)
 */
function LotsOfCounters() {
    return (
        <div>
            <ClickCounter />
            <ClickCounter />
            <ClickCounter />
            <ClickCounter />
            <ClickCounter />
        </div>
    );
}

function ClickCounter() {
    /* 
     * Create a state variable
     * The parameter (0) is the initial value
     * setTimesClicked is a FUNCTION that will change the value
     * of timesClicked and notify React about it
     */
    const [timesClicked, setTimesClicked] = React.useState(0);

    function handleClick(event) {
        // Notify React that timesClicked has changed!
        // This is like saying:
        // timesClicked = timesClicked + 1;
        setTimesClicked(timesClicked + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <span> {timesClicked} </span>
        </div>
    );
}

//Note that here we render a LotsOfCounters, rather than just one ClickCounter!
ReactDOM.render(<LotsOfCounters />, document.querySelector('#root'));
