import './app.css'
import { openStates } from './lib/uiState.js'
import App from './App.svelte'

const rawOpen = new URLSearchParams(window.location.search).get('open')
const states = new Set(rawOpen ? rawOpen.split(',') : [])
openStates.set(states)

const app = new App({ target: document.getElementById('app') })
export default app
