export default function formatDepartureWindow({ start, end }) {
  return {
    days: {
      start: start.toISOString(),
      end: end.toISOString(),
    },
    timeOfDay: {
      start: start.format('HH:mm'),
      end: start.format('HH:mm'),
    },
  };
}
