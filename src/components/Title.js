const Title = ({name, type}) => {

    const className = type === 'bold' ? 'bold' : '';

    const atributes = {
        className,
    }

    if (type === 'bold') {
        return <p {...atributes}> {name} </p>
    }   return <p> {name} </p>
}

export default Title;