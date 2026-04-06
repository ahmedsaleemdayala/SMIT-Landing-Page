import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Button = (props) => {
  return (
    <button className="bg-[#0779bf] text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-semibold cursor-pointer">
      {props.name}
      <ArrowUpRight size={18} />
    </button>
  )
}

export default Button
