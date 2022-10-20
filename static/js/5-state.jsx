/*
 * This example uses the idea of STATE - a value related
 * to this component which can change over time.
 * Here, we use the useState() method to tell React that
 * timesClicked can change over time, and to automatically
 * redraw this component whenever it does.
 */

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
        <button onClick={ handleClick }>Click me!</button>
        <span> {timesClicked} </span>
      </div>
    );
  }  
  
  ReactDOM.render(<ClickCounter />, document.querySelector('#root'));
  