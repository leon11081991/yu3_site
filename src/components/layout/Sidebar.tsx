import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '@/components/ui/SvgIcon'
import { useSidebar } from '@/shared/contexts/SidebarContext'
import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { SOCIALS } from '@/data/designer-data'
import useScreenSize from '@/shared/hooks/useScreenSize'

type LinkType = 'internal' | 'external'

const MENU_ITEMS: { label: string; href: string; type: LinkType }[] = [
  {
    label: '首頁/Home',
    href: '/',
    type: 'internal'
  },
  {
    label: '關於我/About',
    href: '/about',
    type: 'internal'
  },
  {
    label: '履歷/Resume',
    href: 'https://drive.google.com/file/d/1U-p50hk4WVlXSE-aHB_xv5JOr2bXF2Lo/view?usp=sharing',
    type: 'external'
  }
]

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
              {item.type === 'internal' ? (
                <Link
                  to={item.href}
                  className={`text-p1 underline-hover-animation ${isActive(item.href) ? 'underline-active' : ''}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className='text-p1 underline-hover-animation'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className='flex justify-center gap-4'>
          {SOCIALS.map(social => (
            <li
              key={social.name}
              className='w-[var(--social-icon-width)] h-[var(--social-icon-width)] rounded-full border border-primary-02 border-opacity-10 transition hover:bg-primary-02 hover:bg-opacity-10 hover:border-transparent'
            >
              <a
                className='flex items-center justify-center w-full h-full'
                href={social.href || 'javascript:void(0);'}
                aria-label={social.ariaLabel}
                target='_blank'
                rel='noreferrer noopener'
              >
                <SvgIcon iconName={social.name} />
              </a>
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
  const screenSize = useScreenSize()
  useClickOutside(sidebarRef as React.RefObject<HTMLElement>, () => setIsOpen(false))

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
      right: screenSize === 'lg' ? '34px' : '24px',
      width: '244px',
      height: 'var(--sidebar-height)',
      borderRadius: '10px',
      padding: '64px 56px 40px 56px',
      opacity: 1
    }
  }

  return (
    <motion.aside
      ref={sidebarRef}
      className='fixed bg-[var(--sidebar-bg)] backdrop-blur-[10px] rounded-[10px] z-40 overflow-hidden'
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
