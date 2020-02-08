let envs = [];
let env = "test";

envs['production'] = {
	baseApiUrl: 'https://admin.triviapost.in:5000/api/',
	mediaApiUrl: 'https://admin.triviapost.in/server/',
	isvisited: false,
	counter: 0
}
envs['development'] = {
	baseApiUrl: 'http://192.168.1.58:3000/api/',
	mediaApiUrl: 'http://192.168.1.58/Bhavik/triviaBackend/',
	isvisited: false,
	counter: 0
}
envs['test'] = {
	baseApiUrl: 'https://testing.triviapost.in:3000/api/',
	mediaApiUrl: 'https://testing.triviapost.in/server/',
	isvisited: false,
	counter: 0
}
export const config = envs[env];