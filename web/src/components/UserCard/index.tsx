import * as S from './styles'

import { Button, SocialMedia } from '@/components'

interface IUserCard {}

const UserCard = ({}: IUserCard) => {
  return (
    <S.UserCard>
      <S.UserImage>
        <img src="/me_01.png" alt="" />
      </S.UserImage>
      <S.UserInfo>
        <h3>Henrique Garcia</h3>
        <p>Desenvolvedor full-stack com foco em front-end</p>
      </S.UserInfo>
      <S.UserContact>
        <SocialMedia variant="icon" media="github" />
        <SocialMedia variant="icon" media="linkedin" />
        <SocialMedia variant="icon" media="threads" />
      </S.UserContact>
      <S.UserCta>
        <Button label="Vamos conversar" onClick={() => {}} />
      </S.UserCta>
    </S.UserCard>
  )
}

export default UserCard
