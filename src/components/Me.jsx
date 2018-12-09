import React from 'react';

class Me extends React.Component {
  render() {
    return (
      <div className="media container">
        <img id="mediaImg" className="img-thumbnail" src={"https://avatars2.githubusercontent.com/u/36834793?v=4"} alt="Patrick" />
        <div className="media-body">

          <h3 className="media-header">Patrick Powell</h3>

          <p className="media-text">
            This site is designed using React and Bootstrap. It is hosted by Netlify and uses Gatsby as the static site generator.
          </p>

        </div>
      </div>
    );
  }
}

export default Me;
