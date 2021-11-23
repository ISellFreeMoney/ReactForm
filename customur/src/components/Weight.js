function Weight(props) {
    const weightValue = props.weight;
    const range = [0.2, 0.4, 0.8, 1.2]
    return (
        <div>
            {range.map((rangeElem) =>
                weightValue >= rangeElem ? <span key={rangeElem.toString()}>📐</span> : null
            )}
        </div>
        )
}

export default Weight;
