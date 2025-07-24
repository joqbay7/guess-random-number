# Conventional Commits Guide

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/) usado pelas principais empresas de tecnologia.

## 📋 Formato Padrão

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## 🏷️ Tipos de Commit

### Principais
- **feat:** Nova funcionalidade para o usuário
- **fix:** Correção de bug
- **docs:** Mudanças na documentação
- **style:** Formatação, ponto e vírgula, etc (sem mudança de código)
- **refactor:** Refatoração de código (sem nova funcionalidade ou correção)
- **perf:** Mudança que melhora performance
- **test:** Adição ou correção de testes
- **chore:** Tarefas de manutenção, configuração, etc

### Secundários
- **build:** Mudanças no sistema de build ou dependências
- **ci:** Mudanças em arquivos de CI/CD
- **revert:** Reverte um commit anterior

## ✅ Exemplos de Commits Bons

### Features
```bash
feat: add difficulty level selection
feat(ui): implement dark mode toggle
feat: add sound effects for user interactions
```

### Bug Fixes
```bash
fix: correct number validation edge case
fix(mobile): resolve layout overflow on small screens
fix: prevent multiple game resets simultaneously
```

### Documentation
```bash
docs: update installation instructions
docs: add API documentation for game functions
docs(readme): fix typo in usage section
```

### Refactoring
```bash
refactor: extract validation logic to separate module
refactor(css): consolidate color variables
refactor: simplify game state management
```

### Performance
```bash
perf: optimize animation rendering
perf: reduce bundle size by lazy loading images
```

### Styles
```bash
style: fix indentation in app.js
style: add missing semicolons
style: format CSS according to prettier rules
```

### Tests
```bash
test: add unit tests for guess validation
test: add integration tests for game flow
test(e2e): add end-to-end user interaction tests
```

### Chores
```bash
chore: update dependencies to latest versions
chore: add pre-commit hooks
chore(config): update eslint rules
```

## 🚫 Exemplos de Commits Ruins

```bash
# Muito vago
fix: bug

# Não segue padrão
Fixed the thing that was broken

# Muito longo no título
feat: add new feature that allows users to select difficulty levels and customize game settings with multiple options

# Mistura múltiplas mudanças
feat: add dark mode and fix mobile bug and update docs
```

## 💡 Dicas de Boas Práticas

### 1. Use Imperativos
```bash
✅ feat: add user authentication
❌ feat: added user authentication
❌ feat: adding user authentication
```

### 2. Mantenha o Título Conciso (≤ 72 caracteres)
```bash
✅ feat: implement password reset functionality
❌ feat: implement a comprehensive password reset functionality that sends emails
```

### 3. Use o Corpo para Explicar "Por Quê" e "Como"
```bash
feat: add input debouncing for search

Prevent excessive API calls when user types quickly.
Implements 300ms delay before triggering search request.

Resolves: #123
```

### 4. Use Breaking Changes Quando Necessário
```bash
feat!: change API response format

BREAKING CHANGE: The response format for /api/game has changed.
Before: { score: 100 }
After: { data: { score: 100 } }
```

### 5. Agrupe Commits Relacionados
```bash
# Ao invés de múltiplos commits pequenos
feat: add game timer functionality
feat: add timer display component  
feat: add timer reset on game restart

# Prefira um commit mais abrangente
feat: implement game timer with display and reset functionality
```

## 🔄 Workflow Recomendado

1. **Faça commits pequenos e focados**
2. **Teste antes de commitar**
3. **Use branches para features**
4. **Faça rebase para manter histórico limpo**

```bash
# Exemplo de workflow
git checkout -b feat/difficulty-levels
# ... fazer mudanças ...
git add .
git commit -m "feat: add difficulty level selection"
git checkout main
git pull origin main
git rebase main feat/difficulty-levels
git checkout main
git merge feat/difficulty-levels
```

## 📊 Ferramentas Úteis

### Commitizen
```bash
npm install -g commitizen
npm install -g cz-conventional-changelog
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

### Conventional Changelog
```bash
npm install -g conventional-changelog-cli
conventional-changelog -p angular -i CHANGELOG.md -s
```

### Husky (Pre-commit hooks)
```bash
npm install --save-dev husky
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

---

**Lembre-se:** Commits bem escritos facilitam:
- 📈 Code reviews mais eficientes
- 🔍 Debugging e troubleshooting
- 📝 Geração automática de changelogs
- 🤝 Colaboração em equipe
- 🚀 Releases automatizados
