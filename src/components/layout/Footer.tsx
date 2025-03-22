import { useLayoutEffect, useState, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import SvgIcon from '@/components/ui/SvgIcon'

const ContactMe = lazy(() => import('@/components/ContactMe'))

const AUTHOR = 'Lillian Lin'
const SOCIALS = [
  { name: 'instagram', href: '', ariaLabel: 'instagram link' },
  { name: 'email', href: '', ariaLabel: 'email address' }
]

export default function Footer() {
  const [YEAR, setYEAR] = useState(0)
  const [bgColor, setBgColor] = useState('')
  const { pathname } = useLocation()

  const notShowContact = ['/about']
  const isShowContact = !notShowContact.includes(pathname)

  useLayoutEffect(() => {
    setYEAR(new Date().getFullYear())
  }, [])

  function handleBgColor(color: string) {
    setBgColor(color)
  }

  return (
    <div className='relative'>
      {isShowContact && <ContactMe handleBgColor={handleBgColor} />}
      <footer
        className={`w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 px-[var(--main-content-padding-x--mobile)] lg:px-[var(--main-content-padding-x)] h-[var(--footer-height--mobile)] md:h-[var(--footer-height)] transition-colors duration-300`}
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <p className='text-p2'>
            © <span>{AUTHOR}</span>
            <span
              suppressHydrationWarning
              className='inline-block min-w-10 text-center'
            >
              {YEAR}
            </span>
            Copyright. All Rights Reserved.
          </p>
        </div>

        <ul className='flex gap-4'>
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
      </footer>
    </div>
  )
}
