// src/components/Footer/index.tsx

import * as S from './styles'
import { FaGithub, FaLinkedin, FaThreads } from 'react-icons/fa6'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.FooterLeft>
          <S.FooterName>
            Henrique Garcia <b>© {year}</b>
          </S.FooterName>
          {/* <S.FooterNote>Feito com código, café e propósito.</S.FooterNote> */}
        </S.FooterLeft>

        <S.FooterRight>
          <S.FooterIcon
            href="https://github.com/henriquegarcia-web"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </S.FooterIcon>
          <S.FooterIcon
            href="https://linkedin.com/in/henriquegarcia-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </S.FooterIcon>
          <S.FooterIcon
            href="https://www.threads.net/@henriquegarcia.dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaThreads />
          </S.FooterIcon>
        </S.FooterRight>
      </S.FooterWrapper>
    </S.Footer>
  )
}

export default Footer
