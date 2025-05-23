import * as S from './styles'
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads
} from 'react-icons/fa6'

import { MediasType } from '@/constants/content'

interface ISocialMedia {
  variant: 'icon'
  media: MediasType
}

const SocialMedia = ({ variant, media }: ISocialMedia) => {
  return (
    <S.SocialMedia>
      {media === 'facebook' && <FaFacebookF />}
      {media === 'github' && <FaGithub />}
      {media === 'instagram' && <FaInstagram />}
      {media === 'linkedin' && <FaLinkedinIn />}
      {media === 'threads' && <FaThreads />}
    </S.SocialMedia>
  )
}

export default SocialMedia
