const COLORS = [
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700'
];

/**
 * Generates a consistent color from a string.
 * @param {string} name The input string (e.g., a username).
 * @returns {string} A color hex code.
 */
export const getColorByName = (name) => {
  if (!name) return COLORS[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Ensure 32bit integer
  }
  const index = Math.abs(hash % COLORS.length);
  return COLORS[index];
}; 