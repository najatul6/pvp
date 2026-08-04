const logger = (state) => (next) => (action) => {
    console.log(state.getState())
    console.log(action)
}

export default logger;