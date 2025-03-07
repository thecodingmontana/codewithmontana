export type ModalType = 'letsConnect'

export interface ModalStore {
  type: ModalType | null
  isOpen: boolean
}
