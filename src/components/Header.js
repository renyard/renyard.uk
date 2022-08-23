import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Renyard</h1>
        <p>Acid House DJ, Radio Host & Promoter</p>
        <p>
          <span class="icon fa-map-marker"></span> London, United Kingdom
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('bio')
            }}
          >
            Bio
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('music')
            }}
          >
            Music
          </a>
        </li>
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('epk')
            }}
          >
            EPK
          </a>
        </li> */}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/renyarduk"
          className="icon fa-twitter"
          target="_blank"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com/renyard"
          className="icon fa-facebook"
          target="_blank"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/renyarduk"
          className="icon fa-instagram"
          target="_blank"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://soundcloud.com/renyard"
          className="icon fa-soundcloud"
          target="_blank"
        >
          <span className="label">Soundcloud</span>
        </a>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
