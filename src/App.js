import logo from "./logo.svg";
import ExampleComponent from "./components/ExampleComponent";
import "./App.css";
import OurServices from "./components/OurServices";
import Wrapper from "./components/Wrapper";

function App() {
  let studentName = "Olamilekan";
  const cars = ["mercedes", "lambo", "ferrari", "tesla"];

  const h1Style = { color: "purple", backgroundColor: "aqua", padding: "10px" };
  return (
    <div className=''>
      <Wrapper>
        <h1>Hello</h1>
      </Wrapper>
      <header className=' home'>
        <h1 style={h1Style}> This is my first react app</h1>
        <h1>Hello</h1>
        <div className='flex'>
          <ExampleComponent />
          <ExampleComponent />
          <ExampleComponent />
          <ExampleComponent />
          <ExampleComponent />
        </div>
        A town hall different from bala blu, blue blu bulaba. broom broom broom
        brooooooooom. Bala blu blue blu bulaba.
        <OurServices
          title='Accept Tokens'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis recusandae dolorum corporis earum, quos tenetur error amet sit ducimus enim in voluptatem asperiores, repellendus possimus voluptatum iste facilis totam.'
        />
        <OurServices
          title='Make Payments'
          body='A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.'
        />
        <h1>1 + 1</h1>
        <h1 className='example'>{studentName}</h1>
        <ul>
          {cars.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul>
          <li>Global Styling</li>
          <li>Inline Styling</li>
          <li>Module Styling</li>
        </ul>
      </header>

      <Wrapper>
        <h1 style={{ color: "red" }}>Hello World</h1>
        <p>Hi</p>
      </Wrapper>
    </div>
  );
}

export default App;
