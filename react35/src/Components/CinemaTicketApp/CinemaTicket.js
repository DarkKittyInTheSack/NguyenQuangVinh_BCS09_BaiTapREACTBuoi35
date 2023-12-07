import React from 'react'
import './BaiTapBookingTicket.css'
import CinemaContent from './CinemaContent'

const CinemaTicket = () => {
  return (
    <div>
        <div className="container mx-auto px-auto py-5">
            <header>
                <h1 className="font-bold text-2xl text-center text-orange-500">Đặt vé xem phim CyberCinema.vn</h1>
                
            </header>
            <CinemaContent/>
        </div>
    </div>
  )
}

export default CinemaTicket