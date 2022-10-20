function Hello() {
    return (
        <ul>
            <Greet name="Jared" />
            <Greet name="Sean" />
        </ul>
    );
}

/* 
 * The GreetSean and GreetJared components in the previous
 * examples were very similar. We can use props to make both
 * of them work with the same component. To send a value to
 * a component in the props object, write it like an HTML
 * attribute wherever you write the tag for that component.
 * (I.e. <GreetLabel name="Jared"> )
 */
function Greet(props){
    return <li> Hello, { props.name }! </li>;
}

ReactDOM.render(<Hello />, document.querySelector("#root"));