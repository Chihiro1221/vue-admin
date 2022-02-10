export default class {
  editor: wangEditor
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el)
    // this.editor.config.height = config.height
    // this.editor.config.uploadImgServer = config.uploadImgServer
    Object.assign(this.editor.config, config)

    this.editor.config.onchange = callback
    this.uploadImage()
    this.editor.create()

    this.editor.txt.html(config.modelValue)
  }

  private uploadImage() {
    this.editor.config.uploadImgHooks = {
      customInsert: function (insertImgFn: Function, response: any) {
        insertImgFn(response.result.url)
      },
    }
  }
}
