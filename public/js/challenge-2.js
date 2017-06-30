/**
*	  Write your solution to Challenge 2 in this file
*/
function generateEsQuery(queryString, selectedUser) {
  return {
    "query": {
	"bool":{
	"must":[
     {
	"match":{
      "query_string" : {
        "query" : "user.screen_name": selectedUser
      }
    }
  }
 }
}
