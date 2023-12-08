import React from 'react'
import Right from './Right'
import LeftContent from './LeftContent'

const CinemaContent = () => {
  return (
    <div>
        <div className="mx-auto px-auto py-3">
            <div className="flex items-center justify-between">
                <div className="left">
                    <LeftContent/>
                </div>
                <div className="right w-5/12">
                    <Right/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CinemaContent