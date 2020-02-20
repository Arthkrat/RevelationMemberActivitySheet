export default {
    state: {
        ORZ: {
            '2020-02-06': {
                presence: [
                 'Acakura', 'Deadzone', 'РыбаФугу'
                ],
                result: '12000000'
            },
            '2020-02-13': {
                presence: [
                    'Kratos', 'РыбаФугу'
                ],
                result: '0'
            },
            '2020-02-20': {
                presence: [
                    'Kratos', 'Asakura', 'Deadzone', 
                ],
                result: '10000'
            },
            '2020-02-27': {
                presence: [
                    'Kratos', 'Acakura',  'РыбаФугу'
                ],
                result: '100'
            }
        }
    },
    getters: {
        getOrz: state => date => {
            return state.ORZ[`${date}`]
          }
    },
    mutations: {
        changeOrzPresence(state, payload) {
           return state.ORZ[`${payload.date}`].presence = payload.newArray
        }
    },
    actions: {
        CHANGEORZPRESENCE({commit}, payload){
            commit('changeOrzPresence', payload)
        }
    }
}