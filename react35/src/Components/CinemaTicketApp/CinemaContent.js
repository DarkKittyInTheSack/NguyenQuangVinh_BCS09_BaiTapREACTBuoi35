import React from 'react'
import Left from './Left'
import Right from './Right'

const CinemaContent = () => {
  return (
    <div>
        <div className="mx-auto px-auto py-3">
            <div className="flex items-center">
                <div className="left">
                    <Left/>
                </div>
                <div className="right">
                    <Right/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CinemaContent