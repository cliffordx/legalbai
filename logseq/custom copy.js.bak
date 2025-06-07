function linkAbbreviator(boundSelectors) {
    function onMouseAction(event) {
      const ref = event.target.parentElement
      if (!ref.dataset.abbreviatedText)
        return
  
      let text = ''
      if (event.type === 'mouseenter')
        text = ref.dataset.origText
      else if (event.type === 'mouseleave')
        text = ref.dataset.abbreviatedText
  
      if (text) {
        const isTag = ref.classList.contains('tag')
        const textNode = getTextNode(ref)
        if (textNode)
          textNode.textContent = (isTag ? '#' : '') + text
      }
    }
  
    function getTextNode(ref) {
      let textNode = null
      ref.childNodes.forEach((node) => {
        if (node.nodeType === document.TEXT_NODE)
          textNode = node
      })
      return textNode
    }
  
    function findContainerTitleForRef(namespacedRef, titleSelectors) {
      for (const [bubbleSelector, titleSelector] of titleSelectors) {
        const bubbleNode = namespacedRef.closest(bubbleSelector)
        if (!bubbleNode)
          continue
  
        console.debug({bubbleSelector, bubbleNode})
  
        const titleNode = bubbleNode?.querySelector(titleSelector)
        if (!titleNode || titleNode === namespacedRef)
          continue
  
        console.debug({titleSelector, titleNode})
  
        if (titleNode.dataset.origText)
          return titleNode.dataset.origText
  
        const textNode = getTextNode(titleNode)
        return textNode?.textContent
      }
      return null
    }
  
    function findCommonPrefix(text, title) {
      const parts = text.split('/')
      for (let i = 1; i < parts.length; i++) {
        const prefix = parts.slice(0, -i).join('/')
        if (prefix === title)
          return [ prefix, parts.slice(-i).join('/') ]
      }
      return [ null, null ]
    }
  
    function main(node, [refsSelectors, titleSelectors]) {
      for (const namespacedRef of node.querySelectorAll(refsSelectors)) {
        // skipping already abbreviated refs
        if (namespacedRef.dataset.abbreviatedText)
          continue
  
        const textNode = getTextNode(namespacedRef)
        let origText = textNode?.textContent ?? ''
  
        // skipping refs without namespaces
        if (origText.indexOf('/') < 0)
          continue
  
        const isTag = namespacedRef.classList.contains('tag')
        origText = isTag ? origText.substring(1) : origText
  
        // skipping refs with manual labels
        if (namespacedRef.dataset.ref)
          if (namespacedRef.dataset.ref.toLowerCase() !== origText.toLowerCase())
            continue
  
        // console.debug('Ref:', {namespacedRef, origText})
  
        const title = findContainerTitleForRef(namespacedRef, titleSelectors)
        // skipping refs without corresponding title
        if (!title)
          continue
  
        // console.debug({title})
  
        const [ prefix, abbreviatedText ] = findCommonPrefix(origText, title)
        // skipping completely different refs
        if (!prefix)
          continue
  
        // console.debug({prefix, abbreviatedText})
  
        namespacedRef.dataset.origText = origText
        namespacedRef.dataset.abbreviatedText = abbreviatedText
        textNode.textContent = isTag ? '#' + abbreviatedText : abbreviatedText
  
        var anchor = document.createElement('span')
        anchor.innerText = '↳ '
        anchor.onmouseenter = onMouseAction
        anchor.onmouseleave = onMouseAction
  
        const first = namespacedRef.childNodes[0]
        if ((first.className ?? '').split(' ').includes('bracket'))
          first.insertAdjacentElement('afterend', anchor)
        else
          namespacedRef.insertAdjacentElement('afterbegin', anchor)
      }
    }
  
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        for (const node of mutation.addedNodes) {
          if (!node.querySelectorAll)
            continue
  
          // console.debug('Check:', {node})
  
          let boundInfo = null
          for (const boundSelector of Object.keys(boundSelectors)) {
            // skipping nodes upper than monitored one
            // required due to: observer need to be attached to existed at the application start nodes
            if (!node.closest(boundSelector))
              continue
            boundInfo = boundSelectors[boundSelector]
          }
          if (!boundInfo)
            continue
  
          // console.debug('Select:', {node, boundInfo})
          main(node, boundInfo)
        }
      }
    })
  
    const container = document.querySelector('#app-container')
    observer.observe(container, {
      subtree: true,
      childList: true,
    })
   }
  
  const refsSelectors = 'a.page-ref[data-ref*="/"], a.tag[data-ref*="/"]'
  const refsSelectorsWithBreadcrumbs = refsSelectors + ', .breadcrumb span.inline-wrap, .breadcrumb span.inline-wrap > span.page-reference'
  
  const boundSelectors = {
    'div.page': [  // page content
      refsSelectorsWithBreadcrumbs,
      [
        ['div.embed-page', 'section a.page-ref'],  // embedded page
        ['div.content > div > div.lazy-visibility', 'div.content a.page-ref'],  // inline linked references
        ['div.page', 'div.breadcrumb a.page-ref'],  // zoomed in block
        ['div.page', 'div.ls-page-title span.title[data-ref]'],  // normal page view
      ],
    ],
  
    'div.references.page-linked': [  // linked references section
      refsSelectorsWithBreadcrumbs,
      [
        ['div.content > div > div.lazy-visibility', 'div.content a.page-ref'],
      ],
    ],
  
    'div.sidebar-item': [  // right sidebar
      refsSelectorsWithBreadcrumbs,
      [
        ['div.embed-page', 'section a.page-ref'],
        ['div.sidebar-item', 'div > a.page-title'],
        ['div.sidebar-item', 'div.breadcrumb a.page-ref'],
      ],
    ],
  }
  
  linkAbbreviator(boundSelectors)
  
  // sethyuan 5 August 2022 (added 29 Sept 2023)
  
function collapseNamespaceRefs() {
  function onEnter(e) {
    const el = e.target;
    el.textContent = el.dataset.origText;
  }

  function onLeave(e) {
    const el = e.target;
    const text = el.dataset.origText;
    el.textContent = `..${text.substring(text.lastIndexOf("/") + 1)}`;
  }

  const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      for (const node of mutation.addedNodes) {
        if (!node.querySelectorAll) continue;
        const namespaceRefs = node.querySelectorAll(
          'a.page-ref[data-ref*="/"],a.tag[data-ref*="/"]'
        );
        for (const namespaceRef of namespaceRefs) {
          const text = namespaceRef.textContent;
          const testText = namespaceRef.classList.contains("tag")
            ? text.substring(1).toLowerCase()
            : text.toLowerCase();
          if (testText !== namespaceRef.dataset.ref) continue;
          // Perform collapsing.
          const content = `..${text.substring(text.lastIndexOf("/") + 1)}`;
          namespaceRef.dataset.origText = text;
          namespaceRef.textContent = content;
          namespaceRef.addEventListener("mouseenter", onEnter);
          namespaceRef.addEventListener("mouseleave", onLeave);
        }
      }
    }
  });

  observer.observe(document.getElementById("app-container"), {
    subtree: true,
    childList: true,
  });
}

collapseNamespaceRefs();