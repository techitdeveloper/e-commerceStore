

//Fetch the data from json file
fetch('todaysDeal.json')
    .then(response => response.json())
    .then(data => {
        //Display the product list

        const arrange = data.filter(product => {
            if (product.type !== "today") {
                return false;
            }
            return true;

        });

        const productList = document.querySelector('.product-list');
        productList.innerHTML = arrange.map(product => `
    <div class="card-deck product-look">
              
                <div class="card mb-4 box-shadow product-look-inside">
                    <div class="card-img"><img class="card-img-top" src="${product.image}" alt="${product.name}"></div>
                    <div class="card-body card-content">
                        <h2 class="card-title">${product.name}</h2>
                        <p class="card-text product-desc">${product.description}</p>
                        <p class="card-text product-price">$${product.price.toFixed(2)}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    `).join('');
    });

// Fetch fashion
//Fetch the data from json file
fetch('todaysDeal.json')
    .then(response => response.json())
    .then(data => {
        //Display the product list

        const arrange = data.filter(product => {
            if (product.type !== "fashion") {
                return false;
            }
            return true;

        });

        const productList = document.querySelector('.fashion');
        productList.innerHTML = arrange.map(product => `
<div class="card-deck product-look">
          
            <div class="card mb-4 box-shadow product-look-inside">
                <div class="card-img"><img class="card-img-top img-thumbnail" src="${product.image}" alt="${product.name}"></div>
                <div class="card-body card-content">
                    <h2 class="card-title text-center">${product.name}</h2>
                    <p class="card-text product-desc text-center">${product.description}</p>
                    <p class="card-text product-price text-center">$${product.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
`).join('');
    });


// Filter the product list for TODAY'S DEAL SECTION
const categoryFilter = document.getElementById('category-filter1');
const priceFilter = document.getElementById('price-filter1');

categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

    fetch('todaysDeal.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.filter(product => {
                
                if (selectedCategory && product.category !== selectedCategory) {
                    return false;
                }

                if (selectedPriceRange) {
                    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(parseFloat);
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                }
                if (product.type !== 'today') {
                    return false;
                }

                return true;
            });

            const productList = document.querySelector('.product-list');
            productList.innerHTML = filteredProducts.map(product => `
            <div class="card-deck product-look">
          
            <div class="card mb-4 box-shadow product-look-inside">
                <div class="card-img"><img class="card-img-top img-thumbnail" src="${product.image}" alt="${product.name}"></div>
                <div class="card-body card-content">
                    <h2 class="card-title text-center">${product.name}</h2>
                    <p class="card-text product-desc text-center">${product.description}</p>
                    <p class="card-text product-price text-center">$${product.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
            `).join('');
        });
});

priceFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;

    fetch('todaysDeal.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.filter(product => {
                
                if (selectedCategory && product.category !== selectedCategory) {
                    return false;
                }

                if (selectedPriceRange) {
                    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(parseFloat);
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                }
                if (product.type !== 'today') {
                    return false;
                }

                return true;
            });

            const productList = document.querySelector('.product-list');
            productList.innerHTML = filteredProducts.map(product => `
            <div class="card-deck product-look">
          
            <div class="card mb-4 box-shadow product-look-inside">
                <div class="card-img"><img class="card-img-top img-thumbnail" src="${product.image}" alt="${product.name}"></div>
                <div class="card-body card-content">
                    <h2 class="card-title text-center">${product.name}</h2>
                    <p class="card-text product-desc text-center">${product.description}</p>
                    <p class="card-text product-price text-center">$${product.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
            `).join('');
        });
});


// Filter the product list for FASHION SECTION
const categoryFilter2 = document.getElementById('category-filter2');
const priceFilter2 = document.getElementById('price-filter2');

categoryFilter2.addEventListener('change', () => {
    const selectedCategory = categoryFilter2.value;
    const selectedPriceRange = priceFilter2.value;

    fetch('todaysDeal.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.filter(product => {
                
                if (selectedCategory && product.category !== selectedCategory) {
                    return false;
                }

                if (selectedPriceRange) {
                    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(parseFloat);
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                }
                if (product.type !== 'fashion') {
                    return false;
                }

                return true;
            });

            const productList = document.querySelector('.fashion');
            productList.innerHTML = filteredProducts.map(product => `
            <div class="card-deck product-look">
          
            <div class="card mb-4 box-shadow product-look-inside">
                <div class="card-img"><img class="card-img-top img-thumbnail" src="${product.image}" alt="${product.name}"></div>
                <div class="card-body card-content">
                    <h2 class="card-title text-center">${product.name}</h2>
                    <p class="card-text product-desc text-center">${product.description}</p>
                    <p class="card-text product-price text-center">$${product.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
            `).join('');
        });
});

priceFilter2.addEventListener('change', () => {
    const selectedCategory = categoryFilter2.value;
    const selectedPriceRange = priceFilter2.value;

    fetch('todaysDeal.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.filter(product => {
                
                if (selectedCategory && product.category !== selectedCategory) {
                    return false;
                }

                if (selectedPriceRange) {
                    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(parseFloat);
                    if (product.price < minPrice || product.price > maxPrice) {
                        return false;
                    }
                }
                if (product.type !== 'fashion') {
                    return false;
                }

                return true;
            });

            const productList = document.querySelector('.fashion');
            productList.innerHTML = filteredProducts.map(product => `
            <div class="card-deck product-look">
          
            <div class="card mb-4 box-shadow product-look-inside">
                <div class="card-img"><img class="card-img-top img-thumbnail" src="${product.image}" alt="${product.name}"></div>
                <div class="card-body card-content">
                    <h2 class="card-title text-center">${product.name}</h2>
                    <p class="card-text product-desc text-center">${product.description}</p>
                    <p class="card-text product-price text-center">$${product.price.toFixed(2)}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
            `).join('');
        });
});