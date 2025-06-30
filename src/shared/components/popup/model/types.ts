export interface PopupCommon {
  isOpen: boolean;
  close(): void;
  onConfirm?(): void;
}
