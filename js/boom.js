/**
 *
 * @param {Node} parent
 */
function* getAllChildrenFlat(parent) {
    const walker = document.createTreeWalker(parent, NodeFilter.SHOW_ELEMENT);

    while (walker.nextNode()) {
        yield walker.currentNode;
    }
}

/**
 * @param {Array<any>} arr
 */
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function boom() {
    for (const child of document.body.children) {
        child.append(...shuffle([...child.children]));
    }
    document.body.append(...shuffle([...getAllChildrenFlat(document.body)]));
}
