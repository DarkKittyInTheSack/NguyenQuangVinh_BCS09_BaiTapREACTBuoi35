
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, setCinemaDataList } from '../../Redux/reducer/ticketReducer'

const Left = () => {
    const [listSeat,setSeat] = useState([])
    const {userInformation} = useSelector((state) => state.ticketReducer)
    const dispatch = useDispatch()
    let seatsChoose = [],replica = {}
    const {seatData} = useSelector((state) => state.ticketReducer)
    
    useEffect(() =>{
        seatData.then((res) => setSeat(res)).catch((err) => console.log(err))
    },[])

  return (
    <div>
        <div className="mx-auto my-3">
            <div className='screen mx-auto w-full mb-3'></div>
            <div className='flex justify-between items-center'>
                <p className="rowNumber font-bold text-xl text-center"></p>
                {
                    listSeat.filter((item,index) => item.hang =='A').map((item,index) =>{
                        const {danhSachGhe} = item
                        return (
                            danhSachGhe.map((item,index) => {
                                let seat = index+1
                                return (<p className="rowNumber font-bold text-xl text-center">{seat}</p>)
                            })
                        )
                        
                    })
                }
            </div>
            <div className="">
            {
                listSeat.map((item,index) =>{
                    const {hang,danhSachGhe} = item
                    return( 
                        <div>
                        <div className="flex justify-between items-center">
                            <p className="rowNumber font-bold text-xl text-center">{hang}</p>
                            <div className='flex justify-between items-center'>
                                {
                                    danhSachGhe.map((item,index) =>{

                                        const {soGhe} = item
                                        return (
                                            <input id="check" value={soGhe} type="checkbox" className="ghe mb-3 w-3 h-3 accent-green-500  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent" 
                                            onClick={() => { 
                                                seatsChoose.push(soGhe)
                                                
                                                replica.quantity = userInformation.quantity
                                                replica.seatList = userInformation.seatList.concat(seatsChoose)
                                                replica.name = userInformation.name
                                                dispatch(getData(replica))
                                             }}/>                                  
                                        )
                                    })
                                }
                            </div>  
                        </div>
                        </div>
                    )
                })
            }
            </div>
            <button 
            onClick={() =>{
                replica.quantity = userInformation.quantity
                replica.seatList = userInformation.seatList
                replica.name = userInformation.name
                dispatch(setCinemaDataList(replica))
            }}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 my-3 mx-auto">
                    Xác nhận chỗ đặt</button>
        </div>
    </div>
  )
}

export default Left