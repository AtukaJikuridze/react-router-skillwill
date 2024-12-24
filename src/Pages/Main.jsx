import { personInfo } from "../personInfo";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <div className="main-info">
        <img src={personInfo.image} alt="" />
        <h1>
          {personInfo.name} {personInfo.lastName}
        </h1>
       
      </div>
    </main>
  );
};

export default Main;
