import React from 'react';
import SocialMedia from './SocialMedia';

class Media extends React.Component {
  render() {
    return (
      <div className="media container bg-light m-2 p-3 shadow-lg text-center">
        <div className="col-4">
          <img id="mediaImg" className="img-thumbnail img-fluid" src={"https://avatars2.githubusercontent.com/u/36834793?v=4"} alt="Patrick" /><br />
          <SocialMedia />
        </div>

        <div className="col-8 media-body">
          <h3 className="media-header text-dark p-1">Patrick Powell</h3>
          <p className="media-text text-dark p-1">
            This site is designed using React and Bootstrap. I use Netlify as a CDN and Gatsby as the static site generator.
          </p>
        </div>

      </div>
    );
  }
}

export default Media;
