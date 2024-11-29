import "./App.css";
import myImg from "./d.jpg";

function App() {
  return (
    <div className="App">
      <div className="portfolio-box">
        <div className="image-main">
          <img src={myImg} />
        </div>
        <h1 className="name">Avto Jikuridze</h1>
        <hr />
        <p className="description">
          Hello, i’m Avto! I’m a self-taught front-end developer based in
          Tbilisi, Georgia.
          <br /> I can develop responsive websites Transforming my creativity
          and knowledge into a websites has been s my passion for over a year.{" "}
          <br /> I always strive to learn about the newest technologies and
          frameworks.
        </p>
        <hr />
        <div className="contacts-main">
          <h2>Contacts :</h2>
          <div className="contacts">
            <a href="https://www.linkedin.com/in/avto-jikuridze-a4167b26b/">
              Linkedin
            </a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=avtojikuridze@gmail.com&body=my-text">
              Gmail
            </a>
            <a href="https://www.facebook.com/jikuridze.atuka">Facebook</a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
