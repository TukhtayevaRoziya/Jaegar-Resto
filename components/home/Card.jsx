import React from 'react'
import i1 from '../../assets/card_i1.png'
import Image from 'next/image';

const Card = ({data=[
  {id:0, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
 { id:1, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
  {id:2, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
  {id:3, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
  {id:4, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
  {id:5, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
  {id:6, image: i1, name:'Spicy seasoned seafood noodles', price:'2.29', available:'20 Bowls'},
]}) => {
  if(!data){
    return <>Loading...</>
  }
  const dataMap = data.map(d=>(
    <div key={d.id}>
      <Image src={d.image} alt='' />
      <h1>{d.name}</h1>
      <h1>${d.price}</h1>
      <h1>{d.available} available</h1>
    </div>
  ))
  return (
    <div>
      {dataMap}
    </div>
  )
}

export default Card
