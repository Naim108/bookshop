
const bookSection=document.getElementById('book-section')
const displayResult=document.getElementById('search-result')
const searchQuantity=document.getElementById('search-quantity')
const searchBook=()=>{
    const searchInput=document.getElementById('search-input');
    const searchText=searchInput.value;
    // serch result condition check
    if(searchText===''){
      displayResult.textContent=''
      searchQuantity.innerHTML = ''
      bookSection.innerHTML=`<h3 class="text-danger  text-center">Invalid Book name.Please type valid book name<h3>
      `
      return;
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
  const filterResult=books.filter(search=>search.author_name !== undefined && search.cover_i !== undefined && search.title !== undefined && search.first_publish_year !== undefined && search.publisher !== undefined)

    // new document create
    const createP=document.createElement('p')
createP.innerText=`You have ${filterResult.length} results found`
    displayResult.textContent=''
    searchQuantity.innerHTML = ''
    searchQuantity.appendChild(createP)
  //  use forEach function

filterResult.forEach(book => {
    const div=document.createElement('div')
    div.classList.add('col');
    div.innerHTML=`<div class="card shadow p-3 mb-5 rounded" style="width: 22rem; height:500px">
    <img style="height:300px" class="card-img-top" alt="..." src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
    <div class="card-body">
      <h6 class="card-title ">Book Title: <span class="text-primary"> ${book.title}</span> </h6>
      <h6 class="card-title ">Author Name: <span class="text-primary"> ${book.author_name[0].slice(0,15)}</span> </h6>
      <h6 class="card-title">Publisher: <span class="text-primary">${book.publisher[0]}</span> </h6>
      <h6 class="card-title">First Publish Date: <span class="text-primary">${book.first_publish_year}</span</h6>
    </div>
  </div>
    `
    displayResult.appendChild(div)

}); 
}

    
  





