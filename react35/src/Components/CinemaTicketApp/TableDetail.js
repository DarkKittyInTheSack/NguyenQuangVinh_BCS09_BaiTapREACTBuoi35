import React from 'react'
import { useSelector } from 'react-redux'

const TableDetail = () => {
  const {cinemaDataList} = useSelector((state) => state.ticketReducer)
  console.log(cinemaDataList);
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
        </tr>
      </thead>
      <tbody>
          {
            cinemaDataList.length == 0 ? <p></p> :
            cinemaDataList.map((item,index) =>{
              return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td className="px-6 py-4">
                {item.seatList}
              </td>
            </tr>
            })
          }
        
      </tbody>
    </table>
    </div>
  )
}

export default TableDetail