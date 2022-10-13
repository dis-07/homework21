const Title = ({name, type}) => {

    // const className = type === 'bold' ? 'bold' : '';

    // const atributes = {
    //     className,
    // }

    // if (type) {
    //     return <p {...atributes}> {name} </p>
    // }   
    // return <p> {name} </p>
    return <p style={{ fontWeight: type }}>{name}</p>
}

export default Title;