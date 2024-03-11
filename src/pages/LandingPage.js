// import logo from "./logo.svg";
// import ExampleComponent from "./components/ExampleComponent";
import OurServices from "../components/OurServices";
import Wrapper from "../components/Wrapper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import SigninPage from "./pages/SigninPage";

function LandingPage() {

    const navigate = useNavigate()
  let studentName = "Olamilekan";
  const cars = ["mercedes", "lambo", "ferrari", "tesla"];
  const h1Style = { color: "purple", backgroundColor: "aqua", padding: "10px" };

  const [age, setAge] = useState(10);

  const updateAge = () => {
    console.log(age, "Before Set Age");
    setAge((prev) => prev + 1);
    console.log(age, "After Set Age");
  };

  const services = [
    {
      title: "Accept Tokens",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat perferendis recusandae dolorum corporis earum, quos tenetur error amet sit ducimus enim in voluptatem asperiores, repellendus possimus voluptatum iste facilis totam.",
    },
    {
      title: "Make Payments",
      body: "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.",
    },
  ];


  const goToSignIn =()=>{



    navigate("/sign-in")

  }
  return (
    <div className=''>
      <h1> Age = {age}</h1>

      <button onClick={() => goToSignIn()}>Change Age </button>

      <Wrapper age={age}>
        <h1>Hello</h1>
      </Wrapper>
      <header className=' home'>
        <h1 style={h1Style}> This is my first react app</h1>
        <h1>Hello</h1>A town hall different from bala blu, blue blu bulaba.
        broom broom broom brooooooooom. Bala blu blue blu bulaba.
        {services.map((service) => (
          <OurServices
            key={service.title}
            title={service.title}
            body={service.body}
          />
        ))}
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
    </div>
  );
}

export default LandingPage;
