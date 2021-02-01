<template>
    <div class="content">
        <div class="main-lectures-div" v-if="isSubject">
            <div class="main-lecture">
                <div class="header-div">
                    <h2 class="header-normal">Lectures</h2>
                    <p><strong>Note</strong>: Lecture slides are added automatically as lectures are completed.</p>
                </div>
                <table class="t-table">
                    <colgroup>
                        <col width="10%" />
                        <col width="60%" />
                        <col width="10%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr class="table-header">
                            <td>Date</td>
                            <td>Topic</td>
                            <td>Slides</td>
                            <td>Reading/HW</td>
                        </tr>
                    </thead>
                    <tbody>
                        <component :is="currentLecture()"></component>
                    </tbody>
                </table>
            </div>
            <div class="main-lecture">
                <div class="header-div">
                    <h2 class="header-normal">Tests/Exams</h2>
                    <p><strong>Note</strong>: Always check the room!.</p>
                </div>
        
                <table class="t-table">
                    <colgroup>
                        <col width="10%" />
                        <col width="60%" />
                        <col width="10%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr class="table-header">
                            <td>Date</td>
                            <td>Topic</td>
                            <td>Room</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        <component :is="currentExams()"></component>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="errorDiv" v-else>
            <h1>No Active Subject :(
            </h1>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import AClectures from '@/components/AC/AC_lectures.vue'
    import IAlectures from '@/components/IA/IA_lectures.vue'
    import CRGlectures from '@/components/CRG/CRG_lectures.vue'
    import RCOMlectures from '@/components/RCOM/RCOM_lectures.vue'
    import RCOMPlectures from '@/components/RCOMP/RCOMP_lectures.vue'
    import IAexams from '@/components/IA/IA_exams.vue'

    export default {
        components: {
            AClectures,
            IAlectures,
            CRGlectures,
            RCOMlectures,
            RCOMPlectures,
            IAexams
        },
        computed: {
            ...mapState(['subjects', 'activeSubject']),
            ...mapGetters(['isSubject'])
        },
        methods:{
            currentLecture(){
                return this.$store.state.activeSubject + 'lectures'
            },
            currentExams(){
                return this.$store.state.activeSubject + 'exams'
            
            }
    }
    }
</script>
<style>
  

    .main-lecture {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        margin: auto;
    }

    .header-div {
        text-align: left;
    }

    .t-table {
        border-radius: 1em;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.089);
        text-align: center;
        width: 100%;
        margin: auto;
        border-spacing:0;
        border-collapse:collapse;
        font-size: .9em;
        line-height: 20px

    }
    .table-header{
        font-weight: bold;
    }
    .main-lectures-div{
        flex-direction: column;
        width: 100%;
    }
    .topic {
        text-align: left;
    }

    tr > * {
        padding: .5em;
        border: 1px solid rgb(192, 191, 191);


    }
    /* @media screen and (min-width: 1024px) {
      .t-table{
      }
    } */
    @media screen and (max-width: 1024px) {
        .main-lecture {
            width: 100%;
        }
    }
</style>