import React from 'react';

const Qustions = () => {
    return (
        <div className='bg-info'>
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
                <p></p>
            </div>
            <div className="className">
                <h2>3.Why useEffect use in React, expect loading data? </h2>
                <p></p>
            </div>
            </div>



        </div>
    );
};

export default Qustions;