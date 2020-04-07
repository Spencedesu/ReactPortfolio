import React, {Component} from "react";
import {Grid, Cell} from "react-mdl";
class LandingPage extends Component {
  render() {
    return(
      <div style = {{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            className="bitmoji"
             src="https://sdk.bitmoji.com/render/panel/6ce76d26-9c7a-4fd2-8675-f5d4225363d6-3d139a7d-1957-466d-91a8-73b8eca8218b-v1.png?transparent=1&palette=1" alt="spencerBitmoji"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
            <hr/>
            <p> HTML/CSS | Javascript | NodeJS | Express | MongoDB | React</p>
            <div className="social-links">
              
              <a href="https://github.com/Spencedesu" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github"  aria-hidden="true"></i>
              </a>
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin"  aria-hidden="true"></i>
              </a>
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp"  aria-hidden="true"></i>
              </a>

            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;