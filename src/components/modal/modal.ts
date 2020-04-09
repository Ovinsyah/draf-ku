export interface ModalModel{
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}