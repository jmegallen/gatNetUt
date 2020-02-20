import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import github from '../img/social/github-icon.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-left">
          <img
            src={logo}
            alt="Kraefted"
            style={{ width: '1.5em', height: '1.5em' }}
          />
        </div>
        <div className="column has-text-right social">
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="github" href="https://github.com">
            <img
              src={github}
              alt="Github"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
