import styled from 'styled-components'

import { fontHeight, fontSize, fontWeight } from '@/utils/styles/fonts'
import { backgroundColor, color, Colors } from '@/utils/styles/colors'

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  width: 100%;
  height: fit-content;
  padding: 20px;
  border-radius: 14px;

  ${backgroundColor('bgElevated')}
`

export const UserImage = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;

  border: 8px solid ${Colors.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center calc(50% + 15px);
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 90%;

  h3 {
    text-align: center;

    ${fontSize('xxl')}
    ${fontHeight('xxl')}
    ${fontWeight('bold')}

    ${color('textBase')}
  }

  p {
    text-align: center;

    ${fontSize('large')}
    ${fontHeight('xl')}
    ${fontWeight('regular')}

    ${color('textDescription')}
  }
`

export const UserContact = styled.div`
  display: flex;
  column-gap: 8px;
`

export const UserCta = styled.div`
  display: flex;
  width: 100%;
`
