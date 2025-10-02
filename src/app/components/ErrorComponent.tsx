const ErrorComponent = ({ message }: { message: string }) => {
    return (
        <div
            className="max-w-4xl mx-auto p-4"
            data-testid="error-component-container"
            aria-label="Contenedor del mensaje de error"
        >
            <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
                data-testid="error-message"
                aria-label={`Mensaje de error: ${message}`}
            >
                <strong className="font-bold" data-testid="error-title" aria-label="Título del error">
                    Error: 
                </strong>
                <span className="block sm:inline" data-testid="error-description">
                    {message}
                </span>
            </div>
        </div>
    );
};

export default ErrorComponent;