import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1>404 - Página no encontrada</h1>
            <p>La página que buscas no existe.</p>
            <Link href="/">
               <span className="text-blue-500 hover:underline">
                        Volver al inicio
               </span>
            </Link>
        </div>
    );
}