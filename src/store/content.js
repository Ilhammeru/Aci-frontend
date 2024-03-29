const state = {
    content: []
}
const getters = {
    listContent(state) {
        return state.content;
    }
}
const mutations = {
    SET_CONTENT: (state, payload) => {
        state.content = payload;
    }
}
const actions = {
    async setContent(context) {
        let content = {
            "2017-02": [],
            "2017-03": [],
            "2017-04": [],
            "2017-05": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1564,
                    "nb_hits": 2033,
                    "sum_time_spent": 69711,
                    "nb_hits_with_time_generation": 1392,
                    "min_time_generation": "0.001",
                    "max_time_generation": "47.593",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "sum_daily_nb_uniq_visitors": 1413,
                    "entry_nb_visits": 176,
                    "entry_nb_actions": 802,
                    "entry_sum_visit_length": 66663,
                    "entry_bounce_count": 27,
                    "exit_nb_visits": 128,
                    "sum_daily_entry_nb_uniq_visitors": 158,
                    "sum_daily_exit_nb_uniq_visitors": 121,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 34,
                    "bounce_rate": "15%",
                    "exit_rate": "8%",
                    "avg_time_generation": 0.853
                }
            ],
            "2017-06": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1956,
                    "nb_hits": 2605,
                    "sum_time_spent": 92056,
                    "nb_hits_with_time_generation": 1850,
                    "min_time_generation": "0.001",
                    "max_time_generation": "252.825",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 266,
                    "entry_nb_actions": 933,
                    "entry_sum_visit_length": 85487,
                    "entry_bounce_count": 80,
                    "exit_nb_visits": 200,
                    "sum_daily_nb_uniq_visitors": 1671,
                    "sum_daily_entry_nb_uniq_visitors": 204,
                    "sum_daily_exit_nb_uniq_visitors": 174,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 35,
                    "bounce_rate": "30%",
                    "exit_rate": "10%",
                    "avg_time_generation": 1.103
                }
            ],
            "2019-07": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 2105,
                    "nb_hits": 2817,
                    "sum_time_spent": 96139,
                    "nb_hits_with_time_generation": 2013,
                    "min_time_generation": "0.001",
                    "max_time_generation": "64.769",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 288,
                    "entry_nb_actions": 883,
                    "entry_sum_visit_length": 79970,
                    "entry_bounce_count": 99,
                    "exit_nb_visits": 224,
                    "sum_daily_nb_uniq_visitors": 1786,
                    "sum_daily_entry_nb_uniq_visitors": 226,
                    "sum_daily_exit_nb_uniq_visitors": 194,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 34,
                    "bounce_rate": "34%",
                    "exit_rate": "11%",
                    "avg_time_generation": 0.821
                }
            ],
            "2017-08": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1920,
                    "nb_hits": 2492,
                    "sum_time_spent": 91991,
                    "nb_hits_with_time_generation": 1719,
                    "min_time_generation": "0.002",
                    "max_time_generation": "20.357",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 301,
                    "entry_nb_actions": 989,
                    "entry_sum_visit_length": 93807,
                    "entry_bounce_count": 126,
                    "exit_nb_visits": 265,
                    "sum_daily_nb_uniq_visitors": 1635,
                    "sum_daily_entry_nb_uniq_visitors": 226,
                    "sum_daily_exit_nb_uniq_visitors": 226,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 37,
                    "bounce_rate": "42%",
                    "exit_rate": "14%",
                    "avg_time_generation": 0.763
                }
            ],
            "2017-09": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1730,
                    "nb_hits": 2212,
                    "sum_time_spent": 76546,
                    "nb_hits_with_time_generation": 1532,
                    "min_time_generation": "0.001",
                    "max_time_generation": "171.991",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 245,
                    "entry_nb_actions": 754,
                    "entry_sum_visit_length": 60299,
                    "entry_bounce_count": 74,
                    "exit_nb_visits": 211,
                    "sum_daily_nb_uniq_visitors": 1481,
                    "sum_daily_entry_nb_uniq_visitors": 197,
                    "sum_daily_exit_nb_uniq_visitors": 197,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 35,
                    "bounce_rate": "30%",
                    "exit_rate": "12%",
                    "avg_time_generation": 1.007
                }
            ],
            "2017-10": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1688,
                    "nb_hits": 2274,
                    "sum_time_spent": 99468,
                    "nb_hits_with_time_generation": 1599,
                    "min_time_generation": "0.001",
                    "max_time_generation": "16.443",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 242,
                    "entry_nb_actions": 709,
                    "entry_sum_visit_length": 63031,
                    "entry_bounce_count": 70,
                    "exit_nb_visits": 191,
                    "sum_daily_nb_uniq_visitors": 1429,
                    "sum_daily_entry_nb_uniq_visitors": 184,
                    "sum_daily_exit_nb_uniq_visitors": 157,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 44,
                    "bounce_rate": "29%",
                    "exit_rate": "11%",
                    "avg_time_generation": 1.122
                }
            ],
            "2017-11": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1485,
                    "nb_hits": 1903,
                    "sum_time_spent": 73092,
                    "nb_hits_with_time_generation": 1327,
                    "min_time_generation": "0.002",
                    "max_time_generation": "46.218",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 195,
                    "entry_nb_actions": 622,
                    "entry_sum_visit_length": 46344,
                    "entry_bounce_count": 55,
                    "exit_nb_visits": 152,
                    "sum_daily_nb_uniq_visitors": 1310,
                    "sum_daily_entry_nb_uniq_visitors": 166,
                    "sum_daily_exit_nb_uniq_visitors": 138,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 38,
                    "bounce_rate": "28%",
                    "exit_rate": "10%",
                    "avg_time_generation": 0.822
                }
            ],
            "2017-12": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1278,
                    "nb_hits": 1592,
                    "sum_time_spent": 50637,
                    "nb_hits_with_time_generation": 1000,
                    "min_time_generation": "0.001",
                    "max_time_generation": "22.689",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 213,
                    "entry_nb_actions": 630,
                    "entry_sum_visit_length": 42401,
                    "entry_bounce_count": 64,
                    "exit_nb_visits": 150,
                    "sum_daily_nb_uniq_visitors": 1121,
                    "sum_daily_entry_nb_uniq_visitors": 166,
                    "sum_daily_exit_nb_uniq_visitors": 132,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 32,
                    "bounce_rate": "30%",
                    "exit_rate": "12%",
                    "avg_time_generation": 0.63
                }
            ],
            "2018-01": [
                {
                    "label": " BebasBayar | Menu Favorit",
                    "nb_visits": 1130,
                    "nb_hits": 1434,
                    "sum_time_spent": 48411,
                    "nb_hits_with_time_generation": 992,
                    "min_time_generation": "0.001",
                    "max_time_generation": "44.479",
                    "sum_bandwidth": 0,
                    "nb_hits_with_bandwidth": 0,
                    "min_bandwidth": null,
                    "max_bandwidth": null,
                    "entry_nb_visits": 143,
                    "entry_nb_actions": 410,
                    "entry_sum_visit_length": 34189,
                    "entry_bounce_count": 36,
                    "exit_nb_visits": 106,
                    "sum_daily_nb_uniq_visitors": 1008,
                    "sum_daily_entry_nb_uniq_visitors": 125,
                    "sum_daily_exit_nb_uniq_visitors": 100,
                    "avg_bandwidth": 0,
                    "avg_time_on_page": 34,
                    "bounce_rate": "25%",
                    "exit_rate": "9%",
                    "avg_time_generation": 0.628
                }
            ]
        }
        context.commit("SET_CONTENT", content);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}