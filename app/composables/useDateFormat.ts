export const useDateFormat = () => {
    const formatDate = (value: any, format = 'default', customLocale = 'nl') => {
        const date = new Date(value);
        const locale = customLocale || navigator.language || 'nl'; // Set 'nl' as the default

        switch (format) {
            case 'long':
                return date.toLocaleString([locale], {
                    month: 'long',
                    weekday: 'short',
                });
            case 'short':
                return date.toLocaleString([locale], {
                    month: 'long',
                    weekday: 'short',
                    day: '2-digit',
                });
            case 'dayMonth':
                return date.toLocaleString([locale], {
                    month: 'long',
                    day: 'numeric',
                });
            case 'weekday':
                return date.toLocaleString([locale], {
                    weekday: 'short',
                });
            case 'day':
                return date.toLocaleString([locale], {
                    day: '2-digit',
                });
            case 'dateShort':
                return date.toLocaleString([locale], {
                    month: "short",
                    weekday: "short",
                    day: "2-digit",
                });
            case 'dateLong':
                return date.toLocaleString([locale], {
                    month: "long",
                    weekday: "long",
                    day: "2-digit",
                });
            case 'timeShort':
                return date.toLocaleString([locale], {
                    hour: "2-digit",
                    minute: "2-digit",
                });
            default:
                return date.toLocaleString([locale], {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                });
        }
    };

    return {formatDate};
};