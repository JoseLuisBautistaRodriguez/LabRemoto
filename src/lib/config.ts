<<<<<<< HEAD
import { dev } from '$app/environment';

export const title = 'Laboratorio Remoto';
export const description = 'Laboratorio Remoto - Análisis de Sistemas y Señales';
export const url = dev ? 'http://127.0.0.1:8090' : 'http://192.168.50.117';
export const pocketbaseURL = dev ? url : url;
export const streamURL = dev
	? 'http://localhost:10000/api/whep'
	: 'http://192.168.50.117:10000/api/whep';
export const streamKey = 'RemoteLabStream';
=======
import { dev } from '$app/environment'

export const title = 'Laboratorio Remoto'
export const description = 'Laboratorio Remoto - Análisis de Sistemas y Señales'
export const url = dev ? 'http://localhost' : 'https://asdrome.eastus2.cloudapp.azure.com/'
export const pocketbaseURL = dev ? "http://localhost:8090" : url
export const streamURL = url + '/stream/api/whep'
export const streamKey = 'RemoteLabStream'
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4
