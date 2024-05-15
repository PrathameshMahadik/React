/* 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */
import "../../../css/Day2Task2.css";

const UserCard = (props) => {
  const { userData } = props;
  return (
    <div className="main">
      {userData.map((x, index) => {
        return (
          <p key={`name_${index}`} className="card">
            <img src={x.avatarURL} alt="" className="avatar" />
            <div className="user-info">
              <p>Username :{x.name}</p>
              <p>Email ID :{x.email}</p>
            </div>
          </p>
        );
      })}
    </div>
  );
};
export default UserCard;
