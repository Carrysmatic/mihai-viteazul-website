import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Pagina nu a fost gasita</h2>
      <Link href="/">Apasa aici pentru a reveni pe pagina principala</Link>
    </div>
  )
}