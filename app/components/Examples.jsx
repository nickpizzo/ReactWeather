var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center">examples</h1>
    <p>Example locations</p>
    <ol>
      <li>
        <Link to='/?location=LasVegas'> Las Vegas, NV </Link>


      </li>
      <li>

      </li>
    </ol>
    </div>
  )
}

module.exports = Examples;
