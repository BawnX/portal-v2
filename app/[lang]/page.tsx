import i18n from '@i18next'
import { PageProps } from '@services/common/typePage'

export default function Page ({ params }: PageProps) {
  return (
    <>
      <p>{i18n.t('home', { lng: params.lang })}</p>
    </>
  )
}
