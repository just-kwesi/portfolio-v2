export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export type AboutItem = {
  data: {
    aboutCollection: {
      total: number
      items: {
        aboutMe: string
        title: string
      }[]
    }
  }
}
