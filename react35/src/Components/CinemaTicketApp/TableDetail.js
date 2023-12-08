import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const TableDetail = () => {
  const {cinemaDataList} = useSelector((state) => state.ticketReducer)
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Tên khách hàng
          </th>
          <th scope="col" className="px-6 py-3">
            Số ghế
          </th>
          <th scope="col" className="px-6 py-3">
            Giá tiền
          </th>
        </tr>
      </thead>
      <tbody>
          {
            cinemaDataList.length === 0 ? <tr></tr> :
            cinemaDataList.map((item,index) =>{
              const {seatList,name,priceList} = item
              return(
                seatList.map((item,index) =>{
                  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                  </th>
                  <td className="px-6 py-4">
                    {item}
                  </td>
                  <td className="px-6 py-4">
                    {priceList[index]}
                  </td>
                </tr>
                })
              )
            })
          }
        
      </tbody>
    </table>
    </div>
  )
}

export default TableDetail