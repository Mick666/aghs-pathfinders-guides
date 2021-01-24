import React, { useState } from 'react'

import Items from '../Items'
import { FormikInput } from './FormikPremades'
import SelectSearch from 'react-select-search'
import '../../node_modules/react-select-search/style.css'

const AddItemsSearch = ({ setItems, items, groupName }) => {
    const itemValues = Object.entries(Items).map(item => {
        return { name: item[1].name, value: item[0], link: item[1].link }
    })
    const [itemValue, setItemValue] = useState(null)

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
    return (
        <div className='guideSection'>
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
                        </div>
                    )
                })}
                {/* <div className='itemCell'>
                    <img
                        src={PlusSymbol}
                        className='addItemIcon'
                    />
                    <div className='itemText additemText'>Add Item</div>
                </div> */}
            </div>
            <AddItemsSearch groupName={section.groupName} items={items} setItems={setItems}/>
        </div>
    )
}

const CreateItemGroups = ({ items, setItems }) => {

    function addSegment(event) {
        setItems(items.concat({ groupName: event.inputValue, items: [] }))
    }

    return (
        <div className='guideItems'>
            <FormikInput onSubmit={addSegment} buttonText='Add Section' uniqueValues={items.map(x => x.groupName)}/>
            {items.map((section, key) => <GuideCreationSegment key={key} section={section} items={items} setItems={setItems} />)}
        </div>
    )
}

export default CreateItemGroups