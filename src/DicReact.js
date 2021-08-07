// const element = <h1 title="foo">hello<h1>;

// const element = {
// 	type: 'h1',
// 	props: {
// 		title: 'foo',
// 		children: 'Hello'
// 	}
// }

// const container = document.getElementById("root");

// React.render(element, container);

// React.render 替换内容
// const node = document.createElement(element.type);
// node['title'] = element.props.title;

// const text = document.createTextNode("");
// text['nodeValue'] = element.props.children;

// node.appendChild(text);
// container.appendChild(node);


function createElement(type, props, ...children) {
	return {
		type,
		props: {
			...props,
			children: children.map(child => {
				typeof child === "object" 
					? child
					: createTextElement(child)
			}),
		}
	}
}

function createTextElement (text) {
	return {
		type: "TEXT_ELEMENT",
		props: {
			nodeValues: text,
			children: []
		}
	}
}

const Didact = {
	createElement
}

// const element = Didact.createElement{
// 		"div",
// 	{
// 		id: "foo",
// 	},
// 	React.createElement("a", null, "bar"),
// 	React.createElement("b")
// }


// const element = React.createElement(
// 	"div",
// 	{
// 		id: "foo",
// 	},
// 	React.createElement("a", null, "bar"),
// 	React.createElement("b")
// )

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

const container = document.getElementById("root");

React.render(element, container);