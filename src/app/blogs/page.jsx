import Link from 'next/link';
import React from 'react';
export const metadata = {
  title: {
    absolute: 'Blogs Era'
  },
};
const getTime = async () =>{
  const res = await fetch('http://localhost:3000/time',{next: {revalidate: 5}});
  const data = await res.json()
  return data.currentTime
}

const blogspage = async () => {
const currentTime = await getTime();
    return (
        <div className='p-24'>
          <div className='text-3xl text-center'>
            Time Here : {currentTime}
          </div>
            {
                blogs.map((blog)=>(
                    <div key={blog.id} className='border-2 p-12 border-emerald-400'>
                        <div className='bg-sky-500 p-8'>
                        <h1>Title : {blog.title}</h1>
                        <h1> Author : {blog.author}</h1>
                        <h1>Content : {blog.content}</h1>
                        <Link href={`/blogs/${blog.id}`}><button className='btn p-4 bg-slate-600'>View Details</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const  blogs = [
    {
      "id": 1,
      "title": "Understanding JSX: A Beginner's Guide",
      "author": "Jane Doe",
      "date": "2024-06-19",
      "content": "If you're diving into the world of React, one of the first things you'll encounter is JSX. But what exactly is JSX, and why is it important?\n\n### What is JSX?\n\nJSX stands for JavaScript XML. It's a syntax extension for JavaScript that looks similar to XML or HTML. With JSX, you can write HTML structures in the same file as your JavaScript code, which makes it easier to understand and maintain.\n\n### Why Use JSX?\n\n1. **Improved Readability**: JSX syntax is easier to understand and maintain, especially for those who have a background in HTML.\n2. **Integration with JavaScript**: Since JSX is compiled to JavaScript, you can easily integrate it with your JavaScript logic.\n3. **Component Creation**: JSX makes it straightforward to create and render React components.\n\n### How to Use JSX\n\nHere’s a basic example of JSX in a React component:\n\n```jsx\nimport React from 'react';\n\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nexport default Welcome;\n```\n\nIn this example, the `Welcome` function is a React component that uses JSX to return an HTML-like structure.\n\n### Key Features of JSX\n\n1. **Embedding Expressions**: You can embed JavaScript expressions within JSX using curly braces `{}`.\n2. **Attributes**: JSX allows you to use quotes to specify attributes, similar to HTML.\n3. **Children**: You can nest JSX elements inside other JSX elements."
    },
    {
      "id": 2,
      "title": "Advanced JSX Techniques",
      "author": "John Smith",
      "date": "2024-06-20",
      "content": "Once you're comfortable with the basics of JSX, it's time to explore some advanced techniques to make your React components even more powerful.\n\n### Conditional Rendering\n\nJSX allows you to use JavaScript's conditional operators to decide which elements to render. For example:\n\n```jsx\nfunction Greeting(props) {\n  const isLoggedIn = props.isLoggedIn;\n  return (\n    <div>\n      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}\n    </div>\n  );\n}\n```\n\n### Lists and Keys\n\nRendering lists of elements is simple with JSX. Use the `map` function to create a list of elements:\n\n```jsx\nfunction NumberList(props) {\n  const numbers = props.numbers;\n  const listItems = numbers.map((number) =>\n    <li key={number.toString()}>{number}</li>\n  );\n  return (\n    <ul>{listItems}</ul>\n  );\n}\n```\n\n### Forms in JSX\n\nHandling forms in React using JSX is similar to regular HTML forms, but with some added benefits of React's state management:\n\n```jsx\nclass NameForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {value: ''};\n\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleChange(event) {\n    this.setState({value: event.target.value});\n  }\n\n  handleSubmit(event) {\n    alert('A name was submitted: ' + this.state.value);\n    event.preventDefault();\n  }\n\n  render() {\n    return (\n      <form onSubmit={this.handleSubmit}>\n        <label>\n          Name:\n          <input type=\"text\" value={this.state.value} onChange={this.handleChange} />\n        </label>\n        <input type=\"submit\" value=\"Submit\" />\n      </form>\n    );\n  }\n}\n```\n\nThese advanced techniques will help you build more dynamic and interactive React applications."
    },
    {
      "id": 3,
      "title": "JSX Best Practices",
      "author": "Alice Johnson",
      "date": "2024-06-21",
      "content": "JSX is a powerful tool in the React ecosystem, but it's important to follow best practices to ensure your code is clean, maintainable, and efficient.\n\n### Keep JSX Clean and Readable\n\n1. **Break Down Components**: If a component is getting too large, break it down into smaller, reusable components.\n2. **Consistent Formatting**: Use consistent formatting and indentation to make your code easier to read.\n3. **Descriptive Naming**: Use descriptive names for your components and props.\n\n### Avoid Inline Styles\n\nWhile it's possible to use inline styles in JSX, it's better to use CSS classes or styled-components to keep your styles organized and maintainable.\n\n### Use Fragments\n\nWhen returning multiple elements from a component, use React Fragments to avoid unnecessary wrapper elements:\n\n```jsx\nimport React from 'react';\n\nfunction ListItem(props) {\n  return (\n    <>\n      <dt>{props.term}</dt>\n      <dd>{props.description}</dd>\n    </>\n  );\n}\n```\n\n### Optimize Performance\n\n1. **Avoid Reconciliation**: Use `shouldComponentUpdate` or `React.memo` to prevent unnecessary re-renders.\n2. **Key Props**: Always use unique keys for list items to help React identify which items have changed.\n\nFollowing these best practices will help you write better JSX and build more efficient React applications."
    },
    {
      "id": 4,
      "title": "JSX vs HTML: What's the Difference?",
      "author": "Bob Brown",
      "date": "2024-06-22",
      "content": "While JSX and HTML may look similar, there are key differences between the two that are important to understand when working with React.\n\n### Syntax Differences\n\n1. **Self-Closing Tags**: In JSX, all tags must be properly closed. For example, `<br />` instead of `<br>`.\n2. **JavaScript Expressions**: JSX allows embedding JavaScript expressions inside curly braces `{}`, which is not possible in HTML.\n3. **Attribute Names**: Some attribute names in JSX differ from HTML. For example, `class` becomes `className`, and `for` becomes `htmlFor`.\n\n### Integration with JavaScript\n\nUnlike HTML, JSX is tightly integrated with JavaScript, making it easier to manipulate the DOM and handle events dynamically.\n\n### JSX Compilation\n\nJSX is not understood by browsers directly. It needs to be transpiled into JavaScript using tools like Babel before it can run in the browser.\n\n### Conclusion\n\nWhile JSX and HTML share some similarities, understanding their differences is crucial for effectively working with React and building modern web applications."
    },
    {
      "id": 5,
      "title": "Common JSX Pitfalls and How to Avoid Them",
      "author": "Charlie Green",
      "date": "2024-06-23",
      "content": "Working with JSX can be straightforward, but there are some common pitfalls that developers might encounter. Here are some tips on how to avoid them.\n\n### Misplaced Braces\n\nA common mistake is to misplace curly braces when embedding JavaScript expressions. Make sure that expressions are properly enclosed within `{}`.\n\n### Unclosed Tags\n\nAll JSX tags must be properly closed. Forgetting to close a tag or using a self-closing tag incorrectly can lead to syntax errors.\n\n### Using Reserved Words\n\nAvoid using JavaScript reserved words as attributes or variable names. For instance, `class` should be `className` in JSX.\n\n### Nested Elements\n\nWhen returning multiple elements from a component, ensure they are wrapped in a single parent element or a React Fragment to avoid syntax errors.\n\n### Key Prop Warning\n\nWhen rendering lists, always provide a unique `key` prop to each element. This helps React identify which items have changed and improves performance.\n\nBy being aware of these common pitfalls and following best practices, you can write more reliable and maintainable JSX code."
    },
    {
      "id": 6,
      "title": "JSX in Depth",
      "author": "Diana Lee",
      "date": "2024-06-24",
      "content": "For those looking to deepen their understanding of JSX, let's take a closer look at some of its more complex features and usage patterns.\n\n### JSX Spread Attributes\n\nJSX allows you to spread attributes onto an element using the spread operator `...`. This can be useful for passing props down to child components:\n\n```jsx\nconst props = {firstName: 'John', lastName: 'Doe'};\nconst element = <User {...props} />;\n```\n\n### Custom Components\n\nWhen creating custom components, make sure their names start with a capital letter. This helps React distinguish between HTML tags and custom components:\n\n```jsx\nfunction MyButton(props) {\n  return <button>{props.label}</button>;\n}\n```\n\n### JSX and TypeScript\n\nJSX can be used with TypeScript to provide type safety and better developer experience. Use `.tsx` file extension for TypeScript with JSX:\n\n```tsx\ninterface WelcomeProps {\n  name: string;\n}\n\nconst Welcome: React.FC<WelcomeProps> = ({ name }) => {\n  return <h1>Hello, {name}</h1>;\n};\n```\n\n### Conclusion\n\nUnderstanding the deeper aspects of JSX can greatly enhance your ability to build sophisticated and maintainable React applications."
    },
    {
      "id": 7,
      "title": "Debugging JSX",
      "author": "Ethan Hunt",
      "date": "2024-06-25",
      "content": "Debugging JSX can sometimes be tricky, especially for beginners. Here are some tips to help you troubleshoot common issues.\n\n### Check the Console\n\nThe browser console is your best friend when debugging JSX. Look for error messages and warnings that can provide clues about what went wrong.\n\n### Use React Developer Tools\n\nReact Developer Tools is a browser extension that allows you to inspect the React component tree, check props and state, and identify issues in your application.\n\n### Simplify Your Code\n\nIf you're encountering issues, try simplifying your JSX code to isolate the problem. Break down complex components into smaller, manageable pieces.\n\n### Validate JSX Syntax\n\nEnsure your JSX syntax is correct. Pay attention to closing tags, proper nesting of elements, and the use of curly braces for JavaScript expressions.\n\n### Common Errors\n\n1. **Unterminated JSX Content**: Make sure all tags are properly closed.\n2. **Adjacent JSX Elements**: Wrap multiple adjacent elements in a single parent element or a React Fragment.\n3. **Invalid DOM Nesting**: Follow HTML rules for nesting elements to avoid rendering issues.\n\nBy following these debugging tips, you can effectively troubleshoot and resolve issues in your JSX code."
    },
    {
      "id": 8,
      "title": "Styling Components with JSX",
      "author": "Fiona Harris",
      "date": "2024-06-26",
      "content": "Styling components in React can be done in various ways. Here's how you can use JSX to apply styles to your components.\n\n### Inline Styles\n\nJSX allows you to apply inline styles directly to elements using the `style` attribute. Inline styles are written as JavaScript objects:\n\n```jsx\nconst divStyle = {\n  color: 'blue',\n  backgroundColor: 'lightgray'\n};\n\nfunction StyledComponent() {\n  return <div style={divStyle}>This is a styled component!</div>;\n}\n```\n\n### CSS Classes\n\nFor more complex styles, it's better to use CSS classes. You can assign a class to an element using the `className` attribute:\n\n```jsx\nfunction StyledComponent() {\n  return <div className=\"styled-component\">This is a styled component!</div>;\n}\n```\n\n### CSS Modules\n\nCSS Modules allow you to scope CSS to a specific component, avoiding conflicts with global styles:\n\n```jsx\nimport styles from './StyledComponent.module.css';\n\nfunction StyledComponent() {\n  return <div className={styles.styledComponent}>This is a styled component!</div>;\n}\n```\n\n### Styled Components\n\nStyled-components is a library for React that allows you to use component-level styles in your application. Styles are written using tagged template literals:\n\n```jsx\nimport styled from 'styled-components';\n\nconst StyledDiv = styled.div`\n  color: blue;\n  background-color: lightgray;\n`;\n\nfunction StyledComponent() {\n  return <StyledDiv>This is a styled component!</StyledDiv>;\n}\n```\n\n### Conclusion\n\nWhether you prefer inline styles, CSS classes, CSS Modules, or styled-components, JSX provides the flexibility to style your React components in a way that best suits your project's needs."
    }
  ]

export default blogspage;