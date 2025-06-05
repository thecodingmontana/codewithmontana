import type { WorkspaceStore, WorkspaceBreadcrumb } from '~/types'

export const useWorkspaceStore = defineStore('workspaceStore', {
  state: (): WorkspaceStore => ({
    isOpenSidebar: false,
    breadcrumb: null,
  }),
  actions: {
    onOpenSidebar(): void {
      this.isOpenSidebar = !this.isOpenSidebar
    },
    onSetWorkspaceBreadcrumb(payload: WorkspaceBreadcrumb): void {
      this.breadcrumb = payload
    },
  },
  persist: true,
})
