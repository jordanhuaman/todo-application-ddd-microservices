#!/bin/bash

echo "✅¿Qué comando deseas ejecutar?"
echo "1) npx drizzle-kit push"
echo "2) Salir"
read -p "Selecciona una opción [1-2]: " opcion

case $opcion in
    1)
        npx drizzle-kit push
        ;;
    2)
        echo "Saliendo..."
        ;;
    *)
        echo "Opción no válida."
        ;;
esac