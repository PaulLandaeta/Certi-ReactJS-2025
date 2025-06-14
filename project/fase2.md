### Fase 2 

## Casa de Cambios Digital Bolivia PRO

### MÓDULO 1: Gestión de Usuarios Avanzada (Autenticación + Context API + Roles)
Responsable: Luciano
Responsabilidades:

Login/registro con manejo central de sesión usando Context API

Manejo de 2 roles: admin y cliente

Autorización de rutas según rol (React Router)

Persistencia de sesión (localStorage o JSON Server mock)

Panel de perfil del usuario

Custom hook useAuth() con acceso al Context

Posibilidad de cambiar configuración de alertas o preferencias de moneda

Interacción con Zustand:

Almacenar temporalmente el usuario activo con Zustand para módulos que necesitan info ligera del usuario


### MÓDULO 2: Motor de Cotizaciones + Simulación + Zustand Global State
Responsable: Mateo
Responsabilidades:

Obtener cotizaciones oficiales y paralelas (simuladas)

Ejecutar simulaciones en tiempo real con setInterval (ej. cada 15 segundos cambia una cotización aleatoriamente)

Exponer cotizaciones vía Zustand global store

Implementar lógica de “volatilidad” para marcar cotizaciones inestables

Custom hook useQuotes() para leer y modificar cotizaciones

Interacción con Context:

Acceder a configuraciones del usuario (ej. tipo de alerta preferido)

### MÓDULO 3: Simulador de Transacciones + Historial Financiero + Visualización
Responsable: Andres
Responsabilidades:

Registrar transacciones simuladas (compra/venta por usuario o sistema automático)

Mostrar en tabla: cantidad, tipo, moneda, hora, cotización

Generar gráficos con filtros por fecha y casa de cambio

Persistencia en JSON Server o LocalStorage

Custom hook useTransactions() para insertar, leer, filtrar

Agregar métricas tipo dashboard (volumen por día, ganancias, etc.)

Interacción con Zustand:

Usa cotizaciones y usuario desde global store


### MÓDULO 4: Gestión de Casas de Cambio + Configuración Administrativa
Responsable: Alexia
Responsabilidades:

CRUD completo de casas de cambio (nombre, ubicación, monedas soportadas, capital, estado)

Cada casa tiene reglas: comisión, mínimo de capital, horario de operación

Control visual tipo “panel de administración”

Validación con Formik + Yup

Integración con Zustand: cada cambio en una casa debe impactar la simulación de cotización

Custom hook useExchangeManagement() para operaciones


## Sistema de Reservas y Turnos

Responsable: Ricardo

Responsabilidades:

Selección de estación, tipo de combustible, fecha y hora

Visualización de turnos activos por usuario

Cancelación de turno con confirmación visual (MUI Dialog + Snackbar)

Validaciones con Formik + Yup

Custom hook useBooking()

Uso de Context API para almacenar información del usuario activo

Zustand: para compartir la disponibilidad de horarios entre componentes

### MÓDULO 2: Panel de Administrador y Disponibilidad

Responsable: marian

Responsabilidades:

CRUD de estaciones, tanques y franjas horarias disponibles

Panel con filtros por estación, tipo de combustible, estado

Protección de acceso según rol usando Context API

Custom hook useStationAdmin() para administrar infraestructura

Validaciones con Formik + Yup

Zustand: para sincronizar cambios de disponibilidad en tiempo real

### MÓDULO 3: Sistema de Notificaciones y Alertas Inteligentes

Responsable: miguel

Responsabilidades:

Sistema de alertas con MUI Snackbar y prioridad

Notificar a usuarios cuando su turno esté próximo (simulado con setInterval)

Alertas visuales en caso de sobrecupo o cancelación automática

Hook personalizado useNotifier()

Persistencia de alertas vistas con localStorage

Zustand: gestiona el stack de notificaciones global

### MÓDULO 4: Reportes de Uso y Análisis de Demanda

Responsable: Dylan
Responsabilidades:

Visualización de métricas: cantidad de turnos por estación, tipo, hora pico, cancelaciones

Uso de gráficos (Chart.js, Recharts)

Filtros por fecha, estación, combustible

Exportación a CSV o PDF

Hook personalizado useReports()

Zustand: almacena datos agregados de forma temporal para compartir entre dashboards

## Sistema de Votación Ciudadana
### MÓDULO 1: Validación Documental y Registro Fotográfico

Responsable: Valeria 

Responsabilidades:

Registro de ciudadanos con validación de CI (formato y duplicado)

Subida de fotografía de respaldo del ciudadano (como medida de transparencia)

Almacenamiento de la foto en base64 o URL simulada en JSON Server

Visualización de la foto adjunta por el admin desde el panel

Validación de coincidencia entre nombre, CI y fotografía cargada

Hook personalizado useCitizenRegistry()

Uso de Context API para manejar datos del ciudadano en sesión

Interacción con Zustand:

Estado temporal del formulario activo y datos cargados para revisión

### MÓDULO 2: Gestión de Mesas y Recintos (Panel Admin)

Responsable: Zein
Responsabilidades:

CRUD completo de mesas y recintos

Vista en tabla editable con filtros por zona/localidad

Protección de ruta (solo para usuarios admin desde contexto)

Validaciones con Formik + Yup

Hook personalizado usePollingManagement()

Interacción con Zustand:

Estado compartido con lista de recintos y mesas disponibles para autoasignación

### MÓDULO 3: Papeleta Electoral, Simulación de Voto y Registro Legal

Responsable: Luis

Responsabilidades:

Visualización de papeleta de votación con opciones dinámicas (estilo realista)

Selección de postulante y emisión de voto validado por estado del usuario

Registro legal del voto con generación de comprobante en PDF o pantalla confirmatoria

Bloqueo del acceso a papeleta tras votar (por sesión y por backend)

Simulación visual de conteo en tiempo real (actualización de gráficos por votos)

Hook personalizado useVotingBallot()

Uso de setInterval para mostrar evolución de votos (dashboard)

Interacción con Zustand:

Lee datos del votante actual y postulantes

Actualiza estado de voto emitido y resultados temporales

### MÓDULO 4: Gestión de Postulantes y Reportes

Responsable:Rebe 

Responsabilidades:

CRUD completo de postulantes (solo admin)

Formulario con validaciones para registrar candidatos

Reporte de votos por candidato (contabilización visual)

Panel de administración con tarjetas/resumen de resultados

Hook personalizado useCandidates()

Interacción con Zustand:

Almacena datos de candidatos y resultados temporales para visualización global

## Precios Justos Ya

### MÓDULO 1: Gestión de Mercados y Ubicación (Alcaldía)

Responsable: Adrian
Responsabilidades:

CRUD completo de mercados y ubicaciones (nombre, zona, coordenadas)

Visualización en mapa (Leaflet, Mapbox o similar)

Filtros por zona, barrio o tipo

Hook personalizado useMarkets()

Interacción con Zustand:

Estado compartido con productos reportados por mercado

### MÓDULO 2: Publicación y Comparador de Productos (Población)

Responsable: Alex
Responsabilidades:

Formulario para publicar precio de producto (con validaciones)

Visualización de lista de productos por mercado y comparador por zona

Historial de precios por producto

Hook useProducts() para publicar y consultar

Context API:

Manejo de usuario logueado (cliente / alcaldía)

Zustand:

Estado centralizado de productos para análisis y comparador

### MÓDULO 3: Reportes y Ranking de Comercios (Población)

Responsable: Ivan
Responsabilidades:

Registro de reportes de precios injustos o escasez

Visualización de ranking de comercios más valorados y más reportados

Validaciones con Formik + Yup

Generación de resumen semanal

Hook personalizado useReports()

Zustand: para consolidar y cruzar reportes por mercado

### MÓDULO 4: Alertas y Notificaciones Inteligentes (Alcaldía)

Responsable: Dorian
Responsabilidades:

Monitoreo de productos con más de 3 reportes negativos

Activación de alerta para revisión por parte de la alcaldía

Notificaciones visuales con Snackbar y prioridad (alto/bajo)

Panel de control de alertas activas

Hook useAlerts()

Zustand: para notificaciones y estado global de alertas
