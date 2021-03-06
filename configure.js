//stops install/uninstall command if on a global run
if(process.env.npm_config_global!=="true" && process.env.NODE_HOOKS != "DO_NOT_INSTALL"){

	var fs = require("fs");

	if(fs.existsSync(process.cwd()+"/../.bin/hooks")){
		//being installed a project folder
		var exec = require("child_process").exec;
		var command = "cd ../.. && "+process.cwd()+"/../.bin/hooks "+process.argv[2];
		exec(command, function(err, stdout, stderr){
			console.log(stdout);
			console.log(stderr);
			if(err){
				process.exit(err.code);
			}
		});
	}
	else{
		//being installed itself
		require(process.cwd()+"/commands/"+process.argv[2])([]);
	}

	
}