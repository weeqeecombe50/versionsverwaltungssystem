// Hilfsfunktionen für das Versionsverwaltungssystem

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

module.exports = { formatDate };