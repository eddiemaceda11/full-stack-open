//// Course Info ////

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };

// const Content = (props) => {
//   console.log(props.parts);
//   return (
//     <div>
//       <p>
//         {props.parts[0].name} {props.parts[0].exercises}
//       </p>
//       <p>
//         {props.parts[1].name} {props.parts[1].exercises}
//       </p>
//       <p>
//         {props.parts[2].name} {props.parts[2].exercises}
//       </p>
//     </div>
//   );
// };

// const Total = (props) => {
//   return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>;
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   );
// };

//// Part 1C

// const Hello = (props) => {
//   const { name, age } = props;

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

//// COUNTER ////

// const Display = ({ counter }) => <div>{counter}</div>;

// const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={setToZero} text="zero" />
//       <Button handleClick={decreaseByOne} text="minus" />
//     </div>
//   );
// };

//// CLICKS ////

// const History = (props) => {
//   console.log(props.allClicks);
//   if (props.allClicks.length === 0) {
//     return <div>The app is used by pressing the buttons</div>;
//   }

//   return <div>Button press history: {props.allClicks.join(" ")}</div>;
// };

// const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"));
//     const updatedLeft = left + 1;
//     setLeft(updatedLeft);
//   };

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"));
//     const updatedRight = right + 1;
//     setRight(updatedRight);
//   };

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

//// EVENT HANDLING REVISITED ////

// const Display = (props) => <div>{props.value}</div>;

// const Button = (props) => {
//   return <button onClick={props.handleClick}>{props.text}</button>;
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   const setToValue = (newValue) => {
//     console.log("value now", newValue);
//     setValue(newValue);
//   };

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="zero" />
//       <Button handleClick={() => setToValue(value + 1)} text="inc" />
//     </div>
//   );
// };

export default App;
