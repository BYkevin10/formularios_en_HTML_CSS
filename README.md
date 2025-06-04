# 📝 Formulario Completo HTML

Un formulario interactivo con todos los tipos de input de HTML5, validaciones y visualización de resultados en tiempo real.

## 🚀 Características Implementadas

- ✅ Todos los tipos de inputs de HTML5
- ✅ Validaciones integradas en formulario
- ✅ Diseño responsive y moderno
- ✅ Organización por secciones lógicas

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 moderno (Flexbox, variables CSS)
- JavaScript vanilla (ES6+)

## 📂 Estructura del Proyecto
```	
FORMULARIOS_EN_HTML_CSS/
├── Formulario
│   ├── _CSS
│   │   └── styles.css
│   ├── _HTML
│   ├── _IMG
│   │   └── icon.png
│   ├── _JS
│   │   └── script.js
│   ├── .github
│   ├── .vscode
├── index.html # Archivo principal HTML
│   ├── LICENSE # Licencia del proyecto
├── README.md # Documentación del proyecto
```	


## 🎯 Lo Aprendido e Implementado

### 1. Estructura HTML Semántica
- Uso de `<fieldset>` y `<legend>` para agrupar campos relacionados
- Todos los tipos de inputs de HTML5 implementados:
  ```html
  <input type="text|email|tel|password|date|time|datetime-local|month|week|color|range|file|search|url|button|image|hidden">
  ```	
2. Validaciones Integradas
Validación con atributos HTML:

html
```
<input type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
```
Validación de teléfono con patrón específico:

html
```
<input type="tel" pattern="^3[0-9]{9}$" placeholder="Ej: 3001234567">
```	
