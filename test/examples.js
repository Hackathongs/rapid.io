

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


function createNewtable(name)
{
	const collect = rapidClient.collection(name);
	return collect;
}

function createNewTableWithDocument(name, tableName)
{
	const collect = createNewtable(name);
	const doc = collect.newDocument(tableName);
	return doc;
}

//easy way to update a field
//post: table name and which id and the JSON
//you got to make sure the JSON is exactly the same or it will make a new fieldåç
function mergeSpecificDocument(table,docId,feilds)
{
	const toDos = rapidClient.collection(table);
	const toDo = toDos.document(docId);
	toDo.merge(feilds);
}

//easy way to append to a table
function mutateSpecificDocument(col,docId,field)
{
	rapidClient.collection(col).document(docId).mutate(field);
}

//example
function mutateDocument(docId)
{
	const toDos = rapidClient.collection('marvin');
	const toDo = toDos.document(docId);
	toDo.merge({
		completed:true
	});
}

function deleteSpecificId(table, docId)
{
	const toDos = rapidClient.collection(table)
					.document(docId)
					.delete();
}

mutateSpecificDocument("marvin", "133", {"max": "belman"});
//deleteSpecificId("ryebO0LqIb");