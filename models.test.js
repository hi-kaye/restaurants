const {Restaurant, Menu, Item} = require('./models')

describe('Restaurant', () => {
    test('has a name', () => {
        const restaurant = new Restaurant({name: 'Oeuf'})
        expect(restaurant.name).toBe('Oeuf')
        expect(restaurant.image).toBeTruthy() 
    })

    test('must have a name', () => {
        expect(() => {new Restaurant({})}).toThrow() 
    })
    test('can add a menu to a restaurant', () => {
        const restaurant = new Restaurant({name: 'Oeuf'})
        const menu = new Menu({title: 'Set Menu'})
        restaurant.addMenu(menu)
        expect(restaurant.menus[0]).toEqual(menu)
    })
})

describe('Menu', () => {
    test('has a title', () => {
        const menu = new Menu({title: 'Set Menu'})
        expect(menu.title).toBe('Set Menu')
    })

    test('has items in the menu', () => {
        const menu = new Menu({title: 'Breakfast Menu'})
        menu.addItems({name: 'omelette', price: 4.5})
        expect(menu.items.length).toBeGreaterThanOrEqual(1)
        //expect(Array.isArray(menu.items)).toBeTruthy()
    })
})

describe('Item', () => {
    test('must have a price', () => {
        expect(() => {new Item({})}).toThrow()
    })
    test('has a name and price', () => {
        const item = new Item({name: 'pancakes', price: 6})
        expect(item.name).toBe('pancakes')
        expect(item.price).toBe(6)
    })
})