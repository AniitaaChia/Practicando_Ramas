// Combinamos las recetas de ambos colaboradores
const recipes = [...recipes1, ...recipes2];

const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('recipeSearch');
const categoryBtns = document.querySelectorAll('.category-btn');

function displayRecipes(filteredRecipes) {
    recipesGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <span class="recipe-tag">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-desc">${recipe.desc}</p>
                <div class="recipe-meta">
                    <span>🕒 ${recipe.time}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Inicializar
displayRecipes(recipes);

// Buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipes.filter(r => 
        r.title.toLowerCase().includes(term) || 
        r.desc.toLowerCase().includes(term)
    );
    displayRecipes(filtered);
});

// Filtro por categorías
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // UI Update
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            displayRecipes(recipes);
        } else {
            const filtered = recipes.filter(r => r.category === category);
            displayRecipes(filtered);
        }
    });
});
