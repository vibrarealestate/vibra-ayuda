import Logo from './components/Logo'
import { XIcon } from './components/Icons'
import { useRouter } from 'next/router'

const TITLE_WITH_TRANSLATIONS = {
  en: 'We made easy to find the Home of your Dreams',
  es: 'Hacemos fácil encontrar el Hogar de tus Sueños',
}

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  en: 'Question? Give us feedback →',
  en: 'Tienes preguntas? Ayúdanos a mejorar →',
}

const themeConfig = {
  github: 'https://github.com/vibrarealestate/vibra-ayuda',
  docsRepositoryBase:
    'https://github.com/vibrarealestate/vibra-ayuda/blob/master',
  // projectLinkIcon: <XIcon />,
  titleSuffix: ' – Vibra',
  // font: false,
  // unstable_flexsearch: true,
  unstable_faviconGlyph: '⛺',
  // unstable_staticImage: true,
  search: true,
  prevLinks: true,
  nextLinks: true,
  // footer: true,
  floatTOC: true,
  feedbackLink: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter()
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS['en']
    )
  },
  feedbackLabels: 'feedback',
  logo: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale } = useRouter()
    return (
      <>
        <Logo
          withLetters
          title={'Vibra: ' + (TITLE_WITH_TRANSLATIONS[locale] || '')}
        />
        <span className="text-gray-600 font-normal hidden md:inline ml-4">
          Ayuda
        </span>
      </>
    )
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Vibra: Hacemos fácil encontrar el hogar de tus sueños"
      />
      <meta
        name="og:description"
        content="Vibra: Hacemos fácil encontrar el hogar de tus sueños"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta
        name="og:title"
        content="Vibra: Hacemos fácil encontrar el hogar de tus sueños"
      />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Vibra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case 'zh-CN':
        return '在 GitHub 上编辑本页 →'
      case 'en':
        return 'Edit this page on GitHub →'
      case 'pt-BR':
        return 'Edite essa página no GitHub →'
      case 'ja':
        return 'Github で編集する →'
      case 'ko':
        return 'Github에서 이 페이지 편집하기 →'
      case 'ru':
        return 'Редактировать на GitHub →'
      default:
        return 'Edita esta página en GitHub →'
    }
  },
  footerText: <>{new Date().getFullYear()} © Vibra.</>,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'es', text: 'Español' },
  ],
}

export default themeConfig
