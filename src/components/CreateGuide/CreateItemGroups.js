import React from 'react'

import Items from '../../data/Items'
import { FormikInput } from '../FormikPremades'
import SelectSearch from 'react-select-search'

const AddItemsSearch = ({ setItems, items, groupName }) => {
    const itemValues = Object.entries(Items).map(item => {
        return { name: item[1].name, value: item[0], link: item[1].link }
    })

    function renderItemSearch(props, option, snapshot, className) {
        const imgStyle = {
            borderRadius: '50%',
            verticalAlign: 'middle',
            marginRight: 10,
        }

        return (
            <button {...props} className={className} type="button" value={option.value}>
                <span><img alt="" style={imgStyle} width="32" height="32" src={option.link} /><span>{option.name}</span></span>
            </button>
        )
    }


    function addItem(value) {
        const updatedSection = items.filter(section => section.groupName === groupName)[0]
        updatedSection.items = updatedSection.items.concat(value)
        setItems(items.map(item => item.groupName === groupName ? updatedSection : item))
    }

    return (
        <SelectSearch
            className="select-search select-search--multiple select-parent"
            options={itemValues}
            renderOption={renderItemSearch}
            search
            placeholder="Add items"
            onChange={addItem}
        />
    )

}

const GuideCreationSegment = ({ section, items, setItems }) => {

    function deleteItem(sectionToModify, key) {
        const sectionWithoutItem = { ...sectionToModify }
        sectionWithoutItem.items.splice(key, 1)
        setItems(items.map(group => group.groupName === sectionWithoutItem.groupName ? sectionWithoutItem : group))
    }

    function deleteSection(sectionName) {
        setItems(items.filter(item => item.groupName !== sectionName))
    }

    return (
        <div style={{ maxHeight: '180px', position: 'relative' }} className='flexRow'>
            <div className='guideSection createGuideItemSection'>
                <div className='guideSectionTitle'>{section.groupName}</div>
                <div className='guideItems'>
                    {section.items.map((x, key) => {
                        return (
                            <div key={key} className='itemCell'>
                                <img
                                    src={Items[x].link}
                                    className='itemIcon'
                                />
                                <div className='itemText'>{Items[x].name}</div>
                                <button className='removeItemButton' onClick={() => deleteItem(section, key)}  >X</button>
                            </div>
                        )
                    })}
                </div>

                <button className='removeItemButton' onClick={() => deleteSection(section.groupName)}  >X</button>
                <span className='guideSectionBackground' />
            </div>
            <div style={{ overflow: 'visible' }}>
                <AddItemsSearch groupName={section.groupName} items={items} setItems={setItems} />
            </div>
        </div>
    )
}

const CreateItemGroups = ({ items, setItems }) => {

    function addSegment(event) {
        setItems(items.concat({ groupName: event.inputValue, items: [] }))
    }

    return (
        <div className='guideItems flexColumn'>
            <div className='centerText flexColumn'>
                <h2 className='centerText bottomSpacing'>Items</h2>
                <div className='bottomSpacing'>Type a section name in, then click the button</div>
                <div className='bottomSpacing'>Then add as many items as needed to a section</div>
                <div className='guideListDetails'>
                    <div style={{ marginTop: '25px' }} className='rightSpacing'>Section name:</div>
                    <FormikInput onSubmit={addSegment} buttonText='Add Section' uniqueValues={items.map(x => x.groupName)} />
                </div>
            </div>
            <div className='flexColumn'>
                {items.map((section, key) => <GuideCreationSegment key={key} section={section} items={items} setItems={setItems} />)}
            </div>
        </div>
    )
}

export default CreateItemGroups