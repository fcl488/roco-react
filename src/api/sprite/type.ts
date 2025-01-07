import { BaseResult,PageVO } from '../commonType'

export type SpriteType = {
  id: number,
  typeCode: string,
  typeName: string,
  typeIcon: string
}

export type SpriteInfoType = {
  type: string,
  name: string
}

export type Sprite = {
  id: number,
  spriteName: string,
  imgUrl: string,
  types: SpriteInfoType[]
}

export type SpriteList = PageVO & {
  list: Sprite[]
}

export type QuerySpriteDTO = {
  page: number,
  limit: number,
  keyword?: string,
  type?: number,
  sort?: number
}

export type SpriteBlood = {
  bloodName: string,
  bloodDesc: string
}

export type SpriteMorphology = {
  spriteId: number,
  spriteImg: string
}

export type SpriteInfo = {
  id: string,
  spriteName: string,
  mainType: string,
  subtype: string,
  groupType: string,
  spriteImg: string,
  hp: number,
  atk: number,
  def: number,
  spAtk: number,
  spDef: number,
  speed: number,
  height: string,
  weight: string,
  spriteDescription: string,
  spriteGetWay: string,
  spriteColor: string,
  spriteHobby: string,
  bloodList: SpriteBlood[],
  passiveImmunity: string,
  expType: number,
  morphologyList: Array<SpriteMorphology[]>
}

export type SkillInfo = {
  skillName: string,
  learnLevel: number,
  pp: number,
  skillCategory: string,
  skillDesc: string,
  skillPower: number,
  skillType: string
}

export type SpriteEvolution = {
  spriteId: number,
  spriteImg: string
}

export type SpriteEvolutionList = {
  [index: number]: Array<SpriteEvolution>
}

export type GetAllTypeResData = BaseResult<SpriteType[]>
export type QuerySpriteResData = BaseResult<SpriteList>
export type GetSpriteInfoResData = BaseResult<SpriteInfo>
export type GetSkillInfoResData = BaseResult<SkillInfo[]>
export type GetSpriteEvolutionListResData = BaseResult<SpriteEvolution[][]>