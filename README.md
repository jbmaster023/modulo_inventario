# Módulo de Productos y Pedidos

## Instalación

1. Clonar el repositorio.
2. Crear los archivos de entorno:
   - Copiar `api/.env.example` a `api/.env` y ajustar credenciales.
   - Crear `web/.env` con `REACT_APP_API_URL=http://tudominio.com/api`.
3. Ejecutar Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. Acceder a:
   - Frontend: http://localhost:3000
   - API: http://localhost:4000

## EasyPanel

Para desplegar en EasyPanel:
1. Crear un nuevo proyecto Docker Compose.
2. Subir `docker-compose.yml` desde el raíz del zip.
3. Configurar variables de entorno según `.env.example`.
4. Iniciar los servicios y asignar puertos/dominios.
