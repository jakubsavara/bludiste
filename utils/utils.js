
export class Screen {
    constructor() {
        let chars = [];
        for (let r = 0; r < 25; r++) {
            chars.push(new Array(80));
            for (let c = 0; c < 80; c++) {
                chars[r][c] = ' ';
            }
        }
        this.chars = chars;
        console.log('aa' + typeof this.chars)
    }

    writeAt(y, x, char) {
        console.log('bb' + typeof this.chars)
        this.chars[y][x] = char;
    }


    render() {
        console.log('cc' + typeof this.chars)
        let lines = [];
        for (let r = 0; r < 25; r++) {
            let line = '';
            let row = this.chars[r];
            for (let c = 0; c < 80; c++) {
                let char = row[c];
                if (char === ' ') {
                    line += ' '
                }
                else {
                    line += char;
                }
            }
            lines.push(<span className='consolerow'>{line}</span>)
        }
        return lines;
    }
}




