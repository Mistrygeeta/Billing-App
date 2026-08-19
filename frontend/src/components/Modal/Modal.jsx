import React from 'react'

const Modal = ({
    title,
    subtitle,
    children,
    onClose,
    onSubmit,
    submitText
}) => {
  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4'>
        <div className='bg-white rounded-xl p-7 w-[500px] shadow-2xl'>
            <div>
                <h2 className='text-2xl font-bold text-slate-900'>{title}</h2>
                <p className='text-gray-500 mt-1'>{subtitle}</p>
            </div>
            <div className='mt-6'>{children}</div>
            <div className='flex justify-end gap-3 mt-6'>
                <button onClick={onClose} 
                className='px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition cursor-pointer'>Cancel</button>
                <button onClick={onSubmit}
                className='bg-slate-900 text-white rounded-lg px-5 py-2.5 hover:bg-slate-700 transition cursor-pointer'>{submitText}</button>
            </div>
        </div>
    </div>
  )
}

export default Modal