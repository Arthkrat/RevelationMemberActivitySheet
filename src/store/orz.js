export default {
    state: {
        orz: {
            '2020-02-06': {
                presence: [
                    'Kratos', 'Acakura', 'Deadzone', 'РыбаФугу'
                ],
                result: '12000000'
            },
            '2020-02-13': {
                presence: [
                    'Kratos', 'Acakura', 'Deadzone', 'РыбаФугу'
                ],
                result: '0'
            },
            '2020-02-20': {
                presence: [
                    'Kratos', 'Acakura', 'Deadzone', 'РыбаФугу'
                ],
                result: '10000'
            },
            '2020-02-27': {
                presence: [
                    'Kratos', 'Acakura', 'Deadzone', 'РыбаФугу'
                ],
                result: '100'
            }
        }
    },
    getters: {
        getOrz: state => date => {
            return state.orz[`${date}`]
          }
    }
}