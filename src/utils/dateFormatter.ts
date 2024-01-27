export const formatDate = (date: Date) => {
    const newDate = new Date(date);
    return newDate.toLocaleString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}