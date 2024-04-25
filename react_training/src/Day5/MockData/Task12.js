const buttons = [
  {
    label: "Primary Button",
    style: { background: "green", color: "white", width: "150px",height:"50px" },
    onClick: () => alert("Primary button clicked"),
  },
  {
    label: "Secondary Button",
    style: { background: "yellow", color: "black"},
    onClick: () => alert("Secondary button clicked"),
  },
  {
    label: "Danger Button",
    style: { background: "red", color: "white", width: "150px" },
    onClick: () => alert("Danger button clicked"),
  },
];

export { buttons };
