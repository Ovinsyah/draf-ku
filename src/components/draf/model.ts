export interface SectionDrafModel{
  drafs: DrafModel[];
  remove: (id: number | undefined) => void;
  setEditDraf: (props: DrafModel) => void;
}
export interface DrafModel{
  id: number;
  title: string;
  description: string;
  date: string;
}