let HEADER = {
	'content-type': 'application/json',
	//#ifdef H5
	'Form-type': navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1 ? 'wechat' : 'h5',
	//#endif
	//#ifdef MP
	'Form-type': 'routine',
	//#endif
	//#ifdef APP-PLUS
	'Form-type': 'app',
	//#endif
}
let TOKENNAME = 'Authori-zation'
let token = '123'
function baseRequest(baseUrl, method, data, {
	noAuth = false,
	noVerify = false
}) {
		let config = {
			url: baseUrl + '/api/',
			header: HEADER,
		}
		if (TOKENNAME) config.header[TOKENNAME] = 'Bearer ' + token;
		console.log(config)
}
baseRequest();