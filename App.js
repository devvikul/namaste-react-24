const parent = React.createElement("div", { id: "parent", xyz: "abc" }, [
  React.createElement(
    "div",
    { id: "childOne", xyz: "abc" },
    React.createElement(
      "h1",
      { id: "heading1", xyz: "abc1" },
      "This is Namaste React from React"
    )
  ),
  React.createElement(
    "div",
    { id: "childTwo", xyz: "abcd" },
    React.createElement(
      "h1",
      { id: "heading2", xyz: "abc2" },
      "This is Namaste React from React Two"
    )
  ),
]);
// const heading = React.createElement("h1",{ id:"heading", xyz:"abc"},"This is Namaste React from React")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
