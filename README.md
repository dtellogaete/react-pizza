# React proyecto Pizzería

El proyecto cuenta con las siguientes vistas 

```<Route path="/" element={<Home/>} />      
<Route path="/contacto" element={<Contacto/>} />
<Route path="/pizza/:id" element={<Pizza/>} />
<Route path="/carrito" element={<Carrito/>} />              
<Route path="*" element={<NotFound />} />```

* Home página inicia en donde se encuentra el menú de las pizzas, permite la funcionalidad de ver detalles de cada producto y añadirlo al carrito.

* Pizza: muestra el detalle de cada pizza

* Carrito: muestra los productos agregados al carrito, permite añadir o restar productos.

* NotFound: 