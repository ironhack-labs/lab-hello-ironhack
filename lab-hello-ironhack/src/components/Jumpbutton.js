import "../styles/Jumpbutton.css";

export default function Jumpbutton() {
  return (
    <div className="jumbotron rounded-0">
      <div className="container">
        <div className="col-6 px-5">
          <h1 className="display-4 font-weight-bolder">
            Say hello to <br /> ReactJS
          </h1>
          <p className="lead">
            You will learn hoy to use <br />
            the most popular frontend library, <br />
            and become a super Ninja developer.
          </p>
          <a
            className="btn btn-primary btn-lg font-weight-bold"
            href="#"
            role="button"
          >
            Awesome!
          </a>
        </div>
      </div>
    </div>
  );
}
