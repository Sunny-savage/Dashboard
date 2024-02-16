import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {
  //fetch data and send to component
  return (
    <div>
      <Single  {...singleUser}/>
    </div>
  );
};

export default User;
