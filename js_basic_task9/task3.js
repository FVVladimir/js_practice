import fetch from "node-fetch";    

async function getFetchForId(id){
      const resp = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const answ = await resp.json();
       
        // const [id, body] = answ; 
        console.log(answ.id,'\n', answ.body)
    };

    
async function checkId(id){
      const resp = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const answ = await resp.json();

      if(!answ.id){
        throw new Error ('not valid id')
      }    
    };

getFetchForId(7);    
checkId(107);    