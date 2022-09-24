/*
    <If test ={aluno.nota >=7}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>}

*/

// eslint-disable-next-line
export default props => {
    if(props.test) {
       return props.children 
    } else {
        return false
    }
}

// eslint-disable-next-line
export const Else = props => {
       return props.children
}