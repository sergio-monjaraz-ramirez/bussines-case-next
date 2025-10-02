import Link from 'next/link';

export default function NotFound() {
    return (
        <div data-testid="not-found" aria-label='Página no encontrada' className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1>404 - Página no encontrada</h1>
            <p>La página que buscas no existe.</p>
            <Link href="/" data-testid="back-home-link" aria-label="Volver al inicio">
               <span className="text-blue-500 hover:underline">
                        Volver al inicio
               </span>
            </Link>
        </div>
    );
}