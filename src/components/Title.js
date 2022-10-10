const Title = ({name, type}) => {
    if (type === 'bold') {
        return <p>
            <b>
                {name}
            </b>
        </p>
    } else if (type === 'normal') {
        return <p>
            {name}
        </p>
    }
}

export default Title;