/* 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */
import "./index.css";
const UserCard = (props) => {
  const { userData } = props;
  return (
    <div className="main">
      {userData.map((x, index) => {
        return (
          <section key={`name_${index}`} className="card">
            <img src={x.avatarURL} alt="" className="avatar" />
            <div className="user-info">
              <h2>Username :{x.name}</h2>
              <p>Email ID :{x.email}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default UserCard;
