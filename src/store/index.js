import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    treninzi: [],
    trening_ponedeljak : [],
    trening_utorak : [],
    trening_sreda : [],
    trening_cetvrtak : [],
    trening_petak : [],
    trening_subota : [],
    trening_nedelja : [],

    masaze: [],
    masaze_ponedeljak: [],
    masaze_utorak: [],
    masaze_sreda: [],
    masaze_cetvrtak: [],
    masaze_petak: [],
    masaze_subota: [],
    masaze_nedelja: [],

    reservations: [],

    user: {},
    username: '',
    ime: '',
    prezime: '',
    email: '',
    token: ''
  },
  mutations: {

    addReservation(state, reservation) {
      state.reservations.push(reservation);
    },

    addTreninzi(state, trnz) {
      state.treninzi = trnz;
    },

    addMasaze(state, masgs) {
      state.masaze = masgs;
      // console.log( "iz vuex " + state.masaze)
    },

    addMasazePonedeljak(state, msgsp){
      state.masaze_ponedeljak = msgsp
    },
    addMasazeUtorak(state, msgsu){
      state.masaze_utorak = msgsu
    },
    addMasazeSreda(state, msgss){
      state.masaze_sreda = msgss
    },
    addMasazeCetvrtak(state, msgsc){
      state.masaze_cetvrtak = msgsc
    },
    addMasazePetak(state, msgspe){
      state.masaze_petak = msgspe
    },
    addMasazeSubota(state, msgssu){
      state.masaze_subota = msgssu
    },
    addMasazeNedelja(state, msgsn){
      state.masaze_nedelja = msgsn
    },

    addTreningPonedeljak(state, trngp){
      state.trening_ponedeljak = trngp
    },
    addTreningUtorak(state, trngu){
      state.trening_utorak = trngu
    },
    addTreningSreda(state, trngs){
      state.trening_sreda = trngs
    },
    addTreningCetvrtak(state, trngc){
      state.trening_cetvrtak = trngc
    },
    addTreningPetak(state, trngpe){
      state.trening_petak = trngpe
    },
    addTreningSubota(state, trngsu){
      state.trening_subota = trngsu
    },
    addTreningNedelja(state, trngn){
      state.trening_nedelja = trngn
    },

    addReservations(state, rsvs) {
      state.reservations = rsvs;
    },

    addUser(state, usr){
      // console.log("iz add user")
      // console.log(usr)
      state.user = usr;
      state.username = usr.username;
      state.ime = usr.ime;
      state.prezime = usr.prezime;
      state.email = usr.email;

      // console.log(state.user)
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
      console.log("token je :" +token)
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
  },
  actions: {

    fetchMasaze({ commit }) {
      console.log("cao iz fetch masaze")
      fetch('https://skript-projekat-backend.herokuapp.com/masaza', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then( obj => obj.json() )
        .then( res => commit('addMasaze', res) );
        // .then(res => console.log(res))
    },

    fetchTreninzi({ commit }) {
      console.log("cao iz fetch treninzi")
      fetch('https://skript-projekat-backend.herokuapp.com/trening', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then( obj => obj.json() )
          .then( res => commit('addTreninzi', res) );
    },

    fetchUser({ commit }) {
      // console.log("dohvatam usera http://192.168.88.238:5000/user/" + localStorage.getItem('username'))
      fetch('https://skript-projekat-backend.herokuapp.com/user/' + localStorage.getItem('username'), {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addUser', res[0]) });
        // .then(res => console.log(res[0]))
    },

    login({ commit }, obj) {
      fetch('https://skript-projekat-auth.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
          // commit('setUsername', )
          console.log(localStorage.getItem('token'))
          console.log(localStorage.getItem('username'))
          router.push('/user');
        }
      });
    },

    register({ commit }, obj) {
      fetch('https://skript-projekat-auth.herokuapp.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('addReservation', tkn.token) );
    },

    reserve({ commit }, obj) {
      fetch('https://skript-projekat-backend.herokuapp.com/rezervacija', { //srediti url
        method: 'POST',
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' },
        body: JSON.stringify(obj)
      }).then( obj => obj.json() )
        .then( res => {commit('addReservation', res) });
    },

    
    fetchSlobodneMasazePonedeljak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/1', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazePonedeljak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazeUtorak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/2', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazeUtorak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazeSreda({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/3', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazeSreda', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazeCetvrtak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/4', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazeCetvrtak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazePetak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/5', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazePetak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazeSubota({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/6', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazeSubota', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneMasazeNedelja({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/sm/7', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addMasazeNedelja', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },


    fetchSlobodneTreningPonedeljak({ commit }){
      console.log("pozz is fetch ponedeljak")
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/1', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningPonedeljak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningUtorak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/2', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningUtorak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningSreda({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/3', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningSreda', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningCetvrtak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/4', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningCetvrtak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningPetak({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/5', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningPetak', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningSubota({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/6', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningSubota', res) })
          .catch(err => {
            console.log(err)
            router.push('/')})
        // .then(res => console.log(res[0]))
    },
    fetchSlobodneTreningNedelja({ commit }){
      fetch('https://skript-projekat-backend.herokuapp.com/termin/st/7', {
        // headers: { 'Authorization': `Bearer ${state.token}` } })
        headers: { 
          'Authorization': 'Bearer '+  localStorage.getItem('token'),
          'Content-Type': 'application/json',
          'Accept': 'application/json' } 
        })
          .then( obj => obj.json() )
          .then( res => {commit('addTreningNedelja', res) })
          .catch(err => {
            console.log("greska" + err)
            router.push('/#/')})
        // .then(res => console.log(res[0]))
    },
  },
  modules: {
  }
})
