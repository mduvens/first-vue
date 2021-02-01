<template>
<div class="content">
            <div class="div-overview" id="div-overview">
                        <img class="main-image" id="test-hover" src="@/assets/img/board.jpg"/>
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
            <div class="sidebar animate__animated" id="home-sidebar">
                    <div class="sidebar-about home-about" id="home-about">
                        <div class="sidebar-sub-div" id="close-div">

                                <span><b>X</b></span>
                        </div>
                        <div class="sidebar-sub-div home-sub-div">
                            <div class="side-header">First Year </div>
                            <hr>
                            <div>
                                <router-link class="r-link"  to="/Overview" @click="setActive('AC')">L9010 - Arquitectura de Computadores</router-link>
                            </div>
                            <div>1st Semester</div>
                            <hr class="hr-dotted">
                        </div>
                        <div class="sidebar-sub-div home-sub-div">
                            <div class="side-header">Second Year</div>
                            <hr>
                            <div>
                                <router-link class="r-link"  to="/Overview" @click="setActive('CRG')">L9019 - Computaçao e Representaçao Grafica</router-link>
                            </div>
                            <div>1st Semester</div>
                            <hr class="hr-dotted">
                            <!-- <router-link class="r-link"  to="#" @click="$store.dispatch('setActive','RCOM')">L9019 - Redes de Comunicações</router-link> -->
                            <div>2nd Semester</div>
                            <hr class="hr-dotted">
                        </div>
                        <div class="sidebar-sub-div home-sub-div">
                            <div class="side-header">
                                Third Year
                            </div>
                            <hr>
                            <div>
                                <router-link class="r-link"  to="/Overview" @click="setActive('IA')">L9027 - Artificial Intelligence</router-link>
                            </div>
                            <div>1st Semester</div>
                            <hr class="hr-dotted">
                            <!-- <router-link class="r-link"  to="#" @click="$store.dispatch('setActive','RCOMP')">L9027 - Redes de Comunicações</router-link> -->
                            <div>2nd Semester</div>
                            <hr class="hr-dotted">

                        </div>
                         <div class="sidebar-sub-div home-sub-div">

                            <div class="side-header">
                               Virtual Machine
                            </div>
                            <hr>
                            <div>
                                <router-link class="r-link" to="/LusiadaLab" >LusiadLab Linux</router-link>
                            </div>
                            <div></div>
                            <hr class="hr-dotted">

                        </div>
                        
                    </div>
                </div>
                <div  id="home-toggle"><i class="fas fa-bars"></i></div>
                <div class="animate__animated animate__fadeIn " id="opacity-div"></div>
</div>
</template>

<script>
import { mapActions} from 'vuex'
import {closeSidebar,openSidebar} from '@/assets/test.js'
    export default {
        name: 'Home',
        methods:{
            ...mapActions(['setActive']),
        },
        beforeMount(){
        this.setActive('Home')
        },
        mounted(){
            openSidebar(),
            closeSidebar()

        }

    }
</script>

<style> /* general styling in /views/Overview.vue */

    #home-toggle{
        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        z-index: 3;
        width: 100px;
        text-align: right;
        justify-content: flex-end;
        align-items: center;
        margin-right: 1em;
        height: var(--nav-height);
        font-size: 1.2em;
        cursor: pointer;

    }
    #opacity-div{
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(128,128,128,0.6);
        
        transition: all 500ms;
        z-index: 4;
    }
    #home-toggle{
        display: none;
    }
    #close-div{
        display: flex;
        justify-content: flex-end;
        margin: 0 1em 0 0;
        transform: translateY(20px);
        font-size:1.2em;
        cursor: pointer;

    }
    @media screen and (min-width: 701px) {
        #close-div{
            display: none;
        }
    }
    @media screen and (max-width: 700px) {

        #home-toggle{
                display: flex;
            }
        #home-sidebar{
            position: absolute;
            display: none;
            top: 0;
            right: 0;
            width: 65vw;
            height: 100%;
            background-color: whitesmoke;
            z-index: 5;
            /* transform: translateX(100vw); */
            transition: all 500ms ease-out;
            padding-top: 0em;
            /* background: 1; */
        }
        #home-about{
            width: 100%;
        }
    .home-sub-div > div{
        margin: 0 0 0 2vw;
    }
    #home-sidebar.active{
         /* background: red; */
        display: flex;
        animation: slideInRight;
        animation-duration: 500ms;
        /* transform: translateX(35vw); */
        position: fixed;
    }
    #opacity-div.active{
        display: flex;
        animation: fadeIn;
        animation-duration: 500ms;
    }
 
    }
</style>