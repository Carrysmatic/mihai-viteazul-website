'use client'
 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Ceva nu a mers cum trebuie!</h2>
        <button onClick={() => reset()}>Reincearca</button>
      </body>
    </html>
  )
}