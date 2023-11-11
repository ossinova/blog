export function Comments() {

    return (
      <section
        style={{ width: '100%' }}
        ref={
          element => {
            if (!element) {
              return
            }
  
            const scriptElement = document.createElement('script')
            scriptElement.setAttribute('src', 'https://utteranc.es/client.js')
            scriptElement.setAttribute('repo', 'ossinova/oscardyremyhr.me-comments')
            scriptElement.setAttribute('issue-term', 'pathname')
            scriptElement.setAttribute('theme', 'preferred-color-scheme')
            scriptElement.setAttribute('crossorigin', 'anonymous')
            scriptElement.setAttribute('async', 'true')
            element.replaceChildren(scriptElement)
          }
        }
      />
    )
  }