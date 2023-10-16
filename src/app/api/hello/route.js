// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

export const runtime = "edge";

export async function GET(request) {
  return new Response(JSON.stringify({ name: "Andrew Sipes" }));
}

// export default async function GET(request) {
//   try {
//     const response = await fetch(
//       "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
//     );
//     const data = await response.json();
//     return new Response(JSON.stringify(data));
//   } catch (error) {
//     return new Response({ error: "Error fetching data" });
//   }
// }
