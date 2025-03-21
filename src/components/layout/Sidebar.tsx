import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebar } from '@/shared/contexts/SidebarContext'
import { useClickOutside } from '@/shared/hooks/useClickOutside'

const MENU_ITEMS: { label: string; href: string }[] = [
  {
    label: '首頁/Home',
    href: '/'
  },
  {
    label: '關於我/About',
    href: '/about'
  }
]

// 抽取動畫變體到單獨的對象
const sidebarVariants = {
  closed: {
    top: '12px',
    right: '44px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    padding: '0px',
    opacity: 0
  },
  open: {
    top: '12px',
    right: '34px',
    width: '244px',
    height: 'var(--sidebar-height)',
    borderRadius: '10px',
    padding: '100px 56px 40px 56px',
    opacity: 1
  }
}

// 內容的動畫變體
const contentVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
}

const SidebarContent: React.FC<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()
  const isActive = (href: string) => pathname === href

  return (
    <AnimatePresence>
      <motion.div
        className={`flex flex-col justify-between h-full ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        variants={contentVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <ul className='flex flex-col items-center gap-6'>
          {MENU_ITEMS.map(item => (
            <li
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              <Link
                to={item.href}
                className={`text-p1 ${isActive(item.href) ? 'font-medium' : 'font-p1'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href='mailto:lillian.lin33@gmail.com'
          className='text-p2 font-p2'
        >
          lillian.lin33@gmail.com
        </a>
      </motion.div>
    </AnimatePresence>
  )
}

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar()
  const sidebarRef = useRef<HTMLElement>(null)
  useClickOutside(sidebarRef as React.RefObject<HTMLElement>, () => setIsOpen(false))

  return (
    <motion.aside
      ref={sidebarRef}
      className='fixed bg-gray-01 rounded-[10px] z-40 overflow-hidden'
      initial={sidebarVariants.closed}
      animate={isOpen ? sidebarVariants.open : sidebarVariants.closed}
      transition={{
        duration: 0.5, // 確保開關時的動畫時間相同
        ease: 'easeInOut' // 使用平滑的緩動效果
      }}
      layout
    >
      <SidebarContent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </motion.aside>
  )
}

export default Sidebar
