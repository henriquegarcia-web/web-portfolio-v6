import * as S from './styles'

interface IAttributeCounter {
  counter: number
  attribute: string
}

const AttributeCounter = ({ counter, attribute }: IAttributeCounter) => {
  return (
    <S.AttributeCounter>
      <S.Counter>+{counter}</S.Counter>
      <S.Attribute>{attribute}</S.Attribute>
    </S.AttributeCounter>
  )
}

export default AttributeCounter
