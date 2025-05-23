import { MediasType, portfolioContent } from '@/constants/content'
import * as S from './styles'

import { Button, SocialMedia } from '@/components'

interface IUserCard {}

const UserCard = ({}: IUserCard) => {
  return (
    <S.UserCard>
      <S.UserImage>
        <img
          src={portfolioContent.hero.image.url}
          alt={portfolioContent.hero.image.alt}
        />
      </S.UserImage>
      <S.UserInfo>
        <h3>{portfolioContent.hero.name}</h3>
        <p>{portfolioContent.hero.role}</p>
      </S.UserInfo>
      <S.UserContact>
        {portfolioContent.hero.medias.map((media: MediasType) => (
          <SocialMedia key={media} variant="icon" media={media} />
        ))}
      </S.UserContact>
      <S.UserCta>
        <Button label={portfolioContent.hero.userCta} onClick={() => {}} />
      </S.UserCta>
    </S.UserCard>
  )
}

export default UserCard
