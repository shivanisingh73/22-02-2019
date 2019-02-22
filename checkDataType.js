function checkDataType(value){
	if(isNaN(value) && typeof value === 'number')      //checks for NaN
	{
		console.log("NaN");
		console.log(value);
	}
	if(value === null && typeof value === 'object')    //checks for null
	{
		console.log("Null");
		console.log(value);
	}
	else if(typeof value == 'string' || value instanceof String)    //checks for string
	{
		console.log("String");
		console.log(value);
	}
	else if(typeof value == 'number' && isFinite(value))             //checks for number
	{
		console.log("Number");
		console.log(value);
	}
	else if(typeof value === 'boolean')                              //checks for boolean
	{
		console.log("Boolean");
		console.log(value);
	}
	else if(value && typeof value === 'object' && value.constructor === Object)   //checks for Object
	{
		console.log("Object");
		var key1=Object.keys(value);
		var values1=Object.values(value);
		console.log("{")
		key1.map((x,i)=>{
			console.log(x+":"+values1[i]);
		})
		console.log("}")
	}
	else if(value && typeof value === 'object' && value.constructor === Array)    //checks for Array of Objects & Array
	{
		if(value[0].constructor === Object){
			console.log("Array of Objects");
			value.map( (val)=>{
			var key=Object.keys(val);
			var values=Object.values(val);
			console.log("{")
			key.map((x,i)=>{
				console.log(x+":"+values[i]);
			})
			console.log("}")
			})
		}	
		else{                                                             //condition for Array            
			console.log("Array");
			console.log(value);
		}
	}
	else if(typeof value === "undefined")                         //checks for undefined
	{ 
		console.log("undefined");
	}
}checkDataType([{"id":1},{"id":2}])
checkDataType(123);
checkDataType(null)
checkDataType(NaN)
checkDataType('string')
checkDataType({"id":7})
checkDataType()
checkDataType([1,2,3])
checkDataType(true)