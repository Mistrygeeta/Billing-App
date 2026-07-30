import React from 'react'

const ConfirmModal = ({
    isOpen,
    title,
    confirmText = "Delete",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
}) => {
    if(!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-50'>
            <div className='bg-white rounded-2xl p-6 w-96 shadow-xl'>
              <h2 className='text-xl font-semibold text-slate-900'>{title}</h2>
              <p className='text-gray-500 mt-3'>Are you sure want to delete this?</p>
              <div className='flex justify-end gap-3 mt-8'>
                <button onClick={onCancel}
                  className='px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition'>
                    {cancelText}
                </button>
                <button onClick={onConfirm} className='px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition'>
                    {confirmText}
                </button>
              </div>
            </div>
          </div>
  )
}

export default ConfirmModal;
