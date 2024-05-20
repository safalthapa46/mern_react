import React, { useState } from 'react'
import Hook from '../../hooks/Hook'
import Color from '../../hooks/Color'

const Home = () => {
  const [color1, setColor] = useState('bg-green-50')
  return (
    <div>
      <Hook />
      <div className={`${color1} p-20`}>{color1}</div>

      <Color
        buttonName={"change to blue"}
        colorChange={() => setColor('bg-blue-500')} />

      <Color
        buttonName="change to yellow"
        colorChange={() => setColor('bg-yellow-500')} />

      <Color
        buttonName="change to purple"
        colorChange={() => setColor('bg-purple-500')} />

      <Color
        buttonName="change to red"
        colorChange={() => setColor('bg-red-500')} />

      <Color
        buttonName="change to pink"
        colorChange={() => setColor('bg-pink-500')} />

    </div>
  )
}

export default Home
