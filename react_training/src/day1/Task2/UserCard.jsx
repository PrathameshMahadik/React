/* 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */
const UserCard = (props) => {
  const { name, email, avatarURL } = props;
  return (
    <div id="card">
      <img src={avatarURL} alt="" />
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};
export default UserCard;
