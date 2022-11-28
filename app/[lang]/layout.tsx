import { AppContainer } from '@components/appContainer'
import i18n from '@i18next'
import '../../styles/globals.css'

export default function RootLayout ({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (params.locale !== i18n.language) {
    i18n.changeLanguage(params.locale)
  }
  return (
    <html lang={i18n.language} dir={i18n.dir(params.locale)}>
      <head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <AppContainer>
          <main>{children}</main>
        </AppContainer>
      </body>
    </html>
  )
}

