
const bookSection=document.getElementById('book-section')
const searchBook=()=>{
    const searchInput=document.getElementById('search-input');
    const searchText=searchInput.value;
    // serch result condition check
    if(searchText===''){
      bookSection.innerHTML=`<h3 class="bg-danger p-5 text-center">Please type valid book name<h3>
      `
    }
    else{
      
    const url=`https://openlibrary.org/search.json?q=${searchText}`
          // clear search Text
          searchInput.value='';
          bookSection.innerHTML=''
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.docs))
    
    // Error handaling
    .catch(error =>displayError(error))
    }
    
    
}
const displaySearchResult=(books)=>{
  // use filter for good and expected output
  const filterResult=books.filter(search=>search.author_name !== undefined && search.cover_i !== undefined && search.title !== undefined && search.first_publish_year !== undefined)
    // console.log(filterResult)
    const displayResult=document.getElementById('search-result')
    const searchQuantity=document.getElementById('search-quantity')
    // new document create
    const createP=document.createElement('p')
createP.innerText=`You have found ${filterResult.length} books`
    displayResult.textContent=''
    searchQuantity.appendChild(createP)
  //  use forEach function
filterResult.forEach(book => {
    const div=document.createElement('div')
    div.classList.add('col');
    div.innerHTML=`<div class="card p-2" style="width: 22rem; height:500px">
    <img style="height:300px" class="card-img-top" alt="..." src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
    <div class="card-body">
      <h6 class="card-title ">Book Title: ${book.title}</h6>
      <h6 class="card-title text-primary">Author Name: ${book.author_name[0].slice(0,15)}</h6>
      <h6 class="card-title text-success"> First Publish Year: ${book.first_publish_year}</h6>
      
    </div>
  </div>
    `
    displayResult.appendChild(div)

});
}

    
  





