import * as marked from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker: Worker = self as any  
  
worker.addEventListener('message', (event) => {
  console.log(event.data)
   const text = event.data
   const html = sanitizeHtml(marked(text),{allowedTags: [...sanitizeHtml.defaults.allowedTags,'h1','h2']})
  //  オブジェクトで、キー（プロパティ）と値が一緒の名前の変数の場合、コロン以下は省略可能
  // 実際はhtml: html
  console.log(html)
   worker.postMessage({ html })
})