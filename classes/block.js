import {row, col, css} from "../utilits";
export class Block{
    constructor(value,options){
        this.value = value;
        this.options = options;
    }
    toHTML() {
        throw new Error('метод toTHML должен быть реализован')
    }
    
}
export class titleBlock extends Block {
    constructor(value, options) {
        super(value,options);
    }
    toHTML(){
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag} >${this.value}</${tag}>`), css(styles))
    }
}

export class imageBlock extends Block {
    constructor(value, options) {
        super(value,options);
}
    toHTML(){
    const styles = this.options.styles
    return row(col(`<img src="${this.value}" />`),css(styles))
    }
}
export class textBlock extends Block {
    constructor(value, options) {
        super(value,options);
}
    toHTML(){
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}
export class columnsBlock extends Block {
    constructor(value, options) {
        super(value,options);
}
    toHTML(){
        const styles = this.options.styles
        const html = this.value.map(col).join('')
        return row(html,css(styles))
    }   
}