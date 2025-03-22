import React from 'react'

function ActiveButton({ isActive, id, toggleActive }) {
  return (
    <label className=" relative inline-block w-[34px] h-[20px]">
      <input
        type="checkbox"
        className='opacity-0 w-0 h-0'
        checked={isActive}
        onChange={() => toggleActive(id)}
      />
      <span className="slider round  absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[20px]"></span>
    </label>
  );
}

export default ActiveButton
