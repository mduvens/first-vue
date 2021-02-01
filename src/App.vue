<template>
  <div id="main">
    <div id="head-content">
      <div id="nav">
        <div id="navTitle">
          <router-link class="logo-div" to="/"><img src="@/assets/img/lusiada.png" alt="ULL" id="logoLusiada"></router-link>
          <span>
            <div class="nav-header">{{currentSmallTitle}}</div>
            <div class="nav-sub-header big">{{currentTitle}}</div>
          </span>
              <!-- <button class="btn-big" @click="getNumbers()">Call API</button>
              <button class="btn-big" @click="javascriptPDF()">DownloadFile</button>
              <a target="_blank" href="/javascriptPDF.pdf"><button class="btn-big" >See File</button></a> -->
         <!-- <span class="big">{{currentTitle}}</span>
         <span class="small course-number">{{currentSmallTitle}}</span> -->
        </div>
        <div class="small" id="nav-button-div" v-if="isSubject">
          <span class="nav-button"><i class="fas fa-bars"></i></span>
        </div>
        <div class="hide" id="nav-links" v-if="isSubject">
            <router-link to="/Overview">HOME</router-link>
            <router-link to="/Lectures">LECTURES</router-link>
            <router-link to="/Assignments">ASSIGNMENTS</router-link>
            <router-link to="/Projects" v-if="getActive == 'CRG'">PROJECTS</router-link>
        </div>
          <!-- <div class="hide" id="nav-links" v-else>

          </div> -->


      </div>
      <div id="mainContent">

       
          <router-view/>
     
      </div>
    </div>
    <div id="footer">
      	&copy; 2021 Universidade Lusiada de Lisboa
    </div>
  </div>
</template>
<script>
import { updateMenu ,goTopPage,closeSidebar } from '@/assets/test.js'
import {mapGetters, mapState} from 'vuex'
import TestAPI  from '@/services/api'

export default {
    computed: {
      ...mapState([
        'activeSubject',
        'subjects'
      ]),
      ...mapGetters([
        'currentTitle',
        'currentSmallTitle',
        'isSubject',
        'getActive'
      ])
    },
    methods: {
        getNumbers(){
         TestAPI.getNumbers().then(res => console.log(res.data))
        },
        javascriptPDF(){ 
          TestAPI.javascriptPDF() 
        }
    },
    beforeCreate(){
      if(localStorage.hasOwnProperty('activeComponent'))
        this.$store.dispatch('setActive',localStorage.activeComponent)
      else
        this.$store.dispatch('setActive','Home')

      console.log(this.$store.state.activeSubject)
    },

    mounted(){
      updateMenu('nav-button-div','nav-links')
    },
    updated(){
      updateMenu('nav-button-div','nav-links')
      closeSidebar()
      goTopPage()
    }
}

</script>
<style >
.noscroll{
  position: fixed;
}
:root{
  --box-shadow: 0px 0px 8px rgb(230, 230, 230);
  --secondary-bg: rgba(0, 0, 0, 0.89);
  --nav-height: 8vh
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0em;

}
.big{display: flex;}
.small{display: none;}
h2{
  margin: 2em 0 0 0;
}
a{
    text-decoration: none;
    color: red;
    transition: all 200ms ease-out;
    }
a:hover{
  font-size: 1.01em;
 
}
.btn-big{
  margin: 1em;
  width: 100px;
  height: 50px;
}
.flex-container{
  display: flex;
}
.errorDiv{
  margin-top: 5%;

}
#head-content{
  grid-area: head;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  margin: auto;

}
#main{
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(96vh,1fr) 4vh;
  grid-template-areas:
  'head'
  'foot';
  overflow-x: auto;

}
#main.no-overflow{
  overflow: hidden;
}
#mainContent{
  grid-area: mainContent;
  background: rgb(253, 253, 253);
  line-height: 1.5em;
  /* height: 100%; */

}
.content{
  width: 65%;
  margin: auto;
  padding: 2em 0;
  display: flex;
  justify-content: center;
  /* background: whitesmoke; */
}
#nav {
  grid-area: 'nav';
  display: grid;
  min-height: var(--nav-height);
  grid-template-columns: repeat(2,50%);
  /* align-items: center; */
  box-shadow: var(--box-shadow);
  /* z-index: 2; */
}

#navTitle{
  display: flex;
  font-size: calc(var(--nav-height) * .25);
  align-items: center;
  letter-spacing: 1px;
}
#navTitle > *{
  margin-inline-end: .5em;
}
.logo-div{
  display: flex;
  align-items: center;
}
#logoLusiada{
  width: calc(var(--nav-height) * .7);
  margin-left: 10px;
}
#footer{
  grid-area: 'foot';

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 4vh; */
  font-size: .8rem;
  box-shadow: var(--box-shadow);

}
#nav-links{
  display: flex;
}
.nav-button{
  display: flex;
  align-items: center;
  margin: 0 1em 0 0 ;

}
#nav-button-div{
  font-size: 1.2em;
}
#nav-links,#nav-button-div{
  justify-content: flex-end;
  align-items: center;
}
.nav-header{
  /* color: #AA2808; */
  font-weight: 500;
  font-size: larger;
}
.nav-sub-header{
  font-size: .8em;
  font-variant:small-caps;
}
#nav-links a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  margin-inline-end: 2vw;
  box-sizing: border-box;
  /* border-radius: 20px; */
  transition: all 200ms ease-out;
  padding: calc(var(--nav-height) * 0.15) calc(var(--nav-height) * 0.25);
  font-size: 16px;
  font-variant-caps: all-small-caps;

}

#nav-links a:hover{
  box-shadow: var(--box-shadow)

}
#nav-links a.router-link-exact-active {
  box-shadow: var(--box-shadow)
  /* background: #2c3e50; */
}



@media screen and (max-width: 700px) {
  .small{display: flex;}
  .big{display: none;}
  .content{
    flex-direction: column;
  }
  #nav-links{

    display: flex;
    flex-direction: column;
    text-align: center;
    grid-column: span 2;
    row-gap: 2vh;
    margin-top: 2vh;
  }
  #nav-links.hide{
    display: none;
  }
  #nav > *{
    min-height: var(--nav-height);
    align-content: center;
  }
  #nav-links a {
    margin-inline-end: 0em;
    width: 90%;
    padding: calc(var(--nav-height) * 0.2);

  }
  .nav-header{
      /* font-weight: bold; */
      /* font-size: larger; */
      font-size: 1.1em;
  }

  .navTitle{
    font-size: 1vh
  }

}
@media screen and (max-width: 1025px){
  .content{
    width: 90%;
  }
}

@media screen and (max-height: 500px) {
  :root{
    --nav-height: 14vh;
  }
}
@media screen and (min-width: 700px) {
 
  .main-image{
    width: 95%;
    /* margin: auto; */
  }
}
</style>
