import DOMPurify from "dompurify";

let DOMPurifyInstance: typeof DOMPurify;

if (typeof window === "undefined") {
  // Server-side usage
  const { JSDOM } = require("jsdom");
  const window = new JSDOM("").window;
  DOMPurifyInstance = DOMPurify(window);
} else {
  // Client-side usage
  DOMPurifyInstance = DOMPurify;
}

export function formatContent(
  content: string | undefined | null
): string | undefined | null {
  if (!content) return content;

  // Sanitize the content
  const sanitizedContent = DOMPurifyInstance.sanitize(content);

  return (
    sanitizedContent
      // Remove <p> tags wrapping <img> tags
      .replace(/<p>(\s*<img [^>]+>\s*)<\/p>/g, "$1")
      // Ensure every <img> tag has the py-[50px] class, merging with existing classes if present
      .replace(
        /<img([^>]*class=['"])([^'"]*)(['"][^>]*>)/g,
        "<img$1$2 my-[50px]$3"
      )
      .replace(/<img(?![^>]*class=)([^>]*)>/g, "<img class='my-[50px]' $1>")
      .replace(/<p>/g, "<p class='text-[16px] md:text-[18px] mb-[20px]'>")
      .replace(/<h2>/g, "<h2 class='text-2xl font-bold'>")
      .replace(/<h3>/g, "<h3 class='text-[35px] font-semibold mt-[50px]'>")
      .replace(/<h4>/g, "<h4 class='text-[24px] font-semibold'>")
      .replace(/<h5>/g, "<h5 class='text-base font-bold'>")
      .replace(/<h6>/g, "<h6 class='text-sm font-bold'>")
      .replace(/<strong>/g, "<strong class='font-bold'>")
      .replace(/<em>/g, "<em class='italic'>")
      .replace(/<ul>/g, "<ul class='list-disc pl-4'>")
      .replace(/<ol>/g, "<ol class='list-decimal pl-4'>")
      .replace(/<a /g, "<a class='text-black underline' ")
      .replace(
        /<blockquote>/g,
        "<blockquote class='border-l-4 border-gray-500 pl-4'>"
      )
  );
}
