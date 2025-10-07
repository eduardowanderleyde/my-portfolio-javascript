# 🚀 Eduardo Wanderley - Portfolio Interativo

Portfolio moderno e interativo construído com arquitetura modular em JavaScript vanilla, CSS modular e HTML semântico.

## 👨‍💻 Sobre

Eduardo Wanderley - Web Developer, Engenheiro Mecatrônico e Pesquisador em Robótica & IA  
Mestre em Ciência da Computação - CIn/UFPE  
Recife, Pernambuco, Brasil 🇧🇷

## 🏗️ Arquitetura do Projeto

```
javascript/
├── index.html              # Estrutura HTML semântica
├── css/                    # Estilos modulares
│   ├── base.css           # Reset, variáveis, tipografia
│   ├── components.css     # Componentes reutilizáveis
│   ├── layout.css         # Layout e seções
│   └── animations.css     # Animações e transições
├── js/                     # JavaScript modular (ES6+)
│   ├── main.js            # Inicializador principal
│   ├── data/              # Dados da aplicação
│   │   └── portfolio.js   # Dados de projetos, skills, etc.
│   ├── components/        # Componentes JS
│   │   ├── cursor.js      # Cursor personalizado
│   │   ├── theme.js       # Toggle tema claro/escuro
│   │   ├── navigation.js  # Navegação e scroll
│   │   ├── typing.js      # Efeito de digitação
│   │   ├── projects.js    # Renderização de projetos
│   │   ├── skills.js      # Renderização de skills
│   │   └── contact.js     # Formulário de contato
│   └── utils/             # Utilitários
│       ├── scroll.js      # Scroll animations observer
│       └── effects.js     # Efeitos visuais (ripple, magnetic)
├── assets/                 # Recursos estáticos
└── .gitignore             # Arquivos ignorados
```

## ✨ Features

### 🎨 Interações Visuais
- **Cursor Personalizado**: Animado com delay suave
- **Tema Claro/Escuro**: Persistente com localStorage
- **Efeitos nos Botões**: Magnético, ripple e shine
- **Cards 3D**: Inclinação baseada no mouse
- **Parallax**: Efeito de profundidade no hero

### 🔧 Componentes Modulares
- Sistema de componentes reutilizáveis
- Dados centralizados e fáceis de atualizar
- Renderização dinâmica de conteúdo
- Arquitetura escalável

### 📱 Responsivo e Acessível
- Mobile-first design
- Semântica HTML5
- ARIA labels
- Performance otimizada

## 🚀 Como Usar

1. **Clone o repositório**
```bash
git clone https://github.com/eduardowanderleyde/portfolio.git
```

2. **Abra o projeto**
```bash
cd portfolio
```

3. **Execute localmente**
- Abra `index.html` no navegador
- Ou use um servidor local:
```bash
# Python
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

## 🎯 Deploy no GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/eduardowanderleyde/portfolio.git
git push -u origin main
```

Configure GitHub Pages:
1. Vá em Settings → Pages
2. Source: Deploy from branch
3. Branch: main / (root)
4. Save

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript ES6+**: Modules, Classes, Async/Await
- **Git**: Controle de versão

## 📝 Personalização

### Atualizar Dados
Edite `js/data/portfolio.js` para modificar:
- Projetos
- Habilidades
- Informações de contato
- Textos do hero

### Cores
Modifique as variáveis CSS em `css/base.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... */
}
```

## 📄 Licença

MIT License - Livre para uso pessoal e comercial

## 📞 Contato

- **Email**: wanderley.eduardo@gmail.com
- **GitHub**: [@eduardowanderleyde](https://github.com/eduardowanderleyde)
- **Lattes**: [Ver perfil](http://lattes.cnpq.br/seu-lattes)

---

**Desenvolvido com ❤️ por Eduardo Wanderley**
