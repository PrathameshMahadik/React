/* 6.Create a functional component named Button that accepts props for text and color.
Style the button using inline styles or CSS classes based on the color prop.
Import and render the Button component in the App component with different text and color props.*/
function Button(props) {
  const { buttonData } = props;
  return (
    <div>
      {buttonData.map((x,index) => {
        return(
        <button style={{ color: x.color }} key={`color_${index}`}>{x.text}</button>
        )
      })}
    </div>
  );
}
export default Button;
