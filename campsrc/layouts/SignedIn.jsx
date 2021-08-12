import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C5603AQFOiRd840-2gg/profile-displayphoto-shrink_200_200/0/1624114648072?e=1632355200&v=beta&t=j7aPmIWICP7EaWFshsy5c6FLnzQlY32LYLf_69TVJbU" />
                <Dropdown pointing="top center" text="Intizar">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Məlumatlarım" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıxış et" icon="sign-out" />
                    </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
