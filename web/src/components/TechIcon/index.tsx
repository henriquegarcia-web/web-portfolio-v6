// src/components/TechIcon.tsx

import {
  AwsSVG,
  CSVG,
  DockerSVG,
  ExpressSVG,
  FirebaseSVG,
  GraphQLSVG,
  JavaScriptSVG,
  JestSVG,
  MongoDBSVG,
  MySqlSVG,
  NextJsSVG,
  NodeJsSVG,
  PhpSVG,
  PostgreSQLSVG,
  PythonSVG,
  ReactSVG,
  ReactNativeSVG,
  ReduxSVG,
  SassSVG,
  TailwindCssSVG,
  TypeScriptSVG
} from './techs'

export interface ITechIcon {
  iconId: string
  size?: number
}

const ICON_MAP: Record<string, React.FC<{ size?: number }>> = {
  javascript: JavaScriptSVG,
  typescript: TypeScriptSVG,
  react: ReactSVG,
  react_native: ReactNativeSVG,
  next_js: NextJsSVG,
  node_js: NodeJsSVG,
  php: PhpSVG,
  python: PythonSVG,
  firebase: FirebaseSVG,
  docker: DockerSVG,
  graphql: GraphQLSVG,
  mongodb: MongoDBSVG,
  postgresql: PostgreSQLSVG,
  redux: ReduxSVG,
  sass: SassSVG,
  tailwind_css: TailwindCssSVG,
  aws: AwsSVG,
  mysql: MySqlSVG,
  jest: JestSVG,
  express: ExpressSVG,
  c: CSVG
}

const TechIcon = ({ iconId, size = 24 }: ITechIcon) => {
  const IconComponent = ICON_MAP[iconId]

  if (!IconComponent) return null

  return <IconComponent size={size} />
}

export default TechIcon
