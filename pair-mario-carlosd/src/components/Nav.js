import React, { Component } from 'react'

class Nav extends Component {

    render() {
        return <div class="navBar">
            <nav>
              <section>
                <div>
                  <img class="logo" src="/images/ironhack-logo.svg" />
                </div>
                <div>
                  <img  class="menu" src="/images/menu-top.svg" />
                </div>
              </section>
            </nav>
        </div>
    }
}

export default Nav