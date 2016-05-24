var React = require('react');

// this refactor only availbale becuase this component doesnt touch state

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">about component</h1>
      <p>This is a weather application built on React</p>
      <p>Tools used to build this app</p>
    </div>
  )
};

module.exports = About;
