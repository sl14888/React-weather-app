import React from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'

import s from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay />
      <ThisDayInfo />
    </div>
  )
}

export default Home