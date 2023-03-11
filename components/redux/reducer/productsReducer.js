import i1 from '../../../assets/card_i1.png'
import i2 from '../../../assets/card_i2.png'
import i3 from '../../../assets/card_i3.png'

export const initialState = [
  {
    id: 0,
    image: i1,
    name: "Spicy seasoned seafood noodles",
    price: "2.29",
  },
  {
    id: 1,
    image: i2,
    name: "Salted Pasta with mushroom sauce",
    price: "2.99",
  },
  {
    id: 2,
    image: i3,
    name: "Beef dumpling in hot and sour soup",
    price: "3.29",
  }
]

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return state
    case 'DELETE_PRODUCTS':
     return state.filter(item=> item.id != action.id)
    
    default:
      return state
  }
}
