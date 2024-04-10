/* 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
Create multiple instances of the UserCard component with different user data. */
const UserCard = (props) => {
  const { userData } = props;
  return (
    <div>
      {userData.map((x,index) => {
        return (
          <section key= {`name_${index}`}>
            <img src={x.avatarURL} alt=""/>
            <br />{x.name}
            <br />{x.email}
          </section>
        );
      })}
    </div>
  );
};
export default UserCard;
