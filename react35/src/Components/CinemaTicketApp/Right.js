import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getData } from '../../Redux/reducer/ticketReducer'
import TableDetail from './TableDetail'
import Note from './Note'

const Right = () => {
  const dispatch = useDispatch()
  const form = useForm()

  const {register,getValues,handleSubmit, formState:{errors}} = form
  const onSubmit = (data) => {
    data.seatList = []
    data.priceList=[]
    data.statusList=[]
    dispatch(getData(data))
  }

  return (
    <div className='w-full p-10'>
        <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Tên khách hàng</label>
            <input type="text"
              {...register('name',{required:'Vui lòng nhập vào tên khách hàng'})}
             id="name"
             name='name'
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Vui lòng nhập tên khách hàng" />
             {
              errors.name && (
                <span className='text-red-500 text-sm'>{errors.name.message}</span>
              )
             }
        </div>

        <button 
           type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Bắt đầu đặt vé</button>
        </form>

        <TableDetail/>
        <Note/>
    </div>
  )
}

export default Right