<template>
       <div class="content">
           
                <div class="home-overview">
                    <p id="authors"><em>Texto: David Capitão e Míguel Lima,<br/> alunos de Engenharia Informática</em></p>
                	      <img src="@/assets/img/logo_site.png"/>
                	      
                	      <h2 id="overview">Overview</h2>
                
                    <p><strong>Lusiada Lab Linux</strong></p>
                
                    <p>O Lusíada LAB é um projeto que consiste na criação de uma imagem virtual em sistema operativo Ubuntu MATE minimal  (20.04 LTS), e que contém todos os programas necessários para varias cadeiras do curso de Engenharia Informática da Universidade Lusíada de Lisboa.</p>
                
                    <p>A criação deste projeto proveio da necessidade de uma uniformização de toda a interação com os programas da faculdade por parte dos alunos. Isto porque uma das maiores adversidades é a elevada discrepância de versões e sistemas operativos entre os sistemas da faculdade e os computadores pessoais que cada aluno, o que dificulta e por vezes até impossibilita o trabalho fora do ambiente da faculdade.</p>
                
                    <p>Com o Lusíada LAB os alunos possuem uma imagem que consegue correr em qualquer sistema ou computador, instalada ou virtualizada, uniformizando assim a interação com os programas, quer em ambiente de aula quer no exterior. Outra grande vantagem é a portabilidade do ambiente virtual. Os alunos podem trabalhar num computador em aula e ao enviar o trabalho para o seu computador pessoal, continuar o seu trabalho no exato ponto em que o deixou, sem qualquer problema de compatibilidade.</p>
                
                    <p>O projeto possui ainda outras vantagens como a facilidade de instalação de programas necessários para as disciplinas, pois na eventual necessidade de atualizar ou instalar novos programas os alunos conseguem rápido e facilmente atualizar a sua máquina virtual, da mesma forma que o professor pode atualizar a máquina para novos alunos. Finalmente, em termos de segurança o Lusíada LAB é uma mais valia visto que certos programas envolvem riscos de segurança para a faculdade ao serem instalados nos computadores do sistema da instituição. Em contrapartida, a instalação dos mesmos programas num ambiente virtual reduz tais riscos e promove um ambiente mais seguro e de confiança para os utilizadores.</p>
                
                    <p>Em síntese, a criação do Lusíada LAB visa promover a facilidade no acesso aos programas utilizados em algumas disciplinas do curso de Engenharia Informática da Universidade Lusíada de Lisboa, assim como a comodidade no manuseamento dos mesmos, a portabilidade do sistema e promovo um ambiente seguro para a faculdade e para os seus alunos.</p>
                
                
                    <h2 id="course-mechanics">Guia de utilizador / Manual de Utilizador</h2>
                
                    <p>Instalação da Máquina Virtual:</p>
                    <ol>
                    <li>Ir ao link https://git-alunos.lis.ulusiada.pt/lusiada2.0/ </li>
                    <li>Fazer download da versão mais recente do Lusíada Lab;</li>
                    <li>Abrir o Oracle VM Virtual Box;<br/>
                    <img src="@/assets/img/lll-img1.png"></li>
                    <li>Clicar em File -> Import Appliance (Ctrl + I);<br/>
                    <img src="@/assets/img/lll-img2.png"></li>
                    <li>Escolher o ficheiro LusiadaLab.ova e seguir as instruções que aparecem no ecrã;</li>
                    <li>Uma vez instalado, clicar no botão “Start” (Se houver algum erro, experimente reiniciar o computador);</li>
                    <li>Completar os passos do instalador.</li>
                    <li>Caso utilizem o virtual Box é preciso instalar o "Guest Additions" para ter acesso a uma melhor resolução e a possibilidade de pastas partilhadas e de "shared clipboard"</li>
                    <li>If your virtual machine screen is very small (retina or other double density resolution screens), then in VirtualBox Settings->Display set the scaling factor to 200%</li>
                    <li>Open a terminal inside the VM and type:<br />
                        <em>sudo adduser $USER vboxsf</em></li>
                    </ol>
                
                    <h2 id="course-mechanics">Lista de programas</h2>
                    <ul>
                        <li>gcc: 9.3.0</li>
                        <li>gdb: 9.1</li>
                        <li>aptitude: 0.8.12</li>
                        <li>doxygen: 1.8.17</li>
                        <li>traceroute: 2.1.0</li>
                        <li>wireshark 3.2.3</li>
                        <li>curl 7.68.0</li>
                        <li>node (NodeJS) 14.4.0</li>
                        <li>npm 6.14.5</li>
                        <li>valgrind 3.15.0</li>
                        <li>code (VSCode) 1.45.1</li>
                        <li>python3(ubuntu pre install) 3.8.2</li>
                    </ul>
                
                
                    <h3 id="materials">Help</h3>
                    <p>We have tried to make it as simple as possible. But if you need assistance, you can head over to the  <a href="https://discord.gg/CFksVv6" target="_blank">Discord</a>.</p>
                </div>
              <div class="sidebar" id="lusiada-lab-sidebar">
                     <div class="sidebar-sub-div">
                        <h4>
                           Download
                        </h4>
                        <hr>
                        <router-link class="r-link" to="/LusiadaLab">LusiadLab Linux</router-link> 
                        <div>August 2020 Version (4GB)</div>
                        <hr class="hr-dotted">
                        
                    </div>
                    
                </div>
           
       </div>
</template>

<script>
export default {
    name: 'LusiadaLab',
    beforeMount(){
        this.$store.dispatch('setActive','Home')
    }
}
</script>

<style>
    /* #lusiada-lab-sidebar > *{
        margin-block: 1em;
    } */
  
</style>