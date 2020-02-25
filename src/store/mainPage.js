export default {
    state: {
        counter : [
            {
                name: 'Knight',
                count: 0
            },
            {
                name: 'Mage',
                count: 0
            },
            {
                name: 'Assasin',
                count: 0
            },
            {
                name: 'Druid',
                count: 0
            },
            {
                name: 'Guard',
                count: 0
            },
            {
                name: 'Gunner',
                count: 0
            }
        ],
        mates : [
            {
                name: 'Asakura',
                bm: '600',
                class: 'Knight',
                dragon: true,
                classColor: 'amber lighten-1'
            },
            {
                name: 'Kratos',
                bm: '575',
                class: 'Mage',
                dragon: false,
                classColor: 'light-blue lighten-3'
            },
            {
                name: 'Deadzone',
                bm: '650',
                class: 'Assasin',
                dragon: true,
                classColor: 'light-blue lighten-1'
            },
            {
                name: 'sailorFkkyou',
                bm: '700',
                class: 'Druid',
                dragon: true,
                classColor: 'light-green darken-1'
            },
            {
                name: 'DominiDirth',
                bm: '600',
                class: 'Guard',
                dragon: true,
                classColor: 'lime accent-1'
            },
            {
                name: 'Fluder',
                bm: '600',
                class: 'Gunner',
                dragon: false,
                classColor: 'light-blue lighten-3'
            },
            {
                name: 'Asakura',
                bm: '600',
                class: 'Knight',
                dragon: true,
                classColor: 'amber lighten-1'
            },
            {
                name: 'Kratos',
                bm: '575',
                class: 'Mage',
                dragon: false,
                classColor: 'light-blue lighten-3'
            },
            {
                name: 'Deadzone',
                bm: '650',
                class: 'Assasin',
                dragon: true,
                classColor: 'light-blue lighten-1'
            },
            {
                name: 'sailorFkkyou',
                bm: '700',
                class: 'Druid',
                dragon: true,
                classColor: 'light-green darken-1'
            },
            {
                name: 'DominiDirth',
                bm: '600',
                class: 'Guard',
                dragon: true,
                classColor: 'lime accent-1'
            },
            {
                name: 'Fluder',
                bm: '600',
                class: 'Gunner',
                dragon: false,
                classColor: 'deep-orange lighten-3'
            }
        ],
        rulesCard: {
            title: `ПРАВИЛА КЕНТОВ И МИРОВЫХ`,
            rules: {
            '1.' :  "ОБЯЗАТЕЛЬНАЯ ЯВКА в рейд общего сбора на мирового+кентавра в 21 час (исключение: воскресенье - сбор в 19 часов) в случае, если вы находитесь в игре.",
            '1.1' : "Нужно явиться, как минимум, за 5 минут до назначенного времени, если вы онлайн.",
            '1.2' : "По понедельникам разрешается покидать рейд раньше окончания боя, если он затянулся дольше 15 минут.",
            '1.3' : "В случае вашего отсутствия каждый день с 20:45 до 21:15, обязательным считается явка, как минимум, на 1 кентавра в неделю, вне зависимости от онлайна человека, вне общих сборов.",
            '1.3.1' : "Исключения устанавливаются в индивидуальном порядке ГЛом вашей гильдии (вахта, ДВ, отъезд, болезнь и т.д.)",
            '1.4' :" В случае осознанной неявки на обязательный сбор, минимальной явкой устанавливается 5 из 7 обязательных кентавров в неделю.",
            '1.4.1' : "Исключения устанавливаются в индивидуальном порядке ГЛом вашей гильдии (вахта, ДВ, отъезд, болезнь и т.д.)",
            '2.' : "Ко всем, игнорирующим квоту обязательных кентавров в неделю, применяются санкции по выдачи всех гильдейных наград (монеты, агаты, сундуки драконов, таэли).",
            '2.1' : "Размер наказания определяется ГЛом вашей гильдии в индивидуальном порядке, в зависимости от обстоятельств и грубости нарушения, но не менее 50% от заработанных монет.",
            '2.2' : "Все изъятые награды определяются в фонд изъявшей их гильдии.",
            '3.' : "Необзятельными для явки являются все остальные кентавры и мировые боссы.",
            '3.1.' : "Награды за них засчитываются и распределяются в стандартном порядке.",
            '3.2.' : "Санкции за неявку на необзятельных боссов не применяются.",
            '4.' : "В счет распределения наград не идет рейд общего сбора (ОРЗ, турнир, осада и другие массовые мероприятия), а так же все сундуки, залутанные во время данных мероприятий, вне зависимости от обстоятельств.",
            '4.1.' : "Монеты, полученные за лут общего сбора, идут в общий фонд и распределяются равномерно по оставшимся, засчитанным рейдам.",
            '5.' : "Выдача наград производится в первые две недели следующего месяца.",
            '5.1.' : "Выдача наград тем, кто покинул гильдию раньше момента выдачи, не производится."
            }
        } 
    },
    getters: {
        mates(state) {
            return state.mates 
        },
        getClassCount(state){
            return state.counter
        },
        getRules(state) {
            return state.rulesCard
        }
        
    },
    mutations: {
        classCount(state) {
            for (let mate of state.mates) {
                for (let countClass of state.counter) {
                    if(mate.class === countClass.name) {
                        countClass.count += 1
                    }
                }
            
            }
        },
        changeDateActivityOrz(state, payload) {
            for (let mate of state.mates) {
                mate.event.activityOrz[`${payload.date}`] = payload.status
            }
        }
    },
    actions: {
        CLASSCOUNT(context) {
            context.commit('classCount')
        },
        CHANGEDATEACTIVITYORZ({commit}, payload) {
            commit('changeDateActivityOrz', payload)
        }
    }
}