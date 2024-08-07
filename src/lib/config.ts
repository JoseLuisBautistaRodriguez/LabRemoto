import { dev } from '$app/environment'

export const title = 'Laboratorio Remoto'
export const description = 'Laboratorio Remoto - Análisis de Sistemas y Señales'
export const url = dev ? 'http://localhost' : 'https://asdrome.eastus2.cloudapp.azure.com/'
export const pocketbaseURL = dev ? "http://localhost:8090" : url + "pb"
export const streamURL = url + '/stream/api/whep'
export const streamKey = 'RemoteLabStream'