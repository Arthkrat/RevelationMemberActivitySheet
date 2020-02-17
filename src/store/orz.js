export default {
    state: {
        '2020-02-06' : [
            'Kratos',
            'Acakura',
            'РыбаФугу',
            'DEADZONE',
            'SOFTPORN'
        ]
    },
    getters: {
        getOrz: state => date => {
            return state[`${date}`]
          }
    }
}