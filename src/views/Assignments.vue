<template>
<div class="main-lecture" v-if="isSubject">
    <div class="header-div">
        <h1 class="header-normal">Assignments</h1>
        <p><strong>Note</strong>: Assignments are added automatically as lectures are completed.</p>
    </div>

<table class="t-table">
        <tr class="t-head">
            <th>Description</th>
            <th>Date</th>
        </tr>
        <component :is="current()"></component>

</table>

</div>
 <div class="errorDiv" v-else>
      <h1>
        No Active Subject :(
      </h1>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import IAassignments from '@/components/IA/IA_assignments.vue'
export default {
    components: {
        IAassignments
    },
    computed: {
        ...mapState(['subjects','activeSubject'])  ,
        ...mapGetters(['isSubject'])  
    },
    methods:{
        current(){
            return this.$store.state.activeSubject + 'assignments'
        }
    }
}
</script>
<style >
    .lab-assignment{
        text-align: left;
    }
</style>