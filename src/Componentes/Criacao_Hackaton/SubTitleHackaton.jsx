import React from 'react'

const SubTitleHackaton = ({texto, cor1, cor2}) => {
  return (
    <div className="flex text-xl font-bold pb-5 items-start text-start">
      <h1
        style={{
          color: cor1,
          borderColor: cor1,
        }}
        className="py-5 border-b-2"
      >
        {texto}
      </h1>
      <h1
        className="py-5 pl-1 border-b-2"
        style={{
          color: cor2,
          borderColor: cor2,
        }}
      >
        {texto}
      </h1>
    </div>
  )
}

export default SubTitleHackaton