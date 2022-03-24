import "./App.css";

function Header() {
  return (
    <div className="w-full">
      <div className="relative rounded-lg bg-indigo-700 mx-0 w-full flex flex-col items-center pt-12 sm:pt-36 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
        <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Say Hello To ReactJS</h1>
          <h5 className="mt-8 w-2/3 mx-auto text-3xl font-bold text-center tracking-tight text-white">You will learn how to use the most popular frontend library, and become a super Ninja developer</h5>
        </div>
      </div>
      <div className="container mx-auto flex justify-items-center md:-mt-56 -mt-20 sm:-mt-40">
        <div className="relative w-1/3 mx-auto">
          <img className="rounded-3xl mx-auto w-2/3" src="https://www.nicepng.com/png/full/31-315310_react-hexagon-react-js-transparent-background.png" alt="Sample Page" />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="mt-8">
      <div className="flex flex-col p-4 m-4 items-center max-w-sm bg-white rounded-3xl border border-gray-200 shadow-md">
        <img className="rounded-3xl w-1/2" src={props.img} alt=""></img>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
          <p className="mb-3 font-normal text-gray-700">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <div className="App grid grid-cols-4 justify-items-center w-3/4 mx-auto mb-12">
        <Card img="/images/icon1.png" text="React makes it painless to create interactive UIs." title="Declarative" />
        <Card img="/images/icon2.png" text="Build encapsulated components that manage their own state." title="Component-based" />
        <Card img="/images/icon3.png" text="A set of immutable values are passed to the components." title="Component-based" />
        <Card img="/images/icon4.png" text="Statically-typed, designed to run on modern browsers." title="JSX" />
      </div>
    </div>
  );
}

export default App;
