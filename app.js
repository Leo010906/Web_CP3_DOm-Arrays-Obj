const produtos = [
    { nome: "Bolo de red velvet", preco: 25, categoria: "Bolos", disponibilidade: true, imagem: "./img/bolo.jpg"},
    { nome: "Torta de frutas vermelhas", preco: 25, categoria: "Tortas", disponibilidade: false, imagem: "./img/torta.jpg" },
    { nome: "Tiramissu", preco: 30, categoria: "Especiais", disponibilidade: true, imagem: "./img/tiramissu.jpg" },
    { nome: "Bolo de morango", preco: 25, categoria: "Bolos", disponibilidade: true, imagem: "./img/bolo_morango.jpg" },
    { nome: "Torta de limão", preco: 25, categoria: "Tortas", disponibilidade: false, imagem: "./img/limao.jpg" },
    { nome: "Bolo de chocolate", preco: 20, categoria: "Bolos", disponibilidade: true, imagem: "./img/bolo_choc.jpg" },
    { nome: "Bolo de churros", preco: 25, categoria: "Bolos", disponibilidade: true, imagem: "./img/bolo-de-churros.jpg" },
    { nome: "Torta de chocolate", preco: 25, categoria: "Tortas", disponibilidade: false, imagem: "./img/torta_choc.jpg" },
    { nome: "Torta de maça", preco: 200, categoria: "Tortas", disponibilidade: true, imagem: "./img/torta_maca.jpg" },
    { nome: "Cheesecake de pistache", preco: 30, categoria: "Especiais", disponibilidade: true, imagem: "./img/chess_pista.jpg" },
    { nome: "Pave de chocolate", preco: 35, categoria: "Especiais", disponibilidade: false, imagem: "./img/peve.jpg" },
    { nome: "Cheesecake de frutas vermelhas", preco: 30, categoria: "Especiais", disponibilidade: false, imagem: "./img/chess_frutas.jpg" }
];

const container = document.getElementById('produtosContainer');
const listarTodosBtn = document.getElementById('listarTodos');
const filtrarBtn = document.getElementById('filtrarBtn');
const categoriaSelect = document.getElementById('categoriaSelect');
const disponiveisCheckbox = document.getElementById('disponiveisCheckbox');


function listarProdutos(lista) {
    container.innerHTML = '';
    lista.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('produto');
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>${produto.disponibilidade ? 'Disponível' : 'Indisponível'}</p>
        `;
        container.appendChild(div);
    });
}

listarTodosBtn.addEventListener('click', () => {
    listarProdutos(produtos);
});

filtrarBtn.addEventListener('click', () => {
    const categoria = categoriaSelect.value;
    const somenteDisponiveis = disponiveisCheckbox.checked;

    const filtrados = produtos.filter(p => {
        const categoriaOk = categoria === '' || p.categoria === categoria;
        const disponibilidadeOk = !somenteDisponiveis || p.disponibilidade;
        return categoriaOk && disponibilidadeOk;
    });

    listarProdutos(filtrados);
});
