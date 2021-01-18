import React from 'react'
import ImageGallery from 'react-image-gallery'

const workshopImages = [
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1671359530674210070/1E8F5CDE8A54FF1258F4E5154B477A5DC70789E5/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1671359530674210070/1E8F5CDE8A54FF1258F4E5154B477A5DC70789E5/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155887545/614D7B551C765CDB9B2E2595A147221C55D24E14/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155887545/614D7B551C765CDB9B2E2595A147221C55D24E14/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1644340153929327262/CFFD40760C11ED643F2497741F3A50576917165B/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1644340153929327262/CFFD40760C11ED643F2497741F3A50576917165B/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155887524/FF44F7AA4D767079C6CE585A56976E47D6AA4636/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155887524/FF44F7AA4D767079C6CE585A56976E47D6AA4636/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155909878/0F2F37A3C607D77308C0B7508F6A4E55865BE812/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155909878/0F2F37A3C607D77308C0B7508F6A4E55865BE812/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155905774/6AA34660F45A17FE48324B099B816039B7A58AE8/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962155905774/6AA34660F45A17FE48324B099B816039B7A58AE8/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643210071791279792/82073146D5A0AC4E4EBFC22EC3E53AFE3A1E26FB/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643210071791279792/82073146D5A0AC4E4EBFC22EC3E53AFE3A1E26FB/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1535122211001011015/86932F5333802769FF8B3F8EAD94EC18CFB7E70F/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1535122211001011015/86932F5333802769FF8B3F8EAD94EC18CFB7E70F/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1644340153929326849/484E85BB29D25601A86065F79F1AE08D2F6DF0F0/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1644340153929326849/484E85BB29D25601A86065F79F1AE08D2F6DF0F0/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1672484305625156350/3E15C2836FB6C1500A54C9583863E242F4803431/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1672484305625156350/3E15C2836FB6C1500A54C9583863E242F4803431/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        original: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962156653286/A7BE75DE46EDAD636D5F2D1213775A5A7D31A1ED/',
        thumbnail: 'https://steamuserimages-a.akamaihd.net/ugc/1643209962156653286/A7BE75DE46EDAD636D5F2D1213775A5A7D31A1ED/?imw=116&imh=65&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
]

const Main = () => {
    return (
        <div>
            <h1 className='shardTitle heroListTitle mainPageTitle'>Aghanim&apos;s Pathfinders</h1>
            <div className='mainText'>Aghanim&apos;s Pathfinders is a mod that reintroduces the popular Aghanim&apos;s Labyrinth mod to Dota 2.</div>
            <div className='mainText'>This unofficial website hosts a variety of item guides to help with itemising while enjoying the mod.</div>
            <div className='mainText'>The mod can be found on <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2208582400'>the Steam workshop.</a></div>

            <ImageGallery items={workshopImages} className='imageGallery'/>

            <div className='mainText'>If you enjoy playing this mod, considering supporting the creator on their Patreon </div>

            <a className='patreonImage' href='https://steamcommunity.com/linkfilter/?url=https://www.patreon.com/bePatron?u=24240916'>
                <img src='https://i.imgur.com/QBbyykB.png'/>
            </a>
        </div>
    )
}

export default Main