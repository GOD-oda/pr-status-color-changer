window.onload = function() {
  const links = document.getElementsByClassName('muted-link');

  for (let i = 0; i < links.length; i++) {
    let node = links[i];
    let text = node.textContent;

    if (text === 'undefined') {
      continue;
    }

    if (isRequired(text)) {
      node.setAttribute('style', 'color: red !important;');
      continue;
    }

    if (isApproval(text)) {
      node.setAttribute('style', 'color: #28a745 !important;');
      continue;
    }

    if (isChanges(text)) {
      node.setAttribute('style', 'color: #0366d6 !important;');
    }
  }

  function isRequired(text) {
    return text.indexOf('Review required') !== -1;
  }

  function isApproval(text) {
    return text.indexOf('Approved') !== -1;
  }

  function isChanges(text) {
    return text.indexOf('Changes requested') !== -1;
  }
};