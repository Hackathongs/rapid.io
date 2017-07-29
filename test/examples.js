

const rapid = require('rapid-io') // RequireJS

const rapidClient = rapid.createClient('NDA1OWE0MWo1b3AzYTBiLnJhcGlkLmlv')
//NDA1OWE0MWo1b3AzYWFxLnJhcGlkLmlv
//

// var p = [];


// for(let i = 0; i < 10000; i++)
// {
// 	p[i] = i;
// }

// const toDos = rapidClient.collection('marvin');

// // reference a new document
// const newToDo = toDos .newDocument();



// newToDo.merge({
// 	completed: true,
// 	poop: "asass"
// });

//make a pointer to a new or exisiting table
function createOrQueryTable(name)
{
	const collect = rapidClient.collection(name);
	return collect;
}

//create a docutment with a unquie ID but not dat and
//gets a pointer to that ID
// use mutate 
function createNewDocument(tableName, docName)
{
	const collect = createOrQueryTable(tableName);
	const doc = collect.newDocument(docName);
	return doc;
}

//DANGER
//easy way to update a field
//post: table name and which id and the JSON
//you got to make sure the JSON is exactly the same or it will make a new fieldåç
function mergeSpecificDocument(table,docId,feilds)
{
	const toDos = rapidClient.collection(table)
					.document(docId)
					.merge(feilds);
}	

//easy way to append to a table
//this is to add
//if a doc does not exsist it will create a new one
function mutateSpecificDocument(table,docId,field)
{
	rapidClient.collection(col)
				.document(docId)
				.mutate(field);
}


function deleteSpecificId(table, docId)
{
	const toDos = rapidClient.collection(table)
					.document(docId)
					.delete();
}


//example
/*
function mutateDocument(docId)
{
	const toDos = rapidClient.collection('marvin');
	const toDo = toDos.document(docId);
	toDo.merge({
		completed:true
	});
}
*/


//mutateSpecificDocument("a", "2", {"max": "belman"});
//deleteSpecificId("ryebO0LqIb");






