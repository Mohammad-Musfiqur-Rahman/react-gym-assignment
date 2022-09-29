import React from 'react';

const Qustions = () => {
    return (
        <div className='bg-info py-5'>
            <div className="container">
            <h1>Question Answer</h1>
            <hr />
            <div className="className">
                <h2>1.How does React work?</h2>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                </p>
            </div>
            <div className="className">
                <h2>2.Difference between Props and State </h2>
                <p>Props	vs State
1.	Props are read-only.	State changes can be asynchronous.
2.	Props are immutable.	State is mutable.
3.	Props allow you to pass data from one component to other components as an argument.	State holds information about the components.
4.	Props can be accessed by the child component.	State cannot be accessed by child components.
5.	Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.
6.	Stateless component can have Props.	Stateless components cannot have State.
7.	Props make components reusable.	State cannot make components reusable.
8.	Props are external and controlled by whatever renders the component.	The State is internal and controlled by the React Component itself.</p>
            </div>
            <div className="className">
                <h2>3.Why useEffect use in React, expect loading data? </h2>
                <p> useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!

Fully understanding effects is a complex issue. As Dan Abramov of the React team stated, you might have to unlearn some things to fully grasp effects.

With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.

The goal of this comprehensive article is to gather information about the underlying concepts of useEffect and, in addition, to provide learnings from my own experience with the useEffect Hook.
For example, now that I have dealt with useEffect for quite some time, I have realized that it is key to fully understand the component flow of functional components. As such, this aspect is an important topic in this article.

I aim to provide a guide that both newbies and experienced React developers will find valuable and informative. Throughout the article, I provide many code examples to explain crucial concepts. These code snippets are part of my companion</p>
            </div>
            </div>



        </div>
    );
};

export default Qustions;