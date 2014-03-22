exports.config={
	version:0.1,
	http:{
		header:{
			'Content-Type':'text/html;charset=utf-8',
			'charset':'utf-8',
			'Server':'Rouwan/0.1'
		},
		debug:true,
		allowEmptyExtname:false,
		allowFileDownload:true,
		maxAge:30*24*3600,
		printPostData:true, // print post data to console.
		mime:{
			css:"text/css",
			gif:"image/gif",
			html:"text/html",
			ico:"image/x-icon",
			jpeg:"image/jpeg",
			jpg:"image/jpeg",
			js:"text/javascript",
			json:"application/json",
			pdf:"application/pdf",
			png:"image/png",
			svg:"image/svg+xml",
			swf:"application/x-shockwave-flash",
			tiff:"image/tiff",
			txt:"text/plain",
			wav:"audio/x-wav",
			wma:"audio/x-ms-wma",
			wmv:"video/x-ms-wmv",
			xml:"text/xml",
			download:"application/octet-stream"
		},
		compress:/html|js|css/ig,

		cookie:{
			lifeTime:30*24*3600,
			prefix:'NRWSID'
		}
	},

	server:{
		/*'backstage':{
			host:['localhost','127.0.0.1'],
			port:8931,
			root:__dirname+'/../backstage/module/',
			staticPath:__dirname+'/../backstage/static/',
			errorPage:{},
			router:{
				'index':['','index','index.html'],
			}
		},*/
		'ExampleA.com':{
			host:['localhost','127.0.0.1'],
			port:80,
			root:__dirname+'/../example/',
			staticPath:__dirname+'/../example/static/',
			errorPage:{
				//403:'403.html',
				//404:'404.html'
			},
			router:{
				'index':['','index','index.html'],
				'test':['test']
			}
		}
	},

	mongo:{
		'DATABASE_NAME':{
			host:'HOST',
			port:/* PORT */,
			user:'USER',
			pass:'PASS',
			col:['COL_A','COL_B']
		}
	},

	mail:{
		'NAME':{
			service:'Gmail',
			auth:{
				user:"USER",
				pass:"PASS"
			}
		}
	},

	log:{
		system:{
			color:32,
			filename:'system',
			path:'./log/',
			of:true
		},
		error:{
			color:31,
			filename:'error',
			path:'./log/',
			of:true
		}
	},

	dying:{
		session:{
			save:true,
			path:'./log/'
		}
	}
};