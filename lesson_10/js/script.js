class options {
  constructor(height, width, background, fontSize, textAlign, content) {
    this.height = height;
    this.width = width;
    this.background = background;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    this.content = content;
  }

  createAndStyleDiv() {

    var newDiv = document.createElement('div');
    newDiv.innerHTML = this.content;
    document.body.appendChild(newDiv);

    newDiv.style.cssText = `height: ${this.height}px;
                            width: ${this.height}px;
                            background-color: ${this.background};
                            font-size: ${this.fontSize}px;
                            text-align: ${this.textAlign};
                            `;

  }
  
}

let testDiv = new options(200,200,'#0c377c',20,'center','qwerty');
testDiv.createAndStyleDiv();
