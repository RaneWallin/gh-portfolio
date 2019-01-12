import "../styles/TagCloud.scss";

import React from "react";

const TagCloud = props => {
  return (
    <div className="tagtainer">
      <h2>Skills</h2>
      <div className="tags">
        <i className="devicon-c-plain" />
        <i className="devicon-csharp-plain" />
        <i className="devicon-git-plain" />
        <i className="devicon-gitlab-plain" />
        <i className="devicon-heroku-original" />
        <i className="devicon-java-plain-wordmark colored" />
        <i className="devicon-javascript-plain colored" />
        <i className="devicon-jetbrains-plain colored" />
        <i className="devicon-less-plain-wordmark colored" />
        <i className="devicon-mysql-plain-wordmark colored" />
        <i className="devicon-nodejs-plain colored" />
        <i className="devicon-php-plain colored" />
        <i className="devicon-python-plain-wordmark colored" />
        <i className="devicon-webstorm-plain" />
        <i className="devicon-react-original-wordmark" />
        <i className="devicon-github-plain" />
        <i className="devicon-html5-plain-wordmark" />
        <i className="devicon-linux-plain" />
        <i className="devicon-sass-original" />
        <i className="devicon-slack-plain" />
      </div>
    </div>
  );
};

export default TagCloud;
