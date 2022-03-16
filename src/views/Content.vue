<template>
    <div class="main_content">
        <table class="table aci_table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Label</th>
                    <th>Visit</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in list" :key="i">
                    <td>{{i + 1}}</td>
                    <td>{{dates[i]}}</td>
                    <td>{{item.length > 0 ? item[0].label : '-'}}</td>
                    <td>{{item.length > 0 ? item[0].nb_visits : '-'}}</td>
                    <td>
                        <template v-if="item.length == 0">
                            -
                        </template>
                        <template v-else>
                            <div class="status-box">
                                <p>active</p>
                            </div>
                        </template>
                    </td>
                    <td>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-eye"
                                    @click.prevent="detail(i)"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- modal -->
        <b-modal
            id="modal-detail"
            centered
            size="xl"
            modal-class="aci_modal"
            @show="detail"
        >
            <div class="aci_modal_title">
                <p>Detail</p>
            </div>
            <div class="aci_modal_body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Label</th>
                            <th>nb_visits</th>
                            <th>nb_hits</th>
                            <th>sum_time_spent</th>
                            <th>nb_hits_with_time_generation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{label}}</td>
                            <td>{{nbVisits}}</td>
                            <td>{{nbHits}}</td>
                            <td>{{sumTimeSpent}}</td>
                            <td>{{nbHitsWithTimeGen}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "Content",
    data() {
        return {
            nbVisits: "",
            nbHits: "",
            sumTimeSpent: "",
            nbHitsWithTimeGen: "",
            label: ""
        }
    },
    methods: {
        async init() {
            // !!! this request is block by CORS
            // await this.axios.get('https://devel.bebasbayar.com/web/test_programmer.php')
            // .then((res) => {
            //     console.log('res', res);
            // })
            // .catch(err => {
            //     console.log(err);
            // })

            // TODO: SET STATIC RESPONSE
            await this.$store.dispatch("content/setContent")
        },
        detail(id) {
            let data = this.list[id];
            if (data.length > 0) {
                this.label = data[0].label
                this.nbVisits = data[0].nb_visits
                this.nbHits = data[0].nb_hits
                this.sumTimeSpent = data[0].sum_time_spent
                this.nbHitsWithTimeGen = data[0].nb_hits_with_time_generation
                this.$root.$emit('bv::show::modal', 'modal-detail', '#focusThisOnClose')
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        list() {
            let data = this.$store.getters['content/listContent'];
            let result = Object.values(data)
            return result;
        },
        dates() {
            let data = this.$store.getters['content/listContent'];
            let setDate = Object.keys(data);
            return setDate;
        }
    }
}
</script>

<style lang="scss" scoped>
.main_content {
    padding: 20px 80px;
    background: #F5EEFF;
    width: 100%;
    height: 100vh;
}
.status-box {
    border-radius: 20px;
    background: #3BAB37;
    padding: 5px 8px;
    width: 80px;

    p {
        text-transform: capitalize;
        color: #000;
        font-size: 12px;
        text-align: center;
    }
}
.aci_table {
    border: 1px solid #ECECEC;
    border-radius: 10px;

    thead {
        tr {
            text-align: left;
            th {
                background: #fff;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                color: #BABABA;
                font-family: 'roboto-regular';
            }
        }
    }
    tbody {
        tr {
            border-radius: 8px;
            text-align: left;
            td {
                background: #fff;
                color: #858484;

                &:nth-child(1) {
                    width: 70px;
                }
                &:nth-child(2) {
                    width: 170px;
                }
                // &:nth-child(3) {
                //     width: 270px;
                // }
            }
        }
    }
}
</style>

<style lang="scss">
.modal-footer {
    justify-content: center !important;
    border: none !important;
}

.aci_modal {
    .modal-dialog {
        .modal-content {
            background: #FFFFFF;
            border-radius: 20px;

            .modal-body {
                padding: 20px;
            }

            .modal-header {
                display: none;
            }

            .modal-footer {
                display: none;
            }
        }
    }

    &_title {
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        p {
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 140%;
            letter-spacing: -0.005em;
            color: #212121;
        }
    }
}

// end modal
</style>