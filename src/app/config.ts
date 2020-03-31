let envs = [];
let env = "productionV2";

envs['production'] = {
	baseApiUrl: 'https://admin.triviapost.in:5000/api/',
	mediaApiUrl: 'https://admin.triviapost.in/server/',
	isvisited: false,
	counter: 0
}
envs['development'] = {
	baseApiUrl: 'http://localhost:3000/api/',
	//mediaApiUrl: 'http://192.168.1.58/Bhavik/triviaBackend/',
	mediaApiUrl: 'https://admin.triviapost.in/server/uploads/',
	isvisited: false,
	counter: 0
}
envs['testing'] = {
	baseApiUrl: 'https://testing.triviapost.in:3000/api/',
	mediaApiUrl: 'https://testing.triviapost.in:3000/',
	isvisited: false,
	counter: 0
}
envs['productionV2'] = {
	baseApiUrl: 'https://admin.triviapost.in:4000/api/',
	mediaApiUrl: 'https://admin.triviapost.in/server/uploads/',
	isvisited: false,
	counter: 0
}
export const config = envs[env];
