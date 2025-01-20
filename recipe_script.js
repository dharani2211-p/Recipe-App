window.onload= async function () {

  const urlparam=new URLSearchParams(window.location.search);
  const id=urlparam.get('id');
  if(id)
{
  try
  {
    const baseURL=`https://api.spoonacular.com/recipes/${id}/information`;
    const api='e01ab11d1335486ca448d1db5e7c44b1';
    const res=await fetch(`${baseURL}?apiKey=${api}`);
    const recipe= await res.json();
    
    document.getElementById('title').innerHTML=recipe.title;
    document.getElementById('image').src=recipe.image;
    document.getElementById('instructions').innerHTML=recipe.instructions;

  }
  catch(err)
  {
    console.log(err);
  }

}

  
}