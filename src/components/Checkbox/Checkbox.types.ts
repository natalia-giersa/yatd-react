export interface CheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  clickHandler?: (id: string) => void;
}
