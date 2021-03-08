import Items from '../data/Items'

const sortItems = (items) => {
    return [getInventoryItems(items), getBackpackItems(items), getNeutralItem(items)]
}

const getInventoryItems = (items) => {
    if (items.length < 6) {
        let invItems = items.filter(item => !item.neutral)
        while (invItems.length < 6) {
            invItems.push(null)
        }
    }

    return items.slice(0, 6)
}

const getBackpackItems = (items) => {
    if (items.length < 6) return [null, null, null]

    let backpackItems
    if (Items[items[items.length-1]]?.neutral) {
        backpackItems = items.slice(6, items.length-1)
    } else {
        backpackItems = items.slice(6)
    }

    while (backpackItems.length < 3) {
        backpackItems.push(null)
    }
    return backpackItems
}

const getNeutralItem = (items) => {
    if (Items[items[items.length-1]]?.neutral) return items[items.length-1]
    else return null
}

export default sortItems