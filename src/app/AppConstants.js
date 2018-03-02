class AppConstants {
    constructor(){
        this.ENV = process.env['NODE_ENV'] ? process.env['NODE_ENV'].toUpperCase() : 'PRODUCTION'

        this.API_URL = this.ENV === 'DEVELOPMENT' ? 'http://localhost:50000/api' : '/api'
    }
}

const ins = new AppConstants()
export default ins