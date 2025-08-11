function msgBox({userName , textColor}) {
    let styles = {color : textColor}
    return (
        <> 
        <h1 style={styles}>Hello {userName}</h1>
        </>
    )
}

export default msgBox;