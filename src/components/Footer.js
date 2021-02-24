import React, { useState } from 'react'

import SteamLogo from '../images/SteamLogo.png'
import PatronLogo from '../images/PatronLogo.png'

const Footer = () => {
    const [footerState, setFooterState] = useState(false)
    return (
        <div className={`footer flexRow ${footerState ? 'active' : ''}`} onMouseEnter={() => setFooterState(!footerState)} onMouseLeave={() => setFooterState(!footerState)}>
            <div className={`flexRow footerIcons ${footerState ? 'active' : ''}`}>
                <img src={SteamLogo} className='footerIcon'/>
                <img src={PatronLogo} className='footerIcon'/>
                <img src='https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png' className='footerIcon'/>
            </div>
            <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2208582400' className={`steamBannerLink ${footerState ? 'active' : ''}`}>
                <img src='https://www.gamerevolution.com/assets/uploads/2012/06/file_3080_SteamWorkshoplogo_1328763363.jpg' id='steamWorkshopBanner' />
            </a>

            <a className={`discordIcon cleanLink ${footerState ? 'active' : ''}`} href='https://discord.gg/SwjCcH4'>
                <div className='discordDetailsParent'>
                    <img className='discordImage' src='https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png' />
                    <div className='discordText'>Join the Aghanim&apos;s Pathfinders discord</div>
                </div>
                <span className='discordButton'>Join Server</span>
            </a>
            <a className={`patreonSidebar ${footerState ? 'active' : ''}`} href='https://www.patreon.com/bePatron?u=24240916'>
                <img src='https://cdn.iconscout.com/icon/free/png-256/patreon-1693553-1442594.png' className='patreonImage' />
                <div id='patreonSupportText'>support the mod</div>
                <div id='patreonEndText'>and get cosmetic rewards</div>
            </a>
        </div>
    )
}

export default Footer