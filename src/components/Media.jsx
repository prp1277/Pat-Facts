import React from 'react';
import SocialMedia from './SocialMedia';

class Media extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid bg-light shadow-lg">

        <div className="media bg-light p-3 shadow-lg">

          <div className="media-body flex-row p-1">
            <img className="img-thumbnail align-self-center p-1" src={"https://avatars2.githubusercontent.com/u/36834793?v=4"} alt="Patrick" />
            <h3 className="text-dark p-1">Patrick Powell</h3>
            <p className="text-dark p-1">This site is designed using React and Bootstrap. I use Netlify as a CDN and Gatsby as the static site generator.</p>
            <SocialMedia />
          </div>

        </div>

      </div>
    );
  }
}

export default Media;
