import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='p-12  flex justify-between'>
            <Image
              src="/images/logo-foot.png"
              alt="Dev"
              className=""
              width={50}
              height={50}
            />
            <p className='text-slate-600'>Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer