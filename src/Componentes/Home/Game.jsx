import React from 'react'
import { Timeline } from './TimeLine'
import { timelineData } from '@/data/timelineData'
import Titulo from '../Titulo'

const Game = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center pt-5'>
        <div className='w-9/10 flex text-3xl font-bold pb-5 items-start text-start'>
            <h1 className='py-5 text-amarelo border-b-2 border-amarelo text-3xl font-bold'>GAMEFICAÇÃO</h1>
        </div>
        <Timeline data={timelineData}/>
    </div>
  )
}

export default Game