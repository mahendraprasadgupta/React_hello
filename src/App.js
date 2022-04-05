//import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
//import Welcome from "./components/Welcome";
//import Hello from "./components/JSXComparision";
//import User from "./components/PropsExample";
import Person from "./components/PropsExampleClassComponent";
//import StateExample from "./components/StateExample";
//import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import CSSExample from "./components/CSSExample";
import "./CSSExapme.css";
import { buildQueries } from "@testing-library/react";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentExample from "./components/FragmentExample";
import FragmentWithShortHand from "./components/FragmentWithShortHand";


function App() {
  const stylesheet = {
    color:'blue'
  }
  return (
    <div className="App">

    <FragmentWithShortHand/>
    {/* <FragmentExample/> */}
    {/* <LifeCycleA/> */}
    {/*<Form/>*/}
    {/*<h1 className="heading">Hello App</h1>
    <h1 style={stylesheet}>Inline</h1>
      <Greet />
  <CSSExample/>*/}
      {/* <ListRendering/> */}
      {/* <ConditionalRendering/> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick/> */}
      {/* <EventBinding/> */}
      {/*<ClassClick/>*/}
      {/*
      <Welcome />
      <Hello />
      <User name="Mahendra">How are you and your faimly</User>
      <Person name="Mahendra">How are you and your faimly</Person>
      <StateExample/>
      <Counter/>
      */}

      
    </div>
  );
}

export default App;
