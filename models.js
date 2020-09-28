class Restaurant {
    constructor({name, image = "http://image.url"}) {
        if (!name) throw new Error('Restaurant must have a name')
        this.name = name
        this.image = image
        this.menus = []
    }
    addMenu(menu){
        this.menus.push(menu)
    }
}

class Menu {
    constructor({title}) {
        this.title = title
        this.items = []
    }
    addItems({name, price}){
        this.items.push({name, price})
    }
}

class Item {
    constructor({name, price}) {
        if (!price) throw new Error('Items must have a price')
        this.name = name
        this.price = price
    }
}

module.exports = {
    Restaurant,
    Menu,
    Item
}