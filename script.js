async function searchRecipe()
{
    try
    {
      const query=document.getElementById('query').value;
      if(query==="")
      {
        document.getElementById('display').innerHTML="";
        document.getElementById('alert').innerHTML='Field is empty...';
        return;
      }
      
      const baseURL='https://api.spoonacular.com/recipes/complexSearch';
      const apiKey='e01ab11d1335486ca448d1db5e7c44b1';
      const result=await fetch(`${baseURL}?query=${query}&apiKey=${apiKey}`);
      const res=await result.json();
      const list=res.results;
      if(result.ok && list.length>0)
      {
      const display=document.getElementById('display');
      display.classList.add('display')
      for(i=0;i<list.length;i++)
      {
        const src=list[i].image;
        const title=list[i].title;
        const id = list[i].id;

        if(src && title)
        {
        const div=document.createElement('div');
        const img=document.createElement('img');
        div.classList.add('picframe');

        img.src=src;
        img.alt='Recipe image';
        const p=document.createElement('h4');
        p.innerHTML=title;

        const a=document.createElement('a');
        a.href=`recipe.html?id=${id}`;

        a.appendChild(img);
        a.appendChild(p);
        div.appendChild(a);
        display.appendChild(div);
        }
      }
      document.getElementById('query').value="";
      document.getElementById('alert').innerHTML="";
     
    }
    else
    {
      document.getElementById('display').innerHTML="";
      document.getElementById('alert').innerHTML="No recipe is found...";
      return;
    }
    }
    catch(err)
    {
      console.log(err);
    }
  
}
document.addEventListener('keypress',(e)=>{
  if(e.key==='Enter')
  searchRecipe()
});


