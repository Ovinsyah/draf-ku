import { DrafModel } from '../draf/model';
export interface SectionFormModel{
  save: (e: FormDrafModel) => void;
  setShowFormDraf: () => void;
  draf: DrafModel | undefined;
}
export interface FormDrafModel {
  type: string;
  draf: DrafModel;
}