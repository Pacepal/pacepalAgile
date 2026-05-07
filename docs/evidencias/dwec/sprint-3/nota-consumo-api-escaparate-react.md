# Nota técnica - Consumo API del escaparate React

Fecha de verificación: 2026-05-07.

## Endpoint real usado

- API PHP real: `GET /src/api/index.php/api/productos`
- URL verificada en local: `http://localhost/pacepalAgile/src/api/index.php/api/productos`

## Resultado verificable

Comprobación ejecutada en PowerShell con `Invoke-RestMethod`:

```text
status=ok
count=6
```

## Relacion con el cliente React

El escaparate React consume ese origen en `frontend-react/src/hooks/useProducts.js` mediante:

- `requestJson('/productos')` como origen principal.
- `loadStaticData('productos')` solo como fallback cuando la API no esta disponible.

Con esto, la carga inicial del escaparate usa datos reales de la API PHP en entorno local.
