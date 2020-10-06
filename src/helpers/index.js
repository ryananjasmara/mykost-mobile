export function thousandSeparator(value) {
  return `${value
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&.')
    .slice(0, -3)}`;
}

export function rupiahFormat(value) {
  return `Rp${value
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&.')
    .slice(0, -3)}`;
}

export function cutLongString(string) {
  if (string.length > 130) {
    return `${string.substring(0, 130)}...`;
  } else {
    return string;
  }
}
