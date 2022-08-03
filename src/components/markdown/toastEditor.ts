import uploadImageApi from '@/apis/uploadImageApi';
export default class {
  public editor;
  private editorEl: HTMLDivElement;
  constructor(el: string, height: string, content: string) {
    this.editorEl = document.querySelector(el)!;
    this.editor = new toastui.Editor({
      el: this.editorEl,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: height,
      initialValue: content,
      toolbarItems: this.toolbar(),
    });

    this.UploadImageHook();
  }

  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullScreen(),
          command: 'fullScreen',
          tooltip: 'fullScreen',
        },
      ],
    ];
  }

  private fullScreen() {
    const button = document.createElement('button');
    button.innerHTML = '全屏';
    button.style.margin = '0';

    button.addEventListener('click', () => {
      this.editorEl?.classList.toggle('fullscreen');
      this.editor.focus();
    });
    document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.editorEl.classList.remove('fullscreen');
      }
    });
    return button;
  }

  private UploadImageHook() {
    // 移除上传钩子
    this.editor.removeHook('addImageBlobHook');
    // 重写
    this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
      const form = new FormData();
      form.append('file', blob, blob.name);
      const response = await uploadImageApi.upload(form);

      callback(response.data.url, blob.name);
    });
  }
}
