import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="HeadBg">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="headImg"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button type="button" className="btn" data-testid="hamburgerIconButton">
          <>
            <GiHamburgerMenu className="menu" />
            <p>''</p>
          </>
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <ul className="mg">
            <div className="closeBg">
              <Link to="/">
                <li>
                  <button
                    type="button"
                    className="btn"
                    data-testid="hamburgerIconButton"
                  >
                    <AiFillHome className="icon" />
                    <h1>Home</h1>
                  </button>
                </li>
              </Link>

              <Link to="/about">
                <li>
                  <button
                    type="button"
                    className="btn"
                    data-testid="hamburgerIconButton"
                  >
                    <BsInfoCircleFill className="icon" />
                    <h1>About</h1>
                  </button>
                </li>
              </Link>
            </div>

            <button type="button" className="btn" data-testid="closeButton">
              <>
                <IoMdClose className="close" onClick={() => close()} />
                <p>''</p>
              </>
            </button>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
