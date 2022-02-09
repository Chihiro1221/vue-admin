declare namespace toastui {
  class Editor {
    constructor(options: any)
    getMarkdown: () => string
    getHTML: () => string
    on(type: string, callback: (type: string) => void): void
    removeHook: (type: string) => void
    addHook: (type: string, callback: Function) => void
    focus: () => void
  }
}
