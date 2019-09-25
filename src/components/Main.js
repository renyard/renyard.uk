import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="bio"
          className={`${this.props.article === 'bio' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bio</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            After buying his first set of decks in 2000, Renyard quickly started
            playing house parties and bars. However, he really found his footing
            in 2001 after teaming up with his twin brother to form Maverick DJs
            for a weekly radio show playing House music on C4 Radio in
            Canterbury.
          </p>
          <p>
            As part of Maverick DJs, Renyard played weekly residencies at
            several club nights around Kent and in 2002 started playing regular
            guest slots for Devious and the UK Weekender festivals. At these
            events he played alongside some of the biggest names in dance music
            including Judge Jules, Brandon Block, Lisa Lashes and Graham Gold.
          </p>
          <p>
            In 2004 Renyard launched the Soirée club night to showcase Maverick
            DJs eclectic taste in music, playing across the spectrum of House
            music from Funky House to Techno with many of their own edits and
            mash ups. He later invited Tim Green to become the third resident
            and play his first House & Techno gigs after being impressed by his
            original productions which would later be signed to labels such as
            Cocoon and Dirty Bird.
          </p>
          <p>
            Renyard has an eclectic taste in music having played many different
            styles over the years. In 2010 he made the finals of a national DJ
            competition by seamlessly mixing Rock & Indie with Dance Music and
            being the only DJ in the competition to step outside of the
            electronic music scene.
          </p>
          <p>
            After taking a break from DJing for several years, Renyard returned
            in 2017 to launch a new club night in Edinburgh called CTRL Z. This
            night championed bass music including Bassline House, Drum & Bass
            and Grime, which was a rarity in the city at the time. CTRL Z ran
            through 2018 until Renyard left Edinburgh to return to London.
          </p>
          <p>
            In 2019 Renyard is focused on House Music once again and celebrated
            Soirée's 15th birthday with a one off event with Maverick DJs
            playing an all night set for the first time together in 6 years. He
            also played Ibiza for the first time with Wunderground and Ibiza
            Club News.
          </p>
          {close}
        </article>

        <article
          id="music"
          className={`${this.props.article === 'music' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Music</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/681385016&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          {close}
        </article>

        <article
          id="epk"
          className={`${this.props.article === 'epk' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
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
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
