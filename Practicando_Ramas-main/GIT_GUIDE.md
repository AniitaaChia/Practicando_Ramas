# Guía de Git: Trabajo con Carpetas y Ramas

Esta guía explica cómo trabajar en carpetas separadas usando ramas para una organización total.

## 1. La Nueva Estructura
Para que cada uno tenga su espacio totalmente aislado, hemos dividido los datos en dos carpetas:
```
quantum-event/
├── data1/           <-- Espacio de Persona 1
│   └── data1.js
├── data2/           <-- Espacio de Persona 2
│   └── data2.js
├── index.html
├── script.js
└── style.css
```

---

## 2. Flujo de Trabajo con Ramas (Paso a Paso)

### Paso 1: Crear la rama para tu cambio
Antes de editar NADA, crea una rama propia:
```bash
# Asegúrate de estar en main y actualizado
git checkout main
git pull origin main

# Crea tu rama (ej: 'persona1-pizza')
git checkout -b persona1-pizza
```

### Paso 2: Trabajar en TU carpeta
1. Persona 1 edita `data1/data1.js`.
2. Persona 2 edita `data2/data2.js`.

### Paso 3: Subir tu rama
```bash
git add .
git commit -m "Añadida receta de Pizza en data1"
git push origin persona1-pizza
```

---

## 3. Fusionar (Merging)

Ahora que tus recetas están en tu rama en internet, hay que unirlas al proyecto principal.

### Opción pull request (Recomendada)
1. Ve a GitHub.
2. Abre un **Pull Request** de `persona1-pizza` hacia `main`.
3. Dale a **Merge**.

### Opción consola
```bash
git checkout main
git pull origin main
git merge persona1-pizza
git push origin main
```

---

## 4. El "Switch" (Cambio de Contexto)
- `git checkout main`: Vuelves al proyecto "oficial".
- `git checkout <tu-rama>`: Vuelves a tus cambios "en progreso".

> [!TIP]
> Al tener carpetas distintas (`data1/` y `data2/`), podéis incluso trabajar en la misma rama sin pisaros, pero lo ideal para practicar es que cada uno use su propia rama y luego hagáis el `merge`.
