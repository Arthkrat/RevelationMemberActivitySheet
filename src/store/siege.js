export default {
    state: {
        siege: {
            '2020-02-08' : {
                presence: {
                    firstHour: [
                        'Kratos',
                        'Deadzone'
                    ],
                    secondHour: [
                        'Kratos'
                    ]
                }
            },
            '2020-02-15' : {
                presence: {
                    firstHour: [
                        'Kratos',
                        'Asakura'
                    ],
                    secondHour: [
                        'Fluder',
                        
                    ]
                }
            },
            '2020-02-22' : {
                presence: {
                    firstHour: [
                        'Kratos',
                        'Deadzone',
                        'Asakura'
                    ],
                    secondHour: [
                        'Fluder',
                        'Kratos'
                    ]
                }
            },
            '2020-02-29' : {
                presence: {
                    firstHour: [
                        'Deadzone',
                        'Asakura',
                        'DominiDirth'
                    ],
                    secondHour: [
                        'Fluder',
                        'Kratos'
                    ]
                }
            }
        }
    },
    getters: {
        getSiege: state => date => {
            return state.siege[`${date}`]
          }
    }
}