var count = 0;
class Element {
  constructor(node, parent) {
    this.root = node;
    this.parent = parent;
    this._ele = null;
    this.eleId = "ele" + count++;
    if(node.methods){
        this.addMethods();
    }
    this.root.update =()=>{
        this.render();
    }
  }
  createElement(node) {
    if (!node.name) return new Error("Node name is not defined");
    this._ele = document.createElement(node.name);
    node.id ? this._ele.setAttribute("id", node.id) : "";
    if (Array.isArray(node.className)) {
      this._ele.classList.add(node.className);
    } else if (node.className) {
      this._ele.classList.add(node.className);
    }
    for (let x in node.attr) {
      this._ele.setAttribute(x, node.attr[x]);
    }

    if (node.events) {
      for (let fun in node.events) {
        this._ele.addEventListener(fun, event => {
          node.events[fun](this, event);
        });
      }
    }
    if (node.children && typeof node.children == 'string') {
        let text = document.createTextNode(node.children);
        this._ele.appendChild(text);
      }
    else if (node.children && typeof node.children == 'function') {
      let text = document.createTextNode(node.children());
      this._ele.appendChild(text);
    } else if (Array.isArray(node.children)) {
      for (let x of node.children) {
        let children = new Element(x, this._ele);
        this._ele.appendChild(children.render());
      }
    } else if (node.children && typeof node.children == "object") {
      let children = new Element(node.children, this._ele);
      this._ele.appendChild(children.render());
    }
    return this._ele;
  }
  render() {
    let oldChild = this._ele;
    this._ele = this.createElement(this.root);
    if (oldChild) {
      this.parent.replaceChild(this._ele, oldChild);
    } else {
      this.parent.appendChild(this._ele);
    }
    // this.parent
    return this._ele;
  }
  addMethods(){
      for(let method in this.root.methods){
          this.root[method] = (value)=>{
            this.root.methods[method](this,value);
          }
      }
  }
}
module.exports = Element;
