import React from 'react'
import './Home.css'
import Header from '../../componets/Header/Header'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componets/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category,setCategory] = React.useState('All')

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home