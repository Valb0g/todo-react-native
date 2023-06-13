export interface IList {
  text: string, index: number
}
export interface IListItemProp {
  item: IList
  onDelete: () => void
}
export interface RenderItemProps {
  item: IList
}
