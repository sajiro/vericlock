export function convertLineBreaksToHtml(text: string): string {
  return text.replace(/\n/g, "<br>");
}
