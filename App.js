/*------------------Nested element----------------------*/
{/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>

     <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div> */}
// React.Element(Object)=>HTML(Browser Understand)
/*----------------------------------------*/


const parent = React.createElement("div", 
{ id: "parent" },
    [React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "i'm a h2 tag")] // array of children
)],
React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "i'm a h2 tag")] // array of children
    )
);


// helo world in react
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent); // object return
root.render(parent);