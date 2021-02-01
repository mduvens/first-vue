<template>

    <div class="content">
      <div class="home-main" v-if="isSubject">
        <div class="div-overview">
          <component :is="current()"></component>
        </div>
        <div class="sidebar">
          <div class="sidebar-about">
            <div class="sidebar-sub-div">
            <div class="side-header">About</div>
            <hr>
              Lecturer <br>
              <a class="r-link" href="#">Martijn Kuipers</a>
              <hr class="hr-dotted">
            </div>
            <div class="sidebar-sub-div">
            <div class="side-header">Schedule</div>
            <hr>
              <router-link class="r-link" to="/Lectures" >Theory</router-link><br>
                <span v-html="subjects[activeSubject].theorySchedule"></span> <!-- value store/index.js-->
              <hr class="hr-dotted">
              <router-link class="r-link" to="/Assignments">Lab</router-link> <br>
                <span v-html="subjects[activeSubject].labSchedule"></span>  <!-- value store/index.js-->
    
            </div>
          </div>
          <div class="sidebar-material">
          </div>
        </div>
      </div>
      <div class="errorDiv" v-else>
        <h1>
          No Active Subject :(
        </h1>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ACoverview from '@/components/AC/AC_overview.vue'
import IAoverview from '@/components/IA/IA_overview.vue'
import CRGoverview from '@/components/CRG/CRG_overview.vue'
  
  export default {
    name: 'IA',
    components:{
      ACoverview,CRGoverview,IAoverview
    },
    computed:{
      ...mapState(['activeSubject','subjects']),
      ...mapGetters(['isSubject'])
    },
    methods:{
    current(){
        return this.$store.state.activeSubject + 'overview'
      }
  }
  }
</script>
<style >
  .home-main{
    display: flex;
  }
     .div-overview{
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 3;
    }
    .sidebar{
        
    text-align: left;
    flex:1 ;
    }
     .side-header{
        font-weight: bold;
        margin: 0 0;
    }
   
    .hr-dotted{
        border-top: 1px dashed black;
    }
   
    .sidebar-about > * + *{
        margin-top: 2em;
    }
    @media screen and (min-width: 700px) {
  .sidebar-about{
      width: 90%;
      /* margin: auto; */
  }
    
    }
       @media screen and (max-width: 700px) {
   
    .home-main{
        flex-direction: column;
    }
    }
</style>
