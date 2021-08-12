import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'
export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
const history=useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed="top">
                {/* inverter qara reng etmek uchundur fixed ise mini deyil normal boyda olmasi uchundur */}
                <Container>
                    {/* container yazilarin bir birinden chox da uzaq olmamasi uchundur */}
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>

                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}



                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
