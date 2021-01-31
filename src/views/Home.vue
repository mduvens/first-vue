<template>

    <div class="home-overview">
                <img class="main-image" src="@/assets/img/board.jpg"/>
                <h2 id="overview">Overview</h2>
                <p>This site is the homepage of Martijn Kuipers, lecturer at the Lusida University of Lisbon. It is where I host
                    the website for the courses I teach.</p>
                <p>The offical place to hand in your assignments is on moodle, unless indicated otherwise.</p>
                <p>Some of the material may require a institute login.</p>
                <h2 id="course-list">Course List</h2>
                <ul>
                    <li><router-link to="/Overview" @click="setActive('AC')">L9010 - Arquitectura de Computadores</router-link>
                        <p>This is a course on computer architecture, where we discover the innerworkings of a computer. We also
                            dive into a little bit of assembly and look at the different caching mechanisms for memory
                            management.</p>
                    </li>
                    <li><router-link to="/Overview" @click="setActive('CRG')">L9019 - Computaçao e Representaçao Grafica</router-link>
                        <p>In this course we look into 3D models and how we can project them on a screen. We are going to write
                            some 3D applications using three.js. In recent years, the students created games using the three.js
                            engine and we have some impressive results.</p>
                    </li>
                    <li><router-link to="#" >L9015 - Redes de Comunicações</router-link>
                        <p>In this course we are going to look into web applications. I know, the name doesn't really convey
                            what we are doing, but we have merely shifted the focus from "pure telecomunications" to
                            applications that need to be able to work on any device, with any kind of communications link.</p>
                    </li>
                    <li><router-link to="/Overview" @click="setActive('IA')">L9027 - Artificial Intelligence</router-link>
                        <p>This is our basic course for Artificial Intelligence, where we look into various algorithms. The
                            focus here is on the algorithms and not on their implementation.</p>
                    </li>
                    <li><router-link to="#" >L9025 - Redes de Computadores</router-link>
                        <p>This is the course where we look into TCP/IP as the most important protocol currently. However, e
                            also look into other protocols and into network architectures. We will learn how to program with
                            sockets, using raw sockets, UDP and TCP.</p>
                    </li>
                </ul>
    </div>
    <div class="sidebar" >
            <div class="sidebar-about">
                <div class="sidebar-sub-div">
                    <div class="side-header">First Year </div> 
                    <hr>
                    <router-link class="r-link"  to="/Overview" @click="setActive('AC')">L9010 - Arquitectura de Computadores</router-link>
                    <div>1st Semester</div>
                    <hr class="hr-dotted">
                </div>
                <div class="sidebar-sub-div">
                    <div class="side-header">Second Year</div> 
                    <hr>
                    <router-link class="r-link"  to="/Overview" @click="setActive('CRG')">L9019 - Computaçao e Representaçao Grafica</router-link>
                    <div>1st Semester</div>
                    <hr class="hr-dotted">
                    <!-- <router-link class="r-link"  to="#" @click="$store.dispatch('setActive','RCOM')">L9019 - Redes de Comunicações</router-link> -->
                    <div>2nd Semester</div>
                    <hr class="hr-dotted">
                </div>
                <div class="sidebar-sub-div">
                    <div class="side-header">
                        Third Year
                    </div>
                    <hr>
                    <router-link class="r-link"  to="/Overview" @click="setActive('IA')">L9027 - Artificial Intelligence</router-link> 
                    <div>1st Semester</div>
                    <hr class="hr-dotted">
                    <!-- <router-link class="r-link"  to="#" @click="$store.dispatch('setActive','RCOMP')">L9027 - Redes de Comunicações</router-link> -->
                    <div>2nd Semester</div>
                    <hr class="hr-dotted">
                    
                </div>
                 <div class="sidebar-sub-div">
                    <div class="side-header">
                       Virtual Machine
                    </div>
                    <hr>
                    <router-link class="r-link" to="/LusiadaLab">LusiadLab Linux</router-link> 
                    <div></div>
                    <hr class="hr-dotted">
                    
                </div>
            </div>
        </div>
</template>

<script>
import { mapActions} from 'vuex'
    export default {
        name: 'Home',
         methods:{
            ...mapActions(['setActive'])
        } ,
        beforeMount(){
        this.setActive('Home')
    }
    }
</script>

<style >

    .home-overview{
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