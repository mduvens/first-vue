<template>
    <div class="content">
        <div class="main-projects-div" v-if="isSubject">
           <component :is="current()"></component>       
        </div>
        <div class="errorDiv" v-else>
            No Active Subject :(
        </div>
    </div>
</template>

<script>
import CRGprojects from '@/components/CRG/CRG_projects'
import { mapGetters } from 'vuex'
    export default {
    computed:{
        ...mapGetters(['isSubject'])
    },
    components: {
        CRGprojects
    },
        methods: {
            current(){
                return this.$store.state.activeSubject + 'projects'
            }
        }
    }
</script>

<style>
    .main-projects-div {
        width: 100%;
        /* background-color: antiquewhite; */
    }
    .project{
        background-color: antiquewhite;
        transition: all 500ms;
    }
    .project:hover{
        transform: scale(1.1);
    }
    .project > * {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .year-div{
        display: flex;
        width: 100%;
        margin-top: 2em;
        flex-direction: column;
        font-size: 1.2em;
        
    }
    .projects-grid{
        display: grid;
        width: 100%;
        justify-content: center;
        gap: 1em;
        grid-auto-rows: 250px;
        grid-template-columns: repeat(auto-fit, 280px);
        margin-top: 1em;
        
    }
    
    .year-div > p {
        margin-top: 0;
    }
    
</style>