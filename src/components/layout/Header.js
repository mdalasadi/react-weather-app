import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                {/* Weather icon */}
                <span>weatherly.io</span>
            </div>
            <form className="header__search">
                {/* Location icon */}
                <input type="text" maxLength='15' placeholder='Enter zip code or city here...' />
            </form>
            <div className="header__info">
                {/* Clock icon */}
                <span className="header__day">Sunday</span>
                <span className="header__time">9:31 PM</span>
            </div>
        </header>
    )
}

export default Header;