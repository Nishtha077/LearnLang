// let x = 25
// [LetToken, IdentifierToken, EqualsToken, NumberToken]

export enum TokenType {
    Number, 
    Identifier,
    Equals,
    OpenParen, 
    CloseParen,
    BinaryOperator,
    Let,
}

export interface Token {
    value: string;
    type: TokenType;
}

function createToken (value = "", type: TokenType): Token {
    return { value, type };
}

function isalpha (src: string) {
    // checking for a single character only, if alphabet, then only this would be different
    return src.toUpperCase() != src.toLowerCase();
}

function isint(src: string){
    const c = src.charCodeAt(0);
    const bounds = ["0".charCodeAt(0), "9".charCodeAt(0)];
    return (c >= bounds[0] && c <= bounds[1]);
}

export function tokenize(sourceCode: string) : Token[] {

    const tokens = new Array<Token>();

    const src = sourceCode.split("");

    // Build each token until EOF
    while( src.length > 0 ){

        if (src[0] == '(') {
            tokens.push(createToken(src.shift(), TokenType.OpenParen));
        }
        
        else if (src[0] == ')') {
            tokens.push(createToken(src.shift(), TokenType.CloseParen));
        }

        else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/"){
            tokens.push(createToken(src.shift(), TokenType.BinaryOperator));
        }

        else if (src[0] == "="){
            tokens.push(createToken(src.shift(), TokenType.Equals));
        }

        else{

            // Handles Multi Character Tokens


        }

    }

    return tokens;

}