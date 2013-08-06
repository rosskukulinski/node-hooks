#!/usr/bin/env node
;(function () { // wrapper in case we're in module_context mode

	var commands = [
		"help",
		"init"
	]

	var run = function(args){
		if(commands.indexOf(args[0])!=-1){
			require("./commands/"+args[0])(args.slice(1));
		}
		else{
			console.error("`"+args[0]+"` is not a valid command");
			require("./commands/help")();
		}
	}

	process.title = "hooks";

	var userArgs = process.argv.slice(2);

	if(userArgs.length==0){
		require("./commands/help")();
	}
	else{
		run(userArgs);
	}

})();