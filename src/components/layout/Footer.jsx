import SvgIcon from '@/components/ui/SvgIcon'

const AUTHOR = 'Lillian Lin'
const YEAR = new Date().getFullYear()
const SOCIALS = [
  {
    name: 'instagram',
    href: '',
    ariaLabel: 'instagram link'
  },
  {
    name: 'email',
    href: '',
    ariaLabel: 'email address'
  }
]

export default function Footer() {
  return (
    <footer className='flex justify-between items-center px-[var(--footer-padding-x)] h-[var(--footer-height)]'>
      <div>
        <p className='text-p2'>
          © {AUTHOR} {YEAR} Copyright. All Rights Reserved.
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
              href={social.href}
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
  )
}
