import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import github from '../img/social/github-icon.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import gatsby from '../img/social/gatsbyLogo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="columns footer">
        <div className="column has-text-left social">
          <Link to="/" title="Logo">
            <img src={logo} alt="Kraefted" style={{ width: '1.5em', height: '1.5em' }} />
          </Link>
          <a href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width={128} height={24} />
          </a>
          <a title="gatsby" href="https://gatsby.com">
            <img
              src={gatsby}
              alt="Gatsby"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
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
