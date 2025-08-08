
# 📖 Book Finder (React.js)

![Mockup](/public/mockup.webp)

Aplicación web para buscar libros utilizando la API de **Google Books**.
Permite agregar libros a una lista de favoritos y cambiar entre **modo oscuro** y **modo claro** de forma dinámica.

---

## 🧠 Tecnologías y conceptos aplicados

* **React Router** (`BrowserRouter`, `Routes`, `Link`, `Outlet`, `useLocation`)
* **Context API** (`useContext`)
* **Referencias** (`useRef`)
* **Limpieza de eventos** (`useEffect` con `return`)
* **Custom Hooks** (`useBooks`)
* **Variables de entorno** (`.env`)
* **Persistencia local** (`localStorage`)
* **Consumo de APIs** con `fetch` y `async/await`
* **Manejo de errores** con `try/catch` y `throw new Error()`
* **Modularización y delegación de responsabilidades** (`/hooks`, `/pages`, `/services`, `files.js`, etc.)
* **Ciclo de vida de componentes**: montaje, actualización (re-render) y desmontaje
* **Tailwind CSS** (modo oscuro, diseño responsive, transiciones, clases personalizadas con `@apply`, etc.)

---

## 🛠️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuUsuario/book-search-mvp.git
cd book-search-mvp
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade tu clave de la API de Google Books:

```bash
VITE_GOOGLE_BOOKS_API_KEY=tu_clave_aqui
```

Puedes obtener una clave gratuita desde:
[https://console.cloud.google.com/](https://console.cloud.google.com/)

### 4. Ejecutar el proyecto

```bash
npm run dev
```

El proyecto estará disponible en:
[http://localhost:5173](http://localhost:5173) *(por defecto con Vite)*

