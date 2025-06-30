const timeFormat = (time) => {
    const HoursRender = Math.floor(time / 60)
    const MinutesRender = time % 60
    return `${HoursRender}h ${MinutesRender}m`
}
export default  timeFormat