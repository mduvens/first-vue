import {
  createStore
} from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
export default createStore({
  // plugins:[createPersistedState()], 
  state: {
    counter: 2,
    colorCode: 'red',
    activeSubject: 'Home',
    subjects: {
      Home: {
        title: "Lusíada University of Lisbon",
        smallTitle: 'Course Website'
      
      },
      LusiadaLab: {
        title: "Lusíada Lab",
        smallTitle: 'Lab'
      },
      IA: {
        title: "Inteligência Artificial",
        smallTitle: 'L9027',
        theorySchedule: 'Mondays: 15:00 - 16:30 (E11)',
        labSchedule: 'Tuesdays: 17:10 - 18:00 (E11)'
        // lectures: {
        //   0: {
        //     date: '14/9',
        //     topic: ' Introdução, Evolução histórica do conceito de Inteligência Artificial.',
        //     slides: '',
        //     reading: 'Russel $ Norvig, Cap. 1 '
        //   },
        //   1: {
        //     date: '28/9',
        //     topic: " Search Algorithms (cont'd)",
        //     slides: '-',
        //     reading: 'Russel & Norvig, Cap. 4 '
        //   }
        // },
        // assignments: {
        //   0: {
        //     description: " Search Algorithms (cont'd)",
        //     date: '28/9'
        //   },
        //   1: {
        //     description: " Using your own libtree or use the one supplied in the previous task. Implement one (and only one) of the following 2 algorithms: Huffman Encoding/Decoding: Write a Huffman encoder that encodes a (binary) file or a text file and stored the result. Don't forget to store the dictionary first in the same file. Your decoder should be able to decode your encoded files. Alpha/Beta Pruning: Read a tree of integers from a file (already done in libtree for you) and implement Alpha/Beta pruning. Count the number of nodes not evaluated and show the resulting path. Bonus points if you can somehow make it show the tree before and after pruning. Deadline: 14/12/2020 20/12/2020 Oficial (Não oficial até 03/01/2021) Hand in via moodle all your code. You can program it in Windows, but you will get much nicer code if you use the Virtual Machine with Ubuntu Mate 20.04 TPC", date: '28/9'
        //   }
        // }
      },
      AC: {
        title: "Arquitetura de Computadores",
        smallTitle: 'L9010',
        theorySchedule: 'Thursdays: 09:00 - 10:50 (11E)',
        labSchedule: 'Wednesdays: 09:00 - 09:50 (11E)'
      },
      CRG: {
        title: "Computação e Representação Gráfica",
        smallTitle: 'L9019',
        theorySchedule: 'Fridays: 14:40 - 16:10 <del>(N1)</del>->(E10)',
        labSchedule: 'Tuesdays: 14:00 - 14:50 <del>(N1)</del>->(E10)'

      },
    },
  },
  mutations: {
    setActive(state, novo) {
      state.activeSubject = novo
      localStorage.activeComponent = novo
    }
  },
  actions: {
    setActive({commit}, novo) {
      commit('setActive', novo)
    }
  },
  getters: {
    currentTitle(state) {
      return state.subjects[`${state.activeSubject}`].title
    },
    currentSmallTitle(state) {
      return state.subjects[`${state.activeSubject}`].smallTitle
    },
    getActive(state) {
      return state.activeSubject
    },
    isSubject(state) {
      return state.activeSubject != 'LusiadaLab' && state.activeSubject != 'Home'
    }
  },
  modules: {}
})