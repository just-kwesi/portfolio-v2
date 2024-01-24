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

export type ProjectItem = {
  projectName: string
  projectDescription: string
  githubUrl: string
  liveUrl: string
  stack: any
}

export type WorkItem = { company: string; jobDescription: string; role: string }
