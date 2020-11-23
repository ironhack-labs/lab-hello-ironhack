import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumpbutton from "./components/Jumpbutton";
import Card from "./components/Card";

const info = [
  {
    title: "Declarative",
    content: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    content: "Build encapsulated components that manage their state.",
  },
  {
    title: "Single-Way",
    content: "A set of immutable values are passed to the component's.",
  },
  {
    title: "JSX",
    content: "Statically-typed designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="">
      <Navbar />
      <Jumpbutton />
      <div className="container py-5">
        <div className="card-deck my-5 py-5">
          <Card title={info[0].title} content={info[0].content} indx={1} />
          <Card title={info[1].title} content={info[1].content} indx={2} />
          <Card title={info[2].title} content={info[2].content} indx={3} />
          <Card title={info[3].title} content={info[3].content} indx={4} />
        </div>
      </div>
    </div>
  );
}

export default App;
