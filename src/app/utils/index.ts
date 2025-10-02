export const formatCurrency = (value: number, locale: string = 'es-MX', currency: string = 'MXN') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
}

export const formatDate = (dateString: string, locale: string = 'es-MX', options: Intl.DateTimeFormatOptions = {}) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, options).format(date);
}

