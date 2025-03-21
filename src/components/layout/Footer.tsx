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
  const { pathname } = useLocation()

  const notShowContact = ['/about']
  const isShowContact = !notShowContact.includes(pathname)

  useLayoutEffect(() => {
    setYEAR(new Date().getFullYear())
  }, [])

  console.log(pathname)

  return (
    <div className='relative'>
      {isShowContact && <ContactMe />}
      <footer
        className={`${!isShowContact ? 'relative' : 'absolute bottom-0'}  w-full flex justify-between items-center px-[var(--main-content-padding-x)] lg:px-[var(--main-content-padding-x)] h-[var(--footer-height)]`}
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
