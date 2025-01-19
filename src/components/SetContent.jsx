function SetContent(props) {
    if (props.process === 'waiting'){
        return <h2>Ожидание</h2>
    } else if (props.process === 'loading'){
        return <h2>Загрузка</h2>
    } else if (props.process === 'complete'){
        return <h2></h2>
    } else if (props.process === 'error'){
        return <h2>Ошибка</h2>
    }
}

export default SetContent